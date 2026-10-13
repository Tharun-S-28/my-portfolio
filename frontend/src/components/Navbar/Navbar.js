import { useEffect, useState } from "react";
import { navSections, profile } from "../../data/portfolioData";
import { Terminal } from "lucide-react";
import CyberText from "../CyberText/CyberText";
import "./Navbar.css";

export default function Navbar({ onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navSections
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <button
          className="navbar-logo"
          onClick={() => handleNavClick("home")}
          aria-label="Scroll to top"
        >
          <span className="navbar-logo-bracket">&lt;</span>
          <CyberText text="THARUN S" className="navbar-logo-text" />
          <span className="navbar-logo-bracket">/&gt;</span>
        </button>

        <nav
          className={`navbar-links ${open ? "navbar-links-open" : ""}`}
          aria-label="Main Navigation"
        >
          {navSections.map((link) => (
            <button
              key={link.id}
              className={`navbar-link ${active === link.id ? "navbar-link-active" : ""}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </button>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume-btn"
            download="Tharun_S_Resume.pdf"
          >
            Resume
          </a>

          {onOpenTerminal && (
            <button
              className="navbar-terminal-btn"
              onClick={onOpenTerminal}
              title="Open Hacker Terminal Console [~]"
            >
              <Terminal size={14} />
              <span>&gt;_ CLI</span>
            </button>
          )}
        </nav>

        <div className="navbar-actions">
          {onOpenTerminal && (
            <button
              className="navbar-terminal-btn"
              onClick={onOpenTerminal}
              style={{ marginRight: "6px" }}
              title="Open CLI"
            >
              <span>&gt;_</span>
            </button>
          )}
          <button
            className={`navbar-burger ${open ? "navbar-burger-open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
