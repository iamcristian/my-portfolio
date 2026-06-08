// ── Blog utility functions ──

/**
 * Estimates reading time in minutes from post body text.
 * Assumes ~200 words per minute average reading speed.
 */
export function getReadTime(body: string | undefined): number {
  if (!body) return 1;
  return Math.ceil(body.split(/\s+/).length / 200) || 1;
}
