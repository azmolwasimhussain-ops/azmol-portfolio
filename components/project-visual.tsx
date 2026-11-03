import { ArrowDownRight, ArrowUpRight, BookOpen, Leaf, ScanLine, Waves } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-art project-art--${project.visual}`} aria-hidden="true">
      <div className="art-grain" />
      {project.visual === "study" && (
        <div className="study-scene">
          <div className="study-side-label">A FIELD GUIDE TO LEARNING</div>
          <div className="study-page study-page--back"><span /><span /><span /></div>
          <div className="study-page study-page--front">
            <div className="study-page-top"><BookOpen size={16} /><span>STUDY SESSION / 04</span></div>
            <p>Understand<br />the <i>why.</i></p>
            <div className="study-progress"><span /></div>
            <small>02 of 06 concepts explored</small>
          </div>
          <div className="study-note"><span>AI STUDY PARTNER</span><strong>Ask a question<br />about your notes <ArrowUpRight size={13} /></strong></div>
        </div>
      )}
      {project.visual === "terra" && (
        <div className="terra-scene">
          <div className="terra-sun" />
          <div className="terra-rings terra-rings--one" />
          <div className="terra-rings terra-rings--two" />
          <svg className="terra-terrain" viewBox="0 0 600 350" fill="none">
            <path d="M-30 259C45 207 116 278 183 234c71-46 81-138 163-120 74 16 115 81 183 43 37-21 63-38 101-30" />
            <path d="M-20 280c76-52 133 10 202-31 70-41 91-131 161-117 73 14 114 85 187 47 43-23 69-43 104-38" />
            <path d="M-18 302c80-42 137 22 209-18 65-37 95-119 159-108 73 12 113 88 189 51 48-23 70-42 101-40" />
            <path d="M-12 322c81-37 139 33 216-4 66-32 99-105 159-99 70 8 114 86 188 56 43-17 72-37 100-40" />
          </svg>
          <div className="terra-stamp"><Leaf size={15} /><span>MISSION<br />NO. 018</span></div>
          <div className="terra-mission"><span>TAKE THE LONG WAY</span><strong>Notice one thing<br />you usually pass by.</strong></div>
        </div>
      )}
      {project.visual === "nutri" && (
        <div className="nutri-scene">
          <div className="nutri-orbit nutri-orbit--one" />
          <div className="nutri-orbit nutri-orbit--two" />
          <div className="nutri-plate"><div className="nutri-food"><i /><i /><i /><i /><b /><b /><b /></div></div>
          <div className="nutri-title"><span>INGREDIENT STUDY / 01</span><strong>Everyday food,<br /><em>better understood.</em></strong></div>
          <div className="nutri-tag"><ScanLine size={14} /> IMAGE + TEXT INPUT</div>
        </div>
      )}
      {project.visual === "ocean" && (
        <div className="ocean-scene">
          <div className="ocean-coordinate">18° 56&apos; N<br />72° 49&apos; E</div>
          <div className="ocean-globe"><div className="ocean-contour ocean-contour--a" /><div className="ocean-contour ocean-contour--b" /><div className="ocean-contour ocean-contour--c" /><div className="ocean-pin" /></div>
          <div className="ocean-depth"><span>DEPTH</span><strong>1,240 <small>m</small></strong><div><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
          <div className="ocean-caption"><Waves size={14} /> OCEAN-X <span>·</span> SYNTHETIC DEMO DATA</div>
        </div>
      )}
      {project.visual === "skardela" && (
        <div className="skardela-scene">
          <div className="skardela-header"><span>DAILY LOGIC / 042</span><ArrowUpRight size={15} /></div>
          <div className="skardela-grid">
            {["S", "K", "A", "R", "D", "E", "L", "A", "·"].map((letter, index) => (
              <span className={`skardela-cell skardela-cell--${index}`} key={`${letter}-${index}`}>{letter}</span>
            ))}
          </div>
          <div className="skardela-footer"><span>STREAK</span><strong>06 <i>days</i></strong><ArrowDownRight size={18} /></div>
        </div>
      )}
      {project.visual === "plate" && (
        <div className="plate-screenshot">
          <Image
            className="plate-screenshot-image"
            src="/projects/plateprofit/dashboard.webp"
            alt=""
            fill
            sizes="(max-width: 760px) 90vw, (max-width: 1060px) 84vw, 55vw"
          />
          <span className="plate-screenshot-label"><i /> PLATEPROFIT AI <b>PRODUCT SCREEN · DASHBOARD</b></span>
        </div>
      )}
    </div>
  );
}
