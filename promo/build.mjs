#!/usr/bin/env node
// Titik Sejarah – app promo video builder.
//   python3 promo/voice.py                      voiceover (ElevenLabs Asyraf, cached in voice/eleven/)
//   node promo/build.mjs --src <recording.mp4>  render output/promo/TitikSejarah_Promo_App.mp4 (+ SRT)
//   node promo/build.mjs --src <rec> --stills 0,5.2,30   only render PNG stills (design check)
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { SHOTS } from './shots.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const B = path.join(ROOT, 'build', 'promo');
const OUT = path.join(ROOT, 'output', 'promo');
const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 ? args[i + 1] : d; };
const FPS = 30;
const SRC = opt('src');
const WORKERS = Number(opt('workers', 4));
if (!SRC || !fs.existsSync(SRC)) throw new Error('pass --src <screen recording mp4>');

const script = JSON.parse(fs.readFileSync(path.join(ROOT, 'promo', 'script.json'), 'utf8'));
const voice = JSON.parse(fs.readFileSync(path.join(B, 'voice.json'), 'utf8'));
const run = (cmd, a) => execFileSync(cmd, a, { maxBuffer: 1 << 28, stdio: ['ignore', 'pipe', 'inherit'] }).toString();

// ---------------- timeline ----------------
const GAP = { L10: 0.55, L13: 0.45 };           // a beat before the status part and before the closing card
const HOLD = 2.3;                               // closing card stays after the last word
let t = 0.06;                                   // voice starts within 0.2 s
const lines = script.lines.map((l) => {
  if (l.id !== 'L01') t += GAP[l.id] ?? 0.3;
  const o = { id: l.id, text: l.text, start: t, dur: voice[l.id].dur, words: voice[l.id].words };
  t += o.dur;
  return o;
});
lines.forEach((l, i) => { l.next = i + 1 < lines.length ? lines[i + 1].start : l.start + l.dur + HOLD; });
const DURATION = lines.at(-1).next;
const endLine = lines.find((l) => SHOTS[l.id].end);
const endT = endLine.start - 0.35;

// display tokens + keyword flags (**…** may span several words)
function tokens(text) {
  let kw = false;
  return text.split(/\s+/).filter(Boolean).map((w) => {
    const starts = w.startsWith('**'), n = (w.match(/\*\*/g) || []).length;
    let k = kw || starts;
    if (n % 2 === 1) kw = !kw;
    return { w: w.replace(/\*\*/g, ''), k };
  });
}

// clips: each line's time (cut 0.15 s before the voice) is shared between its segments by weight
const segs = [];
lines.forEach((l, li) => {
  const S = SHOTS[l.id];
  if (S.end) return;
  const a = li === 0 ? 0 : l.start - 0.15;
  const b = (lines[li + 1] && SHOTS[lines[li + 1].id].end) ? endT + 0.45 : l.next - 0.15;
  const W = S.segs.reduce((s, x) => s + x.w, 0);
  let c = a;
  S.segs.forEach((sg, k) => {
    const d = ((b - a) * sg.w) / W;
    segs.push({ id: `${l.id}_${k}`, line: l.id, t0: c, t1: c + d, src: sg.src, speed: sg.speed, cam: sg.cam,
      head: sg.head || S.head, headT0: c === 0 ? 0 : (sg.head || k === 0 ? c : null) });
    c += d;
  });
});
// keep the headline animation only when the headline really changes
segs.forEach((s, i) => { if (i && s.head === segs[i - 1].head) s.headT0 = segs[i - 1].headT0; });

// subtitle chunks: ≤ 2 lines (~64 chars), prefer breaking after punctuation
const chunks = [];
for (const l of lines) {
  const tk = tokens(l.text).map((x, i) => ({ ...x, t: l.start + (l.words[i] ?? l.dur) }));
  let cur = [];
  const groups = [];
  const len = (arr) => arr.reduce((s, x) => s + x.w.length + 1, 0);
  tk.forEach((x, i) => {
    cur.push(x);
    const rest = tk.slice(i + 1);
    const punct = /[.,?!:]$/.test(x.w);
    if ((punct && len(cur) > 22 && len(rest) > 10) || len(cur) > 52 || (punct && /[.?!]$/.test(x.w) && rest.length)) { groups.push(cur); cur = []; }
  });
  if (cur.length) groups.push(cur);
  groups.forEach((g, i) => chunks.push({ t0: i ? g[0].t - 0.05 : l.start - 0.12, t1: groups[i + 1] ? groups[i + 1][0].t - 0.05 : Math.min(l.next - 0.12, l.start + l.dur + 0.5), words: g }));
}
// badges: appear when their word is spoken
const lineData = lines.map((l) => {
  const S = SHOTS[l.id];
  const tk = tokens(l.text);
  const badges = (S.badges || []).map((bd) => {
    const i = tk.findIndex((x) => x.w === bd.at || x.w.startsWith(bd.at));
    if (i < 0) throw new Error(`badge word "${bd.at}" not found in ${l.id}`);
    return { ...bd, t: l.start + l.words[i] };
  });
  return { id: l.id, start: l.start, next: l.next, badges, row: !!S.row };
});

