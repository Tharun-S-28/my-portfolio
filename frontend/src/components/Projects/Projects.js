import { useState } from "react";
import { projects } from "../../data/portfolioData";
import Reveal from "../Reveal";
import RippleButton from "../RippleButton";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">Things I&apos;ve shipped</h2>
          <p className="section-sub">
            A mix of full-stack systems and tools — each built to solve a real, specific problem
            rather than tick a resume box.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 90} variant="zoom" className="project-card card">
              <div className="project-image-wrap">
                <img src={p.image} alt={p.title} className="project-image" loading="lazy" />
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <div className="about-chips project-stack">
                  {p.stack.map((s) => (
                    <span key={s} className="chip chip-accent">{s}</span>
                  ))}
                </div>
                <p className="project-short">{p.short}</p>
                <div className="project-actions">
                  <RippleButton onClick={() => setActiveProject(p)} className="btn btn-primary btn-sm">
                    Know More
                  </RippleButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
