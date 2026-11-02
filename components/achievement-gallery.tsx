"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Code2,
  Cpu,
  GraduationCap,
  Medal,
  Sparkles,
  UsersRound,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { achievements, achievementCategories, type Achievement, type AchievementIcon, type AchievementCategory } from "@/data/achievements";
import { Reveal } from "@/components/reveal";

const iconByName: Record<AchievementIcon, LucideIcon> = {
  Award,
  BookOpen,
  Code2,
  Cpu,
  GraduationCap,
  Medal,
  Sparkles,
  UsersRound,
  Zap,
};

function ExternalLink({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  const external = href.startsWith("http");

  return (
    <a
      className={className}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {label}<ArrowUpRight aria-hidden="true" size={13} />
    </a>
  );
}

function AchievementArtwork({
  achievement,
  onPreview,
  featured = false,
}: {
  achievement: Achievement;
  onPreview: (achievement: Achievement) => void;
  featured?: boolean;
}) {
  if (achievement.image) {
    return (
      <button
        className={`achievement-art achievement-art--image${featured ? " achievement-art--featured" : ""}`}
        type="button"
        onClick={() => onPreview(achievement)}
        aria-label={`Preview: ${achievement.imageAlt ?? achievement.title}`}
      >
        <Image
          src={achievement.image}
          alt={achievement.imageAlt ?? ""}
          width={achievement.imageWidth ?? 1200}
          height={achievement.imageHeight ?? 900}
          sizes={featured ? "(max-width: 760px) 90vw, 46vw" : "(max-width: 760px) 90vw, 30vw"}
          loading="lazy"
        />
        <span className="achievement-art-open"><Sparkles aria-hidden="true" size={13} /> View image</span>
      </button>
    );
  }

  const Icon = iconByName[achievement.icon];

  return (
    <div className="achievement-art achievement-art--illustration" aria-hidden="true">
      <span className="achievement-art-index">{achievement.date}</span>
      <span className="achievement-art-orbit achievement-art-orbit--one" />
      <span className="achievement-art-orbit achievement-art-orbit--two" />
      <span className="achievement-art-icon"><Icon size={31} strokeWidth={1.2} /></span>
      <span className="achievement-art-caption">{achievement.organization}</span>
    </div>
  );
}

function FeaturedAchievement({
  achievement,
  onPreview,
}: {
  achievement: Achievement;
  onPreview: (achievement: Achievement) => void;
}) {
  return (
    <Reveal>
      <article className="achievement-feature">
        <div className="achievement-feature-copy">
          <p className="achievement-feature-kicker"><Award aria-hidden="true" size={14} /> Featured recognition · original certificate</p>
          <p className="section-kicker">HACKTOBERFEST 2026</p>
          <h3>Completionist <em>++</em></h3>
          <p className="achievement-feature-description">{achievement.description}</p>
          <dl className="achievement-feature-meta">
            <div><dt>Milestone</dt><dd>20-sticker requirement completed</dd></div>
            <div><dt>Certificate date</dt><dd>{achievement.date}</dd></div>
          </dl>
          <div className="achievement-feature-links">
            {achievement.links.map((link) => <ExternalLink key={link.href} {...link} />)}
          </div>
        </div>
        <div className="achievement-feature-visual">
          <AchievementArtwork achievement={achievement} onPreview={onPreview} featured />
          <span className="achievement-feature-index">01 / 2026</span>
        </div>
      </article>
    </Reveal>
  );
}

function AchievementCard({
  achievement,
  onPreview,
  index,
}: {
  achievement: Achievement;
  onPreview: (achievement: Achievement) => void;
  index: number;
}) {
  const Icon = iconByName[achievement.icon];

  return (
    <Reveal className="achievement-card-wrap" delay={(index % 3) * 0.045}>
      <article className="achievement-card">
        <div className="achievement-card-art-wrap">
          <AchievementArtwork achievement={achievement} onPreview={onPreview} />
          <span className="achievement-card-icon" aria-hidden="true"><Icon size={15} strokeWidth={1.5} /></span>
        </div>
        <div className="achievement-card-copy">
          <div className="achievement-card-topline">
            <span>{achievement.category}</span>
            <time>{achievement.date}</time>
          </div>
          <h3>{achievement.title}</h3>
          <p className="achievement-card-organization">{achievement.organization}</p>
          <p className="achievement-card-description">{achievement.description}</p>
          <p className="achievement-evidence"><i aria-hidden="true" />{achievement.evidence}</p>
          <div className="achievement-card-links" aria-label={`Sources for ${achievement.title}`}>
            {achievement.links.map((link) => <ExternalLink key={link.href} {...link} />)}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function AchievementGallery() {
  const [activeCategory, setActiveCategory] = useState<AchievementCategory>("All");
  const [preview, setPreview] = useState<Achievement | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const filteredAchievements = activeCategory === "All"
    ? achievements
    : achievements.filter((achievement) => achievement.category === activeCategory);
  const featured = activeCategory === "All"
    ? filteredAchievements.find((achievement) => achievement.featured)
    : undefined;
  const cards = featured
    ? filteredAchievements.filter((achievement) => achievement.id !== featured.id)
    : filteredAchievements;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (preview && !dialog.open) dialog.showModal();
    if (!preview && dialog.open) dialog.close();
  }, [preview]);

  return (
    <section className="achievement-section section-shell page-gutter" id="achievements" aria-labelledby="achievements-title">
      <div className="section-inner mx-auto w-full">
        <div className="section-topline"><span>06 — ACHIEVEMENTS &amp; RECOGNITION</span><span>MADE, LEARNED, CONTRIBUTED</span></div>
        <div className="achievement-heading-row">
          <Reveal>
            <p className="section-kicker">A RECORD OF SHOWING UP</p>
            <h2 id="achievements-title">Small steps, <em>real milestones.</em></h2>
          </Reveal>
          <Reveal className="achievement-intro" delay={0.08}>
            <p>Open-source merges, challenge participation, learning, and Hacktoberfest milestones—each tied to a source or clearly marked as participant-reported.</p>
          </Reveal>
        </div>

        <div className="achievement-filters" role="group" aria-label="Filter achievements by category">
          {achievementCategories.map((category) => (
            <button
              key={category}
              className={`achievement-filter${activeCategory === category ? " is-active" : ""}`}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}<span>{category === "All" ? achievements.length : achievements.filter((achievement) => achievement.category === category).length}</span>
            </button>
          ))}
        </div>
        <p className="achievement-results" aria-live="polite">
          Showing {filteredAchievements.length} {filteredAchievements.length === 1 ? "achievement" : "achievements"}
          {activeCategory !== "All" ? ` in ${activeCategory}` : " across all categories"}.
        </p>

        {featured && <FeaturedAchievement achievement={featured} onPreview={setPreview} />}

        <div className="achievement-grid">
          {cards.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} onPreview={setPreview} />
          ))}
        </div>

        <p className="achievement-source-note">
          Participation is labeled as such; no competition placement or prize win is claimed without a source.
        </p>
      </div>

      <dialog
        ref={dialogRef}
        className="achievement-preview-dialog"
        aria-labelledby="achievement-preview-title"
        onClose={() => setPreview(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setPreview(null);
        }}
      >
        {preview && preview.image && (
          <div className="achievement-preview-content">
            <div className="achievement-preview-header">
              <div><span>ORIGINAL ASSET</span><h2 id="achievement-preview-title">{preview.title}</h2></div>
              <button className="achievement-preview-close" type="button" onClick={() => setPreview(null)} aria-label="Close image preview" autoFocus>
                <X aria-hidden="true" size={18} />
              </button>
            </div>
            <Image
              className="achievement-preview-image"
              src={preview.image}
              alt={preview.imageAlt ?? ""}
              width={preview.imageWidth ?? 1200}
              height={preview.imageHeight ?? 900}
              sizes="min(92vw, 1100px)"
              priority
            />
            <div className="achievement-preview-footer">
              <p>{preview.organization} · {preview.date}</p>
              {preview.certificate && <ExternalLink href={preview.certificate} label="Open original PDF" />}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
