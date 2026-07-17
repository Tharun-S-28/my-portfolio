import { codingProfiles } from "../../data/portfolioData";
import Reveal from "../Reveal";
import "./CodingProfiles.css";

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="section coding-profiles">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Coding Profiles</p>
          <h2 className="section-title">Where I practice & compete</h2>
          <p className="section-sub">
            Consistent problem-solving practice across platforms — click any card to view the
            live profile.
          </p>
        </Reveal>

        <div className="profiles-grid">
          {codingProfiles.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} variant="zoom">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-card card"
                data-cursor="pointer"
              >
                <h3 className="profile-platform">{p.platform}</h3>
                <div className="profile-stats">
                  {p.stats.map((s) => (
                    <div key={s.label} className="profile-stat">
                      <span className="profile-stat-value">{s.value}</span>
                      <span className="profile-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <span className="profile-visit">Visit profile →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
