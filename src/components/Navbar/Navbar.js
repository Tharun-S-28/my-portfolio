import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [
      "hero",
      "projects",
      "about",
      "skills",
      "internships",
      "achievements",
      "certificates",
      "contact",
    ];

    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#internships", id: "internships" },
    { label: "Achievements", href: "#achievements", id: "achievements" },
    { label: "Certificates", href: "#certificates", id: "certificates" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 md:px-6 pt-3 pointer-events-none">
      <div
        className={`glass max-w-7xl mx-auto rounded-2xl px-5 md:px-8 flex items-center justify-between transition-all duration-300 pointer-events-auto ${
          scrolled ? "py-2.5 !bg-[#111113]/85 shadow-2xl backdrop-blur-xl border border-white/10" : "py-3.5 bg-[#0e0e11]/70"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          className="text-white text-xl md:text-2xl font-black tracking-tight uppercase group flex items-center"
        >
          <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)] mr-0.5">
            T
          </span>
          <span className="group-hover:text-red-500 transition-colors duration-300">
            HARUN S.
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative text-xs md:text-sm font-bold uppercase tracking-[0.15em] transition-colors duration-300 group py-1 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-red-600 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(220,38,38,0.8)] ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="glass-red hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(216,30,47,0.4)] hover:shadow-[0_0_30px_rgba(255,18,56,0.7)] transition-all duration-300 hover:scale-105"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden glass-chip p-2 rounded-xl text-gray-200 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 glass max-w-7xl mx-auto rounded-2xl p-5 border border-white/10 shadow-2xl backdrop-blur-2xl pointer-events-auto animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-red-500 py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="glass-red text-center py-3 rounded-xl text-white text-xs font-bold uppercase tracking-wider mt-2 shadow-[0_0_20px_rgba(216,30,47,0.5)]"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
