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
    codechef: "https://www.codechef.com/users/tharunth",
    email: "mailto:tharunjeyaknp@gmail.com",
  },
};

export const about = {
  objective:
    "Pre-final-year Computer Science undergraduate who enjoys turning ambiguous problems into shipped, working software. I care about clean architecture as much as clean UI — a system should be easy to reason about a year from now, not just easy to demo today.",
  education: {
    degree: "B.E. Computer Science & Engineering",
    cgpa: "8.75",
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
    id: "jobverse",
    title: "JobVerse – MERN Stack Job Portal",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "bcrypt", "Multer"],
    short:
      "Built and deployed a full-stack job portal using the MERN stack that connects candidates with recruiters through a complete job-search and recruitment workflow.",
    features: [
      "Candidate & Recruiter authentication",
      "Search and filter jobs",
      "Resume upload while applying",
      "Application status tracking",
      "Recruiter job posting, editing & management",
      "Applicant management for recruiters",
      "JWT authentication & role-based access",
      "Responsive and modern UI",
    ],
    architecture:
      "Building JobVerse provided practical experience in full-stack development, REST APIs, authentication, database management, file uploads, and frontend-backend integration.",
    problem:
      "The project was built to handle a complete hiring workflow from candidate discovery to recruiter management, with a focus on a clean end-to-end experience.",
    challenges:
      "Managing authentication, file uploads, role-based flows, and recruiter operations while keeping the app experience responsive and user-friendly.",
    learnings:
      "Practical experience with MERN-stack architecture, secure auth flows, file upload handling, and database-driven recruitment workflows.",
    future: [
      "Add in-app messaging between recruiters and applicants",
      "Introduce analytics dashboards for hiring insights",
      "Improve job recommendation and matching features",
    ],
    github: "https://lnkd.in/gMMjfVve",
    demo: "https://lnkd.in/gHQNvdt6",
    image: "/assets/projects/bank-management.jpg",
  },
  {
    id: "connectwave",
    title: "ConnectWave – Instant Messaging Platform",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    short:
      "ConnectWave is a real-time instant messaging platform built to provide a smooth and interactive communication experience with modern chat functionality.",
    features: [
      "Real-time messaging",
      "User authentication",
      "Online presence",
      "Typing indicators",
      "Read receipts",
      "Reactions",
      "Profile discovery",
      "Responsive chat interactions",
    ],
    architecture:
      "The platform provides real-time communication with modern chat features and a responsive interface designed for smooth user interaction.",
    problem:
      "Modern chat apps need fast, interactive communication flows while keeping the experience intuitive and responsive across devices.",
    challenges:
      "Synchronizing live updates, message states, and presence indicators while preserving a smooth real-time user experience.",
    learnings:
      "Hands-on experience with real-time communication patterns, event-driven backend logic, and interactive frontend state management.",
    future: [
      "Add group chat and voice calling",
      "Enable media sharing and file transfer",
      "Improve message search and moderation tools",
    ],
    github: "https://github.com/Tharun-S-28",
    demo: "#",
    image: "/assets/projects/resugenius.jpg",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    stack: ["React.js", "JavaScript", "HTML", "CSS"],
    short:
      "A modern interactive developer portfolio created to showcase my skills, projects, certifications, achievements, education, and development journey.",
    features: [
      "Responsive portfolio layout",
      "Smooth animations and scroll interactions",
      "Project showcase and achievement highlights",
      "Resume access and networking links",
      "Interactive custom cursor",
    ],
    architecture:
      "The portfolio focuses on responsive design, smooth animations, interactive sections, project showcases, achievement highlights, resume access, and a custom interactive cursor.",
    problem:
      "The goal was to create a polished personal portfolio that communicates technical depth while remaining modern and accessible.",
    challenges:
      "Balancing animation, readability, and performance while keeping a clean and professional portfolio experience.",
    learnings:
      "Improved skills in component design, section storytelling, responsive UI work, and presentation-focused frontend development.",
    future: [
      "Add a blog section",
      "Expand case studies and project write-ups",
      "Introduce richer motion and portfolio interactions",
    ],
    github: "https://github.com/Tharun-S-28",
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
  {
    id: "logic-verse",
    medal: "🥇",
    title: "1st – Logic Verse",
    org: "SRM Madurai College of Engineering & Technology",
    date: "2026",
    description: "Duo Coding Event · 2 Rounds · HackerRank Final",
    postUrl: "https://lnkd.in/p/gi76mqrK",
  },
  {
    id: "think-and-twist",
    medal: "🥇",
    title: "1st Prize – Think and Twist",
    org: "Kamaraj College of Engineering & Technology · 2026",
    date: "2026",
    description:
      "Secured 1st Prize in the Think and Twist logical thinking event at Kamaraj College of Engineering & Technology. The event challenged participants with problem-solving and logical reasoning tasks, providing an opportunity to demonstrate analytical thinking under time constraints.",
    postUrl: "https://lnkd.in/p/gnma6A7A",
  },
  {
    id: "code-insight",
    medal: "🥇",
    title: "1st – Code Insight",
    org: "KSR College of Engineering & Technology · 2026",
    date: "2026",
    description:
      "Secured 1st Prize in the Code Insight solo coding event at KSR College of Engineering & Technology. Successfully completed two rounds of coding challenges, demonstrating problem-solving ability, logical thinking, and coding skills.",
    postUrl: "https://lnkd.in/p/g3Z4bMqS",
  },
  {
    id: "blind-coding",
    medal: "🥇",
    title: "1st – Blind Coding",
    org: "Sri Vidya College of Engineering & Technology · 2026",
    date: "2026",
    description:
      "Secured 1st Prize in the Blind Coding event at Sri Vidya College of Engineering & Technology as part of a trio team. The event tested coding ability and problem-solving skills without relying on the usual visual coding environment.",
    postUrl: "https://lnkd.in/p/gRsi-pch",
  },
];

