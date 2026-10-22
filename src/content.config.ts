import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { SITE } from "./config/site";

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
  schema: ({ image }) =>
    z
      .object({
        title: z.string().trim().min(1),
        description: z.string().trim().min(1),
        date: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        author: z.string().default(SITE.name),
        tags: z.array(z.string()).default([]),
        image: image(),
        imageAlt: z.string().optional(),
        draft: z.boolean().default(false),
        featured: z.boolean().default(false),
        faq: z
          .array(
            z.object({
              question: z.string(),
              answer: z.string(),
            }),
          )
          .optional(),
        lang: z.enum(["en", "es", "de", "ja", "ru"]),
        slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      })
      .refine((data) => !data.updatedDate || data.updatedDate >= data.date, {
        message: "updatedDate must not precede date",
        path: ["updatedDate"],
      }),
});

export const collections = { blog };
