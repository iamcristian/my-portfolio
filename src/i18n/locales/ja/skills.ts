import type { SkillCategory } from "../../../types";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "開発言語",
    items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "SQL", "Bash"],
  },
  {
    id: "frontend",
    name: "フロントエンド",
    items: ["React", "Next.js", "Astro", "Tailwind CSS", "Redux"],
  },
  {
    id: "backend",
    name: "バックエンド",
    items: ["Node.js", "NestJS", "Express", "Flask"],
  },
  {
    id: "databases",
    name: "データベース",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    id: "devops",
    name: "DevOps・ツール",
    items: ["Docker", "Git", "Linux", "CI/CD", "GitHub Actions"],
  },
  {
    id: "security",
    name: "セキュリティ",
    items: ["OWASP", "API Security", "Penetration Testing", "Network Security"],
  },
];
