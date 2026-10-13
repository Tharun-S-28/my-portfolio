import React from "react";
import { aboutData, profile } from "../../data/portfolioData";
import { GraduationCap, BookOpen, Target, Calendar, Award } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <p className="eyebrow">About Tharun</p>
          <h2 className="section-title">
            Passionate About Algorithms, Architecture & Full-Stack Craft
          </h2>
          <p className="section-sub">
            Engineering solid software solutions with strong CS fundamentals, disciplined coding practices, and continuous hands-on building.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="about-overview-grid">
          <div className="about-bio-card card">
            <div className="about-card-badge">
              <Target size={16} className="text-crimson" />
              <span>Engineering & Problem-Solving</span>
            </div>
            <p className="about-bio-text">
              I am a motivated <strong>Computer Science Engineering student</strong> at{" "}
              <span className="text-highlight">
                PSNA College of Engineering and Technology (PSNACET)
              </span>
              , passionate about data structures, algorithmic problem-solving in Java, and end-to-end full-stack development with the MERN stack.
            </p>
            <p className="about-bio-text">
              I continuously hone my analytical thinking and software craftsmanship through competitive programming, active hackathons, and building robust, production-style projects.
            </p>
            <div className="about-metrics-pill">
              <span className="pill-item">
                <strong>Current CGPA:</strong> 8.74
              </span>
              <span className="pill-dot" />
              <span className="pill-item">
                <strong>Batch:</strong> 2024–2028
              </span>
              <span className="pill-dot" />
              <span className="pill-item">
                <strong>Core Lang:</strong> Java (OOP)
              </span>
            </div>
          </div>

          <div className="about-photo-wrapper">
            <div className="about-photo-card card">
              <div className="about-photo-frame">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="about-profile-img"
                />
              </div>
              <div className="about-photo-info">
                <h4>{profile.name}</h4>
                <p>PSNACET • Computer Science Engineering</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline-wrapper">
          <div className="subheading-group">
            <GraduationCap size={22} className="text-crimson" />
            <h3 className="subheading-title">Academic Journey & Education</h3>
          </div>

          <div className="timeline-track">
            {aboutData.education.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${item.status === "Pursuing" ? "timeline-active" : ""}`}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot" />
                  <div className="timeline-line" />
                </div>

                <div className="timeline-content-card card">
                  <div className="timeline-header">
                    <div className="timeline-degree-wrap">
                      <h4 className="timeline-degree">{item.degree}</h4>
                      <span className="timeline-inst">{item.institution}</span>
                    </div>
                    <div className="timeline-badge-wrap">
                      <span className="timeline-period">
                        <Calendar size={13} />
                        {item.period}
                      </span>
                      {item.score && (
                        <span className="timeline-score">
                          <Award size={13} />
                          {item.score}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="timeline-location">{item.location}</p>
                  {item.highlight && (
                    <div className="timeline-note">{item.highlight}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coursework Showcase */}
        <div className="coursework-section">
          <div className="subheading-group">
            <BookOpen size={22} className="text-crimson" />
            <h3 className="subheading-title">Relevant Core Coursework</h3>
          </div>

          <div className="coursework-grid">
            {aboutData.coursework.map((course, idx) => (
              <div key={idx} className="course-card card">
                <div className="course-number">0{idx + 1}</div>
                <div className="course-info">
                  <span className="course-title">{course}</span>
                  <span className="course-status">Core Curriculum</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
