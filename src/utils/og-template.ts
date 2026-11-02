import sharp from "sharp";
import path from "node:path";

export type Lang = "en" | "es" | "de" | "ja" | "ru";

export interface LocaleDict {
  helloIm: string;
  role: string;
  essayAnalysis: string;
  caseStudy: string;
  archiveReading: string;
  showcaseWork: string;
  setupTooling: string;
  curatedRoadmap: string;
  discoveryIndex: string;
  orbitalResonance: string;
  activeStatus: string;
  editorialTheme: string;
  curatedStatus: string;
  simulationStation: string;
  liveStatus: string;
  archiveIndex: string;
  indexedStatus: string;
  lagrangeTitle: string;
  lagrangeDesc: string;
  system: string;
  balanced: string;
  cohesion: string;
  optimal: string;
  focus: string;
  absolute: string;
  sysRev: string;
  statusVerified: string;
  categoryLabel: string;
  polymathArchive: string;
  rendererLabel: string;
  targetLabel: string;
  tags: Record<string, string>;
}

export const I18N_OG: Record<Lang, LocaleDict> = {
  en: {
    helloIm: "• HELLO, I'M",
    role: "Software & Systems Engineer",
    essayAnalysis: "ESSAY & ANALYSIS",
    caseStudy: "CASE STUDY",
    archiveReading: "READING ARCHIVE",
    showcaseWork: "SHOWCASE",
    setupTooling: "SETUP",
    curatedRoadmap: "CURATED PATHS",
    discoveryIndex: "DISCOVERY",
    orbitalResonance: "ORBITAL.RESONANCE",
    activeStatus: "ACTIVE",
    editorialTheme: "EDITORIAL.THEME",
    curatedStatus: "CURATED",
    simulationStation: "SIMULATION.WORKSTATION",
    liveStatus: "LIVE",
    archiveIndex: "ARCHIVE.INDEX",
    indexedStatus: "INDEXED",
    lagrangeTitle: "LAGRANGE_EQUILIBRIUM",
    lagrangeDesc: "The fundamental forces balancing my engineering",
    system: "SYSTEM",
    balanced: "BALANCED",
    cohesion: "COHESION",
    optimal: "OPTIMAL",
    focus: "FOCUS",
    absolute: "ABSOLUTE",
    sysRev: "SYS.REV",
    statusVerified: "STATUS: VERIFIED",
    categoryLabel: "CATEGORY",
    polymathArchive: "POLYMATH ARCHIVE // CRISTIAN ARANDO",
    rendererLabel: "RENDERER",
    targetLabel: "TARGET",
    tags: {
      philosophy: "Philosophy",
      literature: "Literature",
      dostoevsky: "Dostoevsky",
      logic: "Logic",
      fallacies: "Fallacies",
      thinking: "Thinking",
      security: "Security",
      cybersecurity: "Cybersecurity",
      architecture: "Architecture",
      systems: "Systems",
      modularity: "Modularity",
      classics: "Classics",
      bookshelf: "Bookshelf",
      "reading list": "Reading List",
      pessimism: "Pessimism",
      stoicism: "Stoicism",
      existentialism: "Existentialism",
      heuristics: "Heuristics",
      owasp: "OWASP",
      "penetration testing": "Penetration Testing",
    },
  },
  es: {
    helloIm: "• HOLA, SOY",
    role: "Ingeniero de Software y Sistemas",
    essayAnalysis: "ENSAYO Y ANÁLISIS",
    caseStudy: "ESTUDIO DE CASO",
    archiveReading: "ARCHIVO DE LECTURAS",
    showcaseWork: "PROYECTOS",
    setupTooling: "ENTORNO",
    curatedRoadmap: "RUTAS DE APRENDIZAJE",
    discoveryIndex: "BÚSQUEDA",
    orbitalResonance: "RESONANCIA.ORBITAL",
    activeStatus: "ACTIVO",
    editorialTheme: "TEMA.EDITORIAL",
    curatedStatus: "DESTACADO",
    simulationStation: "ESTACIÓN.SIMULACIÓN",
    liveStatus: "EN VIVO",
    archiveIndex: "ÍNDICE.ARCHIVO",
    indexedStatus: "INDEXADO",
    lagrangeTitle: "EQUILIBRIO_DE_LAGRANGE",
    lagrangeDesc: "Las fuerzas fundamentales que equilibran mi ingeniería",
    system: "SISTEMA",
    balanced: "EQUILIBRADO",
    cohesion: "COHESIÓN",
    optimal: "ÓPTIMA",
    focus: "ENFOQUE",
    absolute: "ABSOLUTO",
    sysRev: "REV.SIS",
    statusVerified: "ESTADO: VERIFICADO",
    categoryLabel: "CATEGORÍA",
    polymathArchive: "ARCHIVO POLÍMATA // CRISTIAN ARANDO",
    rendererLabel: "MOTOR",
    targetLabel: "OBJETIVO",
    tags: {
      philosophy: "Filosofía",
      literature: "Literatura",
      dostoevsky: "Dostoievski",
      logic: "Lógica",
      fallacies: "Falacias",
      thinking: "Pensamiento",
      security: "Seguridad",
      cybersecurity: "Ciberseguridad",
      architecture: "Arquitectura",
      systems: "Sistemas",
      modularity: "Modularidad",
      classics: "Clásicos",
      bookshelf: "Biblioteca",
      "reading list": "Lista de Lectura",
      pessimism: "Pesimismo",
      stoicism: "Estoicismo",
      existentialism: "Existencialismo",
      heuristics: "Heurística",
      owasp: "OWASP",
      "penetration testing": "Hacking Ético",
    },
  },
  ru: {
    helloIm: "• ПРИВЕТ, Я",
    role: "Инженер программных систем",
    essayAnalysis: "ЭССЕ И АНАЛИЗ",
    caseStudy: "ПРАКТИЧЕСКИЙ КЕЙС",
    archiveReading: "АРХИВ ЧТЕНИЯ",
    showcaseWork: "ПРОЕКТЫ",
    setupTooling: "ОКРУЖЕНИЕ",
    curatedRoadmap: "МАРШРУТЫ ОБУЧЕНИЯ",
    discoveryIndex: "ПОИСК",
    orbitalResonance: "ОРБИТАЛЬНЫЙ.РЕЗОНАНС",
    activeStatus: "АКТИВЕН",
    editorialTheme: "ТЕМА.СТАТЬИ",
    curatedStatus: "ИЗБРАННОЕ",
    simulationStation: "РАБОЧАЯ.СТАНЦИЯ",
    liveStatus: "АКТИВНО",
    archiveIndex: "ИНДЕКС.АРХИВА",
    indexedStatus: "ИНДЕКСИРОВАНО",
    lagrangeTitle: "РАВНОВЕСИЕ_ЛАГРАНЖА",
    lagrangeDesc: "Фундаментальные силы, балансирующие мою инженерию",
    system: "СИСТЕМА",
    balanced: "СБАЛАНСИРОВАНА",
    cohesion: "КОГЕЗИЯ",
    optimal: "ОПТИМАЛЬНА",
    focus: "ФОКУС",
    absolute: "АБСОЛЮТНЫЙ",
    sysRev: "ВЕРСИЯ",
    statusVerified: "СТАТУС: ПРОВЕРЕНО",
    categoryLabel: "КАТЕГОРИЯ",
    polymathArchive: "АРХИВ ПОЛИМАТА // КРИСТИАН АРАНДО",
    rendererLabel: "РЕНДЕР",
    targetLabel: "ЦЕЛЬ",
    tags: {
      philosophy: "Философия",
      literature: "Литература",
      dostoevsky: "Достоевский",
      logic: "Логика",
      fallacies: "Заблуждения",
      thinking: "Мышление",
      security: "Безопасность",
      cybersecurity: "Кибербезопасность",
      architecture: "Архитектура",
      systems: "Системы",
      modularity: "Модульность",
      classics: "Классика",
      bookshelf: "Книжная полка",
      "reading list": "Список чтения",
      pessimism: "Пессимизм",
      stoicism: "Стоицизм",
      existentialism: "Экзистенциализм",
      heuristics: "Эвристика",
      owasp: "OWASP",
      "penetration testing": "Пентестинг",
    },
  },
  de: {
    helloIm: "• HALLO, ICH BIN",
    role: "Software- & Systemingenieur",
    essayAnalysis: "ESSAY & ANALYSE",
    caseStudy: "FALLSTUDIE",
    archiveReading: "LESEARCHIV",
    showcaseWork: "PROJEKTE",
    setupTooling: "SETUP",
    curatedRoadmap: "LERNPFADE",
    discoveryIndex: "SUCHE",
    orbitalResonance: "ORBITALE.RESONANZ",
    activeStatus: "AKTIV",
    editorialTheme: "EDITORIAL.THEMA",
    curatedStatus: "KURATIERT",
    simulationStation: "SIMULATIONS.STATION",
    liveStatus: "LIVE",
    archiveIndex: "ARCHIV.INDEX",
    indexedStatus: "INDEXIERT",
    lagrangeTitle: "LAGRANGE_GLEICHGEWICHT",
    lagrangeDesc: "Die fundamentalen Kräfte meines Engineerings",
    system: "SYSTEM",
    balanced: "AUSGEGLICHEN",
    cohesion: "KOHÄSION",
    optimal: "OPTIMAL",
    focus: "FOKUS",
    absolute: "ABSOLUT",
    sysRev: "SYS.REV",
    statusVerified: "STATUS: VERIFIZIERT",
    categoryLabel: "KATEGORIE",
    polymathArchive: "POLYMATH ARCHIV // CRISTIAN ARANDO",
    rendererLabel: "RENDERER",
    targetLabel: "ZIEL",
    tags: {
      philosophy: "Philosophie",
      literature: "Literatur",
      dostoevsky: "Dostojewski",
      logic: "Logik",
      fallacies: "Trugschlüsse",
      thinking: "Denken",
      security: "Sicherheit",
      cybersecurity: "Cybersicherheit",
      architecture: "Architektur",
      systems: "Systeme",
      modularity: "Modularität",
      classics: "Klassiker",
      bookshelf: "Bücherregal",
      "reading list": "Leseliste",
      pessimism: "Pessimismus",
      stoicism: "Stoizismus",
      existentialism: "Existenzialismus",
      heuristics: "Heuristik",
      owasp: "OWASP",
      "penetration testing": "Penetrationstest",
    },
  },
  ja: {
    helloIm: "• こんにちは、",
    role: "ソフトウェア＆システムエンジニア",
    essayAnalysis: "考察・エッセイ",
    caseStudy: "事例研究",
    archiveReading: "読書アーカイブ",
    showcaseWork: "開発実績",
    setupTooling: "開発環境",
    curatedRoadmap: "学習ロードマップ",
    discoveryIndex: "全文検索",
    orbitalResonance: "軌道共鳴",
    activeStatus: "稼働中",
    editorialTheme: "テーマ概要",
    curatedStatus: "厳選",
    simulationStation: "シミュレーション環境",
    liveStatus: "実行中",
    archiveIndex: "アーカイブ索引",
    indexedStatus: "登録済",
    lagrangeTitle: "ラグランジュ平衡",
    lagrangeDesc: "エンジニアリングを調和させる基礎的均衡",
    system: "システム",
    balanced: "均衡",
    cohesion: "凝集性",
    optimal: "最適",
    focus: "集中",
    absolute: "絶対",
    sysRev: "改訂版",
    statusVerified: "検証状況: 完了",
    categoryLabel: "分類",
    polymathArchive: "ポリマス・アーカイブ // クリスティアン・アランド",
    rendererLabel: "描画",
    targetLabel: "対象",
    tags: {
      philosophy: "哲学",
      literature: "文学",
      dostoevsky: "ドストエフスキー",
      logic: "論理学",
      fallacies: "誤謬",
      thinking: "思考法",
      security: "セキュリティ",
      cybersecurity: "サイバーセキュリティ",
      architecture: "アーキテクチャ",
      systems: "システム設計",
      modularity: "モジュール性",
      classics: "古典文学",
      bookshelf: "本棚",
      "reading list": "読書リスト",
      pessimism: "悲観主義",
      stoicism: "ストア派",
      existentialism: "実存主義",
      heuristics: "ヒューリスティクス",
      owasp: "OWASP",
      "penetration testing": "脆弱性診断",
    },
  },
};

