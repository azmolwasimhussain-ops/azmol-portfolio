export const achievementCategories = [
  "All",
  "Open Source & Community",
  "Hackathons & Competitions",
  "Certifications & Learning",
  "Awards & Recognition",
  "Milestones & Special Achievements",
] as const;

export type AchievementCategory = (typeof achievementCategories)[number];
export type AchievementIcon =
  | "Award"
  | "BookOpen"
  | "Code2"
  | "Cpu"
  | "GraduationCap"
  | "Medal"
  | "Sparkles"
  | "UsersRound"
  | "Zap";

export interface AchievementLink {
  label: string;
  href: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: Exclude<AchievementCategory, "All">;
  description: string;
  evidence: string;
  icon: AchievementIcon;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  certificate?: string;
  featured?: boolean;
  links: AchievementLink[];
}

const linkedin = "https://www.linkedin.com/in/azmol-wasim-hussain-404778376/";
const devProfile = "https://dev.to/azmolwasimhussain";

export const achievements: Achievement[] = [
  {
    id: "hacktoberfest-completionist-plus-plus",
    title: "Completionist++",
    organization: "Hacktoberfest 2026",
    date: "15 October 2026",
    category: "Awards & Recognition",
    description:
      "Completed the 20-sticker milestone and earned Completionist++. The supplied certificate records the achievement on 15 October 2026.",
    evidence: "Original certificate supplied",
    icon: "Award",
    image:
      "/assets/achievements/hacktoberfest-2026-completionist-plus-plus-certificate.webp",
    imageAlt:
      "Hacktoberfest 2026 Completionist++ certificate issued to Azmol Wasim Hussain on 15 October 2026",
    imageWidth: 1600,
    imageHeight: 1131,
    certificate:
      "/assets/achievements/hacktoberfest-2026-completionist-plus-plus-certificate.pdf",
    featured: true,
    links: [
      {
        label: "Open original certificate",
        href: "/assets/achievements/hacktoberfest-2026-completionist-plus-plus-certificate.pdf",
      },
    ],
  },
  {
    id: "hacktoberfest-completionist",
    title: "Completionist",
    organization: "Hacktoberfest 2026",
    date: "9 October 2026",
    category: "Awards & Recognition",
    description:
      "Reached the Hacktoberfest Completionist milestone. The original certificate supplied for the portfolio is dated 9 October 2026.",
    evidence: "Original certificate supplied",
    icon: "Medal",
    image: "/assets/achievements/hacktoberfest-2026-completionist-certificate.webp",
    imageAlt:
      "Hacktoberfest 2026 Completionist certificate issued to Azmol Wasim Hussain on 9 October 2026",
    imageWidth: 1600,
    imageHeight: 1131,
    certificate:
      "/assets/achievements/hacktoberfest-2026-completionist-certificate.pdf",
    links: [
      {
        label: "Open original certificate",
        href: "/assets/achievements/hacktoberfest-2026-completionist-certificate.pdf",
      },
    ],
  },
  {
    id: "hacktoberfest-sticker-book",
    title: "Sticker book: 24 of 29",
    organization: "Hacktoberfest 2026",
    date: "1 November 2026",
    category: "Milestones & Special Achievements",
    description:
      "A snapshot of the sticker-book collection at 24 out of 29 stickers. The supplied original graphic is dated 1 November 2026.",
    evidence: "Original sticker-book image supplied",
    icon: "Sparkles",
    image: "/assets/achievements/hacktoberfest-2026-sticker-book.webp",
    imageAlt:
      "Hacktoberfest 2026 sticker book for Azmol Wasim Hussain showing 24 of 29 stickers collected",
    imageWidth: 1080,
    imageHeight: 1080,
    links: [
      {
        label: "View original sticker-book image",
        href: "/assets/achievements/hacktoberfest-2026-sticker-book-original.png",
      },
    ],
  },
  {
    id: "hacktoberfest-physical-rewards",
    title: "Physical stickers & holographic reward",
    organization: "Hacktoberfest 2026",
    date: "2026",
    category: "Milestones & Special Achievements",
    description:
      "Alongside the digital sticker book, I collected the physical sticker set, including holographic stickers.",
    evidence: "Participant-reported milestone",
    icon: "Sparkles",
    links: [
      {
        label: "Hacktoberfest",
        href: "https://hacktoberfest.com/",
      },
    ],
  },
  {
    id: "hacktoberfest-dev-badge",
    title: "Completionist DEV badge",
    organization: "DEV Community · Hacktoberfest 2026",
    date: "2026",
    category: "Milestones & Special Achievements",
    description:
      "The Hacktoberfest Completionist badge on DEV is part of Azmol's reported 2026 milestone. The linked profile is the public place to view the badge.",
    evidence: "Participant-reported milestone · DEV profile",
    icon: "Award",
    links: [{ label: "View DEV profile", href: devProfile }],
  },
  {
    id: "cntrl-merged-prs",
    title: "Six merged contributions to CNTRL",
    organization: "Omnikon Organization · CNTRL Browser",
    date: "June–July 2026",
    category: "Open Source & Community",
    description:
      "Merged browser fixes and features across navigation, tab behavior, accessible controls, keyboard shortcuts, and a Rust/SQLite memory and privacy layer.",
    evidence: "Merged pull requests",
    icon: "Code2",
    links: [
      { label: "PR #59 · Memory and privacy", href: "https://github.com/Omnikon-Org/CNTRL/pull/59" },
      { label: "PR #44 · Keyboard shortcuts", href: "https://github.com/Omnikon-Org/CNTRL/pull/44" },
      { label: "PR #43 · Accessible controls", href: "https://github.com/Omnikon-Org/CNTRL/pull/43" },
      { label: "PR #26 · Fallback service", href: "https://github.com/Omnikon-Org/CNTRL/pull/26" },
      { label: "PR #23 · Blank tab handling", href: "https://github.com/Omnikon-Org/CNTRL/pull/23" },
      { label: "PR #22 · Empty URL fix", href: "https://github.com/Omnikon-Org/CNTRL/pull/22" },
    ],
  },
  {
    id: "karyalaya-ai-hackday",
    title: "Karyalaya AI · HackDay team project",
    organization: "HackDay 2026 · Four-person team",
    date: "25 October 2026",
    category: "Hackathons & Competitions",
    description:
      "Collaborated on PDF approval-note generation, bullet formatting, audit logging, and OCR/RAG document handling. Pull request #9 was merged into the team repository.",
    evidence: "Team project · merged pull request",
    icon: "UsersRound",
    links: [
      { label: "Merged pull request #9", href: "https://github.com/rwitankar-byte/HackDay_2026/pull/9" },
      { label: "HackDay project repository", href: "https://github.com/rwitankar-byte/HackDay_2026" },
      {
        label: "Hacktoberfest Hack Day Pune · event listing",
        href: "https://events.mlh.io/events/15121-hacktoberfest-hack-day-pune-x-nst-adypu-powered-by-nstsdc",
      },
    ],
  },
  {
    id: "dev-hacktoberfest-submissions",
    title: "Five DEV challenge submissions",
    organization: "DEV Community · Hacktoberfest 2026",
    date: "October 2026",
    category: "Hackathons & Competitions",
    description:
      "Published project write-ups for the StudyMate Weekend Challenge and Hacktoberfest Open-Source AI challenge weeks. These are submissions and participation records; no prize win is claimed.",
    evidence: "Published challenge submissions · not awards",
    icon: "BookOpen",
    links: [
      { label: "StudyMate · Weekend Challenge", href: "https://dev.to/azmolwasimhussain/studymate-an-ai-study-partner-built-for-a-friend-3894" },
      { label: "TerraMind · Week 1", href: "https://dev.to/azmolwasimhussain/terramind-your-offline-ai-nature-companion-4oh4" },
      { label: "PlateProfit AI · Week 2", href: "https://dev.to/azmolwasimhussain/plateprofit-ai-turning-food-waste-into-profit-with-open-source-ai-5c9k" },
      { label: "SlothScript · Week 3", href: "https://dev.to/azmolwasimhussain/slothscript-automating-my-code-reviews-locally-with-gemma-so-i-can-be-lazier-51c9" },
      { label: "The Haunted Terminal · Week 4", href: "https://dev.to/azmolwasimhussain/the-haunted-terminal-when-local-open-source-ai-possesses-your-shell-igl" },
    ],
  },
  {
    id: "hacktoberfest-2025-merge",
    title: "Community open-source merges",
    organization: "Hacktoberfest 2025 · FirstLeaf",
    date: "October 2025",
    category: "Open Source & Community",
    description:
      "Contributed a Python wallet-generator script to Hacktoberfest 2025 and added a contributor entry to FirstLeaf. Both linked pull requests were merged.",
    evidence: "Two merged pull requests",
    icon: "Code2",
    links: [
      { label: "Hacktoberfest 2025 · PR #14", href: "https://github.com/Shizu-ka/Hacktoberfest-2025/pull/14" },
      { label: "FirstLeaf · PR #88", href: "https://github.com/Rohit-554/FirstLeaf/pull/88" },
    ],
  },
  {
    id: "devcation-hack-n-solve",
    title: "Devcation Hack ’N’ Solve",
    organization: "Unstop",
    date: "April 2026",
    category: "Hackathons & Competitions",
    description:
      "Participation certificate listed on Azmol's LinkedIn profile. No placement or award is stated here.",
    evidence: "LinkedIn-listed participation certificate",
    icon: "Zap",
    links: [{ label: "LinkedIn profile", href: linkedin }],
  },
  {
    id: "algoquest-noesis",
    title: "AlgoQuest · Coding Treasurehunt",
    organization: "Noesis · Unstop",
    date: "March 2026",
    category: "Hackathons & Competitions",
    description:
      "Participation certificate listed on Azmol's LinkedIn profile. No competition placement is claimed.",
    evidence: "LinkedIn-listed participation certificate",
    icon: "Cpu",
    links: [{ label: "LinkedIn profile", href: linkedin }],
  },
  {
    id: "national-online-hackathon",
    title: "National Online Hackathon 2026 · Startup",
    organization: "Unstop",
    date: "March 2026",
    category: "Hackathons & Competitions",
    description:
      "Participation certificate listed on Azmol's LinkedIn profile. This gallery records participation only; no finalist or winner status has been verified.",
    evidence: "LinkedIn-listed participation certificate",
    icon: "UsersRound",
    links: [{ label: "LinkedIn profile", href: linkedin }],
  },
  {
    id: "scratch-that-code",
    title: "Scratch That Code · 8-hour hackathon",
    organization: "Noesis · Unstop",
    date: "March 2026",
    category: "Hackathons & Competitions",
    description:
      "Participation certificate listed on Azmol's LinkedIn profile. No placement or award is stated here.",
    evidence: "LinkedIn-listed participation certificate",
    icon: "Code2",
    links: [{ label: "LinkedIn profile", href: linkedin }],
  },
  {
    id: "decodelabs-frontend-program",
    title: "Frontend Development Virtual Internship Program",
    organization: "DecodeLabs",
    date: "April 2026",
    category: "Certifications & Learning",
    description:
      "Program certificate listed on Azmol's LinkedIn profile. Presented as a learning credential, not employment experience.",
    evidence: "LinkedIn-listed program certificate",
    icon: "GraduationCap",
    links: [{ label: "LinkedIn profile", href: linkedin }],
  },
  {
    id: "fundamentals-of-physics",
    title: "Fundamental of Physics",
    organization: "Newton School of Technology",
    date: "Issued December 2025",
    category: "Certifications & Learning",
    description:
      "Course certificate listed on Azmol's LinkedIn profile, with the course date shown as 28 August 2025.",
    evidence: "LinkedIn-listed course certificate",
    icon: "BookOpen",
    links: [{ label: "LinkedIn profile", href: linkedin }],
  },
  {
    id: "yuva-ai-for-all",
    title: "YUVA AI For All",
    organization: "TCS iON",
    date: "March 2026",
    category: "Certifications & Learning",
    description:
      "AI learning certificate listed on Azmol's LinkedIn profile.",
    evidence: "LinkedIn-listed learning certificate",
    icon: "Cpu",
    links: [{ label: "LinkedIn profile", href: linkedin }],
  },
];
