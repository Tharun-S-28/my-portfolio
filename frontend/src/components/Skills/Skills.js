import React, { useState } from "react";
import { skillsData } from "../../data/portfolioData";
import {
  Code,
  Layout,
  Server,
  Database,
  GitBranch,
  Star,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";
import "./Skills.css";

const categoryIcons = {
  "Programming Languages": <Code size={20} className="cat-icon" />,
  Frontend: <Layout size={20} className="cat-icon" />,
  Backend: <Server size={20} className="cat-icon" />,
  Database: <Database size={20} className="cat-icon" />,
  "Developer Tools and Version Control": <GitBranch size={20} className="cat-icon" />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories =
    activeCategory === "all"
      ? skillsData.categories
      : skillsData.categories.filter((c) => c.name === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <p className="eyebrow">Technical Competencies</p>
          <h2 className="section-title">
            Skills, Frameworks & Engineering Toolkit
          </h2>
          <p className="section-sub">
            Organized across core languages, frontend interfaces, backend APIs, data storage, and version control.
          </p>
        </div>

        {/* Resume Highlights Banner */}
        <div className="skills-highlights-row">
          <div className="skill-highlight-card">
            <div className="highlight-icon-wrap">
              <Star size={20} className="highlight-star" />
            </div>
            <div className="highlight-content">
              <span className="highlight-val">2,000+ Lines of Code</span>
              <span className="highlight-sub">
                Java (Primary) &amp; C Programming Foundations
              </span>
            </div>
          </div>

          <div className="skill-highlight-card">
            <div className="highlight-icon-wrap">
              <Sparkles size={20} className="highlight-star" />
            </div>
            <div className="highlight-content">
              <span className="highlight-val">2,500+ Lines of Code</span>
              <span className="highlight-sub">
                Full-Stack JavaScript (React, Node, Express, MongoDB)
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="skills-filter-bar">
          <button
            className={`filter-pill ${activeCategory === "all" ? "filter-pill-active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            <Layers size={15} />
            <span>All Categories</span>
          </button>
          {skillsData.categories.map((cat) => (
            <button
              key={cat.name}
              className={`filter-pill ${activeCategory === cat.name ? "filter-pill-active" : ""}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              {categoryIcons[cat.name]}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-category-grid">
          {filteredCategories.map((category) => (
            <div key={category.name} className="skills-category-card card">
              <div className="skills-cat-header">
                <div className="cat-icon-badge">
                  {categoryIcons[category.name] || <Code size={20} />}
                </div>
                <div>
                  <h3 className="cat-title">{category.name}</h3>
                  <p className="cat-description">{category.description}</p>
                </div>
              </div>

              <div className="skills-items-list">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`skill-item-pill ${skill.isPrimary && skill.name === "Java" ? "skill-primary-java" : ""}`}
                  >
                    <div className="skill-info-row">
                      <div className="skill-title-group">
                        <CheckCircle2
                          size={15}
                          className={skill.name === "Java" ? "text-ruby" : "text-subtle"}
                        />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      {skill.name === "Java" && (
                        <span className="primary-language-badge">
                          PRIMARY LANGUAGE
                        </span>
                      )}
                    </div>
                    {skill.note && (
                      <span className="skill-note">{skill.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
