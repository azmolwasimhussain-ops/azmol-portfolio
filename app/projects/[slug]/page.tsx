import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, GitBranch, Globe2 } from "lucide-react";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { SiteNav } from "@/components/site-nav";
import { Reveal } from "@/components/reveal";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { projects } from "@/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Project not found" };

  return {
    title: `${study.name} — Project case study`,
    description: study.summary,
    openGraph: {
      title: `${study.name} — Azmol Wasim Hussain`,
      description: study.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.name} — Azmol Wasim Hussain`,
      description: study.summary,
    },
  };
}

const plateScreenshots = [
  { name: "home", label: "Home and overview" },
  { name: "dashboard", label: "Business dashboard" },
  { name: "inventory", label: "Ingredient inventory" },
  { name: "recipes", label: "Recipe costing" },
  { name: "invoices", label: "Invoice workflow" },
  { name: "reports", label: "Reports" },
  { name: "whatif", label: "What-if pricing" },
  { name: "radar", label: "Margin radar" },
];

function ProjectArtwork({ study }: { study: (typeof caseStudies)[number] }) {
  if (study.screenshotPrefix) {
    return (
      <figure className="case-hero-screenshot">
        <Image
          src={`${study.screenshotPrefix}/home.webp`}
          alt={`${study.name} home screen from the project repository`}
          width={1440}
          height={900}
          priority
          sizes="(max-width: 760px) 100vw, 88vw"
        />
        <figcaption>{study.visualNote}</figcaption>
      </figure>
    );
  }

  const project = projects.find((item) => item.visual === study.visual);
  if (!project) return null;
  return (
    <figure className="case-hero-illustration">
      <ProjectVisual project={project} />
      <figcaption>{study.visualNote}</figcaption>
    </figure>
  );
}

function SectionCopy({ title, children, index }: { title: string; children: ReactNode; index: string }) {
  return (
    <Reveal className="case-copy-section">
      <div className="case-section-index">{index}</div>
      <div><h2>{title}</h2>{children}</div>
    </Reveal>
  );
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <a className="skip-link" href="#case-main">Skip to case study</a>
      <SiteNav />
      <main className="case-study page-gutter" id="case-main">
        <div className="case-inner mx-auto w-full">
          <div className="case-breadcrumb-row">
            <Link className="case-back-link" href="/#work"><ArrowLeft size={14} /> Back to selected work</Link>
            <span>PROJECT CASE STUDY <i /> 2026</span>
          </div>
          <header className="case-hero">
            <Reveal>
              <p className="section-kicker">{study.category}</p>
              <h1>{study.name}<span className="hero-period">.</span></h1>
              <p className="case-deck">{study.summary}</p>
              <div className="case-hero-links">
                {study.demo && <a className="button button--primary" href={study.demo} target="_blank" rel="noreferrer">Open project <Globe2 size={15} /></a>}
                <a className="button button--quiet" href={study.repo} target="_blank" rel="noreferrer">View source <GitBranch size={15} /></a>
              </div>
            </Reveal>
          </header>

          <ProjectArtwork study={study} />

          <div className="case-study-body">
            <aside className="case-meta">
              <div><span>ROLE</span><strong>Frontend developer · project builder</strong></div>
              <div><span>FOCUS</span><strong>{study.category}</strong></div>
              <div><span>TECHNOLOGIES</span><ul>{study.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
            </aside>

            <div className="case-story">
              <SectionCopy title="Overview" index="01"><p>{study.overview}</p></SectionCopy>
              <SectionCopy title="The problem" index="02"><p>{study.problem}</p></SectionCopy>
              <SectionCopy title="The solution" index="03"><p>{study.solution}</p></SectionCopy>
              <SectionCopy title="My contribution" index="04"><p>{study.contribution}</p></SectionCopy>

              <Reveal className="case-copy-section case-architecture">
                <div className="case-section-index">05</div>
                <div>
                  <h2>Architecture</h2>
                  <ol>{study.architecture.map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol>
                </div>
              </Reveal>

              <Reveal className="case-copy-section case-features">
                <div className="case-section-index">06</div>
                <div><h2>Key features</h2><ul>{study.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
              </Reveal>

              {study.screenshotPrefix && (
                <section className="case-screenshots" aria-labelledby="screenshots-title">
                  <div className="case-section-index">07</div>
                  <div className="case-screenshots-content">
                    <p className="section-kicker">PRODUCT SCREENS</p>
                    <h2 id="screenshots-title">The interface, <em>in context.</em></h2>
                    <div className="case-screenshot-grid">
                      {plateScreenshots.map(({ name, label }) => (
                        <figure key={name}>
                          <Image
                            src={`${study.screenshotPrefix}/${name}.webp`}
                            alt={`${study.name}: ${label.toLowerCase()} screen`}
                            width={1440}
                            height={900}
                            sizes="(max-width: 760px) 90vw, (max-width: 1060px) 42vw, 32vw"
                          />
                          <figcaption>{label}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              <Reveal className="case-copy-section">
                <div className="case-section-index">{study.screenshotPrefix ? "08" : "07"}</div>
                <div><h2>Challenges &amp; learnings</h2><ul>{study.learnings.map((learning) => <li key={learning}>{learning}</li>)}</ul></div>
              </Reveal>

              <Reveal className="case-limitations">
                <span>PROJECT NOTES</span>
                <ul>{study.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul>
              </Reveal>

              <Reveal className="case-source-links">
                <p className="section-kicker">SOURCE NOTES</p>
                <h2>Explore the implementation.</h2>
                <div>{study.sourceFiles.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label}<ArrowUpRight size={14} /></a>)}</div>
              </Reveal>
            </div>
          </div>

          <footer className="case-footer-cta">
            <span>MORE SELECTED WORK</span>
            <Link href="/#work">Back to the portfolio <ArrowUpRight size={15} /></Link>
          </footer>
        </div>
      </main>
    </>
  );
}
