import React from "react";
import { internshipsData } from "../../data/portfolioData";
import {
  Briefcase,
  Calendar,
  Globe,
  ExternalLink,
  CheckCircle2,
  Code2,
} from "lucide-react";
import "./Internships.css";

export default function Internships() {
  return (
    <section id="internships" className="section internships-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <p className="eyebrow">Practical Industry Experience</p>
          <h2 className="section-title">Internships &amp; Applied Engineering</h2>
          <p className="section-sub">
            Practical development internships putting core Java and modern web fundamentals to work on targeted projects.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="internships-timeline">
          {internshipsData.map((item, index) => (
            <div key={item.company} className="internship-timeline-row">
              <div className="internship-time-marker">
                <div className="time-badge-box">
                  <Briefcase size={18} className="time-icon" />
                </div>
                {index < internshipsData.length - 1 && (
                  <div className="time-connector-line" />
                )}
              </div>

              <div className="internship-card card">
                <div className="intern-card-header">
                  <div>
                    <div className="company-badge-row">
                      <span className="company-name">{item.company}</span>
                      <span className="workmode-pill">
                        <Globe size={12} />
                        {item.workMode}
                      </span>
                    </div>
                    <h3 className="intern-position">{item.position}</h3>
                  </div>

                  <div className="duration-pill">
                    <Calendar size={13} />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <p className="intern-description">&ldquo;{item.description}&rdquo;</p>

                <div className="intern-tech-stack">
                  <div className="tech-stack-label">
                    <Code2 size={13} />
                    <span>Technologies Utilized:</span>
                  </div>
                  <div className="tech-chips-wrap">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="intern-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="intern-footer">
                  <div className="intern-verify-status">
                    <CheckCircle2 size={14} className="text-success" />
                    <span>Internship Completed &amp; Verified</span>
                  </div>

                  {item.verifiedUrl && (
                    <a
                      href={item.verifiedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="intern-verify-btn"
                      title="View Verified Post on LinkedIn"
                    >
                      <span>Verification Post</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
