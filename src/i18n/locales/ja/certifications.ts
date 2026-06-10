import type { CertificationCategory } from "../../../types";

export const certifications: CertificationCategory[] = [
  {
    id: "ai",
    name: "人工知能",
    items: [
      {
        id: "anthropic-ai-fluency",
        title: "AI Fluency for Small Businesses",
        institution: "Anthropic Education",
        date: "2026年6月",
        description:
          "Claudeや生成AIソリューションを活用した小規模ビジネスのワークフロー最適化に焦点を当てた、AI流暢性コースを修了。",
        link: "https://verify.skilljar.com/c/o8qcyn4zjny6",
        logo: "/src/assets/images/certs/anthropic.webp",
      },
      {
        id: "anthropic-mcp-advanced",
        title: "Model Context Protocol: Advanced Topics",
        institution: "Anthropic Education",
        date: "2026年6月",
        description:
          "カスタムMCPサーバーの構築、安全なコンテキスト共有、および高度なデータソースのLLMへの接続に焦点を当てた、Model Context Protocolコースを修了。",
        link: "https://verify.skilljar.com/c/gepbvmqygu8v",
        logo: "/src/assets/images/certs/anthropic.webp",
      },
      {
        id: "anthropic-claude-code",
        title: "Claude Code in Action",
        institution: "Anthropic Education",
        date: "2026年5月",
        description:
          "コード編集、ターミナルコマンド、および自動開発タスクのためのAnthropicのエージェントCLIツールの活用に焦点を当てた、Claude Codeコースを修了。",
        link: "https://verify.skilljar.com/c/225fw8837oo8",
        logo: "/src/assets/images/certs/anthropic.webp",
      },
      {
        id: "devtalles-openai-react-nest",
        title: "OpenAI: Ejercicios prácticos y asistentes con React + NestJS",
        institution: "DevTalles",
        date: "2024年4月",
        description:
          "ReactフロントエンドとNestJSバックエンドを使用した実用的な生成AIアプリケーションの構築を網羅する、OpenAIアシスタント統合のコースを修了。",
        link: "https://cursos.devtalles.com/certificates/blhvfvmceg",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
    ],
  },
  {
    id: "fullstack",
    name: "フルスタック開発",
    items: [
      {
        id: "nextjs-fullstack",
        title: "Next.js: The React Framework for Production",
        institution: "DevTalles",
        date: "2024年6月",
        description:
          "SSR、SSG、フック、ベストプラクティス、およびデプロイを網羅するNext.jsの包括的なコースを修了。",
        link: "https://cursos.devtalles.com/certificates/ot6ijhzpfs",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "nestjs-microservices",
        title: "NestJS + Microservices: Scalable and Modular Applications",
        institution: "DevTalles",
        date: "2024年5月",
        description:
          "スケーラブルでモジュール化されたアプリケーションの構築に焦点を当てた、NestJSとマイクロサービスのコースを修了。",
        link: "https://cursos.devtalles.com/certificates/q52zqaoqna",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "react-pro",
        title: "React PRO: Lleva tus bases al siguiente nivel",
        institution: "DevTalles",
        date: "2024年4月",
        description:
          "デザインパターン、状態管理、カスタムフック、パフォーマンスの最適化、およびTypeScriptの統合を網羅する、高度なReactコースを修了。",
        link: "https://cursos.devtalles.com/certificates/8hfx0odnmi",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "node-rest-auth",
        title: "Node - REST Authentication with Clean Architecture",
        institution: "DevTalles",
        date: "2024年4月",
        description:
          "クリーンアーキテクチャの原則を使用したNode.js認証コースを修了し、セキュリティとメンテナンス性を向上。",
        link: "https://cursos.devtalles.com/certificates/icacthbzrc",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "modern-javascript",
        title: "Modern JavaScript: Guide to Mastering the Language",
        institution: "DevTalles",
        date: "2023年8月",
        description:
          "ES6+の機能、非同期プログラミング、およびベストプラクティスを網羅するモダンJavaScriptのコースを修了。",
        link: "https://cursos.devtalles.com/certificates/jyflbutxb0",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
    ],
  },
  {
    id: "web-security",
    name: "Webセキュリティ",
    items: [
      {
        id: "api-pentest",
        title: "API Penetration Testing",
        institution: "APISEC",
        date: "2024年5月",
        description:
          "OWASP API Security Top 10 2023を使用して、Web APIの脆弱性の特定と悪用に焦点を当てた、APIペネトレーションテストコースを修了。",
        link: "https://www.credly.com/badges/b845b494-cb64-4434-8cec-9e24e696c310/public_url",
        logo: "/src/assets/images/certs/apisec.webp",
      },
    ],
  },
  {
    id: "software-foundations",
    name: "ソフトウェア基礎",
    items: [
      {
        id: "solid-clean-code",
        title: "SOLID Principles and Clean Code",
        institution: "DevTalles",
        date: "2024年4月",
        description:
          "SOLID原則とクリーンコードの実践に関するコースを修了し、ソフトウェア設計とメンテナンス性を向上。",
        link: "https://cursos.devtalles.com/certificates/fbyc1og4td",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "software-foundations-escuelait",
        title: "Software Foundations",
        institution: "EscuelaIT",
        date: "2023年8月",
        description:
          "デザインパターン、アーキテクチャ、ベストプラクティスを含むソフトウェア開発の主要な概念を網羅する、ソフトウェア基礎コースを修了。",
        link: "https://escuela.it/certificado/CERT-6bUoExVq",
        logo: "/src/assets/images/certs/escuelait.webp",
      },
      {
        id: "java-escuelait",
        title: "Programming with Java",
        institution: "EscuelaIT",
        date: "2023年7月",
        description:
          "オブジェクト指向プログラミングの原則、データ構造、およびアルゴリズムに焦点を当てた、Javaプログラミングコースを修了。",
        link: "https://escuela.it/certificado/CERT-neGp23aM",
        logo: "/src/assets/images/certs/escuelait.webp",
      },
      {
        id: "git-coursera",
        title: "Version Control with Git",
        institution: "Coursera - Atlassian",
        date: "2023年1月",
        description:
          "ブランチ、マージ、およびコラボレーションワークフローを網羅する、Gitを使用したバージョン管理コースを修了。",
        link: "https://coursera.org/share/b90c858376ed4333bb46c751295dcd67",
        logo: "/src/assets/images/certs/coursera.webp",
      },
      {
        id: "diff-equations",
        title: "Differential Equations for Engineers",
        institution: "Coursera - The Hong Kong University",
        date: "2022年12月",
        description:
          "工学および技術への応用に焦点を当てた、微分方程式コースを修了。",
        link: "https://coursera.org/share/b2dd83ae991c55dc66cf59fee04730a4",
        logo: "/src/assets/images/certs/coursera.webp",
      },
    ],
  },
  {
    id: "networks",
    name: "ネットワーク",
    items: [
      {
        id: "ccna-enterprise",
        title: "CCNA: Enterprise Networking, Security, and Automation",
        institution: "Cisco",
        date: "2024年1月",
        description:
          "高度なネットワーク概念とセキュリティ実践を網羅する、CCNA Enterprise Networking, Security, and Automationコースを修了。",
        link: "https://www.credly.com/badges/5850eb71-fb55-4692-b3d1-4402a12887d5/public_url",
        logo: "/src/assets/images/certs/cisco.webp",
      },
      {
        id: "ccna-switching",
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        institution: "Cisco",
        date: "2023年7月",
        description:
          "ネットワーク設計、構成、およびトラブルシューティングに焦点を当てた、CCNA Switching, Routing, and Wireless Essentialsコースを修了。",
        link: "https://www.credly.com/badges/30da6658-bb81-470e-ba01-fe922d220168/public_url",
        logo: "/src/assets/images/certs/cisco.webp",
      },
      {
        id: "ccna-intro",
        title: "CCNA: Introduction to Networks",
        institution: "Cisco",
        date: "2023年1月",
        description:
          "ネットワークの基礎、IPアドレス指定、および基本的なネットワークセキュリティを網羅する、CCNA Introduction to Networksコースを修了。",
        link: "https://www.credly.com/badges/7828169a-a251-4156-9cc4-6badc6c3799b/public_url",
        logo: "/src/assets/images/certs/cisco.webp",
      },
    ],
  },
  {
    id: "academic-distinctions",
    name: "学術的表彰",
    items: [
      {
        id: "excellent-student",
        title: "優秀生徒表彰",
        institution: "高校最終学年",
        date: "2023年12月",
        description:
          "高校の最終学年における卓越した学業成績を称えられ、優秀生徒として表彰されました。",
        link: "https://drive.google.com/file/d/1ijJqIJjJ7dsUUxPuLJD1nCyyYeaErVRa/view",
        logo: "/src/assets/images/certs/award.webp",
      },
    ],
  },
  {
    id: "linguistics",
    name: "語学",
    items: [
      {
        id: "efset-b2",
        title: "EFSET 英語認定証 B2 Upper Intermediate",
        institution: "EF Standard English Test",
        date: "2023年11月",
        description:
          "英語力においてB2（中上級）レベルを達成し、プロフェッショナルな環境で効果的にコミュニケーションできる能力を実証。",
        link: "https://www.efset.org/cert/eHmQk3",
        logo: "/src/assets/images/certs/efset.webp",
      },
    ],
  },
  {
    id: "methodologies",
    name: "開発手法",
    items: [
      {
        id: "agile-jira",
        title: "Agile with Atlassian Jira",
        institution: "Coursera - Atlassian",
        date: "2023年7月",
        description:
          "プロジェクト管理とチームコラボレーションに焦点を当てた、Atlassian Jiraを使用したアジャイル開発手法のコースを修了。",
        link: "https://coursera.org/share/b97617897c0dc270bad0c9d1fcb34c37",
        logo: "/src/assets/images/certs/coursera.webp",
      },
    ],
  },
];

export default certifications;
