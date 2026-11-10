import React, { useState } from "react";
import { certificatesData } from "../../data/portfolioData";
import { CheckCircle, X, Eye } from "lucide-react";
import "./Certificates.css";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section
      id="certificates"
      className="relative w-full text-gray-100 py-24 md:py-32 px-4 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background Red Glow */}
      <div
        className="red-halo pointer-events-none"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -40%)",
          width: "55vw",
          height: "55vh",
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
          Accreditations
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white drop-shadow-md">
          CERTIFICATES.
        </h2>
        <div className="w-20 h-1.5 bg-[#a31515] mt-3 rounded-full shadow-[0_0_10px_rgba(163,21,21,0.8)]" />
      </div>

      {/* Certificates Grid */}
      <div className="relative w-full max-w-6xl z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            onClick={() => cert.hasImage && setActiveCert(cert)}
            className={`glass glass-panel-card group p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between text-left ${
              cert.hasImage ? "cursor-pointer" : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="glass-chip-red text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white">
                  {cert.issuer}
                </span>

                <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-red-500" />
                  Verified
                </span>
              </div>

              <h3 className="font-black text-lg sm:text-xl text-white group-hover:text-red-400 transition-colors">
                {cert.title}
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2">
                {cert.credentialScope}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-medium">
                Official Credential
              </span>

              {cert.hasImage ? (
                <span className="glass-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-gray-200 group-hover:text-white group-hover:border-red-500 transition-all">
                  <Eye className="w-3.5 h-3.5 text-red-400" />
                  <span>Preview</span>
                </span>
              ) : (
                <span className="text-[11px] text-gray-500 font-semibold uppercase">
                  Verified Online
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Preview Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-2xl transition-opacity animate-fadeIn"
          />

          <div className="glass glass-strong relative z-10 max-w-3xl w-full rounded-3xl overflow-hidden border border-red-600/40 p-4 sm:p-6 my-auto animate-scaleUp">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div>
                <span className="glass-chip-red text-xs font-bold uppercase px-3 py-1 rounded-full text-white">
                  {activeCert.issuer}
                </span>
                <h4 className="text-lg font-black text-white mt-1">
                  {activeCert.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="glass-chip rounded-full p-2 text-gray-200 hover:bg-red-600/60 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden bg-black/50 aspect-[4/3] flex items-center justify-center border border-white/10">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
