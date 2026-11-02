"use client";

import { ArrowUpRight, GitBranch } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";

type PublicRepository = {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  updatedAt: string;
};

type Activity = {
  available: boolean;
  profile: { login: string; name: string | null; publicRepos: number; url: string } | null;
  pinnedRepos: PublicRepository[];
  recentRepos: PublicRepository[];
  calendar: { year: number; total: number; days: { date: string; level: number; count: number }[] } | null;
  sourceStatus: { profile: boolean; repositories: boolean; pinned: boolean; calendar: boolean };
};

const weekdayLabels = ["Mon", "Wed", "Fri"];

function formatUpdatedAt(date: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })
    .format(new Date(date));
}

function ContributionCalendar({ calendar }: { calendar: NonNullable<Activity["calendar"]> }) {
  const cells = useMemo(() => {
    const firstDay = new Date(Date.UTC(calendar.year, 0, 1)).getUTCDay();
    const mondayOffset = (firstDay + 6) % 7;
    return [...Array.from({ length: mondayOffset }, () => null), ...calendar.days];
  }, [calendar]);

  return (
    <div className="github-calendar-wrap">
      <div className="github-weekdays" aria-hidden="true">
        {Array.from({ length: 7 }, (_, index) => <span key={index}>{weekdayLabels.includes(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]) ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index] : ""}</span>)}
      </div>
      <div
        className="github-calendar-grid"
        role="img"
        aria-label={`${calendar.total} GitHub contributions in ${calendar.year}. The contribution calendar uses five shades to show daily activity.`}
      >
        {cells.map((day, index) => day ? (
          <span
            className="github-calendar-day"
            data-level={day.level}
            key={day.date}
            title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
            aria-hidden="true"
          />
        ) : <span className="github-calendar-day github-calendar-day--empty" key={`empty-${index}`} aria-hidden="true" />)}
      </div>
      <div className="github-calendar-legend" aria-hidden="true">
        <span>Less</span>{[0, 1, 2, 3, 4].map((level) => <i data-level={level} key={level} />)}<span>More</span>
      </div>
    </div>
  );
}

function RepositoryList({ title, repositories, available }: { title: string; repositories: PublicRepository[]; available: boolean }) {
  if (!available) return null;

  return (
    <div className="github-repository-group">
      <div className="github-subheading"><h3>{title}</h3><span>{String(repositories.length).padStart(2, "0")}</span></div>
      {repositories.length > 0 ? (
        <ul>
          {repositories.map((repository) => (
            <li key={repository.url}>
              <a href={repository.url} target="_blank" rel="noreferrer">
                <span className="github-repository-copy">
                  <strong>{repository.name}</strong>
                  <small>{repository.description || (repository.language ? `${repository.language} repository` : "Public GitHub repository")}</small>
                </span>
                <span className="github-repository-meta">
                  {repository.language && <span>{repository.language}</span>}
                  <ArrowUpRight size={14} />
                </span>
              </a>
              {title === "Recently updated" && <time dateTime={repository.updatedAt}>Updated {formatUpdatedAt(repository.updatedAt)}</time>}
            </li>
          ))}
        </ul>
      ) : (
        <p className="github-list-empty">{title === "Pinned projects" ? "No repositories are pinned on the profile right now." : "No public repositories to show right now."}</p>
      )}
    </div>
  );
}

export function GithubActivity() {
  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);
  const [requestAttempt, setRequestAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/github-activity", { signal: controller.signal, cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub activity request failed");
        return response.json() as Promise<Activity>;
      })
      .then(setActivity)
      .catch(() => {
        if (!controller.signal.aborted) setActivity(null);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [requestAttempt]);

  function retry() {
    setLoading(true);
    setRequestAttempt((attempt) => attempt + 1);
  }

  const hasContent = activity?.available && Boolean(
    activity.profile || activity.pinnedRepos.length || activity.recentRepos.length || activity.calendar,
  );

  return (
    <section className="github-section section-shell page-gutter" id="github-activity" aria-labelledby="github-title">
      <div className="section-inner mx-auto w-full">
        <div className="section-topline"><span>03 — IN THE OPEN</span><span>PUBLIC GITHUB ACTIVITY</span></div>
        <div className="github-heading-row">
          <Reveal>
            <p className="section-kicker">A WORK IN PROGRESS, IN PUBLIC</p>
            <h2 id="github-title">Notes from the <em>commit log.</em></h2>
          </Reveal>
          <Reveal className="github-heading-note" delay={0.08}>
            <p>Public repositories, profile pins, and contribution activity, fetched from GitHub and refreshed periodically.</p>
            <a href="https://github.com/azmolwasimhussain-ops" target="_blank" rel="noreferrer">Open GitHub profile <ArrowUpRight size={14} /></a>
          </Reveal>
        </div>

        {loading ? (
          <div className="github-loading" aria-busy="true" aria-label="Loading public GitHub activity" role="status">
            <span /><span /><span />
          </div>
        ) : hasContent && activity ? (
          <div className="github-activity-layout">
            <div className="github-activity-main">
              <div className="github-stats-row">
                <div><strong>{activity.profile?.publicRepos ?? "—"}</strong><span>public repositories</span></div>
                <div><strong>{activity.calendar?.total ?? "—"}</strong><span>{activity.calendar ? `${activity.calendar.year} contributions` : "contribution calendar unavailable"}</span></div>
                <a className="github-profile-link" href={activity.profile?.url ?? "https://github.com/azmolwasimhussain-ops"} target="_blank" rel="noreferrer"><GitBranch size={16} /> Visit profile <ArrowUpRight size={14} /></a>
              </div>
              {activity.calendar ? <ContributionCalendar calendar={activity.calendar} /> : <p className="github-partial-note">The contribution calendar could not be loaded right now.</p>}
              {Object.values(activity.sourceStatus).some((sourceAvailable) => !sourceAvailable) && (
                <p aria-live="polite" className="github-partial-note">Some GitHub data is missing from this refresh. <button className="github-retry" onClick={retry} type="button">Try again</button></p>
              )}
              <p className="github-live-note">Fetched from public GitHub endpoints. This view may be temporarily incomplete if GitHub is unavailable.</p>
            </div>
            <aside className="github-repositories" aria-label="Public repositories">
              <RepositoryList title="Pinned projects" repositories={activity.pinnedRepos} available={activity.sourceStatus.pinned} />
              <RepositoryList title="Recently updated" repositories={activity.recentRepos} available={activity.sourceStatus.repositories} />
              {(!activity.sourceStatus.pinned || !activity.sourceStatus.repositories) && (
                <div className="github-repository-fallback">
                  <p>Some repository details could not be refreshed. Browse the public profile for the latest list.</p>
                  <a href="https://github.com/azmolwasimhussain-ops?tab=repositories" target="_blank" rel="noreferrer">Browse repositories <ArrowUpRight size={14} /></a>
                </div>
              )}
            </aside>
          </div>
        ) : (
          <div aria-live="polite" className="github-fallback" role="status">
            <span><GitBranch size={20} /> PUBLIC ACTIVITY TEMPORARILY UNAVAILABLE</span>
            <p>GitHub did not return activity data just now. The profile and project links are still available directly.</p>
            <button className="github-retry" onClick={retry} type="button">Try again</button>
            <a href="https://github.com/azmolwasimhussain-ops" target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={14} /></a>
          </div>
        )}
      </div>
    </section>
  );
}
