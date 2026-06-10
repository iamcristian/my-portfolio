import type { ExperienceItem } from "../../../types";

export const experience: ExperienceItem[] = [
  {
    id: "backend-xpand",
    title: "Backend-Entwickler",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "Oktober 2024 – Februar 2025",
    description:
      "Konzeption und Implementierung skalierbarer Backend-Dienste mit NestJS unter Verwendung einer Microservice-Architektur.",
    responsibilities: [
      "Aufbau ereignisgesteuerter Systeme mit RabbitMQ für die Service-Kommunikation",
      "Entwicklung sicherer und hochperformanter RESTful APIs mit PostgreSQL",
      "Implementierung robuster Authentifizierungs- und Autorisierungs-Flows",
      "Containerisierung von Diensten mit Docker und Pflege von CI/CD-Pipelines für automatisierte Deployments",
    ],
    tags: ["NestJS", "PostgreSQL", "Docker", "TypeScript", "RabbitMQ"],
  },
  {
    id: "fullstack-xpand",
    title: "Full-Stack-Entwickler",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "März 2024 – September 2024",
    description:
      "Entwicklung von Full-Stack-Webanwendungen mit Next.js und React für das Frontend mit Backend-Diensten in NestJS.",
    responsibilities: [
      "Aufbau responsiver und benutzerfreundlicher Frontend-Schnittstellen mit Next.js (SSR/SSG) und React",
      "Konzeption und Implementierung robuster Backend-APIs mit NestJS",
      "Verwaltung von PostgreSQL-Datenbanken und Entwurf optimaler Schemata",
      "Gestaltung von Benutzeroberflächen mit Tailwind CSS und Bereitstellung containerisierter Dienste mit Docker",
    ],
    tags: ["Next.js", "React", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
  },
  {
    id: "thesis-umss",
    title: "Softwareentwickler (Abschlussarbeit)",
    company: "Universidad Mayor de San Simón",
    date: "Februar 2023 – Dezember 2023",
    description:
      "Entwicklung eines webbasierten Informationssystems im Rahmen des Bachelor-Thesis-Projekts.",
    responsibilities: [
      "Erstellung von Backend-APIs mit Python und Flask nach Prinzipien der Clean Architecture",
      "Gestaltung interaktiver und dynamischer Benutzeroberflächen mit React",
      "Entwurf und Optimierung von Datenbankschemata in PostgreSQL",
      "Durchführung umfassender Anforderungsanalysen, Tests und Systemdokumentation",
    ],
    tags: ["Python", "Flask", "React", "PostgreSQL"],
  },
  {
    id: "intern-sorelcom",
    title: "Webentwickler-Praktikant",
    company: "Sorelcom SRL",
    date: "Juni 2022 – November 2022",
    description:
      "Mitwirkung an Webentwicklungsprojekten durch die Erstellung responsiver Websites und interner Tools.",
    responsibilities: [
      "Entwicklung dynamischer und responsiver Webseiten mit HTML, CSS und JavaScript",
      "Implementierung serverseitiger Geschäftslogik und APIs mit PHP",
      "Verwaltung und Abfrage von MySQL-Datenbanken für interne Web-Tools",
      "Zusammenarbeit im Team unter Verwendung von Versionskontrolle (Git) und agilen Methoden",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];
