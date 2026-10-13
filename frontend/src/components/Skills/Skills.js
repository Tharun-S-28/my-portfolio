import { skills } from "../../data/portfolioData";
import Reveal from "../Reveal";
import useInView from "../../hooks/useInView";
import "./Skills.css";

function SkillBar({ name, level }) {
  const [ref, isVisible] = useInView({ threshold: 0.5 });
  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar-top">
        <span>{name}</span>
        <span className="skill-bar-percent">{isVisible ? level : 0}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: isVisible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">What I build with</h2>
          <p className="section-sub">
            A practical toolkit spanning programming fundamentals, the MERN stack, and the workflow
            tools that keep a project maintainable.
          </p>
        </Reveal>

        <div className="skills-grid">
          {groups.map(([category, list], i) => (
            <Reveal key={category} delay={i * 80} variant="zoom" className="skill-card card">
              <h3 className="skill-card-title">{category}</h3>
              <div className="skill-card-list">
                {list.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
