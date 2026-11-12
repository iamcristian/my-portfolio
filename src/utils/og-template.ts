import sharp from "sharp";
import path from "node:path";

export type Lang = "en" | "es" | "de" | "ja" | "ru";

export interface LocaleDict {
  helloIm: string;
  role: string;
  downloadCv: string;
  contactMe: string;
  orbitalResonance: string;
  activeStatus: string;
  l4Title: string;
  l4Desc: string;
  statusText: string;
  focusText: string;
  cohesionText: string;
  versionText: string;
  essayAnalysis: string;
  caseStudy: string;
  archiveReading: string;
  showcaseWork: string;
  setupTooling: string;
  curatedRoadmap: string;
  discoveryIndex: string;
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
    helloIm: "HELLO, I'M",
    role: "Software & Systems Engineer",
    downloadCv: "View CV",
    contactMe: "Contact Me",
    orbitalResonance: "ORBITAL.RESONANCE",
    activeStatus: "ACTIVE",
    l4Title: "L4: SYSTEMS_THINKING",
    l4Desc: "Holistic stability through interconnected design",
    statusText: "SYSTEM: BALANCED",
    focusText: "FOCUS: ABSOLUTE",
    cohesionText: "COHESION: OPTIMAL",
    versionText: "SYS.REV: 04",
    essayAnalysis: "ESSAY & ANALYSIS",
    caseStudy: "CASE STUDY",
    archiveReading: "READING ARCHIVE",
    showcaseWork: "SHOWCASE",
    setupTooling: "SETUP",
    curatedRoadmap: "CURATED PATHS",
    discoveryIndex: "DISCOVERY",
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
      personal: "Personal",
      manifesto: "Manifesto",
      philosophy: "Philosophy",
      systems: "Systems",
      logic: "Logic",
      "critical-thinking": "Critical Thinking",
      books: "Books",
      reading: "Reading",
      bookshelf: "Bookshelf",
      cybersecurity: "Cybersecurity",
      "penetration testing": "Penetration Testing",
      owasp: "OWASP",
      classics: "Classics",
      literature: "Literature",
      dostoevsky: "Dostoevsky",
      existentialism: "Existentialism",
      cognition: "Cognition",
      epistemology: "Epistemology",
      "mental-models": "Mental Models",
      architecture: "Architecture",
      resilience: "Resilience",
      modularity: "Modularity",
      security: "Security",
      fallacies: "Fallacies",
      thinking: "Thinking",
      "reading list": "Reading List",
      pessimism: "Pessimism",
      stoicism: "Stoicism",
      heuristics: "Heuristics",
    },
  },
  es: {
    helloIm: "HOLA, SOY",
    role: "Ingeniero de Software y Sistemas",
    downloadCv: "Ver CV",
    contactMe: "Contáctame",
    orbitalResonance: "RESONANCIA.ORBITAL",
    activeStatus: "ACTIVO",
    l4Title: "L4: PENSAMIENTO_SISTÉMICO",
    l4Desc: "Estabilidad holística mediante diseño interconectado",
    statusText: "SISTEMA: BALANCEADO",
    focusText: "ENFOQUE: ABSOLUTO",
    cohesionText: "COHESIÓN: ÓPTIMA",
    versionText: "REV.SIS: 04",
    essayAnalysis: "ENSAYO Y ANÁLISIS",
    caseStudy: "ESTUDIO DE CASO",
    archiveReading: "ARCHIVO DE LECTURAS",
    showcaseWork: "PROYECTOS",
    setupTooling: "ENTORNO",
    curatedRoadmap: "RUTAS DE APRENDIZAJE",
    discoveryIndex: "BÚSQUEDA",
    editorialTheme: "TEMA.EDITORIAL",
    curatedStatus: "DESTACADO",
    simulationStation: "ESTACIÓN.SIMULACIÓN",
    liveStatus: "EN VIVO",
    archiveIndex: "ÍNDICE.ARCHIVO",
    indexedStatus: "INDEXADO",
    lagrangeTitle: "EQUILIBRIO_LAGRANGE",
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
      personal: "Personal",
      manifesto: "Manifiesto",
      philosophy: "Filosofía",
      systems: "Sistemas",
      logic: "Lógica",
      "critical-thinking": "Pensamiento Crítico",
      books: "Libros",
      reading: "Lectura",
      bookshelf: "Biblioteca",
      cybersecurity: "Ciberseguridad",
      "penetration testing": "Hacking Ético",
      owasp: "OWASP",
      classics: "Clásicos",
      literature: "Literatura",
      dostoevsky: "Dostoievski",
      existentialism: "Existencialismo",
      cognition: "Cognición",
      epistemology: "Epistemología",
      "mental-models": "Modelos Mentales",
      architecture: "Arquitectura",
      resilience: "Resiliencia",
      modularity: "Modularidad",
      security: "Seguridad",
      fallacies: "Falacias",
      thinking: "Pensamiento",
      "reading list": "Lista de Lectura",
      pessimism: "Pesimismo",
      stoicism: "Estoicismo",
      heuristics: "Heurística",
    },
  },
  ru: {
    helloIm: "ПРИВЕТ, Я",
    role: "Инженер программного обеспечения и систем",
    downloadCv: "Посмотреть резюме",
    contactMe: "Связаться со мной",
    orbitalResonance: "ОРБИТАЛЬНЫЙ.РЕЗОНАНС",
    activeStatus: "АКТИВЕН",
    l4Title: "L4: СИСТЕМНОЕ_МЫШЛЕНИЕ",
    l4Desc: "Целостная стабильность благодаря взаимосвязанному дизайну",
    statusText: "ОРБИТА: СТАБИЛЬНА",
    focusText: "ВОЗМУЩЕНИЕ: < 0.1%",
    cohesionText: "ГРАВИТАЦИЯ: НОМИНАЛ",
    versionText: "ВЕРСИЯ: 04",
    essayAnalysis: "ЭССЕ И АНАЛИЗ",
    caseStudy: "ПРАКТИЧЕСКИЙ КЕЙС",
    archiveReading: "АРХИВ ЧТЕНИЯ",
    showcaseWork: "ПРОЕКТЫ",
    setupTooling: "ОКРУЖЕНИЕ",
    curatedRoadmap: "МАРШРУТЫ ОБУЧЕНИЯ",
    discoveryIndex: "ПОИСК",
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
      personal: "Личное",
      manifesto: "Манифест",
      philosophy: "Философия",
      systems: "Системы",
      logic: "Логика",
      "critical-thinking": "Критическое мышление",
      books: "Книги",
      reading: "Чтение",
      bookshelf: "Книжная полка",
      cybersecurity: "Кибербезопасность",
      "penetration testing": "Пентестинг",
      owasp: "OWASP",
      classics: "Классика",
      literature: "Литература",
      dostoevsky: "Достоевский",
      existentialism: "Экзистенциализм",
      cognition: "Когниция",
      epistemology: "Эпистемология",
      "mental-models": "Ментальные модели",
      architecture: "Архитектура",
      resilience: "Устойчивость",
      modularity: "Модульность",
      security: "Безопасность",
      fallacies: "Заблуждения",
      thinking: "Мышление",
      "reading list": "Список чтения",
      pessimism: "Пессимизм",
      stoicism: "Стоицизм",
      heuristics: "Эвристика",
    },
  },
  de: {
    helloIm: "HALLO, ICH BIN",
    role: "Software- & Systemingenieur",
    downloadCv: "Lebenslauf ansehen",
    contactMe: "Kontaktiere mich",
    orbitalResonance: "ORBITALE.RESONANZ",
    activeStatus: "AKTIV",
    l4Title: "L4: SYSTEMISCHES_DENKEN",
    l4Desc: "Ganzheitliche Stabilität durch vernetztes Design",
    statusText: "SYSTEM: AUSGEGLICHEN",
    focusText: "FOKUS: ABSOLUT",
    cohesionText: "KOHÄSION: OPTIMAL",
    versionText: "SYS.REV: 04",
    essayAnalysis: "ESSAY & ANALYSE",
    caseStudy: "FALLSTUDIE",
    archiveReading: "LESEARCHIV",
    showcaseWork: "PROJEKTE",
    setupTooling: "SETUP",
    curatedRoadmap: "LERNPFADE",
    discoveryIndex: "SUCHE",
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
      personal: "Persönlich",
      manifesto: "Manifest",
      philosophy: "Philosophie",
      systems: "Systeme",
      logic: "Logik",
      "critical-thinking": "Kritisches Denken",
      books: "Bücher",
      reading: "Lesen",
      bookshelf: "Bücherregal",
      cybersecurity: "Cybersicherheit",
      "penetration testing": "Penetrationstest",
      owasp: "OWASP",
      classics: "Klassiker",
      literature: "Literatur",
      dostoevsky: "Dostojewski",
      existentialism: "Existenzialismus",
      cognition: "Kognition",
      epistemology: "Epistemologie",
      "mental-models": "Mentale Modelle",
      architecture: "Architektur",
      resilience: "Resilienz",
      modularity: "Modularität",
      security: "Sicherheit",
      fallacies: "Trugschlüsse",
      thinking: "Denken",
      "reading list": "Leseliste",
      pessimism: "Pessimismus",
      stoicism: "Stoizismus",
      heuristics: "Heuristik",
    },
  },
  ja: {
    helloIm: "こんにちは、",
    role: "ソフトウェア＆システムエンジニア",
    downloadCv: "履歴書を見る",
    contactMe: "お問い合わせ",
    orbitalResonance: "軌道.共鳴",
    activeStatus: "稼働中",
    l4Title: "L4: システム思考",
    l4Desc: "相互接続された設計による全体的な安定性",
    statusText: "システム: 均衡",
    focusText: "集中: 絶対",
    cohesionText: "凝集性: 最適",
    versionText: "改訂版: 04",
    essayAnalysis: "考察・エッセイ",
    caseStudy: "事例研究",
    archiveReading: "読書アーカイブ",
    showcaseWork: "開発実績",
    setupTooling: "開発環境",
    curatedRoadmap: "学習ロードマップ",
    discoveryIndex: "全文検索",
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
      personal: "パーソナル",
      manifesto: "マニフェスト",
      philosophy: "哲学",
      systems: "システム設計",
      logic: "論理学",
      "critical-thinking": "批判的思考",
      books: "書籍",
      reading: "読書",
      bookshelf: "本棚",
      cybersecurity: "サイバーセキュリティ",
      "penetration testing": "脆弱性診断",
      owasp: "OWASP",
      classics: "古典文学",
      literature: "文学",
      dostoevsky: "ドストエフスキー",
      existentialism: "実存主義",
      cognition: "認知科学",
      epistemology: "認識論",
      "mental-models": "メンタルモデル",
      architecture: "アーキテクチャ",
      resilience: "レジリエンス",
      modularity: "モジュール性",
      security: "セキュリティ",
      fallacies: "誤謬",
      thinking: "思考法",
      "reading list": "読書リスト",
      pessimism: "悲観主義",
      stoicism: "ストア派",
      heuristics: "ヒューリスティクス",
    },
  },
};

