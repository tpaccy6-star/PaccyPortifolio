export type ProjectStatus = "Shipped" | "In Development" | "Prototype" | "Concept" | "Research" | "Completed";

export interface Education {
  id: string;
  degree: string;
  institution: string;
  department: string;
  focusAreas: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline?: string;
  category: ("Education" | "Web" | "Mobile" | "Desktop" | "AI" | "Data" | "FinTech" | "Systems")[];
  tier: "featured" | "standard" | "mobile-series";
  problem: string;
  solution: string;
  role: string;
  techStack: string[];
  keyFeatures: string[];
  challenges?: string;
  whatILearned?: string;
  architectureConcept?: string;
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  highlights?: string[];
  certificatePreview?: boolean;
}

export interface SkillItem {
  name: string;
  category: "Programming" | "Frameworks & Mobile" | "Backend & Databases" | "Dev Tools & Systems" | "CS Foundations" | "EdTech & Pedagogy";
  level?: "Primary" | "Familiar" | "Exploring";
  description?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  type: "Education & Teaching" | "Innovation & Bootcamp" | "Technical";
  description: string[];
  highlights?: string[];
}

export interface TeachingCaseStudy {
  school: string;
  location: string;
  role: string;
  studentBody: string;
  laptopContext: {
    initial: number;
    scrapped: number;
    remaining: number;
    functional: number;
    batteryIssues: number;
    availableForStudents: number;
  };
  strategy: string[];
  lessons: {
    class: string;
    topic: string;
    students: number;
    setup: string;
    notes: string;
  }[];
  microteaching: {
    topic: string;
    model: string;
    duration: string;
    students: number;
    summary: string;
  };
}

export interface ProblemSolutionItem {
  id: string;
  problem: string;
  category: string;
  technologyDirection: string;
  projectRelation?: string;
  description: string;
  iconName: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  dataset: string;
  focus: string;
  methods: string[];
  impact: string;
  summary: string;
}

export interface InnovationItem {
  id: string;
  title: string;
  location: string;
  dates: string;
  focus: string;
  description: string;
  themes: string[];
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period?: string;
  category: "Choir & Ministry" | "Campus & Community" | "Service";
  responsibilities: string[];
  impact: string;
}
