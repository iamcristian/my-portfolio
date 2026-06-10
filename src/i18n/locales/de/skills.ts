import type { SkillCategory } from "../../../types";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "Sprachen",
    icon: "code",
    description: "Programmier- und Markupsprachen für die Anwendungslogik",
    items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "SQL", "Bash"],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "monitor",
    description: "Frameworks und Bibliotheken zur Gestaltung interaktiver Oberflächen",
    items: ["React", "Next.js", "Astro", "Tailwind CSS", "Redux"],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "server",
    description: "Serverseitige Architekturen, REST-APIs und Geschäftslogik",
    items: ["Node.js", "NestJS", "Express", "Flask"],
  },
  {
    id: "databases",
    name: "Datenbanken",
    icon: "database",
    description: "Relationale und nicht-relationale Systeme zur Datenverwaltung",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    id: "devops",
    name: "DevOps & Tools",
    icon: "terminal",
    description: "Deployment-Automatisierung, Versionskontrolle und Infrastruktur",
    items: ["Docker", "Git", "Linux", "CI/CD", "GitHub Actions"],
  },
  {
    id: "security",
    name: "Sicherheit",
    icon: "shield",
    description: "Anwendungsschutz, Penetrationstests und Netzwerksicherheit",
    items: ["OWASP", "API Security", "Penetration Testing", "Network Security"],
  },
];
