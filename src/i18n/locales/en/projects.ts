import type { Project } from "../../../types";
export type { Project };

export const projects: Project[] = [
  {
    id: "onelink",
    title: "OneLink - Personal Link-sharing Platform",
    description:
      "A fullstack application for creating and sharing personal link pages, built with React, Tailwind, Express, and MongoDB.",
    tech: [
      "TypeScript",
      "React",
      "Shadcn",
      "React Query",
      "Express",
      "MongoDB",
      "JWT",
    ],
    category: "fullstack",
    github: "https://github.com/iamcristian/onelink-frontend",
    image: "/src/assets/images/projects/onelink.webp",
    featured: true,
    date: "2025-01-01",
  },
  {
    id: "explora-bolivia",
    title: "Explora Bolivia - Travel Guide App",
    description:
      "A travel guide web application for Bolivia, built with Nextjs and Nestjs, providing information on tourist attractions, accommodations, and local culture.",
    tech: [
      "Next.js",
      "Shadcn",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Docker",
      "Gitlab",
    ],
    category: "fullstack",
    github: "https://gitlab.com/iamcristian/explora-bolivia-frontend",
    image: "/src/assets/images/projects/explorabolivia.webp",
    featured: true,
    date: "2025-01-01",
  },
  {
    id: "maxi-basquet",
    title: "Maxi Basquet - Basketball Team Management",
    description:
      "A web application for managing basketball teams, including player statistics, match schedules, and team rankings, built with Django and Bootstrap.",
    tech: ["Django", "Python", "PostgreSQL", "Bootstrap"],
    category: "fullstack",
    github: "https://github.com/iamcristian/Torneo-Internacional-Maxi-Basquet",
    image: "/src/assets/images/projects/maxibasquet.webp",
    featured: false,
    date: "2023-01-01",
  },
  {
    id: "long-old-live",
    title: "Long Old Live+",
    description:
      "A website dedicated to the well-being of older adults, providing useful muscle exercises and mental activities to strengthen the mind. Developed with JavaScript, HTML, and CSS.",
    tech: ["JavaScript Vanilla", "HTML", "CSS", "Bootstrap", "Firebase"],
    category: "frontend",
    github: "https://github.com/borisumss/LongOldLivePlus",
    image: "/src/assets/images/projects/longoldlive.webp",
    featured: false,
    date: "2022-01-01",
  },
];
