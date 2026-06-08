import type { CertificationCategory } from "../../../types";

export const certifications: CertificationCategory[] = [
  {
    id: "fullstack",
    name: "Full Stack Development",
    items: [
      {
        id: "nextjs-fullstack",
        title: "Next.js – The React Framework for Production",
        institution: "DevTalles",
        date: "June 2024",
        description:
          "Comprehensive course covering Next.js App Router, Server Components, Server Actions, authentication, database integration, and deployment strategies for production-grade applications.",
        link: "https://cursos.devtalles.com/certificates/nextjs",
        logo: "/images/certs/devtalles.webp",
      },
      {
        id: "nestjs-microservices",
        title: "NestJS + Microservices: Build and Deploy",
        institution: "DevTalles",
        date: "May 2024",
        description:
          "Advanced course on building scalable microservices architectures with NestJS, covering message brokers, NATS, Docker containerization, API Gateway patterns, and production deployment.",
        link: "https://cursos.devtalles.com/certificates/nestjs-microservices",
        logo: "/images/certs/devtalles.webp",
      },
      {
        id: "node-rest-auth",
        title: "Node.js REST Server with Authentication & Clean Architecture",
        institution: "DevTalles",
        date: "April 2024",
        description:
          "In-depth course on building RESTful APIs with Node.js and TypeScript, implementing JWT authentication, clean architecture patterns, repository pattern, and SOLID principles.",
        link: "https://cursos.devtalles.com/certificates/node-rest-auth",
        logo: "/images/certs/devtalles.webp",
      },
      {
        id: "modern-javascript",
        title: "Modern JavaScript – From Zero to Expert",
        institution: "DevTalles",
        date: "August 2023",
        description:
          "Comprehensive JavaScript course covering ES6+ features, async programming, DOM manipulation, design patterns, modules, testing, and modern development workflows.",
        link: "https://cursos.devtalles.com/certificates/javascript-moderno",
        logo: "/images/certs/devtalles.webp",
      },
    ],
  },
  {
    id: "software-foundations",
    name: "Software Foundations",
    items: [
      {
        id: "solid-clean-code",
        title: "SOLID Principles & Clean Code",
        institution: "DevTalles",
        date: "April 2024",
        description:
          "Course focused on writing maintainable, scalable code using SOLID principles, clean code practices, refactoring techniques, and design patterns for professional software development.",
        link: "https://cursos.devtalles.com/certificates/solid-clean-code",
        logo: "/images/certs/devtalles.webp",
      },
      {
        id: "software-foundations-escuelait",
        title: "Software Foundations",
        institution: "EscuelaIT",
        date: "August 2023",
        description:
          "Foundational course covering core software engineering concepts, programming paradigms, software architecture fundamentals, and best practices for building robust applications.",
        link: "https://escuela.it/",
        logo: "/images/certs/escuelait.webp",
      },
      {
        id: "java-escuelait",
        title: "Java Programming",
        institution: "EscuelaIT",
        date: "July 2023",
        description:
          "Comprehensive Java programming course covering OOP principles, collections framework, exception handling, generics, multithreading, and Java ecosystem tools.",
        link: "https://escuela.it/",
        logo: "/images/certs/escuelait.webp",
      },
      {
        id: "git-coursera",
        title: "Version Control with Git",
        institution: "Coursera – Atlassian",
        date: "January 2023",
        description:
          "Professional course on Git version control covering branching strategies, merge conflict resolution, rebasing, collaborative workflows, and Bitbucket/GitHub integration.",
        link: "https://www.coursera.org/account/accomplishments/verify/git-atlassian",
        logo: "/images/certs/coursera.webp",
      },
      {
        id: "diff-equations",
        title: "Differential Equations for Engineers",
        institution:
          "Coursera – Hong Kong University of Science and Technology",
        date: "December 2022",
        description:
          "Mathematical course covering ordinary differential equations, Laplace transforms, systems of equations, and numerical methods applied to engineering problems.",
        link: "https://www.coursera.org/account/accomplishments/verify/diff-equations",
        logo: "/images/certs/coursera.webp",
      },
    ],
  },
  {
    id: "linguistics",
    name: "Linguistics",
    items: [
      {
        id: "efset-b2",
        title: "EF SET English Certificate – B2 Upper Intermediate",
        institution: "EF Education First",
        date: "November 2023",
        description:
          "Standardized English proficiency test scoring at B2 (Upper Intermediate) level on the CEFR scale, demonstrating strong reading and listening comprehension skills.",
        link: "https://www.efset.org/cert/",
        logo: "/images/certs/efset.webp",
      },
    ],
  },
  {
    id: "methodologies",
    name: "Methodologies",
    items: [
      {
        id: "agile-jira",
        title: "Agile with Atlassian Jira",
        institution: "Coursera – Atlassian",
        date: "July 2023",
        description:
          "Professional course on Agile project management using Jira, covering Scrum and Kanban frameworks, sprint planning, backlog management, and team velocity tracking.",
        link: "https://www.coursera.org/account/accomplishments/verify/agile-jira",
        logo: "/images/certs/coursera.webp",
      },
    ],
  },
  {
    id: "web-security",
    name: "Web Security",
    items: [
      {
        id: "api-pentest",
        title: "API Penetration Testing",
        institution: "APIsec University",
        date: "May 2024",
        description:
          "Specialized course on API security testing covering OWASP API Top 10, authentication bypass, injection attacks, broken authorization, rate limiting, and automated security scanning tools.",
        link: "https://www.apisecuniversity.com/",
        logo: "/images/certs/apisec.webp",
      },
    ],
  },
  {
    id: "networks",
    name: "Networks",
    items: [
      {
        id: "ccna-enterprise",
        title: "CCNA: Enterprise Networking, Security, and Automation",
        institution: "Cisco Networking Academy",
        date: "January 2024",
        description:
          "Advanced Cisco certification course covering enterprise network architectures, WAN technologies, network security concepts, SDN, network automation with Python, and REST APIs.",
        link: "https://www.credly.com/badges/ccna-enterprise",
        logo: "/images/certs/cisco.webp",
      },
      {
        id: "ccna-switching",
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        institution: "Cisco Networking Academy",
        date: "July 2023",
        description:
          "Intermediate Cisco course covering VLAN configuration, inter-VLAN routing, STP, EtherChannel, DHCPv4/v6, FHRP, wireless LAN concepts, and switch security features.",
        link: "https://www.credly.com/badges/ccna-switching",
        logo: "/images/certs/cisco.webp",
      },
      {
        id: "ccna-intro",
        title: "CCNA: Introduction to Networks",
        institution: "Cisco Networking Academy",
        date: "January 2023",
        description:
          "Foundational Cisco course covering network fundamentals, Ethernet concepts, IPv4/IPv6 addressing, OSI and TCP/IP models, subnetting, and basic router/switch configuration.",
        link: "https://www.credly.com/badges/ccna-intro",
        logo: "/images/certs/cisco.webp",
      },
    ],
  },
  {
    id: "academic-distinctions",
    name: "Academic Distinctions",
    items: [
      {
        id: "excellent-student",
        title: "Excellent Student Award",
        institution: "Universidad Mayor de San Simón",
        date: "December 2023",
        description:
          "Recognition awarded for outstanding academic performance throughout the Systems Engineering program, demonstrating excellence in coursework, research, and thesis defense.",
        logo: "/images/certs/umss.webp",
      },
    ],
  },
];
export default certifications;
