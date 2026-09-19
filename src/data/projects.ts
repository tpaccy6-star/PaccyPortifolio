import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "gen-rise-scholar-portal",
    name: "Generation Rise Scholar Portal",
    category: ["Education", "Web"],
    problem: "Needed a centralized platform for the University of Rwanda to connect Scholars, Mentors, Teachers, and Administrators.",
    solution: "A comprehensive web application that supports mentorship and leadership development workflows across four user roles.",
    role: "Lead Developer [VERIFY role]",
    techStack: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    keyFeatures: [
      "Multi-role dashboard tailored to Scholars, Mentors, Teachers, and Admins",
      "Mentorship and leadership development workflow tracking",
      "Secure user authentication and role-based access control"
    ],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", // Placeholder image
    status: "In Progress" // [VERIFY current build status]
  },
  {
    id: "tma-me-dashboard",
    name: "TMA M&E Dashboard",
    category: ["Data", "Web", "Education"],
    problem: "Talent Mine Academy (Nigeria) needed a way to visualize indicators across academic and organizational health.",
    solution: "A monitoring & evaluation dashboard that visualizes indicators as a companion tool to the organization's Impact Model & MEL Framework.",
    role: "Developer",
    techStack: ["React", "TypeScript", "Data Visualization Libraries"],
    keyFeatures: [
      "Academic Foundation tracking and visualization",
      "Economic Empowerment & Community Impact indicators",
      "Teacher Quality & Institutional Health monitoring"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", // Placeholder image
    status: "Shipped"
  },
  // [VERIFY status/description for Smart Attendance / NSAMS, Rwandan Lesson Buddy / TeacherDesk, QuizMaster, ImbutoBooks]
];
