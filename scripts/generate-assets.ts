import sharp from "sharp";
import { SITE } from "../src/config/site.ts";
import { ui } from "../src/i18n/ui.ts";

const width = 1903;
const height = 955;

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function generateManifestScreenshot() {
  const name = escapeXml(SITE.name);
  const role = escapeXml(ui.en["home.subtitle"]);
  const tagline = escapeXml(ui.en["home.tagline"]);
  const ctaPrimary = escapeXml(ui.en["home.downloadCv"]);
  const ctaSecondary = escapeXml(ui.en["home.contactMe"]);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <radialGradient id="nebula1" cx="25%" cy="30%" r="45%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#0f0f12" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="nebula2" cx="78%" cy="65%" r="40%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#0f0f12" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#c4b5fd"/>
      <stop offset="50%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#93c5fd"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="#0f0f12"/>
  <rect width="${width}" height="${height}" fill="url(#nebula1)"/>
  <rect width="${width}" height="${height}" fill="url(#nebula2)"/>

  <!-- Header Navigation Bar -->
  <line x1="0" y1="76" x2="${width}" y2="76" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <text x="160" y="48" fill="#f4f4f6" font-family="Inter, system-ui, sans-serif" font-size="22" font-weight="700">${name}</text>
  <g fill="#a1a1aa" font-family="Inter, system-ui, sans-serif" font-size="15" font-weight="500">
    <text x="680" y="46">Home</text>
    <text x="760" y="46">About</text>
    <text x="840" y="46">Education</text>
    <text x="950" y="46">Experience</text>
    <text x="1065" y="46">Projects</text>
    <text x="1160" y="46">Skills</text>
    <text x="1235" y="46">Blog</text>
  </g>
  <text x="1640" y="46" fill="#d4d4d8" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="600">Search   EN</text>

  <!-- Left Column: Hero Content -->
  <circle cx="166" cy="272" r="4" fill="#a78bfa"/>
  <text x="180" y="277" fill="#a78bfa" font-family="monospace" font-size="14" font-weight="700" letter-spacing="3">HELLO, I&apos;M</text>
  <text x="160" y="365" fill="url(#titleGrad)" font-family="Inter, system-ui, sans-serif" font-size="82" font-weight="800">${name}</text>
  <text x="160" y="430" fill="#e4e4e7" font-family="Inter, system-ui, sans-serif" font-size="32" font-weight="600">${role}</text>

  <line x1="162" y1="468" x2="162" y2="528" stroke="rgba(167,139,250,0.45)" stroke-width="3"/>
  <text x="182" y="492" fill="#a1a1aa" font-family="Inter, system-ui, sans-serif" font-size="19">${tagline.slice(0, 58)}</text>
  <text x="182" y="520" fill="#a1a1aa" font-family="Inter, system-ui, sans-serif" font-size="19">${tagline.slice(58).trim()}</text>

  <!-- CTA Buttons -->
  <rect x="160" y="575" width="168" height="52" rx="12" fill="#f4f4f6"/>
  <text x="244" y="607" fill="#0f0f12" font-family="Inter, system-ui, sans-serif" font-size="17" font-weight="700" text-anchor="middle">${ctaPrimary}</text>

  <rect x="348" y="575" width="184" height="52" rx="12" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="1.5"/>
  <text x="440" y="607" fill="#f4f4f6" font-family="Inter, system-ui, sans-serif" font-size="17" font-weight="700" text-anchor="middle">${ctaSecondary}</text>

  <!-- Right Column: Lagrange Equilibrium Card -->
  <rect x="1220" y="210" width="490" height="540" rx="24" fill="rgba(24,24,30,0.85)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
  <text x="1256" y="254" fill="#a1a1aa" font-family="monospace" font-size="12" letter-spacing="1.5">ORBITAL.RESONANCE // ACTIVE</text>
  <text x="1615" y="254" fill="#a1a1aa" font-family="monospace" font-size="12">SYS.REV: 04</text>

  <circle cx="1465" cy="455" r="145" fill="none" stroke="rgba(167,139,250,0.22)" stroke-width="1.5" stroke-dasharray="6 6"/>
  <circle cx="1465" cy="455" r="88" fill="none" stroke="rgba(56,189,248,0.3)" stroke-width="1.5"/>
  <circle cx="1465" cy="455" r="24" fill="rgba(167,139,250,0.25)" stroke="#c4b5fd" stroke-width="2"/>
  <circle cx="1320" cy="455" r="6" fill="#38bdf8"/>
  <circle cx="1610" cy="455" r="6" fill="#38bdf8"/>
  <circle cx="1538" cy="330" r="6" fill="#a78bfa"/>
  <circle cx="1538" cy="580" r="6" fill="#a78bfa"/>

  <text x="1465" y="655" fill="#e4e4e7" font-family="monospace" font-size="16" font-weight="700" letter-spacing="2" text-anchor="middle">LAGRANGE_EQUILIBRIUM</text>
  <text x="1465" y="682" fill="#a1a1aa" font-family="Inter, system-ui, sans-serif" font-size="13" text-anchor="middle">The fundamental forces balancing my engineering</text>
  <text x="1256" y="724" fill="#71717a" font-family="monospace" font-size="11">SYSTEM: BALANCED</text>
  <text x="1560" y="724" fill="#71717a" font-family="monospace" font-size="11">COHESION: OPTIMAL</text>
</svg>`;

  await sharp(Buffer.from(svg))
    .webp({ quality: 92 })
    .toFile("public/screenshot.webp");
  console.log(
    `Generated public/screenshot.webp (${width}x${height}) with "${SITE.jobTitle}" and "${ui.en["home.downloadCv"]}".`,
  );
}

generateManifestScreenshot().catch((err: unknown) => {
  console.error("Failed to generate assets:", err);
  process.exit(1);
});
