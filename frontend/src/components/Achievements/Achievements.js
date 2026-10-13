import { achievements } from "../../data/portfolioData";
import Reveal from "../Reveal";
import RippleButton from "../RippleButton";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Achievements</p>
          <h2 className="section-title">Competitions I&apos;ve placed in</h2>
          <p className="section-sub">
            Coding contests and hackathons where I've tested my skills against a clock and a room
            full of other builders.
          </p>
        </Reveal>

        <div className="timeline">
          {achievements.map((a, i) => (
            <Reveal
              key={a.id}
              variant={i % 2 === 0 ? "left" : "right"}
              className={`timeline-item ${i % 2 === 0 ? "timeline-item-left" : "timeline-item-right"}`}
            >
              <div className="timeline-dot">{a.medal}</div>
              <div className="timeline-card card">
                <h3>{a.title}</h3>
                <p className="timeline-org">{a.org} · {a.date}</p>
                <p className="timeline-desc">{a.description}</p>
                <RippleButton href={a.postUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                  View Winning Post
                </RippleButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
