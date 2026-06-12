/**
 * Sorts an array of items putting featured items first,
 * and then sorting by date descending.
 */
export function sortFeaturedFirst<T>(
  items: T[],
  getFeatured: (item: T) => boolean | undefined,
  getDate: (item: T) => Date | string,
): T[] {
  return [...items].sort((a, b) => {
    const featA = getFeatured(a) ? 1 : 0;
    const featB = getFeatured(b) ? 1 : 0;
    if (featA !== featB) return featB - featA;
    const dateA = new Date(getDate(a)).getTime();
    const dateB = new Date(getDate(b)).getTime();
    return dateB - dateA;
  });
}
