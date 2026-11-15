#!/usr/bin/env node
// Renders the 1K-followers TikTok Story poster (1080x1920) to output/posters/.
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
const out = path.join(ROOT, 'output', 'posters');
fs.mkdirSync(out, { recursive: true });
const br = await chromium.launch();
const page = await br.newPage({ viewport: { width: 1080, height: 1920 } });
page.on('pageerror', (e) => console.error('[page error]', e.message));
await page.goto(`http://127.0.0.1:${srv.address().port}/engine/poster_1k.html`, { waitUntil: 'networkidle' });
await page.waitForFunction(() => window.__done === true);
await page.screenshot({ path: path.join(out, 'TitikSejarah_1K_Followers_Story.png') });
await page.screenshot({ path: path.join(out, 'TitikSejarah_1K_Followers_Story.jpg'), type: 'jpeg', quality: 95 });
await br.close(); srv.close();
console.log('poster ->', out);
