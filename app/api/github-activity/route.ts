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

type GithubProfilePage = {
  publicRepos: number | null;
  pinnedNames: string[];
};

export const revalidate = 21600;

const username = "azmolwasimhussain-ops";
const apiHeaders = { "User-Agent": "azmol-portfolio-public-activity", Accept: "application/vnd.github+json" };
const pageHeaders = { "User-Agent": "Mozilla/5.0 (compatible; AzmolPortfolio/1.0)" };

async function fetchGithubJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { headers: apiHeaders, next: { revalidate } });
  if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
  return response.json() as Promise<T>;
}

async function fetchGithubPage(url: string) {
  const response = await fetch(url, { headers: pageHeaders, next: { revalidate } });
  if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
  return response.text();
}

function decodeHtml(value: string) {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/gi, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseProfilePage(html: string): GithubProfilePage {
  const countMatch = html.match(/data-tab-item="repositories"[\s\S]{0,1200}?<span title="(\d+)"[^>]*class="Counter"/);
  const pinnedItems = [...html.matchAll(/<li\b[^>]*class="[^"]*\bpinned-item-list-item\b[^"]*"[^>]*>([\s\S]*?)<\/li>/g)];

  if (!html.includes("pinned-items-reorder-list")) {
    throw new Error("GitHub profile repository section could not be read");
  }

  const pinnedNames = pinnedItems.flatMap(([, block]) => {
    const match = block.match(new RegExp(`href="/${username}/([^/"?#]+)"`));
    return match ? [decodeURIComponent(match[1])] : [];
  });

  return {
    publicRepos: countMatch ? Number(countMatch[1]) : null,
    pinnedNames,
  };
}

function parseRepositoryPage(html: string): GithubRepo[] {
  const listIndex = html.indexOf('id="user-repositories-list"');
  if (listIndex < 0) throw new Error("GitHub repository list could not be read");

  const listHtml = html.slice(listIndex);
  const items = [...listHtml.matchAll(/<li\b(?=[^>]*\bitemprop="owns")[^>]*>([\s\S]*?)<\/li>/g)];
  if (items.length === 0) throw new Error("GitHub repository list was empty or changed format");

  return items.flatMap(([, block]) => {
    const nameMatch = block.match(new RegExp(`href="/${username}/([^/"?#]+)"[^>]*itemprop="name codeRepository"`));
    if (!nameMatch) return [];

    const descriptionMatch = block.match(/<p\b[^>]*itemprop="description"[^>]*>([\s\S]*?)<\/p>/);
    const languageMatch = block.match(/itemprop="programmingLanguage">([\s\S]*?)<\/span>/);
    const updatedMatch = block.match(/<relative-time\b[^>]*datetime="([^"]+)"/);
    const itemClass = block.match(/<li\b[^>]*class="([^"]+)"/)?.[1] ?? "";
    const name = decodeURIComponent(nameMatch[1]);

    return [{
      name,
      full_name: `${username}/${name}`,
      html_url: `https://github.com/${username}/${name}`,
      description: descriptionMatch ? decodeHtml(descriptionMatch[1]) || null : null,
      language: languageMatch ? decodeHtml(languageMatch[1]) || null : null,
      updated_at: updatedMatch?.[1] ?? "",
      fork: /\bfork\b/i.test(itemClass),
      archived: /\barchived\b/i.test(itemClass),
    }];
  });
}

async function fetchRepositories(): Promise<GithubRepo[]> {
  try {
    return await fetchGithubJson<GithubRepo[]>(`https://api.github.com/users/${username}/repos?type=owner&sort=updated&per_page=100`);
  } catch {
    const html = await fetchGithubPage(`https://github.com/${username}?tab=repositories&sort=updated`);
    return parseRepositoryPage(html);
  }
}

async function fetchContributionCalendar(year: number) {
  const url = `https://github.com/users/${username}/contributions?from=${year}-01-01&to=${year}-12-31`;
  const response = await fetch(url, { headers: pageHeaders, next: { revalidate } });
  if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
  const html = await response.text();
  const text = decodeHtml(html);
  const totalMatch = text.match(/([\d,]+)\s+contributions?\s+in\s+(\d{4})/i);
  const days = [...html.matchAll(/<td\b[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="([0-4])"[^>]*><\/td>\s*<tool-tip[^>]*>([^<]*)<\/tool-tip>/g)]
    .map((match) => {
      const contributionMatch = decodeHtml(match[3]).match(/([\d,]+)\s+contributions?/i);
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

export async function GET() {
  const year = new Date().getUTCFullYear();
  const [profileApiResult, repositoriesResult, profilePageResult, calendarResult] = await Promise.allSettled([
    fetchGithubJson<GithubProfile>(`https://api.github.com/users/${username}`),
    fetchRepositories(),
    fetchGithubPage(`https://github.com/${username}`).then(parseProfilePage),
    fetchContributionCalendar(year),
  ]);

  const profileApi = profileApiResult.status === "fulfilled" ? profileApiResult.value : null;
  const profilePage = profilePageResult.status === "fulfilled" ? profilePageResult.value : null;
  const repositories = repositoriesResult.status === "fulfilled" ? repositoriesResult.value : [];
  const pinnedNames = profilePage?.pinnedNames ?? [];
  const repositoriesByName = new Map(repositories.map((repo) => [repo.full_name.toLowerCase(), repo]));
  const toPublicRepo = (repo: GithubRepo) => ({
    name: repo.name,
    url: repo.html_url,
    description: repo.description,
    language: repo.language,
    updatedAt: repo.updated_at,
  });

  const profile = profileApi || profilePage?.publicRepos !== null && profilePage ? {
    login: profileApi?.login ?? username,
    name: profileApi?.name ?? "Azmol Wasim Hussain",
    publicRepos: profileApi?.public_repos ?? profilePage?.publicRepos ?? 0,
    html_url: profileApi?.html_url ?? `https://github.com/${username}`,
  } : null;
  const hasAnySource = Boolean(profile || repositoriesResult.status === "fulfilled" ||
    profilePageResult.status === "fulfilled" || calendarResult.status === "fulfilled");

  return Response.json({
    available: hasAnySource,
    profile: profile ? {
      login: profile.login,
      name: profile.name,
      publicRepos: profile.publicRepos,
      url: profile.html_url,
    } : null,
    pinnedRepos: pinnedNames.map((fullName: string) => {
      const repo = repositoriesByName.get(`${username}/${fullName}`.toLowerCase());
      return repo ? toPublicRepo(repo) : {
        name: fullName,
        url: `https://github.com/${username}/${encodeURIComponent(fullName)}`,
        description: null,
        language: null,
        updatedAt: "",
      };
    }),
    recentRepos: repositories
      .filter((repo) => !repo.fork && !repo.archived && repo.updated_at)
      .slice(0, 5)
      .map(toPublicRepo),
    calendar: calendarResult.status === "fulfilled" ? calendarResult.value : null,
    sourceStatus: {
      profile: Boolean(profile),
      repositories: repositoriesResult.status === "fulfilled",
      pinned: profilePageResult.status === "fulfilled",
      calendar: calendarResult.status === "fulfilled",
    },
    fetchedAt: new Date().toISOString(),
  });
}
