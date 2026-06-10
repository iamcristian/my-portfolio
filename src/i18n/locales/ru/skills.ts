import type { SkillCategory } from "../../../types";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "Языки",
    icon: "code",
    description: "Языки программирования для построения логики приложений",
    items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "SQL", "Bash"],
  },
  {
    id: "frontend",
    name: "Фронтенд",
    icon: "monitor",
    description: "Технологии и библиотеки для создания пользовательских интерфейсов",
    items: ["React", "Next.js", "Astro", "Tailwind CSS", "Redux"],
  },
  {
    id: "backend",
    name: "Бэкенд",
    icon: "server",
    description: "Серверные архитектуры, API и бизнес-логика",
    items: ["Node.js", "NestJS", "Express", "Flask"],
  },
  {
    id: "databases",
    name: "Базы данных",
    icon: "database",
    description: "Реляционные и нереляционные хранилища данных",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    id: "devops",
    name: "DevOps и инструменты",
    icon: "terminal",
    description: "Автоматизация развертывания, контроль версий и инфраструктура",
    items: ["Docker", "Git", "Linux", "CI/CD", "GitHub Actions"],
  },
  {
    id: "security",
    name: "Безопасность",
    icon: "shield",
    description: "Защита приложений, сканирование уязвимостей и сети",
    items: ["OWASP", "API Security", "Penetration Testing", "Network Security"],
  },
];
