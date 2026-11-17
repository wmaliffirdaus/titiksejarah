#!/usr/bin/env node
// Render the promo canvas (promo/promo.html) to video frames.
// node promo/render.mjs --hook A                 -> promo/work/video_A.mp4 (silent)
// node promo/render.mjs --hook A --stills 0,1.2  -> promo/work/still_A_<t>.jpg
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 ? args[i + 1] : d; };
const HOOK = opt('hook', 'A'), FPS = 30, WORKERS = Number(opt('workers', 4));
const WORK = path.join(ROOT, 'promo/work');

const types = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.woff2': 'font/woff2', '.jpg': 'image/jpeg', '.png': 'image/png' };
const srv = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': types[path.extname(p)] || 'application/octet-stream' });
  fs.createReadStream(p).pipe(res);
});
await new Promise((r) => srv.listen(0, '127.0.0.1', r));
const url = `http://127.0.0.1:${srv.address().port}/promo/promo.html?hook=${HOOK}`;
const browser = await chromium.launch();

async function page() {
  const pg = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await pg.goto(url); await pg.evaluate(() => window.TS.init());
  return pg;
}
const toBuf = (d) => Buffer.from(d.split(',')[1], 'base64');

const stills = opt('stills');
if (stills) {
  const pg = await page();
  for (const t of stills.split(',').map(Number)) {
    fs.writeFileSync(path.join(WORK, `still_${HOOK}_${t}.jpg`), toBuf(await pg.evaluate((x) => window.TS.render(x), t)));
  }
} else {
  const dur = await (await page()).evaluate(() => window.TS.duration);
  const n = Math.round(dur * FPS), per = Math.ceil(n / WORKERS);
  const segs = [];
  await Promise.all([...Array(WORKERS).keys()].map(async (w) => {
    const a = w * per, b = Math.min(n, a + per); if (a >= b) return;
    const pg = await page(); const seg = path.join(WORK, `seg_${HOOK}_${w}.mp4`); segs[w] = seg;
    const ff = spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
      '-c:v', 'libx264', '-preset', 'medium', '-crf', '17', '-pix_fmt', 'yuv420p', '-r', String(FPS), seg], { stdio: ['pipe', 'inherit', 'inherit'] });
    const done = new Promise((r, j) => ff.on('close', (c) => (c === 0 ? r() : j(new Error('ffmpeg ' + c)))));
    for (let f = a; f < b; f++) {
      const buf = toBuf(await pg.evaluate((x) => window.TS.render(x), f / FPS));
      if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
    }
    ff.stdin.end(); await done;
  }));
  const list = path.join(WORK, `segs_${HOOK}.txt`);
  fs.writeFileSync(list, segs.filter(Boolean).map((s) => `file '${s}'`).join('\n'));
  await new Promise((r, j) => spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', path.join(WORK, `video_${HOOK}.mp4`)], { stdio: 'inherit' }).on('close', (c) => (c ? j(c) : r())));
  console.log('video', path.join(WORK, `video_${HOOK}.mp4`), n, 'frames');
}
await browser.close(); srv.close();
