import type { SkillCategory } from "../../../types";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "Sprachen",
    icon: "code",
    description: "Zentrale Programmiersprachen für Anwendungs- und Systemlogik",
    items: ["TypeScript", "JavaScript", "Python", "Java"],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "monitor",
    description:
      "Webstandards, Frameworks und Bibliotheken für interaktive Oberflächen",
    items: ["HTML", "CSS", "React", "Next.js", "Astro", "Tailwind CSS"],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "server",
    description: "Serverseitige Architekturen, REST-APIs und Geschäftslogik",
    items: ["Node.js", "NestJS", "FastAPI", "Django", "Express"],
  },
  {
    id: "databases",
    name: "Datenbanken",
    icon: "database",
    description:
      "Relationale, Zeitreihen-, In-Memory- und dokumentenorientierte Datenbanksysteme",
    items: ["PostgreSQL", "TimescaleDB", "MySQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    id: "devops",
    name: "DevOps & Tools",
    icon: "terminal",
    description:
      "Deployment-Automatisierung, Versionskontrolle und Infrastruktur",
    items: ["Docker", "Git", "Linux", "CI/CD", "GitHub Actions"],
  },
  {
    id: "security",
    name: "Sicherheit",
    icon: "shield",
    description: "Anwendungsschutz, Penetrationstests und Netzwerksicherheit",
    items: ["OWASP", "API Security", "Penetration Testing", "Network Security"],
  },
  {
    id: "ai",
    name: "KI & Agentensysteme",
    icon: "sparkles",
    description: "Generative KI und intelligente Agentenarchitekturen",
    items: [
      "Model Context Protocol (MCP)",
      "Prompt Engineering",
      "Agenten-Workflows",
      "Agent Skills",
    ],
  },
  {
    id: "soft-skills",
    name: "Soft Skills",
    icon: "brain",
    description:
      "Interpersonelle Eigenschaften und professionelle Denkweise für effektive Zusammenarbeit",
    items: [
      "Führungskompetenz",
      "Assertive Kommunikation",
      "Problemlösung",
      "Anpassungsfähigkeit",
    ],
  },
];