export interface OGCardData {
  type: "home" | "blog" | "project" | "hub";
  lang: Lang;
  title: string;
  subtitle?: string;
  kickerTopic?: string;
  tags?: string[];
  date?: string;
  readTime?: string;
  imagePath?: string;
  avatarPath?: string;
}

/** Deterministic pseudo-random number generator for stable starfields */
function generateStars(count = 48, seed = 1337): string {
  let s = seed;
  const prng = () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const stars: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.round(prng() * 1180 + 10);
    const y = Math.round(prng() * 610 + 10);
    const r = (prng() * 1.5 + 0.6).toFixed(1);
    const opacity = (prng() * 0.5 + 0.35).toFixed(2);
    stars.push(
      `<circle cx="${x}" cy="${y}" r="${r}" fill="#e2e8f0" fill-opacity="${opacity}"/>`,
    );
  }
  return stars.join("\n    ");
}

function escapeXml(unsafe = ""): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getVisualWidth(str: string): number {
  let width = 0;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (
      (code >= 0x2e80 && code <= 0x9fff) ||
      (code >= 0x3040 && code <= 0x30ff) ||
      (code >= 0xac00 && code <= 0xd7af) ||
      (code >= 0xff01 && code <= 0xff60)
    ) {
      width += 1.85;
    } else {
      width += 1;
    }
  }
  return width;
}

