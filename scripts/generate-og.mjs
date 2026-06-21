/**
 * Generate the Open Graph share card (public/images/og/default.png, 1200x630).
 *
 * Mirrors the site brand: white background, accent (#2e59ba) on key phrases,
 * the real headshot (public/images/me.jpg) as a circular avatar, name + domain
 * in the header, a 3-line headline, and monospace tech chips.
 *
 * Run with: node scripts/generate-og.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const avatarSrc = resolve(root, 'public/images/me.jpg');
const outFile = resolve(root, 'public/images/og/default.png');

const W = 1200;
const H = 630;
const PAD = 72;

// Brand tokens (app/styles/tokens/colors.css)
const FG = '#1d1d1f';
const MUTED = '#58585d';
const ACCENT = '#2e59ba';
const BORDER = 'rgba(0,0,0,0.12)';
const CHIP_BG = 'rgba(0,0,0,0.02)';

const SANS =
  "-apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const MONO = "'SF Mono', Menlo, Monaco, 'Courier New', monospace";

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// --- Header ---
const AV = 64; // avatar diameter
const avCx = PAD + AV / 2;
const avCy = PAD + AV / 2;
const nameX = PAD + AV + 20;
const headerBaseline = avCy + 11;

// --- Headline ---
// Each line is a list of { text, accent } runs.
const HEAD_SIZE = 58;
const HEAD_LH = 74;
const headTop = 286; // baseline of first line
const lines = [
  [{ text: 'Senior Software Engineer', accent: false }],
  [
    { text: 'building ', accent: false },
    { text: 'AI-native software', accent: true },
  ],
  [
    { text: 'that ', accent: false },
    { text: 'scales with the business', accent: true },
    { text: '.', accent: false },
  ],
];

// rough advance width for the sans bold headline (~0.56em average)
const headRun = (run) =>
  `<tspan fill="${run.accent ? ACCENT : FG}">${esc(run.text)}</tspan>`;

const headlineSvg = lines
  .map((runs, i) => {
    const y = headTop + i * HEAD_LH;
    return `<text xml:space="preserve" x="${PAD}" y="${y}" font-family="${SANS}" font-size="${HEAD_SIZE}" font-weight="700" letter-spacing="-1.2">${runs
      .map(headRun)
      .join('')}</text>`;
  })
  .join('\n');

// --- Chips ---
const CHIP_SIZE = 20;
const CHIP_H = 46;
const CHIP_PADX = 22;
const CHIP_GAP = 18;
const CHIP_Y = H - PAD - CHIP_H;
const CHIP_CHAR = CHIP_SIZE * 0.6; // monospace advance
const chips = [
  'Distributed Systems',
  'LLM / RAG & Multi-Agent',
  'Node.js / FastAPI / Next.js',
];

let chipX = PAD;
const chipSvg = chips
  .map((label) => {
    const w = Math.round(label.length * CHIP_CHAR) + CHIP_PADX * 2;
    const x = chipX;
    chipX += w + CHIP_GAP;
    const textY = CHIP_Y + CHIP_H / 2 + CHIP_SIZE * 0.35;
    return `<g>
      <rect x="${x}" y="${CHIP_Y}" width="${w}" height="${CHIP_H}" rx="12" fill="${CHIP_BG}" stroke="${BORDER}" stroke-width="1.5"/>
      <text x="${x + w / 2}" y="${textY}" text-anchor="middle" font-family="${MONO}" font-size="${CHIP_SIZE}" fill="${MUTED}">${esc(
        label,
      )}</text>
    </g>`;
  })
  .join('\n');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <!-- subtle accent wash, bottom-right -->
  <defs>
    <radialGradient id="glow" cx="100%" cy="100%" r="90%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.07"/>
      <stop offset="60%" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- header: avatar ring + name -->
  <circle cx="${avCx}" cy="${avCy}" r="${AV / 2 + 2}" fill="none" stroke="${BORDER}" stroke-width="1.5"/>
  <text x="${nameX}" y="${headerBaseline}" font-family="${SANS}" font-size="30" font-weight="700" fill="${FG}">Asad Ullah Aziz</text>
  <text x="${W - PAD}" y="${headerBaseline}" text-anchor="end" font-family="${MONO}" font-size="20" fill="${MUTED}">asadullahaziz.com</text>

  ${headlineSvg}
  ${chipSvg}
</svg>`;

// Circular avatar from the real headshot, composited over the rendered SVG.
const mask = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${AV}" height="${AV}"><circle cx="${AV / 2}" cy="${AV / 2}" r="${AV / 2}" fill="#fff"/></svg>`,
);
const avatar = await sharp(avatarSrc)
  .resize(AV, AV, { fit: 'cover' })
  .composite([{ input: mask, blend: 'dest-in' }])
  .png()
  .toBuffer();

const base = await sharp(Buffer.from(svg)).png().toBuffer();

await sharp(base)
  .composite([{ input: avatar, left: PAD, top: PAD }])
  .png()
  .toFile(outFile);

console.log(`wrote ${outFile.replace(`${root}/`, '')}`);
