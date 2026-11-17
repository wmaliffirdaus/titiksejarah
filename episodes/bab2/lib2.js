// Shared scene builders for Titik Sejarah · Bab 2 (Kebangkitan Nasionalisme).
// Same visual identity as Bab 1: notebook paper, rough doodles, washi-tape cards, red stamps, gold highlights.
import { fmt, NAVY, GOLD, RED } from '../lib.js';
export { fmt, NAVY, GOLD, RED };
export { locator, kingdomHeader, fact } from '../lib.js';

export const SRC = 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 2';
export const WORLD = [[-125, -8], [150, 62]];
export const EUROPE = [[-12, 36], [32, 60]];
export const ASIA = [[22, -6], [146, 50]];
export const SEA2 = [[92, -11], [128, 26]];
export const MY = [[99.3, 0.6], [119.4, 7.6]];

// ---------- small building blocks ----------
// Character + name tag underneath. `fig` is SVG markup (D.person / presets).
export function who(S, fig, name, sub, o = {}) {
  const w = o.w ?? 170;
  S.svg(fig, { x: o.x, y: o.y, w, at: o.at ?? 0, d: o.d || 0, dur: 0.9, sfx: o.sfx === undefined ? 'pencil' : o.sfx, out: o.out });
  S.tag(name, sub, { x: (o.x ?? 0) + (o.tx ?? -10), y: (o.y ?? 0) + (o.ty ?? w * 1.32), w: o.tw ?? w + 60, at: o.at ?? 0, d: (o.d || 0) + 0.45, out: o.out });
}

// Gold "TIP SPM" card (exam-relevant point).
export function examTip(S, html, at, o = {}) {
  return S.card(`<div style="display:flex;gap:20px;align-items:center"><div style="flex:none;width:104px;height:104px;border-radius:50%;background:#C93436;border:4px solid #172C63;color:#F5C928;font-family:Marker;font-size:30px;line-height:1.02;display:flex;align-items:center;justify-content:center;text-align:center;transform:rotate(-8deg)">TIP<br>SPM</div><div class="t-body" style="font-size:${o.fs || 40}px;line-height:1.18">${fmt(html)}</div></div>`,
    { color: 'gold', anim: 'slideU', x: o.x ?? 60, y: o.y ?? 1150, w: o.w ?? 960, at, d: o.d || 0, pad: '16px 24px', rot: o.rot ?? -0.8, sfx: 'ding' });
}

// Torn-paper definition card.
export function defCard(S, word, html, o = {}) {
  S.card(`<div class="tw" style="font-size:26px;color:#C93436;letter-spacing:3px">DEFINISI</div><div class="t-h3" style="margin:4px 0 8px">${word}</div><div class="t-body" style="font-size:${o.fs || 44}px;line-height:1.2">${fmt(html)}</div>`,
    { tear: true, anim: o.anim || 'slideU', x: o.x ?? 60, y: o.y ?? 300, w: o.w ?? 960, at: o.at ?? 0, d: o.d || 0, rot: o.rot ?? -1, out: o.out });
}

// Vertical stack of cards, each revealed at its own cue: items = [[html, at, d?, color?], ...]
export function stack(S, items, o = {}) {
  const y0 = o.y ?? 400, gap = o.gap ?? 190, x = o.x ?? 60, w = o.w ?? 960;
  items.forEach(([html, at, d, color], i) => {
    S.card(`<div class="t-body" style="font-size:${o.fs || 42}px;line-height:1.18">${fmt(html)}</div>`,
      { anim: i % 2 ? 'slideR' : 'slideL', x, y: y0 + i * gap, w, at, d: d || 0, rot: (i % 2 ? 0.8 : -0.8), pad: '14px 24px', color: color || '', sfx: 'swish' });
  });
}

