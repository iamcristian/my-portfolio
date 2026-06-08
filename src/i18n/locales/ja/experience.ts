import type { ExperienceItem } from "../../../types";

export const experience: ExperienceItem[] = [
  {
    id: "backend-xpand",
    title: "バックエンド開発者",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "2024年10月 – 2025年2月",
    description:
      "NestJSとマイクロサービスアーキテクチャを使用して、スケーラブルなバックエンドサービスを設計・実装。サービス間通信のためにRabbitMQを用いたイベント駆動型システムを構築。PostgreSQLを使用したRESTful APIの開発、認証フローの実装、Dockerによるサービスのコンテナ化、自動デプロイのためのCI/CDパイプラインの保守を担当。",
    tags: ["NestJS", "PostgreSQL", "Docker", "TypeScript", "RabbitMQ"],
  },
  {
    id: "fullstack-xpand",
    title: "フルスタック開発者",
    company: "Xpand Digital",
    companyUrl: "https://xpanddigital.com/",
    date: "2024年3月 – 2024年9月",
    description:
      "Next.jsとReactをフロントエンドに使用し、サーバーサイドレンダリングと静的生成を備えたフルスタックWebアプリケーションを開発。NestJSでバックエンドAPIを構築し、PostgreSQLデータベースを管理、Tailwind CSSでインターフェースをスタイリングし、本番環境でDockerを使用したコンテナ化アプリケーションをデプロイ。",
    tags: ["Next.js", "React", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
  },
  {
    id: "thesis-umss",
    title: "ソフトウェア開発者 (卒業論文プロジェクト)",
    company: "サンシモン主要大学 (Universidad Mayor de San Simón)",
    date: "2023年2月 – 2023年12月",
    description:
      "学部卒業論文プロジェクトの一環として、Webベースの情報システムを開発。クリーンアーキテクチャの原則に従い、PythonとFlaskでバックエンドを構築し、ReactでインタラクティブなフロントエンドUIを作成、PostgreSQLでデータベーススキーマを設計。要件定義、システム設計、テスト、およびドキュメント作成を実施。",
    tags: ["Python", "Flask", "React", "PostgreSQL"],
  },
  {
    id: "intern-sorelcom",
    title: "インターンWeb開発者",
    company: "Sorelcom SRL",
    date: "2022年6月 – 2022年11月",
    description:
      "レスポンシブなWebサイトや社内ツールの構築により、Web開発プロジェクトに貢献。HTML、CSS、JavaScriptによる動的なページの開発、PHPによるサーバーサイドロジックの実装、MySQLデータベースの管理を行い、バージョン管理とアジャイル手法を用いてチームと協働。",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];
