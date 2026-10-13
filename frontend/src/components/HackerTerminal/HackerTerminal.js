import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Trash2 } from "lucide-react";
import { profile, achievementsData } from "../../data/portfolioData";
import "./HackerTerminal.css";

const ASCII_BANNER = `
  ████████╗██╗  ██╗ █████╗ ██████╗ ██╗   ██╗███╗   ██╗   ███████╗
  ╚══██╔══╝██║  ██║██╔══██╗██╔══██╗██║   ██║████╗  ██║   ██╔════╝
     ██║   ███████║███████║██████╔╝██║   ██║██╔██╗ ██║   ███████╗
     ██║   ██╔══██║██╔══██║██╔══██╗██║   ██║██║╚██╗██║   ╚════██║
     ██║   ██║  ██║██║  ██║██║  ██║╚██████╔╝██║ ╚████║██╗███████║
     ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝╚══════╝
      :: THARUN S // FULL-STACK ENGINEER // JAVA DEVELOPER ::
`;

export default function HackerTerminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    {
      type: "system",
      text: ASCII_BANNER,
    },
    {
      type: "info",
      text: "Type 'help' to see available commands or 'projects' to view applications.",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [maximized, setMaximized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Global shortcut ~ or Esc
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "`" || e.key === "~") {
        if (!isOpen) {
          e.preventDefault();
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim();
    if (!cleanCmd) return;

    // Add to command history
    setCmdHistory((prev) => [cleanCmd, ...prev]);
    setHistoryIndex(-1);

    const parts = cleanCmd.toLowerCase().split(" ");
    const mainCmd = parts[0];
    const arg = parts[1];

    const newHistory = [...history, { type: "input", text: `root@tharun-os:~$ ${cleanCmd}` }];

    switch (mainCmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `AVAILABLE CYBER COMMANDS:
  • help           - Display this manual
  • about / bio    - View engineering bio & credentials
  • skills         - Inspect Java & MERN technology stack
  • projects       - List production applications & navigate
  • awards         - View 8 inter-college contest wins
  • coding         - View LeetCode & CodeChef profiles
  • internships    - Review practical industry experience
  • certs          - Show technical accreditations
  • contact        - Display direct contact channels
  • resume         - Download official PDF resume
  • theme <name>   - Change theme: blue | green | purple | amber
  • clear          - Flush terminal buffer
  • exit           - Close interactive terminal`,
        });
        break;

      case "about":
      case "bio":
        newHistory.push({
          type: "output",
          text: `THARUN S // COMPUTER SCIENCE ENGINEERING
College: PSNA College of Engineering and Technology (PSNACET)
Batch: 2024–2028 | Current CGPA: 8.74
Focus: Core Java (OOP & DSA), MERN Stack Development, 3D Web Interfaces.
Status: Actively building & solving algorithms.`,
        });
        scrollToSection("about");
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `CORE TECHNICAL STACK:
[PRIMARY LANGUAGE] Java (OOP, Collections, Multithreading, DSA)
[FRONTEND]         React.js, Three.js, HTML5, CSS3, JavaScript, TypeScript
[BACKEND]          Node.js, Express.js, REST APIs, JWT, Socket.IO
[DATABASE]         MongoDB, SQL
[DEV TOOLS]        Git, GitHub, VS Code, Postman`,
        });
        scrollToSection("skills");
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: `FEATURED PROJECTS:
1. JOBVERSE [MERN + JWT + RBAC]
   Live: https://job-verse-937a.vercel.app/
   Repo: https://github.com/Tharun-S-28/JobVerse

2. CONNECTWAVE [MERN + Socket.IO]
   Real-time chat platform with typing indicators & reactions.

3. 3D DEVELOPER PORTFOLIO [React + Three.js + R3F]
   Cinematic cyber universe featuring interactive 3D navigation.`,
        });
        scrollToSection("projects");
        break;

      case "awards":
      case "achievements":
        newHistory.push({
          type: "output",
          text: `INTER-COLLEGE CONTEST HONORS (${achievementsData.length} WINS):
${achievementsData
  .map(
    (a, i) =>
      `  [#${i + 1}] ${a.title} - ${a.rank} (${a.event} @ ${a.institution})`
  )
  .join("\n")}`,
        });
        scrollToSection("achievements");
        break;

      case "coding":
        newHistory.push({
          type: "output",
          text: `COMPETITIVE CODING STATS:
• LeetCode: https://leetcode.com/u/_Tharun_S/ [400+ Problems Solved]
• CodeChef: https://www.codechef.com/users/tharunth [Contest Contender]`,
        });
        scrollToSection("coding-profiles");
        break;

      case "internships":
        newHistory.push({
          type: "output",
          text: `INDUSTRY INTERNSHIPS:
1. Shiash Info Solutions - Java Software Engineer Intern
2. Cognifyz Technologies - Web Development Intern`,
        });
        scrollToSection("internships");
        break;

      case "certs":
      case "certificates":
        newHistory.push({
          type: "output",
          text: `VERIFIED ACCREDITATIONS:
• Oracle Java Certification - Core Java & OOPS
• Web Development Certification - Full Stack Essentials
• AWS Academy - Generative AI Foundations`,
        });
        scrollToSection("certificates");
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `CONTACT CHANNELS:
• Email:    tharunjeyaknp@gmail.com
• Phone:    +91 7305865241
• Location: PSNACET, Dindigul, Tamil Nadu
• LinkedIn: https://www.linkedin.com/in/tharun-s-28318432a/`,
        });
        scrollToSection("contact");
        break;

      case "resume":
        newHistory.push({
          type: "output",
          text: `Initiating download of Tharun_S_Resume.pdf...`,
        });
        window.open(profile.resumeUrl, "_blank");
        break;

      case "theme":
        if (["blue", "green", "purple", "amber"].includes(arg)) {
          const map = {
            blue: "cyber-blue",
            green: "matrix-green",
            purple: "neon-purple",
            amber: "stealth-amber",
          };
          document.documentElement.setAttribute("data-theme", map[arg]);
          localStorage.setItem("tharun-cyber-theme", map[arg]);
          newHistory.push({
            type: "output",
            text: `[OK] Cyber theme updated to: ${map[arg].toUpperCase()}`,
          });
        } else {
          newHistory.push({
            type: "error",
            text: `Invalid theme. Try: theme blue | green | purple | amber`,
          });
        }
        break;

      case "clear":
      case "cls":
        setHistory([]);
        setInputVal("");
        return;

      case "sudo":
        newHistory.push({
          type: "output",
          text: `ROOT ACCESS GRANTED: You already have system clearance on Tharun's portfolio mainframe.`,
        });
        break;

      case "matrix":
        newHistory.push({
          type: "output",
          text: `WAKE UP, NEO... THE MATRIX HAS YOU. Follow the white rabbit 🐇`,
        });
        break;

      case "exit":
      case "quit":
        onClose();
        return;

      default:
        newHistory.push({
          type: "error",
          text: `Command not recognized: '${cleanCmd}'. Type 'help' for manual.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIndex < cmdHistory.length - 1) {
        const newIdx = historyIndex + 1;
        setHistoryIndex(newIdx);
        setInputVal(cmdHistory[newIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIdx = historyIndex - 1;
        setHistoryIndex(newIdx);
        setInputVal(cmdHistory[newIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="hacker-cli-overlay" onClick={onClose}>
      <div
        className={`hacker-cli-modal cyber-corner-box ${
          maximized ? "cli-maximized" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLI Window Titlebar */}
        <div className="cli-titlebar">
          <div className="cli-title-left">
            <TerminalIcon size={16} className="cli-icon-neon" />
            <span className="cli-title-text">
              root@tharun-quantum-mainframe:~# [BASH]
            </span>
          </div>

          <div className="cli-controls">
            <button
              className="cli-control-btn"
              onClick={() => setHistory([])}
              title="Clear terminal buffer"
            >
              <Trash2 size={13} />
            </button>
            <button
              className="cli-control-btn"
              onClick={() => setMaximized(!maximized)}
              title={maximized ? "Restore window" : "Maximize window"}
            >
              {maximized ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            </button>
            <button
              className="cli-control-btn cli-close-btn"
              onClick={onClose}
              title="Close terminal (Esc)"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* CLI Output Area */}
        <div className="cli-output-container">
          {history.map((item, i) => (
            <div key={i} className={`cli-line line-${item.type}`}>
              <pre className="cli-pre">{item.text}</pre>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <div className="cli-input-bar">
          <span className="cli-prompt">root@tharun-os:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="cli-input-field"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help'..."
            autoFocus
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
}
