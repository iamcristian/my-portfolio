import type { Project } from "../en/projects";

export const projects: Project[] = [
  {
    id: "nestjs-microservices-store",
    title: "NestJSマイクロサービスストア",
    description:
      "NestJSマイクロサービスアーキテクチャで構築された、本番環境向けのEコマースプラットフォーム。APIゲートウェイ、NATSメッセージブローカー、Docker、PostgreSQLを搭載。",
    tech: ["NestJS", "TypeScript", "NATS", "Docker", "PostgreSQL", "Stripe"],
    category: "backend",
    github: "https://github.com/iamcristian/nestjs-microservices-store",
    image: "/src/assets/images/projects/project-1.webp",
    featured: true,
    date: "2024-11-15",
  },
  {
    id: "portfolio-v2",
    title: "ポートフォリオ v2",
    description:
      "AstroとReactアイランドで構築された、高品質で高性能なポートフォリオWebサイト。クリーンなテーマコントロールとレスポンシブなレイアウトで、Core Web Vitals向けに最適化されています。",
    tech: ["Astro", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    category: "frontend",
    github: "https://github.com/iamcristian/portfolio-v2",
    live: "https://iamcristian.dev",
    image: "/src/assets/images/projects/project-2.webp",
    featured: true,
    date: "2024-09-01",
  },
  {
    id: "inventory-management",
    title: "在庫管理システム",
    description:
      "製品、在庫レベル、サプライヤー、取引を追跡するフルスタック在庫管理システム。インタラクティブなチャート、役割ベースの管理、PostgreSQLデータベースを搭載。",
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "TypeScript",
      "Chart.js",
    ],
    category: "fullstack",
    github: "https://github.com/iamcristian/inventory-management",
    image: "/src/assets/images/projects/project-3.webp",
    featured: true,
    date: "2024-05-10",
  },
];
