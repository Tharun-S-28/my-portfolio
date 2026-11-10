import React from "react";
import { achievementsData } from "../../data/portfolioData";
import { Trophy, Award, ExternalLink, Flame, Medal } from "lucide-react";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative w-full text-gray-100 py-24 md:py-32 px-4 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background Red Halo */}
      <div
        className="red-halo pointer-events-none"
        style={{
          top: "40%",
          left: "30%",
          width: "55vw",
          height: "55vh",
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
          Competitive Honors
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white drop-shadow-md">
          ACHIEVEMENTS.
        </h2>
        <div className="w-20 h-1.5 bg-[#a31515] mt-3 rounded-full shadow-[0_0_10px_rgba(163,21,21,0.8)]" />
      </div>

      {/* Quick Summary Badges */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 max-w-4xl z-10">
        <div className="glass px-5 py-2.5 rounded-full flex items-center gap-2 border border-white/10">
          <Trophy className="w-4 h-4 text-yellow-500" />
          <span className="text-xs sm:text-sm font-bold text-gray-200">
            2× 1st Place Wins
          </span>
        </div>
        <div className="glass px-5 py-2.5 rounded-full flex items-center gap-2 border border-white/10">
          <Medal className="w-4 h-4 text-gray-300" />
          <span className="text-xs sm:text-sm font-bold text-gray-200">
            4× 2nd Place Wins
          </span>
        </div>
        <div className="glass px-5 py-2.5 rounded-full flex items-center gap-2 border border-white/10">
          <Award className="w-4 h-4 text-amber-600" />
          <span className="text-xs sm:text-sm font-bold text-gray-200">
            1× 3rd Place Finish
          </span>
        </div>
        <div className="glass-chip-red px-5 py-2.5 rounded-full flex items-center gap-2 text-white">
          <Flame className="w-4 h-4 text-white" />
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
            7 Total Podium Victories
          </span>
        </div>
      </div>

      {/* Achievements Cards Grid */}
      <div className="relative w-full max-w-6xl z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {achievementsData.map((item, idx) => {
          const isFirst = item.placeType === "1st";
          const isSecond = item.placeType === "2nd";

          return (
            <div
              key={idx}
              className="glass glass-panel-card group p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span
                    className={`text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                      isFirst
                        ? "glass-chip-red text-white shadow-[0_0_12px_rgba(255,18,56,0.4)]"
                        : isSecond
                        ? "glass-chip text-white border border-red-500/30"
                        : "glass-chip text-gray-300"
                    }`}
                  >
                    {item.place} • {item.team}
                  </span>

                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    #{idx + 1}
                  </span>
                </div>

                <h3 className="font-black text-lg sm:text-xl md:text-2xl text-white group-hover:text-red-400 transition-colors">
                  {item.event}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm mt-1.5 flex items-center gap-1.5 font-medium">
                  <span>{item.college}</span>
                </p>
              </div>

              {item.verifiedUrl && (
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-semibold">
                    Verified Award
                  </span>
                  <a
                    href={item.verifiedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-chip inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-200 hover:text-white hover:border-red-500 transition-all"
                  >
                    <span>View Post</span>
                    <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
