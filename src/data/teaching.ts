import type { TeachingCaseStudy } from "./types";

export const teachingPhilosophy = {
  quote: "Technology should not replace teachers; it should empower teachers and learners.",
  vision: "My approach to teaching Computer Science focuses on making learning practical, interactive, collaborative, and connected to real-world problems. I believe students learn best when they are given opportunities to experiment, solve problems, make mistakes, collaborate, and build things themselves.",
  approaches: [
    {
      name: "Competency-Based Curriculum (CBC)",
      description: "Focusing on active learner performance, critical thinking, and mastery of demonstrable computational skills rather than rote memorization."
    },
    {
      name: "5E Instructional Model",
      description: "Engage, Explore, Explain, Elaborate, and Evaluate — structuring lessons so learners discover algorithmic logic intuitively before formal definitions."
    },
    {
      name: "Social Constructivism",
      description: "Facilitating knowledge creation through peer programming, collaborative debugging, and shared classroom problem-solving."
    },
    {
      name: "Practical & Project-Based Learning",
      description: "Connecting syntax to actual applications (HTML pages, computational calculators, algorithms) that students can see and interact with immediately."
    },
    {
      name: "Resource-Resilient Pedagogy",
      description: "Adapting instruction to the realities of limited hardware through projector demonstrations, pair rotations, and unplugged computational activities."
    }
  ]
};

export const teachingPracticumCaseStudy: TeachingCaseStudy = {
  school: "GS MUHORORO",
  location: "Murambi Sector, Rulindo District, Northern Province, Rwanda",
  role: "Student Teacher / Teaching Intern",
  studentBody: "Approximately 2,500 students",
  laptopContext: {
    initial: 105,
    scrapped: 27,
    remaining: 78,
    functional: 38,
    batteryIssues: 10,
    availableForStudents: 6 // 5-6 realistically available for classroom stations
  },
  strategy: [
    "Projector-Centric Guided Demonstrations: Live-coding syntax on screen so all students can track step-by-step logic simultaneously.",
    "Station-Based Peer Rotations: Grouping 18+ students around the 5–6 functional Positivo BGH laptops for hands-on turns (Driver/Navigator pairing).",
    "Unplugged Algorithmic Exercises: Solidifying conceptual logic on whiteboards and paper before executing code on machines.",
    "Differentiated Instruction: Supporting mixed-ability learners and special educational needs (SEN) through tailored scaffolding."
  ],
  lessons: [
    {
      class: "Senior 4 HGL",
      topic: "HTML Structure, Tags & Web Basics (Unit 6)",
      students: 18,
      setup: "5 functional Positivo laptops + Projector-supported instruction",
      notes: "Students worked in pairs to build their first functional HTML web documents, editing text files and viewing live browser renders."
    },
    {
      class: "Senior 3",
      topic: "Digital Presentations & Multimedia Communication",
      students: 68,
      setup: "Classroom projector + rotational workstation groups",
      notes: "Large class size of 68 learners; incorporated inclusive teaching methods for students with special educational needs (SEN)."
    },
    {
      class: "Senior 5 HGL",
      topic: "Advanced Presentation Design & Data Visualization",
      students: 28,
      setup: "Projector demonstration + student collaborative slide decks",
      notes: "Focused on structuring logical arguments, visual hierarchy, and technical presentation skills."
    }
  ],
  microteaching: {
    topic: "Introduction to Algorithms & Step-by-Step Logic",
    model: "5E Instructional Model (Engage, Explore, Explain, Elaborate, Evaluate)",
    duration: "15 minutes focused micro-lesson",
    students: 10,
    summary: "Guided 10 peer learners through real-life recipe steps to intuitively discover algorithmic sequences, conditional branching, and loop termination."
  }
};
