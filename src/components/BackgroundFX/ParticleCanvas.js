import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const VERTEX_SHADER = `
  uniform float uTime;
  uniform float uTravel;
  uniform float uDepth;
  uniform float uSpeed;
  uniform float uPixelRatio;
  attribute float aSize;
  attribute float aSeed;
  varying float vAlpha;
  varying float vSeed;
  varying float vSize;
  void main() {
    vec3 p = position;
    float z = mod(p.z + uTravel, uDepth) - uDepth * 0.5;
    p.z = z;
    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    float dist = -mvPosition.z;
    gl_PointSize = aSize * uPixelRatio * (28.0 / max(dist, 1.0));
    float fadeFar = smoothstep(-uDepth * 0.5, -uDepth * 0.25, z);
    float fadeNear = 1.0 - smoothstep(0.0, uDepth * 0.45, z);
    float pulse = 0.8 + 0.2 * sin(uTime * 3.0 + aSeed * 6.28);
    float near = 1.0 - smoothstep(2.0, 5.5, z);
    vAlpha = fadeFar * fadeNear * pulse * (0.35 + aSeed * 0.65) * (0.55 + near * 0.75);
    vSeed = aSeed;
    vSize = aSize;
  }
`;

const FRAGMENT_SHADER = `
  varying float vAlpha;
  varying float vSeed;
  varying float vSize;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float core = exp(-d * d * 60.0);
    float halo = exp(-d * d * 7.0) * (0.35 + vSize * 0.04);
    float a = (core + halo) * vAlpha;
    if (a < 0.003) discard;
    vec3 col = mix(vec3(0.75, 0.03, 0.08), vec3(1.0, 0.32, 0.30), core * (0.4 + vSeed * 0.6));
    gl_FragColor = vec4(col * a, a);
  }
`;

export default function ParticleCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);

    renderer.setPixelRatio(pixelRatio);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200);
    camera.position.set(0, 0, 6);

    const count = isMobile ? 900 : 2200;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const seeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const radius = Math.pow(Math.random(), 0.7) * 26;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius * 1.4 + (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = Math.sin(angle) * radius * 0.9 + (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = -Math.random() * 70;
      sizes[i] = Math.random() < 0.06 ? 7 + Math.random() * 11 : 1.1 + Math.random() * 3.4;
      seeds[i] = Math.random();
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));

    const uniforms = {
      uTime: { value: 0 },
      uTravel: { value: 0 },
      uDepth: { value: 70 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uSpeed: { value: 0 },
      uPixelRatio: { value: pixelRatio },
      uClock: { value: 0 },
      uAspect: { value: 1 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms,
    });

    const particles = new THREE.Points(geometry, material);
    particles.frustumCulled = false;
    scene.add(particles);

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      uniforms.uAspect.value = w / h;
    };
    onResize();
    window.addEventListener("resize", onResize);

    const mouse = { x: 0, y: 0 };
    const onPointerMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let travel = 0;
    let targetTravel = 0;
    let lastScrollY = window.scrollY;
    let currentSpeed = 0;
    const startTime = performance.now();
    let lastTime = startTime;
    let animId;

    const animate = (time) => {
      animId = requestAnimationFrame(animate);
      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      targetTravel += scrollDiff * 0.02;
      const prevTravel = travel;
      travel += (targetTravel - travel) * (1 - Math.exp(-6 * delta));

      const instantSpeed = Math.min(
        Math.abs(travel - prevTravel) / Math.max(delta, 0.001) / 25,
        1
      );
      currentSpeed += (instantSpeed - currentSpeed) * (1 - Math.exp(-8 * delta));

      uniforms.uTime.value = prefersReducedMotion ? 0 : (time - startTime) / 1000;
      uniforms.uTravel.value = travel;
      uniforms.uSpeed.value = currentSpeed;
      uniforms.uClock.value = (time - startTime) / 1000;
      uniforms.uMouse.value.x += (mouse.x - uniforms.uMouse.value.x) * (1 - Math.exp(-3 * delta));
      uniforms.uMouse.value.y += (mouse.y - uniforms.uMouse.value.y) * (1 - Math.exp(-3 * delta));

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 bg-[#050507]"
    />
  );
}
