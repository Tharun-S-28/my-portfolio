import React, { useState } from "react";
import { profile } from "../../data/portfolioData";
import { Mail, MapPin, Send, Check } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="relative w-full text-gray-100 py-24 md:py-32 px-4 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background Red Halo */}
      <div
        className="red-halo pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vh",
          opacity: 0.25,
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14 z-10">
        <span className="text-[#a31515] font-bold uppercase text-xs sm:text-sm md:text-base tracking-[0.2em] mb-2 flex items-center gap-1.5">
          <img
            src="/assets/spydy.png"
            alt=""
            className="w-5 h-5 object-contain opacity-90 drop-shadow-[0_0_6px_rgba(255,18,56,0.8)]"
            aria-hidden="true"
          />
          Get In Touch
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white drop-shadow-md">
          CONTACT.
        </h2>
        <div className="w-20 h-1.5 bg-[#a31515] mt-3 rounded-full shadow-[0_0_10px_rgba(163,21,21,0.8)]" />
      </div>

      <div className="relative w-full max-w-4xl z-10">
        {/* WhatsApp Quick Connect Card */}
        <a
          href="https://wa.me/917305865241"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Tharun on WhatsApp"
          className="whatsapp-card glass glass-hover mb-8 flex items-center gap-4 rounded-3xl px-6 py-5 md:px-8 relative z-10 border border-white/10 hover:border-green-500/50 shadow-2xl transition-all"
        >
          <span className="whatsapp-icon grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-green-500/20 text-green-400 border border-green-500/30">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </span>
          <span className="flex min-w-0 flex-col text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              WhatsApp Quick Connect
            </span>
            <span className="text-base sm:text-lg md:text-xl font-extrabold text-gray-100">
              +91 7305865241
            </span>
          </span>
          <span className="whatsapp-cta ml-auto hidden shrink-0 text-xs font-bold uppercase tracking-wider sm:block text-green-400">
            Chat now →
          </span>
        </a>

        {/* Direct Contact Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <a
            href={`mailto:${profile.email}`}
            className="glass glass-panel-card p-5 rounded-2xl flex items-center gap-4 border border-white/10 hover:border-red-600/40 transition-colors text-left"
          >
            <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0 border border-white/10">
              <Mail className="w-5 h-5 text-red-500" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                Email Address
              </span>
              <span className="text-sm sm:text-base font-bold text-white truncate block">
                {profile.email}
              </span>
            </div>
          </a>

          <div className="glass glass-panel-card p-5 rounded-2xl flex items-center gap-4 border border-white/10 text-left">
            <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0 border border-white/10">
              <MapPin className="w-5 h-5 text-red-500" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                Location
              </span>
              <span className="text-sm sm:text-base font-bold text-white block">
                Dindigul, Tamil Nadu, India
              </span>
            </div>
          </div>
        </div>

        {/* Main Glass Form Card */}
        <div className="glass glass-panel-card w-full p-6 sm:p-10 md:p-14 rounded-3xl relative z-10 border border-white/10 shadow-2xl text-left">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="glass-red w-16 h-16 text-white rounded-full flex items-center justify-center text-3xl font-black mb-4 shadow-[0_0_25px_rgba(255,18,56,0.8)]">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-sm sm:text-base text-gray-400 font-medium">
                Thank you for reaching out, Tharun S will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-5 py-4 glass-input rounded-2xl text-sm sm:text-base font-medium text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-red-500/80 transition-all border border-white/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className="w-full px-5 py-4 glass-input rounded-2xl text-sm sm:text-base font-medium text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-red-500/80 transition-all border border-white/10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400">
                  Subject / Opportunity
                </label>
                <input
                  required
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full-Stack / Software Engineering Opportunity"
                  className="w-full px-5 py-4 glass-input rounded-2xl text-sm sm:text-base font-medium text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-red-500/80 transition-all border border-white/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about the project, role, or collaboration..."
                  className="w-full px-5 py-4 glass-input rounded-2xl text-sm sm:text-base font-medium text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-red-500/80 transition-all border border-white/10 resize-none"
                />
              </div>

              <button
                type="submit"
                className="glass-red w-full py-4 rounded-2xl text-white text-xs sm:text-sm font-black uppercase tracking-widest shadow-[0_0_25px_rgba(216,30,47,0.5)] hover:shadow-[0_0_35px_rgba(255,18,56,0.8)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
