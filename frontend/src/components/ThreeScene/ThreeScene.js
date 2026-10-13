import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./ThreeScene.css";

export default function ThreeScene() {
  const mountRef = useRef(null);
  const isWebGLAvailable = useRef(true);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        isWebGLAvailable.current = false;
        return;
      }
    } catch (e) {
      isWebGLAvailable.current = false;
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050b08, 0.012);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      250
    );
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({
      powerPreference: "high-performance",
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // LIGHTING - Dark Green & White Hacker Theme
    const ambientLight = new THREE.AmbientLight(0x041c0e, 1.8);
    scene.add(ambientLight);

    const mainGreenLight = new THREE.DirectionalLight(0x39ff88, 2.6);
    mainGreenLight.position.set(5, 8, 10);
    scene.add(mainGreenLight);

    const whiteRimLight = new THREE.DirectionalLight(0xffffff, 2.2);
    whiteRimLight.position.set(-8, -4, -15);
    scene.add(whiteRimLight);

    const centerPillarLight = new THREE.PointLight(0x39ff88, 3.5, 45);
    centerPillarLight.position.set(0, 2, 2);
    scene.add(centerPillarLight);

    // 1. STARFIELD & COSMIC DUST
    const starCount = window.innerWidth < 768 ? 1600 : 3200;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const matrixGreenColor = new THREE.Color(0x39ff88);
    const whiteColor = new THREE.Color(0xffffff);
    const emeraldColor = new THREE.Color(0x10b981);
    const deepGreenColor = new THREE.Color(0x047857);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 75;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 65;
      // Stars stretch from z = +15 down to z = -120
      starPositions[i3 + 2] = 15 - Math.random() * 135;

      const rand = Math.random();
      let col = whiteColor;
      if (rand < 0.45) col = matrixGreenColor;
      else if (rand < 0.7) col = emeraldColor;
      else if (rand < 0.85) col = deepGreenColor;

      starColors[i3] = col.r;
      starColors[i3 + 1] = col.g;
      starColors[i3 + 2] = col.b;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );
    starGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(starColors, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 2. DIMENSIONAL LANDMARKS ALONG THE SCROLL TUNNEL
    const landmarks = [];

    // LANDMARK 0: HOME - The Quantum Digital Core (z = 0)
    const heroGroup = new THREE.Group();
    heroGroup.position.set(0, 0, 0);

    // Inner faceted crystal
    const innerCoreGeo = new THREE.DodecahedronGeometry(1.3, 0);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x02140a,
      emissive: 0x39ff88,
      emissiveIntensity: 0.65,
      roughness: 0.2,
      metalness: 0.9,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    heroGroup.add(innerCore);

    // Outer wireframe icosahedron
    const outerCageGeo = new THREE.IcosahedronGeometry(2.0, 1);
    const outerCageMat = new THREE.MeshBasicMaterial({
      color: 0x39ff88,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const outerCage = new THREE.Mesh(outerCageGeo, outerCageMat);
    heroGroup.add(outerCage);

    // Gyroscope Ring 1
    const ring1Geo = new THREE.TorusGeometry(2.6, 0.035, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x39ff88,
      emissiveIntensity: 0.85,
      metalness: 0.8,
      roughness: 0.3,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    heroGroup.add(ring1);

    // Gyroscope Ring 2
    const ring2Geo = new THREE.TorusGeometry(3.1, 0.03, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x10b981,
      emissiveIntensity: 0.7,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    heroGroup.add(ring2);

    scene.add(heroGroup);
    landmarks.push({ group: heroGroup, zTarget: 0 });

    // LANDMARK 1: ABOUT - Knowledge Monolith (z = -12)
    const aboutGroup = new THREE.Group();
    aboutGroup.position.set(2.2, 0, -12);

    const monolithGeo = new THREE.BoxGeometry(1.6, 3.2, 0.8);
    const monolithMat = new THREE.MeshStandardMaterial({
      color: 0x02170d,
      emissive: 0x047857,
      emissiveIntensity: 0.5,
      roughness: 0.1,
      metalness: 0.95,
    });
    const monolith = new THREE.Mesh(monolithGeo, monolithMat);
    aboutGroup.add(monolith);

    const monoEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(monolithGeo),
      new THREE.LineBasicMaterial({ color: 0x39ff88, linewidth: 2 })
    );
    aboutGroup.add(monoEdges);

    // Orbiting mini node satellites
    for (let i = 0; i < 4; i++) {
      const satGeo = new THREE.OctahedronGeometry(0.22, 0);
      const satMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
      const sat = new THREE.Mesh(satGeo, satMat);
      const angle = (i * Math.PI) / 2;
      sat.position.set(Math.cos(angle) * 2.2, Math.sin(angle) * 1.5, Math.sin(angle) * 0.8);
      aboutGroup.add(sat);
    }
    scene.add(aboutGroup);
    landmarks.push({ group: aboutGroup, zTarget: -12 });

    // LANDMARK 2: SKILLS - Algorithmic Hex Matrix (z = -24)
    const skillsGroup = new THREE.Group();
    skillsGroup.position.set(-2.5, 0, -24);

    // Central Java Emerald Crystal
    const javaCoreGeo = new THREE.OctahedronGeometry(1.6, 0);
    const javaCoreMat = new THREE.MeshStandardMaterial({
      color: 0x032112,
      emissive: 0x39ff88,
      emissiveIntensity: 0.7,
      roughness: 0.2,
      metalness: 0.85,
    });
    const javaCore = new THREE.Mesh(javaCoreGeo, javaCoreMat);
    skillsGroup.add(javaCore);

    // Surrounding tech lattice
    const ringSkills = new THREE.Mesh(
      new THREE.TorusGeometry(2.8, 0.04, 16, 60),
      new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
    );
    ringSkills.rotation.x = Math.PI / 2.5;
    skillsGroup.add(ringSkills);
    scene.add(skillsGroup);
    landmarks.push({ group: skillsGroup, zTarget: -24 });

    // LANDMARK 3: PROJECTS - The Cyber Gateway / Warp Portal (z = -36)
    const portalGroup = new THREE.Group();
    portalGroup.position.set(0, 0, -36);

    const portalRingGeo = new THREE.TorusGeometry(4.2, 0.12, 24, 100);
    const portalRingMat = new THREE.MeshStandardMaterial({
      color: 0x031c0e,
      emissive: 0x39ff88,
      emissiveIntensity: 0.9,
      roughness: 0.3,
      metalness: 0.9,
    });
    const portalRing = new THREE.Mesh(portalRingGeo, portalRingMat);
    portalGroup.add(portalRing);

    const innerPortalRing = new THREE.Mesh(
      new THREE.TorusGeometry(3.6, 0.03, 16, 80),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85 })
    );
    portalGroup.add(innerPortalRing);
    scene.add(portalGroup);
    landmarks.push({ group: portalGroup, zTarget: -36 });

    // LANDMARK 4: ACHIEVEMENTS - Trophy & Laurels Constellation (z = -48)
    const achieveGroup = new THREE.Group();
    achieveGroup.position.set(2.4, 0, -48);

    const trophyGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const trophyMat = new THREE.MeshStandardMaterial({
      color: 0x064e3b,
      emissive: 0x39ff88,
      emissiveIntensity: 0.7,
      roughness: 0.2,
      metalness: 0.9,
    });
    const trophy = new THREE.Mesh(trophyGeo, trophyMat);
    achieveGroup.add(trophy);

    const laurelRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.5, 0.05, 16, 80),
      new THREE.MeshStandardMaterial({
        color: 0x022c14,
        emissive: 0xffffff,
        emissiveIntensity: 0.6,
      })
    );
    laurelRing.rotation.x = Math.PI / 3;
    achieveGroup.add(laurelRing);
    scene.add(achieveGroup);
    landmarks.push({ group: achieveGroup, zTarget: -48 });

    // LANDMARK 5: CODING PROFILES - Algorithmic Dual Nexus (z = -60)
    const codingGroup = new THREE.Group();
    codingGroup.position.set(-2.2, 0, -60);

    const leetGeo = new THREE.DodecahedronGeometry(1.2, 0);
    const leetMat = new THREE.MeshStandardMaterial({
      color: 0x042f1a,
      emissive: 0x39ff88,
      emissiveIntensity: 0.65,
      roughness: 0.3,
      metalness: 0.8,
    });
    const leetCore = new THREE.Mesh(leetGeo, leetMat);
    leetCore.position.set(-1.2, 0, 0);
    codingGroup.add(leetCore);

    const chefGeo = new THREE.OctahedronGeometry(1.1, 0);
    const chefMat = new THREE.MeshStandardMaterial({
      color: 0x022c14,
      emissive: 0x10b981,
      emissiveIntensity: 0.6,
      roughness: 0.4,
      metalness: 0.7,
    });
    const chefCore = new THREE.Mesh(chefGeo, chefMat);
    chefCore.position.set(1.2, 0, 0);
    codingGroup.add(chefCore);
    scene.add(codingGroup);
    landmarks.push({ group: codingGroup, zTarget: -60 });

    // LANDMARK 6: INTERNSHIPS - Experience Waypoint Spire (z = -72)
    const internGroup = new THREE.Group();
    internGroup.position.set(2.0, 0, -72);

    const spireGeo = new THREE.CylinderGeometry(0.2, 1.2, 3.8, 6);
    const spireMat = new THREE.MeshStandardMaterial({
      color: 0x031c0e,
      emissive: 0x39ff88,
      emissiveIntensity: 0.65,
      roughness: 0.2,
      metalness: 0.9,
    });
    const spire = new THREE.Mesh(spireGeo, spireMat);
    internGroup.add(spire);

    const spireRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.03, 16, 50),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    spireRing.rotation.x = Math.PI / 2;
    internGroup.add(spireRing);
    scene.add(internGroup);
    landmarks.push({ group: internGroup, zTarget: -72 });

    // LANDMARK 7: CERTIFICATES - Cryptographic Holo-Vault (z = -84)
    const certGroup = new THREE.Group();
    certGroup.position.set(-2.0, 0, -84);

    const vaultGeo = new THREE.BoxGeometry(2.2, 2.2, 2.2);
    const vaultMat = new THREE.MeshBasicMaterial({
      color: 0x39ff88,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const vault = new THREE.Mesh(vaultGeo, vaultMat);
    certGroup.add(vault);

    const innerDiamond = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.0, 0),
      new THREE.MeshStandardMaterial({
        color: 0x041f10,
        emissive: 0xffffff,
        emissiveIntensity: 0.75,
        roughness: 0.1,
        metalness: 0.9,
      })
    );
    certGroup.add(innerDiamond);
    scene.add(certGroup);
    landmarks.push({ group: certGroup, zTarget: -84 });

    // LANDMARK 8: CONTACT - Infinite Horizon Beacon (z = -96)
    const contactGroup = new THREE.Group();
    contactGroup.position.set(0, 0, -96);

    const beaconGeo = new THREE.TorusGeometry(3.5, 0.08, 16, 90);
    const beaconMat = new THREE.MeshStandardMaterial({
      color: 0x031f0f,
      emissive: 0x39ff88,
      emissiveIntensity: 0.9,
      roughness: 0.3,
      metalness: 0.9,
    });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    contactGroup.add(beacon);

    const centerPillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 6.0, 16),
      new THREE.MeshBasicMaterial({ color: 0x39ff88, transparent: true, opacity: 0.75 })
    );
    contactGroup.add(centerPillar);
    scene.add(contactGroup);
    landmarks.push({ group: contactGroup, zTarget: -96 });

    // MOUSE PARALLAX TRACKING
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // SCROLL TRAVEL COORDINATION
    // Camera Waypoints corresponding to the 9 sections
    const waypoints = [
      { z: 7.0, x: 0.0, y: 0.0, lookZ: -4.0, lookX: 0.0, lookY: 0.0 }, // Home
      { z: -7.5, x: -1.6, y: 0.5, lookZ: -16.0, lookX: 1.2, lookY: 0.0 }, // About
      { z: -19.5, x: 1.6, y: -0.4, lookZ: -28.0, lookX: -1.2, lookY: 0.0 }, // Skills
      { z: -31.0, x: 0.0, y: 0.2, lookZ: -40.0, lookX: 0.0, lookY: 0.0 }, // Projects (flying right through warp ring!)
      { z: -43.5, x: -1.5, y: 0.5, lookZ: -52.0, lookX: 1.2, lookY: 0.0 }, // Achievements
      { z: -55.5, x: 1.5, y: -0.4, lookZ: -64.0, lookX: -1.0, lookY: 0.0 }, // Coding Profiles
      { z: -67.5, x: -1.4, y: 0.4, lookZ: -76.0, lookX: 0.9, lookY: 0.0 }, // Internships
      { z: -79.5, x: 1.4, y: -0.3, lookZ: -88.0, lookX: -0.9, lookY: 0.0 }, // Certificates
      { z: -91.5, x: 0.0, y: 0.0, lookZ: -102.0, lookX: 0.0, lookY: 0.0 }, // Contact
    ];

    let currentScrollProgress = 0;
    let targetScrollProgress = 0;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      targetScrollProgress = maxScroll > 0 ? Math.min(1, Math.max(0, current / maxScroll)) : 0;
      scrollVelocity = Math.abs(current - lastScrollY);
      lastScrollY = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // RESIZE LISTENER
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // ANIMATION LOOP
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Smooth scroll progress lerp
      currentScrollProgress +=
        (targetScrollProgress - currentScrollProgress) * 0.08;

      // Calculate Waypoint interpolation
      if (!prefersReducedMotion) {
        const totalSegments = waypoints.length - 1;
        const segmentProgress = currentScrollProgress * totalSegments;
        const segmentIndex = Math.min(
          Math.floor(segmentProgress),
          totalSegments - 1
        );
        const subFraction = segmentProgress - segmentIndex;

        // Smooth cosine ease between waypoints
        const smoothT = 0.5 * (1 - Math.cos(subFraction * Math.PI));

        const pA = waypoints[segmentIndex];
        const pB = waypoints[segmentIndex + 1] || pA;

        const targetCamZ = pA.z + (pB.z - pA.z) * smoothT;
        const targetCamX =
          pA.x + (pB.x - pA.x) * smoothT + mouseX * 0.6;
        const targetCamY =
          pA.y + (pB.y - pA.y) * smoothT - mouseY * 0.5;

        const targetLookZ = pA.lookZ + (pB.lookZ - pA.lookZ) * smoothT;
        const targetLookX = pA.lookX + (pB.lookX - pA.lookX) * smoothT;
        const targetLookY = pA.lookY + (pB.lookY - pA.lookY) * smoothT;

        camera.position.x += (targetCamX - camera.position.x) * 0.08;
        camera.position.y += (targetCamY - camera.position.y) * 0.08;
        camera.position.z += (targetCamZ - camera.position.z) * 0.08;

        // Dynamic FOV warp effect on scroll
        const targetFov = 60 + Math.min(12, scrollVelocity * 0.15);
        camera.fov += (targetFov - camera.fov) * 0.1;
        camera.updateProjectionMatrix();

        camera.lookAt(targetLookX, targetLookY, targetLookZ);
      }

      // ROTATE LANDMARKS
      if (heroGroup) {
        heroGroup.rotation.y = elapsedTime * 0.25;
        innerCore.rotation.x = elapsedTime * 0.4;
        innerCore.rotation.y = elapsedTime * 0.6;
        outerCage.rotation.y = -elapsedTime * 0.3;
        ring1.rotation.z = elapsedTime * 0.5;
        ring2.rotation.x = elapsedTime * 0.45;
      }

      if (aboutGroup) {
        aboutGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.2;
      }

      if (skillsGroup) {
        skillsGroup.rotation.y = elapsedTime * 0.3;
        skillsGroup.rotation.z = Math.sin(elapsedTime * 0.4) * 0.1;
      }

      if (portalGroup) {
        portalRing.rotation.z = elapsedTime * 0.2;
        innerPortalRing.rotation.z = -elapsedTime * 0.4;
      }

      if (achieveGroup) {
        achieveGroup.rotation.y = elapsedTime * 0.35;
        laurelRing.rotation.z = elapsedTime * 0.25;
      }

      if (codingGroup) {
        leetCore.rotation.y = elapsedTime * 0.4;
        chefCore.rotation.y = -elapsedTime * 0.4;
      }

      if (internGroup) {
        internGroup.rotation.y = elapsedTime * 0.3;
      }

      if (certGroup) {
        vault.rotation.x = elapsedTime * 0.25;
        vault.rotation.y = elapsedTime * 0.35;
        innerDiamond.rotation.y = -elapsedTime * 0.5;
      }

      if (contactGroup) {
        beacon.rotation.z = elapsedTime * 0.2;
      }

      // Starfield subtle drift
      starField.rotation.y = elapsedTime * 0.015;

      renderer.render(scene, camera);
      scrollVelocity *= 0.85; // dampen velocity
    };

    animate();

    // CLEANUP ON UNMOUNT
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      // Dispose Three.js resources
      starGeometry.dispose();
      starMaterial.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      outerCageGeo.dispose();
      outerCageMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      monolithGeo.dispose();
      monolithMat.dispose();
      javaCoreGeo.dispose();
      javaCoreMat.dispose();
      portalRingGeo.dispose();
      portalRingMat.dispose();
      trophyGeo.dispose();
      trophyMat.dispose();
      spireGeo.dispose();
      spireMat.dispose();
      vaultGeo.dispose();
      vaultMat.dispose();
      beaconGeo.dispose();
      beaconMat.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="three-canvas-container"
      aria-hidden="true"
    />
  );
}
