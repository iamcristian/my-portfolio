import type { ExperienceItem } from "../../../types";

export const experience: ExperienceItem[] = [
  {
    id: "backend-xpand",
    title: "Бэкенд-разработчик",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "Октябрь 2024 – Февраль 2025",
    description:
      "Проектировал и внедрял масштабируемые бэкенд-сервисы с использованием NestJS на базе микросервисной архитектуры.",
    responsibilities: [
      "Создание событийно-ориентированных систем с RabbitMQ для интеграции микросервисов",
      "Разработка высокопроизводительных RESTful API, интегрированных с PostgreSQL",
      "Внедрение надежных механизмов аутентификации и авторизации пользователей",
      "Контейнеризация сервисов в Docker и поддержка CI/CD пайплайнов для автоматического развертывания",
    ],
    tags: ["NestJS", "PostgreSQL", "Docker", "TypeScript", "RabbitMQ"],
  },
  {
    id: "fullstack-xpand",
    title: "Фулстек-разработчик",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "Март 2024 – Сентябрь 2024",
    description:
      "Разрабатывал полнофункциональные веб-приложения с использованием Next.js и React для фронтенда и бэкенд-сервисами на NestJS.",
    responsibilities: [
      "Создание адаптивных и удобных фронтенд-интерфейсов с Next.js (SSR/SSG) и React",
      "Проектирование и разработка надежных бэкенд API с помощью NestJS",
      "Управление базами данных PostgreSQL и проектирование оптимальных схем данных",
      "Верстка интерфейсов с Tailwind CSS и развертывание контейнеризированных сервисов с Docker",
    ],
    tags: ["Next.js", "React", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
  },
  {
    id: "thesis-umss",
    title: "Разработчик ПО (Дипломный проект)",
    company: "Universidad Mayor de San Simón",
    date: "Февраль 2023 – Декабрь 2023",
    description:
      "Разработал веб-информационную систему в рамках дипломного проекта бакалавриата.",
    responsibilities: [
      "Создал бэкенд API на Python и Flask в соответствии с принципами чистой архитектуры",
      "Реализовал интерактивные и динамичные пользовательские интерфейсы на React",
      "Спроектировал и оптимизировал схему базы данных в PostgreSQL",
      "Провел полный анализ требований, тестирование и документирование системы",
    ],
    tags: ["Python", "Flask", "React", "PostgreSQL"],
  },
  {
    id: "intern-sorelcom",
    title: "Стажер-веб-разработчик",
    company: "Sorelcom SRL",
    date: "Июнь 2022 – Ноябрь 2022",
    description:
      "Участвовал в веб-разработке, создавая адаптивные сайты и внутренние инструменты.",
    responsibilities: [
      "Разрабатывал динамические и адаптивные страницы с использованием HTML, CSS и JavaScript",
      "Писал серверную бизнес-логику и API на PHP",
      "Управлял базами данных MySQL и оптимизировал запросы для внутренних веб-инструментов",
      "Сотрудничал с командой по методологии Agile с использованием контроля версий (Git)",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];
