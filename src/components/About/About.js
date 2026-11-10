import React from "react";
import { aboutData } from "../../data/portfolioData";
import { GraduationCap, BookOpen, MapPin, Calendar } from "lucide-react";
import "./About.css";

export default function About() {
  const coreToolkit = [
    "Java (OOP & DSA)",
    "JavaScript (ES6+)",
    "React.js",
    "Node.js & Express",
    "MongoDB & Mongoose",
    "Socket.IO",
    "TypeScript",
    "C Programming",
    "Git & GitHub",
    "Tailwind CSS",
    "RESTful APIs",
    "JWT & Auth",
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen text-gray-100 py-24 md:py-32 flex items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background Red Halo */}
      <div
        className="red-halo pointer-events-none"
        style={{
          top: "30%",
          left: "20%",
          width: "55vw",
          height: "55vh",
          opacity: 0.25,
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Heading + Story + Toolkit */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Section Heading */}
          <div className="flex flex-col gap-2">
            <span className="text-[#a31515] font-bold uppercase text-xs sm:text-sm md:text-base tracking-[0.2em] flex items-center gap-1.5">
              <img
                src="/assets/spydy.png"
                alt=""
                className="w-4 h-4 object-contain opacity-90 drop-shadow-[0_0_6px_rgba(255,18,56,0.8)]"
                aria-hidden="true"
              />
              The Story Behind The Code
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white drop-shadow-md">
              ABOUT THARUN S.
            </h2>
            <div className="w-24 h-1.5 bg-[#a31515] rounded-full mt-2 shadow-[0_0_10px_rgba(163,21,21,0.8)]" />
          </div>

          {/* Main Story Glass Card */}
          <div className="relative">
            <div className="red-halo" aria-hidden="true" style={{ inset: "-5%" }} />
            <div className="glass glass-panel-card relative rounded-3xl p-6 sm:p-10 md:p-12 flex flex-col gap-6 border border-white/10 shadow-2xl">
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
                {aboutData.bio[0]}
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {aboutData.bio[1]}
              </p>

              {/* Core Toolkit */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                  Core Toolkit &amp; Proficiencies
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-2.5">
                  {coreToolkit.map((tool) => (
                    <span
                      key={tool}
                      className="tech-pill glass-chip px-3.5 py-1.5 text-xs sm:text-sm font-bold text-gray-200 rounded-full cursor-default hover:text-white hover:border-red-500 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Coursework */}
              <div className="pt-2">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-red-500" />
                  Key Academic Coursework
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {aboutData.coursework.map((course) => (
                    <span
                      key={course}
                      className="glass-chip px-3 py-1 text-[11px] font-medium text-gray-300 rounded-lg"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Education Timeline Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-left">
          <div className="flex flex-col gap-1">
            <span className="text-[#a31515] font-bold uppercase text-xs sm:text-sm tracking-[0.2em]">
              Academic Foundation
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
              EDUCATION.
            </h3>
          </div>

          <div className="space-y-4">
            {aboutData.education.map((edu, idx) => (
              <div
                key={idx}
                className="glass glass-panel-card p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-red-600/40 transition-all duration-300 shadow-xl group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400">
                    <GraduationCap className="w-4 h-4 text-red-500" />
                    <span>{edu.degree}</span>
                  </div>
                  {edu.score && (
                    <span className="glass-chip-red text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full text-white shrink-0">
                      {edu.score}
                    </span>
                  )}
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                  {edu.institution}
                </h4>

                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-500" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    {edu.period}
                  </span>
                </div>

                {edu.highlight && (
                  <p className="text-xs text-gray-300 mt-3 pt-2 border-t border-white/5">
                    {edu.highlight}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
