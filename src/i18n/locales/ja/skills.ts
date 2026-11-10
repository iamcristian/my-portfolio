import type { SkillCategory } from "../../../types";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "開発言語",
    icon: "code",
    description:
      "アプリケーションとシステムのロジックを構築する主要なプログラミング言語",
    items: ["TypeScript", "JavaScript", "Python", "Java"],
  },
  {
    id: "frontend",
    name: "フロントエンド",
    icon: "monitor",
    description:
      "魅力的なユーザーインターフェースを構築するWeb標準・フレームワーク・ライブラリ",
    items: ["HTML", "CSS", "React", "Next.js", "Astro", "Tailwind CSS"],
  },
  {
    id: "backend",
    name: "バックエンド",
    icon: "server",
    description: "サーバーサイドの設計、REST API、およびビジネスロジック",
    items: ["Node.js", "NestJS", "FastAPI", "Django", "Express"],
  },
  {
    id: "databases",
    name: "データベース",
    icon: "database",
    description:
      "リレーショナル・時系列・インメモリ・ドキュメント型データ管理基盤",
    items: ["PostgreSQL", "TimescaleDB", "MySQL", "MongoDB", "Redis", "SQLite"],
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
  {
    id: "ai",
    name: "AI・エージェントシステム",
    icon: "sparkles",
    description: "生成AIとインテリジェントなエージェント・アーキテクチャ",
    items: [
      "Model Context Protocol (MCP)",
      "プロンプトエンジニアリング",
      "エージェント・ワークフロー",
      "Agent Skills",
    ],
  },
  {
    id: "soft-skills",
    name: "ソフトスキル",
    icon: "brain",
    description:
      "効果的なコラボレーションのための対人スキルとプロフェッショナルなマインドセット",
    items: [
      "リーダーシップ",
      "アサーティブ・コミュニケーション",
      "問題解決力",
      "適応力",
    ],
  },
];
