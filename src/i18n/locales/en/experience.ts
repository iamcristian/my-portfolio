import type { ExperienceItem } from "../../../types";

export const experience: ExperienceItem[] = [
  {
    id: "backend-xpand",
    title: "Backend Developer",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "October 2024 – February 2025",
    description:
      "Designed and implemented scalable backend services using NestJS with microservices architecture. Built event-driven systems using RabbitMQ for service communication. Developed RESTful APIs with PostgreSQL, implemented authentication flows, containerized services with Docker, and maintained CI/CD pipelines for automated deployments.",
    tags: ["NestJS", "PostgreSQL", "Docker", "TypeScript", "RabbitMQ"],
  },
  {
    id: "fullstack-xpand",
    title: "Full Stack Developer",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "March 2024 – September 2024",
    description:
      "Developed full-stack web applications using Next.js and React for the frontend with server-side rendering and static generation. Built backend APIs with NestJS, managed PostgreSQL databases, styled interfaces with Tailwind CSS, and deployed containerized applications using Docker in production environments.",
    tags: ["Next.js", "React", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
  },
  {
    id: "thesis-umss",
    title: "Software Developer (Thesis Project)",
    company: "Universidad Mayor de San Simón",
    date: "February 2023 – December 2023",
    description:
      "Developed a web-based information system as part of the undergraduate thesis project. Built the backend with Python and Flask following clean architecture principles, created interactive frontend interfaces with React, and designed the database schema in PostgreSQL. Conducted requirements analysis, system design, testing, and documentation.",
    tags: ["Python", "Flask", "React", "PostgreSQL"],
  },
  {
    id: "intern-sorelcom",
    title: "Intern Web Developer",
    company: "Sorelcom SRL",
    date: "June 2022 – November 2022",
    description:
      "Contributed to web development projects by building responsive websites and internal tools. Developed dynamic pages with HTML, CSS, and JavaScript, implemented server-side logic with PHP, managed MySQL databases, and collaborated with the team using version control and agile methodologies.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];
