import type { AcademicItem } from "../../../types";
export type { AcademicItem };

export const education: AcademicItem[] = [
  {
    id: "cambridge",
    title: "Student at Cambridge English Centre",
    institution: "Cambridge English Centre",
    date: "March 2025 – Present",
    location: "Remote",
    description:
      "Currently enrolled in advanced English studies at the Cambridge English Centre, focusing on professional and academic communication skills, exam preparation, and fluency development.",
    logo: "/src/assets/images/certs/cec.webp",
  },
  {
    id: "umss-dip",
    title: "Diplomat in Information and Technology Security",
    institution: "Escuela Universitaria de Posgrado – UMSS",
    date: "February 2024 – December 2024",
    location: "Cochabamba, Bolivia",
    description:
      "Specialized postgraduate program covering information security, cybersecurity frameworks, network defense, vulnerability assessment, ethical hacking, and security governance aligned with international standards.",
    logo: "/src/assets/images/certs/posgradoumss.webp",
    gpa: "90/100",
    link: {
      text: "Read publication (My Final Project)",
      url: "blog/my-final-project",
    },
  },
  {
    id: "umss-lic",
    title: "Bachelor of Science in Systems Engineering",
    institution: "Universidad Mayor de San Simón",
    date: "February 2019 – December 2023",
    location: "Cochabamba, Bolivia",
    description:
      "Comprehensive five-year engineering program covering software development, algorithms, data structures, databases, networks, operating systems, and software project management. Graduated with a thesis project on web-based information systems.",
    logo: "/src/assets/images/certs/umss.webp",
    gpa: "85/100",
  },
];
