import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/blog",
    generateId: ({ entry }) => {
      // entry is the relative path, e.g. "es/post.mdx"
      // Return relative path without extension to make IDs unique per locale
      return entry.replace(/\.[^/.]+$/, "");
    },
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    lang: z.string(),
    slug: z.string(),
  }),
});

export const collections = { blog };
