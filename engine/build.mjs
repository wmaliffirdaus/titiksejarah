#!/usr/bin/env node
// Titik Sejarah – build pipeline: script -> TTS -> timeline -> audio -> frames -> MP4 + SRT + storyboard.
// Usage:
//   node engine/build.mjs all                 build all six episodes
//   node engine/build.mjs 01 03               build selected episodes
//   node engine/build.mjs 02 --stills 5,20    only render PNG stills at given seconds (design check)
//   options: --workers 3  --fps 30  --docs (only regenerate SRT/storyboards, needs prior TTS cache)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawn, execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BUILD = path.join(ROOT, 'build');
const OUT = path.join(ROOT, 'output');
const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf('--' + name); return i >= 0 ? args[i + 1] : def; };
const flag = (name) => args.includes('--' + name);
const FPS = Number(opt('fps', 30));
const WORKERS = Number(opt('workers', 3));
const ENGINE = process.env.TS_TTS || (fs.existsSync('/usr/share/mbrola/ma1/ma1') ? 'mbrola' : 'espeak');
const ALL = ['01', '02', '03', '04', '05', '06'];
let eps = args.filter((a, i) => !a.startsWith('--') && !(i > 0 && args[i - 1].startsWith('--')));
if (!eps.length || eps.includes('all')) eps = ALL;

// Pronunciation fixes applied to the spoken text only (subtitles keep correct spelling).
const SAY = [
  [/Westphalia/g, 'Westfalia'], [/\bOc Eo\b/g, 'Ok Eo'], [/\bMy Son\b/g, 'Mi Son'], [/Bab 1\b/g, 'Bab satu'],
  [/\bM\b/g, 'Masihi'], [/\bSM\b/g, 'Sebelum Masihi'],
];
const plain = (s) => s.replace(/\*\*|~~/g, '');
// Spoken text keeps **keyword** markup (the mbrola engine stresses keywords; other engines strip it).
const toSay = (s) => { let x = s.replace(/~~/g, ''); for (const [a, b] of SAY) x = x.replace(a, b); return x; };

function serve() {
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.woff2': 'font/woff2', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml' };
  const srv = http.createServer((req, res) => {
    const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
    if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'Content-Type': types[path.extname(p)] || 'application/octet-stream' });
    fs.createReadStream(p).pipe(res);
  });
  return new Promise((r) => srv.listen(0, '127.0.0.1', () => r(srv)));
}

function run(cmd, a, input) {
  return execFileSync(cmd, a, { input, maxBuffer: 1 << 28, stdio: ['pipe', 'pipe', 'inherit'] }).toString();
}

function splitSubs(text, start, end, maxLen = 62) {
  const words = text.split(/\s+/).filter(Boolean);
  const segs = [];
  let cur = [];
  const len = (arr) => plain(arr.join(' ')).length;
  for (const w of words) {
    if (cur.length && len([...cur, w]) > maxLen) { segs.push(cur); cur = []; }
    cur.push(w);
    if (/[.!?]$/.test(w) && len(cur) > maxLen * 0.55) { segs.push(cur); cur = []; }
  }
  if (cur.length) segs.push(cur);
  // balance a very short tail
  if (segs.length > 1 && len(segs[segs.length - 1]) < 14) { const t = segs.pop(); segs[segs.length - 1].push(...t); }
  // keep **highlight** pairs balanced per segment
  let open = false;
  const texts = segs.map((sg) => {
    let s = sg.join(' ');
    if (open) s = '**' + s;
    const n = (s.match(/\*\*/g) || []).length;
    if (n % 2 === 1) { s += '**'; open = true; } else open = false;
    if (open && n % 2 === 0) open = false;
    return s.replace(/~~/g, '');
  });
  const total = texts.reduce((a, s) => a + plain(s).length, 0);
  let t = start;
  return texts.map((s) => { const d = ((end - start) * plain(s).length) / total; const o = { start: t, end: t + d, text: s }; t += d; return o; });
}

