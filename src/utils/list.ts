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