// Horizontal timeline. pts = [{ year, label, at, d, color }]
export function timeline(S, pts, o = {}) {
  const x0 = o.x ?? 90, x1 = o.x1 ?? 990, y = o.y ?? 760;
  S.add(`<svg viewBox="0 0 ${x1 - x0 + 40} 40"><line x1="20" y1="20" x2="${x1 - x0 + 20}" y2="20" stroke="#172C63" stroke-width="7" stroke-linecap="round"/></svg>`,
    { anim: 'wipe', x: x0 - 20, y: y - 20, w: x1 - x0 + 40, at: o.at ?? 0, d: o.d || 0, dur: o.dur || 1.0 });
  const n = pts.length;
  pts.forEach((p, i) => {
    const cx = n === 1 ? (x0 + x1) / 2 : x0 + ((x1 - x0) * i) / (n - 1);
    const bw = o.bw ?? Math.min(300, (x1 - x0) / Math.max(1, n - 1) + 40);
    S.add(`<div style="width:44px;height:44px;border-radius:50%;background:${p.color || (i % 2 ? GOLD : RED)};border:5px solid #172C63;box-sizing:border-box"></div>`, { anim: 'pop', x: cx - 22, y: y - 22, w: 44, at: p.at, d: p.d || 0 });
    S.add(`<div class="t-h3" style="text-align:center;font-size:${o.ys || 50}px;color:#C93436">${p.year}</div>`, { anim: 'pop', x: cx - bw / 2, y: y - (o.up ?? 92), w: bw, at: p.at, d: (p.d || 0) + 0.1, sfx: false });
    if (p.label) S.add(`<div class="t-label" style="text-align:center;font-size:${o.ls || 38}px">${fmt(p.label)}</div>`, { anim: 'fade', x: cx - bw / 2, y: y + 34, w: bw, at: p.at, d: (p.d || 0) + 0.25, sfx: false });
  });
}

// Region/topic header without a map: big title + pill + small note line.
export function header(S, title, pill, note, o = {}) {
  S.text(title, { size: o.size || 'h2', x: 70, y: 300, w: o.w ?? 600, at: 0, d: -0.2, dur: 0.8 });
  if (pill) S.add(`<span class="pill" style="font-size:32px">${pill}</span>`, { anim: 'pop', x: 70, y: o.py ?? 395, w: 600, at: 0, d: 0.3 });
  if (note) S.text(note, { size: 'label', x: 70, y: o.ny ?? 470, w: o.nw ?? 600, at: 0, d: 0.5, style: 'font-size:40px' });
}

// ---------- ready-made scenes ----------
export function titleScene(num, titleHtml, line, o = {}) {
  return {
    id: 'tajuk', transition: 'wipe',
    lines: [line],
    board: {
      name: 'Kad tajuk subtopik',
      visual: 'Kad tajuk besar gaya buku nota dengan nombor subtopik; maskot rasmi Titik Sejarah sebagai penyampai.',
      doodle: `Pil "SUBTOPIK ${num}", garis bawah merah tulisan tangan, pelekat maskot (imej asal tanpa diubah).`,
      text: `SUBTOPIK ${num} · ${titleHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()}`,
      anim: 'Pil pop, tajuk ditulis tangan (wipe), garis bawah dilukis, maskot pop.',
    },
    draw(S, { D }) {
      S.add(`<div style="text-align:center"><span class="pill">SUBTOPIK ${num}</span></div>`, { anim: 'pop', x: 40, y: 330, w: 1000, at: 0, d: -0.3 });
      S.text(titleHtml, { size: o.size || 'h2', x: 60, y: 440, w: 960, align: 'center', at: 0, dur: 1.4 });
      S.svg(D.underline(520), { x: 280, y: o.uy ?? 640, w: 520, at: 0, d: 1.3, dur: 0.5 });
      S.mascot({ x: 380, y: o.my ?? 720, w: 320, at: 0, d: 0.6 });
      if (o.icon) S.svg(o.icon(D), { x: o.ix ?? 760, y: o.iy ?? 760, w: o.iw ?? 220, at: 0, d: 1, dur: 0.9, sfx: false });
    },
  };
}