// Word-synced caption chunks (1–2 words, TikTok style). Keywords wrapped in **…** are flagged.
function captionChunks(text, say, words, start, end) {
  const disp = text.split(/\s+/).filter(Boolean);
  const sayN = say.split(/\s+/).filter(Boolean).length; // same token count => use exact word times
  let times;
  if (words && words.length === disp.length && sayN === disp.length && words.every((w) => w != null)) {
    times = words.map((w) => start + w);
  } else {
    const L = disp.map((w) => Math.max(2, plain(w).length));
    const tot = L.reduce((a, b) => a + b, 0);
    let acc = 0;
    times = L.map((l) => { const t = start + ((end - start) * acc) / tot; acc += l; return t; });
  }
  let kw = false;
  const toks = disp.map((w, i) => {
    let k = kw;
    const n = (w.match(/\*\*/g) || []).length;
    if (w.startsWith('**')) k = true;
    if (n % 2 === 1) kw = !kw;
    return { w: w.replace(/\*\*|~~/g, ''), k: k || (n === 2), t: times[i] };
  });
  const chunks = [];
  let cur = [];
  const flush = () => { if (cur.length) chunks.push(cur); cur = []; };
  for (const tk of toks) {
    const len = cur.reduce((a, c) => a + c.w.length + 1, 0) + tk.w.length;
    if (cur.length && (cur.length >= 2 || len > 15)) flush();
    cur.push(tk);
    if (/[.,!?:;]$/.test(tk.w)) flush();
  }
  flush();
  return chunks.map((c, i) => ({
    start: c[0].t, end: i + 1 < chunks.length ? chunks[i + 1][0].t : end + 0.12,
    html: c.map((x) => (x.k ? `<b>${x.w}</b>` : x.w)).join(' '),
  }));
}

