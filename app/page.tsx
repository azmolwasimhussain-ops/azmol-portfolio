import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Mail,
  Network,
  Sparkles,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { HeroVisual } from "@/components/hero-visual";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";

const skillGroups = [
  {
    label: "Interface craft",
    note: "The layer I keep coming back to.",
    skills: ["React", "TypeScript", "Next.js", "JavaScript", "Tailwind CSS", "HTML & CSS", "Vite"],
  },
  {
    label: "Applied AI",
    note: "Useful models, considered in context.",
    skills: ["Ollama", "Gemini", "RAG", "OpenRouter", "Hugging Face", "Local AI patterns"],
  },
  {
    label: "Beyond the screen",
    note: "Tools explored across projects and contributions.",
    skills: ["Python", "FastAPI", "Node.js", "IndexedDB", "CesiumJS", "Three.js", "WebGL"],
  },
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteNav />
      <main id="main">
        <section className="hero-section page-gutter" id="home" aria-labelledby="hero-title">
          <div className="hero-grid-wrap mx-auto w-full">
            <div className="hero-copy">
              <Reveal>
                <p className="eyebrow"><span className="eyebrow-index">01 /</span> FRONTEND DEVELOPMENT <i /> APPLIED AI</p>
                <h1 id="hero-title">I build <em>thoughtful</em><br className="desktop-break" /> digital experiences<span className="hero-period">.</span></h1>
                <p className="hero-intro">I&apos;m Azmol Wasim Hussain — a Computer Science and Engineering student building clear, useful interfaces with React, TypeScript, and applied AI.</p>
                <div className="hero-ctas">
                  <a className="button button--primary" href="#work">Explore my work <ArrowDownRight size={16} /></a>
                  <a className="button button--quiet" href="/azmol-wasim-hussain-resume.pdf" download>Download résumé <ArrowDown size={15} /></a>
                </div>
                <div className="hero-footnote"><span className="hero-footnote-line" /> CURIOUS BY DEFAULT. CAREFUL BY DESIGN.</div>
              </Reveal>
            </div>

            <HeroVisual />

            <a className="hero-scroll" href="#about"><span>SCROLL TO EXPLORE</span><i /></a>
          <div className="hero-index" aria-hidden="true">FRONTEND / APPLIED AI <span>—</span> 2026</div>
          </div>
        </section>

        <section className="about-section section-shell page-gutter" id="about" aria-labelledby="about-title">
          <div className="section-inner mx-auto w-full">
            <div className="section-topline"><span>01 — A LITTLE ABOUT ME</span><span>CURIOUS BY NATURE</span></div>
            <div className="about-layout">
              <Reveal className="about-heading-wrap">
                <p className="section-kicker">THE PERSON BEHIND THE PIXELS</p>
                <h2 id="about-title">A frontend mind with a <em>curious</em> streak.</h2>
                <div className="about-stamp" aria-hidden="true"><span>STAY<br />CURIOUS</span><i>✳</i></div>
              </Reveal>
              <Reveal className="about-story" delay={0.08}>
                <p className="about-lead">I&apos;m studying Computer Science and Engineering at Newton School of Technology, with a focus on AI &amp; ML. Most days, that curiosity takes me toward the parts of a product people can feel: the interface, the details, and the moment an idea becomes useful.</p>
                <p>My projects bring frontend craft together with applied AI — from a document-aware study companion to local-model tools and an interactive ocean-data concept. I&apos;m interested in thoughtful systems, expressive interfaces, and the small decisions that make technology easier to use.</p>
                <p>Alongside these projects, I&apos;ve contributed merged changes to Omnikon&apos;s CNTRL browser and collaborated on Karyalaya AI for HackDay 2026. Those experiences have made me value clear communication as much as clean code.</p>
                <a className="text-link" href="https://www.linkedin.com/in/azmol-wasim-hussain-404778376/" target="_blank" rel="noreferrer">A little more on LinkedIn <ArrowUpRight size={14} /></a>
              </Reveal>
            </div>
            <div className="about-bottomline"><span>COMPUTER SCIENCE &amp; ENGINEERING · AI &amp; ML</span><span>NEWTON SCHOOL OF TECHNOLOGY <ArrowUpRight size={11} /></span></div>
          </div>
        </section>

        <section className="work-section section-shell page-gutter" id="work" aria-labelledby="work-title">
          <div className="section-inner mx-auto w-full">
            <div className="section-topline"><span>02 — SELECTED WORK</span><span>IDEAS, MADE INTERACTIVE</span></div>
            <div className="work-heading-row">
              <Reveal>
                <p className="section-kicker">A FEW THINGS I&apos;VE BEEN MAKING</p>
                <h2 id="work-title">Built with <em>intention.</em></h2>
              </Reveal>
              <Reveal className="work-intro" delay={0.08}><p>A collection across learning, food, nature, and data — all connected by a love for useful interfaces.</p></Reveal>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.name} />)}
            </div>
            <div className="work-endnote"><span>MORE EXPERIMENTS LIVE ON GITHUB</span><a href="https://github.com/azmolwasimhussain-ops" target="_blank" rel="noreferrer">Browse all repositories <ArrowUpRight size={14} /></a></div>
          </div>
        </section>

        <section className="skills-section section-shell page-gutter" id="skills" aria-labelledby="skills-title">
          <div className="section-inner mx-auto w-full">
            <div className="section-topline"><span>03 — TOOLKIT</span><span>LEARN BY MAKING</span></div>
            <div className="skills-layout">
              <Reveal className="skills-heading">
                <p className="section-kicker">TOOLS I REACH FOR</p>
                <h2 id="skills-title">A toolkit that&apos;s <em>always growing.</em></h2>
                <p>These are technologies I&apos;ve used across projects and open-source work — a map of what I build with, not a scorecard.</p>
              </Reveal>
              <div className="skill-groups">
                {skillGroups.map((group, index) => (
                  <Reveal className="skill-group" delay={index * 0.06} key={group.label}>
                    <div className="skill-group-head"><span>0{index + 1}</span><div><h3>{group.label}</h3><p>{group.note}</p></div><ArrowUpRight size={15} /></div>
                    <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contribution-section section-shell page-gutter" id="contributions" aria-labelledby="contributions-title">
          <div className="section-inner mx-auto w-full">
            <div className="section-topline"><span>04 — CONTRIBUTIONS</span><span>GOOD WORK IS SHARED WORK</span></div>
            <div className="contribution-heading">
              <Reveal><p className="section-kicker">OPEN SOURCE &amp; COLLABORATION</p><h2 id="contributions-title">A few meaningful <em>merges.</em></h2></Reveal>
              <Reveal className="contribution-intro" delay={0.08}><p>Outside my own projects, I&apos;ve learned by stepping into larger codebases and helping a team move forward.</p></Reveal>
            </div>
            <div className="contribution-grid">
              <Reveal className="contribution-card contribution-card--large">
                <div className="contribution-card-top"><span className="contribution-symbol">C/</span><span>OPEN SOURCE · OMNIKON-ORG</span></div>
                <div className="contribution-number">06 <i>merged pull requests</i></div>
                <h3>CNTRL browser</h3>
                <p>Contributed fixes and features to a Tauri/Rust and SolidJS desktop browser. The work spans memory and privacy features, navigation behavior, accessibility, and interface details.</p>
                <a href="https://github.com/Omnikon-Org/CNTRL/pull/59" target="_blank" rel="noreferrer">Read a featured contribution <ArrowUpRight size={14} /></a>
              </Reveal>
              <Reveal className="contribution-card" delay={0.08}>
                <div className="contribution-card-top"><span className="contribution-symbol contribution-symbol--mint">K</span><span>HACKDAY 2026 · TEAM PROJECT</span></div>
                <div className="contribution-small-label">KARYALAYA AI</div>
                <h3>Workflows for document-heavy teams.</h3>
                <p>Collaborated on PDF approval-note generation, formatting, audit logging, and OCR/RAG document handling. The project was built by a four-person team.</p>
                <a href="https://github.com/rwitankar-byte/HackDay_2026/pull/9" target="_blank" rel="noreferrer">View merged pull request <ArrowUpRight size={14} /></a>
              </Reveal>
              <Reveal className="contribution-card contribution-card--note" delay={0.12}>
                <Sparkles size={18} />
                <p>My favorite part of building is when an idea gets clearer because someone else touched it.</p>
                <span>OPEN TO LEARNING IN PUBLIC</span>
              </Reveal>
            </div>
            <p className="achievement-footnote">Also submitted project write-ups to DEV challenges; those entries are participation, not awards.</p>
          </div>
        </section>

        <section className="contact-section section-shell page-gutter" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner mx-auto w-full">
            <div className="section-topline"><span>05 — YOUR TURN</span><span>OPEN TO WHAT&apos;S NEXT</span></div>
            <Reveal className="contact-main">
              <span className="contact-orb" aria-hidden="true"><span>✳</span></span>
              <p className="section-kicker">HAVE A GOOD ONE IN MIND?</p>
              <h2 id="contact-title">Let&apos;s make<br />something <em>matter.</em></h2>
              <p className="contact-copy">I&apos;m open to frontend opportunities, thoughtful collaborations, and conversations about building better things for the web.</p>
              <a className="button button--primary button--contact" href="mailto:azmolwasimhussain@gmail.com?subject=Let%E2%80%99s%20talk%20about%20your%20portfolio">Start a conversation <ArrowUpRight size={16} /></a>
            </Reveal>
            <div className="contact-links">
              <a href="mailto:azmolwasimhussain@gmail.com"><span><Mail size={15} /> EMAIL</span><strong>azmolwasimhussain@gmail.com</strong><ArrowUpRight size={15} /></a>
              <a href="https://www.linkedin.com/in/azmol-wasim-hussain-404778376/" target="_blank" rel="noreferrer"><span><Network size={15} /> LINKEDIN</span><strong>Let&apos;s connect</strong><ArrowUpRight size={15} /></a>
              <a href="https://github.com/azmolwasimhussain-ops" target="_blank" rel="noreferrer"><span><Code2 size={15} /> GITHUB</span><strong>Explore the code</strong><ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-gutter">
        <div className="footer-inner mx-auto w-full">
          <a className="footer-brand" href="#home">AW<span>© 2026</span></a>
          <p>Thoughtful interfaces, useful AI, and a little curiosity.</p>
          <a className="back-to-top" href="#home">BACK TO TOP <ArrowRight size={13} /></a>
        </div>
      </footer>
    </>
  );
}
