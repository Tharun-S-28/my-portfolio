import React from "react";
import { codingProfilesData } from "../../data/portfolioData";
import { Code2, ExternalLink } from "lucide-react";
import "./CodingProfiles.css";

export default function CodingProfiles() {
  return (
    <section
      id="coding-profiles"
      className="relative w-full text-gray-100 py-20 md:py-28 px-4 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background Red Halo */}
      <div
        className="red-halo pointer-events-none"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -40%)",
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
          Competitive Programming
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white drop-shadow-md">
          CODING PROFILES.
        </h2>
        <div className="w-20 h-1.5 bg-[#a31515] mt-3 rounded-full shadow-[0_0_10px_rgba(163,21,21,0.8)]" />
      </div>

      {/* Profiles Grid */}
      <div className="relative w-full max-w-5xl z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {codingProfilesData.map((profile) => (
          <div
            key={profile.id}
            className="glass glass-panel-card group p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center border border-white/15 group-hover:border-red-500 transition-colors shadow-md">
                    <Code2 className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl sm:text-2xl text-white group-hover:text-red-400 transition-colors">
                      {profile.platform}
                    </h3>
                    <span className="text-xs text-gray-400 font-mono">
                      @{profile.username}
                    </span>
                  </div>
                </div>

                <a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-chip p-2.5 rounded-full text-gray-200 hover:text-white hover:border-red-500 transition-colors"
                  aria-label={`Open ${profile.platform} profile`}
                >
                  <ExternalLink className="w-4 h-4 text-red-400" />
                </a>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                {profile.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {profile.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl glass border border-white/5 flex flex-col"
                  >
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {metric.label}
                    </span>
                    <span className="text-base sm:text-lg font-black text-white mt-1 group-hover:text-red-400 transition-colors">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile CTA */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-red w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(216,30,47,0.4)] hover:shadow-[0_0_25px_rgba(255,18,56,0.6)] transition-all"
              >
                <span>View {profile.platform} Handle</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
