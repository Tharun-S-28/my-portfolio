// Central content store — edit this file to update every section of the site.
// Replace placeholder links/images with your real ones.

import profileImage from "../assets/profile.jpg";

export const profile = {
  name: "Tharun S",
  roles: [
    "Computer Science Engineering Student",
    "MERN Stack Developer",
    "Java Enthusiast",
    "DSA Enthusiast",
  ],
  tagline:
    "I design and build reliable web products end to end — from a Java-backed API to a pixel-considered React interface.",
  resumeUrl: "/resume/Tharun_S_Resume.pdf",
  photo: profileImage,
  email: "tharunjeyaknp@gmail.com",
  location: "Tamil Nadu, India",
  social: {
    github: "https://github.com/Tharun-S-28",
    linkedin: "https://www.linkedin.com/in/tharun-s-287871333",
    leetcode: "https://leetcode.com/u/_Tharun_S/",
    gfg: "https://www.geeksforgeeks.org/profile/tharunjtvfo?from=explore",
    email: "mailto:tharunjeyaknp@gmail.com",
  },
};

export const about = {
  objective:
    "Final-year Computer Science undergraduate who enjoys turning ambiguous problems into shipped, working software. I care about clean architecture as much as clean UI — a system should be easy to reason about a year from now, not just easy to demo today.",
  education: {
    degree: "B.E. Computer Science & Engineering",
    cgpa: "8.71",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Object-Oriented Programming (Java)",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  currentFocus:
    "Deepening my grasp of system design and shipping full-stack MERN projects with production-grade auth, validation, and deployment pipelines.",
  currentStack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Java",
    "Git/GitHub",
  ],
  strengths: ["Problem Solving", "Teamwork", "Communication", "Quick Learner"],
};

export const skills = {
  Programming: [
    { name: "Java", level: 85 },
    { name: "C", level: 75 },
  ],
  Frontend: [
    { name: "HTML", level: 92 },
    { name: "CSS", level: 88 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 82 },
  ],
  Backend: [
    { name: "Node.js", level: 78 },
    { name: "Express.js", level: 78 },
  ],
  Database: [
    { name: "MongoDB", level: 76 },
    { name: "SQL", level: 74 },
  ],
  Tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "VS Code", level: 90 },
  ],
  "Soft Skills": [
    { name: "Problem Solving", level: 90 },
    { name: "Teamwork", level: 85 },
    { name: "Communication", level: 82 },
    { name: "Quick Learner", level: 90 },
  ],
};

