import React, { useState } from "react";
import { projectsData } from "../../data/portfolioData";
import { ExternalLink, ArrowUpRight, Layers } from "lucide-react";
import { GithubIcon as Github } from "../Icons";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNavigateModal = (direction) => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex === -1) return;
    const nextIndex =
      (currentIndex + direction + projectsData.length) % projectsData.length;
    setSelectedProject(projectsData[nextIndex]);
  };

  return (
    <section
      id="projects"
      className="relative w-full text-gray-100 py-24 md:py-32 px-4 md:px-10 lg:px-16 border-t border-white/5 overflow-hidden"
    >
      {/* Background Ambience */}
      <div
        className="red-halo pointer-events-none"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -40%)",
          width: "60vw",
          height: "60vh",
          opacity: 0.25,
        }}
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10 mb-16">
        <span className="text-[#a31515] font-bold uppercase text-xs sm:text-sm md:text-base tracking-[0.2em] mb-2 flex items-center gap-1.5">
          <img
            src="/assets/spydy.png"
            alt=""
            className="w-4 h-4 object-contain opacity-90 drop-shadow-[0_0_6px_rgba(255,18,56,0.8)]"
            aria-hidden="true"
          />
          Featured Works
        </span>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white drop-shadow-md">
          PROJECTS.
        </h2>

        <div className="w-20 h-1.5 bg-[#a31515] mt-3 rounded-full shadow-[0_0_10px_rgba(163,21,21,0.8)]" />

        <a
          href="https://github.com/Tharun-S-28"
          target="_blank"
          rel="noopener noreferrer"
          className="glass glass-hover mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs sm:text-sm md:text-base font-bold text-gray-200 hover:text-white hover:-translate-y-0.5 group pointer-events-auto border border-white/10"
        >
          <Github className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
          <span>Explore All Repositories on GitHub</span>
          <span className="text-red-500 font-bold group-hover:translate-x-1 transition-transform">
            ↗
          </span>
        </a>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {projectsData.map((project, idx) => (
          <article
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="glass glass-panel-card group relative flex flex-col rounded-3xl overflow-hidden border border-white/10 hover:border-red-600/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-2xl text-left"
          >
            {/* Card Visual / Thumbnail Banner */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#121217] via-[#0d0d12] to-[#07070a] border-b border-white/10 flex items-center justify-center p-6">
              {/* Decorative Matrix / Red Orb Glow */}
              <div className="absolute inset-0 bg-radial from-red-600/15 via-transparent to-transparent opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />

              {/* Center Abstract Graphic / System Icon */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center border border-white/15 group-hover:border-red-500 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-black/50">
                  <Layers className="w-8 h-8 text-red-500" />
                </div>
                <span className="text-white font-black text-lg md:text-xl tracking-wider uppercase mt-3">
                  {project.title}
                </span>
                <span className="text-gray-400 text-xs font-semibold tracking-wide">
                  {project.subtitle}
                </span>
              </div>

              {/* Category Pill on top left */}
              <div className="absolute top-4 left-4 z-20">
                <span className="glass-chip-red text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-md">
                  {project.category}
                </span>
              </div>

              {/* Live or Source Badge on top right */}
              <div className="absolute top-4 right-4 z-20">
                {project.liveUrl ? (
                  <span className="glass-chip text-[10px] md:text-xs font-bold text-green-400 border border-green-500/30 px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    LIVE DEMO
                  </span>
                ) : (
                  <span className="glass-chip text-[10px] md:text-xs font-bold text-gray-300 px-2.5 py-1 rounded-full shadow-md">
                    CODE REPO
                  </span>
                )}
              </div>
            </div>

            {/* Card Content Area */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-5">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-red-500 font-bold block mb-1">
                  0{idx + 1} • {project.badge}
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="tech-pill glass-chip px-2.5 py-1 text-[11px] font-semibold text-gray-300 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="glass-chip px-2 py-1 text-[11px] font-semibold text-gray-400 rounded-lg">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons in footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 group-hover:text-white flex items-center gap-1 transition-colors">
                  <span>View Full Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-chip p-2 rounded-full text-gray-300 hover:text-white hover:border-red-500 transition-colors"
                      aria-label={`Open live demo of ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4 text-green-400" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-chip p-2 rounded-full text-gray-300 hover:text-white hover:border-red-500 transition-colors"
                      aria-label={`Open GitHub repository of ${project.title}`}
                    >
                      <Github className="w-4 h-4 text-gray-300 hover:text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
        onNavigate={handleNavigateModal}
      />
    </section>
  );
}
