import type { ExperienceItem } from "../../../types";

export const experience: ExperienceItem[] = [
  {
    id: "backend-xpand",
    title: "Desarrollador Backend",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "Octubre 2024 – Febrero 2025",
    description:
      "Diseñé e implementé servicios backend escalables usando NestJS y una arquitectura de microservicios.",
    responsibilities: [
      "Construcción de sistemas basados en eventos usando RabbitMQ para la comunicación entre servicios",
      "Desarrollo de APIs RESTful de alto rendimiento integradas con PostgreSQL",
      "Implementación de flujos robustos de autenticación y autorización de usuarios",
      "Contenerización de servicios con Docker y mantenimiento de pipelines CI/CD para despliegues automatizados",
    ],
    tags: ["NestJS", "PostgreSQL", "Docker", "TypeScript", "RabbitMQ"],
  },
  {
    id: "fullstack-xpand",
    title: "Desarrollador Full Stack",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "Marzo 2024 – Septiembre 2024",
    description:
      "Desarrollé aplicaciones web full-stack usando Next.js y React para el frontend con servicios backend en NestJS.",
    responsibilities: [
      "Construcción de interfaces responsivas y fáciles de usar con Next.js (SSR/SSG) y React",
      "Diseño e implementación de APIs backend robustas con NestJS",
      "Gestión de bases de datos PostgreSQL y diseño de esquemas óptimos",
      "Estilización de interfaces con Tailwind CSS y despliegue de servicios contenerizados con Docker",
    ],
    tags: ["Next.js", "React", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
  },
  {
    id: "thesis-umss",
    title: "Desarrollador de Software (Proyecto de Tesis)",
    company: "Universidad Mayor de San Simón",
    date: "Febrero 2023 – Diciembre 2023",
    description:
      "Desarrollé un sistema de información basado en web como parte del proyecto de tesis de pregrado.",
    responsibilities: [
      "Construcción de APIs backend con Python y Flask siguiendo principios de arquitectura limpia",
      "Creación de interfaces de usuario interactivas y dinámicas con React",
      "Diseño y optimización de esquemas de bases de datos en PostgreSQL",
      "Realización de análisis de requisitos, pruebas exhaustivas y documentación del sistema",
    ],
    tags: ["Python", "Flask", "React", "PostgreSQL"],
  },
  {
    id: "intern-sorelcom",
    title: "Desarrollador Web Pasante",
    company: "Sorelcom SRL",
    date: "Junio 2022 – Noviembre 2022",
    description:
      "Contribuí a proyectos de desarrollo web construyendo sitios web responsivos y herramientas internas.",
    responsibilities: [
      "Desarrollo de páginas dinámicas y responsivas usando HTML, CSS y JavaScript",
      "Implementación de lógica de negocio del lado del servidor y APIs con PHP",
      "Gestión y consulta de bases de datos MySQL para herramientas web internas",
      "Colaboración con el equipo utilizando control de versiones (Git) y metodologías ágiles",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];
