import React, { useEffect, useState, useRef } from "react";
import "./Loader.css";

const STATEMENT = "THE FULL-STACK DEVELOPER AND PROBLEM SOLVER YOU NEED";
const WORDS = STATEMENT.split(" ");

export default function GlitchLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading");
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let rafId = 0;
    let startTime = performance.now();
    targetRef.current = 1;

    const animate = (time) => {
      const delta = Math.min(64, time - startTime);
      startTime = time;

      const target = targetRef.current * 100;
      const next = Math.min(
        target,
        currentRef.current + Math.max(0.6, (target - currentRef.current) * 0.008 * delta)
      );
      currentRef.current = next;
      setProgress(Math.floor(next));

      if (next >= 99.5) {
        setProgress(100);
        setPhase("reveal");
        const timer = setTimeout(() => {
          document.body.style.overflow = "";
          if (onCompleteRef.current) onCompleteRef.current();
        }, 800);
        return () => clearTimeout(timer);
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = "";
    };
  }, []);

  const fraction = progress / 100;

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between p-6 sm:p-12 bg-[#050507] text-white select-none transition-opacity duration-700 ${
        phase === "reveal" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Top Tagline */}
      <div className="w-full max-w-7xl flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-red-500 flex items-center gap-2">
          <img
            src="/assets/spydy.png"
            alt=""
            className="w-4 h-4 object-contain opacity-90 drop-shadow-[0_0_6px_rgba(255,18,56,0.8)]"
            aria-hidden="true"
          />
          THARUN S • PORTFOLIO
        </span>
        <span className="text-xs uppercase tracking-widest font-mono text-gray-500">
          SYS_READY // 2026
        </span>
      </div>

      {/* Center Cinematic Statement */}
      <div className="flex flex-col items-center text-center px-4 max-w-4xl my-auto">
        <p
          className="text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight transition-all duration-300"
          style={{ filter: `blur(${(1 - fraction) * 4}px)` }}
          aria-hidden="true"
        >
          {WORDS.map((word, i) => {
            const wordThreshold = i / WORDS.length;
            const opacity = Math.max(0, Math.min(1, (fraction - wordThreshold * 0.7) * 3));
            return (
              <span
                key={i}
                className="inline-block mx-1.5 transition-opacity duration-150"
                style={{ opacity }}
              >
                {word === "FULL-STACK" || word === "DEVELOPER" ? (
                  <span className="text-red-500 drop-shadow-[0_0_12px_rgba(255,18,56,0.5)]">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </span>
            );
          })}
        </p>
      </div>

      {/* Bottom Counter & Bar */}
      <div className="w-full max-w-7xl flex flex-col gap-3">
        <div className="flex items-end justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
            INITIALIZING CORE ASSETS...
          </span>
          <span className="text-4xl sm:text-6xl font-black tracking-tight font-mono text-white">
            {progress}
            <span className="text-red-500 text-2xl">%</span>
          </span>
        </div>

        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-800 to-red-500 transition-all duration-100 ease-out shadow-[0_0_10px_rgba(255,18,56,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
