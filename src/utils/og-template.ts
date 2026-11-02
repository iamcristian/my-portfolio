import sharp from "sharp";
import path from "node:path";

export type Lang = "en" | "es" | "de" | "ja" | "ru";

export interface OGCardData {
  type: "home" | "blog" | "project" | "hub";
  lang: Lang;
  title: string;
  subtitle?: string;
  kicker?: string;
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

    for (const word of words) {
      const candidate = currentLine ? `${currentLine} ${word}` : word;
      if (getVisualWidth(candidate) <= maxVisualWidth) {
        currentLine = candidate;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
        if (lines.length >= maxLines - 1) break;
      }
    }

    if (currentLine && lines.length < maxLines) {
      lines.push(currentLine);
    }

    if (lines.length > maxLines) {
      lines.length = maxLines;
    }
    return lines;
  }

  const lines: string[] = [];
  let current = "";
  for (const char of text) {
    if (getVisualWidth(current + char) > maxVisualWidth) {
      lines.push(current);
      current = char;
      if (lines.length >= maxLines - 1) break;
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
    kicker = type === "home" ? "HELLO, I'M" : type.toUpperCase(),
    tags = [],
    date,
    readTime,
    imagePath,
  } = data;

  const escapedTitleLines = wrapText(title, 34, 3).map(escapeXml);
  const escapedSubtitleLines = wrapText(subtitle, 54, 2).map(escapeXml);
  const escapedKicker = escapeXml(kicker);
  const langUpper = lang.toUpperCase();

  // Accent colors
  let accentColor = "#38bdf8"; // Cyan
  let kickerDotColor = "#10b981"; // Emerald
  let cardTitle = "ORBITAL.RESONANCE";
  let cardStatus = "ACTIVE";
  let cardStatusColor = "#10b981";

  if (type === "blog") {
    accentColor = "#f59e0b"; // Amber / Gold
    kickerDotColor = "#f59e0b";
    cardTitle = "EDITORIAL.THEME";
    cardStatus = "CURATED";
    cardStatusColor = "#f59e0b";
  } else if (type === "project") {
    accentColor = "#38bdf8"; // Cyan
    kickerDotColor = "#38bdf8";
    cardTitle = "SIMULATION.WORKSTATION";
    cardStatus = "LIVE";
    cardStatusColor = "#10b981";
  } else if (type === "hub") {
    accentColor = "#818cf8"; // Indigo
    kickerDotColor = "#818cf8";
    cardTitle = "ARCHIVE.INDEX";
    cardStatus = "INDEXED";
    cardStatusColor = "#818cf8";
  }

  const starsSvg = generateStars(48, 1337);

  // Tags
  let tagElements = "";
  if (tags.length > 0) {
    let currentX = 72;
    tagElements = tags
      .slice(0, 3)
      .map((tag) => {
        const textWidth = Math.max(
          85,
          Math.min(180, getVisualWidth(tag) * 11 + 24),
        );
        const element = `
          <g transform="translate(${currentX}, 412)">
            <rect width="${textWidth}" height="32" rx="6" fill="#161a23" stroke="#262f3d" stroke-width="1" />
            <text x="${textWidth / 2}" y="21" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#cbd5e1" text-anchor="middle">${escapeXml(tag)}</text>
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
        ? 44
        : 38;
  const titleLineHeight = isHome ? 64 : 50;
  const titleStartY = isHome ? 172 : escapedTitleLines.length === 1 ? 185 : 155;

  const titleSvg = escapedTitleLines
    .map(
      (line, i) =>
        `<tspan x="72" y="${titleStartY + i * titleLineHeight}">${line}</tspan>`,
    )
    .join("");

  const subtitleStartY =
    date || readTime
      ? 338
      : titleStartY + escapedTitleLines.length * titleLineHeight + 16;
  const subtitleSvg = escapedSubtitleLines
    .map(
      (line, i) =>
        `<tspan x="72" y="${subtitleStartY + i * 28}">${line}</tspan>`,
    )
    .join("");

  // Card Inner Graphic
  let cardInnerContent = "";
  if (!imagePath || isHome) {
    // Lagrange Equilibrium graphic
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
        <text x="191" y="24" font-family="'Courier New', monospace" font-size="13" font-weight="700" fill="#ffffff" letter-spacing="1.5" text-anchor="middle">LAGRANGE_EQUILIBRIUM</text>
        <text x="191" y="42" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="#64748b" text-anchor="middle">The fundamental forces balancing my engineering</text>
        <g transform="translate(10, 65)">
          <text x="0" y="0" font-family="'Courier New', monospace" font-size="10" font-weight="700" fill="#475569">SYSTEM: <tspan fill="#94a3b8">BALANCED</tspan></text>
          <text x="210" y="0" font-family="'Courier New', monospace" font-size="10" font-weight="700" fill="#475569">COHESION: <tspan fill="#10b981">OPTIMAL</tspan></text>
          <text x="0" y="16" font-family="'Courier New', monospace" font-size="10" font-weight="700" fill="#475569">FOCUS: <tspan fill="#38bdf8">ABSOLUTE</tspan></text>
          <text x="210" y="16" font-family="'Courier New', monospace" font-size="10" font-weight="700" fill="#475569">SYS.REV: <tspan fill="#94a3b8">2026.04</tspan></text>
        </g>
      </g>
    `;
  } else {
    // Themed artwork frame (image composited at 708, 135)
    cardInnerContent = `
      <g transform="translate(24, 410)">
        <line x1="0" y1="0" x2="387" y2="0" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1"/>
        <text x="0" y="22" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#64748b">STATUS: <tspan fill="#e2e8f0">VERIFIED</tspan></text>
        <text x="220" y="22" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#64748b">CATEGORY: <tspan fill="${accentColor}">${type.toUpperCase()}</tspan></text>
        <text x="0" y="40" font-family="'Courier New', monospace" font-size="10" font-weight="600" fill="#475569">POLYMATH ARCHIVE // CRISTIAN ARANDO</text>
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
  <text font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans', sans-serif" font-size="${titleFontSize}" font-weight="900" fill="#ffffff" letter-spacing="-1">
    ${titleSvg}
  </text>

  <!-- Meta Row (if applicable) -->
  ${metaLine}

  <!-- Subtitle / Description -->
  <text font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans', sans-serif" font-size="19" font-weight="400" fill="#8492a6">
    ${subtitleSvg}
  </text>

  <!-- Tags Row -->
  ${tagElements}

  <!-- Author Avatar & Signature Dock -->
  <g transform="translate(72, 480)">
    <rect width="530" height="74" rx="16" fill="#131720" stroke="#232a38" stroke-width="1"/>
    <circle cx="46" cy="37" r="30" fill="none" stroke="${accentColor}" stroke-width="2"/>
    
    <text x="90" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700" fill="#ffffff">Cristian Arando</text>
    <text x="90" y="52" font-family="'Courier New', monospace" font-size="13" font-weight="600" fill="${accentColor}">>_ cristianarando.dev</text>

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
      <text x="0" y="14" font-family="'Courier New', monospace" font-size="12" font-weight="700" fill="#94a3b8" letter-spacing="1.5">${cardTitle}</text>
      <g transform="translate(325, 4)">
        <circle cx="5" cy="6" r="3.5" fill="${cardStatusColor}"/>
        <text x="14" y="10" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="${cardStatusColor}" letter-spacing="1">${cardStatus}</text>
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