// "Nilai & iktibar" scene: lines[0] states the value, lines[1] explains it.
export function nilaiScene(lines, valueHtml, icon, o = {}) {
  return {
    id: 'nilai', bg: 'dots', transition: o.transition || 'flip',
    lines,
    board: {
      name: 'Nilai & iktibar',
      visual: 'Halaman "NILAI & IKTIBAR": kad nilai utama di tengah, ikon doodle besar, nota tulisan tangan di bawah.',
      doodle: o.doodle || 'Ikon nilai (doodle), bintang, anak panah.',
      text: `NILAI & IKTIBAR · ${valueHtml.replace(/<[^>]+>|\*\*/g, '')}`,
      anim: 'Tajuk ditulis; ikon dilukis; kad nilai pop; nota penerangan meluncur naik pada ayat kedua.',
    },
    draw(S, { D }) {
      S.text('NILAI & <span class="red">IKTIBAR</span>', { size: 'h2', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.2 });
      S.svg(icon(D), { x: o.ix ?? 360, y: o.iy ?? 410, w: o.iw ?? 360, at: 0, d: 0.1, dur: 1.2 });
      S.card(`<div class="t-h3" style="text-align:center;color:#F5C928;font-size:50px">${fmt(valueHtml)}</div>`, { color: 'navy', anim: 'stamp', x: 110, y: o.vy ?? 800, w: 860, at: 0, d: 0.8, rot: -1.5 });
      S.card(`<div class="t-body" style="font-size:40px;line-height:1.2">${fmt(o.note || '')}</div>`, { anim: 'slideU', x: 90, y: o.ny ?? 1010, w: 900, at: 1, d: 0.2, rot: 0.8 });
      S.add(D.star(), { anim: 'pop', x: 880, y: 740, w: 100, at: 0, d: 1.2, sfx: false });
    },
  };
}

// Closing scene: summary line(s) + mascot pointing to the next episode card.
export function closingScene(lines, nextLabel, nextTitle, o = {}) {
  return {
    id: 'penutup', transition: o.transition || 'paper', tail: 0.9,
    lines,
    board: {
      name: 'Rumusan & seruan ke episod seterusnya',
      visual: 'Kad rumusan bergaya nota lekat; maskot rasmi menunjuk ke kad "Episod seterusnya".',
      doodle: 'Pelekat maskot, anak panah melengkung merah, kad episod seterusnya, bintang.',
      text: `${(o.summary || '').replace(/<[^>]+>|\*\*/g, '')} · ${nextLabel}: ${nextTitle}`,
      anim: 'Kad rumusan pop; maskot pop; anak panah dilukis; kad episod seterusnya pop pada ayat akhir.',
    },
    draw(S, { D }) {
      S.text('Ringkasnya…', { size: 'h2', x: 70, y: 300, w: 900, at: 0, d: -0.2 });
      S.card(`<div class="t-body" style="font-size:44px;line-height:1.2">${fmt(o.summary || '')}</div>`, { color: 'gold', anim: 'pop', x: 70, y: 400, w: 940, at: 0, d: 0.3, rot: -1 });
      const last = lines.length - 1;
      S.mascot({ x: 90, y: o.my ?? 800, w: 360, at: last, d: -0.3 });
      S.arrow(470, (o.my ?? 800) + 140, 600, (o.my ?? 800) + 300, { at: last, d: 0.4, color: RED, bend: -0.25 });
      S.card(`<div class="t-label" style="color:#C93436">${nextLabel}</div><div class="t-h3" style="font-size:44px">${nextTitle}</div>`, { x: 480, y: (o.my ?? 800) + 320, w: 540, at: last, d: 0.7, rot: 1.5 });
    },
  };
}

export const endScene = () => ({
  id: 'akhir', chrome: false, transition: 'zoom', lines: [], minDur: 4.8,
  board: { name: 'Penutup jenama rasmi', visual: 'Gambar profil rasmi Titik Sejarah (imej asal, tidak diubah) di tengah skrin, latar sinar kuning.', doodle: '—', text: 'TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · "Follow untuk lebih banyak ilmu sejarah."', anim: 'Imej DP fade + zoom-in lembut; nama jenama pop; slogan ditulis; butang follow pop.', music: 'Sting jenama penutup; muzik fade-out.' },
  draw(S) { S.endCard(); },
});

// Recap grid: cells = [[title, body, at, color?], ...] in 2 columns.
export function recapGrid(S, cells, o = {}) {
  const y0 = o.y ?? 400, h = o.h ?? 250, w = o.w ?? 465;
  cells.forEach(([t, b, at, color], i) => {
    const x = 60 + (i % 2) * (w + 30), y = y0 + Math.floor(i / 2) * h;
    S.card(`<div class="t-h3" style="font-size:${o.ts || 42}px;color:${color === 'navy' ? '#F5C928' : '#C93436'}">${t}</div><div class="t-body" style="font-size:${o.fs || 36}px;line-height:1.15">${fmt(b)}</div>`,
      { color: color || '', anim: 'pop', x, y, w, at, d: 0, rot: (i % 3 - 1) * 1.1, pad: '12px 20px', sfx: 'pop' });
  });
}

