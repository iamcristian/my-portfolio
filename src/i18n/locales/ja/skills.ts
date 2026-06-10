import type { SkillCategory } from "../../../types";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "開発言語",
    icon: "code",
    description: "アプリケーションの基本ロジックを構築するためのプログラミング言語",
    items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "SQL", "Bash"],
  },
  {
    id: "frontend",
    name: "フロントエンド",
    icon: "monitor",
    description: "魅力的なユーザーインターフェースを構築する技術とライブラリ",
    items: ["React", "Next.js", "Astro", "Tailwind CSS", "Redux"],
  },
  {
    id: "backend",
    name: "バックエンド",
    icon: "server",
    description: "サーバーサイドの設計、REST API、およびビジネスロジック",
    items: ["Node.js", "NestJS", "Express", "Flask"],
  },
  {
    id: "databases",
    name: "データベース",
    icon: "database",
    description: "リレーショナルおよび非リレーショナルデータの管理とストレージ",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    id: "devops",
    name: "DevOps・ツール",
    icon: "terminal",
    description: "ビルド・デプロイ自動化、バージョン管理、および環境構築",
    items: ["Docker", "Git", "Linux", "CI/CD", "GitHub Actions"],
  },
  {
    id: "security",
    name: "セキュリティ",
    icon: "shield",
    description: "アプリケーション保護、脆弱性診断、およびネットワーク防御",
    items: ["OWASP", "API Security", "Penetration Testing", "Network Security"],
  },
];
