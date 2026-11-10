/** Tags are serialized as JSON so labels containing spaces remain intact. */
export function parseFilterValues(value: string): string[] {
  try {
    const parsed: unknown = JSON.parse(value);
    if (Array.isArray(parsed))
      return parsed
        .filter((v): v is string => typeof v === "string")
        .map((v) => v.toLowerCase());
  } catch {
    /* Project categories are a single string. */
  }
  return [value.toLowerCase()];
}

/** Strips diacritical marks and normalizes text for case/accent-insensitive search. */
export function normalizeText(value: string): string {
  return (value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function tokenizeQuery(query: string): string[] {
  const normalized = normalizeText(query);
  return normalized ? normalized.split(/\s+/).filter(Boolean) : [];
}

export interface SearchableItem {
  name?: string;
  description?: string;
  tech?: string;
  tags?: string;
  featured?: boolean;
}

/**
 * Computes a relevance score for a card/item against a search query.
 * Returns 0 if the item does not match all query tokens.
 */
export function scoreItem(item: SearchableItem, query: string): number {
  const normalizedQuery = normalizeText(query);
  const tokens = tokenizeQuery(query);
  if (tokens.length === 0) {
    return item.featured ? 10 : 1;
  }

  const name = normalizeText(item.name || "");
  const description = normalizeText(item.description || "");
  const tech = normalizeText(item.tech || "");
  const tags = normalizeText(item.tags || "");
  const combined = `${name} ${tags} ${tech} ${description}`;

  for (const token of tokens) {
    if (!combined.includes(token)) return 0;
  }

  let score = 0;
  if (name === normalizedQuery) score += 100;
  else if (name.startsWith(normalizedQuery)) score += 60;
  else if (name.includes(normalizedQuery)) score += 40;

  for (const token of tokens) {
    if (name.includes(token)) score += 20;
    if (tags.includes(token) || tech.includes(token)) score += 12;
    if (description.includes(token)) score += 5;
  }

  if (item.featured) score += 2;
  return score;
}

export interface ListItemRecord<T> {
  item: T;
  name: string;
  description: string;
  tech: string;
  tags: string;
  filterValues: string[];
  featured: boolean;
  date: string;
}

export interface ListFilterOptions {
  query: string;
  filter: string;
  dateRange: string;
  startDate: string;
  endDate: string;
  hasFeatured?: boolean;
  now?: Date;
}

/** Returns true when a custom date range has both endpoints and start > end. */
export function isInvertedDateRange(
  range: string,
  start: string,
  end: string,
): boolean {
  if (range !== "custom" || !start || !end) return false;
  const from = Date.parse(`${start}T00:00:00Z`);
  const to = Date.parse(`${end}T00:00:00Z`);
  return Number.isFinite(from) && Number.isFinite(to) && from > to;
}

export function filterItems<T>(
  records: ListItemRecord<T>[],
  options: ListFilterOptions,
): Array<ListItemRecord<T> & { score: number }> {
  const {
    query,
    filter,
    dateRange,
    startDate,
    endDate,
    hasFeatured = false,
    now,
  } = options;
  const targetFilter = filter.toLowerCase();
  const hasQuery = Boolean(normalizeText(query));
  const results: Array<ListItemRecord<T> & { score: number }> = [];

  for (const record of records) {
    const filterMatch =
      targetFilter === "all" || record.filterValues.includes(targetFilter);
    if (!filterMatch) continue;

    const score = scoreItem(
      {
        name: record.name,
        description: record.description,
        tech: record.tech,
        tags: record.tags,
        featured: hasFeatured && record.featured,
      },
      query,
    );
    if (hasQuery && score <= 0) continue;

    if (!matchesDateRange(record.date, dateRange, startDate, endDate, now)) {
      continue;
    }
    results.push({ ...record, score });
  }
  return results;
}

export function sortItems<T>(
  records: Array<ListItemRecord<T> & { score: number }>,
  sort: string,
  hasFeatured: boolean,
  locale = "en",
): Array<ListItemRecord<T> & { score: number }> {
  return [...records].sort((a, b) => {
    if (sort === "relevance") {
      const scoreDiff = b.score - a.score;
      if (scoreDiff !== 0) return scoreDiff;
      if (hasFeatured) {
        const featured = Number(b.featured) - Number(a.featured);
        if (featured) return featured;
      }
    }
    if (sort.startsWith("name")) {
      const order = a.name.localeCompare(b.name, locale);
      return sort === "name-asc" ? order : -order;
    }
    const order = (Date.parse(a.date) || 0) - (Date.parse(b.date) || 0);
    return sort === "date-asc" ? order : -order;
  });
}

export function paginateItems<T>(
  items: T[],
  page: number,
  itemsPerPage: number,
): { pageItems: T[]; currentPage: number; totalPages: number } {
  const safePerPage = Math.max(1, itemsPerPage);
  const totalPages = Math.ceil(items.length / safePerPage);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const start = (currentPage - 1) * safePerPage;
  return {
    pageItems: items.slice(start, start + safePerPage),
    currentPage,
    totalPages,
  };
}

/** Shared CSS class sets for BlogManager and ProjectsManager grid/list views. */
export function getListViewClasses(prefix: "blog" | "project") {
  const isProject = prefix === "project";
  return {
    gridContainerClass:
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-75",
    listContainerClass: "flex flex-col gap-3",
    gridCardClass: isProject
      ? "project-card card card-compact bg-base-200 border border-base-300 overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full"
      : "blog-card card card-compact bg-base-200 border border-base-300 hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full",
    listCardClass: `${prefix}-card card bg-base-200 border border-base-300 p-4 hover:border-primary/55 transition-all flex flex-col md:flex-row items-center justify-between gap-4 w-full`,
    gridFigureClass: isProject
      ? `${prefix}-figure relative h-48 bg-base-300 shrink-0 transition-all`
      : `${prefix}-figure relative h-44 bg-base-300 shrink-0 transition-all`,
    listFigureClass: `${prefix}-figure hidden`,
    gridBodyClass: `${prefix}-body card-body flex-1 flex flex-col justify-between p-5 transition-all`,
    listBodyClass: `${prefix}-body card-body flex-1 min-w-0 p-0 flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full`,
    gridFooterClass: isProject
      ? `${prefix}-footer card-actions justify-start gap-2 pt-4 mt-auto border-t border-base-300`
      : `${prefix}-footer pt-4 border-t border-base-300 mt-4 transition-all`,
    listFooterClass: `${prefix}-footer flex gap-2 flex-shrink-0 border-t-0 pt-0 mt-0`,
  };
}

/**
 * Toggles between two sets of space-separated CSS classes without wiping out
 * unrelated custom classes present on the element.
 */
export function swapViewClasses(
  element: Element | null,
  activeClasses: string,
  inactiveClasses: string,
): void {
  if (!element) return;
  const activeSet = new Set(activeClasses.split(/\s+/).filter(Boolean));
  const inactiveTokens = inactiveClasses.split(/\s+/).filter(Boolean);
  for (const token of inactiveTokens) {
    if (!activeSet.has(token)) {
      element.classList.remove(token);
    }
  }
  for (const token of activeSet) {
    element.classList.add(token);
  }
}

export interface ValidatedSearchEntry {
  title: string;
  text: string;
  url: string;
  lang: string;
  kind: string;
}

/** Validates runtime search-index JSON payload shape and same-origin relative URLs. */
export function validateSearchEntries(data: unknown): ValidatedSearchEntry[] {
  if (!Array.isArray(data)) {
    throw new Error("Invalid search index payload: expected an array");
  }
  return data.filter((item): item is ValidatedSearchEntry => {
    if (!item || typeof item !== "object") return false;
    const candidate = item as Record<string, unknown>;
    return (
      typeof candidate.title === "string" &&
      typeof candidate.text === "string" &&
      typeof candidate.url === "string" &&
      candidate.url.startsWith("/") &&
      !candidate.url.startsWith("//") &&
      typeof candidate.lang === "string" &&
      typeof candidate.kind === "string"
    );
  });
}

/** Publication dates are calendar dates, consistently interpreted in UTC. */
export function matchesDateRange(
  value: string,
  range: string,
  start = "",
  end = "",
  now = new Date(),
): boolean {
  if (range === "all") return true;
  const time = Date.parse(value);
  if (!Number.isFinite(time)) return false;
  const today = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
  );
  const day = 86_400_000;
  if (range === "custom") {
    const from = start ? Date.parse(`${start}T00:00:00Z`) : -Infinity;
    const to = end ? Date.parse(`${end}T00:00:00Z`) + day : Infinity;
    return time >= from && time < to;
  }
  if (range === "yesterday") return time >= today - day && time < today;
  const days = { week: 7, month: 30, year: 365 }[range];
  return (
    days !== undefined && time >= today - (days - 1) * day && time < today + day
  );
}
