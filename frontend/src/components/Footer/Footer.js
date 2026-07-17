import { navLinks, profile } from "../../data/portfolioData";
import "./Footer.css";

const socialIcons = [
  { key: "github", label: "GitHub", glyph: "GH" },
  { key: "linkedin", label: "LinkedIn", glyph: "in" },
  { key: "leetcode", label: "LeetCode", glyph: "LC" },
  { key: "gfg", label: "GeeksforGeeks", glyph: "G4G" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="navbar-logo-bracket">&lt;</span>
          {profile.name}
          <span className="navbar-logo-bracket">/&gt;</span>
          <p>{profile.tagline}</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <button onClick={() => handleNavClick(l.id)}>{l.label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-social">
          <h4>Elsewhere</h4>
          <div className="hero-social">
            {socialIcons.map((s) => (
              <a
                key={s.key}
                href={profile.social[s.key]}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="hero-social-icon"
              >
                {s.glyph}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} {profile.name}. Built from scratch with React, no UI frameworks.</p>
      </div>
    </footer>
  );
}
