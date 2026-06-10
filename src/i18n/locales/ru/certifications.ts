import type { CertificationCategory } from "../../../types";

export const certifications: CertificationCategory[] = [
  {
    id: "ai",
    name: "Искусственный интеллект",
    items: [
      {
        id: "anthropic-ai-fluency",
        title: "AI Fluency for Small Businesses",
        institution: "Anthropic Education",
        date: "Июнь 2026",
        description:
          "Пройден курс по основам применения ИИ, посвященный использованию Claude и решений на базе генеративного ИИ для оптимизации рабочих процессов малого бизнеса.",
        link: "https://verify.skilljar.com/c/o8qcyn4zjny6",
        logo: "/src/assets/images/certs/anthropic.webp",
      },
      {
        id: "anthropic-mcp-advanced",
        title: "Model Context Protocol: Advanced Topics",
        institution: "Anthropic Education",
        date: "Июнь 2026",
        description:
          "Пройден курс по Model Context Protocol, посвященный созданию кастомных серверов MCP, безопасной передаче контекста и подключению расширенных источников данных к LLM.",
        link: "https://verify.skilljar.com/c/gepbvmqygu8v",
        logo: "/src/assets/images/certs/anthropic.webp",
      },
      {
        id: "anthropic-claude-code",
        title: "Claude Code in Action",
        institution: "Anthropic Education",
        date: "Май 2026",
        description:
          "Пройден курс по использованию Claude Code, посвященный применению агентного CLI-инструмента от Anthropic для редактирования кода, выполнения терминальных команд и автоматизации разработки.",
        link: "https://verify.skilljar.com/c/225fw8837oo8",
        logo: "/src/assets/images/certs/anthropic.webp",
      },
      {
        id: "devtalles-openai-react-nest",
        title: "OpenAI: Ejercicios prácticos и ассистенты с React + NestJS",
        institution: "DevTalles",
        date: "Апрель 2024",
        description:
          "Пройден курс по интеграции ассистентов OpenAI, охватывающий создание практических приложений на базе генеративного ИИ с фронтендом на React и бэкендом на NestJS.",
        link: "https://cursos.devtalles.com/certificates/blhvfvmceg",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
    ],
  },
  {
    id: "fullstack",
    name: "Фулстек-разработка",
    items: [
      {
        id: "nextjs-fullstack",
        title: "Next.js: The React Framework for Production",
        institution: "DevTalles",
        date: "Июнь 2024",
        description:
          "Пройден полный курс по Next.js, охватывающий SSR, SSG, хуки, лучшие практики и развертывание.",
        link: "https://cursos.devtalles.com/certificates/ot6ijhzpfs",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "nestjs-microservices",
        title: "NestJS + Microservices: Scalable and Modular Applications",
        institution: "DevTalles",
        date: "Май 2024",
        description:
          "Пройден курс по NestJS и микросервисам с упором на создание масштабируемых и модульных приложений.",
        link: "https://cursos.devtalles.com/certificates/q52zqaoqna",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "react-pro",
        title: "React PRO: Lleva tus bases al siguiente nivel",
        institution: "DevTalles",
        date: "Апрель 2024",
        description:
          "Продленный курс по React, охватывающий паттерны проектирования, управление состоянием, кастомные хуки, оптимизацию производительности и интеграцию с TypeScript.",
        link: "https://cursos.devtalles.com/certificates/8hfx0odnmi",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "node-rest-auth",
        title: "Node - REST Authentication with Clean Architecture",
        institution: "DevTalles",
        date: "Апрель 2024",
        description:
          "Пройден курс по авторизации в Node.js на базе принципов чистой архитектуры, повышающей безопасность и удобство поддержки.",
        link: "https://cursos.devtalles.com/certificates/icacthbzrc",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "modern-javascript",
        title: "Modern JavaScript: Guide to Mastering the Language",
        institution: "DevTalles",
        date: "Август 2023",
        description:
          "Пройден курс по современному JavaScript, охватывающий возможности ES6+, асинхронное программирование и лучшие практики.",
        link: "https://cursos.devtalles.com/certificates/jyflbutxb0",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
    ],
  },
  {
    id: "web-security",
    name: "Веб-безопасность",
    items: [
      {
        id: "api-pentest",
        title: "API Penetration Testing",
        institution: "APISEC",
        date: "Май 2024",
        description:
          "Пройден курс по тестированию API на проникновение с упором на выявление и эксплуатацию уязвимостей веб-API на основе OWASP API Security Top 10 2023.",
        link: "https://www.credly.com/badges/b845b494-cb64-4434-8cec-9e24e696c310/public_url",
        logo: "/src/assets/images/certs/apisec.webp",
      },
    ],
  },
  {
    id: "software-foundations",
    name: "Основы разработки ПО",
    items: [
      {
        id: "solid-clean-code",
        title: "SOLID Principles and Clean Code",
        institution: "DevTalles",
        date: "Апрель 2024",
        description:
          "Пройден курс по принципам SOLID и практикам чистого кода, улучшающий проектирование и удобство поддержки программного обеспечения.",
        link: "https://cursos.devtalles.com/certificates/fbyc1og4td",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "software-foundations-escuelait",
        title: "Software Foundations",
        institution: "EscuelaIT",
        date: "Август 2023",
        description:
          "Пройден курс по основам разработки ПО, охватывающий ключевые понятия, включая паттерны проектирования, архитектуру и лучшие практики.",
        link: "https://escuela.it/certificado/CERT-6bUoExVq",
        logo: "/src/assets/images/certs/escuelait.webp",
      },
      {
        id: "java-escuelait",
        title: "Programming with Java",
        institution: "EscuelaIT",
        date: "Июль 2023",
        description:
          "Пройден курс по программированию на Java с упором на принципы объектно-ориентированного программирования, структуры данных и алгоритмы.",
        link: "https://escuela.it/certificado/CERT-neGp23aM",
        logo: "/src/assets/images/certs/escuelait.webp",
      },
      {
        id: "git-coursera",
        title: "Version Control with Git",
        institution: "Coursera - Atlassian",
        date: "Январь 2023",
        description:
          "Пройден курс по контролю версий с помощью Git, охватывающий ветвление, слияние и совместную работу.",
        link: "https://coursera.org/share/b90c858376ed4333bb46c751295dcd67",
        logo: "/src/assets/images/certs/coursera.webp",
      },
      {
        id: "diff-equations",
        title: "Differential Equations for Engineers",
        institution: "Coursera - The Hong Kong University",
        date: "Декабрь 2022",
        description:
          "Пройден курс по дифференциальным уравнениям, ориентированный на применение в инженерии и технологиях.",
        link: "https://coursera.org/share/b2dd83ae991c55dc66cf59fee04730a4",
        logo: "/src/assets/images/certs/coursera.webp",
      },
    ],
  },
  {
    id: "networks",
    name: "Сети",
    items: [
      {
        id: "ccna-enterprise",
        title: "CCNA: Enterprise Networking, Security, and Automation",
        institution: "Cisco",
        date: "Январь 2024",
        description:
          "Пройден курс CCNA Enterprise Networking, Security, and Automation, охватывающий расширенные концепции сетевых технологий и методы безопасности.",
        link: "https://www.credly.com/badges/5850eb71-fb55-4692-b3d1-4402a12887d5/public_url",
        logo: "/src/assets/images/certs/cisco.webp",
      },
      {
        id: "ccna-switching",
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        institution: "Cisco",
        date: "Июль 2023",
        description:
          "Пройден курс CCNA Switching, Routing, and Wireless Essentials, посвященный проектированию, настройке и устранению неполадок в сетях.",
        link: "https://www.credly.com/badges/30da6658-bb81-470e-ba01-fe922d220168/public_url",
        logo: "/src/assets/images/certs/cisco.webp",
      },
      {
        id: "ccna-intro",
        title: "CCNA: Introduction to Networks",
        institution: "Cisco",
        date: "Январь 2023",
        description:
          "Пройден курс CCNA Introduction to Networks, охватывающий основы построения сетей, IP-адресацию и базовую сетевую безопасность.",
        link: "https://www.credly.com/badges/7828169a-a251-4156-9cc4-6badc6c3799b/public_url",
        logo: "/src/assets/images/certs/cisco.webp",
      },
    ],
  },
  {
    id: "academic-distinctions",
    name: "Академические отличия",
    items: [
      {
        id: "excellent-student",
        title: "Награда лучшему ученику",
        institution: "Выпускной класс старшей школы",
        date: "Декабрь 2023",
        description:
          "Награжден как лучший ученик за выдающиеся академические успехи в течение выпускного года в старшей школе.",
        link: "https://drive.google.com/file/d/1ijJqIJjJ7dsUUxPuLJD1nCyyYeaErVRa/view",
        logo: "/src/assets/images/certs/award.webp",
      },
    ],
  },
  {
    id: "linguistics",
    name: "Лингвистика",
    items: [
      {
        id: "efset-b2",
        title: "EFSET English Certificate B2 Upper Intermediate",
        institution: "EF Standard English Test",
        date: "Ноябрь 2023",
        description:
          "Достигнут уровень B2 (Upper Intermediate) по шкале владения английским языком, что демонстрирует способность эффективно общаться в профессиональной среде.",
        link: "https://www.efset.org/cert/eHmQk3",
        logo: "/src/assets/images/certs/efset.webp",
      },
    ],
  },
  {
    id: "methodologies",
    name: "Методологии",
    items: [
      {
        id: "agile-jira",
        title: "Agile with Atlassian Jira",
        institution: "Coursera - Atlassian",
        date: "Июль 2023",
        description:
          "Пройден курс по гибким методологиям разработки с использованием Atlassian Jira, посвященный управлению проектами и командному взаимодействию.",
        link: "https://coursera.org/share/b97617897c0dc270bad0c9d1fcb34c37",
        logo: "/src/assets/images/certs/coursera.webp",
      },
    ],
  },
];

export default certifications;
