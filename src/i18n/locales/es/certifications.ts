import type { CertificationCategory } from "../../../types";

export const certifications: CertificationCategory[] = [
  {
    id: "ai",
    name: "Inteligencia Artificial",
    items: [
      {
        id: "anthropic-ai-fluency",
        title: "AI Fluency for Small Businesses",
        institution: "Anthropic Education",
        date: "Junio 2026",
        description:
          "Curso completado sobre fluidez en IA, enfocado en el uso de Claude y soluciones de IA generativa para optimizar los flujos de trabajo de pequeñas empresas.",
        link: "https://verify.skilljar.com/c/o8qcyn4zjny6",
        logo: "/src/assets/images/certs/anthropic.webp",
      },
      {
        id: "anthropic-mcp-advanced",
        title: "Model Context Protocol: Advanced Topics",
        institution: "Anthropic Education",
        date: "Junio 2026",
        description:
          "Curso completado sobre Model Context Protocol, enfocado en la construcción de servidores MCP personalizados, intercambio seguro de contexto y conexión de fuentes de datos avanzadas a LLMs.",
        link: "https://verify.skilljar.com/c/gepbvmqygu8v",
        logo: "/src/assets/images/certs/anthropic.webp",
      },
      {
        id: "anthropic-claude-code",
        title: "Claude Code in Action",
        institution: "Anthropic Education",
        date: "Mayo 2026",
        description:
          "Curso completado sobre Claude Code, enfocado en el uso de la herramienta CLI agéntica de Anthropic para edición de código, comandos de terminal y tareas de desarrollo automatizadas.",
        link: "https://verify.skilljar.com/c/225fw8837oo8",
        logo: "/src/assets/images/certs/anthropic.webp",
      },
      {
        id: "devtalles-openai-react-nest",
        title: "OpenAI: Ejercicios prácticos y asistentes con React + NestJS",
        institution: "DevTalles",
        date: "Abril 2024",
        description:
          "Curso completado sobre integración de asistentes de OpenAI, cubriendo la construcción de aplicaciones prácticas de IA generativa con frontend en React y backend en NestJS.",
        link: "https://cursos.devtalles.com/certificates/blhvfvmceg",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
    ],
  },
  {
    id: "fullstack",
    name: "Desarrollo Full Stack",
    items: [
      {
        id: "nextjs-fullstack",
        title: "Next.js: El Framework de React para Producción",
        institution: "DevTalles",
        date: "Junio 2024",
        description:
          "Curso integral completado sobre Next.js, cubriendo SSR, SSG, hooks, mejores prácticas y despliegue.",
        link: "https://cursos.devtalles.com/certificates/ot6ijhzpfs",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "nestjs-microservices",
        title: "NestJS + Microservicios: Aplicaciones Escalables y Modulares",
        institution: "DevTalles",
        date: "Mayo 2024",
        description:
          "Curso completado sobre NestJS y microservices, enfocado en construir aplicaciones escalables y modulares.",
        link: "https://cursos.devtalles.com/certificates/q52zqaoqna",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "react-pro",
        title: "React PRO: Lleva tus bases al siguiente nivel",
        institution: "DevTalles",
        date: "Abril 2024",
        description:
          "Curso avanzado de React que cubre patrones de diseño, gestión de estado, hooks personalizados, optimización de rendimiento e integración con TypeScript.",
        link: "https://cursos.devtalles.com/certificates/8hfx0odnmi",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "node-rest-auth",
        title: "Node - Autenticación REST con Arquitectura Limpia",
        institution: "DevTalles",
        date: "Abril 2024",
        description:
          "Curso completado sobre autenticación en Node.js utilizando principios de Arquitectura Limpia, mejorando la seguridad y mantenibilidad.",
        link: "https://cursos.devtalles.com/certificates/icacthbzrc",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "modern-javascript",
        title: "JavaScript Moderno: Guía para Dominar el Lenguaje",
        institution: "DevTalles",
        date: "Agosto 2023",
        description:
          "Curso completado sobre JavaScript moderno, cubriendo características de ES6+, programación asíncrona y mejores prácticas.",
        link: "https://cursos.devtalles.com/certificates/jyflbutxb0",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
    ],
  },
  {
    id: "web-security",
    name: "Seguridad Web",
    items: [
      {
        id: "api-pentest",
        title: "Pruebas de Penetración de APIs",
        institution: "APISEC",
        date: "Mayo 2024",
        description:
          "Curso completado sobre pruebas de penetración de APIs, enfocado en identificar y explotar vulnerabilidades en APIs web usando el OWASP API Security Top 10 2023.",
        link: "https://www.credly.com/badges/b845b494-cb64-4434-8cec-9e24e696c310/public_url",
        logo: "/src/assets/images/certs/apisec.webp",
      },
    ],
  },
  {
    id: "software-foundations",
    name: "Fundamentos de Software",
    items: [
      {
        id: "solid-clean-code",
        title: "Principios SOLID y Código Limpio",
        institution: "DevTalles",
        date: "Abril 2024",
        description:
          "Curso completado sobre principios SOLID y prácticas de Código Limpio, mejorando el diseño y la mantenibilidad del software.",
        link: "https://cursos.devtalles.com/certificates/fbyc1og4td",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "software-foundations-escuelait",
        title: "Fundamentos de Software",
        institution: "EscuelaIT",
        date: "Agosto 2023",
        description:
          "Curso completado sobre fundamentos de software, cubriendo conceptos clave en el desarrollo de software, incluyendo patrones de diseño, arquitectura y mejores prácticas.",
        link: "https://escuela.it/certificado/CERT-6bUoExVq",
        logo: "/src/assets/images/certs/escuelait.webp",
      },
      {
        id: "java-escuelait",
        title: "Programación con Java",
        institution: "EscuelaIT",
        date: "Julio 2023",
        description:
          "Curso completado sobre programación en Java, enfocado en principios de programación orientada a objetos, estructuras de datos y algoritmos.",
        link: "https://escuela.it/certificado/CERT-neGp23aM",
        logo: "/src/assets/images/certs/escuelait.webp",
      },
      {
        id: "git-coursera",
        title: "Control de Versiones con Git",
        institution: "Coursera - Atlassian",
        date: "Enero 2023",
        description:
          "Curso completado sobre control de versiones usando Git, cubriendo flujos de trabajo de ramificación, fusión y colaboración.",
        link: "https://coursera.org/share/b90c858376ed4333bb46c751295dcd67",
        logo: "/src/assets/images/certs/coursera.webp",
      },
      {
        id: "diff-equations",
        title: "Ecuaciones Diferenciales para Ingenieros",
        institution: "Coursera - The Hong Kong University",
        date: "Diciembre 2022",
        description:
          "Curso completado sobre ecuaciones diferenciales, enfocado en aplicaciones en ingeniería y tecnología.",
        link: "https://coursera.org/share/b2dd83ae991c55dc66cf59fee04730a4",
        logo: "/src/assets/images/certs/coursera.webp",
      },
    ],
  },
  {
    id: "networks",
    name: "Redes",
    items: [
      {
        id: "ccna-enterprise",
        title: "CCNA: Redes Empresariales, Seguridad y Automatización",
        institution: "Cisco",
        date: "Enero 2024",
        description:
          "Curso completado de CCNA Enterprise Networking, Security, and Automation, cubriendo conceptos avanzados de redes y prácticas de seguridad.",
        link: "https://www.credly.com/badges/5850eb71-fb55-4692-b3d1-4402a12887d5/public_url",
        logo: "/src/assets/images/certs/cisco.webp",
      },
      {
        id: "ccna-switching",
        title: "CCNA: Conmutación, Enrutamiento y Fundamentos Inalámbricos",
        institution: "Cisco",
        date: "Julio 2023",
        description:
          "Curso completado de CCNA Switching, Routing, and Wireless Essentials, enfocado en diseño, configuración y resolución de problemas de redes.",
        link: "https://www.credly.com/badges/30da6658-bb81-470e-ba01-fe922d220168/public_url",
        logo: "/src/assets/images/certs/cisco.webp",
      },
      {
        id: "ccna-intro",
        title: "CCNA: Introducción a Redes",
        institution: "Cisco",
        date: "Enero 2023",
        description:
          "Curso completado de CCNA Introduction to Networks, cubriendo fundamentos de redes, direccionamiento IP y seguridad básica de redes.",
        link: "https://www.credly.com/badges/7828169a-a251-4156-9cc4-6badc6c3799b/public_url",
        logo: "/src/assets/images/certs/cisco.webp",
      },
    ],
  },
  {
    id: "academic-distinctions",
    name: "Distinciones Académicas",
    items: [
      {
        id: "excellent-student",
        title: "Reconocimiento al Estudiante Excelente",
        institution: "Último Año de Secundaria",
        date: "Diciembre 2018",
        description:
          "Reconocimiento otorgado como estudiante excelente por rendimiento académico sobresaliente durante mi último año de secundaria.",
        link: "https://drive.google.com/file/d/1ijJqIJjJ7dsUUxPuLJD1nCyyYeaErVRa/view",
        logo: "/src/assets/images/certs/award.webp",
      },
    ],
  },
  {
    id: "linguistics",
    name: "Lingüística",
    items: [
      {
        id: "efset-b2",
        title: "Certificado de Inglés EFSET B2 Intermedio Alto",
        institution: "EF Standard English Test",
        date: "Noviembre 2023",
        description:
          "Nivel B2 Intermedio Alto alcanzado en competencia de inglés, demostrando la capacidad de comunicarse efectivamente en entornos profesionales.",
        link: "https://www.efset.org/cert/eHmQk3",
        logo: "/src/assets/images/certs/efset.webp",
      },
    ],
  },
  {
    id: "methodologies",
    name: "Metodologías",
    items: [
      {
        id: "agile-jira",
        title: "Agile con Atlassian Jira",
        institution: "Coursera - Atlassian",
        date: "Julio 2023",
        description:
          "Curso completado sobre metodologías ágiles usando Atlassian Jira, enfocado en la gestión de proyectos y colaboración en equipo.",
        link: "https://coursera.org/share/b97617897c0dc270bad0c9d1fcb34c37",
        logo: "/src/assets/images/certs/coursera.webp",
      },
    ],
  },
];

export default certifications;
