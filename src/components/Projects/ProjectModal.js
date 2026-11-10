import React, { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink, CheckCircle2, Send } from "lucide-react";
import { GithubIcon as Github } from "../Icons";

export default function ProjectModal({ project, onClose, onNavigate }) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  const isOpen = project !== null;

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Dimmed backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-2xl transition-opacity animate-fadeIn"
      />

      {/* Modal Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="glass glass-strong relative z-10 flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-red-600/35 shadow-2xl shadow-red-950/50 my-auto animate-scaleUp text-left"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 sm:px-7 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="glass-chip-red shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="truncate text-base sm:text-lg font-black text-white">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigate(-1)}
              aria-label="Previous project"
              className="glass-chip rounded-full p-2 text-gray-200 hover:text-white hover:border-red-500 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate(1)}
              aria-label="Next project"
              className="glass-chip rounded-full p-2 text-gray-200 hover:text-white hover:border-red-500 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close project modal"
              className="glass-chip rounded-full p-2 text-gray-200 hover:bg-red-600/60 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Project Summary Banner */}
          <div className="p-5 sm:p-6 rounded-2xl glass border border-white/10 bg-gradient-to-r from-red-950/20 via-black to-[#0b0b10]">
            <span className="text-xs uppercase tracking-[0.2em] text-red-500 font-bold block mb-1">
              Architecture &amp; Mission Overview
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              {project.subtitle}
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
              {project.description}
            </p>
          </div>

          {/* Key Features & Engineering Highlights */}
          {project.features && project.features.length > 0 && (
            <div>
              <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                Key Engineering Highlights &amp; Architecture
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="glass-chip p-3.5 rounded-xl flex items-start gap-3 border border-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-200 leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Technologies &amp; Libraries
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="tech-pill glass-chip px-3.5 py-1.5 text-xs sm:text-sm font-bold text-gray-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 bg-white/[0.04] p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
              {project.badge}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-red inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(216,30,47,0.5)] hover:scale-105 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-white hover:border-red-500 transition-colors"
              >
                <span>GitHub Source</span>
                <Github className="h-4 w-4 text-red-400" />
              </a>
            )}

            <a
              href="#contact"
              onClick={onClose}
              className="glass inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
            >
              <span>Discuss Project</span>
              <Send className="h-3.5 w-3.5 text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
