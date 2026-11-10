import React from "react";
import { skillsData } from "../../data/portfolioData";
import {
  Code,
  Layout,
  Server,
  Database,
  FileCode,
  Cpu,
  Radio,
  Terminal,
  Palette,
  GitBranch,
} from "lucide-react";
import "./Skills.css";

const iconMap = {
  Code: Code,
  Layout: Layout,
  Server: Server,
  Database: Database,
  FileCode: FileCode,
  Cpu: Cpu,
  Radio: Radio,
  Terminal: Terminal,
  Palette: Palette,
  GitBranch: GitBranch,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full text-gray-100 py-24 md:py-32 px-4 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background Red Glow */}
      <div
        className="red-halo pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vh",
          opacity: 0.25,
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
          Arsenal &amp; Expertise
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white drop-shadow-md">
          TECHNICAL SKILLS.
        </h2>
        <div className="w-20 h-1.5 bg-[#a31515] mt-3 rounded-full shadow-[0_0_10px_rgba(163,21,21,0.8)]" />
      </div>

      {/* Skills Matrix Grid */}
      <div className="relative w-full max-w-6xl z-10">
        <div className="grid-blur relative grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {skillsData.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code;
            const isMaster = skill.level === "Master";

            return (
              <div
                key={skill.name}
                className="matrix-item glass glass-grid-card group p-5 md:p-7 rounded-3xl flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 shadow-xl text-left"
              >
                <div className="flex items-center gap-4 md:gap-5 min-w-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl glass flex items-center justify-center shrink-0 border border-white/10 group-hover:border-red-500/60 group-hover:scale-105 transition-all duration-300 shadow-md">
                    <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-red-500" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-black text-base sm:text-lg md:text-xl text-gray-100 group-hover:text-red-500 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] md:text-xs font-semibold text-gray-400 uppercase tracking-wider block mt-0.5">
                      {skill.category}
                    </span>
                    <p className="text-gray-400 text-xs mt-1 hidden md:block line-clamp-1">
                      {skill.description}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-[10px] md:text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shrink-0 ${
                    isMaster
                      ? "glass-chip-red text-white shadow-[0_0_12px_rgba(255,18,56,0.4)]"
                      : "glass-chip text-gray-200 border border-white/10"
                  }`}
                >
                  {skill.level}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
