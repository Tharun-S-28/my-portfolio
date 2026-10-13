import React, { useState } from "react";
import { Terminal, Tv, ChevronUp, ChevronDown } from "lucide-react";
import "./CyberHUD.css";

export default function CyberHUD({ onOpenTerminal, scanlines, onToggleScanlines }) {
  const [minimized, setMinimized] = useState(false);

  return (
    <aside className={`cyber-hud-container ${minimized ? "hud-minimized" : ""}`} aria-label="Cyber Controls">
      {/* Minimize / Toggle Bar */}
      <button
        className="hud-toggle-tab"
        onClick={() => setMinimized(!minimized)}
        title={minimized ? "Expand Cyber Telemetry" : "Minimize Cyber Telemetry"}
        aria-label="Toggle HUD display"
      >
        <span className="pulse-dot" />
        <span className="hud-tab-label">CYBER_TELEMETRY</span>
        {minimized ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {!minimized && (
        <div className="cyber-hud-panel cyber-corner-box">
          {/* Telemetry Row */}
          <div className="hud-telemetry-row">
            <div className="hud-status-chip">
              <span className="pulse-dot" />
              <span>NODE_ONLINE</span>
            </div>
            <span className="hud-metric-item">PING: 14MS</span>
            <span className="hud-metric-item">ENV: PROD</span>
          </div>

          {/* Quick Action Controls */}
          <div className="hud-action-row">
            {/* Launch Hacker CLI Button */}
            {onOpenTerminal && (
              <button
                className="hud-btn hud-btn-cli"
                onClick={onOpenTerminal}
                title="Open Interactive Cyber Terminal [Press ~]"
              >
                <Terminal size={14} />
                <span>&gt;_ CLI</span>
              </button>
            )}

            {/* CRT Scanline Toggle Button */}
            {onToggleScanlines && (
              <button
                className={`hud-btn ${scanlines ? "hud-btn-active" : ""}`}
                onClick={onToggleScanlines}
                title="Toggle Cyber CRT Scanline Simulation"
              >
                <Tv size={14} />
                <span>CRT: {scanlines ? "ON" : "OFF"}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}
