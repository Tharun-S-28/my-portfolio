import React from "react";
import Modal from "../Modal";
import RippleButton from "../RippleButton";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../Icons";

export default function ProjectModal({ project, onClose }) {
  const stack = project.techStack || project.stack || [];
  const github = project.githubUrl || project.github;
  const demo = project.liveUrl || project.demo;

  return (
    <Modal onClose={onClose} wide>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="modal-project-image"
          style={{ width: "100%", maxHeight: "280px", objectFit: "cover", borderRadius: "12px", marginBottom: "16px" }}
        />
      )}
      <h3 className="modal-project-title" style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>
        {project.title}
      </h3>
      <div className="about-chips" style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "10px 0 20px" }}>
        {stack.map((s) => (
          <span
            key={s}
            style={{
              padding: "4px 10px",
              background: "rgba(0, 255, 136, 0.12)",
              border: "1px solid rgba(0, 255, 136, 0.35)",
              borderRadius: "999px",
              fontSize: "0.8rem",
              color: "#00ff88",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <div style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.6, marginBottom: "20px" }}>
        <p>{project.description || project.short}</p>
      </div>

      {project.features && project.features.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h4 style={{ color: "#fff", fontSize: "1rem", marginBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "4px" }}>
            Key Features &amp; Architecture
          </h4>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px", color: "rgba(255, 255, 255, 0.75)" }}>
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
        {demo && (
          <RippleButton
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            <ExternalLink size={15} />
            <span>Live Deployment</span>
          </RippleButton>
        )}
        {github && (
          <RippleButton
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            <GithubIcon size={15} />
            <span>GitHub Repository</span>
          </RippleButton>
        )}
      </div>
    </Modal>
  );
}
