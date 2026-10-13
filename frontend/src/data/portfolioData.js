// Data Store for Tharun S Portfolio
// All verified personal data, education, skills, projects, achievements, coding profiles, internships, certificates

export const profile = {
  name: "THARUN S",
  roles: [
    "Computer Science Engineering Student",
    "Full-Stack Developer",
    "Java Programmer",
    "Problem Solver",
  ],
  headline: "Building Ideas Into Real-World Digital Experiences.",
  tagline:
    "I build full-stack web applications, solve algorithmic problems, and continuously improve my engineering skills through projects, competitive coding, and hands-on development.",
  college: "PSNA College of Engineering and Technology (PSNACET), Dindigul, Tamil Nadu",
  cgpa: "8.74",
  resumeUrl: "/resume/Tharun_S_Resume.pdf",
  photo: "/assets/profile.jpg",
  email: "tharunjeyaknp@gmail.com",
  phone: "+91 7305865241",
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

export const aboutData = {
  bio: [
    "I am a motivated Computer Science Engineering student at PSNA College of Engineering and Technology (PSNACET), Dindigul, with a strong passion for programming, algorithmic problem-solving, and full-stack software development.",
    "I continuously hone my analytical thinking and software craftsmanship through competitive programming, algorithmic problem-solving in Java, and architecting robust web applications with the MERN stack.",
  ],
  education: [
    {
      institution: "PSNA College of Engineering and Technology (PSNACET)",
      location: "Dindigul, Tamil Nadu",
      degree: "B.E. in Computer Science and Engineering",
      period: "2024 – 2028",
      score: "CGPA: 8.74",
      highlight: "Pre-final Year • Focus on Systems & Software Engineering",
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
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Artificial Intelligence and Machine Learning",
    "Web Technologies",
  ],
};

export const skillsData = {
  highlights: [
    { label: "Java & Core Programming", value: "2,000+ Lines Code" },
    { label: "JavaScript & Full-Stack Tech", value: "2,500+ Lines Code" },
  ],
  categories: [
    {
      name: "Programming Languages",
      description: "Core algorithmic problem-solving & application foundations",
      skills: [
        { name: "Java", isPrimary: true, note: "Primary programming language" },
        { name: "JavaScript", isPrimary: false, note: "Web & backend scripting" },
        { name: "C", isPrimary: false, note: "Low-level & systems programming" },
        { name: "TypeScript", isPrimary: false, note: "Type-safe development" },
      ],
    },
    {
      name: "Frontend",
      description: "Modern, responsive, component-driven user interfaces",
      skills: [
        { name: "HTML5", isPrimary: false, note: "Semantic structure" },
        { name: "CSS3", isPrimary: false, note: "Responsive styling & layouts" },
        { name: "React.js", isPrimary: true, note: "Component architecture & hooks" },
      ],
    },
    {
      name: "Backend",
      description: "Scalable REST APIs, business logic & server runtime",
      skills: [
        { name: "Node.js", isPrimary: true, note: "Asynchronous event-driven runtime" },
        { name: "Express.js", isPrimary: false, note: "RESTful API development" },
      ],
    },
    {
      name: "Database",
      description: "Data modeling, indexing, relational and NoSQL storage",
      skills: [
        { name: "MongoDB", isPrimary: true, note: "NoSQL document storage & aggregation" },
        { name: "SQL", isPrimary: false, note: "Relational database queries & schemas" },
      ],
    },
    {
      name: "Developer Tools and Version Control",
      description: "Workflow optimization, source control & team collaboration",
      skills: [
        { name: "Git", isPrimary: true, note: "Version control & branching" },
        { name: "GitHub", isPrimary: true, note: "Code hosting & CI workflows" },
      ],
    },
  ],
};

export const projectsData = [
  {
    id: "jobverse",
    title: "JOBVERSE",
    category: "Online Job Portal",
    isFeatured: true,
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST API"],
    description:
      "Developed a full-stack job portal that enables candidates to search and apply for jobs while recruiters manage job postings and applications through role-based access control.",
    features: [
      "Candidate and recruiter workflows with dedicated portals",
      "Robust job search and multi-criteria application system",
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
    category: "Real-Time Chat Application",
    isFeatured: false,
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO"],
    description:
      "Developed a real-time messaging platform supporting username-based user discovery and instant one-to-one conversations.",
    features: [
      "Instant real-time messaging powered by Socket.IO bi-directional websockets",
      "Live user presence tracking and online/offline status detection",
      "Real-time typing indicators for fluid messaging UX",
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
    id: "personal-portfolio",
    title: "PERSONAL PORTFOLIO",
    category: "Developer Portfolio",
    isFeatured: false,
    techStack: ["React.js", "Three.js", "CSS3", "JavaScript"],
    description:
      "Developed a responsive personal portfolio to showcase projects, technical skills, certifications, and coding achievements.",
    features: [
      "Immersive 3D space scene with scroll-driven camera journey",
      "Ten structured sections highlighting campus readiness and technical breadth",
      "Smooth camera transitions and spatial geometry",
      "Interactive certificate lightbox modal and verified external badges",
      "Validated contact interface and responsive cross-device layout",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Tharun-S-28",
    badge: "Interactive 3D Web",
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
    company: "CODSOFT",
    position: "Web Development Intern",
    duration: "January – February 2026",
    workMode: "Remote",
    description:
      "Developed responsive web applications using HTML, CSS, and JavaScript, including a portfolio website, landing page, and calculator.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    verifiedUrl: "https://lnkd.in/p/gVRyRmpt",
    certificateImage: "/assets/certificates/codsoft-certificate.jpg",
  },
  {
    company: "CODEALPHA",
    position: "Java Programming Intern",
    duration: "February – March 2026",
    workMode: "Remote",
    description:
      "Strengthened Core Java and OOP skills by developing programming solutions and applying object-oriented concepts to practical coding tasks.",
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
