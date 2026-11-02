# Azmol Wasim Hussain — Developer Portfolio

A dark, editorial personal portfolio for Azmol Wasim Hussain, a Computer Science and Engineering student focused on frontend development and applied AI. Built to present selected projects, open-source work, and current technical interests through a responsive, motion-aware experience.

> The portfolio source is ready for local use. A public deployment URL has not yet been set for this version.

## Screenshots

Real desktop and mobile captures are not included in this initial source snapshot. Add current browser captures here after the first public deployment so the README reflects the shipped experience rather than a mockup.

## Features

- Editorial dark visual system with serif accents, custom geometric hero artwork, and responsive layouts.
- Sections for the introduction, background, selected projects, skills, open-source contributions, and contact.
- Six project entries backed by a typed data module, with repository and available demo links.
- Scroll-triggered reveals and navigation interactions with reduced-motion support.
- Downloadable résumé PDF at `/azmol-wasim-hussain-resume.pdf`.
- Semantic landmarks, skip link, descriptive metadata, and a generated `robots.txt` route.
- No profile photograph is used; the hero uses custom vector/CSS artwork.

## Featured projects

| Project | Description | Links |
| --- | --- | --- |
| StudyMate | Document-grounded study companion with question answering, quizzes, and study plans; project materials describe a RAG flow using Gemma 2 2B through Ollama. | [Demo](https://study-mate-one-psi.vercel.app/) · [Source](https://github.com/azmolwasimhussain-ops/StudyMate) |
| TerraMind | Nature companion that generates outdoor missions with Ollama or a built-in fallback and stores a field journal locally. | [Demo](https://terra-mind-lqvd.vercel.app/) · [Source](https://github.com/azmolwasimhussain-ops/TerraMind) |
| NutriScan AI | Indian-cuisine nutrition exploration app with photo or text input and nutrition estimates. | [Demo](https://nutri-scan-ai-zeta.vercel.app/) · [Source](https://github.com/azmolwasimhussain-ops/NutriScan-AI) |
| Ocean3D · OCEAN-X | 3D ocean-model exploration concept; its project page identifies the displayed data as synthetic. | [Demo](https://ocean-x-incois.vercel.app/) · [Source](https://github.com/azmolwasimhussain-ops/Ocean3D-INCOIS) |
| Skardela | Browser-based daily puzzle collection with four puzzle types, streaks, and personal bests. | [Play](https://skardela-00.vercel.app/) · [Source](https://github.com/azmolwasimhussain-ops/skardela) |
| PlateProfit AI | Early product concept for ingredient costs, serving margins, invoice OCR, and pricing scenarios for independent food businesses. | [Preview](https://plate-profit-ai-8fek.vercel.app/) · [Source](https://github.com/azmolwasimhussain-ops/PlateProfit-AI) |

These summaries are based on the linked project repositories and project documentation. The portfolio does not claim measured adoption or outcomes.

## Technology stack

- [Next.js](https://nextjs.org/) App Router
- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4 and custom CSS
- [Framer Motion](https://www.framer.com/motion/) for interface animation
- [Lucide React](https://lucide.dev/) icons
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
npm run dev       # Start the local development server
npm run lint      # Run ESLint
npm run typecheck # Run the TypeScript compiler without emitting files
npm run build     # Create a production build
npm start         # Serve the production build
```

## Project structure

```text
app/
  globals.css       # Design tokens, layout, responsive rules, and visual system
  icon.svg          # Browser icon
  layout.tsx        # Root layout and search/social metadata
  page.tsx          # Portfolio sections and page composition
  robots.ts         # Search crawler rules
components/
  hero-visual.tsx   # Original hero illustration
  motion-provider.tsx
  project-card.tsx
  project-visual.tsx
  reveal.tsx        # Scroll reveal utility
  site-nav.tsx
  ...
data/
  projects.ts       # Typed portfolio project content
public/
  azmol-wasim-hussain-resume.pdf
```

The local research report, generated build output, environment files, and dependency directories are not part of the public source repository.

## Deployment

The project can be deployed to [Vercel](https://vercel.com/) by importing the repository and keeping the standard Next.js build settings. The deployed portfolio URL should be added here after a production deployment is created and checked. No production deployment for this source snapshot is claimed.

## Author

**Azmol Wasim Hussain** — Computer Science and Engineering student focused on React, TypeScript, frontend interfaces, and applied AI.

- [GitHub](https://github.com/azmolwasimhussain-ops)
- [LinkedIn](https://www.linkedin.com/in/azmol-wasim-hussain-404778376/)
- [Email](mailto:azmolwasimhussain@gmail.com)

## Professional highlights shown on the site

- Six merged pull requests to [Omnikon-Org/CNTRL](https://github.com/Omnikon-Org/CNTRL/pulls?q=is%3Apr+author%3Aazmolwasimhussain-ops), a Tauri/Rust and SolidJS desktop browser.
- A merged contribution to the four-person Karyalaya AI HackDay 2026 project: [pull request #9](https://github.com/rwitankar-byte/HackDay_2026/pull/9).

The site describes these as contributions and collaboration; it does not present them as employment, awards, or independent project ownership.

## Privacy and repository hygiene

- `.env*`, credentials, build output, package directories, and local output files are excluded by `.gitignore`.
- Do not add API keys or credentials to client-side code. Projects linked from this page are separate repositories and should be reviewed independently before reuse.
- `MY_PROFESSIONAL_PROFILE.md` is intentionally kept outside the public repository.
