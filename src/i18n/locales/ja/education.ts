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
      "情報セキュリティ、サイバーセキュリティフレームワーク、ネットワーク防御、脆弱性評価、エシカルハッキング、国際基準に準拠したセキュリティガバナンスをカバーする専門的なポストグラデュエートプログラム。本課程の最終セキュリティ評価プロジェクトは、システム工学学士号のダブルディグリー（二重学位）卒業要件としても認定されました。",
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
      "ソフトウェア開発、アルゴリズム、データ構造、データベース、ネットワーク、オペレーティングシステム、ソフトウェアプロジェクト管理を網羅する包括的な5年間の工学プログラム。2023年12月にカリキュラムを修了し、2024年9月に大学院セキュリティ課程とのダブルディグリー制度により学位を取得。",
    logo: "/src/assets/images/certs/umss.webp",
    gpa: "74/100",
  },
];
