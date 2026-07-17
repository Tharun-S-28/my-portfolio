import { useEffect, useRef } from "react";
import "./BackgroundFX.css";

export default function BackgroundFX() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);

  // Mouse glow
  useEffect(() => {
    const onMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Subtle floating particles on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    const count = isSmall ? 26 : 55;

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      hue: Math.random() > 0.5 ? "0, 229, 255" : "124, 77, 255",
      alpha: Math.random() * 0.4 + 0.15,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue}, ${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="bgfx" aria-hidden="true">
      <div className="bgfx-blob bgfx-blob-cyan" />
      <div className="bgfx-blob bgfx-blob-violet" />
      <canvas ref={canvasRef} className="bgfx-canvas" />
      <div ref={glowRef} className="bgfx-mouse-glow" />
    </div>
  );
}
