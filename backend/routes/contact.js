const express = require("express");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const Message = require("../models/Message");

const router = express.Router();

function validateBody({ name, email, subject, message }) {
  const errors = {};
  if (!name || !name.trim()) errors.name = "Name is required.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "A valid email is required.";
  if (!subject || !subject.trim()) errors.subject = "Subject is required.";
  if (!message || message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

router.post("/", async (req, res) => {
  const errors = validateBody(req.body || {});
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  const { name, email, subject, message } = req.body;

  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      success: false,
      message: "MongoDB is not connected. Please configure MONGODB_URI.",
    });
  }

  let savedMessage;
  try {
    savedMessage = await Message.create({ name, email, subject, message });
  } catch (err) {
    console.error("[contact] Failed to save message:", err.message);
    return res.status(500).json({
      success: false,
      message: "The message could not be saved to the database.",
    });
  }

  const transporter = getTransporter();
  if (!transporter) {
    return res.status(503).json({
      success: false,
      message: "Email delivery is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_RECEIVER_EMAIL.",
    });
  }

  try {
    const emailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      `Message:`,
      message,
    ].join("\n\n");

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Portfolio Contact - ${subject}`,
      text: emailBody,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
    });
  } catch (err) {
    console.error("[contact] Failed to send email:", err.message);
    return res.status(502).json({
      success: false,
      message: "The message was saved, but the email notification could not be delivered.",
    });
  }

  return res.status(200).json({ success: true, message: "Message received.", data: savedMessage });
});

module.exports = router;
