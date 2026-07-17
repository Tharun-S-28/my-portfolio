import { certificates } from "../../data/portfolioData";
import Reveal from "../Reveal";
import "./Certificates.css";

export default function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Certifications</p>
          <h2 className="section-title">Verified learning</h2>
          <p className="section-sub">
            Courses and exams I've completed to back up the skills above with a credential.
          </p>
        </Reveal>

        <div className="certificates-grid">
          {certificates.map((c, i) => (
            <Reveal key={c.id} delay={i * 80} variant="zoom" className="certificate-card card">
              <div className="certificate-body">
                <h3>{c.title}</h3>
                <p>{c.issuer}</p>
                <ul className="certificate-summary">
                  {c.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
