import React, { useState } from "react";
import ParticleCanvas from "./components/BackgroundFX/ParticleCanvas";
import CursorCanvas from "./components/BackgroundFX/CursorCanvas";
import GlitchLoader from "./components/Loader/GlitchLoader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Internships from "./components/Internships/Internships";
import Achievements from "./components/Achievements/Achievements";
import CodingProfiles from "./components/CodingProfiles/CodingProfiles";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative isolate min-h-screen text-gray-100 flex flex-col font-sans selection:bg-[#a31515] selection:text-white bg-[#07070a]">
      {/* 3D WebGL Particle Tunnel Background */}
      <ParticleCanvas />

      {/* Ambient Red Glowing Orbs */}
      <div className="ambient pointer-events-none" aria-hidden="true">
        <i className="o1" />
        <i className="o3" />
      </div>

      {/* Interactive Red Spark Cursor Canvas */}
      <CursorCanvas />

      {/* Initial Glitch / Intro Loading Screen */}
      {loading && <GlitchLoader onComplete={() => setLoading(false)} />}

      {/* Floating Glass Navigation Bar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 w-full flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Key Metrics & Statistics Panel */}
        <Stats />

        {/* Section 3: Featured Works & Projects */}
        <Projects />

        {/* Section 4: Story & Academic Foundation */}
        <About />

        {/* Section 5: Technical Arsenal & Skills Matrix */}
        <Skills />

        {/* Section 6: Professional Experience & Internships */}
        <Internships />

        {/* Section 7: Competitive Programming & Hackathon Honors */}
        <Achievements />

        {/* Section 8: Coding Profiles (LeetCode, CodeChef) */}
        <CodingProfiles />

        {/* Section 9: Verified Certificates & Accreditations */}
        <Certificates />

        {/* Section 10: Get In Touch (WhatsApp & Glass Contact Form) */}
        <Contact />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
