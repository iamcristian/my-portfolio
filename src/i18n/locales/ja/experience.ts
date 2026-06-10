import type { ExperienceItem } from "../../../types";

export const experience: ExperienceItem[] = [
  {
    id: "backend-xpand",
    title: "バックエンド開発者",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "2024年10月 – 2025年2月",
    description:
      "NestJSとマイクロサービスアーキテクチャを使用して、スケーラブルなバックエンドサービスを設計・実装。",
    responsibilities: [
      "サービス間通信のためにRabbitMQを用いたイベント駆動型システムを構築",
      "PostgreSQLと統合された高性能かつ安全なRESTful APIの開発",
      "堅牢なユーザー認証および認可フローの実装",
      "Dockerによるサービスのコンテナ化、および自動デプロイのためのCI/CDパイプラインの保守",
    ],
    tags: ["NestJS", "PostgreSQL", "Docker", "TypeScript", "RabbitMQ"],
  },
  {
    id: "fullstack-xpand",
    title: "フルスタック開発者",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "2024年3月 – 2024年9月",
    description:
      "フロントエンドにNext.jsとReactを使用し、バックエンドサービスにNestJSを使用したフルスタックWebアプリケーションの開発。",
    responsibilities: [
      "Next.js (SSR/SSG) とReactを使用した、レスポンシブで使いやすいフロントエンドUIの構築",
      "NestJSを使用した堅牢なバックエンドAPIの設計・実装",
      "PostgreSQLデータベースの管理および最適なスキーマ設計",
      "Tailwind CSSによるインターフェースのデザイン、およびDockerを使用したコンテナ化サービスのデプロイ",
    ],
    tags: ["Next.js", "React", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
  },
  {
    id: "thesis-umss",
    title: "ソフトウェア開発者 (卒業論文プロジェクト)",
    company: "サンシモン主要大学 (Universidad Mayor de San Simón)",
    date: "2023年2月 – 2023年12月",
    description:
      "学部卒業論文プロジェクトの一環として、Webベースの情報システムを開発。",
    responsibilities: [
      "クリーンアーキテクチャの原則に従い、PythonとFlaskでバックエンドAPIを構築",
      "Reactを使用したインタラクティブで動的なユーザーインターフェースの作成",
      "PostgreSQLでのデータベーススキーマの設計および最適化",
      "包括的な要件定義、テスト、およびシステムドキュメント作成の実施",
    ],
    tags: ["Python", "Flask", "React", "PostgreSQL"],
  },
  {
    id: "intern-sorelcom",
    title: "インターンWeb開発者",
    company: "Sorelcom SRL",
    date: "2022年6月 – 2022年11月",
    description:
      "レスポンシブなWebサイトや社内ツールの構築により、Web開発プロジェクトに貢献。",
    responsibilities: [
      "HTML、CSS、JavaScriptを使用した動的かつレスポンシブなページの開発",
      "PHPを使用したサーバーサイドのビジネスロジックおよびAPIの実装",
      "社内Webツール向けにMySQLデータベースの管理とクエリ実行",
      "バージョン管理（Git）とアジャイル開発手法を用いたチームメンバーとの協働",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];
