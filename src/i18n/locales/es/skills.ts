import type { SkillCategory } from "../../../types";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "Lenguajes",
    icon: "code",
    description:
      "Lenguajes de programación principales utilizados para construir la lógica de aplicaciones y sistemas",
    items: ["TypeScript", "JavaScript", "Python", "Java"],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "monitor",
    description:
      "Estándares web, frameworks y librerías para construir interfaces de usuario",
    items: ["HTML", "CSS", "React", "Next.js", "Astro", "Tailwind CSS"],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "server",
    description: "Arquitecturas de servidor, APIs y lógica de negocio",
    items: ["Node.js", "NestJS", "FastAPI", "Django", "Express"],
  },
  {
    id: "databases",
    name: "Bases de Datos",
    icon: "database",
    description:
      "Motores de bases de datos relacionales, de series temporales, en memoria y documentales",
    items: ["PostgreSQL", "TimescaleDB", "MySQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    id: "devops",
    name: "DevOps y Herramientas",
    icon: "terminal",
    description:
      "Automatización de despliegue, control de versiones y entornos",
    items: ["Docker", "Git", "Linux", "CI/CD", "GitHub Actions"],
  },
  {
    id: "security",
    name: "Seguridad",
    icon: "shield",
    description:
      "Protección de aplicaciones, escaneo de vulnerabilidades y redes",
    items: ["OWASP", "API Security", "Penetration Testing", "Network Security"],
  },
  {
    id: "ai",
    name: "IA y Sistemas Agénticos",
    icon: "sparkles",
    description: "IA generativa y arquitecturas de agentes inteligentes",
    items: [
      "Model Context Protocol (MCP)",
      "Prompt Engineering",
      "Flujos Agénticos",
      "Agent Skills",
    ],
  },
  {
    id: "soft-skills",
    name: "Habilidades Blandas",
    icon: "brain",
    description:
      "Atributos interpersonales y mentalidad profesional para una colaboración efectiva",
    items: [
      "Liderazgo",
      "Comunicación Asertiva",
      "Resolución de Problemas",
      "Adaptabilidad",
    ],
  },
];
