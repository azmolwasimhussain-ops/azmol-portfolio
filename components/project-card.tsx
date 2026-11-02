"use client";

import { ArrowUpRight, BookOpen, GitBranch } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { useTechnologyFilter } from "@/components/technology-filter";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { selectedTechnology } = useTechnologyFilter();
  const matchesTechnology = selectedTechnology
    ? project.technologies.some((technology) => technology.toLowerCase() === selectedTechnology.toLowerCase())
    : false;
  const filterClass = selectedTechnology
    ? matchesTechnology ? " project-card--matched" : " project-card--dimmed"
    : "";

  return (
    <Reveal className={`project-card${project.featured ? " project-card--featured" : ""}${filterClass}`} delay={index % 2 ? 0.08 : 0}>
      <a
        className="project-art-link"
        href={project.demo ?? project.repo}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.name} ${project.demo ? "demo" : "GitHub repository"}`}
      >
        <ProjectVisual project={project} />
        <span className="project-art-arrow"><ArrowUpRight size={19} /></span>
      </a>
      <div className="project-copy">
        <div className="project-overline"><span>{project.number}</span><span>{project.category}</span></div>
        <h3>{project.name}</h3>
        <p className="project-deck">{project.description}</p>
        <p className="project-detail">{project.detail}</p>
        <ul className="technology-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-links">
          {project.caseStudyHref && (
            <a href={project.caseStudyHref}>
              Case study<BookOpen size={13} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              {project.demoLabel ?? "Live demo"}<ArrowUpRight size={14} />
            </a>
          )}
          <a href={project.repo} target="_blank" rel="noreferrer"><GitBranch size={14} /> GitHub <ArrowUpRight size={13} /></a>
        </div>
      </div>
    </Reveal>
  );
}
