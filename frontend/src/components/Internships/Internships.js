import { internships } from "../../data/portfolioData";
import Reveal from "../Reveal";
import RippleButton from "../RippleButton";

export default function Internships() {
  return (
    <section id="internships" className="section internships">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Internships</p>
          <h2 className="section-title">Hands-on industry experience</h2>
          <p className="section-sub">
            Short, focused internships where I applied classroom fundamentals to real codebases
            and real deadlines.
          </p>
        </Reveal>

        <div className="timeline">
          {internships.map((it, i) => (
            <Reveal
              key={it.id}
              variant={i % 2 === 0 ? "left" : "right"}
              className={`timeline-item ${i % 2 === 0 ? "timeline-item-left" : "timeline-item-right"}`}
            >
              <div className="timeline-dot">💼</div>
              <div className="timeline-card card">
                <h3>{it.role}</h3>
                <p className="timeline-org">{it.company} · {it.duration}</p>
                <ul className="modal-list" style={{ marginBottom: 14 }}>
                  {it.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <div className="about-chips" style={{ marginBottom: 16 }}>
                  {it.skills.map((s) => (
                    <span key={s} className="chip chip-accent">{s}</span>
                  ))}
                </div>
                <RippleButton href={it.certificateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                  View Certificate
                </RippleButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
