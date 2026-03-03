/**
 * generate-pictures.mjs
 * Scans your local picture folder for supported images, copies them to
 * public/pictures/, and writes src/pictures.ts with the manifest array.
 *
 * Usage:
 *   node generate-pictures.mjs
 *
 * Supported formats: JPG, JPEG, PNG, WEBP
 * NOTE: HEIC files (iPhone format) are NOT supported by most browsers.
 *       Convert them to JPG first: e.g. with sips on macOS:
 *         for f in Picture/*.HEIC; do sips -s format jpeg "$f" --out "Picture/$(basename "$f" .HEIC).jpg"; done
 */

import { readdirSync, copyFileSync, mkdirSync, existsSync, writeFileSync } from 'fs';
import { join, extname } from 'path';

// ── Config ────────────────────────────────────────────────────────────────────
const SOURCE_DIRS   = ['./Picture ', './Picture', './pictures'];  // 'Picture ' has a trailing space
const OUTPUT_DIR    = './public/pictures';
const MANIFEST_FILE = './src/pictures.ts';
const SUPPORTED     = new Set(['.jpg', '.jpeg', '.png', '.webp']);
// ─────────────────────────────────────────────────────────────────────────────

function cleanTitle(filename) {
  const noExt  = filename.replace(/\.[^/.]+$/, '');
  const spaced = noExt.replace(/[-_()\[\]]/g, ' ').replace(/\s+/g, ' ').trim();
  return spaced.replace(/\b\w/g, c => c.toUpperCase());
}

// 1. Ensure output directory exists
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`Created: ${OUTPUT_DIR}`);
}

// 2. Collect unique supported image files
const seen    = new Set();
const entries = [];

for (const dir of SOURCE_DIRS) {
  if (!existsSync(dir)) continue;

  const files = readdirSync(dir).sort();
  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!SUPPORTED.has(ext))  continue;
    if (seen.has(file))       continue;

    const srcPath  = join(dir, file);
    const destPath = join(OUTPUT_DIR, file);

    // Copy to public/pictures (skip if already there)
    if (srcPath !== destPath) {
      copyFileSync(srcPath, destPath);
      console.log(`  Copied: ${file}`);
    }

    seen.add(file);
    entries.push({ filename: file, url: `/pictures/${file}`, title: cleanTitle(file) });
  }
}

// 3. Write manifest
const manifest = `// AUTO-GENERATED — run: node generate-pictures.mjs
// Do not edit by hand; re-run the script after adding/removing images.
// Found ${entries.length} browser-compatible image(s).
//
// NOTE: HEIC files were skipped (not supported by web browsers).
//       Convert them to JPG with:
//         for f in Picture/*.HEIC; do sips -s format jpeg "$f" --out "Picture/$(basename "$f" .HEIC).jpg"; done

export interface PictureEntry {
  filename: string;
  url: string;  // served from public/pictures/
  title: string;
}

export const pictures: PictureEntry[] = ${JSON.stringify(entries, null, 2)};
`;

writeFileSync(MANIFEST_FILE, manifest, 'utf-8');

console.log(`\n✓ Manifest written → ${MANIFEST_FILE}  (${entries.length} image${entries.length === 1 ? '' : 's'})`);
console.log('✓ Images served from  public/pictures/');

if (entries.length === 0) {
  console.warn('\n⚠ No supported images found. Put JPG/JPEG/PNG/WEBP files in ./Picture/ then re-run.');
}
