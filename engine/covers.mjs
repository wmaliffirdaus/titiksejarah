#!/usr/bin/env node
// Renders the six TikTok cover thumbnails (1080x1920 JPG) to output/covers/.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.woff2': 'font/woff2', '.jpg': 'image/jpeg' };
const srv = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': types[path.extname(p)] || 'application/octet-stream' });
  fs.createReadStream(p).pipe(res);
});
await new Promise((r) => srv.listen(0, '127.0.0.1', r));
const bi = process.argv.indexOf('--bab');
const BAB = bi > 0 ? process.argv[bi + 1] : '1';
const out = BAB === '1' ? path.join(ROOT, 'output', 'covers') : path.join(ROOT, 'output', `bab${BAB}`, 'covers');
fs.mkdirSync(out, { recursive: true });
const names = BAB === '1'
  ? { '01': '01_Bab1_Introduction', '02': '02_Bab1_Subtopik_1.1', '03': '03_Bab1_Subtopik_1.2', '04': '04_Bab1_Subtopik_1.3', '05': '05_Bab1_Subtopik_1.4', '06': '06_Bab1_Complete_Revision' }
  : { '01': '01_Bab2_Introduction', '02': '02_Bab2_Subtopik_2.1', '03': '03_Bab2_Subtopik_2.2', '04': '04_Bab2_Subtopik_2.3', '05': '05_Bab2_Subtopik_2.4', '06': '06_Bab2_Subtopik_2.5', '07': '07_Bab2_Subtopik_2.6', '08': '08_Bab2_Subtopik_2.7', '09': '09_Bab2_Subtopik_2.8', '10': '10_Bab2_Complete_Revision', '11': '11_Bab2_Latihan_KBAT' };
const br = await chromium.launch();
const page = await br.newPage({ viewport: { width: 1080, height: 1920 } });
page.on('pageerror', (e) => console.error('[page error]', e.message));
for (const ep of Object.keys(names)) {
  await page.goto(`http://127.0.0.1:${srv.address().port}/engine/cover.html?bab=${BAB}&ep=${ep}`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__done === true);
  await page.screenshot({ path: path.join(out, `${names[ep]}_cover.jpg`), type: 'jpeg', quality: 92 });
}
await br.close(); srv.close();
console.log('covers ->', out);
