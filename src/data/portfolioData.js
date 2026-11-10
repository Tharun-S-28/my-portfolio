// Data Store for Tharun S Portfolio
// All verified personal data, education, skills, projects, achievements, coding profiles, internships, certificates

export const profile = {
  name: "THARUN S",
  roles: [
    "Computer Science Engineering Student",
    "MERN Stack Developer",
    "Java Programmer",
    "Problem Solver",
  ],
  headline: "Building Ideas Into Real-World Digital Experiences.",
  tagline:
    "I build full-stack web applications, solve complex algorithmic problems, and continuously engineer high-performance systems with modern MERN stack and Java foundations.",
  college: "PSNA College of Engineering and Technology (PSNACET), Dindigul, Tamil Nadu",
  degree: "B.E. Computer Science and Engineering (2024–2028)",
  cgpa: "8.74",
  resumeUrl: "/resume/Tharun_S_Resume.pdf",
  photo: "/assets/profile.jpg",
  email: "tharunjeyaknp@gmail.com",
  phone: "+91 7305865241",
  whatsappNumber: "+91 7305865241",
  whatsappUrl: "https://wa.me/917305865241?text=Hi%20Tharun%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
  location: "Tamil Nadu, India",
  social: {
    github: "https://github.com/Tharun-S-28",
    linkedin: "https://www.linkedin.com/in/tharun-s-287871333/",
    leetcode: "https://leetcode.com/u/_Tharun_S/",
    codechef: "https://www.codechef.com/users/tharunth",
    email: "mailto:tharunjeyaknp@gmail.com",
    phone: "tel:+917305865241",
  },
};

export const statsData = [
  { id: "leetcode", value: 400, suffix: "+", label: "LeetCode Problems Solved" },
  { id: "streak", value: 200, suffix: "+", label: "Days Active Coding Streak" },
  { id: "cgpa", value: "8.74", suffix: "", label: "Current CGPA (PSNACET)" },
  { id: "wins", value: 7, suffix: " Wins", label: "Hackathon & Coding Contests" },
  { id: "projects", value: 3, suffix: " Apps", label: "Full-Stack MERN Projects" },
  { id: "internships", value: 2, suffix: "", label: "Industry Internships Completed" },
];

export const aboutData = {
  bio: [
    "I am a passionate Computer Science Engineering student at PSNA College of Engineering and Technology (PSNACET), Dindigul, specializing in full-stack MERN development and algorithmic problem-solving.",
    "With a strong foundation in Core Java and modern web architecture, I build scalable applications with high visual velocity, secure authentication, real-time messaging, and efficient databases.",
  ],
  education: [
    {
      institution: "PSNA College of Engineering and Technology (PSNACET)",
      location: "Dindigul, Tamil Nadu",
      degree: "B.E. in Computer Science and Engineering",
      period: "2024 – 2028",
      score: "CGPA: 8.74",
      highlight: "Focus on Systems, Data Structures & Software Engineering",
      status: "Pursuing",
    },
    {
      institution: "SMBM Public School",
      location: "Dindigul, Tamil Nadu",
      degree: "Higher Secondary Certificate (HSC)",
      period: "Completed: March 2024",
      score: "Higher Secondary Education",
      status: "Completed",
    },
    {
      institution: "SMBM Public School",
      location: "Dindigul, Tamil Nadu",
      degree: "Secondary School Leaving Certificate (SSLC)",
      period: "Completed: May 2022",
      score: "Secondary School Education",
      status: "Completed",
    },
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Artificial Intelligence and Machine Learning",
    "Full-Stack Web Technologies",
  ],
};

export const skillsData = [
  {
    name: "Java (Core & OOP)",
    category: "Primary Language",
    level: "Master",
    icon: "Code",
    description: "Algorithmic problem-solving, multithreading, collections framework, and OOP principles.",
  },
  {
    name: "React.js",
    category: "Frontend Architecture",
    level: "Master",
    icon: "Layout",
    description: "Component architecture, hooks, state management, SPA routing, and responsive UI design.",
  },
  {
    name: "Node.js & Express.js",
    category: "Backend Engineering",
    level: "Advanced",
    icon: "Server",
    description: "Scalable REST APIs, middleware architectures, asynchronous runtimes, and JWT security.",
  },
  {
    name: "MongoDB & SQL",
    category: "Database Systems",
    level: "Advanced",
    icon: "Database",
    description: "NoSQL document aggregation, schema modeling with Mongoose, and relational SQL queries.",
  },
  {
    name: "JavaScript & TypeScript",
    category: "Full-Stack Scripting",
    level: "Advanced",
    icon: "FileCode",
    description: "Modern ES6+ syntax, asynchronous programming, type safety, and DOM manipulation.",
  },
  {
    name: "Data Structures & Algorithms",
    category: "Computer Science Core",
    level: "Advanced",
    icon: "Cpu",
    description: "400+ problems solved across arrays, dynamic programming, trees, graphs, and greedy algorithms.",
  },
  {
    name: "Socket.IO",
    category: "Real-Time Systems",
    level: "Advanced",
    icon: "Radio",
    description: "Bi-directional WebSocket communication, live presence, typing events, and instant messaging.",
  },
  {
    name: "C Programming",
    category: "Systems Programming",
    level: "Proficient",
    icon: "Terminal",
    description: "Low-level memory management, pointers, and foundational computer systems.",
  },
  {
    name: "HTML5 & Modern CSS3",
    category: "Frontend UI/UX",
    level: "Master",
    icon: "Palette",
    description: "Semantic layouts, responsive flexbox & grid, glassmorphism, and performance optimization.",
  },
  {
    name: "Git & GitHub",
    category: "Developer Tools",
    level: "Master",
    icon: "GitBranch",
    description: "Version control, branching workflows, collaborative repositories, and code deployment.",
  },
];

