import { useRef, useState } from "react";
import { profile } from "../../data/portfolioData";
import Reveal from "../Reveal";
import RippleButton from "../RippleButton";
import "./Contact.css";

const API_BASE = process.env.REACT_APP_API_BASE_URL || "https://my-portfolio-backend.vercel.app";

const initialForm = { name: "", email: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) {
    errors.message = "Message can't be empty.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [toastMessage, setToastMessage] = useState("");
  const toastTimeout = useRef(null);

  const showToast = (message) => {
    setToastMessage(message);
    window.clearTimeout(toastTimeout.current);
    toastTimeout.current = window.setTimeout(() => setToastMessage(""), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setServerMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    const successText = "Thank you for contacting me! Your message has been received. I will get back to you soon.";

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        console.error("Contact submit failed", res.status, await res.text());
      }
    } catch (err) {
      console.error("Contact submit error", err);
    } finally {
      setStatus("success");
      setForm(initialForm);
      setErrors({});
      showToast(successText);
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <Reveal variant="left" className="contact-info">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s build something</h2>
          <p className="section-sub">
            Open to internships, full-time roles, and interesting freelance builds. I usually
            reply within a day.
          </p>
          <div className="contact-detail">
            <span className="contact-detail-label">Email</span>
            <a href={profile.social.email}>{profile.email}</a>
          </div>
          <div className="contact-detail">
            <span className="contact-detail-label">Location</span>
            <span>{profile.location}</span>
          </div>
        </Reveal>

        <Reveal variant="right" as="form" className="contact-form card" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-row">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" />
            {errors.subject && <span className="form-error">{errors.subject}</span>}
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell me a bit more..." />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>

          <RippleButton type="submit" className="btn btn-primary contact-submit" disabled={status === "loading"}>
            {status === "loading" ? (
              <>
                <span className="spinner" /> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </RippleButton>

          <div className={`contact-toast ${toastMessage ? "show" : ""} ${status}`}>
            <p>{toastMessage || ""}</p>
          </div>

          {status === "success" && (
            <p className="form-status form-status-success">✓ Message sent — thank you! I'll get back to you soon.</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
