export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: "frontend" | "backend" | "fullstack";
  github: string;
  live?: string;
  image: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: "nestjs-microservices-store",
    title: "NestJS Microservices Store",
    description:
      "A production-ready e-commerce platform built with NestJS microservices architecture. Features API Gateway, NATS message broker, Docker, and PostgreSQL.",
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
      "A premium, high-performance portfolio website built with Astro and React islands. Optimized for Core Web Vitals with clean theme controls and responsive layouts.",
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
    title: "Inventory Management System",
    description:
      "Full-stack inventory system to track products, stock levels, suppliers, and transactions. Features interactive charts, role-based controls, and a PostgreSQL database.",
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
