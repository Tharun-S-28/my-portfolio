import React from "react";
import { navSections, profile } from "../../data/portfolioData";
import { Code2, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../Icons";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="container footer-grid">
        <div className="footer-brand-col">
          <button
            className="footer-logo"
            onClick={() => handleNavClick("home")}
          >
            <span className="logo-bracket">&lt;</span>
            <span className="logo-title">{profile.name}</span>
            <span className="logo-bracket">/&gt;</span>
          </button>
          <p className="footer-college-text">{profile.college}</p>
          <p className="footer-headline-text">
            &ldquo;{profile.headline}&rdquo;
          </p>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Navigation</h4>
          <div className="footer-nav-links">
            {navSections.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="footer-nav-btn"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="footer-social-col">
          <h4 className="footer-col-title">Connect &amp; Recruit</h4>
          <div className="footer-social-list">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-item"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-item"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-item"
            >
              <Code2 size={16} />
              <span>LeetCode</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="footer-social-item"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="footer-social-item"
            >
              <Phone size={16} />
              <span>Phone</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            &copy; {currentYear} {profile.name} • Designed &amp; Engineered with React &amp; Three.js
          </p>
          <p className="footer-tag">
            Engineered for Campus Placements • Clean CS Fundamentals
          </p>
        </div>
      </div>
    </footer>
  );
}
