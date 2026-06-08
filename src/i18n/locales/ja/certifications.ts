import type { CertificationCategory } from "../../../types";

export const certifications: CertificationCategory[] = [
  {
    id: "fullstack",
    name: "フルスタック開発",
    items: [
      {
        id: "nextjs-fullstack",
        title: "Next.js – 本番環境向けReactフレームワーク",
        institution: "DevTalles",
        date: "2024年6月",
        description:
          "Next.js App Router、サーバーコンポーネント、サーバーアクション、認証、データベース統合、本番環境へのデプロイ戦略を網羅した包括的なコース。",
        link: "https://cursos.devtalles.com/certificates/nextjs",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "nestjs-microservices",
        title: "NestJS + マイクロサービス：構築とデプロイ",
        institution: "DevTalles",
        date: "2024年5月",
        description:
          "NestJSを使用したスケーラブルなマイクロサービスアーキテクチャの構築に関する高度なコース。メッセージブローカー、NATS、Dockerコンテナ化、APIゲートウェイパターン、本番環境へのデプロイを網羅。",
        link: "https://cursos.devtalles.com/certificates/nestjs-microservices",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "node-rest-auth",
        title: "Node.js RESTサーバー、認証とクリーンアーキテクチャ",
        institution: "DevTalles",
        date: "2024年4月",
        description:
          "Node.jsとTypeScriptを使用したRESTful API of 構築、JWT認証の実装、クリーンアーキテクチャパターン、リポジトリパターン、SOLID原則について深く掘り下げるコース。",
        link: "https://cursos.devtalles.com/certificates/node-rest-auth",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "modern-javascript",
        title: "モダンJavaScript – ゼロからエキスパートへ",
        institution: "DevTalles",
        date: "2023年8月",
        description:
          "ES6+の機能、非同期プログラミング、DOM操作、デザインパターン、モジュール、テスト、モダンな開発ワークフローを網罗した包括的なJavaScriptコース。",
        link: "https://cursos.devtalles.com/certificates/javascript-moderno",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
    ],
  },
  {
    id: "software-foundations",
    name: "ソフトウェアの基礎",
    items: [
      {
        id: "solid-clean-code",
        title: "SOLID原則とクリーンコード",
        institution: "DevTalles",
        date: "2024年4月",
        description:
          "SOLID原則, クリーンコードの実践、リファクタリング手法、プロフェッショナルなソフトウェア開発のためのデザインパターンを使用して、メンテナンスしやすくスケーラブルなコードを書くことに焦点を当てたコース。",
        link: "https://cursos.devtalles.com/certificates/solid-clean-code",
        logo: "/src/assets/images/certs/devtalles.webp",
      },
      {
        id: "software-foundations-escuelait",
        title: "ソフトウェアの基礎",
        institution: "EscuelaIT",
        date: "2023年8月",
        description:
          "ソフトウェアエンジニアリングの基本概念、プログラミングパラダイム、ソフトウェアアーキテクチャの基礎、堅牢なアプリケーションを構築するためのベストプラクティスをカバーする基礎コース。",
        link: "https://escuela.it/",
        logo: "/src/assets/images/certs/escuelait.webp",
      },
      {
        id: "java-escuelait",
        title: "Javaプログラミング",
        institution: "EscuelaIT",
        date: "2023年7月",
        description:
          "OOP原則、コレクションフレームワーク、例外処理、ジェネリクス、マルチスレッド、Javaエコシステムツールを網羅した包括的なJavaプログラミングコース。",
        link: "https://escuela.it/",
        logo: "/src/assets/images/certs/escuelait.webp",
      },
      {
        id: "git-coursera",
        title: "Gitによるバージョン管理",
        institution: "Coursera – Atlassian",
        date: "2023年1月",
        description:
          "ブランチ戦略、マージ競合の解決、リベース、共同ワークフロー、Bitbucket/GitHub統合をカバーするGitバージョン管理に関するプロフェッショナルコース。",
        link: "https://www.coursera.org/account/accomplishments/verify/git-atlassian",
        logo: "/src/assets/images/certs/coursera.webp",
      },
      {
        id: "diff-equations",
        title: "技術者のための微分方程式",
        institution:
          "Coursera – Hong Kong University of Science and Technology",
        date: "2022年12月",
        description:
          "常微分方程式、ラプラス変換、連立方程式、工学問題に応用される数値手法をカバーする数学コース。",
        link: "https://www.coursera.org/account/accomplishments/verify/diff-equations",
        logo: "/src/assets/images/certs/coursera.webp",
      },
    ],
  },
  {
    id: "linguistics",
    name: "言語学",
    items: [
      {
        id: "efset-b2",
        title: "EF SET英語認定証 – B2 Upper Intermediate",
        institution: "EF Education First",
        date: "2023年11月",
        description:
          "CEFR尺度でB2（中上級）レベルをスコアした標準的な英語能力テストで、高い読解力とリスニング力を証明します。",
        link: "https://www.efset.org/cert/",
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
        title: "Atlassian Jiraによるアジャイル",
        institution: "Coursera – Atlassian",
        date: "2023年7月",
        description:
          "ScrumとKanbanフレームワーク、スプリント計画、バックログ管理、チームベロシティ追跡をカバーする、Jiraを使用したアジャイルプロジェクト管理に関するプロフェッショナルコース。",
        link: "https://www.coursera.org/account/accomplishments/verify/agile-jira",
        logo: "/src/assets/images/certs/coursera.webp",
      },
    ],
  },
  {
    id: "web-security",
    name: "Webセキュリティ",
    items: [
      {
        id: "api-pentest",
        title: "APIペネトレーションテスト",
        institution: "APIsec University",
        date: "2024年5月",
        description:
          "OWASP API Top 10、認証バイパス、インジェクション攻撃、認可の不備、レート制限、自動セキュリティスキャンツールをカバーするAPIセキュリティテストに関する専門コース。",
        link: "https://www.apisecuniversity.com/",
        logo: "/src/assets/images/certs/apisec.webp",
      },
    ],
  },
  {
    id: "networks",
    name: "ネットワーク",
    items: [
      {
        id: "ccna-enterprise",
        title:
          "CCNA：エンタープライズ ネットワーキング、セキュリティ、および自動化",
        institution: "Cisco Networking Academy",
        date: "2024年1月",
        description:
          "エンタープライズネットワークアーキテクチャ、WANテクノロジー、ネットワークセキュリティの概念、SDN, Pythonによるネットワーク自動化、REST APIをカバーする高度なCisco認定コース。",
        link: "https://www.credly.com/badges/ccna-enterprise",
        logo: "/src/assets/images/certs/cisco.webp",
      },
      {
        id: "ccna-switching",
        title: "CCNA：スイッチング、ルーティング、およびワイヤレスの基礎",
        institution: "Cisco Networking Academy",
        date: "2023年7月",
        description:
          "VLAN構成, VLAN間ルーティング、STP、EtherChannel、DHCPv4/v6, FHRP、ワイヤレスLANの概念、スイッチセキュリティ機能をカバーするCiscoの中級コース。",
        link: "https://www.credly.com/badges/ccna-switching",
        logo: "/src/assets/images/certs/cisco.webp",
      },
      {
        id: "ccna-intro",
        title: "CCNA：ネットワークへの導入",
        institution: "Cisco Networking Academy",
        date: "2023年1月",
        description:
          "ネットワークの基礎, Ethernetの概念、IPv4/IPv6アドレッシング、OSIおよびTCP/IPモデル, サブネット化、ルーター/スイッチの基本構成をカバーするCiscoの基礎コース。",
        link: "https://www.credly.com/badges/ccna-intro",
        logo: "/src/assets/images/certs/cisco.webp",
      },
    ],
  },
  {
    id: "academic-distinctions",
    name: "学術的優秀賞",
    items: [
      {
        id: "excellent-student",
        title: "最優秀学生賞",
        institution: "Universidad Mayor de San Simón",
        date: "2023年12月",
        description:
          "システムエンジニアリングプログラム全体を通じて優れた学業成績を収め、講義、研究、論文発表における優秀さを実証したことに対して授与された賞。",
        logo: "/src/assets/images/certs/umss.webp",
      },
    ],
  },
];

export default certifications;
