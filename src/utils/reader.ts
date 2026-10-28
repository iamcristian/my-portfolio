export interface Preferences {
  size: number;
  spacing: string;
  width: string;
  font: string;
}
export const defaults: Preferences = {
  size: 14,
  spacing: "standard",
  width: "wide",
  font: "sans",
};
export function preferences(value: unknown): Preferences {
  const p = (
    value && typeof value === "object" ? value : {}
  ) as Partial<Preferences>;
  return {
    size:
      typeof p.size === "number" && Number.isFinite(p.size)
        ? Math.max(14, Math.min(28, p.size))
        : defaults.size,
    spacing: p.spacing === "relaxed" ? "relaxed" : "standard",
    width: ["narrow", "standard", "wide"].includes(p.width || "")
      ? p.width!
      : defaults.width,
    font: p.font === "serif" ? "serif" : "sans",
  };
}
export interface ReadingEntry {
  url: string;
  title: string;
  lang: string;
  saved: boolean;
  completed?: boolean;
  heading: string;
  offset: number;
  progress: number;
  updated: number;
}
export function readLocal<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}
export function writeLocal(key: string, value: unknown): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}
export function readingEntries(): ReadingEntry[] {
  const data = readLocal<unknown>("portfolio-reading-v1", []);
  if (!Array.isArray(data)) return [];
  return data
    .filter(
      (v): v is ReadingEntry =>
        v &&
        typeof v.url === "string" &&
        /^\/(en|es|de|ru|ja)\/blog\/[a-z0-9-]+\/?$/.test(v.url) &&
        typeof v.title === "string" &&
        typeof v.lang === "string" &&
        typeof v.saved === "boolean" &&
        typeof v.heading === "string" &&
        Number.isFinite(v.offset) &&
        Number.isFinite(v.progress) &&
        Number.isFinite(v.updated),
    )
    .slice(0, 200);
}
export function updateEntry(entry: ReadingEntry) {
  return writeLocal(
    "portfolio-reading-v1",
    [entry, ...readingEntries().filter((v) => v.url !== entry.url)].slice(
      0,
      200,
    ),
  );
}
