import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    id: "practicum-muhororo",
    role: "Student Teacher & Computer Science Intern",
    organization: "GS MUHORORO (Murambi Sector, Rulindo District)",
    period: "2026",
    type: "Education & Teaching",
    description: [
      "Conducted practical Computer Science instruction for ~2,500 student environment with limited hardware (only 5–6 working Positivo BGH laptops available).",
      "Pioneered projector-centric interactive HTML coding lessons for Senior 4 HGL students (18 learners) in pairs.",
      "Delivered large-classroom digital presentation sessions for Senior 3 (68 learners) integrating inclusive pedagogical practices for students with special educational needs (SEN).",
      "Designed and executed 5E-model microteaching introducing algorithm sequencing, branching logic, and computational thinking."
    ],
    highlights: ["Taught with 5–6 Laptops", "S4 HTML & S3 SEN Presentation", "5E Microteaching Algorithms"]
  },
  {
    id: "mastercard-sef-bootcamp",
    role: "Innovator & Technology Fellow",
    organization: "Mastercard Foundation SEF 2.0 / HATANA Bootcamp",
    period: "March 23–28, 2026",
    type: "Innovation & Bootcamp",
    description: [
      "Selected for residential social entrepreneurship bootcamp focused on technology-driven problem solving across East Africa.",
      "Developed and refined market-viable solution architecture addressing youth empowerment, digital accessibility, and educational equity.",
      "Collaborated with interdisciplinary innovators on rapid prototyping, venture pitching, and human-centered design methodology."
    ],
    highlights: ["Social Entrepreneurship", "Venture Prototyping", "Impact Innovation"]
  },
  {
    id: "q-solve-kenya-2026",
    role: "Hackathon Participant & Solution Architect",
    organization: "Q-Solve Kenya Hackathon 2026 (Mayange)",
    period: "September 1–3, 2026",
    type: "Innovation & Bootcamp",
    description: [
      "Explored regional innovation models combining EdTech and FinTech to tackle barriers in rural education and small business financial inclusion.",
      "Formulated system architecture for offline-first data synchronization and lightweight digital transaction accounting.",
      "Presented technological prototypes to pan-African judges demonstrating software utility under constrained infrastructure."
    ],
    highlights: ["EdTech + FinTech Nexus", "Regional Hackathon", "Offline Data Sync"]
  },
  {
    id: "iee-teaching-assistant",
    role: "Teaching Assistant",
    organization: "IEE (Inspire, Educate and Empower Rwanda)",
    period: "2023 – 2024",
    type: "Education & Teaching",
    description: [
      "Supported classroom instructional delivery and mentored learners through practical computing exercises and digital literacy.",
      "Assisted senior educators in structuring technology-supported learning activities and facilitating collaborative group work.",
      "Strengthened personal competencies in pedagogical facilitation, student empathy, and educational communication."
    ],
    highlights: ["Classroom Facilitation", "Learner Support", "Instructional Technology"]
  }
];

export const learningTimeline = [
  {
    year: "2023",
    title: "Teaching Foundations & Early TA Experience",
    summary: "Served as IEE Teaching Assistant, developing hands-on classroom communication and instructional technology skills."
  },
  {
    year: "2024",
    title: "Deepening Computer Science & Pedagogical Theory",
    summary: "Mastered CBC curricular frameworks, social constructivism, algorithm design, and modern web application development."
  },
  {
    year: "2025",
    title: "Software Engineering & Full-Stack Expansion",
    summary: "Architected FluentEdge Academy, React Native mobile apps, relational database models, and offline systems."
  },
  {
    year: "2026",
    title: "Teaching Practicum, Research & Innovation Bootcamps",
    summary: "Completed GS MUHORORO teaching attachment, SEF 2.0 / HATANA bootcamp, Q-Solve Kenya Hackathon, and Agricultural Welfare research."
  },
  {
    year: "Future Horizon",
    title: "Professional CS Educator & EdTech Builder",
    summary: "Deploying high-impact educational software across African schools while teaching and inspiring the next generation of engineers."
  }
];
