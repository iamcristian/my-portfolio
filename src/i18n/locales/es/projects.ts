import type { Project } from "../en/projects";

export const projects: Project[] = [
  {
    id: "nestjs-microservices-store",
    title: "Tienda de Microservicios NestJS",
    description:
      "Una plataforma de comercio electrónico lista para producción construida con arquitectura de microservicios NestJS. Incluye API Gateway, broker de mensajes NATS, Docker y PostgreSQL.",
    tech: ["NestJS", "TypeScript", "NATS", "Docker", "PostgreSQL", "Stripe"],
    category: "backend",
    github: "https://github.com/iamcristian/nestjs-microservices-store",
    image: "/images/projects/project-1.webp",
    featured: true,
    date: "2024-11-15",
  },
  {
    id: "portfolio-v2",
    title: "Portafolio v2",
    description:
      "Un sitio web de portafolio moderno y de alto rendimiento construido con arquitectura de islas Astro y React. Optimizado para Core Web Vitals con cambio de tema limpio y layouts responsivos.",
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
    title: "Sistema de Gestión de Inventario",
    description:
      "Un sistema de gestión de inventario full-stack para rastrear productos, niveles de stock, proveedores y transacciones. Incluye gráficos interactivos, control de acceso basado en roles y base de datos PostgreSQL.",
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
