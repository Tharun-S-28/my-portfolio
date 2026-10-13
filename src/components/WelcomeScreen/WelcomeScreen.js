import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import "./WelcomeScreen.css";

const TERMINAL_COMMANDS = [
  "git checkout main --portfolio",
  "initializing full-stack core [Java • MERN • DSA]...",
  "mounting systems & visual architecture...",
  "ready: welcome to the world of Tharun S.",
];

export default function WelcomeScreen({ onEnter }) {
  const [isExiting, setIsExiting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Subtle Matrix digital particles background
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

    const chars = "01010101THARUNCODEJAVA21REACTMERN874DSASYS_OKλΞ◈";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(5, 11, 8, 0.22)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "JetBrains Mono", Consolas, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        if (Math.random() > 0.88) {
          ctx.fillStyle = "#ffffff";
        } else {
          ctx.fillStyle = "rgba(57, 255, 136, 0.65)";
        }

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.985) {
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

  // Terminal Typing Animation Effect
  useEffect(() => {
    const currentTarget = TERMINAL_COMMANDS[textIndex];
    let timeout;

    if (!isDeleting) {
      if (displayedText.length < currentTarget.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentTarget.slice(0, displayedText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 25);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TERMINAL_COMMANDS.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex]);

  // Handle Enter Portfolio Action
  const handleEnter = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      if (onEnter) onEnter();
    }, 600);
  }, [isExiting, onEnter]);

  // Keyboard shortcut: Press Enter or Space to enter
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.code === "Space") {
        e.preventDefault();
        handleEnter();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleEnter]);

  return (
    <div
      className={`welcome-screen-overlay ${
        isExiting ? "welcome-screen-exiting" : ""
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio Welcome Screen"
    >
      {/* Background Matrix Rain */}
      <canvas ref={canvasRef} className="welcome-canvas-bg" />

      {/* Atmospheric Vignette & Soft Glowing Orb */}
      <div className="welcome-vignette" />
      <div className="welcome-glow-orb" />

      {/* Main Content Card */}
      <div className="welcome-card-container">
        {/* System Status Badge */}
        <div className="welcome-badge">
          <span className="welcome-badge-dot" />
          <span>INITIALIZING EXPERIENCE • THARUN S</span>
        </div>

        {/* Headline */}
        <h1 className="welcome-headline">
          &ldquo;Every line of code tells a{" "}
          <span className="welcome-headline-gradient">story</span>.&rdquo;
        </h1>

        {/* Subtitle */}
        <p className="welcome-subtitle">
          Step into my world of code, creativity, and problem-solving.
        </p>

        {/* Terminal-style text animation / typing effect */}
        <div className="welcome-terminal-box">
          <div className="terminal-mini-dots">
            <span className="mini-dot mini-dot-red" />
            <span className="mini-dot mini-dot-yellow" />
            <span className="mini-dot mini-dot-green" />
          </div>
          <div className="terminal-typing-content">
            <span className="terminal-prompt-prefix">&gt;</span>
            <span className="terminal-typing-text">{displayedText}</span>
            <span className="terminal-cursor-blink" />
          </div>
        </div>

        {/* Enter Portfolio Button */}
        <button
          className="welcome-enter-btn"
          onClick={handleEnter}
          aria-label="Enter Portfolio"
          autoFocus
        >
          <span>ENTER PORTFOLIO</span>
          <ArrowRight size={18} className="btn-arrow-icon" />
        </button>

        <span className="welcome-key-hint">
          Press <kbd className="key-badge">ENTER</kbd> or click to begin
        </span>
      </div>

      {/* Footer Text */}
      <footer className="welcome-footer-text">
        DESIGNED &amp; BUILT BY THARUN S
      </footer>
    </div>
  );
}