export const projectsData = [
  {
    id: "jobverse",
    title: "JOBVERSE",
    subtitle: "MERN Stack Online Job Portal",
    category: "Full-Stack MERN",
    isFeatured: true,
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST API"],
    description:
      "Developed a full-stack job portal that enables candidates to search and apply for jobs while recruiters manage job postings and applications through role-based access control.",
    features: [
      "Candidate and recruiter workflows with dedicated interactive portals",
      "Robust job search with keyword filtering and multi-criteria application system",
      "Comprehensive job posting, applicant management, and status tracking",
      "Secure JWT authentication and bcrypt password encryption",
      "Granular role-based access control (RBAC)",
      "MongoDB database management with Mongoose schemas and indexes",
    ],
    liveUrl: "https://job-verse-937a.vercel.app/",
    githubUrl: "https://github.com/Tharun-S-28/JobVerse",
    badge: "Featured MERN Project",
    image: null,
  },
  {
    id: "connectwave",
    title: "CONNECTWAVE",
    subtitle: "Real-Time Chat Application",
    category: "WebSockets & MERN",
    isFeatured: true,
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO"],
    description:
      "Developed a real-time messaging platform supporting username-based user discovery and instant one-to-one conversations.",
    features: [
      "Instant real-time messaging powered by Socket.IO bi-directional websockets",
      "Live user presence tracking and online/offline status detection",
      "Real-time typing indicators for fluid messaging user experience",
      "Delivered and read receipts state synchronization",
      "Interactive emoji and message reaction system",
      "Theme customization and responsive conversation view",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Tharun-S-28",
    badge: "Real-Time Systems",
    image: null,
  },
  {
    id: "bedvoiceoptimizer",
    title: "BEDVOICEOPTIMIZER",
    subtitle: "AI-Based Hospital Bed Allocation System",
    category: "AI & Healthcare Systems",
    isFeatured: true,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Voice Recognition", "AI Algorithms"],
    description:
      "Engineered an AI-powered smart hospital bed allocation and patient triage optimization system integrating voice input processing, patient priority scheduling, and real-time bed tracking.",
    features: [
      "AI-driven automated priority triage based on patient severity scores",
      "Hands-free voice-enabled commands and patient intake processing",
      "Real-time interactive hospital ward & ICU bed occupancy dashboard",
      "Dynamic allocation algorithms reducing emergency admission wait times",
      "MongoDB database modeling patient history, bed status, and doctor assignments",
      "RESTful API architecture with real-time websocket status broadcasts",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Tharun-S-28",
    badge: "AI Systems Engineering",
    image: null,
  },
];

export const achievementsData = [
  {
    place: "1st Place",
    placeType: "1st",
    team: "Duo",
    event: "Logic Verse (Coding)",
    college: "SRM Madurai College of Technology",
    awardBadge: "1st Duo",
    verifiedUrl: "https://lnkd.in/p/gi76mqrK",
  },
  {
    place: "1st Place",
    placeType: "1st",
    team: "Duo",
    event: "Code Combat",
    college: "Kongu College of Technology",
    awardBadge: "1st Duo",
    verifiedUrl: "https://lnkd.in/p/gJ42CqqB",
  },
  {
    place: "2nd Place",
    placeType: "2nd",
    team: "Trio",
    event: "BizNovexa Coding",
    college: "Ramco Institute of Technology",
    awardBadge: "2nd Trio",
    verifiedUrl: "https://lnkd.in/p/geccSQZe",
  },
  {
    place: "2nd Place",
    placeType: "2nd",
    team: "Trio",
    event: "Kreativ Hackathon",
    college: "Kamaraj College of Technology",
    awardBadge: "2nd Trio",
    verifiedUrl: "https://lnkd.in/p/gnma6A7A",
  },
  {
    place: "1st Place",
    placeType: "1st",
    team: "Trio",
    event: "Think and Twist",
    college: "Kamaraj College of Technology",
    awardBadge: "1st Trio",
    verifiedUrl: null,
  },
  {
    place: "1st Place",
    placeType: "1st",
    team: "Solo",
    event: "Code Insight",
    college: "KSR College of Technology",
    awardBadge: "1st Solo",
    verifiedUrl: "https://lnkd.in/p/g3Z4bMqS",
  },
  {
    place: "1st Place",
    placeType: "1st",
    team: "Trio",
    event: "Blind Coding",
    college: "Sri Vidya College of Technology",
    awardBadge: "1st Trio",
    verifiedUrl: "https://lnkd.in/p/gRsi-pch",
  },
  {
    place: "1st Place",
    placeType: "1st",
    team: "Duo",
    event: "Code Battle",
    college: "K. Ramakrishnan College of Technology",
    awardBadge: "1st Duo",
    verifiedUrl: null,
  },
];

export const achievementsStats = {
  totalWins: 8,
  firstPlaceWins: 6,
  secondPlaceWins: 2,
};

export const codingProfilesData = [
  {
    id: "leetcode",
    platform: "LeetCode",
    username: "_Tharun_S",
    profileUrl: "https://leetcode.com/u/_Tharun_S/",
    metrics: [
      { label: "DSA Problems Solved", value: "400+" },
      { label: "Achievement Badge", value: "200 Days Badge (2026)" },
    ],
    description: "Consistent problem solver tackling arrays, trees, dynamic programming, graphs, and system data structures.",
    themeColor: "#FFA116",
    accentGlow: "rgba(255, 161, 22, 0.2)",
  },
  {
    id: "codechef",
    platform: "CodeChef",
    username: "tharunth",
    profileUrl: "https://www.codechef.com/users/tharunth",
    metrics: [
      { label: "Problems Solved", value: "100+" },
      { label: "Honor Badge", value: "Bronze Badge" },
    ],
    description: "Active competitive programming participant sharpening speed, precision, and edge-case handling.",
    themeColor: "#A36B4F",
    accentGlow: "rgba(163, 107, 79, 0.25)",
  },
];

export const internshipsData = [
  {
    id: "codsoft",
    company: "CODSOFT",
    position: "Web Development Intern",
    duration: "January – February 2026",
    workMode: "Remote",
    description:
      "Developed responsive web applications using HTML, CSS, and JavaScript, including interactive portfolio architectures, dynamic landing pages, and responsive UI components.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    verifiedUrl: "https://lnkd.in/p/gVRyRmpt",
    certificateImage: "/assets/certificates/codsoft-certificate.jpg",
  },
  {
    id: "codealpha",
    company: "CODEALPHA",
    position: "Java Programming Intern",
    duration: "February – March 2026",
    workMode: "Remote",
    description:
      "Strengthened Core Java and OOP skills by architecting software solutions, multithreaded logic, and applying object-oriented design patterns to real-world coding challenges.",
    technologies: ["Java", "OOP", "Data Structures", "Algorithm Design"],
    verifiedUrl:
      "https://www.linkedin.com/posts/tharun-s-287871333_java-internship-codealpha-activity-7423955630740398081-sdJs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFP0j0cBtptqb8PwV_K37N1AbUtD8Ax8P6Y",
    certificateImage: "/assets/certificates/codealpha-certificate.jpg",
  },
];

export const certificatesData = [
  {
    id: "oracle-java",
    title: "Oracle Java Certification",
    credentialScope: "Core Java Fundamentals and OOPS Concepts",
    issuer: "Oracle",
    image: "/assets/certificates/oracle-java.jpg",
    hasImage: true,
  },
  {
    id: "web-dev",
    title: "Web Development Certification",
    credentialScope: "HTML, CSS & JavaScript",
    issuer: "Web Development Course",
    image: "/assets/certificates/web-dev.jpg",
    hasImage: true,
  },
  {
    id: "aws-academy",
    title: "AWS Academy",
    credentialScope: "Generative AI Foundations and AI Workflow",
    issuer: "AWS Academy",
    image: "/assets/certificates/ai-ml.jpg",
    hasImage: true,
  },
  {
    id: "snowflake",
    title: "Snowflake Certifications",
    credentialScope: "Data Warehousing, Data Lakes & Fundamentals",
    issuer: "Snowflake",
    image: null,
    hasImage: false,
  },
  {
    id: "mongodb",
    title: "MongoDB Certifications",
    credentialScope: "MongoDB Essentials, Building AI Agents",
    issuer: "MongoDB University",
    image: null,
    hasImage: false,
  },
];

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
