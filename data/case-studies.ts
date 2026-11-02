export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  contribution: string;
  architecture: string[];
  technologies: string[];
  features: string[];
  learnings: string[];
  limitations: string[];
  repo: string;
  demo?: string;
  screenshotPrefix?: string;
  visual: "study" | "terra" | "nutri" | "plate";
  visualNote: string;
  sourceFiles: { label: string; url: string }[];
};

const owner = "https://github.com/azmolwasimhussain-ops";

export const caseStudies: CaseStudy[] = [
  {
    slug: "terramind",
    name: "TerraMind",
    category: "Product prototype · Local AI · PWA",
    summary: "A nature companion that turns a little screen time into a reason to step outside.",
    overview:
      "TerraMind generates small, guided outdoor missions and gives each one a place in a personal field journal. The product pairs a quiet, nature-led interface with a local Ollama option and a rule-based offline engine.",
    problem:
      "The product explores a simple tension: digital tools can keep people looking at screens, while outdoor curiosity often needs a gentle starting point. TerraMind turns that first step into a short, actionable observation prompt.",
    solution:
      "A mission flow adapts prompts to the user's settings, while the botanical engine can generate a deterministic offline mission when an Ollama model is unavailable. A journal stores field notes locally in IndexedDB, and the app is packaged as a progressive web app.",
    contribution:
      "I developed the React and TypeScript product experience and connected the mission flow to two explicit generation paths: Ollama and the local heuristic engine. I also built the browser-side journal persistence around IndexedDB.",
    architecture: [
      "Vite serves the React and TypeScript progressive web app.",
      "The mission provider routes to Ollama or the botanical heuristic engine, based on settings and deployment context.",
      "Field-journal entries are persisted in IndexedDB on the device.",
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express", "Ollama", "IndexedDB", "PWA"],
    features: [
      "Guided outdoor missions with configurable themes and difficulty.",
      "Offline rule-based mission generation when a local model cannot be reached.",
      "A personal journal backed by IndexedDB.",
      "Progressive web app experience.",
    ],
    learnings: [
      "Local AI needs a clear fallback path when a browser app is deployed away from the model host.",
      "A deterministic offline mode makes the core interaction useful even without model access.",
    ],
    limitations: [
      "The offline botanical engine is rule-based, so its output is more constrained than open-ended model generation.",
      "The repository does not include product-interface screenshots; the visual shown here is an editorial illustration.",
    ],
    repo: `${owner}/TerraMind`,
    demo: "https://terra-mind-lqvd.vercel.app/",
    visual: "terra",
    visualNote: "Editorial illustration · not a product screenshot",
    sourceFiles: [
      { label: "Mission provider", url: `${owner}/TerraMind/blob/main/src/services/aiProvider.ts` },
      { label: "Botanical fallback engine", url: `${owner}/TerraMind/blob/main/src/services/botanicalEngine.ts` },
      { label: "Repository overview", url: `${owner}/TerraMind/blob/main/README.md` },
    ],
  },
  {
    slug: "studymate",
    name: "StudyMate",
    category: "Learning · Modern web engineering · Applied AI",
    summary: "A study workspace for turning course materials into grounded answers, quizzes, and revision plans.",
    overview:
      "StudyMate brings document ingestion, material-grounded chat, quiz generation, and study planning into one student workflow. The project uses open-weight models through Ollama and stores course content and learning activity in a PostgreSQL-backed data model.",
    problem:
      "Students may have lecture notes and PDFs but still need help finding relevant explanations, practicing recall, and deciding what to revise next. StudyMate organizes those activities around the material they provide.",
    solution:
      "The application accepts PDF, Markdown, and text materials, splits content into chunks, and uses the material in chat, quiz, and planner flows. The documented retrieval implementation ranks chunks by query-word overlap and falls back to the first chunks when there is no lexical match.",
    contribution:
      "I developed the Next.js and TypeScript application flow across material management, document-grounded chat, quizzes, and study planning, connecting those workflows to the project’s Prisma and AI-provider layers.",
    architecture: [
      "Next.js App Router handles the application interface and server routes.",
      "Prisma models users, materials, chunks, chat sessions, quizzes, plans, and progress in PostgreSQL.",
      "The retrieval function ranks stored chunks using lexical overlap before passing context to the configured AI provider.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Ollama"],
    features: [
      "PDF, Markdown, and plain-text course-material ingestion.",
      "Chat responses grounded in selected course materials.",
      "Customizable quizzes with difficulty settings and feedback.",
      "A study planner with revision checkpoints and progress tracking.",
    ],
    learnings: [
      "A useful AI study workflow includes visible source context and follow-up practice, not chat alone.",
      "The current retrieval path is lexical; the repository stores embedding fields and helper functions, but the retrieval function does not rank by vector similarity.",
    ],
    limitations: [
      "The current retrieval implementation uses word overlap rather than semantic vector ranking.",
      "The repository does not include product-interface screenshots; the visual shown here is an editorial illustration.",
    ],
    repo: `${owner}/StudyMate`,
    demo: "https://study-mate-one-psi.vercel.app/",
    visual: "study",
    visualNote: "Editorial illustration · not a product screenshot",
    sourceFiles: [
      { label: "Chunk retrieval", url: `${owner}/StudyMate/blob/main/lib/rag/retrieval.ts` },
      { label: "Data model", url: `${owner}/StudyMate/blob/main/prisma/schema.prisma` },
      { label: "Repository overview", url: `${owner}/StudyMate/blob/main/README.md` },
    ],
  },
  {
    slug: "nutriscan-ai",
    name: "NutriScan AI",
    category: "Food · Frontend engineering · Applied AI",
    summary: "A food-analysis interface focused on Indian cuisine, with photo and text-based scan flows.",
    overview:
      "NutriScan AI lets a user describe or photograph a dish and explore estimated nutrition information in a visual interface. Its project write-up describes ingredients, allergen flags, charts, voice output, and saved scan history.",
    problem:
      "Food information can be difficult to interpret when a dish is described informally or is specific to a regional cuisine. The project explores a faster way to inspect an estimate from a photo or a text description.",
    solution:
      "A React interface collects the photo or text input, calls the Gemini service, and presents the returned analysis with nutrition visuals and history. Nutrition values are estimates from the application and should not be read as clinical or dietary advice.",
    contribution:
      "I built the React and TypeScript product interface and scan experience, connecting user input to the Gemini service and the resulting nutrition views described by the project.",
    architecture: [
      "Vite serves the React and TypeScript client.",
      "A Gemini service processes the photo or text analysis request.",
      "The interface presents the response through nutrition summaries, charts, and a scan-history workflow.",
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Gemini 2.5 Flash", "Recharts", "Local storage"],
    features: [
      "Photo and text input for Indian-cuisine dishes.",
      "Estimated macros, ingredients, and allergen flags.",
      "Visual nutrition summaries and voice playback described in the project README.",
      "Saved scan history.",
    ],
    learnings: [
      "A visual result is easier to scan when the interface separates the headline estimate from the ingredient detail.",
      "AI-generated nutrition estimates need clear uncertainty and health-context framing.",
    ],
    limitations: [
      "Nutrition results are estimates and are not a substitute for professional dietary guidance.",
      "The repository does not include product-interface screenshots; the visual shown here is an editorial illustration.",
    ],
    repo: `${owner}/NutriScan-AI`,
    demo: "https://nutri-scan-ai-zeta.vercel.app/",
    visual: "nutri",
    visualNote: "Editorial illustration · not a product screenshot",
    sourceFiles: [
      { label: "Gemini service", url: `${owner}/NutriScan-AI/blob/main/services/geminiService.ts` },
      { label: "Repository overview", url: `${owner}/NutriScan-AI/blob/main/README.md` },
    ],
  },
  {
    slug: "plateprofit-ai",
    name: "PlateProfit AI",
    category: "Food business · Product prototype",
    summary: "A local-first prototype for seeing ingredient costs, recipe margins, and pricing scenarios more clearly.",
    overview:
      "PlateProfit AI explores menu economics for independent food businesses. It combines inventory and recipe costing with invoice text parsing, reports, and what-if pricing views. The repository includes real interface screenshots for these workflows.",
    problem:
      "Small food businesses may need to estimate ingredient and serving costs from changing inventory prices, then understand how a menu price affects contribution margin. The prototype brings those calculations and scenarios into one workspace.",
    solution:
      "Deterministic calculation functions convert ingredient units and compute recipe costs and contribution margins. Invoice text can be parsed into candidate line items, while the product also exposes reports and scenario views. The repository describes an Ollama assistant with a rules-based fallback.",
    contribution:
      "I developed the Next.js and TypeScript product workflows and implemented the core costing and unit-conversion logic, invoice-text parsing, and local prototype experience shown in the repository.",
    architecture: [
      "Next.js and TypeScript provide the web application interface.",
      "Deterministic costing and unit-conversion functions calculate ingredient and recipe costs.",
      "An invoice parser turns extracted text into candidate line items with arithmetic checks.",
      "The repository describes a local Ollama assistant with a rules-based fallback.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Ollama", "OCR parsing", "Local storage"],
    features: [
      "Ingredient inventory and recipe costing.",
      "Unit conversion and per-serving contribution-margin calculations.",
      "Invoice text parsing with quantity, rate, and total checks.",
      "Reports and what-if price scenarios, shown in committed project screenshots.",
    ],
    learnings: [
      "Costing interfaces need clear distinctions between contribution margin and net profit; fixed costs are not deducted by the calculation function.",
      "OCR output is best treated as a draft that needs arithmetic checks and human review.",
    ],
    limitations: [
      "This is an early product concept, not a verified accounting system or a deployed commercial service.",
      "The invoice parser processes extracted text; this case study does not claim end-to-end OCR accuracy.",
    ],
    repo: `${owner}/PlateProfit-AI`,
    demo: "https://plate-profit-ai-8fek.vercel.app/",
    screenshotPrefix: "/projects/plateprofit",
    visual: "plate",
    visualNote: "Screenshots from the project repository",
    sourceFiles: [
      { label: "Costing calculations", url: `${owner}/PlateProfit-AI/blob/main/src/lib/costing.ts` },
      { label: "Invoice text parsing", url: `${owner}/PlateProfit-AI/blob/main/src/lib/ocr.ts` },
      { label: "Repository screenshots", url: `${owner}/PlateProfit-AI/tree/main/screenshots` },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
