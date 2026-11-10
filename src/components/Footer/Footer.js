import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../Icons";
import { profile } from "../../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="glass-bar w-full text-white py-12 px-4 md:px-12 lg:px-16 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a
            href="#hero"
            className="text-xl sm:text-2xl font-black tracking-tight uppercase flex items-center group"
          >
            <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)] mr-0.5">
              T
            </span>
            <span className="group-hover:text-red-500 transition-colors">
              HARUN S.
            </span>
          </a>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
            B.E. Computer Science &amp; Engineering • PSNACET
          </p>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Tharun-S-28"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-chip p-2.5 rounded-full text-gray-300 hover:text-white hover:border-red-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/tharun-s-287871333/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-chip p-2.5 rounded-full text-gray-300 hover:text-white hover:border-red-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="glass-chip p-2.5 rounded-full text-gray-300 hover:text-white hover:border-red-500 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} THARUN S. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Section Quick Links & Top Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-400 uppercase tracking-widest font-bold">
          <a href="#projects" className="hover:text-red-500 transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-red-500 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-red-500 transition-colors">
            Skills
          </a>
          <a href="#internships" className="hover:text-red-500 transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-red-500 transition-colors">
            Contact
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="glass-chip p-2 rounded-full text-gray-300 hover:text-white hover:border-red-500 transition-colors ml-2"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>
    </footer>
  );
}
