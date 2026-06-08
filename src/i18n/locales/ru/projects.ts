import type { Project } from "../en/projects";

export const projects: Project[] = [
  {
    id: "nestjs-microservices-store",
    title: "Магазин микросервисов NestJS",
    description:
      "Готовая к развертыванию платформа электронной коммерции на базе микросервисной архитектуры NestJS. Включает API Gateway, брокер сообщений NATS, Docker и PostgreSQL.",
    tech: ["NestJS", "TypeScript", "NATS", "Docker", "PostgreSQL", "Stripe"],
    category: "backend",
    github: "https://github.com/iamcristian/nestjs-microservices-store",
    image: "/src/assets/images/projects/project-1.webp",
    featured: true,
    date: "2024-11-15",
  },
  {
    id: "portfolio-v2",
    title: "Портфолио v2",
    description:
      "Высокопроизводительный сайт-портфолио премиум-класса, созданный на базе Astro и React islands. Оптимизирован для Core Web Vitals с удобным переключением тем и адаптивным дизайном.",
    tech: ["Astro", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    category: "frontend",
    github: "https://github.com/iamcristian/portfolio-v2",
    live: "https://iamcristian.dev",
    image: "/src/assets/images/projects/project-2.webp",
    featured: true,
    date: "2024-09-01",
  },
  {
    id: "inventory-management",
    title: "Система управления запасами",
    description:
      "Полнофункциональная система управления запасами для отслеживания продуктов, уровня запасов, поставщиков и транзакций. Включает интерактивные графики, разграничение ролей и базу данных PostgreSQL.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "TypeScript",
      "Chart.js",
    ],
    category: "fullstack",
    github: "https://github.com/iamcristian/inventory-management",
    image: "/src/assets/images/projects/project-3.webp",
    featured: true,
    date: "2024-05-10",
  },
];