// ---------------- source clips -> frames ----------------
fs.mkdirSync(path.join(B, 'src'), { recursive: true });
for (const s of segs) {
  const dir = path.join(B, 'src', s.id);
  const d = s.t1 - s.t0 + 0.25;
  const n = s.speed === 0 ? 1 : Math.ceil(d * FPS) + 1;
  const key = JSON.stringify({ v: 2, src: s.src, speed: s.speed, n, file: path.basename(SRC) });
  const stamp = path.join(dir, 'key.json');
  if (!(fs.existsSync(stamp) && fs.readFileSync(stamp, 'utf8') === key)) {
    fs.rmSync(dir, { recursive: true, force: true });
    fs.mkdirSync(dir, { recursive: true });
    const vf = s.speed === 0 ? 'scale=1080:-2' : `setpts=(PTS-STARTPTS)/${s.speed},fps=${FPS},scale=1080:-2`;
    run('ffmpeg', ['-v', 'error', '-y', '-ss', String(s.src), ...(s.speed ? ['-t', String(d * s.speed + 0.3)] : []), '-i', SRC,
      '-vf', vf, '-frames:v', String(n), '-q:v', '2', path.join(dir, '%05d.jpg')]);
    fs.writeFileSync(stamp, key);
    console.log(`clip ${s.id}: ${s.src}s ×${s.speed} -> ${fs.readdirSync(dir).length - 1} frames`);
  }
  s.n = fs.readdirSync(dir).filter((f) => f.endsWith('.jpg')).length;
  s.dir = pathToFileURL(dir).href;
}

const data = { fps: FPS, segs, lines: lineData, chunks, endT };

// ---------------- render ----------------
async function page(browser) {
  const p = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto(pathToFileURL(path.join(ROOT, 'promo', 'player.html')).href);
  await p.evaluate(() => document.fonts.ready);
  await p.evaluate((d) => window.init(d), data);
  return p;
}
const browser = await chromium.launch({ args: ['--allow-file-access-from-files'] });
const stills = opt('stills');
if (stills) {
  const p = await page(browser);
  fs.mkdirSync(path.join(B, 'stills'), { recursive: true });
  for (const s of stills.split(',').map(Number)) {
    await p.evaluate((x) => window.renderAt(x), s);
    await p.screenshot({ path: path.join(B, 'stills', `still_${s.toFixed(2)}.png`) });
  }
  await browser.close();
  console.log('stills ->', path.join(B, 'stills'), '| duration', DURATION.toFixed(2));
  process.exit(0);
}
const N = Math.ceil(DURATION * FPS);
const FR = path.join(B, 'frames');
fs.rmSync(FR, { recursive: true, force: true });
fs.mkdirSync(FR, { recursive: true });
const per = Math.ceil(N / WORKERS);
let done = 0;
await Promise.all(Array.from({ length: WORKERS }, async (_, w) => {
  const p = await page(browser);
  for (let f = w * per; f < Math.min(N, (w + 1) * per); f++) {
    await p.evaluate((x) => window.renderAt(x), f / FPS);
    await p.screenshot({ path: path.join(FR, `${String(f + 1).padStart(5, '0')}.jpg`), type: 'jpeg', quality: 93 });
    if (++done % 300 === 0) console.log(`frames ${done}/${N}`);
  }
}));
await browser.close();

// ---------------- audio: voice + original music (engine/audio.py), then loudness to -14 LUFS / -1 dBTP ----------------
const job = { duration: DURATION, out: path.join(B, 'mix.wav'), bpm: 96, key: 62, variant: 1, musicGain: 0.2, duckDepth: 0.7, events: [],
  narration: lines.map((l) => ({ file: path.join(B, 'voice', `${l.id}.wav`), t: l.start })) };
fs.writeFileSync(path.join(B, 'mix.json'), JSON.stringify(job));
run('python3', [path.join(ROOT, 'engine', 'audio.py'), path.join(B, 'mix.json')]);
// two-pass loudnorm (pass 1 measures, pass 2 applies linearly)
const LN = 'loudnorm=I=-14:TP=-1.5:LRA=11';
const p1 = spawnSync('ffmpeg', ['-hide_banner', '-i', job.out, '-af', `${LN}:print_format=json`, '-f', 'null', '-'], { encoding: 'utf8' }).stderr;
const mj = JSON.parse(p1.slice(p1.lastIndexOf('{'), p1.lastIndexOf('}') + 1));
const LN2 = `${LN}:measured_I=${mj.input_i}:measured_TP=${mj.input_tp}:measured_LRA=${mj.input_lra}:measured_thresh=${mj.input_thresh}:offset=${mj.target_offset}:linear=true`;
fs.mkdirSync(OUT, { recursive: true });
const outMp4 = path.join(OUT, 'TitikSejarah_Promo_App.mp4');
run('ffmpeg', ['-v', 'error', '-y', '-framerate', String(FPS), '-i', path.join(FR, '%05d.jpg'), '-i', job.out,
  '-af', `${LN2},aresample=48000`, '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p',
  '-profile:v', 'high', '-movflags', '+faststart', '-c:a', 'aac', '-b:a', '192k', '-shortest', outMp4]);

// ---------------- SRT ----------------
const ts = (x) => { const ms = Math.round(x * 1000); const p = (n, w = 2) => String(n).padStart(w, '0'); return `${p(Math.floor(ms / 3600000))}:${p(Math.floor(ms / 60000) % 60)}:${p(Math.floor(ms / 1000) % 60)},${p(ms % 1000, 3)}`; };
fs.writeFileSync(path.join(OUT, 'TitikSejarah_Promo_App.srt'),
  chunks.map((c, i) => `${i + 1}\n${ts(Math.max(0, c.t0))} --> ${ts(c.t1)}\n${c.words.map((w) => w.w).join(' ')}\n`).join('\n'));
console.log('done', outMp4, DURATION.toFixed(2) + 's');
