import React, { useState } from "react";
import { profile } from "../../data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../Icons";
import "./Contact.css";

const API_BASE =
  process.env.REACT_APP_API_BASE_URL || "https://my-portfolio-backend.vercel.app";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) {
    errors.message = "Message cannot be empty.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        throw new Error(`Server returned status ${res.status}`);
      }
    } catch (err) {
      console.warn("Backend API request failed; enabling direct mailto dispatch:", err);
      setStatus("error");
      setErrorMessage(
        "Direct API service is currently unreachable. You can immediately send your message using the direct email fallback button below."
      );
    }
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(form.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(
      `Hi Tharun,\n\n${form.message}\n\nFrom: ${form.name} (${form.email})`
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-title">Let&apos;s Discuss Opportunities &amp; Ideas</h2>
          <p className="section-sub">
            Actively seeking campus placement opportunities, full-stack development roles, and challenging technical collaborations.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Contact Details Card */}
          <div className="contact-info-panel card">
            <div className="contact-badge-pill">
              <Sparkles size={14} className="text-crimson" />
              <span>Campus Placement Ready</span>
            </div>

            <h3 className="contact-card-heading">Direct Contact Information</h3>
            <p className="contact-intro-text">
              Feel free to connect directly via email, phone, or professional networks. I respond promptly to recruitment and technical inquiries.
            </p>

            <div className="contact-channels-list">
              <div className="channel-item">
                <div className="channel-icon-box">
                  <Mail size={18} className="text-crimson" />
                </div>
                <div className="channel-meta">
                  <span className="channel-label">Email Address</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="channel-value"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-box">
                  <Phone size={18} className="text-crimson" />
                </div>
                <div className="channel-meta">
                  <span className="channel-label">Phone / WhatsApp</span>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="channel-value"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-box">
                  <MapPin size={18} className="text-crimson" />
                </div>
                <div className="channel-meta">
                  <span className="channel-label">Institution &amp; Location</span>
                  <span className="channel-value-static">
                    PSNACET, Dindigul, Tamil Nadu
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-social-section">
              <span className="social-section-title">Professional Profiles:</span>
              <div className="contact-social-buttons">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-contact-btn"
                >
                  <GithubIcon size={17} />
                  <span>GitHub Profile</span>
                  <ExternalLink size={13} className="ext-icon" />
                </a>

                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-contact-btn btn-linkedin"
                >
                  <LinkedinIcon size={17} />
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={13} className="ext-icon" />
                </a>
              </div>
            </div>

            {/* Campus CTA Callout */}
            <div className="campus-cta-box">
              <p className="cta-quote">
                &ldquo;Ready to bring solid DSA foundations, Java discipline, and full-stack execution to top IT engineering teams.&rdquo;
              </p>
              <span className="cta-sign">— Tharun S, PSNACET</span>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="contact-form-panel card">
            <h3 className="form-panel-title">Send a Direct Message</h3>
            <p className="form-panel-sub">
              Fill out the form below or reach out directly to my email.
            </p>

            {status === "success" ? (
              <div className="form-success-alert">
                <CheckCircle size={32} className="text-success" />
                <h4>Message Sent Successfully!</h4>
                <p>
                  Thank you for reaching out. I have received your message and will respond to your email as soon as possible.
                </p>
                <button
                  className="btn-reset-form"
                  onClick={() => setStatus("idle")}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="contact-form">
                <div className="form-input-group">
                  <label htmlFor="name" className="form-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Recruiter or Engineering Lead"
                    className={`form-input ${errors.name ? "input-err" : ""}`}
                  />
                  {errors.name && (
                    <span className="err-msg">{errors.name}</span>
                  )}
                </div>

                <div className="form-input-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`form-input ${errors.email ? "input-err" : ""}`}
                  />
                  {errors.email && (
                    <span className="err-msg">{errors.email}</span>
                  )}
                </div>

                <div className="form-input-group">
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="req">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Campus Placement / Job Opportunity"
                    className={`form-input ${errors.subject ? "input-err" : ""}`}
                  />
                  {errors.subject && (
                    <span className="err-msg">{errors.subject}</span>
                  )}
                </div>

                <div className="form-input-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Details about the role, project, or schedule..."
                    className={`form-input form-textarea ${errors.message ? "input-err" : ""}`}
                  />
                  {errors.message && (
                    <span className="err-msg">{errors.message}</span>
                  )}
                </div>

                {status === "error" && (
                  <div className="form-error-fallback">
                    <div className="err-banner">
                      <AlertCircle size={20} className="err-icon" />
                      <div>
                        <strong>Notice:</strong> {errorMessage}
                      </div>
                    </div>
                    <a
                      href={getMailtoUrl()}
                      className="btn-mailto-fallback"
                    >
                      <Mail size={16} />
                      <span>Launch Mail Client to Deliver Directly</span>
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-submit-contact"
                >
                  {status === "loading" ? (
                    <>
                      <span className="submit-spinner" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Submit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
