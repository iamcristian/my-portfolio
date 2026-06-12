import type { UsesCategory } from "../../../types";

export const uses: UsesCategory[] = [
  {
    id: "hardware",
    name: "ハードウェア & ワークスペース",
    items: [
      {
        name: "ASUS TUF Dash F15",
        description:
          "メインの開発用ラップトップ。第11世代 Intel Core i5、16GB RAM、NVIDIA RTX 3050搭載で、日常の開発に十分なパワーと安定性を発揮します。",
      },
      {
        name: 'ASUS 27" IPSモニター',
        description:
          "27インチIPSパネル。正確な色再現と鮮明なテキスト表示で、長時間のコーディングやデザイン作業を快適にサポートします。",
      },
      {
        name: "Redragon Kumara",
        description:
          "タクタイルスイッチを採用したコンパクトなメカニカルキーボード。堅牢な造りと赤色LEDバックライトで、すっきりとしたデスク環境を実現しています。",
      },
    ],
  },
  {
    id: "software",
    name: "ソフトウェア & ツール",
    items: [
      {
        name: "Visual Studio Code",
        description:
          "メインのコードエディタ。TypeScript、Astro、Web開発に特化した拡張機能とテーマで高度にカスタマイズしています。",
      },
      {
        name: "Antigravity & Claude Code",
        description:
          "ワークフローに直接統合されたAIコーディングアシスタント。ペアプログラミング、コード生成、インテリジェントなリファクタリングを支援します。",
      },
      {
        name: "Warp ターミナル",
        description:
          "GPUアクセラレーション対応のモダンなターミナル。AIコマンド検索とコラボレーション機能により、CLI作業を大幅に効率化します。",
      },
      {
        name: "Obsidian",
        description:
          "ツェッテルカステン方式を採用した個人ナレッジマネジメントツール。すべてのメモ、アイデア、リサーチが相互リンクされたグラフとして蓄積されています。",
      },
    ],
  },
  {
    id: "office",
    name: "オフィス環境",
    items: [
      {
        name: "特注の木製デスク",
        description:
          "地元産のパイン材を使用してカスタムメイドされた、配線整理機能付きの広々としたデスク。",
      },
      {
        name: "エルゴノミクスオフィスチェア",
        description:
          "調節可能なランバーサポートとアームレストを備えたハイバックのメッシュチェアで、長時間のコーディングセッションを快適に支えます。",
      },
    ],
  },
];

export default uses;
