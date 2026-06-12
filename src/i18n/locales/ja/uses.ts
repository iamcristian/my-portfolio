import type { UsesCategory } from "../../../types";

export const uses: UsesCategory[] = [
  {
    id: "hardware",
    name: "ハードウェア & ワークスペース",
    items: [
      {
        name: "Lenovo Legion 5 Pro",
        description:
          "メインの開発用マシン。AMD Ryzen 7 5800H、32GB RAM、NVIDIA RTX 3070を搭載。",
      },
      {
        name: 'LG UltraGear 27"',
        description:
          "27インチIPSディスプレイ。144Hzのリフレッシュレートで、テキストの描画が鮮明かつスムーズです。",
      },
      {
        name: "Keychron K2 メカニカルキーボード",
        description:
          "Gateron G Pro Brown（茶軸）スイッチを採用したワイヤレスメカニカルキーボードで、心地よい打鍵感を実現しています。",
      },
      {
        name: "Logitech MX Master 3S",
        description:
          "精密なスクロールホイールとカスタマイズ可能なジェスチャーコントロールを備えた、人間工学に基づいたワイヤレスマウス。",
      },
    ],
  },
  {
    id: "software",
    name: "ソフトウェア & ツール",
    items: [
      {
        name: "Visual Studio Code & Claude Code",
        description:
          "メインのエディタ。TypeScript/React/NestJS向けにカスタムテーマや拡張機能を最適化しています。",
      },
      {
        name: "Windows Terminal & PowerShell",
        description:
          "タブ機能付きのモダンなコマンドライン環境。Oh My Poshを導入し、プロンプトを整理しています。",
      },
      {
        name: "Figma",
        description:
          "UIのモックアップ作成、アセット作成、レイアウトプロトタイピングに使用。",
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
