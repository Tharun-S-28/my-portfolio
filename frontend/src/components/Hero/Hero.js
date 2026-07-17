import useTypewriter from "../../hooks/useTypewriter";
import { profile } from "../../data/portfolioData";
import RippleButton from "../RippleButton";
import "./Hero.css";

const socialIcons = [
  { key: "github", label: "GitHub", glyph: "GH" },
  { key: "linkedin", label: "LinkedIn", glyph: "in" },
  { key: "leetcode", label: "LeetCode", glyph: "LC" },
  { key: "gfg", label: "GeeksforGeeks", glyph: "G4G" },
  { key: "email", label: "Email", glyph: "@" },
];

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">
            <span className="text-gradient">{typed}</span>
            <span className="hero-caret">|</span>
          </p>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <RippleButton href={profile.resumeUrl} download className="btn btn-primary">
              Download Resume
            </RippleButton>
            <RippleButton onClick={() => scrollTo("projects")} className="btn btn-ghost">
              View Projects
            </RippleButton>
            <RippleButton onClick={() => scrollTo("contact")} className="btn btn-ghost">
              Contact Me
            </RippleButton>
          </div>

          <div className="hero-social">
            {socialIcons.map((s) => (
              <a
                key={s.key}
                href={profile.social[s.key]}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="hero-social-icon"
                data-cursor="pointer"
              >
                {s.glyph}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring" />
            <img src={profile.photo} alt={profile.name} className="hero-photo" />
          </div>

          <div className="hero-terminal glass">
            <div className="hero-terminal-bar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="hero-terminal-title">whoami.js</span>
            </div>
            <pre className="hero-terminal-code">
              <code>
                <span className="tok-key">const</span> <span className="tok-var">engineer</span> = {"{"}
                {"\n"}  name: <span className="tok-str">'{profile.name}'</span>,{"\n"}  stack:
                <span className="tok-str"> ['React', 'Node', 'Express', 'MongoDB', 'Java']</span>,{"\n"}  focus:
                <span className="tok-str"> 'building things that ship'</span>,{"\n"}  status:
                <span className="tok-str"> 'open to opportunities'</span>
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>

      <button className="hero-scroll-indicator" onClick={() => scrollTo("about")} aria-label="Scroll down">
        <span className="hero-scroll-mouse">
          <span className="hero-scroll-dot" />
        </span>
      </button>
    </section>
  );
}