export const projects = [
  {
    id: "bank-management-system",
    title: "Bank Management System",
    stack: ["MongoDB", "Express", "React", "Node"],
    short:
      "A full-stack banking simulation with account management, deposits/withdrawals, transaction history, and an admin dashboard.",
    features: [
      "Secure account creation & authentication",
      "Deposit, withdraw & fund-transfer flows",
      "Transaction history with filters",
      "Admin dashboard for account oversight",
    ],
    architecture:
      "React SPA communicates with an Express REST API secured by JWT; MongoDB stores accounts and transactions with Mongoose schemas enforcing balance integrity via transaction-safe updates.",
    problem:
      "Most student banking demos skip real constraints like race conditions on balance updates and proper input validation — this project treats those as first-class requirements, not an afterthought.",
    challenges:
      "Handling concurrent balance updates safely and designing a transaction schema that stays queryable as history grows.",
    learnings:
      "Practical experience with MongoDB transactions, REST API design, and structuring a React app around real financial-state constraints.",
    future: [
      "Add interest calculation & scheduled statements",
      "Role-based access for tellers vs admins",
      "Downloadable PDF statements",
    ],
    github: "https://github.com/your-github/bank-management-system",
    demo: "#",
    image: "/assets/projects/bank-management.jpg",
  },
  {
    id: "resugenius",
    title: "ResuGenius — AI Resume Analyzer",
    stack: ["React", "Node", "Express", "MongoDB"],
    short:
      "An AI-assisted tool that scores resumes against a target job description and gives actionable, section-by-section feedback.",
    features: [
      "Resume upload & parsing",
      "Job-description keyword match scoring",
      "Section-wise improvement suggestions",
      "Exportable feedback report",
    ],
    architecture:
      "React front end uploads resumes to an Express API; parsing and scoring logic runs server-side, with results persisted to MongoDB so users can revisit past analyses.",
    problem:
      "Job seekers rarely get specific, structural feedback on their resumes — most tools either give a vague score or nothing at all.",
    challenges:
      "Reliably parsing varied resume formats and turning raw text matches into feedback that actually reads as useful advice.",
    learnings:
      "Text-processing pipelines, designing scoring heuristics that are explainable, and building UI that communicates 'why' behind a score.",
    future: [
      "Support DOCX and multi-page PDFs more robustly",
      "Tailor suggestions per industry",
      "Add a resume version comparison view",
    ],
    github: "https://github.com/your-github/resugenius",
    demo: "#",
    image: "/assets/projects/resugenius.jpg",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    stack: ["React", "CSS", "JavaScript"],
    short:
      "This site — a hand-built, animation-rich portfolio with zero UI frameworks, built to showcase both design taste and engineering discipline.",
    features: [
      "Fully custom component library",
      "Scroll-reveal & counter animations built from scratch",
      "Dark/light theme with persisted preference",
      "Accessible, fully responsive layout",
    ],
    architecture:
      "Component-driven React app with a shared data layer (this file), custom hooks for scroll-reveal and counters, and hand-written CSS using variables for theming — no CSS framework.",
    problem:
      "Template portfolios are easy to spot. The goal here was a site that reads as engineered, not assembled.",
    challenges:
      "Building smooth, framework-free animations (reveal-on-scroll, modals, custom cursor) that still perform well on low-end devices.",
    learnings:
      "Deeper command of the Intersection Observer API, CSS custom properties for theming, and performance-conscious animation.",
    future: [
      "Add a small CMS-backed blog section",
      "Automated Lighthouse CI checks",
      "i18n support",
    ],
    github: "https://github.com/your-github/personal-portfolio",
    demo: "#",
    image: "/assets/projects/portfolio.jpg",
  },
];

export const achievements = [
  {
    id: "code-combat",
    medal: "🥇",
    title: "1st Prize — Code Combat",
    org: "Kongu Engineering College",
    date: "2026",
    description:
      "Won first place in a competitive coding contest, solving algorithmic problems under time pressure against participants from multiple colleges.",
    postUrl: "https://www.linkedin.com/posts/tharun-s-287871333_hackerrank-competitivecoding-debugging-ugcPost-7431680698815664128-Jps_/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFP0j0cBtptqb8PwV_K37N1AbUtD8Ax8P6Y",
  },
  {
    id: "biznovexa",
    medal: "🥈",
    title: "2nd Prize — BizNovexa Coding Challenge",
    org: "Ramco Institute of Technology",
    date: "2026",
    description:
      "Secured second place in a coding challenge combining problem-solving speed with solution quality.",
    postUrl: "https://www.linkedin.com/posts/tharun-s-287871333_programming-teamwork-achievement-ugcPost-7458811922356879361-EFzn/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFP0j0cBtptqb8PwV_K37N1AbUtD8Ax8P6Y",
  },
  {
    id: "kreativ-hackathon",
    medal: "🥈",
    title: "2nd Prize — Kreativ Hackathon",
    org: "Kamaraj College of Engineering & Technology",
    date: "2026",
    description:
      "Built a working prototype in a time-boxed hackathon, placing second among competing teams for functionality and presentation.",
    postUrl: "https://www.linkedin.com/posts/tharun-s-287871333_kreativ26-hackathon-thinkandtwist-ugcPost-7430857871237709824-DAxc/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFP0j0cBtptqb8PwV_K37N1AbUtD8Ax8P6Y",
  },
];

