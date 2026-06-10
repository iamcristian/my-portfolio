import type { ExperienceItem } from "../../../types";

export const experience: ExperienceItem[] = [
  {
    id: "backend-xpand",
    title: "Backend Developer",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "October 2024 – February 2025",
    description:
      "Designed and implemented scalable backend services using NestJS and a microservices architecture.",
    responsibilities: [
      "Built event-driven systems using RabbitMQ for service communication",
      "Developed secure, high-performance RESTful APIs integrated with PostgreSQL",
      "Implemented robust user authentication and authorization flows",
      "Containerized services with Docker and maintained CI/CD pipelines for automated deployments",
    ],
    tags: ["NestJS", "PostgreSQL", "Docker", "TypeScript", "RabbitMQ"],
  },
  {
    id: "fullstack-xpand",
    title: "Full Stack Developer",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "March 2024 – September 2024",
    description:
      "Developed full-stack web applications using Next.js and React for the frontend with backend services in NestJS.",
    responsibilities: [
      "Built responsive, user-friendly frontend interfaces with Next.js (SSR/SSG) and React",
      "Designed and implemented robust backend APIs using NestJS",
      "Managed PostgreSQL databases and designed optimized schemas",
      "Styled interfaces with Tailwind CSS and deployed containerized services using Docker",
    ],
    tags: ["Next.js", "React", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
  },
  {
    id: "thesis-umss",
    title: "Software Developer (Thesis Project)",
    company: "Universidad Mayor de San Simón",
    date: "February 2023 – December 2023",
    description:
      "Developed a web-based information system as part of the undergraduate thesis project.",
    responsibilities: [
      "Built backend APIs with Python and Flask following clean architecture principles",
      "Created interactive and dynamic user interfaces with React",
      "Designed and optimized database schemas in PostgreSQL",
      "Conducted comprehensive requirements analysis, testing, and system documentation",
    ],
    tags: ["Python", "Flask", "React", "PostgreSQL"],
  },
  {
    id: "intern-sorelcom",
    title: "Intern Web Developer",
    company: "Sorelcom SRL",
    date: "June 2022 – November 2022",
    description:
      "Contributed to web development projects by building responsive websites and internal tools.",
    responsibilities: [
      "Developed dynamic and responsive pages using HTML, CSS, and JavaScript",
      "Implemented server-side business logic and APIs with PHP",
      "Managed and queried MySQL databases for internal web tools",
      "Collaborated with team members using version control (Git) and agile methodologies",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];
