type GithubRepo = {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

type GithubProfile = {
  login: string;
  name: string | null;
  public_repos: number;
  html_url: string;
};

export const revalidate = 21600;

const username = "azmolwasimhussain-ops";
const headers = { "User-Agent": "azmol-portfolio-public-activity", Accept: "application/vnd.github+json" };

async function fetchGithubJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { headers, next: { revalidate } });
  if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
  return response.json() as Promise<T>;
}

async function fetchContributionCalendar(year: number) {
  const url = `https://github.com/users/${username}/contributions?from=${year}-01-01&to=${year}-12-31`;
  const response = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; AzmolPortfolio/1.0)" },
    next: { revalidate },
  });
  if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
  const html = await response.text();
  const text = html.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ");
  const totalMatch = text.match(/([\d,]+)\s+contributions?\s+in\s+(\d{4})/i);
  const days = [...html.matchAll(/<td\b[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="([0-4])"[^>]*><\/td>\s*<tool-tip[^>]*>([^<]*)<\/tool-tip>/g)]
    .map((match) => {
      const contributionMatch = match[3].match(/([\d,]+)\s+contributions?/i);
      return {
        date: match[1],
        level: Number(match[2]),
        count: contributionMatch ? Number(contributionMatch[1].replace(/,/g, "")) : 0,
      };
    });

  if (!totalMatch || days.length < 350) throw new Error("GitHub contribution calendar could not be read");
  return {
    year: Number(totalMatch[2]),
    total: Number(totalMatch[1].replace(/,/g, "")),
    days,
  };
}

async function fetchPinnedNames() {
  const response = await fetch(`https://github.com/${username}`, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; AzmolPortfolio/1.0)" },
    next: { revalidate },
  });
  if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
  const html = await response.text();
  const starts = [...html.matchAll(/<div class="pinned-item-list-item[^>]*>/g)].map((match) => match.index ?? -1);

  return starts.slice(0, 6).flatMap((start, index) => {
    const end = starts[index + 1] ?? html.length;
    const block = html.slice(start, end);
    const match = block.match(/href="\/([^/"?#]+)\/([^/"?#]+)"/);
    if (!match || match[1].toLowerCase() !== username) return [];
    return [`${match[1]}/${match[2]}`];
  });
}

export async function GET() {
  const year = new Date().getUTCFullYear();
  const [profileResult, repositoriesResult, pinnedResult, calendarResult] = await Promise.allSettled([
    fetchGithubJson<GithubProfile>(`https://api.github.com/users/${username}`),
    fetchGithubJson<GithubRepo[]>(`https://api.github.com/users/${username}/repos?type=owner&sort=updated&per_page=100`),
    fetchPinnedNames(),
    fetchContributionCalendar(year),
  ]);

  const profile = profileResult.status === "fulfilled" ? profileResult.value : null;
  const repositories = repositoriesResult.status === "fulfilled" ? repositoriesResult.value : [];
  const pinnedNames = pinnedResult.status === "fulfilled" ? pinnedResult.value : [];
  const repositoriesByName = new Map(repositories.map((repo) => [repo.full_name.toLowerCase(), repo]));
  const toPublicRepo = (repo: GithubRepo) => ({
    name: repo.name,
    url: repo.html_url,
    description: repo.description,
    language: repo.language,
    updatedAt: repo.updated_at,
  });

  const hasAnySource = Boolean(profile || repositoriesResult.status === "fulfilled" ||
    pinnedResult.status === "fulfilled" || calendarResult.status === "fulfilled");

  return Response.json({
    available: hasAnySource,
    profile: profile ? {
      login: profile.login,
      name: profile.name,
      publicRepos: profile.public_repos,
      url: profile.html_url,
    } : null,
    pinnedRepos: pinnedNames.flatMap((fullName) => {
      const repo = repositoriesByName.get(fullName.toLowerCase());
      return repo ? [toPublicRepo(repo)] : [];
    }),
    recentRepos: repositories
      .filter((repo) => !repo.fork && !repo.archived)
      .slice(0, 5)
      .map(toPublicRepo),
    calendar: calendarResult.status === "fulfilled" ? calendarResult.value : null,
    sourceStatus: {
      profile: profileResult.status === "fulfilled",
      repositories: repositoriesResult.status === "fulfilled",
      pinned: pinnedResult.status === "fulfilled",
      calendar: calendarResult.status === "fulfilled",
    },
    fetchedAt: new Date().toISOString(),
  });
}
