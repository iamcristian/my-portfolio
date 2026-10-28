export interface Book {
  title: string;
  status: "read" | "planned";
  theme: string;
  author: string;
  note?: string;
}
const clean = (value: string) => value.replace(/[_*]/g, "").trim();
const key = (value: string) =>
  clean(value).normalize("NFKC").toLocaleLowerCase().replace(/[’‘]/g, "'");
/** Preserve the author's existing reading statuses and notes; never infer completion from a tier. */
export function parseBooks(shelf: string, notable = ""): Book[] {
  const notes = new Map<string, string>();
  let noteTitle = "";
  for (const line of notable.split("\n")) {
    const title = line.match(/^- \*\*(.+?)\*\*/);
    if (title) noteTitle = key(title[1]);
    else if (/^\s*>\s*/.test(line) && noteTitle)
      notes.set(noteTitle, clean(line.replace(/^\s*>\s*/, "")));
    else if (line.trim()) noteTitle = "";
  }
  let theme = "",
    author = "";
  return shelf.split("\n").flatMap((line) => {
    if (line.startsWith("## ")) {
      theme = clean(line.slice(3));
      author = "";
    }
    if (/^\*\*[^*]+\*\*\s*$/.test(line)) author = clean(line);
    const match = line.match(/^- \[([ x])\] (.+)$/i);
    if (!match) return [];
    const [title, inlineAuthor] = clean(match[2]).split(/\s+[—–]\s+/);
    return [
      {
        title,
        status:
          match[1].toLowerCase() === "x"
            ? ("read" as const)
            : ("planned" as const),
        theme,
        author: inlineAuthor || author,
        note: notes.get(key(title)),
      },
    ];
  });
}
