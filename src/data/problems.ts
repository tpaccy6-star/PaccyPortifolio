import type { ProblemSolutionItem } from "./types";

export const problemsToSolve: ProblemSolutionItem[] = [
  {
    id: "prob-1",
    problem: "Limited School ICT Infrastructure",
    category: "EdTech Infrastructure",
    technologyDirection: "Resource-Resilient & Offline EdTech",
    projectRelation: "QuizMaster V2 & GS Muhororo Strategy",
    description: "Many African schools have few working laptops and unreliable power. Developing lightweight, offline-first tools enables meaningful digital learning without requiring one laptop per child.",
    iconName: "Laptop"
  },
  {
    id: "prob-2",
    problem: "Manual Paper-Based School Attendance",
    category: "Institutional Administration",
    technologyDirection: "Smart School Attendance (NSAMS)",
    projectRelation: "Smart Attendance (NSAMS)",
    description: "Roll-call on paper registers causes chronic dropout latency and heavy administrative burdens. Hierarchical digital roll-call connects classrooms directly to district and MINEDUC dashboards.",
    iconName: "Users"
  },
  {
    id: "prob-3",
    problem: "Complex Higher Education Timetables",
    category: "Operations & Optimization",
    technologyDirection: "Intelligent Timetable Generation",
    projectRelation: "HLI Timetable System",
    description: "Manual university timetable creation causes lecturer conflicts and room capacity bottlenecks. Constraint-satisfaction algorithms generate collision-free schedules in seconds.",
    iconName: "Calendar"
  },
  {
    id: "prob-4",
    problem: "Informal SME Bookkeeping & Tax Hurdles",
    category: "FinTech & Inclusion",
    technologyDirection: "ImbutoBooks (Offline-First MSME Accounting)",
    projectRelation: "ImbutoBooks",
    description: "Small enterprise owners in Rwanda struggle with manual paper ledgers and tax compliance. An offline-first mobile ledger simplifies accounting and VAT calculations.",
    iconName: "Receipt"
  },
  {
    id: "prob-5",
    problem: "Fragmented & Overwhelming Online Learning",
    category: "Digital Pedagogy",
    technologyDirection: "Structured Learning Hub (Levels → Courses → Lessons)",
    projectRelation: "FluentEdge Academy",
    description: "Self-taught learners get lost without clear pedagogical progression. Tiered curriculum with locked lessons and verifiable certification keeps learners motivated and structured.",
    iconName: "GraduationCap"
  },
  {
    id: "prob-6",
    problem: "Distributed Scholarship & Mentorship Tracking",
    category: "Social Equity",
    technologyDirection: "Generation Rise Scholar Portal",
    projectRelation: "Generation Rise Portal",
    description: "Scholarship programs struggle to track student leadership, mentor check-ins, and holistic wellness across remote scholars through a unified, secure platform.",
    iconName: "HeartHandshake"
  },
  {
    id: "prob-7",
    problem: "Teacher Overload from Administrative Work",
    category: "Teacher Empowerment",
    technologyDirection: "Lesson Buddy / TeacherDesk Workstation",
    projectRelation: "TeacherDesk",
    description: "Educators spend up to 40% of their time on manual CBC lesson plan documentation. Digital assistants and AI templates automate routine prep to free up time for teaching.",
    iconName: "BookOpenCheck"
  },
  {
    id: "prob-8",
    problem: "Offline Classroom Examinations",
    category: "Educational Assessment",
    technologyDirection: "QuizMaster V2 (LAN-based Testing)",
    projectRelation: "QuizMaster V2",
    description: "Conducting timed computer-based assessments in rural schools is impossible when internet fails. Local Wi-Fi socket servers allow 60+ devices to be tested without internet.",
    iconName: "Network"
  },
  {
    id: "prob-9",
    problem: "Financial Exclusion for Small Merchants",
    category: "Financial Inclusion",
    technologyDirection: "FinTech & Digital Payment Workflows",
    projectRelation: "ImbutoBooks / Q-Solve Kenya",
    description: "Bridging the gap between cash-heavy community markets and formal banking via mobile ledger tools and data-driven creditworthiness footprints.",
    iconName: "CreditCard"
  },
  {
    id: "prob-10",
    problem: "Lack of Personalized Learning Scaffolding",
    category: "Artificial Intelligence",
    technologyDirection: "Pedagogical AI with Teacher in the Loop",
    projectRelation: "FluentEdge / Local AI Chatbots",
    description: "Using AI to offer immediate hints and adaptive explanations tailored to student pace while keeping teachers at the center as the primary facilitators.",
    iconName: "Sparkles"
  }
];
