import React from "react";
import { internshipsData } from "../../data/portfolioData";
import { Calendar, MapPin, ExternalLink, CheckCircle } from "lucide-react";
import "./Internships.css";

export default function Internships() {
  return (
    <section
      id="internships"
      className="relative w-full text-gray-100 py-24 md:py-32 px-4 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background Glow */}
      <div
        className="red-halo pointer-events-none"
        style={{
          top: "40%",
          left: "60%",
          width: "50vw",
          height: "50vh",
          opacity: 0.2,
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14 md:mb-16 z-10">
        <span className="text-[#a31515] font-bold uppercase text-xs sm:text-sm md:text-base tracking-[0.2em] mb-2 flex items-center gap-1.5">
          <img
            src="/assets/spydy.png"
            alt=""
            className="w-4 h-4 object-contain opacity-90 drop-shadow-[0_0_6px_rgba(255,18,56,0.8)]"
            aria-hidden="true"
          />
          Professional Experience
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white drop-shadow-md">
          INTERNSHIPS.
        </h2>
        <div className="w-20 h-1.5 bg-[#a31515] mt-3 rounded-full shadow-[0_0_10px_rgba(163,21,21,0.8)]" />
      </div>

      {/* Internships List */}
      <div className="relative w-full max-w-4xl z-10 space-y-5">
        {internshipsData.map((item, idx) => (
          <div
            key={item.id}
            className="glass glass-grid-card group relative flex flex-col md:flex-row items-start md:items-center gap-5 p-6 md:p-8 rounded-3xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl text-left"
          >
            {/* Number Pill */}
            <span className="glass-chip shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-sm md:text-lg font-black tabular-nums text-gray-200 group-hover:text-white group-hover:border-red-500 transition-colors shadow-md">
              0{idx + 1}
            </span>

            {/* Content Body */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                <span className="glass-chip-red text-[10px] md:text-xs font-black uppercase tracking-wider px-3 py-0.5 rounded-full text-white">
                  {item.company}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-red-500" />
                  {item.duration}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-gray-500" />
                  {item.workMode}
                </span>
              </div>

              <h3 className="font-black text-xl sm:text-2xl text-white group-hover:text-red-400 transition-colors">
                {item.position}
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2">
                {item.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="tech-pill glass-chip px-3 py-1 text-xs font-semibold text-gray-300 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action / Certificate Link */}
            {item.verifiedUrl && (
              <div className="shrink-0 self-end md:self-center mt-3 md:mt-0">
                <a
                  href={item.verifiedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-white border border-white/10 group-hover:border-red-500 transition-all"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-red-500" />
                  <span>Verified Credential</span>
                  <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
