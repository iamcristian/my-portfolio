import type { SkillCategory } from "../../../types";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "Sprachen",
    items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "SQL", "Bash"],
  },
  {
    id: "frontend",
    name: "Frontend",
    items: ["React", "Next.js", "Astro", "Tailwind CSS", "Redux"],
  },
  {
    id: "backend",
    name: "Backend",
    items: ["Node.js", "NestJS", "Express", "Flask"],
  },
  {
    id: "databases",
    name: "Datenbanken",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    id: "devops",
    name: "DevOps & Tools",
    items: ["Docker", "Git", "Linux", "CI/CD", "GitHub Actions"],
  },
  {
    id: "security",
    name: "Sicherheit",
    items: ["OWASP", "API Security", "Penetration Testing", "Network Security"],
  },
];
