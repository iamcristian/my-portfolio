import type { Project } from "../en/projects";

export const projects: Project[] = [
  {
    id: "nestjs-microservices-store",
    title: "NestJS Microservices Store",
    description:
      "Eine produktionsbereite E-Commerce-Plattform, die mit der NestJS-Mikroservice-Architektur erstellt wurde. Bietet ein API-Gateway, den NATS-Message-Broker, Docker und PostgreSQL.",
    tech: ["NestJS", "TypeScript", "NATS", "Docker", "PostgreSQL", "Stripe"],
    category: "backend",
    github: "https://github.com/iamcristian/nestjs-microservices-store",
    image: "/images/projects/project-1.webp",
    featured: true,
    date: "2024-11-15",
  },
  {
    id: "portfolio-v2",
    title: "Portfolio v2",
    description:
      "Eine erstklassige, leistungsstarke Portfolio-Website, die mit Astro und React-Islands erstellt wurde. Optimiert für Core Web Vitals mit sauberen Theme-Steuerelementen und responsiven Layouts.",
    tech: ["Astro", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    category: "frontend",
    github: "https://github.com/iamcristian/portfolio-v2",
    live: "https://iamcristian.dev",
    image: "/images/projects/project-2.webp",
    featured: true,
    date: "2024-09-01",
  },
  {
    id: "inventory-management",
    title: "Inventarverwaltungssystem",
    description:
      "Ein Full-Stack-Inventarsystem zur Verfolgung von Produkten, Lagerbeständen, Lieferanten und Transaktionen. Bietet interaktive Diagramme, rollenbasierte Steuerungen und eine PostgreSQL-Datenbank.",
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
    image: "/images/projects/project-3.webp",
    featured: true,
    date: "2024-05-10",
  },
];
