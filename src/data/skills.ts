import type { SkillItem } from "./types";

export const skillsList: SkillItem[] = [
  // Programming
  { name: "JavaScript (ES6+)", category: "Programming", level: "Primary" },
  { name: "TypeScript", category: "Programming", level: "Primary" },
  { name: "Python", category: "Programming", level: "Primary" },
  { name: "C# (.NET / WPF)", category: "Programming", level: "Familiar" },
  { name: "SQL (PostgreSQL / MariaDB)", category: "Programming", level: "Primary" },
  { name: "HTML5 & CSS3", category: "Programming", level: "Primary" },

  // Frameworks & Mobile
  { name: "React / Vite", category: "Frameworks & Mobile", level: "Primary" },
  { name: "Next.js", category: "Frameworks & Mobile", level: "Exploring" },
  { name: "React Native (Android)", category: "Frameworks & Mobile", level: "Primary" },
  { name: "Flutter", category: "Frameworks & Mobile", level: "Exploring" },
  { name: "Tailwind CSS", category: "Frameworks & Mobile", level: "Primary" },
  { name: "WPF (Windows Desktop)", category: "Frameworks & Mobile", level: "Familiar" },

  // Backend & Databases
  { name: "Node.js & Express", category: "Backend & Databases", level: "Primary" },
  { name: "RESTful API Design", category: "Backend & Databases", level: "Primary" },
  { name: "Role-Based Auth (RBAC)", category: "Backend & Databases", level: "Primary" },
  { name: "PostgreSQL", category: "Backend & Databases", level: "Primary" },
  { name: "MariaDB / MySQL", category: "Backend & Databases", level: "Primary" },
  { name: "Offline Sync & PWA", category: "Backend & Databases", level: "Familiar" },

  // Dev Tools & Systems Environment
  { name: "VS Code & Git/GitHub", category: "Dev Tools & Systems", level: "Primary" },
  { name: "Android Studio & SDK", category: "Dev Tools & Systems", level: "Primary" },
  { name: "ADB & Android Emulator", category: "Dev Tools & Systems", level: "Primary" },
  { name: "Gradle & npm", category: "Dev Tools & Systems", level: "Primary" },
  { name: "Linux / Ubuntu / WSL2", category: "Dev Tools & Systems", level: "Familiar" },
  { name: "Kali Linux / Security Lab", category: "Dev Tools & Systems", level: "Exploring" },

  // CS Foundations
  { name: "CPU Scheduling (FCFS, RR, Priority)", category: "CS Foundations", level: "Primary" },
  { name: "Disk Scheduling (SSTF, SCAN, LOOK, C-SCAN)", category: "CS Foundations", level: "Primary" },
  { name: "Process Synchronization & Bursts", category: "CS Foundations", level: "Primary" },
  { name: "Software Requirements (SRS)", category: "CS Foundations", level: "Primary" },
  { name: "Relational Database Normalization", category: "CS Foundations", level: "Primary" },
  { name: "Constraint Satisfaction Algorithms", category: "CS Foundations", level: "Familiar" },

  // EdTech & Pedagogy
  { name: "Competency-Based Curriculum (CBC)", category: "EdTech & Pedagogy", level: "Primary" },
  { name: "5E Instructional Model", category: "EdTech & Pedagogy", level: "Primary" },
  { name: "Social Constructivism", category: "EdTech & Pedagogy", level: "Primary" },
  { name: "Resource-Limited Instruction", category: "EdTech & Pedagogy", level: "Primary" },
  { name: "Formative & Diagnostic Assessment", category: "EdTech & Pedagogy", level: "Primary" },
  { name: "Educational Media & Projectors", category: "EdTech & Pedagogy", level: "Primary" }
];

export const currentlyLearning = [
  "React Native Advanced Animations",
  "Next.js App Router & Server Components",
  "Flutter & Dart Cross-Platform",
  "Local AI Chatbots (Ollama / Gemini)",
  "Database Replication & Scaling",
  "Linux Kernel & Advanced Shell Scripting"
];

export const currentlyBuilding = [
  { name: "FluentEdge Academy", desc: "Tiered Learning Hub with CEFR certification", tag: "EdTech Platform" },
  { name: "Generation Rise Scholar Portal", desc: "Multi-role scholarship & mentorship ecosystem", tag: "Gender Equity" },
  { name: "Smart Attendance (NSAMS)", desc: "MINEDUC hierarchical attendance telemetry", tag: "Information System" },
  { name: "HLI Timetable Generator", desc: "Constraint-satisfaction university scheduler", tag: "Algorithm Engine" },
  { name: "ImbutoBooks", desc: "Offline-first bookkeeping for Rwandan SMEs", tag: "FinTech" }
];

export const workspaceEnvironment = [
  { label: "Operating System", value: "Windows 11 / WSL2 (Ubuntu)" },
  { label: "Primary Editor", value: "VS Code with modern TypeScript tooling" },
  { label: "Mobile Toolchain", value: "Android Studio, Android SDK, Hermes, Gradle, ADB" },
  { label: "Databases", value: "PostgreSQL, MariaDB, SQLite" },
  { label: "Version Control", value: "Git & GitHub (@tpaccy6-star)" },
  { label: "Systems Explored", value: "Ubuntu Linux, Kali Linux, WSL2" }
];
