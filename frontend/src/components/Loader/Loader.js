import React, { useEffect, useState, useRef } from "react";
import { Terminal, ShieldCheck, Zap, FastForward } from "lucide-react";
import "./Loader.css";

const BOOT_LOGS = [
  "KERNEL_INIT: Mounting Tharun OS (Core v4.18)...",
  "IDENTITY: Tharun S | Computer Science Engineering (PSNACET)",
  "MODULES: Java 21, React.js, Node.js, Express, MongoDB Atlas",
  "ALGORITHMS: 400+ DSA Solved | CGPA 8.74 Indexed",
  "THREE_JS: Initializing Deep-Space WebGL Quantum Core...",
  "STATUS: All security protocols decrypted. ACCESS GRANTED.",
];

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [glitchOut, setGlitchOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const canvasRef = useRef(null);

  // Matrix stream background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const characters = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#%&*<>{}[]λΞ◈";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(2, 10, 5, 0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Top of stream glows bright white
        if (Math.random() > 0.85) {
          ctx.fillStyle = "#ffffff";
        } else {
          ctx.fillStyle = "rgba(0, 255, 136, 0.7)";
        }

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Boot sequence timer & progress ticker
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return next > 100 ? 100 : next;
      });
    }, 60);

    const logInterval = setInterval(() => {
      setCurrentLogIndex((prev) => (prev < BOOT_LOGS.length - 1 ? prev + 1 : prev));
    }, 280);

    // Keyboard shortcut to skip
    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.code === "Space") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // When progress reaches 100, trigger digital warp exit
  useEffect(() => {
    if (progress >= 100) {
      const glitchTimer = setTimeout(() => setGlitchOut(true), 300);
      const fadeTimer = setTimeout(() => setFading(true), 600);
      const removeTimer = setTimeout(() => setVisible(false), 1000);
      return () => {
        clearTimeout(glitchTimer);
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress]);

  const handleSkip = () => {
    setProgress(100);
    setGlitchOut(true);
    setFading(true);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`hacker-loader-screen ${fading ? "hacker-loader-fade" : ""} ${
        glitchOut ? "hacker-glitch-exit" : ""
      }`}
    >
      {/* Background Matrix Rain */}
      <canvas ref={canvasRef} className="matrix-bg-canvas" />

      {/* CRT Scanline Scan & Vignette */}
      <div className="loader-scanline-mesh" />

      {/* Center Cyber Terminal Frame */}
      <div className="hacker-terminal-card cyber-corner-box">
        {/* Terminal Header */}
        <div className="hacker-terminal-header">
          <div className="terminal-dots">
            <span className="dot-red" />
            <span className="dot-yellow" />
            <span className="dot-green" />
          </div>
          <div className="terminal-hud-title">
            <Terminal size={14} className="terminal-hud-icon" />
            <span>ROOT_SESSION://THARUN_S@QUANTUM-CORE</span>
          </div>
          <div className="terminal-status-badge">
            <span className="pulse-dot" />
            <span>ENCRYPTED</span>
          </div>
        </div>

        {/* Big Glitch Brand */}
        <div className="hacker-brand-banner">
          <div className="hacker-ascii-name">
            <span className="hacker-bracket">&lt;</span>
            <span className="hacker-glow-name">THARUN S</span>
            <span className="hacker-bracket">/&gt;</span>
          </div>
          <p className="hacker-brand-sub">
            FULL-STACK DEVELOPER • JAVA PROGRAMMER • 3D WEB ARCHITECT
          </p>
        </div>

        {/* Live Typing Log Streams */}
        <div className="hacker-log-stream" aria-live="polite">
          {BOOT_LOGS.slice(0, currentLogIndex + 1).map((log, i) => (
            <div key={i} className="hacker-log-row">
              <span className="log-prompt">&gt;</span>
              <span className="log-text">{log}</span>
              {i === currentLogIndex && <span className="log-cursor">_</span>}
            </div>
          ))}
        </div>

        {/* Progress Matrix Block */}
        <div className="hacker-progress-section">
          <div className="hacker-progress-labels">
            <span className="progress-sys-stat">
              <Zap size={13} className="text-cyan-accent" />
              SYSTEM OVERDRIVE: {progress}%
            </span>
            <span className="progress-auth-stat">
              <ShieldCheck size={13} className="text-cyan-accent" />
              CLEARANCE: LEVEL-1
            </span>
          </div>

          <div className="hacker-bar-track">
            <div
              className="hacker-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Footer Actions & Skip Button */}
        <div className="hacker-terminal-footer">
          <span className="hacker-shortcut-tip">
            ESC / SPACE TO INSTANT BYPASS
          </span>
          <button
            className="btn-hacker-skip"
            onClick={handleSkip}
            aria-label="Skip boot sequence"
          >
            <span>BYPASS BOOT</span>
            <FastForward size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
