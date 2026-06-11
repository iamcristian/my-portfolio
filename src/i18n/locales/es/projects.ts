import type { Project } from "../en/projects";

export const projects: Project[] = [
  {
    id: "onelink",
    title: "OneLink - Personal Link-sharing Platform",
    description:
      "Una aplicación fullstack para crear y compartir páginas de enlaces personales, construida con React, Tailwind, Express y MongoDB.",
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
      "Una aplicación web de guía de viajes para Bolivia, construida con Next.js y NestJS, que proporciona información sobre atracciones turísticas, alojamientos y cultura local.",
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
      "Una aplicación web para la gestión de equipos de baloncesto, que incluye estadísticas de jugadores, calendarios de partidos y clasificaciones de equipos, construida con Django y Bootstrap.",
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
      "Un sitio web dedicado al bienestar de los adultos mayores, que proporciona ejercicios musculares útiles y actividades mentales para fortalecer la mente. Desarrollado con JavaScript, HTML y CSS.",
    tech: ["JavaScript Vanilla", "HTML", "CSS", "Bootstrap", "Firebase"],
    category: "frontend",
    github: "https://github.com/borisumss/LongOldLivePlus",
    image: "/src/assets/images/projects/longoldlive.webp",
    featured: false,
    date: "2022-01-01",
  },
];
