import type { Project } from "../en/projects";

export const projects: Project[] = [
  {
    id: "onelink",
    title: "OneLink - Personal Link-sharing Platform",
    description:
      "Полнофункциональное приложение для создания и публикации персональных страниц со ссылками, созданное с использованием React, Tailwind, Express и MongoDB.",
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
      "Веб-приложение-путеводитель по Боливии, созданное с использованием Next.js и NestJS, предоставляющее информацию о туристических достопримечательностях, местах проживания и местной культуре.",
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
      "Веб-приложение для управления баскетбольными командами, включая статистику игроков, расписание матчей и рейтинги команд, созданное с использованием Django и Bootstrap.",
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
      "Веб-сайт, посвященный благополучию пожилых людей, предоставляющий полезные мышечные упражнения и умственные занятия для укрепления разума. Разработано с использованием JavaScript, HTML и CSS.",
    tech: ["JavaScript Vanilla", "HTML", "CSS", "Bootstrap", "Firebase"],
    category: "frontend",
    github: "https://github.com/borisumss/LongOldLivePlus",
    image: "/src/assets/images/projects/longoldlive.webp",
    featured: false,
    date: "2022-01-01",
  },
];
