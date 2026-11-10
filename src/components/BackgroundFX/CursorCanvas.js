import React, { useEffect, useRef } from "react";

const bF = 160;
const xF = 24;
const SF = 14;
const CF = "255,255,255";
const wF = "255,32,32";
const TF = "160,0,18";

function EF(e, t, n, r, i) {
  i.length = 0;
  let a = 4 + Math.floor(Math.random() * 4);
  let o = e;
  let s = t;
  i.push(o, s);
  for (let step = 1; step <= a; step++) {
    let angle = n + (Math.random() - 0.5) * 1.1;
    let dist = r / a;
    o += Math.cos(angle) * dist;
    s += Math.sin(angle) * dist;
    i.push(o, s);
  }
}

export default function CursorCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (
      !canvas ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    )
      return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles = Array.from({ length: bF }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      life: 0,
      max: 1,
      size: 1,
      hot: false,
    }));

    const sparks = Array.from({ length: xF }, () => ({
      pts: [],
      life: 0,
      max: 1,
      width: 1,
      bright: false,
    }));

    const trails = [];
    let pIdx = 0;
    let sIdx = 0;
    let lastX = -9999;
    let lastY = -9999;
    let prevX = -9999;
    let prevY = -9999;
    let vel = 0;
    let glow = 0;
    let raf = 0;
    let active = false;
    let lastTime = performance.now();
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
    };
    resize();

    const emitParticle = (x, y, dx, dy, speed) => {
      const p = particles[pIdx];
      pIdx = (pIdx + 1) % bF;
      const angle =
        Math.atan2(dy, dx) + Math.PI + (Math.random() - 0.5) * 2.6;
      const speedMult = 0.05 + Math.random() * 0.25 * (0.5 + speed);
      p.x = x;
      p.y = y;
      p.vx = Math.cos(angle) * speedMult + dx * 0.02;
      p.vy = Math.sin(angle) * speedMult + dy * 0.02;
      p.max = p.life = 250 + Math.random() * 400;
      p.size = 0.6 + Math.random() * 1.6;
      p.hot = Math.random() < 0.15;
    };

    const emitSpark = (x, y, speed, bright) => {
      const s = sparks[sIdx];
      sIdx = (sIdx + 1) % xF;
      EF(
        x,
        y,
        Math.random() * Math.PI * 2,
        (10 + Math.random() * 28) * (bright ? 1.8 : 1) * (0.6 + speed * 0.6),
        s.pts
      );
      s.max = s.life = bright ? 160 : 70 + Math.random() * 80;
      s.width = bright ? 1.6 : 0.6 + Math.random() * 0.8;
      s.bright = bright;
    };

    const onPointerMove = (e) => {
      if (e.pointerType !== "mouse") return;
      lastX = e.clientX;
      lastY = e.clientY;
      if (prevX < -999) {
        prevX = lastX;
        prevY = lastY;
      }
      const dx = lastX - prevX;
      const dy = lastY - prevY;
      const dist = Math.hypot(dx, dy);
      vel = Math.min(1.5, vel * 0.6 + dist / 40);
      const now = performance.now();
      trails.push({ x: lastX, y: lastY, t: now });
      if (trails.length > SF) trails.shift();

      const count = Math.min(
        8,
        Math.floor(dist / 6) + (Math.random() < 0.4 ? 1 : 0)
      );
      for (let i = 0; i < count; i++) {
        const t = Math.random();
        emitParticle(prevX + dx * t, prevY + dy * t, dx, dy, vel);
      }

      if (Math.random() < 0.15 + vel * 0.4) emitSpark(lastX, lastY, vel, false);
      if (dist > 45 && Math.random() < 0.25) emitSpark(lastX, lastY, vel, true);

      glow = Math.min(1, glow + dist / 120);
      prevX = lastX;
      prevY = lastY;

      if (!active) {
        active = true;
        lastTime = now;
        raf = requestAnimationFrame(render);
      }
    };

    const render = (time) => {
      const delta = Math.min(48, time - lastTime);
      lastTime = time;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.globalCompositeOperation = "lighter";

      let hasActiveElements = false;

      glow *= Math.pow(0.992, delta);
      if (glow > 0.02) {
        hasActiveElements = true;
        const grad = ctx.createRadialGradient(lastX, lastY, 0, lastX, lastY, 70);
        grad.addColorStop(0, `rgba(255, 0, 30, ${0.14 * glow})`);
        grad.addColorStop(1, "rgba(255, 0, 30, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(lastX - 70, lastY - 70, 140, 140);
      }

      while (trails.length && time - trails[0].t > 220) trails.shift();

      if (trails.length > 1) {
        hasActiveElements = true;
        ctx.lineCap = "round";
        for (let i = 1; i < trails.length; i++) {
          const ratio = 1 - (time - trails[i].t) / 220;
          ctx.strokeStyle = `rgba(${TF}, ${ratio * 0.6})`;
          ctx.lineWidth = 3 * ratio;
          ctx.beginPath();
          ctx.moveTo(trails[i - 1].x, trails[i - 1].y);
          ctx.lineTo(trails[i].x, trails[i].y);
          ctx.stroke();

          ctx.strokeStyle = `rgba(${wF}, ${ratio * 0.5})`;
          ctx.lineWidth = 0.8 * ratio;
          ctx.stroke();
        }
      }

      for (const s of sparks) {
        if (s.life <= 0) continue;
        s.life -= delta;
        hasActiveElements = true;
        const ratio =
          Math.max(0, s.life / s.max) * (Math.random() < 0.25 ? 0.4 : 1);
        ctx.beginPath();
        ctx.moveTo(s.pts[0], s.pts[1]);
        for (let i = 2; i < s.pts.length; i += 2) {
          ctx.lineTo(s.pts[i], s.pts[i + 1]);
        }
        ctx.shadowBlur = s.bright ? 14 : 8;
        ctx.shadowColor = "rgba(255, 0, 30, 0.35)";
        ctx.strokeStyle = `rgba(${wF}, ${ratio * 0.85})`;
        ctx.lineWidth = s.width * 2;
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `rgba(${CF}, ${ratio * (s.bright ? 0.8 : 0.45)})`;
        ctx.lineWidth = s.width * 0.5;
        ctx.stroke();
      }

      for (const p of particles) {
        if (p.life <= 0) continue;
        p.life -= delta;
        hasActiveElements = true;
        const ratio = Math.max(0, p.life / p.max);
        const prevPx = p.x;
        const prevPy = p.y;
        p.x += p.vx * delta;
        p.y += p.vy * delta;
        p.vx *= 0.985;
        p.vy *= 0.985;
        ctx.strokeStyle = `rgba(${p.hot ? CF : wF}, ${ratio * 0.9})`;
        ctx.lineWidth = p.size * ratio;
        ctx.beginPath();
        ctx.moveTo(prevPx - p.vx * 18, prevPy - p.vy * 18);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }

      vel *= Math.pow(0.95, delta / 16);

      if (hasActiveElements) {
        raf = requestAnimationFrame(render);
      } else {
        active = false;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="spark-cursor pointer-events-none fixed inset-0 z-50 h-full w-full"
      aria-hidden="true"
    />
  );
}
