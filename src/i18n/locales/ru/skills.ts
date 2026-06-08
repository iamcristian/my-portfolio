import type { SkillCategory } from "../../../types";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "Языки",
    items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "SQL", "Bash"],
  },
  {
    id: "frontend",
    name: "Фронтенд",
    items: ["React", "Next.js", "Astro", "Tailwind CSS", "Redux"],
  },
  {
    id: "backend",
    name: "Бэкенд",
    items: ["Node.js", "NestJS", "Express", "Flask"],
  },
  {
    id: "databases",
    name: "Базы данных",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    id: "devops",
    name: "DevOps и инструменты",
    items: ["Docker", "Git", "Linux", "CI/CD", "GitHub Actions"],
  },
  {
    id: "security",
    name: "Безопасность",
    items: ["OWASP", "API Security", "Penetration Testing", "Network Security"],
  },
];
