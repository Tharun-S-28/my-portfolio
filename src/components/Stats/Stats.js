import React, { useRef, useEffect } from "react";
import { statsData } from "../../data/portfolioData";
import "./Stats.css";

export default function Stats() {
  const panelRef = useRef(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const onPointerMove = (e) => {
      const rect = panel.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      panel.style.setProperty("--mx", `${x}%`);
      panel.style.setProperty("--my", `${y}%`);
    };

    panel.addEventListener("pointermove", onPointerMove);
    return () => panel.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="relative w-full text-gray-100 py-16 md:py-24 px-4 md:px-10 lg:px-16 overflow-hidden border-t border-white/5"
    >
      <h2 id="stats-heading" className="sr-only">
        Key Metrics and Engineering Impact
      </h2>

      <div
        ref={panelRef}
        className="stat-panel glass glass-panel-card relative z-10 max-w-7xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
      >
        <div className="stat-light pointer-events-none" aria-hidden="true" />
        <div className="stat-rim pointer-events-none" aria-hidden="true" />

        <dl className="relative z-10 m-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="stat-item px-3 py-6 sm:px-5 sm:py-8 md:px-6 md:py-10 flex flex-col justify-center items-center text-center group hover:bg-white/[0.02] transition-colors"
            >
              <div className="stat-cq flex flex-col-reverse items-center gap-2">
                <dt className="stat-label text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.16em] leading-snug text-gray-400 group-hover:text-gray-200 transition-colors">
                  {stat.label}
                </dt>
                <dd className="m-0">
                  <div
                    className="stat-fig font-black uppercase text-white tracking-tight flex items-baseline justify-center"
                    aria-label={`${stat.value}${stat.suffix}`}
                  >
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white group-hover:text-red-500 transition-colors drop-shadow-[0_0_12px_rgba(255,18,56,0.3)]">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="stat-suffix text-base sm:text-lg md:text-xl text-red-500 font-extrabold ml-0.5">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