const srtTime = (t) => { const ms = Math.round(t * 1000); const h = Math.floor(ms / 3600000), m = Math.floor((ms % 3600000) / 60000), s = Math.floor((ms % 60000) / 1000); return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')},${String(ms % 1000).padStart(3, '0')}`; };
const mmss = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

async function buildEpisode(id, srv, browser) {
  const t0 = Date.now();
  const epFile = path.join(ROOT, 'episodes', `ep${id}.js`);
  const ep = (await import(pathToFileURL(epFile).href + '?v=' + Date.now())).default;
  const dir = path.join(BUILD, 'ep' + id);
  fs.mkdirSync(dir, { recursive: true });
  // ---- lines + TTS
  const items = [];
  const scenes = ep.scenes.map((s) => ({ ...s, L: (s.lines || []).map((l) => (typeof l === 'string' ? { text: l } : l)) }));
  scenes.forEach((s, si) => s.L.forEach((l, li) => {
    l.say = l.say || toSay(l.text);
    l.id = `${id}-${String(si + 1).padStart(2, '0')}-${li + 1}`;   // line code used in the recording script
    const voiceTag = ENGINE === 'eleven' ? '|' + (process.env.TS_ELEVEN_VOICE || 'NHFTLozDZneDWyQjRGAO') + '|' + (process.env.TS_ELEVEN_MODEL || '') : '';
    l.key = crypto.createHash('sha1').update(ENGINE + '|' + l.say + voiceTag + (ENGINE === 'human' ? '|' + l.id : '')).digest('hex').slice(0, 16);
    items.push({ key: l.key, text: l.say, id: l.id });
  }));
  // neighbouring lines as context (keeps intonation flowing across separately generated lines)
  items.forEach((it, i) => { it.prev = i ? items[i - 1].text : ''; it.next = i + 1 < items.length ? items[i + 1].text : ''; });
  const jobF = path.join(dir, 'tts.json');
  fs.writeFileSync(jobF, JSON.stringify({ engine: ENGINE, outdir: path.join(BUILD, 'tts-cache'), recordings: path.join(ROOT, 'recordings'), items }));
  const tts = JSON.parse(run('python3', [path.join(ROOT, 'engine/tts.py'), jobF]));
  // ---- timeline
  let t = 0;
  const tl = { episodeUrl: `/episodes/ep${id}.js`, header: ep.header, scenes: [], subs: [], caps: [] };
  const narration = [];
  scenes.forEach((s, i) => {
    const start = t;
    let tt = start + (s.lead ?? (i === 0 ? 0.4 : 0.7));
    const lineStarts = [], lineEnds = [];
    for (const l of s.L) {
      const d = tts[l.key].dur;
      lineStarts.push(tt); lineEnds.push(tt + d);
      narration.push({ t: tt, file: tts[l.key].file });
      tl.subs.push(...splitSubs(l.text, tt, tt + d));
      tl.caps.push(...captionChunks(l.text, l.say, tts[l.key].words, tt, tt + d));
      tt += d + (l.pause ?? s.gap ?? 0.36);
    }
    if (!s.L.length) { lineStarts.push(tt); lineEnds.push(tt); }
    let end = tt + (s.tail ?? 0.4);
    if (s.minDur) end = Math.max(end, start + s.minDur);
    if (s.hold) end += s.hold;
    tl.scenes.push({ id: s.id, start, end, lineStarts, lineEnds, src: s.src || ep.src || 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 1' });
    t = end;
  });
  tl.duration = t;
  fs.writeFileSync(path.join(dir, 'timeline.json'), JSON.stringify(tl, null, 1));
  // ---- browser: events (sfx) + stills/frames
  const base = `http://127.0.0.1:${srv.address().port}/engine/player.html`;
  const openPage = async (br) => {
    const page = await br.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
    page.on('pageerror', (e) => console.error('[page error]', e.message));
    page.on('console', (m) => { if (m.type() === 'error') console.error('[console]', m.text()); });
    await page.goto(base);
    await page.waitForFunction(() => window.__ready === true);
    await page.evaluate(async (tl) => { await window.TS.load(tl); }, tl);
    return page;
  };
  const page = await openPage(browser);
  const events = await page.evaluate(() => window.TS.events());
  // brand stings
  events.push({ t: 0.05, sfx: 'intro' });
  const endScene = tl.scenes[tl.scenes.length - 1];
  events.push({ t: endScene.start + 0.1, sfx: 'outro' });
  events.sort((a, b) => a.t - b.t);

  const stills = opt('stills', null);
  if (stills) {
    const list = stills === 'scenes' ? tl.scenes.map((s) => s.end - 0.3) : stills.split(',').map(Number);
    fs.mkdirSync(path.join(BUILD, 'stills'), { recursive: true });
    for (const s of list) {
      await page.evaluate((x) => window.TS.seek(x), s);
      const f = path.join(BUILD, 'stills', `ep${id}_${s.toFixed(1).padStart(6, '0')}.jpg`);
      await page.screenshot({ path: f, type: 'jpeg', quality: 85 });
    }
    await page.close();
    console.log(`ep${id}: stills done (${tl.duration.toFixed(1)}s total)`);
    return { id, duration: tl.duration };
  }
  await page.close();

  writeDocs(id, ep, scenes, tl, events);
  if (flag('docs')) return { id, duration: tl.duration };

  // ---- audio
  const audioJob = path.join(dir, 'audio.json');
  const wav = path.join(dir, 'audio.wav');
  fs.writeFileSync(audioJob, JSON.stringify({ duration: tl.duration, narration, events, out: wav, ...(ep.music || {}) }));
  run('python3', [path.join(ROOT, 'engine/audio.py'), audioJob]);

  // ---- frames (parallel workers, each its own browser process)
  const nFrames = Math.ceil(tl.duration * FPS);
  const per = Math.ceil(nFrames / WORKERS);
  const segs = [];
  await Promise.all(Array.from({ length: WORKERS }, async (_, w) => {
    const f0 = w * per, f1 = Math.min(nFrames, f0 + per);
    if (f0 >= f1) return;
    const br = await chromium.launch();
    const pg = await openPage(br);
    const seg = path.join(dir, `seg${w}.mp4`);
    segs[w] = seg;
    const ff = spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
      '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '20', '-pix_fmt', 'yuv420p', '-r', String(FPS), '-threads', '1', seg], { stdio: ['pipe', 'inherit', 'inherit'] });
    const done = new Promise((r, j) => ff.on('close', (c) => (c === 0 ? r() : j(new Error('ffmpeg ' + c)))));
    let last = null, buf = null, shots = 0;
    for (let f = f0; f < f1; f++) {
      const sig = await pg.evaluate((x) => window.TS.seek(x), f / FPS);
      if (sig !== last) { buf = await pg.screenshot({ type: 'jpeg', quality: 90 }); last = sig; shots++; }
      if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
      if (w === 0 && f % 300 === 0) process.stdout.write(`  ep${id} frame ${f}/${f1} (${shots} shots)\r`);
    }
    ff.stdin.end();
    await done;
    await br.close();
  }));
  const list = path.join(dir, 'segs.txt');
  fs.writeFileSync(list, segs.filter(Boolean).map((s) => `file '${s}'`).join('\n'));
  const video = path.join(dir, 'video.mp4');
  run('ffmpeg', ['-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', video]);
  fs.mkdirSync(OUT, { recursive: true });
  const outF = path.join(OUT, ep.file + '.mp4');
  run('ffmpeg', ['-y', '-v', 'error', '-i', video, '-i', wav, '-map', '0:v', '-map', '1:a', '-c:v', 'copy',
    '-af', 'loudnorm=I=-14:TP=-1.5:LRA=11', '-ar', '44100', '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', outF]);
  console.log(`\nep${id}: ${outF} (${mmss(tl.duration)}) in ${((Date.now() - t0) / 1000).toFixed(0)}s`);
  return { id, duration: tl.duration, file: outF };
}

const TRANS = {
  none: 'Tiada (adegan pembuka).', paper: 'Helaian kertas baharu meluncur masuk dari kanan (paper slide).',
  flip: 'Halaman buku nota diselak ke kiri (page flip).', slideUp: 'Halaman baharu naik dari bawah (slide up).',
  zoom: 'Zoom masuk lembut dengan fade.', wipe: 'Sapuan pen penanda kuning dari kiri ke kanan (marker wipe).',
};
const SFXN = { pencil: 'lakaran pensel', scribble: 'tulisan tangan', pop: 'pop lembut', stamp: 'cop/stamp', swish: 'swish ringan', ding: 'ding penekanan', paper: 'kertas', page: 'selak halaman', whoosh: 'whoosh', intro: 'sting jenama (pembuka)', outro: 'sting jenama (penutup)' };

function writeDocs(id, ep, scenes, tl, events) {
  fs.mkdirSync(path.join(OUT, 'subtitles'), { recursive: true });
  fs.mkdirSync(path.join(ROOT, 'docs', 'storyboard'), { recursive: true });
  const srt = tl.subs.map((s, i) => `${i + 1}\n${srtTime(s.start)} --> ${srtTime(s.end)}\n${plain(s.text)}\n`).join('\n');
  fs.writeFileSync(path.join(OUT, 'subtitles', ep.file + '.srt'), srt);
  let md = `# Storyboard – Episod ${id}: ${ep.title}\n\n`;
  md += `> Fail: \`output/${ep.file}.mp4\` · Tempoh sebenar: **${mmss(tl.duration)}** (${tl.duration.toFixed(1)} s) · 1080×1920, 9:16, ${FPS} fps\n\n`;
  md += `**Muzik latar (keseluruhan episod):** ${ep.musicNote || 'Muzik pendidikan asli (marimba lembut + pad), dikecilkan (ducking) secara automatik semasa narasi.'}\n\n`;
  scenes.forEach((s, i) => {
    const st = tl.scenes[i];
    const b = s.board || {};
    const sf = [...new Set(events.filter((e) => e.t >= st.start - 0.01 && e.t < st.end).map((e) => SFXN[e.sfx] || e.sfx))];
    md += `## Adegan ${i + 1} – ${b.name || s.id}\n\n`;
    md += `| Perkara | Butiran |\n|---|---|\n`;
    md += `| Masa | ${mmss(st.start)} – ${mmss(st.end)} (${(st.end - st.start).toFixed(1)} s) |\n`;
    md += `| Narasi | ${s.L.length ? s.L.map((l) => plain(l.text)).join(' ') : '— (tiada narasi)'} |\n`;
    md += `| Visual | ${b.visual || ''} |\n`;
    md += `| Ilustrasi doodle | ${b.doodle || ''} |\n`;
    md += `| Teks & kata kunci di skrin | ${b.text || ''} |\n`;
    md += `| Animasi | ${b.anim || ''} |\n`;
    md += `| Transisi masuk | ${TRANS[s.transition || (i === 0 ? 'none' : 'paper')]} |\n`;
    md += `| Kesan bunyi | ${sf.join(', ') || '—'} |\n`;
    md += `| Muzik latar | ${b.music || 'Muzik latar diteruskan, rendah di bawah narasi.'} |\n\n`;
  });
  fs.writeFileSync(path.join(ROOT, 'docs', 'storyboard', `EP${id}_storyboard.md`), md);
}

const srv = await serve();
const browser = await chromium.launch();
const results = [];
try {
  for (const id of eps) results.push(await buildEpisode(id, srv, browser));
} finally {
  await browser.close();
  srv.close();
}
console.log(JSON.stringify(results.map((r) => ({ id: r.id, dur: mmss(r.duration) }))));
