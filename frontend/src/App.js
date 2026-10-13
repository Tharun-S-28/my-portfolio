import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import Loader from "./components/Loader/Loader";
import ThreeScene from "./components/ThreeScene/ThreeScene";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import CodingProfiles from "./components/CodingProfiles/CodingProfiles";
import Internships from "./components/Internships/Internships";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CyberHUD from "./components/CyberHUD/CyberHUD";
import HackerTerminal from "./components/HackerTerminal/HackerTerminal";

function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [scanlines, setScanlines] = useState(true);
  const [hasEntered, setHasEntered] = useState(() => {
    try {
      return sessionStorage.getItem("tharun_portfolio_entered") === "true";
    } catch {
      return false;
    }
  });

  const handleEnterPortfolio = () => {
    try {
      sessionStorage.setItem("tharun_portfolio_entered", "true");
    } catch (e) {
      // Ignore if sessionStorage is not accessible
    }
    setHasEntered(true);
  };

  return (
    <>
      {/* Cinematic Portfolio Welcome Screen for first visit in browsing session */}
      {!hasEntered && <WelcomeScreen onEnter={handleEnterPortfolio} />}

      {/* Only display bootloader if user already entered in this session on fresh reload */}
      {hasEntered && <Loader />}

      {/* CRT Scanline Overlay */}
      {scanlines && <div className="crt-scanlines" />}

      {/* Immersive 3D Space Scene & Deep Camera Travel */}
      <ThreeScene />
      <CustomCursor />
      <ScrollProgress />

      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      <main style={{ position: "relative", zIndex: 1 }}>
        {/* Section 1: Home */}
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />

        {/* Section 2: About (with Education & Coursework) */}
        <About />

        {/* Section 3: Skills */}
        <Skills />

        {/* Section 4: Projects */}
        <Projects />

        {/* Section 5: Achievements */}
        <Achievements />

        {/* Section 6: Coding Profiles */}
        <CodingProfiles />

        {/* Section 7: Internships */}
        <Internships />

        {/* Section 8: Certificates */}
        <Certificates />

        {/* Section 9: Contact */}
        <Contact />
      </main>

      {/* Floating Cyber Telemetry & Terminal Controls */}
      <CyberHUD
        onOpenTerminal={() => setTerminalOpen(true)}
        scanlines={scanlines}
        onToggleScanlines={() => setScanlines((s) => !s)}
      />

      {/* Interactive Cyber Command Console */}
      <HackerTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
