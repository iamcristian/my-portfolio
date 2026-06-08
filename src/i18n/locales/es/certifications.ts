import type { CertificationCategory } from "../../../types";

export const certifications: CertificationCategory[] = [
  {
    id: "fullstack",
    name: "Desarrollo Full Stack",
    items: [
      {
        id: "nextjs-fullstack",
        title: "Next.js – El Framework de React para Producción",
        institution: "DevTalles",
        date: "Junio 2024",
        description:
          "Curso integral que cubre Next.js App Router, Server Components, Server Actions, autenticación, integración con bases de datos y estrategias de despliegue para aplicaciones de nivel producción.",
        link: "https://cursos.devtalles.com/certificates/nextjs",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "nestjs-microservices",
        title: "NestJS + Microservicios: Construir y Desplegar",
        institution: "DevTalles",
        date: "Mayo 2024",
        description:
          "Curso avanzado sobre construcción de arquitecturas de microservicios escalables con NestJS, cubriendo brokers de mensajes, NATS, contenerización con Docker, patrones API Gateway y despliegue a producción.",
        link: "https://cursos.devtalles.com/certificates/nestjs-microservices",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "node-rest-auth",
        title: "Servidor REST con Node.js, Autenticación y Arquitectura Limpia",
        institution: "DevTalles",
        date: "Abril 2024",
        description:
          "Curso exhaustivo sobre construcción de APIs RESTful con Node.js y TypeScript, implementando autenticación JWT, patrones de arquitectura limpia, patrón repositorio y principios SOLID.",
        link: "https://cursos.devtalles.com/certificates/node-rest-auth",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "modern-javascript",
        title: "JavaScript Moderno – De Cero a Experto",
        institution: "DevTalles",
        date: "Agosto 2023",
        description:
          "Curso integral de JavaScript cubriendo características de ES6+, programación asíncrona, manipulación del DOM, patrones de diseño, módulos, testing y flujos de trabajo de desarrollo modernos.",
        link: "https://cursos.devtalles.com/certificates/javascript-moderno",
        logo: "/src/assets/images/certs/devtalles.webp",
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
          "Curso enfocado en escribir código mantenible y escalable usando principios SOLID, prácticas de código limpio, técnicas de refactorización y patrones de diseño para desarrollo de software profesional.",
        link: "https://cursos.devtalles.com/certificates/solid-clean-code",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "software-foundations-escuelait",
        title: "Fundamentos de Software",
        institution: "EscuelaIT",
        date: "Agosto 2023",
        description:
          "Curso fundamental que cubre conceptos centrales de ingeniería de software, paradigmas de programación, fundamentos de arquitectura de software y mejores prácticas para construir aplicaciones robustas.",
        link: "https://escuela.it/",
        logo: "/src/assets/images/certs/escuelait.webp",
      },
      {
        id: "java-escuelait",
        title: "Programación en Java",
        institution: "EscuelaIT",
        date: "Julio 2023",
        description:
          "Curso integral de programación en Java que cubre principios de POO, framework de colecciones, manejo de excepciones, genéricos, multihilos y herramientas del ecosistema Java.",
        link: "https://escuela.it/",
        logo: "/src/assets/images/certs/escuelait.webp",
      },
      {
        id: "git-coursera",
        title: "Control de Versiones con Git",
        institution: "Coursera – Atlassian",
        date: "Enero 2023",
        description:
          "Curso profesional de control de versiones con Git cubriendo estrategias de ramificación, resolución de conflictos de fusión, rebasing, flujos de trabajo colaborativos e integración con Bitbucket/GitHub.",
        link: "https://www.coursera.org/account/accomplishments/verify/git-atlassian",
        logo: "/src/assets/images/certs/coursera.webp",
      },
      {
        id: "diff-equations",
        title: "Ecuaciones Diferenciales para Ingenieros",
        institution:
          "Coursera – Hong Kong University of Science and Technology",
        date: "Diciembre 2022",
        description:
          "Curso de matemáticas que cubre ecuaciones diferenciales ordinarias, transformadas de Laplace, sistemas de ecuaciones y métodos numéricos aplicados a problemas de ingeniería.",
        link: "https://www.coursera.org/account/accomplishments/verify/diff-equations",
        logo: "/src/assets/images/certs/coursera.webp",
      },
    ],
  },
  {
    id: "linguistics",
    name: "Lingüística",
    items: [
      {
        id: "efset-b2",
        title: "Certificado de Inglés EF SET – B2 Intermedio Superior",
        institution: "EF Education First",
        date: "Noviembre 2023",
        description:
          "Prueba estandarizada de dominio del inglés con puntuación de nivel B2 (Intermedio Superior) en la escala CEFR, demostrando sólidas habilidades de comprensión lectora y auditiva.",
        link: "https://www.efset.org/cert/",
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
        institution: "Coursera – Atlassian",
        date: "Julio 2023",
        description:
          "Curso profesional de gestión de proyectos ágiles usando Jira, cubriendo frameworks Scrum y Kanban, planificación de sprints, gestión de backlog y seguimiento de velocidad del equipo.",
        link: "https://www.coursera.org/account/accomplishments/verify/agile-jira",
        logo: "/src/assets/images/certs/coursera.webp",
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
        institution: "APIsec University",
        date: "Mayo 2024",
        description:
          "Curso especializado en pruebas de seguridad de APIs cubriendo OWASP API Top 10, bypass de autenticación, ataques de inyección, autorización rota, limitación de velocidad y herramientas de escaneo de seguridad automatizado.",
        link: "https://www.apisecuniversity.com/",
        logo: "/src/assets/images/certs/apisec.webp",
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
        institution: "Cisco Networking Academy",
        date: "Enero 2024",
        description:
          "Curso avanzado de certificación Cisco cubriendo arquitecturas de redes empresariales, tecnologías WAN, conceptos de seguridad de red, SDN, automatización de redes con Python y APIs REST.",
        link: "https://www.credly.com/badges/ccna-enterprise",
        logo: "/src/assets/images/certs/cisco.webp",
      },
      {
        id: "ccna-switching",
        title: "CCNA: Conmutación, Enrutamiento y Fundamentos Inalámbricos",
        institution: "Cisco Networking Academy",
        date: "Julio 2023",
        description:
          "Curso intermedio de Cisco cubriendo configuración de VLAN, enrutamiento inter-VLAN, STP, EtherChannel, DHCPv4/v6, FHRP, conceptos de LAN inalámbrica y características de seguridad de switches.",
        link: "https://www.credly.com/badges/ccna-switching",
        logo: "/src/assets/images/certs/cisco.webp",
      },
      {
        id: "ccna-intro",
        title: "CCNA: Introducción a Redes",
        institution: "Cisco Networking Academy",
        date: "Enero 2023",
        description:
          "Curso fundamental de Cisco cubriendo fundamentos de redes, conceptos de Ethernet, direccionamiento IPv4/IPv6, modelos OSI y TCP/IP, subredes y configuración básica de routers/switches.",
        link: "https://www.credly.com/badges/ccna-intro",
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
        title: "Premio al Estudiante Excelente",
        institution: "Universidad Mayor de San Simón",
        date: "Diciembre 2023",
        description:
          "Reconocimiento otorgado por desempeño académico sobresaliente durante el programa de Ingeniería de Sistemas, demostrando excelencia en cursos, investigación y defensa de tesis.",
        logo: "/src/assets/images/certs/umss.webp",
      },
    ],
  },
];

export default certifications;
