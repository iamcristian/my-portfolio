import type { AcademicItem } from "../en/education";

export const education: AcademicItem[] = [
  {
    id: "cambridge",
    title: "ケンブリッジ・イングリッシュ・センターの学生",
    institution: "Cambridge English Centre",
    date: "2025年3月 – 現在",
    location: "リモート",
    description:
      "現在、ケンブリッジ・イングリッシュ・センターで上級英語を学んでおり、ビジネスおよびアカデミックなコミュニケーションスキル、試験対策、および流暢さの向上に焦点を当てています。",
    logo: "/src/assets/images/certs/cec.webp",
  },
  {
    id: "umss-dip",
    title: "情報・技術セキュリティのディプロマ",
    institution: "Escuela Universitaria de Posgrado – UMSS",
    date: "2024年2月 – 2024年12月",
    location: "ボリビア、コチャバンバ",
    description:
      "情報セキュリティ、サイバーセキュリティフレームワーク、ネットワーク防御、脆弱性評価、エシカルハッキング、国際基準に準拠したセキュリティガバナンスをカバーする専門的なポストグラデュエートプログラム。",
    logo: "/src/assets/images/certs/posgradoumss.webp",
    gpa: "90/100",
    link: {
      text: "掲載記事を読む（最終プロジェクト）",
      url: "blog/my-final-project",
    },
  },
  {
    id: "umss-lic",
    title: "システム工学学士",
    institution: "Universidad Mayor de San Simón",
    date: "2019年2月 – 2023年12月",
    location: "ボリビア、コチャバンバ",
    description:
      "ソフトウェア開発、アルゴリズム、データ構造、データベース、ネットワーク、オペレーティングシステム、ソフトウェアプロジェクト管理を網羅する包括的な5年間の工学プログラム。Webベースの情報システムに関する卒業論文プロジェクトを完了して卒業。",
    logo: "/src/assets/images/certs/umss.webp",
    gpa: "85/100",
  },
];
