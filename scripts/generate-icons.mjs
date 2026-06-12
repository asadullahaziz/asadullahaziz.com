/**
 * Generate the favicon raster + .ico set from the master SVG.
 *
 * Source of truth: docs/favicon.svg (self-contained "A" monogram on a dark
 * rounded square — works on both light and dark browser chrome, so there is
 * a single favicon rather than light/dark variants).
 *
 * Run with: node scripts/generate-icons.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'docs/favicon.svg');
const outDir = resolve(root, 'public/icons');

const pngTargets = [
  { name: 'favicon-16.png', size: 16 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-512.png', size: 512 },
];

/** Wrap raw PNG buffers into a single multi-size .ico container. */
function pngsToIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4); // image count

  const entries = [];
  const blobs = [];
  let offset = 6 + images.length * 16;

  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 == 256)
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // palette count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset
    offset += data.length;
    entries.push(entry);
    blobs.push(data);
  }

  return Buffer.concat([header, ...entries, ...blobs]);
}

const svg = await readFile(source);

for (const { name, size } of pngTargets) {
  const png = await sharp(svg).resize(size, size).png().toBuffer();
  await writeFile(resolve(outDir, name), png);
  console.log(`wrote icons/${name}`);
}

// Copy the master SVG into public so it can ship as the primary favicon.
await writeFile(resolve(outDir, 'favicon.svg'), svg);
console.log('wrote icons/favicon.svg');

const ico16 = await sharp(svg).resize(16, 16).png().toBuffer();
const ico32 = await sharp(svg).resize(32, 32).png().toBuffer();
await writeFile(
  resolve(outDir, 'favicon.ico'),
  pngsToIco([
    { size: 16, data: ico16 },
    { size: 32, data: ico32 },
  ]),
);
console.log('wrote icons/favicon.ico');
