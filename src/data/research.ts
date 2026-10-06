import type { ResearchItem, InnovationItem } from "./types";

export const researchProjects: ResearchItem[] = [
  {
    id: "rwanda-agriculture-welfare",
    title: "Rwanda Agricultural Household Welfare Analysis",
    dataset: "Rwanda Agricultural Household Survey 2020 (NISR Public Dataset)",
    focus: "Investigating the key socio-economic, agricultural, and demographic factors directly associated with household welfare and food security in rural Rwanda.",
    methods: [
      "Descriptive statistical modeling & distribution analysis",
      "Bivariate cross-tabulations comparing crop yields vs. consumption welfare",
      "Socio-economic indicator profiling (household size, land tenure, inputs)",
      "Evidence-backed policy recommendation synthesis"
    ],
    impact: "Demonstrated how empirical data analysis bridges the gap between raw public surveys and actionable socio-economic interventions. Core methodology: Data → Analysis → Evidence → Decision-making.",
    summary: "Utilized real-world national survey data from Rwanda to analyze household economic resilience, identifying input access and crop diversification as pivotal welfare levers."
  }
];

export const innovationPrograms: InnovationItem[] = [
  {
    id: "mastercard-sef-hatana",
    title: "Mastercard Foundation SEF 2.0 / HATANA Bootcamp",
    location: "Kigali, Rwanda",
    dates: "March 23 – 28, 2026",
    focus: "Social Entrepreneurship, Innovation & Youth-Driven Tech Ventures",
    description: "An intensive residential acceleration bootcamp centered on developing scalable, technology-driven solutions for pressing educational, agricultural, and socio-economic challenges across Africa.",
    themes: ["Social Impact", "Scalable Ventures", "Design Thinking", "Market Validation"]
  },
  {
    id: "q-solve-kenya-hackathon",
    title: "Q-Solve Kenya Hackathon 2026",
    location: "Mayange, Rwanda",
    dates: "September 1 – 3, 2026",
    focus: "EdTech, FinTech & Financial Inclusion",
    description: "Collaborative regional hackathon exploring technological intersections between inclusive educational platforms and digital financial tools for underserved communities.",
    themes: ["Financial Inclusion", "EdTech Innovation", "Rapid Prototyping", "Pitch Presentation"]
  }
];
