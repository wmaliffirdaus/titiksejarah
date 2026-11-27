#!/usr/bin/env node
// Renders the TikTok Story posters (milestones, testimonials) (1080x1920) to output/posters/.
// Usage: node engine/posters.mjs [1k|2k|3k|4k|5k|testi01|testi02|kuiz|kbat|pakej|promo50|pakej50|chat50|coverkbat|hl_bahan|hl_promo50|hl_milestone|hl_followers|topik|topik50|weekend|checklist|goodluck|testiapp|k1promo ...]   (no args = all)
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
const all = { '1k': 'TitikSejarah_1K_Followers_Story', '2k': 'TitikSejarah_2K_Followers_Story', testi01: 'TitikSejarah_Testimoni_01_Story', testi02: 'TitikSejarah_Testimoni_02_Story', kuiz: 'TitikSejarah_Cadangan_Kuiz_Story', kbat: 'TitikSejarah_Teaser_KBAT_Story', pakej: 'TitikSejarah_Pakej_Story', '3k': 'TitikSejarah_3K_Followers_Story', '4k': 'TitikSejarah_4K_Followers_Story', '5k': 'TitikSejarah_5K_Followers_Story', promo50: 'TitikSejarah_Promo50_SPM_Story', pakej50: 'TitikSejarah_Pakej_Promo50_Story', chat50: 'TitikSejarah_Chat_Promo50_Story', coverkbat: 'TitikSejarah_Repost_Frame_KBAT_Story', hl_bahan: 'TitikSejarah_Highlight_Bahan_Sejarah', hl_promo50: 'TitikSejarah_Highlight_Promo50', hl_milestone: 'TitikSejarah_Highlight_Milestone', hl_followers: 'TitikSejarah_Highlight_Followers', topik: 'TitikSejarah_Topik_Panas_SPM2026_Story', topik50: 'TitikSejarah_Topik_Panas_Promo50_Story', weekend: 'TitikSejarah_Study_Hujung_Minggu_Story', checklist: 'TitikSejarah_Checklist_Hari_SPM_Story', goodluck: 'TitikSejarah_Semoga_Berjaya_SPM_Story', testiapp: 'TitikSejarah_Testimoni_App_Story', k1promo: 'TitikSejarah_Kertas1_Promo50_Story' };
for (const id of process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(all)) {
  await page.goto(`http://127.0.0.1:${srv.address().port}/engine/poster_${id}.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__done === true);
  // Highlight covers (hl_*) are 1080x1080 squares; everything else is a 1080x1920 Story
  const clip = id.startsWith('hl_') ? { x: 0, y: 0, width: 1080, height: 1080 } : undefined;
  await page.screenshot({ path: path.join(out, `${all[id]}.png`), clip });
  await page.screenshot({ path: path.join(out, `${all[id]}.jpg`), type: 'jpeg', quality: 95, clip });
}
await br.close(); srv.close();
console.log('posters ->', out);
