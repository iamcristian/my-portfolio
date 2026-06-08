import type { ExperienceItem } from "../../../types";

export const experience: ExperienceItem[] = [
  {
    id: "backend-xpand",
    title: "Backend-Entwickler",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "Oktober 2024 – Februar 2025",
    description:
      "Konzeption und Implementierung skalierbarer Backend-Dienste mit NestJS unter Verwendung einer Microservice-Architektur. Aufbau ereignisgesteuerter Systeme mit RabbitMQ für die Service-Kommunikation. Entwicklung von RESTful APIs mit PostgreSQL, Implementierung von Authentifizierungs-Flows, Containerisierung von Diensten mit Docker und Pflege von CI/CD-Pipelines für automatisierte Deployments.",
    tags: ["NestJS", "PostgreSQL", "Docker", "TypeScript", "RabbitMQ"],
  },
  {
    id: "fullstack-xpand",
    title: "Full-Stack-Entwickler",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "März 2024 – September 2024",
    description:
      "Entwicklung von Full-Stack-Webanwendungen mit Next.js und React für das Frontend mit serverseitigem Rendering und statischer Generierung. Erstellung von Backend-APIs mit NestJS, Verwaltung von PostgreSQL-Datenbanken, Gestaltung von Benutzeroberflächen mit Tailwind CSS und Bereitstellung containerisierter Anwendungen mit Docker in Produktionsumgebungen.",
    tags: ["Next.js", "React", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
  },
  {
    id: "thesis-umss",
    title: "Softwareentwickler (Abschlussarbeit)",
    company: "Universidad Mayor de San Simón",
    date: "Februar 2023 – Dezember 2023",
    description:
      "Entwicklung eines webbasierten Informationssystems im Rahmen des Bachelor-Thesis-Projekts. Erstellung des Backends mit Python und Flask nach Prinzipien der Clean Architecture, Gestaltung interaktiver Frontend-Benutzeroberflächen mit React und Entwurf des Datenbankschemas in PostgreSQL. Durchführung von Anforderungsanalysen, Systemdesign, Tests und Dokumentation.",
    tags: ["Python", "Flask", "React", "PostgreSQL"],
  },
  {
    id: "intern-sorelcom",
    title: "Webentwickler-Praktikant",
    company: "Sorelcom SRL",
    date: "Juni 2022 – November 2022",
    description:
      "Mitwirkung an Webentwicklungsprojekten durch die Erstellung responsiver Websites und interner Tools. Entwicklung dynamischer Seiten mit HTML, CSS und JavaScript, Implementierung serverseitiger Logik mit PHP, Verwaltung von MySQL-Datenbanken und Zusammenarbeit im Team mittels Versionskontrolle und agiler Methoden.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];
