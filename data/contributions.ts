export const cntrlPullRequests = [
  {
    number: 59,
    title: "Memory engine and privacy layer",
    contribution: "Added memory and habit foundations, privacy-mode backend support, audit logging, and related interface surfaces.",
    stack: "Rust · SQLx · SQLite · Tauri · SolidJS",
  },
  {
    number: 44,
    title: "Keyboard shortcuts for tab history",
    contribution: "Added shortcuts to close the active tab and restore the most recently closed tab through the existing tab state flow.",
    stack: "TypeScript · SolidJS",
  },
  {
    number: 43,
    title: "Accessible controls and clearer empty states",
    contribution: "Improved accessible labels, tab tooltips, empty-state messaging, and the address-field placeholder.",
    stack: "TypeScript · SolidJS",
  },
  {
    number: 26,
    title: "Native fallback fetching and navigation polish",
    contribution: "Moved fallback HTML fetching into the native Rust layer and refined keyboard shortcuts and URL navigation behavior.",
    stack: "Rust · reqwest · Tauri · SolidJS",
  },
  {
    number: 23,
    title: "Keep a blank tab available",
    contribution: "Opened an about:blank tab when the last browser tab is closed.",
    stack: "TypeScript · SolidJS",
  },
  {
    number: 22,
    title: "Ignore empty address submissions",
    contribution: "Trimmed address input and prevented navigation when it contains only whitespace.",
    stack: "TypeScript · SolidJS",
  },
].map((pullRequest) => ({
  ...pullRequest,
  url: `https://github.com/Omnikon-Org/CNTRL/pull/${pullRequest.number}`,
}));

export const otherMergedContributions = [
  {
    title: "PDF approval-note generation and workflow polish",
    repository: "Karyalaya AI · HackDay 2026",
    contribution: "Contributed PDF approval notes, bullet formatting fixes, audit logging, and OCR/RAG document handling in a four-person team project.",
    url: "https://github.com/rwitankar-byte/HackDay_2026/pull/9",
    technologies: "Python · ReportLab · OCR · RAG",
  },
  {
    title: "Wallet generator contribution",
    repository: "Hacktoberfest 2025",
    contribution: "Merged a Python wallet-generator script and participant entry.",
    url: "https://github.com/Shizu-ka/Hacktoberfest-2025/pull/14",
    technologies: "Python",
  },
  {
    title: "FirstLeaf contributor entry",
    repository: "FirstLeaf",
    contribution: "Added a contributor entry to the open-source repository.",
    url: "https://github.com/Rohit-554/FirstLeaf/pull/88",
    technologies: "Open-source collaboration",
  },
];
