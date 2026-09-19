export interface Project {
  id: string;
  name: string;
  category: ("Education" | "Web" | "Mobile" | "Desktop" | "AI" | "Data")[];
  problem: string;
  solution: string;
  role: string;
  techStack: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  status: "Shipped" | "In Progress" | "Planned";
}

export interface Skill {
  name: string;
  category: "Programming & Development" | "Frameworks & Technologies" | "Education Technology" | "Professional Skills";
  level?: "Primary" | "Familiar";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  department: string;
  focusAreas: string[];
}
