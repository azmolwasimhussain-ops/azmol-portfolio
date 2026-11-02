export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  detail: string;
  technologies: string[];
  visual: "study" | "terra" | "nutri" | "ocean" | "skardela" | "plate";
  repo: string;
  demo?: string;
  demoLabel?: string;
  caseStudyHref?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "StudyMate",
    category: "Learning · Applied AI",
    description: "A study partner that turns course material into a clearer next step.",
    detail:
      "A document-grounded learning tool with question answering, quizzes, and study plans. Its project write-up describes a retrieval-augmented flow with Gemma 2 2B through Ollama.",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Ollama", "RAG"],
    visual: "study",
    repo: "https://github.com/azmolwasimhussain-ops/StudyMate",
    demo: "https://study-mate-one-psi.vercel.app/",
    demoLabel: "Live demo",
    caseStudyHref: "/projects/studymate",
    featured: true,
  },
  {
    number: "02",
    name: "TerraMind",
    category: "Local AI · PWA",
    description: "An offline-first nature companion with optional local AI for guided outdoor missions.",
    detail:
      "Generates outdoor missions with Ollama or a built-in fallback, then keeps a personal field journal in IndexedDB. The project is packaged as a progressive web app.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Ollama", "IndexedDB"],
    visual: "terra",
    repo: "https://github.com/azmolwasimhussain-ops/TerraMind",
    demo: "https://terra-mind-lqvd.vercel.app/",
    demoLabel: "Live demo",
    caseStudyHref: "/projects/terramind",
    featured: true,
  },
  {
    number: "03",
    name: "NutriScan AI",
    category: "Food · Applied AI",
    description: "An Indian-cuisine nutrition explorer built around a simple scan flow.",
    detail:
      "A React and TypeScript application for photo or text input, estimated nutrition, ingredients, allergen flags, and scan history, with Gemini API integration described in the repository.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Gemini", "Recharts"],
    visual: "nutri",
    repo: "https://github.com/azmolwasimhussain-ops/NutriScan-AI",
    demo: "https://nutri-scan-ai-zeta.vercel.app/",
    demoLabel: "Live demo",
    caseStudyHref: "/projects/nutriscan-ai",
    featured: true,
  },
  {
    number: "04",
    name: "Ocean3D · OCEAN-X",
    category: "Scientific visualization",
    description: "A 3D workspace for exploring ocean models and observations.",
    detail:
      "A concept platform for depth-aware exploration and model validation analytics. The current demo uses synthetic data, clearly labeled in the project, rather than operational ocean observations.",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "CesiumJS"],
    visual: "ocean",
    repo: "https://github.com/azmolwasimhussain-ops/Ocean3D-INCOIS",
    demo: "https://ocean-x-incois.vercel.app/",
    demoLabel: "Demo · synthetic data",
    featured: true,
  },
  {
    number: "05",
    name: "Skardela",
    category: "Games · Browser app",
    description: "A daily puzzle collection with four small tests of pattern and recall.",
    detail:
      "A browser-only puzzle app with streaks and personal bests, designed to work without an account or backend.",
    technologies: ["React", "TypeScript", "Vite"],
    visual: "skardela",
    repo: "https://github.com/azmolwasimhussain-ops/skardela",
    demo: "https://skardela-00.vercel.app/",
    demoLabel: "Play Skardela",
  },
  {
    number: "06",
    name: "PlateProfit AI",
    category: "Food business · Prototype",
    description: "A local-first concept for understanding menu costs and pricing.",
    detail:
      "Explores ingredient costs, serving margins, invoice-text parsing, and pricing scenarios for independent food businesses, with an Ollama-powered assistant. Presented as an early product concept.",
    technologies: ["Next.js", "React", "TypeScript", "Ollama", "OCR", "Local storage"],
    visual: "plate",
    repo: "https://github.com/azmolwasimhussain-ops/PlateProfit-AI",
    demo: "https://plate-profit-ai-8fek.vercel.app/",
    demoLabel: "Project preview",
    caseStudyHref: "/projects/plateprofit-ai",
  },
];