export const codingProfiles = [
  {
    id: "leetcode",
    platform: "LeetCode",
    stats: [
      { label: "Problems Solved", value: "400+" },
      { label: "Days Streak", value: "200 Days" },
    ],
    url: "https://leetcode.com/u/_Tharun_S/",
  },
  {
    id: "codechef",
    platform: "CodeChef",
    stats: [
      { label: "Problems Solved", value: "100+" },
      { label: "Badge", value: "Bronze Badge" },
    ],
    url: "https://www.codechef.com/users/tharunth",
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
      "Covers core Java programming concepts and fundamentals.",
      "Builds understanding of object-oriented programming and Java syntax.",
      "Strengthens problem-solving and basic Java development skills.",
    ],
  },
  {
    id: "web-dev",
    title: "Web Development Certification",
    issuer: "Course Certification",
    highlights: [
      "Covers the fundamentals of HTML, CSS, and JavaScript.",
      "Focuses on building structured, styled, and interactive web pages.",
      "Strengthens frontend development and responsive design skills.",
    ],
  },
  {
    id: "aws-academy",
    title: "AWS Academy",
    issuer: "Generative AI Foundations",
    highlights: [
      "Introduces fundamental concepts of generative artificial intelligence.",
      "Covers basic AI concepts, applications, and generative AI technologies.",
      "Builds foundational knowledge for working with AI-based solutions.",
    ],
  },
  {
    id: "snowflake",
    title: "Snowflake Certifications",
    issuer: "Data Warehousing, Data Lakes & Fundamentals",
    highlights: [
      "Covers fundamental concepts of modern data warehousing.",
      "Introduces data lakes and Snowflake data platform concepts.",
      "Builds understanding of cloud-based data storage and analytics.",
    ],
  },
  {
    id: "mongodb",
    title: "MongoDB Certifications",
    issuer: "MongoDB Essentials, Building AI Agent",
    highlights: [
      "Covers MongoDB fundamentals and document-based database concepts.",
      "Introduces practical concepts for working with MongoDB databases.",
      "Includes foundational concepts related to building AI agents with MongoDB.",
    ],
  },
];

export const education = [
  {
    id: "be-cse",
    level: "B.E. Computer Science & Engineering",
    institute: "PSNA College of Engineering and Technology",
    grade: "CGPA: 8.75",
    year: "2022 – 2026",
  },
  {
    id: "hsc",
    level: "HSC",
    institute: "SMBM Public School",
    grade: "75%",
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
  { label: "Problems Solved", value: 400, suffix: "+" },
  { label: "LeetCode Streak", value: 200, suffix: " Days" },
  { label: "CGPA", value: 8.75, suffix: "" },
  { label: "Projects Built", value: 3, suffix: "+" },
  { label: "Internships", value: 2, suffix: "" },
  { label: "Competition Wins", value: 7, suffix: "" },
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
