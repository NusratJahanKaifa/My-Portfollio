export interface Project {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  badge?: string;
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Programming" | "Tools";
  iconName: string;
  color?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  status: string;
  period: string;
  description: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Nusrat Jahan Kaifa",
  role: "Computer Science & Engineering Student",
  status: "Diploma in Engineering (CSE)",
  institution: "Gausul Azam Maizbhandari Polytechnic Institute",

  shortBio:
    "I am a Computer Science & Engineering student passionate about software development, web development and building practical projects.",

  about: [
    "I am a Diploma in Engineering student in Computer Science & Engineering at Gausul Azam Maizbhandari Polytechnic Institute.",
    "I am interested in software development, web development, backend development and AI/ML.",
    "I enjoy learning new technologies and building practical projects that solve real-world problems.",
  ],

  email: "nusratkaifa15@gmail.com",

  resumeUrl: "/resume.pdf",

  socials: {
    github: "https://github.com/NusratJahanKaifa",
    linkedin:
      "https://www.linkedin.com/in/nusrat-jahan-kaifa-4a10723b1/",
    hackerrank: "https://www.hackerrank.com/profile/nusratkaifa15",
    facebook:
      "https://www.facebook.com/profile.php?id=61594045808219",
  },

  location: "Bangladesh",
};

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: SkillItem[] = [
  // Frontend
  { name: "HTML", category: "Frontend", iconName: "Html5" },
  { name: "CSS", category: "Frontend", iconName: "FileCode" },
  { name: "JavaScript", category: "Frontend", iconName: "Code2" },
  { name: "React", category: "Frontend", iconName: "Atom" },
  { name: "Next.js", category: "Frontend", iconName: "Globe" },
  { name: "Tailwind CSS", category: "Frontend", iconName: "Palette" },

  // Backend
  { name: "Python", category: "Backend", iconName: "Binary" },
  { name: "FastAPI", category: "Backend", iconName: "Zap" },
  { name: "REST API", category: "Backend", iconName: "Network" },

  // Database
  { name: "MySQL", category: "Database", iconName: "Database" },
  { name: "SQLite", category: "Database", iconName: "HardDrive" },
  { name: "PostgreSQL", category: "Database", iconName: "Server" },

  // Programming
  { name: "Python", category: "Programming", iconName: "Terminal" },
  { name: "C", category: "Programming", iconName: "Cpu" },
  { name: "C++", category: "Programming", iconName: "Boxes" },
  { name: "Java", category: "Programming", iconName: "Coffee" },

  // Tools
  { name: "Git", category: "Tools", iconName: "GitBranch" },
  { name: "GitHub", category: "Tools", iconName: "Github" },
  { name: "VS Code", category: "Tools", iconName: "Laptop" },
  { name: "NetBeans", category: "Tools", iconName: "Wrench" },
];

export const PROJECTS: Project[] = [

{
  id: "nature-sphere",
  title: "Nature Sphere Blog Website",
  category: "Web",
  technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  description:
    "A nature-focused blog website with user registration, login, and complete post management features.",
  features: [
    "User Registration",
    "User Login",
    "Create Post",
    "Edit Post",
    "Update Post",
    "Delete Post",
  ],
  githubUrl:
    "https://github.com/NusratJahanKaifa/Blog-Website",
  liveUrl:
    "https://nusratjahankaifa.github.io/Blog-Website/",
  badge: "Nature Blog",
},

  {
    id: "food-recipe",
    title: "Food Recipe Website",
    category: "Frontend Web",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A modern, responsive culinary platform showcasing curated cooking recipes, dynamic category filtering, searchable ingredient checklists, and step-by-step preparation guides.",
    features: [
      "Search and filter recipes by cuisine and ingredients",
      "Dynamic ingredient quantity checklist",
      "Step-by-step cooking instruction view",
      "Mobile-optimized responsive design",
    ],
    githubUrl:
      "https://github.com/NusratJahanKaifa/Food-Recipes-Website",
    liveUrl:
      "https://nusratjahankaifa.github.io/Food-Recipes-Website/",
    badge: "Interactive UI",
  },

  {
    id: "task-manager",
    title: "Task Manager",
    category: "Productivity",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A lightweight, intuitive task management tool designed to boost daily productivity through task creation, category sorting, status transitions, and local persistent state.",
    features: [
      "Add, update, complete, and delete tasks",
      "Filter by active, completed, and priority status",
      "Dynamic progress summary and counter",
      "Persistent state saved in browser storage",
    ],
    githubUrl:
      "https://github.com/NusratJahanKaifa/Task-Manager-App",
    liveUrl:
      "https://nusratjahankaifa.github.io/Task-Manager-App/",
    badge: "Productivity Tool",
  },

  {
    id: "calculator",
    title: "Calculator",
    category: "Utility Application",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A sleek digital calculator with an interactive interface supporting standard arithmetic operations, floating-point logic, memory features, and keyboard shortcut event listeners.",
    features: [
      "Standard arithmetic and decimal operations",
      "Keyboard input support and clear button",
      "Zero-division and syntax error handling",
      "Tactile button feedback and dark UI theme",
    ],
    githubUrl:
      "https://github.com/NusratJahanKaifa/Calculator-App-Tailwind",
    liveUrl:
      "https://nusratjahankaifa.github.io/Calculator-App-Tailwind/calculator.html",
    badge: "Utility",
  },

  {
    id: "movie-collection-api",
    title: "Movie Collection API",
    category: "Backend API",
    technologies: ["FastAPI", "Python", "SQLite", "Pydantic"],
    description:
      "A RESTful API service engineered using FastAPI for managing movie collections, utilizing Pydantic schemas for data validation and SQLite storage.",
    features: [
      "Full CRUD operations for movie records",
      "Request validation and serialization with Pydantic",
      "Interactive Swagger and ReDoc documentation",
      "Fast querying and structured error responses",
    ],
    githubUrl:
      "https://github.com/NusratJahanKaifa/MovieCollectionAPI",
    badge: "RESTful Service",
  },

  {
    id: "expense-tracker-api",
    title: "Expense Tracker API",
    category: "Backend API",
    technologies: [
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "PostgreSQL",
      "JWT",
    ],
    description:
      "A financial tracking API providing JWT user authentication, relational database management with SQLAlchemy ORM, and expense tracking using PostgreSQL.",
    features: [
      "JWT authentication",
      "Relational data schema with SQLAlchemy ORM",
      "Income and expense tracking",
      "PostgreSQL database integration",
    ],
    githubUrl:
      "https://github.com/NusratJahanKaifa/Expense_TrackerAPI",
    badge: "Secure Backend",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Diploma in Engineering",
    field: "Computer Science & Engineering",
    institution: "Gausul Azam Maizbhandari Polytechnic Institute",
    status: "Currently studying",
    period: "Enrolled / In Progress",
    description:
      "Pursuing a comprehensive engineering curriculum covering core computing fundamentals, programming paradigms, data structures, database systems, web technologies, and software engineering principles.",
    highlights: [
      "Core coursework in C, C++, Java, and Python programming",
      "Database design and management with SQL (MySQL, PostgreSQL)",
      "Web engineering, software architectures, and backend APIs",
      "Practical hands-on lab projects and collaborative technical tasks",
    ],
  },
]