export const codingProfiles = [
  {
    id: "leetcode",
    platform: "LeetCode",
    stats: [
      { label: "Problems Solved", value: "300+" },
      { label: "Streak Badge", value: "100 Days" },
      { label: "Contest Rating", value: "1400" },
    ],
    url: "https://leetcode.com/u/_Tharun_S/",
  },
  {
    id: "gfg",
    platform: "GeeksforGeeks",
    stats: [
      { label: "Problems Solved", value: "100+" },
    ],
    url: "https://www.geeksforgeeks.org/profile/tharunjtvfo?from=explore",
  },
  {
    id: "github",
    platform: "GitHub",
    stats: [],
    url: "https://github.com/Tharun-S-28",
  },
];

export const internships = [
  {
    id: "codsoft",
    company: "CodSoft",
    role: "Web Development Intern",
    duration: "1 Month",
    responsibilities: [
      "Built responsive UI components for client-facing web pages",
      "Fixed cross-browser layout issues and improved load performance",
      "Collaborated on task tracking via GitHub issues",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React"],
    certificateUrl: "https://www.linkedin.com/posts/tharun-s-287871333_webdevelopment-frontenddevelopment-html-share-7438468975782653952-VbG_/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFP0j0cBtptqb8PwV_K37N1AbUtD8Ax8P6Y",
  },
  {
    id: "codealpha",
    company: "CodeAlpha",
    role: "Java Programming Intern",
    duration: "1 Month",
    responsibilities: [
      "Implemented core Java modules following OOP principles",
      "Wrote unit tests to validate business logic",
      "Refactored legacy code for readability and maintainability",
    ],
    skills: ["Java", "OOP", "Data Structures"],
    certificateUrl: "https://www.linkedin.com/posts/tharun-s-287871333_java-internship-codealpha-ugcPost-7423955629838512128-GEEP/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFP0j0cBtptqb8PwV_K37N1AbUtD8Ax8P6Y",
  },
];

export const certificates = [
  {
    id: "oracle-java",
    title: "Oracle Java Certification",
    issuer: "Oracle",
    highlights: [
      "Strengthened core Java programming fundamentals",
      "Practiced object-oriented design and problem solving",
      "Built confidence for backend-focused development work",
    ],
  },
  {
    id: "web-dev",
    title: "HTML, CSS & JavaScript",
    issuer: "Course Certification",
    highlights: [
      "Learned responsive UI structure and layout techniques",
      "Improved styling and interaction skills for modern web pages",
      "Gained hands-on experience with frontend development basics",
    ],
  },
  {
    id: "ai-ml",
    title: "Foundations of AI & ML",
    issuer: "Course Certification",
    highlights: [
      "Explored the basics of artificial intelligence and machine learning",
      "Learned how data-driven models are built and evaluated",
      "Developed a stronger foundation for analytical thinking",
    ],
  },
];

export const education = [
  {
    id: "be-cse",
    level: "B.E. Computer Science & Engineering",
    institute: "PSNA College of Engineering and Technology",
    grade: "CGPA: 8.71",
    year: "2022 – 2026",
  },
  {
    id: "hsc",
    level: "HSC",
    institute: "SMBM Public School",
    year: "2024",
  },
  {
    id: "sslc",
    level: "SSLC",
    institute: "SMBM Public School",
    grade: "85%",
    year: "2022",
  },
];

export const stats = [
  { label: "Problems Solved", value: 300, suffix: "+" },
  { label: "LeetCode Streak", value: 100, suffix: " Days" },
  { label: "CGPA", value: 8.71, suffix: "" },
  { label: "Projects Built", value: 3, suffix: "+" },
  { label: "Internships", value: 2, suffix: "" },
  { label: "Competition Wins", value: 3, suffix: "" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "coding-profiles", label: "Coding Profiles" },
  { id: "internships", label: "Internships" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];
