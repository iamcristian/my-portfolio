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
