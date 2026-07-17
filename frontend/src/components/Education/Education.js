import { education } from "../../data/portfolioData";
import Reveal from "../Reveal";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Academic journey</h2>
        </Reveal>

        <div className="timeline">
          {education.map((e, i) => (
            <Reveal
              key={e.id}
              variant={i % 2 === 0 ? "left" : "right"}
              className={`timeline-item ${i % 2 === 0 ? "timeline-item-left" : "timeline-item-right"}`}
            >
              <div className="timeline-dot">🎓</div>
              <div className="timeline-card card">
                <h3>{e.level}</h3>
                <p className="timeline-org">{e.institute} · {e.year}</p>
                <p className="timeline-desc">{e.grade}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
