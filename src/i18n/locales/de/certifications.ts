import type { CertificationCategory } from "../en/certifications";

export const certifications: CertificationCategory[] = [
  {
    id: "fullstack",
    name: "Full-Stack-Entwicklung",
    items: [
      {
        id: "nextjs-fullstack",
        title: "Next.js – Das React-Framework für die Produktion",
        institution: "DevTalles",
        date: "Juni 2024",
        description:
          "Umfassender Kurs zu Next.js App Router, Server Components, Server Actions, Authentifizierung, Datenbankintegration und Deployment-Strategien für produktionsreife Anwendungen.",
        link: "https://cursos.devtalles.com/certificates/nextjs",
        logo: "/images/certs/devtalles.webp",
      },
      {
        id: "nestjs-microservices",
        title: "NestJS + Microservices: Erstellen und Bereitstellen",
        institution: "DevTalles",
        date: "Mai 2024",
        description:
          "Fortgeschrittener Kurs zum Aufbau skalierbarer Microservices-Architekturen mit NestJS, einschließlich Message Broker, NATS, Docker-Containerisierung, API-Gateway-Muster und Produktions-Deployment.",
        link: "https://cursos.devtalles.com/certificates/nestjs-microservices",
        logo: "/images/certs/devtalles.webp",
      },
      {
        id: "node-rest-auth",
        title: "Node.js REST-Server mit Authentifizierung & Clean Architecture",
        institution: "DevTalles",
        date: "April 2024",
        description:
          "Vertiefender Kurs zum Aufbau von RESTful-APIs mit Node.js und TypeScript, Implementierung von JWT-Authentifizierung, Clean-Architecture-Mustern, Repository-Pattern und SOLID-Prinzipien.",
        link: "https://cursos.devtalles.com/certificates/node-rest-auth",
        logo: "/images/certs/devtalles.webp",
      },
      {
        id: "modern-javascript",
        title: "Modernes JavaScript – Vom Anfänger zum Experten",
        institution: "DevTalles",
        date: "August 2023",
        description:
          "Umfassender JavaScript-Kurs zu ES6+-Features, asynchroner Programmierung, DOM-Manipulation, Entwurfsmustern, Modulen, Testing und modernen Entwicklungsworkflows.",
        link: "https://cursos.devtalles.com/certificates/javascript-moderno",
        logo: "/images/certs/devtalles.webp",
      },
    ],
  },
  {
    id: "software-foundations",
    name: "Software-Grundlagen",
    items: [
      {
        id: "solid-clean-code",
        title: "SOLID-Prinzipien & Clean Code",
        institution: "DevTalles",
        date: "April 2024",
        description:
          "Kurs mit Fokus auf wartbaren, skalierbaren Code unter Anwendung von SOLID-Prinzipien, Clean-Code-Praktiken, Refactoring-Techniken und Entwurfsmustern für professionelle Softwareentwicklung.",
        link: "https://cursos.devtalles.com/certificates/solid-clean-code",
        logo: "/images/certs/devtalles.webp",
      },
      {
        id: "software-foundations-escuelait",
        title: "Software-Grundlagen",
        institution: "EscuelaIT",
        date: "August 2023",
        description:
          "Grundlagenkurs zu Kernkonzepten der Softwaretechnik, Programmierparadigmen, Grundlagen der Softwarearchitektur und Best Practices für den Aufbau robuster Anwendungen.",
        link: "https://escuela.it/",
        logo: "/images/certs/escuelait.webp",
      },
      {
        id: "java-escuelait",
        title: "Java-Programmierung",
        institution: "EscuelaIT",
        date: "July 2023",
        description:
          "Umfassender Java-Programmierkurs zu OOP-Prinzipien, Collections-Framework, Ausnahmebehandlung, Generics, Multithreading und Java-Ökosystem-Tools.",
        link: "https://escuela.it/",
        logo: "/images/certs/escuelait.webp",
      },
      {
        id: "git-coursera",
        title: "Versionskontrolle mit Git",
        institution: "Coursera – Atlassian",
        date: "Januar 2023",
        description:
          "Professioneller Kurs zur Git-Versionskontrolle mit Branching-Strategien, Merge-Konfliktlösung, Rebasing, kollaborativen Workflows und Bitbucket/GitHub-Integration.",
        link: "https://www.coursera.org/account/accomplishments/verify/git-atlassian",
        logo: "/images/certs/coursera.webp",
      },
      {
        id: "diff-equations",
        title: "Differentialgleichungen für Ingenieure",
        institution:
          "Coursera – Hong Kong University of Science and Technology",
        date: "Dezember 2022",
        description:
          "Mathematikkurs zu gewöhnlichen Differentialgleichungen, Laplace-Transformationen, Gleichungssystemen und numerischen Methoden für ingenieurwissenschaftliche Probleme.",
        link: "https://www.coursera.org/account/accomplishments/verify/diff-equations",
        logo: "/images/certs/coursera.webp",
      },
    ],
  },
  {
    id: "linguistics",
    name: "Linguistik",
    items: [
      {
        id: "efset-b2",
        title: "EF SET Englisch-Zertifikat – B2 Obere Mittelstufe",
        institution: "EF Education First",
        date: "November 2023",
        description:
          "Standardisierter Englisch-Eignungstest mit B2-Niveau (Obere Mittelstufe) auf der GER-Skala, der starke Lese- und Hörverständnisfähigkeiten belegt.",
        link: "https://www.efset.org/cert/",
        logo: "/images/certs/efset.webp",
      },
    ],
  },
  {
    id: "methodologies",
    name: "Methoden",
    items: [
      {
        id: "agile-jira",
        title: "Agile mit Atlassian Jira",
        institution: "Coursera – Atlassian",
        date: "Juli 2023",
        description:
          "Professioneller Kurs zu agilem Projektmanagement mit Jira, einschließlich Scrum- und Kanban-Frameworks, Sprint-Planung, Backlog-Management und Team-Velocity-Tracking.",
        link: "https://www.coursera.org/account/accomplishments/verify/agile-jira",
        logo: "/images/certs/coursera.webp",
      },
    ],
  },
  {
    id: "web-security",
    name: "Web-Sicherheit",
    items: [
      {
        id: "api-pentest",
        title: "API-Penetrationstests",
        institution: "APIsec University",
        date: "Mai 2024",
        description:
          "Spezialkurs zu API-Sicherheitstests mit OWASP API Top 10, Authentifizierungs-Bypass, Injection-Angriffen, fehlerhafter Autorisierung, Rate Limiting und automatisierten Sicherheits-Scan-Tools.",
        link: "https://www.apisecuniversity.com/",
        logo: "/images/certs/apisec.webp",
      },
    ],
  },
  {
    id: "networks",
    name: "Netzwerke",
    items: [
      {
        id: "ccna-enterprise",
        title: "CCNA: Unternehmensnetzwerke, Sicherheit und Automatisierung",
        institution: "Cisco Networking Academy",
        date: "Januar 2024",
        description:
          "Fortgeschrittener Cisco-Zertifizierungskurs zu Unternehmensnetzwerk-Architekturen, WAN-Technologien, Netzwerksicherheitskonzepten, SDN, Netzwerkautomatisierung mit Python und REST-APIs.",
        link: "https://www.credly.com/badges/ccna-enterprise",
        logo: "/images/certs/cisco.webp",
      },
      {
        id: "ccna-switching",
        title: "CCNA: Switching, Routing und Wireless-Grundlagen",
        institution: "Cisco Networking Academy",
        date: "Juli 2023",
        description:
          "Cisco-Kurs für Fortgeschrittene zu VLAN-Konfiguration, Inter-VLAN-Routing, STP, EtherChannel, DHCPv4/v6, FHRP, WLAN-Konzepten und Switch-Sicherheitsfunktionen.",
        link: "https://www.credly.com/badges/ccna-switching",
        logo: "/images/certs/cisco.webp",
      },
      {
        id: "ccna-intro",
        title: "CCNA: Einführung in Netzwerke",
        institution: "Cisco Networking Academy",
        date: "Januar 2023",
        description:
          "Cisco-Grundlagenkurs zu Netzwerkfundamenten, Ethernet-Konzepten, IPv4/IPv6-Adressierung, OSI- und TCP/IP-Modellen, Subnetting und grundlegender Router-/Switch-Konfiguration.",
        link: "https://www.credly.com/badges/ccna-intro",
        logo: "/images/certs/cisco.webp",
      },
    ],
  },
  {
    id: "academic-distinctions",
    name: "Akademische Auszeichnungen",
    items: [
      {
        id: "excellent-student",
        title: "Auszeichnung als hervorragender Student",
        institution: "Universidad Mayor de San Simón",
        date: "Dezember 2023",
        description:
          "Anerkennung für herausragende akademische Leistungen im Studiengang Systemtechnik, mit Exzellenz in Studienleistungen, Forschung und Verteidigung der Abschlussarbeit.",
        logo: "/images/certs/umss.webp",
      },
    ],
  },
];

export default certifications;
