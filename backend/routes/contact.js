const express = require("express");
const nodemailer = require("nodemailer");
const Message = require("../models/Message");
const connectDB = require("../config/db");

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

  try {
    const dbReady = await connectDB();
    let savedMessage = null;

    if (dbReady) {
      try {
        savedMessage = await Message.create({ name, email, subject, message });
      } catch (err) {
        console.error("[contact] Failed to save message:", err.message);
      }
    } else {
      console.error("[contact] MongoDB unavailable. Message will still be processed as a contact submission.");
    }

    const transporter = getTransporter();
    if (transporter) {
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
      }
    } else {
      console.error("[contact] SMTP is not configured. Email could not be sent.");
    }
  } catch (err) {
    console.error("[contact] Unexpected error:", err.message);
  }

  return res.status(200).json({
    success: true,
    message: "Thank you for contacting me! I will get back to you soon.",
  });
});

module.exports = router;
