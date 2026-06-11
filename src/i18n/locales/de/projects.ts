import type { Project } from "../en/projects";

export const projects: Project[] = [
  {
    id: "onelink",
    title: "OneLink - Personal Link-sharing Platform",
    description:
      "Eine Fullstack-Anwendung zum Erstellen und Teilen persönlicher Link-Seiten, entwickelt mit React, Tailwind, Express und MongoDB.",
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
      "Eine Reiseführer-Webanwendung für Bolivien, entwickelt mit Next.js und NestJS, die Informationen über Touristenattraktionen, Unterkünfte und die lokale Kultur bietet.",
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
      "Eine Webanwendung zur Verwaltung von Basketballteams, einschließlich Spielerstatistiken, Spielplänen und Team-Rankings, entwickelt mit Django und Bootstrap.",
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
      "Eine Website, die dem Wohlbefinden älterer Erwachsener gewidmet ist und nützliche Muskelübungen sowie mentale Aktivitäten zur Stärkung des Geistes bietet. Entwickelt mit JavaScript, HTML und CSS.",
    tech: ["JavaScript Vanilla", "HTML", "CSS", "Bootstrap", "Firebase"],
    category: "frontend",
    github: "https://github.com/borisumss/LongOldLivePlus",
    image: "/src/assets/images/projects/longoldlive.webp",
    featured: false,
    date: "2022-01-01",
  },
];
