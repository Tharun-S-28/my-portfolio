import React from "react";
import { ArrowDown, Download, Sparkles, Code2, Trophy } from "lucide-react";
import profileImg from "../../assets/profile.jpg";

export default function Hero() {
  return (
    <div id="hero" className="w-full flex flex-col overflow-hidden">
      <section className="relative w-full min-h-[100svh] flex items-center justify-center pt-28 pb-16 px-4 md:px-10 lg:px-16 overflow-hidden">
        {/* Background Atmosphere Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/hero-red-bg.jpg')` }}
          aria-hidden="true"
        />

        {/* Ambient Red Halo */}
        <div
          className="red-halo pointer-events-none"
          style={{
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -20%)",
            width: "70vw",
            height: "70vh",
            opacity: 0.35,
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 text-left">
            {/* Category Tracked Label */}
            <div className="flex items-center gap-2">
              <img
                src="/assets/spydy.png"
                alt=""
                className="w-4 h-4 object-contain opacity-90 drop-shadow-[0_0_6px_rgba(255,18,56,0.8)]"
                aria-hidden="true"
              />
              <span className="text-[#ff2a3b] font-bold uppercase text-[11px] sm:text-xs md:text-sm tracking-[0.25em]">
                COMPUTER SCIENCE STUDENT • MERN DEVELOPER
              </span>
            </div>

            {/* Massive Heading */}
            <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.88] uppercase drop-shadow-lg">
              THARUN S
            </h1>

            {/* Subhead Role Slashes */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-white font-extrabold text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider">
              <span>FULL-STACK DEVELOPER</span>
              <span className="text-[#ff2a3b] font-bold">/</span>
              <span>MERN STACK</span>
              <span className="text-[#ff2a3b] font-bold">/</span>
              <span>JAVA PROGRAMMER</span>
            </div>

            {/* Bio Tagline */}
            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-normal tracking-wide max-w-2xl leading-relaxed">
              B.E. Computer Science and Engineering student at PSNA College of Engineering and
              Technology (PSNACET, 2024–2028, CGPA 8.74). Dedicated to building high-performance web applications, scalable MERN architectures, and solving complex DSA challenges.
            </p>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 sm:mt-4">
              <a
                href="#projects"
                className="glass-red inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(216,30,47,0.5)] hover:shadow-[0_0_35px_rgba(255,18,56,0.8)] hover:scale-105 transition-all duration-300"
              >
                EXPLORE MY WORK
              </a>

              <a
                href="#contact"
                className="glass glass-hover inline-flex items-center justify-center px-5 py-3 sm:px-7 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              >
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                download="Tharun_S_Resume.pdf"
                className="glass glass-hover inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-red-500" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                <Code2 className="w-4 h-4 text-red-500" />
                <span>
                  <strong className="text-white font-bold">400+</strong> DSA Solved
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                <Trophy className="w-4 h-4 text-red-500" />
                <span>
                  <strong className="text-white font-bold">7</strong> Hackathon Wins
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                <Sparkles className="w-4 h-4 text-red-500" />
                <span>
                  <strong className="text-white font-bold">8.74</strong> CGPA
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual / Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Glow backdrops */}
              <div
                className="red-halo"
                style={{ inset: "-10%", opacity: 0.5 }}
                aria-hidden="true"
              />

              <div className="glass glass-panel-card relative rounded-3xl p-3 md:p-4 border border-white/15 overflow-hidden transition-all duration-500 group-hover:border-red-600/50 shadow-2xl">
                {/* Profile Photo with subtle zoom */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#0d0d12]">
                  <img
                    src={profileImg}
                    alt="Tharun S"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle red gradient sheen at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent opacity-80" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-xl glass backdrop-blur-xl border border-white/10">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-red-400 font-bold">
                        B.E. CSE @ PSNACET
                      </p>
                      <p className="text-sm font-extrabold text-white">
                        Full-Stack &amp; MERN Engineer
                      </p>
                    </div>
                    <span className="glass-chip-red text-[11px] font-black px-2.5 py-1 rounded-full text-white">
                      8.74 CGPA
                    </span>
                  </div>
                </div>

                {/* Floating Chips */}
                <div className="mt-3 flex flex-wrap gap-2 justify-center">
                  <span className="glass-chip px-3 py-1 text-xs font-semibold text-gray-300">
                    React &amp; Node.js
                  </span>
                  <span className="glass-chip px-3 py-1 text-xs font-semibold text-gray-300">
                    Java &amp; DSA
                  </span>
                  <span className="glass-chip px-3 py-1 text-xs font-semibold text-gray-300">
                    Socket.IO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a
          href="#stats"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors flex flex-col items-center gap-1 group z-20"
          aria-label="Scroll down to statistics"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 group-hover:text-red-400">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 text-red-500 animate-bounce" />
        </a>
      </section>
    </div>
  );
}
