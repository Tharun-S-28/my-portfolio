import React from "react";
import useTypewriter from "../../hooks/useTypewriter";
import { profile } from "../../data/portfolioData";
import RippleButton from "../RippleButton";
import { FileText, ArrowRight, Compass, Sparkles, Code2, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../Icons";
import CyberText from "../CyberText/CyberText";
import "./Hero.css";

export default function Hero() {
  const dynamicRoles = [
    "Full-Stack Developer",
    "Java Programmer",
    "Problem Solver",
    "MERN Stack Builder",
  ];
  const typedRole = useTypewriter(dynamicRoles);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Status pill */}
          <div className="hero-badge">
            <span className="hero-badge-pulse" />
            <span className="hero-badge-text">
              Computer Science Engineering Student • 2024–2028
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-name-label">Hi, I&apos;m</span>
            <CyberText text={profile.name} className="hero-name-gradient" />
          </h1>

          <div className="hero-role-display">
            <span className="hero-role-fixed">Aspiring&nbsp;</span>
            <span className="hero-role-dynamic">{typedRole}</span>
            <span className="hero-role-cursor">_</span>
          </div>

          <p className="hero-headline">&ldquo;{profile.headline}&rdquo;</p>

          <p className="hero-supporting-text">{profile.tagline}</p>

          {/* Action buttons */}
          <div className="hero-button-group">
            <RippleButton
              onClick={() => scrollTo("projects")}
              className="btn-hero-primary"
            >
              <span>View Projects</span>
              <ArrowRight size={17} className="btn-icon" />
            </RippleButton>

            <RippleButton
              onClick={() => scrollTo("about")}
              className="btn-hero-secondary"
            >
              <Compass size={17} className="btn-icon" />
              <span>Explore My Journey</span>
            </RippleButton>

            <a
              href={profile.resumeUrl}
              download="Tharun_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-outline"
            >
              <FileText size={17} className="btn-icon" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links & Quick Highlights */}
          <div className="hero-meta">
            <div className="hero-social-links">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="GitHub Profile"
                title="GitHub: Tharun-S-28"
              >
                <GithubIcon size={19} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn: Tharun S"
              >
                <LinkedinIcon size={19} />
              </a>
              <a
                href={profile.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn hero-social-code"
                aria-label="LeetCode Profile"
                title="LeetCode: 400+ Problems"
              >
                <Code2 size={19} />
              </a>
            </div>

            <div className="hero-quick-stats">
              <div className="hero-stat-item">
                <span className="hero-stat-num">8.74</span>
                <span className="hero-stat-label">CGPA</span>
              </div>
              <div className="hero-stat-sep" />
              <div className="hero-stat-item">
                <span className="hero-stat-num">400+</span>
                <span className="hero-stat-label">DSA Solved</span>
              </div>
              <div className="hero-stat-sep" />
              <div className="hero-stat-item">
                <span className="hero-stat-num">8</span>
                <span className="hero-stat-label">Awards Won</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual / Profile Hologram */}
        <div className="hero-visual-card">
          <div className="hero-visual-frame">
            <div className="hero-hologram-glow" />
            <div className="hero-avatar-container">
              <img
                src={profile.photo}
                alt={profile.name}
                className="hero-avatar-img"
              />
              <div className="hero-avatar-badge">
                <Sparkles size={14} className="sparkle-icon" />
                <span>PSNACET CSE</span>
              </div>
            </div>
          </div>

          {/* Mini Interactive Terminal Card */}
          <div className="hero-terminal-box cyber-corner-box">
            <div className="terminal-header">
              <div className="terminal-traffic-lights">
                <span className="t-dot dot-red" />
                <span className="t-dot dot-amber" />
                <span className="t-dot dot-green" />
              </div>
              <span className="terminal-title">
                <Terminal size={12} className="terminal-icon" />
                developer.config.json
              </span>
            </div>
            <pre className="terminal-code">
              <code>
                {`{
  "engineer": "THARUN S",
  "primaryLanguage": "Java (Core & OOP)",
  "stack": ["MERN", "Socket.IO", "SQL"],
  "focus": "Algorithmic & Full-Stack Systems",
  "status": "Ready to Ship & Innovate"
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <button
        className="hero-scroll-btn"
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
      >
        <span className="scroll-track">
          <span className="scroll-pip" />
        </span>
        <span className="scroll-text">SCROLL TO DISCOVER</span>
      </button>
    </section>
  );
}
