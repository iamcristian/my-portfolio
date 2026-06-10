import type { SkillCategory } from "../../../types";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "Lenguajes",
    icon: "code",
    description: "Lenguajes de programación utilizados para construir la lógica de aplicaciones",
    items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "SQL", "Bash"],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "monitor",
    description: "Tecnologías y librerías para construir interfaces de usuario",
    items: ["React", "Next.js", "Astro", "Tailwind CSS", "Redux"],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "server",
    description: "Arquitecturas de servidor, APIs y lógica de negocio",
    items: ["Node.js", "NestJS", "Express", "Flask"],
  },
  {
    id: "databases",
    name: "Bases de Datos",
    icon: "database",
    description: "Motores de almacenamiento de bases de datos relacionales y no relacionales",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    id: "devops",
    name: "DevOps y Herramientas",
    icon: "terminal",
    description: "Automatización de despliegue, control de versiones y entornos",
    items: ["Docker", "Git", "Linux", "CI/CD", "GitHub Actions"],
  },
  {
    id: "security",
    name: "Seguridad",
    icon: "shield",
    description: "Protección de aplicaciones, escaneo de vulnerabilidades y redes",
    items: ["OWASP", "API Security", "Penetration Testing", "Network Security"],
  },
];