export interface OGCardData {
  type: "home" | "blog" | "project" | "hub";
  lang: Lang;
  title: string;
  subtitle?: string;
  role?: string;
  cvText?: string;
  contactText?: string;
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

function isCJK(char: string): boolean {
  const code = char.charCodeAt(0);
  return (
    (code >= 0x2e80 && code <= 0x9fff) ||
    (code >= 0x3040 && code <= 0x30ff) ||
    (code >= 0xac00 && code <= 0xd7af) ||
    (code >= 0xff01 && code <= 0xff60)
  );
}

function tokenizeText(text: string): string[] {
  const tokens: string[] = [];
  let currentToken = "";

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (/\s/.test(ch)) {
      if (currentToken) {
        tokens.push(currentToken);
        currentToken = "";
      }
    } else if (isCJK(ch)) {
      if (currentToken) {
        tokens.push(currentToken);
        currentToken = "";
      }
      tokens.push(ch);
    } else {
      currentToken += ch;
    }
  }
  if (currentToken) {
    tokens.push(currentToken);
  }
  return tokens;
}

/**
 * Intelligent, locale-aware text wrapping that supports Latin, Cyrillic,
 * CJK (Japanese), and mixed punctuation seamlessly without line overflow.
 */
function wrapText(
  text: string,
  maxVisualWidth: number,
  maxLines = 3,
): string[] {
  if (!text) return [];
  const tokens = tokenizeText(text);
  const lines: string[] = [];
  let currentLine = "";

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const needsSpace =
      currentLine.length > 0 &&
      !isCJK(currentLine.slice(-1)) &&
      !isCJK(token.charAt(0));
    const candidate = currentLine
      ? needsSpace
        ? `${currentLine} ${token}`
        : `${currentLine}${token}`
      : token;

    if (getVisualWidth(candidate) <= maxVisualWidth) {
      currentLine = candidate;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = token;

      if (lines.length === maxLines - 1) {
        for (let j = i + 1; j < tokens.length; j++) {
          const nextTok = tokens[j];
          const nSpace =
            currentLine.length > 0 &&
            !isCJK(currentLine.slice(-1)) &&
            !isCJK(nextTok.charAt(0));
          const nextCand = nSpace
            ? `${currentLine} ${nextTok}`
            : `${currentLine}${nextTok}`;

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

function renderRealLagrangeSimulation(): string {
  return `
    <g transform="translate(222, 210) scale(1.4) translate(-100, -100)">
      <!-- 1. Gravitational Potential Contours (Roche lobes, kidney loops, concentric waves) -->
      <circle cx="100" cy="100" r="18" stroke="#ffffff" stroke-opacity="0.08" stroke-width="0.35" fill="none"/>
      <circle cx="100" cy="100" r="30" stroke="#ffffff" stroke-opacity="0.08" stroke-width="0.35" fill="none"/>
      <circle cx="100" cy="100" r="42" stroke="#ffffff" stroke-opacity="0.08" stroke-width="0.35" fill="none"/>

      <circle cx="150" cy="100" r="6" stroke="#ffffff" stroke-opacity="0.08" stroke-width="0.35" fill="none"/>
      <circle cx="150" cy="100" r="10" stroke="#ffffff" stroke-opacity="0.08" stroke-width="0.35" fill="none"/>

      <!-- L1 Roche lobe figure-8 pinching at L1: (130, 100) -->
      <path d="M 130,100 C 130,112 142,112 155,110 C 165,108 165,92 155,90 C 142,88 130,88 130,100 C 130,120 110,140 85,140 C 50,140 50,60 85,60 C 110,60 130,80 130,100 Z" stroke="#ffffff" stroke-opacity="0.09" stroke-width="0.35" fill="none"/>

      <!-- L2/L3 contour (pinch/loop wrapping Sun and Earth) -->
      <path d="M 175,100 C 175,122 142,150 100,150 C 45,150 25,128 25,100 C 25,72 45,50 100,50 C 142,50 175,78 175,100 Z" stroke="#ffffff" stroke-opacity="0.09" stroke-width="0.35" fill="none"/>

      <!-- L4 kidney loops (gravitational well around L4) -->
      <path d="M 105,65 Q 125,50 142,75 Q 128,63 105,65 Z" stroke="#ffffff" stroke-opacity="0.08" stroke-width="0.35" fill="none"/>
      <path d="M 95,73 Q 125,44 146,86 Q 128,58 95,73 Z" stroke="#ffffff" stroke-opacity="0.08" stroke-width="0.35" fill="none"/>

      <!-- L5 kidney loops (gravitational well around L5) -->
      <path d="M 105,135 Q 125,150 142,125 Q 128,137 105,135 Z" stroke="#ffffff" stroke-opacity="0.08" stroke-width="0.35" fill="none"/>
      <path d="M 95,127 Q 125,156 146,114 Q 128,142 95,127 Z" stroke="#ffffff" stroke-opacity="0.08" stroke-width="0.35" fill="none"/>

      <!-- Outer system contours -->
      <circle cx="100" cy="100" r="85" stroke="#ffffff" stroke-opacity="0.06" stroke-width="0.35" fill="none"/>
      <circle cx="100" cy="100" r="95" stroke="#ffffff" stroke-opacity="0.04" stroke-width="0.35" fill="none"/>

      <!-- 2. Orbit circle of Earth (r = 50 around Sun at 100, 100) -->
      <circle cx="100" cy="100" r="50" stroke="#ffffff" stroke-opacity="0.15" stroke-width="0.5" stroke-dasharray="2 4" fill="none"/>

      <!-- Horizontal orbital axis line -->
      <line x1="15" y1="100" x2="185" y2="100" stroke="#ffffff" stroke-opacity="0.2" stroke-width="0.5" stroke-dasharray="1 3"/>

      <!-- 3. Equilateral triangle lines to L4 (125, 57) -->
      <line x1="100" y1="100" x2="125" y2="57" stroke="#ffffff" stroke-opacity="0.15" stroke-width="0.5" stroke-dasharray="1 3"/>
      <line x1="150" y1="100" x2="125" y2="57" stroke="#ffffff" stroke-opacity="0.15" stroke-width="0.5" stroke-dasharray="1 3"/>

      <!-- Equilateral triangle lines to L5 (125, 143) -->
      <line x1="100" y1="100" x2="125" y2="143" stroke="#ffffff" stroke-opacity="0.15" stroke-width="0.5" stroke-dasharray="1 3"/>
      <line x1="150" y1="100" x2="125" y2="143" stroke="#ffffff" stroke-opacity="0.15" stroke-width="0.5" stroke-dasharray="1 3"/>

      <!-- Node axis connecting lines -->
      <line x1="100" y1="100" x2="130" y2="100" stroke="#ffffff" stroke-opacity="0.2" stroke-width="0.75"/>
      <line x1="150" y1="100" x2="130" y2="100" stroke="#ffffff" stroke-opacity="0.2" stroke-width="0.75"/>
      <line x1="150" y1="100" x2="175" y2="100" stroke="#ffffff" stroke-opacity="0.2" stroke-width="0.75"/>
      <line x1="100" y1="100" x2="30" y2="100" stroke="#ffffff" stroke-opacity="0.2" stroke-width="0.75"/>

      <!-- 4. Primary Body: Sun (Center at 100, 100) -->
      <circle cx="100" cy="100" r="38" fill="url(#sunAura)" fill-opacity="0.8"/>
      <circle cx="100" cy="100" r="22" fill="#f59e0b" fill-opacity="0.2"/>
      <circle cx="100" cy="100" r="14" fill="#fbbf24" stroke="#d97706" stroke-width="1.25"/>

      <!-- 5. Secondary Body: Earth & Moon (at 150, 100) -->
      <g>
        <circle cx="150" cy="100" r="9.5" stroke="#ffffff" stroke-width="0.35" stroke-dasharray="1 2" stroke-opacity="0.25" fill="none"/>
        <circle cx="150" cy="100" r="4.5" fill="url(#planetGlow)" stroke="#3b82f6" stroke-width="0.5"/>
        <circle cx="156.5" cy="93.5" r="1.35" fill="#e5e7eb" fill-opacity="0.95"/>
      </g>

      <!-- 6. Lagrange Reticles: L1, L2, L3, L4, L5 (resting state: subtle monochrome crosshairs, NO labels) -->
      <!-- L1: at (130, 100) -->
      <g>
        <circle cx="130" cy="100" r="2.5" stroke="#cbd5e1" stroke-width="0.75" fill="none"/>
        <line x1="130" y1="95" x2="130" y2="105" stroke="#cbd5e1" stroke-width="0.75"/>
        <line x1="125" y1="100" x2="135" y2="100" stroke="#cbd5e1" stroke-width="0.75"/>
      </g>

      <!-- L2: at (175, 100) -->
      <g>
        <circle cx="175" cy="100" r="2.5" stroke="#cbd5e1" stroke-width="0.75" fill="none"/>
        <line x1="175" y1="95" x2="175" y2="105" stroke="#cbd5e1" stroke-width="0.75"/>
        <line x1="170" y1="100" x2="180" y2="100" stroke="#cbd5e1" stroke-width="0.75"/>
      </g>

      <!-- L3: at (30, 100) -->
      <g>
        <circle cx="30" cy="100" r="2.5" stroke="#cbd5e1" stroke-width="0.75" fill="none"/>
        <line x1="30" y1="95" x2="30" y2="105" stroke="#cbd5e1" stroke-width="0.75"/>
        <line x1="25" y1="100" x2="35" y2="100" stroke="#cbd5e1" stroke-width="0.75"/>
      </g>

      <!-- L4: at (125, 57) - resting crosshair, higher up -->
      <g>
        <circle cx="125" cy="57" r="2.5" stroke="#cbd5e1" stroke-width="0.75" fill="none"/>
        <line x1="125" y1="52" x2="125" y2="62" stroke="#cbd5e1" stroke-width="0.75"/>
        <line x1="120" y1="57" x2="130" y2="57" stroke="#cbd5e1" stroke-width="0.75"/>
      </g>

      <!-- L5: at (125, 143) -->
      <g>
        <circle cx="125" cy="143" r="2.5" stroke="#cbd5e1" stroke-width="0.75" fill="none"/>
        <line x1="125" y1="138" x2="125" y2="148" stroke="#cbd5e1" stroke-width="0.75"/>
        <line x1="120" y1="143" x2="130" y2="143" stroke="#cbd5e1" stroke-width="0.75"/>
      </g>
    </g>
  `;
}

export function generateOGSvg(data: OGCardData): string {
  const {
    type,
    lang,
    title,
    subtitle = "",
    role,
    cvText,
    contactText,
    kickerTopic,
    tags = [],
    date,
    readTime,
    imagePath,
  } = data;

  const loc = I18N_OG[lang] || I18N_OG.en;
  const isHome = type === "home";

  const displayRole = role || loc.role;
  const displayCv = cvText || loc.downloadCv;
  const displayContact = contactText || loc.contactMe;

  // Determine kicker based on type and localized strings
  let kicker = loc.helloIm;
  let kickerDotColor = "#e2e8f0";
  let kickerTextColor = "#e2e8f0";
  let accentColor = "#cbd5e1";
  let cardTitle = loc.orbitalResonance;
  let cardStatus = loc.activeStatus;
  let cardStatusColor = "#10b981";

  if (type === "blog") {
    const rawTag = kickerTopic || tags[0]?.toLowerCase() || "philosophy";
    const topic = loc.tags[rawTag.toLowerCase()] || rawTag;
    kicker = `• ${loc.essayAnalysis} // ${topic.toUpperCase()}`;
    kickerDotColor = "#f59e0b";
    kickerTextColor = "#fbbf24";
    accentColor = "#f59e0b";
    cardTitle = loc.editorialTheme;
    cardStatus = loc.curatedStatus;
    cardStatusColor = "#f59e0b";
  } else if (type === "project") {
    const topic = kickerTopic || tags[0]?.toUpperCase() || "SYSTEM";
    kicker = `• ${loc.caseStudy} // ${topic.toUpperCase()}`;
    kickerDotColor = "#38bdf8";
    kickerTextColor = "#38bdf8";
    accentColor = "#38bdf8";
    cardTitle = loc.simulationStation;
    cardStatus = loc.liveStatus;
    cardStatusColor = "#10b981";
  } else if (type === "hub") {
    const topic = kickerTopic || loc.showcaseWork;
    kicker = `• ${loc.archiveReading} // ${topic.toUpperCase()}`;
    kickerDotColor = "#818cf8";
    kickerTextColor = "#a5b4fc";
    accentColor = "#818cf8";
    cardTitle = loc.archiveIndex;
    cardStatus = loc.indexedStatus;
    cardStatusColor = "#818cf8";
  }

  const escapedKicker = escapeXml(kicker);
  const langUpper = lang.toUpperCase();
  const starsSvg = generateStars(48, 1337);

  if (isHome) {
    const escapedSubtitleLines = wrapText(subtitle, 42, 3).map(escapeXml);
    const quoteHeight = Math.max(76, escapedSubtitleLines.length * 26 + 8);

    const [statusLabel, statusVal = ""] = loc.statusText.split(":");
    const [cohesionLabel, cohesionVal = ""] = loc.cohesionText.split(":");
    const [focusLabel, focusVal = ""] = loc.focusText.split(":");
    const [versionLabel, versionVal = ""] = loc.versionText.split(":");

    return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="nebulaViolet" cx="18%" cy="25%" r="55%">
      <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#101116" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="nebulaIndigo" cx="85%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.09"/>
      <stop offset="100%" stop-color="#101116" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sunAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.85"/>
      <stop offset="35%" stop-color="#f59e0b" stop-opacity="0.35"/>
      <stop offset="70%" stop-color="#d97706" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#b45309" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="planetGlow" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#93c5fd"/>
      <stop offset="50%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </radialGradient>
  </defs>

  <!-- Deep Space Canvas -->
  <rect width="100%" height="100%" fill="#101116"/>
  <rect width="100%" height="100%" fill="url(#nebulaViolet)"/>
  <rect width="100%" height="100%" fill="url(#nebulaIndigo)"/>

  <!-- Starfield Backdrop -->
  ${starsSvg}

  <!-- Outer Border Inset -->
  <rect x="24" y="24" width="1152" height="582" rx="20" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1.2"/>

  <!-- LEFT COLUMN: Authentic Website Hero -->
  <!-- Kicker / Greeting -->
  <g transform="translate(70, 95)">
    <circle cx="8" cy="8" r="4" fill="#e2e8f0" fill-opacity="0.8"/>
    <text x="22" y="12" font-family="'Courier New', monospace" font-size="13" font-weight="700" fill="${kickerTextColor}" letter-spacing="2.5">${escapedKicker}</text>
  </g>

  <!-- Title: Name -->
  <text x="70" y="174" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="62" font-weight="900" fill="#ffffff" letter-spacing="-1.5">${escapeXml(title)}</text>

  <!-- Role Subtitle -->
  <text x="70" y="222" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="25" font-weight="700" fill="#f1f5f9">${escapeXml(displayRole)}</text>

  <!-- Tagline Quote Block -->
  <g transform="translate(70, 260)">
    <line x1="0" y1="4" x2="0" y2="${quoteHeight}" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
    <text font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="16.5" font-weight="400" fill="#94a3b8">
      ${escapedSubtitleLines.map((line, i) => `<tspan x="18" y="${22 + i * 26}">${line}</tspan>`).join("")}
    </text>
  </g>

  <!-- Hero Action Buttons -->
  <g transform="translate(70, 376)">
    <!-- Ver CV Button -->
    <g>
      <rect width="130" height="44" rx="10" fill="#ffffff"/>
      <g transform="translate(18, 12)" stroke="#0f172a" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 2v16a1 1 0 001 1h10a1 1 0 001-1V7l-5-5H4a1 1 0 00-1 1z"/>
        <path d="M9 2v5h5"/>
      </g>
      <text x="44" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#0f172a">${escapeXml(displayCv)}</text>
    </g>

    <!-- Contáctame Button -->
    <g transform="translate(144, 0)">
      <rect width="146" height="44" rx="10" fill="#181924" stroke="#334155" stroke-width="1"/>
      <g transform="translate(16, 12)" stroke="#e2e8f0" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="16" height="12" rx="2"/>
        <path d="M22 6l-10 7L2 6"/>
      </g>
      <text x="44" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" fill="#e2e8f0">${escapeXml(displayContact)}</text>
    </g>
  </g>

  <!-- Brand Signature Footer -->
  <g transform="translate(70, 508)">
    <!-- GitHub icon -->
    <g transform="translate(0, 0)">
      <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0020 10.017C20 4.484 15.522 0 10 0z" fill="#94a3b8"/>
    </g>
    <!-- LinkedIn icon -->
    <g transform="translate(28, 0)">
      <path d="M19 0h-18c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-18c0-.55-.45-1-1-1zm-11 17h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76zm11.5 10.27h-3v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.77 1.2-1.77 2.44v4.68h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v4.73z" fill="#94a3b8"/>
    </g>
    <!-- Domain & Tag -->
    <text x="58" y="15" font-family="'Courier New', monospace" font-size="13" font-weight="600" fill="#94a3b8">cristianarando.dev</text>
    <circle cx="218" cy="11" r="2" fill="#64748b"/>
    <text x="230" y="15" font-family="'Courier New', monospace" font-size="12" font-weight="700" fill="#94a3b8" letter-spacing="1.5">L4_SYSTEMS</text>
  </g>

  <!-- RIGHT COLUMN: Bento Orbital Resonance Card -->
  <g transform="translate(685, 65)">
    <!-- Card Base -->
    <rect width="445" height="500" rx="24" fill="#13141c" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1.5"/>

    <!-- Card Header -->
    <g transform="translate(28, 28)">
      <text x="0" y="10" font-family="'Courier New', monospace" font-size="12" font-weight="700" fill="#94a3b8" letter-spacing="1.5">${escapeXml(loc.orbitalResonance)}</text>
      <g transform="translate(325, 0)">
        <circle cx="5" cy="7" r="3.5" fill="#10b981"/>
        <text x="14" y="10" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#10b981" letter-spacing="1">${escapeXml(loc.activeStatus)}</text>
      </g>
    </g>

    <!-- Real Lagrange Simulation Center -->
    ${renderRealLagrangeSimulation()}

    <!-- Card Footer Telemetry -->
    <g transform="translate(24, 375)">
      <line x1="0" y1="0" x2="397" y2="0" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1"/>
      
      <text x="198" y="28" font-family="'Courier New', monospace" font-size="13" font-weight="700" fill="#e2e8f0" letter-spacing="1.5" text-anchor="middle">${escapeXml(loc.lagrangeTitle)}</text>
      <text x="198" y="47" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="400" fill="#94a3b8" text-anchor="middle">${escapeXml(loc.lagrangeDesc)}</text>

      <g transform="translate(10, 72)">
        <text x="0" y="0" font-family="'Courier New', monospace" font-size="10.5" font-weight="700" fill="#64748b">${escapeXml(statusLabel)}: <tspan fill="#cbd5e1">${escapeXml(statusVal.trim())}</tspan></text>
        <text x="210" y="0" font-family="'Courier New', monospace" font-size="10.5" font-weight="700" fill="#64748b">${escapeXml(cohesionLabel)}: <tspan fill="#cbd5e1">${escapeXml(cohesionVal.trim())}</tspan></text>
        
        <text x="0" y="19" font-family="'Courier New', monospace" font-size="10.5" font-weight="700" fill="#64748b">${escapeXml(focusLabel)}: <tspan fill="#cbd5e1">${escapeXml(focusVal.trim())}</tspan></text>
        <text x="210" y="19" font-family="'Courier New', monospace" font-size="10.5" font-weight="700" fill="#64748b">${escapeXml(versionLabel)}: <tspan fill="#cbd5e1">${escapeXml(versionVal.trim())}</tspan></text>
      </g>
    </g>
  </g>
</svg>`;
  }

  // Non-home layout: Blog, Project, Hub
  const escapedTitleLines = wrapText(title, 25, 3).map(escapeXml);
  const escapedSubtitleLines = wrapText(subtitle, 40, 3).map(escapeXml);

  const titleFontSize =
    escapedTitleLines.length === 1
      ? 44
      : escapedTitleLines.length === 2
        ? 38
        : 34;
  const titleLineHeight =
    escapedTitleLines.length === 1
      ? 52
      : escapedTitleLines.length === 2
        ? 46
        : 41;
  const titleStartY = escapedTitleLines.length === 1 ? 180 : 155;

  const titleSvg = escapedTitleLines
    .map(
      (line, i) =>
        `<tspan x="70" y="${titleStartY + i * titleLineHeight}">${line}</tspan>`,
    )
    .join("");

  let metaLine = "";
  if (date || readTime) {
    const parts: string[] = [];
    if (date) parts.push(`📅 ${escapeXml(date)}`);
    if (readTime) parts.push(`⏱️ ${escapeXml(readTime)}`);
    metaLine = `
      <text x="70" y="295" font-family="system-ui, sans-serif" font-size="15" font-weight="500" fill="#94a3b8">
        ${parts.join("   •   ")}
      </text>
    `;
  }

  const subtitleStartY =
    date || readTime
      ? 328
      : titleStartY + escapedTitleLines.length * titleLineHeight + 16;
  const subtitleSvg = escapedSubtitleLines
    .map(
      (line, i) =>
        `<tspan x="70" y="${subtitleStartY + i * 25}">${line}</tspan>`,
    )
    .join("");

  // Localized tag capsules
  let tagElements = "";
  if (tags.length > 0) {
    let currentX = 70;
    tagElements = tags
      .slice(0, 3)
      .map((rawTag) => {
        const localizedTag = loc.tags[rawTag.toLowerCase()] || rawTag;
        const textWidth = Math.max(
          80,
          Math.min(180, getVisualWidth(localizedTag) * 10.5 + 24),
        );
        const element = `
          <g transform="translate(${currentX}, 416)">
            <rect width="${textWidth}" height="32" rx="6" fill="#14151f" stroke="#252736" stroke-width="1" />
            <text x="${textWidth / 2}" y="21" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#cbd5e1" text-anchor="middle">${escapeXml(localizedTag)}</text>
          </g>
        `;
        currentX += textWidth + 12;
        return element;
      })
      .join("");
  }

  let cardInnerContent = "";
  if (!imagePath) {
    // If no image, display the real Lagrange simulation
    cardInnerContent = `
      ${renderRealLagrangeSimulation()}
      <g transform="translate(24, 375)">
        <line x1="0" y1="0" x2="397" y2="0" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1"/>
        <text x="198" y="28" font-family="'Courier New', monospace" font-size="13" font-weight="700" fill="#e2e8f0" letter-spacing="1.5" text-anchor="middle">${escapeXml(loc.lagrangeTitle)}</text>
        <text x="198" y="47" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="400" fill="#94a3b8" text-anchor="middle">${escapeXml(loc.lagrangeDesc)}</text>
      </g>
    `;
  } else {
    // Themed artwork frame (image composited at left: 709, top: 120, w: 397, h: 265)
    cardInnerContent = `
      <g transform="translate(24, 410)">
        <line x1="0" y1="0" x2="397" y2="0" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1"/>
        <text x="0" y="22" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#64748b">${escapeXml(loc.statusVerified)}</text>
        <text x="210" y="22" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#64748b">${escapeXml(loc.categoryLabel)}: <tspan fill="${accentColor}">${type.toUpperCase()}</tspan></text>
        <text x="0" y="40" font-family="'Courier New', monospace" font-size="10" font-weight="600" fill="#475569">${escapeXml(loc.polymathArchive)}</text>
      </g>
    `;
  }

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="nebulaLeft" cx="20%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#101116" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="nebulaRight" cx="80%" cy="50%" r="60%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#101116" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sunAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.85"/>
      <stop offset="35%" stop-color="#f59e0b" stop-opacity="0.35"/>
      <stop offset="70%" stop-color="#d97706" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#b45309" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="planetGlow" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#93c5fd"/>
      <stop offset="50%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </radialGradient>
  </defs>

  <!-- Deep Space Canvas -->
  <rect width="100%" height="100%" fill="#101116"/>
  <rect width="100%" height="100%" fill="url(#nebulaLeft)"/>
  <rect width="100%" height="100%" fill="url(#nebulaRight)"/>

  <!-- Celestial Stars Backdrop -->
  ${starsSvg}

  <!-- Outer Card Frame Inset -->
  <rect x="24" y="24" width="1152" height="582" rx="20" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1.2"/>

  <!-- LEFT COLUMN -->
  <!-- Kicker -->
  <g transform="translate(70, 85)">
    <circle cx="6" cy="6" r="4.5" fill="${kickerDotColor}"/>
    <circle cx="6" cy="6" r="8" fill="${kickerDotColor}" fill-opacity="0.2"/>
    <text x="24" y="10" font-family="'Courier New', monospace" font-size="13" font-weight="700" fill="${kickerTextColor}" letter-spacing="2">${escapedKicker}</text>
  </g>

  <!-- Title -->
  <text font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="${titleFontSize}" font-weight="900" fill="#ffffff" letter-spacing="-1">
    ${titleSvg}
  </text>

  <!-- Meta Row -->
  ${metaLine}

  <!-- Subtitle -->
  <text font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="400" fill="#8492a6">
    ${subtitleSvg}
  </text>

  <!-- Tags Row -->
  ${tagElements}

  <!-- Author Signature Dock -->
  <g transform="translate(70, 480)">
    <rect width="530" height="74" rx="16" fill="#13141c" stroke="#252736" stroke-width="1"/>
    <circle cx="46" cy="37" r="30" fill="none" stroke="${accentColor}" stroke-width="2"/>
    
    <text x="90" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700" fill="#ffffff">Cristian Arando</text>
    <text x="90" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" fill="${accentColor}">${escapeXml(displayRole)}</text>

    <!-- Language Badge inside dock -->
    <g transform="translate(440, 18)">
      <rect width="64" height="38" rx="8" fill="#1b1c26" stroke="${accentColor}" stroke-width="1.2"/>
      <text x="32" y="24" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="${accentColor}" text-anchor="middle">${langUpper}</text>
    </g>
  </g>

  <!-- RIGHT COLUMN: Bento Card -->
  <g transform="translate(685, 65)">
    <rect width="445" height="500" rx="24" fill="#13141c" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1.5"/>

    <!-- Header of Card -->
    <g transform="translate(24, 26)">
      <text x="0" y="14" font-family="'Courier New', monospace" font-size="12" font-weight="700" fill="#94a3b8" letter-spacing="1.5">${escapeXml(cardTitle)}</text>
      <g transform="translate(325, 4)">
        <circle cx="5" cy="6" r="3.5" fill="${cardStatusColor}"/>
        <text x="14" y="10" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="${cardStatusColor}" letter-spacing="1">${escapeXml(cardStatus)}</text>
      </g>
      <line x1="0" y1="26" x2="397" y2="26" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1"/>
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
  width = 397,
  height = 265,
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

  // 1. Author Avatar for non-home cards
  if (data.type !== "home") {
    const avatarPath =
      data.avatarPath || path.resolve("src/assets/images/me.webp");
    try {
      const avatarBuf = await createCircularAvatar(avatarPath, 56);
      composites.push({ input: avatarBuf, top: 489, left: 88 });
    } catch {
      // If avatar missing, skip silently
    }
  }

  // 2. Themed Artwork Image for non-home cards
  if (data.type !== "home" && data.imagePath) {
    try {
      const themedBuf = await createRoundedThemedImage(
        data.imagePath,
        397,
        265,
      );
      composites.push({ input: themedBuf, top: 120, left: 709 });
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
