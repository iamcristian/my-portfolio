export const readingPaths = [
  {
    id: "building-web-systems",
    title: "Building thoughtful web systems",
    description:
      "Start with the motivation, compare architectural tools, then consider the security of a real system.",
    prerequisites:
      "Basic familiarity with websites and HTTP. No specific framework is required.",
    slugs: ["hello-world", "astro-vs-nextjs", "my-final-project"],
  },
  {
    id: "reading-and-reflection",
    title: "Reading and reflection",
    description:
      "Explore the library, then follow the curated priorities for a deeper reading journey.",
    prerequisites: "Curiosity and a place to keep your own reading notes.",
    slugs: ["my-bookshelf", "my-most-notable-reads"],
  },
] as const;
