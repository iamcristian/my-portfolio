import type { AcademicItem } from "../en/education";

export const education: AcademicItem[] = [
  {
    id: "cambridge",
    title: "Schüler am Cambridge English Centre",
    institution: "Cambridge English Centre",
    date: "März 2025 – Gegenwart",
    location: "Remote",
    description:
      "Derzeit für fortgeschrittene Englischstudien am Cambridge English Centre eingeschrieben, mit den Schwerpunkten professionelle und akademische Kommunikationsfähigkeiten, Prüfungsvorbereitung und Fließend sprechen.",
    logo: "/src/assets/images/certs/cec.webp",
  },
  {
    id: "umss-dip",
    title: "Diplom in Informations- und Technologiesicherheit",
    institution: "Escuela Universitaria de Posgrado – UMSS",
    date: "Februar 2024 – Dezember 2024",
    location: "Cochabamba, Bolivien",
    description:
      "Spezialisiertes Postgraduiertenprogramm, das Informationssicherheit, Cybersicherheits-Frameworks, Netzwerkverteidigung, Schwachstellenbewertung, ethisches Hacken und Sicherheits-Governance gemäß internationalen Standards abdeckt.",
    logo: "/src/assets/images/certs/posgradoumss.webp",
    gpa: "90/100",
    link: {
      text: "Beitrag lesen (Mein Abschlussprojekt)",
      url: "blog/my-final-project",
    },
  },
  {
    id: "umss-lic",
    title: "Bachelor of Science in Systemtechnik",
    institution: "Universidad Mayor de San Simón",
    date: "Februar 2019 – Dezember 2023",
    location: "Cochabamba, Bolivien",
    description:
      "Umfassendes fünfjähriges Ingenieurstudium in den Bereichen Softwareentwicklung, Algorithmen, Datenstrukturen, Datenbanken, Netzwerke, Betriebssysteme und Softwareprojektmanagement. Abschluss mit einer Bachelorarbeit über webbasierte Informationssysteme.",
    logo: "/src/assets/images/certs/umss.webp",
    gpa: "74/100",
  },
];
