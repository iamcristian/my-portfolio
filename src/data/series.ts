export const readingPaths = [
  {
    id: "building-web-systems",
    title: "Building thoughtful web systems",
    description:
      "Start with foundational motivation, adopt strategic pessimism in architecture, and examine real-world security boundaries.",
    prerequisites:
      "Basic familiarity with systems thinking and HTTP. No specific framework is required.",
    slugs: ["hello-world", "strategic-pessimism", "my-final-project"],
  },
  {
    id: "reading-and-reflection",
    title: "Reading and reflection",
    description:
      "Explore the personal bookshelf, trace literature tier lists, and confront the existential weight of hyper-consciousness.",
    prerequisites: "Curiosity and a place to keep your own reading notes.",
    slugs: ["my-bookshelf", "my-most-notable-reads", "notes-from-underground"],
  },
  {
    id: "cognitive-architecture",
    title: "Cognitive Architecture & Mental Models",
    description:
      "From dissecting formal fallacies and climbing levels of logical abstraction to engineering resilience against catastrophic failure.",
    prerequisites:
      "An analytical mindset and an interest in epistemological rigor.",
    slugs: [
      "logical-fallacies",
      "seven-levels-of-logical-thinking",
      "strategic-pessimism",
    ],
  },
] as const;
