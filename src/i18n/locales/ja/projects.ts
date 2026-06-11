import type { Project } from "../en/projects";

export const projects: Project[] = [
  {
    id: "onelink",
    title: "OneLink - Personal Link-sharing Platform",
    description:
      "React、Tailwind、Express、MongoDBで構築された、個人向けのリンク共有ページを作成・共有するためのフルスタックアプリケーション。",
    tech: [
      "TypeScript",
      "React",
      "Shadcn",
      "React Query",
      "Express",
      "MongoDB",
      "JWT",
    ],
    category: "fullstack",
    github: "https://github.com/iamcristian/onelink-frontend",
    image: "/src/assets/images/projects/onelink.webp",
    featured: true,
    date: "2025-01-01",
  },
  {
    id: "explora-bolivia",
    title: "Explora Bolivia - Travel Guide App",
    description:
      "Next.jsとNestJSで構築されたボリビア의旅行ガイドウェブアプリケーション。観光名所、宿泊施設、現地文化に関する情報を提供します。",
    tech: [
      "Next.js",
      "Shadcn",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Docker",
      "Gitlab",
    ],
    category: "fullstack",
    github: "https://gitlab.com/iamcristian/explora-bolivia-frontend",
    image: "/src/assets/images/projects/explorabolivia.webp",
    featured: true,
    date: "2025-01-01",
  },
  {
    id: "maxi-basquet",
    title: "Maxi Basquet - Basketball Team Management",
    description:
      "DjangoとBootstrapで構築された、選手統計、試合スケジュール、チームランキングなどを含むバスケットボールチーム管理用のウェブアプリケーション。",
    tech: ["Django", "Python", "PostgreSQL", "Bootstrap"],
    category: "fullstack",
    github: "https://github.com/iamcristian/Torneo-Internacional-Maxi-Basquet",
    image: "/src/assets/images/projects/maxibasquet.webp",
    featured: false,
    date: "2023-01-01",
  },
  {
    id: "long-old-live",
    title: "Long Old Live+",
    description:
      "高齢者の健康増進を目的としたウェブサイトで、筋力トレーニングや脳トレなどの有益な運動やアクティビティを提供します。JavaScript、HTML、CSSで開発。",
    tech: ["JavaScript Vanilla", "HTML", "CSS", "Bootstrap", "Firebase"],
    category: "frontend",
    github: "https://github.com/borisumss/LongOldLivePlus",
    image: "/src/assets/images/projects/longoldlive.webp",
    featured: false,
    date: "2022-01-01",
  },
];
