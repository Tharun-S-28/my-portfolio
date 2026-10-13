import React, { useState } from "react";
import { projectsData } from "../../data/portfolioData";
import {
  ExternalLink,
  Star,
  Layers,
  CheckCircle,
  Eye,
  Sparkles,
  Search,
  Users,
  ShieldCheck,
  Radio,
  Terminal,
  Activity,
} from "lucide-react";
import { GithubIcon } from "../Icons";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

// Dedicated CSS UI Preview Mockups replacing static poster images
function JobVerseMockup() {
  return (
    <div className="jobverse-ui-mockup">
      <div className="mockup-search-bar">
        <Search size={14} className="mockup-search-icon" />
        <span className="mockup-search-text">Search jobs: &ldquo;Full-Stack MERN Developer&rdquo;...</span>
        <span className="mockup-badge-filter">Filtered</span>
      </div>

      <div className="mockup-cards-container">
        <div className="mockup-job-card active">
          <div className="mockup-job-header">
            <span className="mockup-job-role">Full-Stack MERN Engineer</span>
            <span className="mockup-job-status">JWT Auth Active</span>
          </div>
          <div className="mockup-job-meta">
            <span>React.js • Node • Express • MongoDB</span>
            <span className="mockup-salary-tag">Recruiter RBAC</span>
          </div>
        </div>

        <div className="mockup-job-card">
          <div className="mockup-job-header">
            <span className="mockup-job-role">Java Software Engineer</span>
            <span className="mockup-job-status-subtle">Campus Placement</span>
          </div>
          <div className="mockup-job-meta">
            <span>Core Java • OOP • Data Structures</span>
            <span className="mockup-salary-tag">Open</span>
          </div>
        </div>
      </div>

      <div className="mockup-system-status">
        <div className="status-indicator">
          <span className="pulse-dot" />
          <span>MongoDB Atlas Connected</span>
        </div>
        <div className="status-indicator">
          <ShieldCheck size={13} className="text-cyan" />
          <span>Role-Based Access Verified</span>
        </div>
      </div>
    </div>
  );
}

function ConnectWaveMockup() {
  return (
    <div className="connectwave-ui-mockup">
      <div className="chat-mockup-header">
        <div className="chat-user-status">
          <div className="chat-avatar-bubble">
            <Users size={14} />
          </div>
          <div>
            <span className="chat-username">@tharun_s</span>
            <span className="chat-online-pill">
              <span className="chat-pulse-dot" /> Online • Socket.IO
            </span>
          </div>
        </div>
        <Radio size={14} className="text-cyan animate-pulse" />
      </div>

      <div className="chat-bubbles-flow">
        <div className="chat-msg chat-incoming">
          <p>Welcome to ConnectWave! Instant messaging initialized.</p>
          <span className="chat-timestamp">10:48 AM</span>
        </div>
        <div className="chat-msg chat-outgoing">
          <p>Socket.IO active! Real-time typing &amp; presence synced. 🚀</p>
          <span className="chat-timestamp">10:49 AM • Read</span>
        </div>
      </div>

      <div className="chat-typing-bar">
        <div className="typing-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="typing-label">Alex is typing...</span>
      </div>
    </div>
  );
}

function PortfolioMockup() {
  return (
    <div className="portfolio-ui-mockup">
      <div className="console-header">
        <Terminal size={13} className="text-cyan" />
        <span>antigravity-core.sys</span>
        <Activity size={13} className="text-green" />
      </div>
      <div className="console-body">
        <div className="console-line text-cyan">&gt; Three.js 3D WebGL Canvas: ACTIVE</div>
        <div className="console-line">&gt; Camera Flight: Z-Axis Waypoints 0 to -96</div>
        <div className="console-line">&gt; Theme: Dark Blue &amp; Space Black Palette</div>
        <div className="console-line text-amber">&gt; Section Architecture: 9 Strict Verified Sections</div>
        <div className="console-line text-green">&gt; Performance: 60 FPS • Accessible UI</div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <p className="eyebrow">Featured Work</p>
          <h2 className="section-title">Full-Stack &amp; Real-Time Systems</h2>
          <p className="section-sub">
            Production-grade web portals, event-driven socket communication, and creative 3D web interfaces.
          </p>
        </div>

        {/* Featured Project: JOBVERSE */}
        {projectsData
          .filter((p) => p.isFeatured)
          .map((proj) => (
            <div key={proj.id} className="featured-project-card card">
              <div className="featured-badge-ribbon">
                <Star size={14} className="star-fill" />
                <span>FEATURED FLAGSHIP PROJECT</span>
              </div>

              <div className="featured-project-grid">
                <div className="featured-project-preview">
                  <div className="preview-window-frame">
                    <div className="preview-window-bar">
                      <div className="window-dots">
                        <span className="dot dot-red" />
                        <span className="dot dot-amber" />
                        <span className="dot dot-green" />
                      </div>
                      <span className="window-url">job-verse-937a.vercel.app</span>
                    </div>

                    <div className="preview-media-box">
                      <JobVerseMockup />
                      <div className="preview-overlay">
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="preview-live-action"
                        >
                          <ExternalLink size={18} />
                          <span>Launch Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="featured-project-details">
                  <div className="project-category-tag">
                    <Layers size={14} />
                    <span>{proj.category}</span>
                  </div>

                  <h3 className="featured-project-title">{proj.title}</h3>

                  <p className="featured-project-desc">{proj.description}</p>

                  <div className="tech-badge-cloud">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="tech-badge tech-badge-accent">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="featured-features-list">
                    {proj.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="feat-item">
                        <CheckCircle size={15} className="feat-check" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-actions-row">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-project-primary"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-project-secondary"
                      >
                        <GithubIcon size={16} />
                        <span>GitHub Repo</span>
                      </a>
                    )}

                    <button
                      className="btn-project-ghost"
                      onClick={() => setSelectedProject(proj)}
                    >
                      <Eye size={16} />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Regular Projects Grid: ConnectWave & Personal Portfolio */}
        <div className="standard-projects-grid">
          {projectsData
            .filter((p) => !p.isFeatured)
            .map((proj) => (
              <div key={proj.id} className="standard-project-card card">
                <div className="std-preview-box">
                  {proj.id === "connectwave" ? (
                    <ConnectWaveMockup />
                  ) : (
                    <PortfolioMockup />
                  )}
                  <div className="std-cat-pill">
                    <span>{proj.category}</span>
                  </div>
                </div>

                <div className="std-project-body">
                  <div className="std-header-row">
                    <h3 className="std-project-title">{proj.title}</h3>
                    <span className="std-badge-pill">{proj.badge}</span>
                  </div>

                  <p className="std-project-desc">{proj.description}</p>

                  <div className="tech-badge-cloud">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="std-features-preview">
                    {proj.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="std-feat-line">
                        <span className="std-feat-bullet">•</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="std-project-footer">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="std-action-btn"
                        title="View GitHub Repository"
                      >
                        <GithubIcon size={16} />
                        <span>Repository</span>
                      </a>
                    )}

                    {proj.id === "personal-portfolio" && (
                      <span className="std-live-current">
                        <Sparkles size={14} className="sparkle-pulse" />
                        <span>Currently Active</span>
                      </span>
                    )}

                    <button
                      className="std-details-btn"
                      onClick={() => setSelectedProject(proj)}
                    >
                      <span>Explore Overview</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Modal for In-Depth Project Exploration */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
