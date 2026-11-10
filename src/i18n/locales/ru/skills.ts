import type { SkillCategory } from "../../../types";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "Языки",
    icon: "code",
    description:
      "Основные языки программирования для создания прикладной и системной логики",
    items: ["TypeScript", "JavaScript", "Python", "Java"],
  },
  {
    id: "frontend",
    name: "Фронтенд",
    icon: "monitor",
    description:
      "Веб-стандарты, фреймворки и библиотеки для создания пользовательских интерфейсов",
    items: ["HTML", "CSS", "React", "Next.js", "Astro", "Tailwind CSS"],
  },
  {
    id: "backend",
    name: "Бэкенд",
    icon: "server",
    description: "Серверные архитектуры, API и бизнес-логика",
    items: ["Node.js", "NestJS", "FastAPI", "Django", "Express"],
  },
  {
    id: "databases",
    name: "Базы данных",
    icon: "database",
    description:
      "Реляционные, временных рядов, in-memory и документные хранилища данных",
    items: ["PostgreSQL", "TimescaleDB", "MySQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    id: "devops",
    name: "DevOps и инструменты",
    icon: "terminal",
    description:
      "Автоматизация развертывания, контроль версий и инфраструктура",
    items: ["Docker", "Git", "Linux", "CI/CD", "GitHub Actions"],
  },
  {
    id: "security",
    name: "Безопасность",
    icon: "shield",
    description: "Защита приложений, сканирование уязвимостей и сети",
    items: ["OWASP", "API Security", "Penetration Testing", "Network Security"],
  },
  {
    id: "ai",
    name: "ИИ и агентные системы",
    icon: "sparkles",
    description: "Генеративный ИИ и архитектуры интеллектуальных агентов",
    items: [
      "Model Context Protocol (MCP)",
      "Промпт-инжиниринг",
      "Агентные рабочие процессы",
      "Agent Skills",
    ],
  },
  {
    id: "soft-skills",
    name: "Гибкие навыки",
    icon: "brain",
    description:
      "Межличностные качества и профессиональное мышление для эффективного сотрудничества",
    items: [
      "Лидерство",
      "Ассертивная коммуникация",
      "Решение проблем",
      "Адаптивность",
    ],
  },
];
