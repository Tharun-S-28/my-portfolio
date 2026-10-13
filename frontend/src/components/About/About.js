import { about, profile } from "../../data/portfolioData";
import Reveal from "../Reveal";
import RippleButton from "../RippleButton";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal variant="left" className="about-image-col">
          <div className="about-photo-frame">
            <img src={profile.photo} alt={profile.name} className="about-photo" />
          </div>
        </Reveal>

        <Reveal variant="right" className="about-content-col">
          <p className="eyebrow">About Me</p>
          <h2 className="section-title">
            Building software with <span className="text-gradient">intent</span>, not just syntax
          </h2>
          <p className="about-objective">{about.objective}</p>

          <div className="about-details">
            <div className="about-detail-card card">
              <h4>Education</h4>
              <p>{about.education.degree}</p>
              <p className="about-cgpa">CGPA: {about.education.cgpa}</p>
            </div>
            <div className="about-detail-card card">
              <h4>Current Focus</h4>
              <p>{about.currentFocus}</p>
            </div>
          </div>

          <div className="about-coursework">
            <h4>Relevant Coursework</h4>
            <div className="about-chips">
              {about.education.coursework.map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>
          </div>

          <div className="about-coursework">
            <h4>Current Tech Stack</h4>
            <div className="about-chips">
              {about.currentStack.map((c) => (
                <span key={c} className="chip chip-accent">{c}</span>
              ))}
            </div>
          </div>

          <div className="hero-actions about-actions">
            <RippleButton href={profile.resumeUrl} download className="btn btn-primary">
              Download Resume
            </RippleButton>
            <RippleButton href="#contact" className="btn btn-ghost">
              Hire Me
            </RippleButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
