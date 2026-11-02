# Azmol Wasim Hussain — Developer Portfolio

A dark editorial portfolio for Azmol Wasim Hussain, a frontend developer and Computer Science student. The site presents modern web engineering work built with React, Next.js, and TypeScript, with applied AI as an additional area of interest.

> This repository is connected to GitHub, but a production URL for this version has not been verified. No live portfolio deployment is claimed here.

## Features

- Preserves the dark editorial visual identity with serif accents, gold details, subtle grain, and Azmol's GitHub profile photograph.
- Responsive portfolio sections for the introduction, background, projects, technical skills, public GitHub activity, open-source contributions, and contact.
- Four source-backed project case studies at `/projects/terramind`, `/projects/studymate`, `/projects/nutriscan-ai`, and `/projects/plateprofit-ai`.
- Real interface screenshots from the PlateProfit AI repository, optimized into WebP; other case-study art is labeled as illustration when source screenshots were not available.
- GitHub activity from unauthenticated public endpoints: public repository count, pinned projects, recent updates, and the contribution calendar. The server caches responses for six hours, and the page has a live-data fallback.
- Motion-aware hero entrances, parallax, and hover transitions with reduced-motion support.
- Downloadable, one-page PDF résumé at `/azmol-wasim-hussain-resume.pdf`.
- Responsive navigation, keyboard-operable mobile menu, skip links, semantic page structure, page metadata, and generated Open Graph and Twitter images.

## Selected projects

| Project | Description | Links |
| --- | --- | --- |
| StudyMate | Next.js study companion for material-grounded chat, quizzes, and study planning. The current retrieval function ranks course chunks by keyword overlap. | [Case study](/projects/studymate) · [Demo](https://study-mate-one-psi.vercel.app/) · [Source](https://github.com/azmolwasimhussain-ops/StudyMate) |
| TerraMind | React/Vite nature companion with Ollama or rule-based offline mission generation and an IndexedDB field journal. | [Case study](/projects/terramind) · [Demo](https://terra-mind-lqvd.vercel.app/) · [Source](https://github.com/azmolwasimhussain-ops/TerraMind) |
| NutriScan AI | React/Vite food-analysis interface for Indian cuisine, with photo or text input, estimated nutrition, and scan history. | [Case study](/projects/nutriscan-ai) · [Demo](https://nutri-scan-ai-zeta.vercel.app/) · [Source](https://github.com/azmolwasimhussain-ops/NutriScan-AI) |
| Ocean3D · OCEAN-X | 3D ocean-model exploration concept; the demo identifies displayed data as synthetic. | [Demo](https://ocean-x-incois.vercel.app/) · [Source](https://github.com/azmolwasimhussain-ops/Ocean3D-INCOIS) |
| Skardela | Browser-based daily puzzle collection with four puzzle types, streaks, and personal bests. | [Play](https://skardela-00.vercel.app/) · [Source](https://github.com/azmolwasimhussain-ops/skardela) |
| PlateProfit AI | Early product concept for recipe and ingredient costing, invoice text parsing, and menu-price scenarios. | [Case study](/projects/plateprofit-ai) · [Preview](https://plate-profit-ai-8fek.vercel.app/) · [Source](https://github.com/azmolwasimhussain-ops/PlateProfit-AI) |

Project summaries are based on the linked repositories and their source code. The portfolio does not claim measured adoption or outcomes.

## Technology stack

- [Next.js](https://nextjs.org/) App Router
- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4 with custom CSS
- [Framer Motion](https://www.framer.com/motion/) for interface animation
- [Lucide React](https://lucide.dev/) icons
- GitHub's public user, repository, and contribution-calendar pages (no credential or API token)
- npm for dependency management

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available commands

```bash
npm run dev       # Start the development server
npm run lint      # Run ESLint
npm run typecheck # Run TypeScript without emitting files
npm run build     # Create a production build
npm start         # Serve the production build
```

## Project structure

```text
app/
  api/github-activity/route.ts  # Cached public GitHub activity endpoint
  projects/[slug]/page.tsx      # Static project case studies and metadata
  globals.css                   # Design tokens, layout, and responsive rules
  layout.tsx                    # Root layout and search/social metadata
  opengraph-image.tsx           # Generated Open Graph image
  twitter-image.tsx             # Generated Twitter image
  page.tsx                      # Portfolio page composition
components/
  github-activity.tsx           # Contribution calendar and public repositories
  hero-copy.tsx                 # Reduced-motion-aware hero text reveal
  hero-visual.tsx               # Profile photograph and animated visual
  project-card.tsx              # Project links and case-study entry points
  project-visual.tsx            # Original project illustrations
  site-nav.tsx                  # Responsive and keyboard-aware navigation
data/
  case-studies.ts               # Verified project narratives and source links
  contributions.ts              # Merged pull-request details and links
  projects.ts                   # Typed portfolio project content
public/
  azmol-wasim-hussain-resume.pdf
  projects/plateprofit/         # Optimized screenshots from the project repo
```

The private professional research report, generated build output, environment files, and dependency directories are excluded from the public repository.

## Deployment

The project can be deployed to [Vercel](https://vercel.com/) by importing the existing repository and keeping the standard Next.js build settings. The deployed portfolio URL should be added after deployment has been created and checked.

For self-hosted deployments, set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS site URL so generated social image metadata points to the correct host. Vercel production and deployment host variables are also supported.

## Author

**Azmol Wasim Hussain** — frontend developer and Computer Science and Engineering student focused on modern web engineering with React, Next.js, and TypeScript, with an additional interest in applied AI.

- [GitHub](https://github.com/azmolwasimhussain-ops)
- [LinkedIn](https://www.linkedin.com/in/azmol-wasim-hussain-404778376/)
- [Email](mailto:azmolwasimhussain@gmail.com)

## Verified professional highlights

- Six merged pull requests to [Omnikon-Org/CNTRL](https://github.com/Omnikon-Org/CNTRL/pulls?q=is%3Apr+author%3Aazmolwasimhussain-ops), a Tauri/Rust and SolidJS desktop browser.
- A merged contribution to the four-person Karyalaya AI HackDay 2026 project: [pull request #9](https://github.com/rwitankar-byte/HackDay_2026/pull/9).
- Additional merged community contributions in [Hacktoberfest 2025](https://github.com/Shizu-ka/Hacktoberfest-2025/pull/14) and [FirstLeaf](https://github.com/Rohit-554/FirstLeaf/pull/88).

These are presented as contributions and collaboration, not employment, awards, or independent project ownership.

## Privacy and repository hygiene

- `.env*`, credentials, build output, package directories, the private research report, and local output files are excluded by `.gitignore`.
- The GitHub activity endpoint uses public unauthenticated endpoints and does not require an API token.
- Linked projects are separate repositories and should be reviewed independently before reuse.
