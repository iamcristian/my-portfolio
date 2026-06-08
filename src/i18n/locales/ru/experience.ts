import type { ExperienceItem } from "../../../types";

export const experience: ExperienceItem[] = [
  {
    id: "backend-xpand",
    title: "Бэкенд-разработчик",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "Октябрь 2024 – Февраль 2025",
    description:
      "Проектировал и внедрял масштабируемые бэкенд-сервисы с использованием NestJS на базе микросервисной архитектуры. Строил событийно-ориентированные системы с RabbitMQ для интеграции сервисов. Разрабатывал RESTful API с PostgreSQL, настраивал авторизационные потоки, контейнеризировал сервисы в Docker и поддерживал CI/CD пайплайны для автоматического развертывания.",
    tags: ["NestJS", "PostgreSQL", "Docker", "TypeScript", "RabbitMQ"],
  },
  {
    id: "fullstack-xpand",
    title: "Фулстек-разработчик",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "Март 2024 – Сентябрь 2024",
    description:
      "Разрабатывал полнофункциональные веб-приложения с использованием Next.js и React для фронтенда с серверным рендерингом и статической генерацией. Создавал API на NestJS, управлял базами данных PostgreSQL, верстал интерфейсы с Tailwind CSS и развертывал контейнеризированные приложения с помощью Docker на продакшене.",
    tags: ["Next.js", "React", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
  },
  {
    id: "thesis-umss",
    title: "Разработчик ПО (Дипломный проект)",
    company: "Universidad Mayor de San Simón",
    date: "Февраль 2023 – Декабрь 2023",
    description:
      "Разработал веб-информационную систему в рамках дипломного проекта бакалавриата. Создал бэкенд на Python и Flask по принципам чистой архитектуры, реализовал интерактивный фронтенд-интерфейс на React и спроектировал схему базы данных в PostgreSQL. Проводил анализ требований, проектирование системы, тестирование и документацию.",
    tags: ["Python", "Flask", "React", "PostgreSQL"],
  },
  {
    id: "intern-sorelcom",
    title: "Стажер-веб-разработчик",
    company: "Sorelcom SRL",
    date: "Июнь 2022 – Ноябрь 2022",
    description:
      "Участвовал в веб-разработке, создавая адаптивные сайты и внутренние инструменты. Разрабатывал динамические страницы с использованием HTML, CSS и JavaScript, писал серверную логику на PHP, управлял базами данных MySQL и сотрудничал с командой по методологии Agile с использованием Git.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];