// ---------- KBAT building blocks ----------
// Question card (torn paper) with a mark pill and a "SOALAN n" pill.
export function question(S, n, q, marks, o = {}) {
  S.add(`<span class="pill" style="font-size:34px">SOALAN ${n}</span>`, { anim: 'pop', x: 60, y: 295, w: 360, at: 0, d: -0.3 });
  S.add(`<span class="pill" style="font-size:30px;background:#C93436;color:#FFFDF7">${marks} markah</span>`, { anim: 'pop', x: 820, y: 295, w: 220, at: 0, d: 0.2 });
  if (o.stem) S.add('<span class="twtag">GAYA KERTAS 2 · LATIHAN</span>', { anim: 'fade', x: 380, y: 305, w: 420, at: 0, sfx: false });
  return S.card(`<div class="t-h3" style="font-size:${o.fs || 46}px;line-height:1.18">${q}</div>`, { tear: true, anim: 'slideU', x: 60, y: o.y ?? 390, w: 960, at: 0, d: 0.1 });
}
// One answer line on "kertas jawapan" with a +1 badge.
export function ans(S, i, html, at, d, y, o = {}) {
  S.card(`<div style="display:flex;gap:16px;align-items:flex-start"><div style="flex:none;width:58px;height:58px;border-radius:50%;background:#172C63;color:#F5C928;font-family:Marker;font-size:30px;display:flex;align-items:center;justify-content:center">${i}</div><div class="t-body" style="font-size:${o.fs || 36}px;line-height:1.16">${fmt(html)}</div></div>`,
    { anim: 'slideL', x: 60, y, w: 860, at, d, pad: '10px 18px', notape: true, rot: o.rot ?? 0, sfx: 'scribble' });
  S.add('<div style="font-family:Marker;font-size:40px;color:#3A8A4A;transform:rotate(-8deg)">+1</div>', { anim: 'stamp', x: 940, y: y + 14, w: 90, at, d: d + 0.7, sfx: 'ding' });
}
// Weak (✗) vs strong (✓) comparison cards.
export function weakStrong(S, D, weak, strong, atW, atS, y0 = 700) {
  S.card(`<div class="t-label" style="color:#C93436">✗ Jawapan lemah</div><div class="t-body" style="font-size:38px">"${weak}"</div>`, { anim: 'slideL', x: 60, y: y0, w: 960, at: atW, d: 0.2, pad: '10px 22px', rot: -0.8 });
  S.add(D.cross(), { anim: 'stamp', x: 900, y: y0 + 10, w: 90, at: atW, d: 1.2 });
  S.card(`<div class="t-label" style="color:#3A8A4A">✓ Jawapan baik</div><div class="t-body" style="font-size:38px">"${strong}"</div>`, { color: 'gold', anim: 'slideR', x: 60, y: y0 + 230, w: 960, at: atS, d: 0.2, pad: '10px 22px', rot: 0.8 });
  S.add(D.check(), { anim: 'pop', x: 900, y: y0 + 240, w: 90, at: atS, d: 1.6, sfx: 'ding' });
}
// "Pause dan cuba dulu" 3-2-1 countdown during the pause after `at` line.
export function tryFirst(S, at) {
  S.add('<span class="pill" style="font-size:30px;background:#FFFDF7">⏸ Pause & cuba jawab dulu!</span>', { anim: 'pop', x: 300, y: 1210, w: 720, at: at + 0.999, d: 0, out: { at: at + 1, d: -0.1 } });
  ['3', '2', '1'].forEach((c, i) => S.add(`<div style="width:120px;height:120px;border-radius:50%;background:#F5C928;border:6px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:70px;color:#172C63">${c}</div>`, { anim: 'pop', x: 120, y: 1170, w: 120, at: at + 0.999, d: 0.15 + i, out: { at: at + 0.999, d: 1.1 + i }, sfx: 'pop' }));
}
