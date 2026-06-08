import type { CertificationCategory } from "../../../types";

export const certifications: CertificationCategory[] = [
  {
    id: "fullstack",
    name: "Разработка Full Stack",
    items: [
      {
        id: "nextjs-fullstack",
        title: "Next.js – React-фреймворк для продакшена",
        institution: "DevTalles",
        date: "Июнь 2024",
        description:
          "Комплексный курс, охватывающий Next.js App Router, Server Components, Server Actions, авторизацию, интеграцию баз данных и стратегии развертывания для приложений продакшн-уровня.",
        link: "https://cursos.devtalles.com/certificates/nextjs",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "nestjs-microservices",
        title: "NestJS + Микросервисы: сборка и развертывание",
        institution: "DevTalles",
        date: "Май 2024",
        description:
          "Продвинутый курс по созданию масштабируемых архитектур микросервисов с использованием NestJS, брокеров сообщений, NATS, контейнеризации Docker, шаблонов API Gateway и развертывания в продакшене.",
        link: "https://cursos.devtalles.com/certificates/nestjs-microservices",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "node-rest-auth",
        title: "REST-сервер Node.js с авторизацией и чистой архитектурой",
        institution: "DevTalles",
        date: "Апрель 2024",
        description:
          "Углубленный курс по созданию RESTful API с использованием Node.js и TypeScript, внедрению JWT-авторизации, шаблонов чистой архитектуры, шаблона репозитория и принципов SOLID.",
        link: "https://cursos.devtalles.com/certificates/node-rest-auth",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "modern-javascript",
        title: "Современный JavaScript — от нуля до эксперта",
        institution: "DevTalles",
        date: "Август 2023",
        description:
          "Комплексный курс по JavaScript, охватывающий возможности ES6+, асинхронное программирование, манипуляции с DOM, шаблоны проектирования, модули, тестирование и современные рабочие процессы разработки.",
        link: "https://cursos.devtalles.com/certificates/javascript-moderno",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
    ],
  },
  {
    id: "software-foundations",
    name: "Основы программного обеспечения",
    items: [
      {
        id: "solid-clean-code",
        title: "Принципы SOLID и чистый код",
        institution: "DevTalles",
        date: "Апрель 2024",
        description:
          "Курс, посвященный написанию поддерживаемого и масштабируемого кода с использованием принципов SOLID, практик чистого кода, методов рефакторинга и шаблонов проектирования для профессиональной разработки ПО.",
        link: "https://cursos.devtalles.com/certificates/solid-clean-code",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "software-foundations-escuelait",
        title: "Основы программного обеспечения",
        institution: "EscuelaIT",
        date: "Август 2023",
        description:
          "Базовый курс, охватывающий основные концепции программной инженерии, парадигмы программирования, основы архитектуры программного обеспечения и лучшие практики создания надежных приложений.",
        link: "https://escuela.it/",
        logo: "/src/assets/images/certs/escuelait.webp",
      },
      {
        id: "java-escuelait",
        title: "Программирование на Java",
        institution: "EscuelaIT",
        date: "Июль 2023",
        description:
          "Комплексный курс по программированию на Java, охватывающий принципы ООП, коллекции, обработку исключений, обобщения, многопоточность и инструменты экосистемы Java.",
        link: "https://escuela.it/",
        logo: "/src/assets/images/certs/escuelait.webp",
      },
      {
        id: "git-coursera",
        title: "Управление версиями с помощью Git",
        institution: "Coursera – Atlassian",
        date: "Январь 2023",
        description:
          "Профессиональный курс по управлению версиями в Git, охватывающий стратегии ветвления, разрешение конфликтов слияния, перебазирование, совместную работу и интеграцию с Bitbucket/GitHub.",
        link: "https://www.coursera.org/account/accomplishments/verify/git-atlassian",
        logo: "/src/assets/images/certs/coursera.webp",
      },
      {
        id: "diff-equations",
        title: "Дифференциальные уравнения для инженеров",
        institution: "Coursera – HKUST",
        date: "Декабрь 2022",
        description:
          "Математический курс, охватывающий обыкновенные дифференциальные уравнения, преобразования Лапласа, системы уравнений и численные методы применительно к инженерным задачам.",
        link: "https://www.coursera.org/account/accomplishments/verify/diff-equations",
        logo: "/src/assets/images/certs/coursera.webp",
      },
    ],
  },
  {
    id: "linguistics",
    name: "Лингвистика",
    items: [
      {
        id: "efset-b2",
        title: "Сертификат по английскому языку EF SET — B2 Upper Intermediate",
        institution: "EF Education First",
        date: "Ноябрь 2023",
        description:
          "Стандартизированный тест на знание английского языка на уровне B2 (Upper Intermediate) по шкале CEFR, подтверждающий сильные навыки чтения и аудирования.",
        link: "https://www.efset.org/cert/",
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
        title: "Agile с Atlassian Jira",
        institution: "Coursera – Atlassian",
        date: "Июль 2023",
        description:
          "Профессиональный курс по гибкому управлению проектами с использованием Jira, охватывающий методологии Scrum и Kanban, планирование спринтов, управление бэклогом и отслеживание скорости команды.",
        link: "https://www.coursera.org/account/accomplishments/verify/agile-jira",
        logo: "/src/assets/images/certs/coursera.webp",
      },
    ],
  },
  {
    id: "web-security",
    name: "Веб-безопасность",
    items: [
      {
        id: "api-pentest",
        title: "Тестирование API на проникновение",
        institution: "APIsec University",
        date: "Май 2024",
        description:
          "Специализированный курс по тестированию безопасности API, охватывающий OWASP API Top 10, обход аутентификации, инъекционные атаки, нарушение авторизации, ограничение частоты запросов и инструменты автоматического сканирования безопасности.",
        link: "https://www.apisecuniversity.com/",
        logo: "/src/assets/images/certs/apisec.webp",
      },
    ],
  },
  {
    id: "networks",
    name: "Сети",
    items: [
      {
        id: "ccna-enterprise",
        title: "CCNA: Корпоративные сети, безопасность и автоматизация",
        institution: "Cisco Networking Academy",
        date: "Январь 2024",
        description:
          "Сертификационный курс Cisco продвинутого уровня, охватывающий архитектуры корпоративных сетей, технологии WAN, концепции сетевой безопасности, SDN, автоматизацию сетей с помощью Python и REST API.",
        link: "https://www.credly.com/badges/ccna-enterprise",
        logo: "/src/assets/images/certs/cisco.webp",
      },
      {
        id: "ccna-switching",
        title: "CCNA: Основы коммутации, маршрутизации и беспроводных сетей",
        institution: "Cisco Networking Academy",
        date: "Июль 2023",
        description:
          "Курс Cisco среднего уровня, охватывающий настройку VLAN, маршрутизацию между VLAN, STP, EtherChannel, DHCPv4/v6, FHRP, концепции беспроводных сетей и функции безопасности коммутаторов.",
        link: "https://www.credly.com/badges/ccna-switching",
        logo: "/src/assets/images/certs/cisco.webp",
      },
      {
        id: "ccna-intro",
        title: "CCNA: Введение в сети",
        institution: "Cisco Networking Academy",
        date: "Январь 2023",
        description:
          "Базовый курс Cisco, охватывающий основы сетей, концепции Ethernet, адресацию IPv4/IPv6, модели OSI и TCP/IP, разделение на подсети и базовую настройку маршрутизатора/коммутатора.",
        link: "https://www.credly.com/badges/ccna-intro",
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
        title: "Награда за выдающиеся успехи в учебе",
        institution: "Universidad Mayor de San Simón",
        date: "Декабрь 2023",
        description:
          "Награда за выдающуюся академическую успеваемость на протяжении всей программы системной инженерии, подтверждающая превосходные результаты в учебе, исследованиях и защите дипломной работы.",
        logo: "/src/assets/images/certs/umss.webp",
      },
    ],
  },
];

export default certifications;
