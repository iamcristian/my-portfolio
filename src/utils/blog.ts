/** Approximate prose word count using locale-aware segmentation (including Japanese). */
export function getWordCount(body: string | undefined, lang = "en"): number {
  const prose = (body || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^\s*(import|export) .*$/gm, " ");
  return Array.from(
    new Intl.Segmenter(lang, { granularity: "word" }).segment(prose),
  ).filter((segment) => segment.isWordLike).length;
}

export function getReadTime(body: string | undefined, lang = "en"): number {
  return Math.max(1, Math.ceil(getWordCount(body, lang) / 200));
}

export function isPublished(
  data: { draft: boolean; date: Date },
  now = new Date(),
): boolean {
  if (data.draft) return false;
  // In development, allow previewing non-draft articles even if dated ahead
  if (import.meta.env?.DEV) return true;
  // In production, allow articles up to the end of the current calendar day to avoid timezone cutoff issues
  const endOfToday = new Date(now);
  endOfToday.setHours(23, 59, 59, 999);
  return data.date <= endOfToday;
}
