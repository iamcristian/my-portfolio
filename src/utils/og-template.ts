import sharp from "sharp";

export type Lang = "en" | "es" | "de" | "ja" | "ru";

export interface OGCardData {
  type: "home" | "blog" | "project" | "hub";
  lang: Lang;
  title: string;
  subtitle?: string;
  category?: string;
  tags?: string[];
  date?: string;
  readTime?: string;
}

/**
 * Escapes characters for safe inclusion in SVG XML.
 */
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Calculates visual display width considering CJK full-width characters.
 */
function getVisualWidth(str: string): number {
  let width = 0;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    // CJK Radicals, Ideographs, Hiragana, Katakana, Hangul, Fullwidth punctuation
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
 * Robust text wrapping that respects both space-separated languages (EN, ES, DE, RU)
 * and continuous character scripts like Japanese (JA).
 */
function wrapText(
  text: string,
  maxVisualWidth: number,
  maxLines = 3,
): string[] {
  if (!text) return [];

  // If text has spaces (Latin/Cyrillic), split by words
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

  // Continuous script (e.g. Japanese without spaces)
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
    category = type.toUpperCase(),
    tags = [],
    date,
    readTime,
  } = data;

  const escapedTitleLines = wrapText(title, 42, 3).map(escapeXml);
  const escapedSubtitleLines = wrapText(subtitle, 66, 2).map(escapeXml);
  const escapedCategory = escapeXml(category);
  const langUpper = lang.toUpperCase();

  // Dynamic theme colors by type
  let accentColor = "#38bdf8"; // Cyan for home / systems
  let secondaryColor = "#6366f1"; // Indigo
  let badgeBorder = "#38bdf8";

  if (type === "blog") {
    accentColor = "#38bdf8";
    secondaryColor = "#818cf8";
    badgeBorder = "#818cf8";
  } else if (type === "project") {
    accentColor = "#34d399"; // Emerald for projects/workstation
    secondaryColor = "#38bdf8";
    badgeBorder = "#34d399";
  }

  // Dynamic tag capsules (up to 4 tags)
  let tagElements = "";
  if (tags.length > 0) {
    let currentX = 72;
    tagElements = tags
      .slice(0, 4)
      .map((tag) => {
        const textWidth = Math.max(
          90,
          Math.min(220, getVisualWidth(tag) * 11 + 32),
        );
        const element = `
          <g transform="translate(${currentX}, 500)">
            <rect width="${textWidth}" height="36" rx="18" fill="#1e293b" stroke="#334155" stroke-width="1.2" />
            <text x="${textWidth / 2}" y="23" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#94a3b8" text-anchor="middle">${escapeXml(tag)}</text>
          </g>
        `;
        currentX += textWidth + 14;
        return element;
      })
      .join("");
  }

  // Metadata line (date, readTime)
  let metaLine = "";
  if (date || readTime) {
    const parts: string[] = [];
    if (date) parts.push(`📅 ${escapeXml(date)}`);
    if (readTime) parts.push(`⏱️ ${escapeXml(readTime)}`);
    metaLine = `
      <text x="72" y="470" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="500" fill="#64748b">
        ${parts.join("   •   ")}
      </text>
    `;
  }

  // Compute vertical layout balance
  const titleStartY =
    escapedTitleLines.length === 1
      ? 285
      : escapedTitleLines.length === 2
        ? 245
        : 215;
  const titleLineHeight = 58;

  const titleSvg = escapedTitleLines
    .map(
      (line, i) =>
        `<tspan x="72" y="${titleStartY + i * titleLineHeight}">${line}</tspan>`,
    )
    .join("");

  const subtitleStartY =
    titleStartY + escapedTitleLines.length * titleLineHeight + 16;
  const subtitleSvg = escapedSubtitleLines
    .map(
      (line, i) =>
        `<tspan x="72" y="${subtitleStartY + i * 34}">${line}</tspan>`,
    )
    .join("");

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080c14" />
      <stop offset="45%" stop-color="#0c1322" />
      <stop offset="100%" stop-color="#04060a" />
    </linearGradient>

    <!-- Ambient Primary Radial Glow -->
    <radialGradient id="primaryGlow" cx="85%" cy="15%" r="48%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.20" />
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0" />
    </radialGradient>

    <!-- Ambient Secondary Radial Glow -->
    <radialGradient id="secondaryGlow" cx="15%" cy="85%" r="45%">
      <stop offset="0%" stop-color="${secondaryColor}" stop-opacity="0.16" />
      <stop offset="100%" stop-color="${secondaryColor}" stop-opacity="0" />
    </radialGradient>

    <!-- Subtle Tech Grid with Dot Matrix -->
    <pattern id="techGrid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#334155" stroke-width="0.7" stroke-opacity="0.3" />
      <circle cx="48" cy="0" r="1.5" fill="#38bdf8" fill-opacity="0.22" />
    </pattern>
  </defs>

  <!-- Deep Canvas Backgrounds -->
  <rect width="100%" height="100%" fill="url(#bgGradient)" />
  <rect width="100%" height="100%" fill="url(#techGrid)" />
  <rect width="100%" height="100%" fill="url(#primaryGlow)" />
  <rect width="100%" height="100%" fill="url(#secondaryGlow)" />

  <!-- Outer Border Frame with High-Tech Inset -->
  <rect x="32" y="32" width="1136" height="566" rx="24" fill="none" stroke="#1e293b" stroke-width="2" />
  <rect x="36" y="36" width="1128" height="558" rx="20" fill="none" stroke="${accentColor}" stroke-width="1" stroke-opacity="0.32" />

  <!-- Cybernetic Corner Brackets -->
  <path d="M 32 64 L 32 32 L 64 32" fill="none" stroke="${accentColor}" stroke-width="3.5" stroke-linecap="round" />
  <path d="M 1168 64 L 1168 32 L 1136 32" fill="none" stroke="${accentColor}" stroke-width="3.5" stroke-linecap="round" />
  <path d="M 32 566 L 32 598 L 64 598" fill="none" stroke="${accentColor}" stroke-width="3.5" stroke-linecap="round" />
  <path d="M 1168 566 L 1168 598 L 1136 598" fill="none" stroke="${accentColor}" stroke-width="3.5" stroke-linecap="round" />

  <!-- Header Section -->
  <g transform="translate(72, 74)">
    <!-- Terminal Command Capsule -->
    <rect width="254" height="42" rx="21" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" stroke-opacity="0.6" />
    <circle cx="22" cy="21" r="5" fill="#10b981" />
    <text x="36" y="26" font-family="'Courier New', monospace" font-size="15" font-weight="700" fill="#38bdf8" letter-spacing="0.5">>_ cristianarando.dev</text>

    <!-- Category Pill -->
    <g transform="translate(272, 0)">
      <rect width="210" height="42" rx="21" fill="#1e293b" stroke="#475569" stroke-width="1" />
      <text x="105" y="26" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="13" font-weight="700" fill="#e2e8f0" letter-spacing="1.5" text-anchor="middle">${escapedCategory}</text>
    </g>

    <!-- Language Badge (Right-Aligned) -->
    <g transform="translate(970, 0)">
      <rect width="84" height="42" rx="10" fill="#0f172a" stroke="${badgeBorder}" stroke-width="1.5" />
      <text x="42" y="27" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="15" font-weight="800" fill="${badgeBorder}" letter-spacing="2" text-anchor="middle">${langUpper}</text>
    </g>
  </g>

  <!-- Title & Subtitle Main Content -->
  <text font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans', 'Segoe UI Historic', 'Arial Unicode MS', sans-serif" font-size="49" font-weight="800" fill="#f8fafc" letter-spacing="-0.5">
    ${titleSvg}
  </text>

  <text font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans', 'Segoe UI Historic', 'Arial Unicode MS', sans-serif" font-size="22" font-weight="400" fill="#94a3b8">
    ${subtitleSvg}
  </text>

  <!-- Optional Meta Details (Date & ReadTime) -->
  ${metaLine}

  <!-- Tags Capsules -->
  ${tagElements}

  <!-- Footer Section -->
  <g transform="translate(72, 545)">
    <line x1="0" y1="0" x2="1056" y2="0" stroke="#1e293b" stroke-width="1.5" />

    <!-- Left: Author Profile Pill -->
    <g transform="translate(0, 16)">
      <!-- Avatar Circle -->
      <circle cx="20" cy="18" r="18" fill="#0f172a" stroke="${accentColor}" stroke-width="1.5" />
      <text x="20" y="23" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" fill="${accentColor}" text-anchor="middle">CA</text>
      <!-- Author Text -->
      <text x="50" y="16" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="18" font-weight="700" fill="#f1f5f9">Cristian Arando</text>
      <text x="50" y="32" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="13" font-weight="500" fill="#64748b">Software &amp; Systems Engineer</text>
    </g>

    <!-- Right: Architecture Core Tag -->
    <g transform="translate(885, 22)">
      <circle cx="10" cy="10" r="4" fill="${accentColor}" />
      <text x="22" y="14" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="13" font-weight="600" fill="#64748b" letter-spacing="1">POLYMATH ARCHIVE</text>
    </g>
  </g>
</svg>`;
}

export async function renderOGPng(data: OGCardData): Promise<Buffer> {
  const svg = generateOGSvg(data);
  return await sharp(Buffer.from(svg))
    .png({ quality: 90, compressionLevel: 8 })
    .toBuffer();
}