/**
 * Intelligent text wrapping that packs lines neatly and appends '...'
 * if remaining text exceeds maximum allowed lines.
 */
function wrapText(
  text: string,
  maxVisualWidth: number,
  maxLines = 3,
): string[] {
  if (!text) return [];

  if (text.includes(" ")) {
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let currentLine = "";

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const candidate = currentLine ? `${currentLine} ${word}` : word;

      if (getVisualWidth(candidate) <= maxVisualWidth) {
        currentLine = candidate;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;

        if (lines.length === maxLines - 1) {
          // On the final allowed line: pack as many words as fit, then append '...'
          for (let j = i + 1; j < words.length; j++) {
            const nextCand = `${currentLine} ${words[j]}`;
            if (getVisualWidth(nextCand) <= maxVisualWidth - 3) {
              currentLine = nextCand;
            } else {
              currentLine += "...";
              break;
            }
          }
          break;
        }
      }
    }

    if (currentLine && lines.length < maxLines) {
      lines.push(currentLine);
    }

    return lines;
  }

  // Continuous script (Japanese)
  const lines: string[] = [];
  let current = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (getVisualWidth(current + char) > maxVisualWidth) {
      lines.push(current);
      current = char;
      if (lines.length >= maxLines - 1) {
        const remaining = text.slice(i);
        if (remaining.length > 2) {
          current =
            remaining.slice(0, Math.floor(maxVisualWidth / 2) - 2) + "...";
        }
        break;
      }
    } else {
      current += char;
    }
  }
  if (current && lines.length < maxLines) {
    lines.push(current);
  }
  return lines;
}

