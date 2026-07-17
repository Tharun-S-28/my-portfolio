import Modal from "../Modal";
import RippleButton from "../RippleButton";

export default function ProjectModal({ project, onClose }) {
  return (
    <Modal onClose={onClose} wide>
      <img src={project.image} alt={project.title} className="modal-project-image" />
      <h3 className="modal-project-title">{project.title}</h3>
      <div className="about-chips" style={{ margin: "10px 0 20px" }}>
        {project.stack.map((s) => (
          <span key={s} className="chip chip-accent">{s}</span>
        ))}
      </div>

      <ModalSection title="Problem Statement" text={project.problem} />

      <ModalSection title="Features">
        <ul className="modal-list">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </ModalSection>

      <ModalSection title="Architecture" text={project.architecture} />

      <ModalSection title="Challenges Faced" text={project.challenges} />
      <ModalSection title="What I Learned" text={project.learnings} />

      <ModalSection title="Future Improvements">
        <ul className="modal-list">
          {project.future.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </ModalSection>

      <div className="hero-actions" style={{ marginTop: 24 }}>
        <RippleButton href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
          GitHub
        </RippleButton>
        <RippleButton href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
          Live Demo
        </RippleButton>
      </div>
    </Modal>
  );
}

function ModalSection({ title, text, children }) {
  return (
    <div className="modal-section">
      <h4>{title}</h4>
      {text ? <p>{text}</p> : children}
    </div>
  );
}
