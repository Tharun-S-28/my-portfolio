import { useEffect, useState } from "react";
import { navLinks, profile } from "../../data/portfolioData";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <button className="navbar-logo" onClick={() => handleNavClick("home")}>
          <span className="navbar-logo-bracket">&lt;</span>
          {profile.name.split(" ")[0]}
          <span className="navbar-logo-bracket">/&gt;</span>
        </button>

        <nav className={`navbar-links ${open ? "navbar-links-open" : ""}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`navbar-link ${active === link.id ? "navbar-link-active" : ""}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            data-cursor="pointer"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            className={`navbar-burger ${open ? "navbar-burger-open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
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