export function generateOGSvg(data: OGCardData): string {
  const {
    type,
    lang,
    title,
    subtitle = "",
    kickerTopic,
    tags = [],
    date,
    readTime,
    imagePath,
  } = data;

  const loc = I18N_OG[lang] || I18N_OG.en;

  // Determine kicker based on type and localized strings
  let kicker = loc.helloIm;
  if (type === "blog") {
    const topic =
      kickerTopic || loc.tags[tags[0]?.toLowerCase()] || "PHILOSOPHY";
    kicker = `• ${loc.essayAnalysis} // ${topic.toUpperCase()}`;
  } else if (type === "project") {
    const topic = kickerTopic || tags[0]?.toUpperCase() || "SYSTEM";
    kicker = `• ${loc.caseStudy} // ${topic.toUpperCase()}`;
  } else if (type === "hub") {
    const topic = kickerTopic || loc.showcaseWork;
    kicker = `• ${loc.archiveReading} // ${topic.toUpperCase()}`;
  }

  const escapedTitleLines = wrapText(title, 34, 3).map(escapeXml);
  const escapedSubtitleLines = wrapText(subtitle, 58, 3).map(escapeXml);
  const escapedKicker = escapeXml(kicker);
  const langUpper = lang.toUpperCase();

  // Accent colors
  let accentColor = "#38bdf8"; // Cyan
  let kickerDotColor = "#10b981"; // Emerald
  let cardTitle = loc.orbitalResonance;
  let cardStatus = loc.activeStatus;
  let cardStatusColor = "#10b981";

  if (type === "blog") {
    accentColor = "#f59e0b"; // Amber / Gold
    kickerDotColor = "#f59e0b";
    cardTitle = loc.editorialTheme;
    cardStatus = loc.curatedStatus;
    cardStatusColor = "#f59e0b";
  } else if (type === "project") {
    accentColor = "#38bdf8"; // Cyan
    kickerDotColor = "#38bdf8";
    cardTitle = loc.simulationStation;
    cardStatus = loc.liveStatus;
    cardStatusColor = "#10b981";
  } else if (type === "hub") {
    accentColor = "#818cf8"; // Indigo
    kickerDotColor = "#818cf8";
    cardTitle = loc.archiveIndex;
    cardStatus = loc.indexedStatus;
    cardStatusColor = "#818cf8";
  }

  const starsSvg = generateStars(48, 1337);

  // Localized tag capsules
  let tagElements = "";
  if (tags.length > 0) {
    let currentX = 72;
    tagElements = tags
      .slice(0, 3)
      .map((rawTag) => {
        const localizedTag = loc.tags[rawTag.toLowerCase()] || rawTag;
        const textWidth = Math.max(
          85,
          Math.min(180, getVisualWidth(localizedTag) * 11 + 24),
        );
        const element = `
          <g transform="translate(${currentX}, 416)">
            <rect width="${textWidth}" height="32" rx="6" fill="#161a23" stroke="#262f3d" stroke-width="1" />
            <text x="${textWidth / 2}" y="21" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#cbd5e1" text-anchor="middle">${escapeXml(localizedTag)}</text>
          </g>
        `;
        currentX += textWidth + 12;
        return element;
      })
      .join("");
  }

  // Meta row (date / readTime)
  let metaLine = "";
  if (date || readTime) {
    const parts: string[] = [];
    if (date) parts.push(`📅 ${escapeXml(date)}`);
    if (readTime) parts.push(`⏱️ ${escapeXml(readTime)}`);
    metaLine = `
      <text x="72" y="302" font-family="system-ui, sans-serif" font-size="16" font-weight="500" fill="#94a3b8">
        ${parts.join("   •   ")}
      </text>
    `;
  }

  // Layout Title
  const isHome = type === "home";
  const titleFontSize = isHome
    ? 58
    : escapedTitleLines.length === 1
      ? 48
      : escapedTitleLines.length === 2
        ? 43
        : 37;
  const titleLineHeight = isHome ? 64 : 48;
  const titleStartY = isHome ? 172 : escapedTitleLines.length === 1 ? 185 : 155;

  const titleSvg = escapedTitleLines
    .map(
      (line, i) =>
        `<tspan x="72" y="${titleStartY + i * titleLineHeight}">${line}</tspan>`,
    )
    .join("");

  const subtitleStartY =
    date || readTime
      ? 334
      : titleStartY + escapedTitleLines.length * titleLineHeight + 16;
  const subtitleSvg = escapedSubtitleLines
    .map(
      (line, i) =>
        `<tspan x="72" y="${subtitleStartY + i * 26}">${line}</tspan>`,
    )
    .join("");

  // Card Inner Graphic
  let cardInnerContent = "";
  if (!imagePath || isHome) {
    // Lagrange Equilibrium graphic fully localized
    cardInnerContent = `
      <g transform="translate(217, 215)">
        <circle r="120" stroke="#ffffff" stroke-opacity="0.08" stroke-width="0.8" stroke-dasharray="2 4" fill="none"/>
        <circle r="80" stroke="#38bdf8" stroke-opacity="0.15" stroke-width="1" stroke-dasharray="3 5" fill="none"/>
        <circle r="50" stroke="#ffffff" stroke-opacity="0.06" stroke-width="0.5" fill="none"/>

        <!-- Sun Glow & Core -->
        <circle r="46" fill="url(#sunGlow)"/>
        <circle r="22" fill="#f59e0b" fill-opacity="0.3"/>
        <circle r="14" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>

        <!-- Earth & Moon -->
        <g transform="translate(80, 0)">
          <circle r="12" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="0.5" stroke-dasharray="1 2" fill="none"/>
          <circle r="6" fill="url(#earthGlow)" stroke="#38bdf8" stroke-width="0.8"/>
          <circle cx="10" cy="-6" r="2" fill="#e2e8f0"/>
        </g>

        <!-- Lagrange Diamonds -->
        <path d="M 45 -4 L 49 0 L 45 4 L 41 0 Z" fill="#38bdf8" fill-opacity="0.8"/>
        <path d="M 115 -4 L 119 0 L 115 4 L 111 0 Z" fill="#38bdf8" fill-opacity="0.8"/>
        <path d="M 40 -69 L 44 -65 L 40 -61 L 36 -65 Z" fill="#ffffff" fill-opacity="0.8"/>
        <path d="M 40 61 L 44 65 L 40 69 L 36 65 Z" fill="#ffffff" fill-opacity="0.8"/>
      </g>
      <g transform="translate(26, 385)">
        <line x1="0" y1="0" x2="383" y2="0" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1"/>
        <text x="191" y="24" font-family="'Courier New', monospace" font-size="13" font-weight="700" fill="#ffffff" letter-spacing="1.5" text-anchor="middle">${escapeXml(loc.lagrangeTitle)}</text>
        <text x="191" y="42" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="#64748b" text-anchor="middle">${escapeXml(loc.lagrangeDesc)}</text>
        <g transform="translate(10, 65)">
          <text x="0" y="0" font-family="'Courier New', monospace" font-size="10" font-weight="700" fill="#475569">${escapeXml(loc.system)}: <tspan fill="#94a3b8">${escapeXml(loc.balanced)}</tspan></text>
          <text x="210" y="0" font-family="'Courier New', monospace" font-size="10" font-weight="700" fill="#475569">${escapeXml(loc.cohesion)}: <tspan fill="#10b981">${escapeXml(loc.optimal)}</tspan></text>
          <text x="0" y="16" font-family="'Courier New', monospace" font-size="10" font-weight="700" fill="#475569">${escapeXml(loc.focus)}: <tspan fill="#38bdf8">${escapeXml(loc.absolute)}</tspan></text>
          <text x="210" y="16" font-family="'Courier New', monospace" font-size="10" font-weight="700" fill="#475569">${escapeXml(loc.sysRev)}: <tspan fill="#94a3b8">2026.04</tspan></text>
        </g>
      </g>
    `;
  } else {
    // Themed artwork frame (image composited at 708, 135)
    cardInnerContent = `
      <g transform="translate(24, 410)">
        <line x1="0" y1="0" x2="387" y2="0" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1"/>
        <text x="0" y="22" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#64748b">${escapeXml(loc.statusVerified)}</text>
        <text x="220" y="22" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#64748b">${escapeXml(loc.categoryLabel)}: <tspan fill="${accentColor}">${type.toUpperCase()}</tspan></text>
        <text x="0" y="40" font-family="'Courier New', monospace" font-size="10" font-weight="600" fill="#475569">${escapeXml(loc.polymathArchive)}</text>
      </g>
    `;
  }

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="nebulaLeft" cx="20%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#0c0e12" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="nebulaRight" cx="80%" cy="50%" r="60%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="#0c0e12" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.85"/>
      <stop offset="40%" stop-color="#fbbf24" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="earthGlow" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="60%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </radialGradient>
  </defs>

  <!-- Deep Space Canvas -->
  <rect width="100%" height="100%" fill="#0d0f14"/>
  <rect width="100%" height="100%" fill="url(#nebulaLeft)"/>
  <rect width="100%" height="100%" fill="url(#nebulaRight)"/>

  <!-- Celestial Stars Backdrop -->
  ${starsSvg}

  <!-- Concentric Celestial Orbits Background (Right side) -->
  <g transform="translate(910, 315)" stroke="#ffffff" stroke-opacity="0.04" fill="none">
    <circle r="140" stroke-dasharray="3 6"/>
    <circle r="250" stroke-dasharray="2 4"/>
    <circle r="360"/>
    <circle r="450" stroke-dasharray="4 8"/>
    <line x1="-480" y1="0" x2="480" y2="0" stroke-dasharray="4 6"/>
    <line x1="0" y1="-480" x2="0" y2="480" stroke-dasharray="4 6"/>
  </g>

  <!-- Outer Card Frame Inset -->
  <rect x="28" y="28" width="1144" height="574" rx="20" fill="none" stroke="#ffffff" stroke-opacity="0.07" stroke-width="1.5"/>

  <!-- LEFT COLUMN: Typography & Identity -->
  <!-- Kicker / Greeting -->
  <g transform="translate(72, 85)">
    <circle cx="6" cy="6" r="4.5" fill="${kickerDotColor}"/>
    <circle cx="6" cy="6" r="8" fill="${kickerDotColor}" fill-opacity="0.2"/>
    <text x="24" y="10" font-family="'Courier New', monospace" font-size="13" font-weight="700" fill="${kickerDotColor}" letter-spacing="2">${escapedKicker}</text>
  </g>

  <!-- Title -->
  <text font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans', 'Segoe UI Historic', 'Arial Unicode MS', sans-serif" font-size="${titleFontSize}" font-weight="900" fill="#ffffff" letter-spacing="-1">
    ${titleSvg}
  </text>

  <!-- Meta Row (if applicable) -->
  ${metaLine}

  <!-- Subtitle / Description -->
  <text font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans', 'Segoe UI Historic', 'Arial Unicode MS', sans-serif" font-size="18" font-weight="400" fill="#8492a6">
    ${subtitleSvg}
  </text>

  <!-- Tags Row -->
  ${tagElements}

  <!-- Author Avatar & Signature Dock -->
  <g transform="translate(72, 480)">
    <rect width="530" height="74" rx="16" fill="#131720" stroke="#232a38" stroke-width="1"/>
    <circle cx="46" cy="37" r="30" fill="none" stroke="${accentColor}" stroke-width="2"/>
    
    <text x="90" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700" fill="#ffffff">Cristian Arando</text>
    <text x="90" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" fill="${accentColor}">${escapeXml(loc.role)}</text>

    <!-- Language Badge inside dock -->
    <g transform="translate(440, 18)">
      <rect width="64" height="38" rx="8" fill="#1e2533" stroke="${accentColor}" stroke-width="1.2"/>
      <text x="32" y="24" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="${accentColor}" text-anchor="middle">${langUpper}</text>
    </g>
  </g>

  <!-- RIGHT COLUMN: Floating Card (x: 690, y: 75, w: 435, h: 480) -->
  <g transform="translate(690, 75)">
    <rect width="435" height="480" rx="20" fill="#131722" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1.5"/>

    <!-- Header of Card -->
    <g transform="translate(24, 26)">
      <text x="0" y="14" font-family="'Courier New', monospace" font-size="12" font-weight="700" fill="#94a3b8" letter-spacing="1.5">${escapeXml(cardTitle)}</text>
      <g transform="translate(325, 4)">
        <circle cx="5" cy="6" r="3.5" fill="${cardStatusColor}"/>
        <text x="14" y="10" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="${cardStatusColor}" letter-spacing="1">${escapeXml(cardStatus)}</text>
      </g>
      <line x1="0" y1="26" x2="387" y2="26" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1"/>
    </g>

    ${cardInnerContent}
  </g>
</svg>`;
}

async function createCircularAvatar(
  mePath: string,
  size = 56,
): Promise<Buffer> {
  const circleMask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`,
  );
  return await sharp(mePath)
    .resize(size, size, { fit: "cover" })
    .composite([{ input: circleMask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

async function createRoundedThemedImage(
  imagePath: string,
  width = 400,
  height = 260,
): Promise<Buffer> {
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="14" fill="#fff"/></svg>`,
  );
  return await sharp(imagePath)
    .resize(width, height, { fit: "cover" })
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

export async function renderOGPng(data: OGCardData): Promise<Buffer> {
  const svg = generateOGSvg(data);
  const basePng = await sharp(Buffer.from(svg)).png().toBuffer();

  const composites: Array<{ input: Buffer; top: number; left: number }> = [];

  // 1. Author Avatar
  const avatarPath =
    data.avatarPath || path.resolve("src/assets/images/me.webp");
  try {
    const avatarBuf = await createCircularAvatar(avatarPath, 56);
    composites.push({ input: avatarBuf, top: 489, left: 90 });
  } catch {
    // If avatar missing, skip silently
  }

  // 2. Themed Artwork Image
  if (data.imagePath) {
    try {
      const themedBuf = await createRoundedThemedImage(
        data.imagePath,
        400,
        260,
      );
      composites.push({ input: themedBuf, top: 135, left: 708 });
    } catch {
      // If themed image missing, skip silently
    }
  }

  if (composites.length > 0) {
    return await sharp(basePng)
      .composite(composites)
      .png({ quality: 90, compressionLevel: 8 })
      .toBuffer();
  }

  return basePng;
}
