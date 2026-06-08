import type { ExperienceItem } from "../../../types";

export const experience: ExperienceItem[] = [
  {
    id: "backend-xpand",
    title: "Desarrollador Backend",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "Octubre 2024 – Febrero 2025",
    description:
      "Diseñé e implementé servicios backend escalables usando NestJS con arquitectura de microservicios. Construí sistemas basados en eventos con RabbitMQ para comunicación entre servicios. Desarrollé APIs RESTful con PostgreSQL, implementé flujos de autenticación, contenerizé servicios con Docker y mantuve pipelines CI/CD para despliegues automatizados.",
    tags: ["NestJS", "PostgreSQL", "Docker", "TypeScript", "RabbitMQ"],
  },
  {
    id: "fullstack-xpand",
    title: "Desarrollador Full Stack",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "Marzo 2024 – Septiembre 2024",
    description:
      "Desarrollé aplicaciones web full-stack usando Next.js y React para el frontend con renderizado del lado del servidor y generación estática. Construí APIs backend con NestJS, gestioné bases de datos PostgreSQL, estilicé interfaces con Tailwind CSS y desplegué aplicaciones contenerizadas usando Docker en entornos de producción.",
    tags: ["Next.js", "React", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
  },
  {
    id: "thesis-umss",
    title: "Desarrollador de Software (Proyecto de Tesis)",
    company: "Universidad Mayor de San Simón",
    date: "Febrero 2023 – Diciembre 2023",
    description:
      "Desarrollé un sistema de información basado en web como parte del proyecto de tesis de pregrado. Construí el backend con Python y Flask siguiendo principios de arquitectura limpia, creé interfaces frontend interactivas con React y diseñé el esquema de base de datos en PostgreSQL. Realicé análisis de requisitos, diseño del sistema, pruebas y documentación.",
    tags: ["Python", "Flask", "React", "PostgreSQL"],
  },
  {
    id: "intern-sorelcom",
    title: "Desarrollador Web Pasante",
    company: "Sorelcom SRL",
    date: "Junio 2022 – Noviembre 2022",
    description:
      "Contribuí a proyectos de desarrollo web construyendo sitios web responsivos y herramientas internas. Desarrollé páginas dinámicas con HTML, CSS y JavaScript, implementé lógica del lado del servidor con PHP, gestioné bases de datos MySQL y colaboré con el equipo usando control de versiones y prácticas ágiles.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];
