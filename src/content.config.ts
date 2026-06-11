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
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Cristian Arando"),
    tags: z.array(z.string()).default([]),
    image: image(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    lang: z.string(),
    slug: z.string(),
  }),
});

export const collections = { blog };
