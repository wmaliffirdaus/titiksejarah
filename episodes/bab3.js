// Shared doodles + settings for Bab 3 episodes (Chapter 1 notebook style and pacing).
export const NAVY = '#172C63', GOLD = '#F5C928', RED = '#C93436', PAPER = '#FFFDF7';
export const BIG = (t, o = {}) => `<div style="font-family:Marker;font-size:${o.fs || 96}px;line-height:1.02;text-align:center;color:${o.color || NAVY}">${t}</div>`;
export const NOW = { anim: 'none', at: 'start', d: -0.35 };   // visible from the very first frame

// Burung tekukur dalam sangkar emas (doodle).
export function cage(D) {
  const R = D.R;
  let s = R.circle(200, 34, 40, { stroke: NAVY, strokeWidth: 5 });
  s += R.path('M60 230 Q60 64 200 56 Q340 64 340 230', { stroke: NAVY, strokeWidth: 5, fill: 'none' });
  // perch + bird
  s += R.line(90, 400, 310, 400, { stroke: NAVY, strokeWidth: 7 });
  s += R.path('M248 356 L320 392 L312 404 L240 376 Z', { fill: '#EAE0CC', strokeWidth: 3 });
  s += R.ellipse(200, 356, 150, 92, { fill: PAPER, strokeWidth: 3.5 });
  s += R.path('M168 344 Q214 318 262 356 Q218 372 172 368 Z', { fill: '#EAE0CC', strokeWidth: 2.5 });
  s += R.path('M120 316 Q126 352 152 360 L158 324 Z', { fill: NAVY, strokeWidth: 2 });
  s += R.circle(136, 300, 60, { fill: PAPER, strokeWidth: 3.5 });
  s += R.poly([[108, 304], [86, 316], [110, 318]], { fill: GOLD, strokeWidth: 2.5 });
  s += R.circle(128, 296, 9, { fill: NAVY, strokeWidth: 1 });
  s += R.path('M126 306 Q122 322 126 330', { stroke: '#3F5DA8', strokeWidth: 4 });            // air mata
  s += R.line(186, 400, 182, 416, { stroke: RED, strokeWidth: 5 }) + R.line(214, 400, 218, 416, { stroke: RED, strokeWidth: 5 });
  // golden bars over the bird
  for (let x = 72; x <= 328; x += 32) s += R.path(`M200 58 Q${x} 80 ${x} 230 L${x} 460`, { stroke: GOLD, strokeWidth: 7, roughness: 0.6 });
  s += R.ellipse(200, 230, 284, 34, { stroke: GOLD, strokeWidth: 7, fill: 'none' });
  s += R.rect(44, 456, 312, 46, { fill: GOLD, strokeWidth: 4 });
  s += R.rect(74, 502, 252, 22, { fill: GOLD, strokeWidth: 3.5 });
  return `<svg viewBox="0 0 400 540" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}

// Akhbar Melayu lama (doodle).
export function akhbar(D, head, o = {}) {
  const R = D.R;
  let s = R.rect(10, 10, 380, 480, { fill: PAPER, strokeWidth: 4 });
  s += R.rect(28, 28, 344, 80, { fill: NAVY, strokeWidth: 3 });
  s += D.txt(200, 82, head, { font: 'Marker', weight: 400, size: o.hs || 40, color: GOLD });
  s += D.txt(200, 146, o.sub || 'AKHBAR MELAYU', { font: 'Caveat', size: 34, color: RED });
  for (let c = 0; c < 3; c++) for (let r = 0; r < 10; r++) {
    const x = 34 + c * 116, y = 186 + r * 28, w = 92 - ((r * 7 + c * 11) % 30);
    s += R.line(x, y, x + w, y, { strokeWidth: 3, stroke: '#3F5DA8', roughness: 0.7 });
  }
  return `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}


// Chapter 1 pacing + natural, fluent narration (no extra speed-up, steadier delivery).
export const CH1 = {
  music: { key: 60, bpm: 104, variant: 0 },
  voice: { style: 0.3, stability: 0.45, speed: 1.0, tempo: 1.06, maxpause: 0.24 },   // maxpause: hesitation pauses trimmed (0 credits)
  introSfx: 'whoosh',
  lead: 0.55, gap: 0.4, tail: 0.45,
  transition: 'paper',
  cam: [1.0, 1.04],
};

// ---------------------------------------------------------------------------------------------
// Chapter 1 LONG-FORM format (user choice): Intro · one 3–4 min episode per subtopic · Revision.
// Same notebook look as episodes/ep01–ep06; pacing/voice = CH1 above.
const LRED = '#EBA9A3', LNAVY = '#3F5DA8', STONE = '#E2D7C0', KHAKI = '#C9B98A';

// Page heading (top of the notebook page).
export const head = (S, html, o = {}) => S.text(html, { size: 'h2', x: 70, y: 295, w: 940, at: 0, d: -0.3, ...o });

// "Ini Titik Sejarah, Subtopik 3.x: …" title card with the official mascot (DP image, unaltered).
export function titleCard(S, D, no, html, o = {}) {
  S.add(`<div style="text-align:center"><span class="pill">${no}</span></div>`, { anim: 'pop', x: 40, y: 330, w: 1000, at: 0, d: -0.3 });
  S.text(`<span style="font-size:${o.fs || 66}px;line-height:1.1">${html}</span>`, { size: 'h2', x: 40, y: 430, w: 1000, align: 'center', at: 0, dur: 1.4 });
  S.svg(D.underline(520), { x: 280, y: o.uy || 720, w: 520, at: 0, d: 1.3, dur: 0.5 });
  S.mascot({ x: 380, y: o.my || 790, w: 320, at: 0, d: 0.6 });
}

// Numbered rows (list / timeline). items: [badge, html, at, color?]. Badge in a circle (short) or pill (dates).
export function rows(S, items, o = {}) {
  const y0 = o.y0 ?? 410, gap = o.gap ?? 165, bw = o.bw ?? 200, fs = o.fs ?? 40;
  items.forEach(([b, html, at, c], i) => {
    const y = y0 + i * gap, col = c || (i % 2 ? NAVY : RED);
    S.add(`<div style="width:${bw}px;min-height:96px;border-radius:${bw > 140 ? '22px' : '50%'};background:${col};border:5px solid #172C63;display:flex;align-items:center;justify-content:center;text-align:center;font-family:Marker;font-size:${b.length > 9 ? 30 : 38}px;line-height:1.05;color:#F5C928;padding:6px;box-sizing:border-box">${b}</div>`, { anim: 'pop', x: 60, y, w: bw, at, d: o.d ?? 0 });
    S.card(`<div class="t-body" style="font-size:${fs}px;line-height:1.15">${TSfmt(html)}</div>`, { anim: 'slideR', x: 80 + bw, y: y - 6, w: 940 - bw, at, d: (o.d ?? 0) + 0.15, pad: '14px 22px', rot: i % 2 ? 0.8 : -0.8, sfx: 'swish' });
  });
}
const TSfmt = (s) => String(s).replace(/\*\*(.+?)\*\*/g, '<span class="hl">$1</span>').replace(/~~(.+?)~~/g, '<span class="red">$1</span>');

// Two-column comparison cards.
export function duo(S, a, b, o = {}) {
  const y = o.y ?? 420, h = o.h ?? '';
  S.card(`<div class="t-h3 red" style="text-align:center">${a[0]}</div><div class="t-body" style="font-size:${o.fs || 38}px;line-height:1.18">${TSfmt(a[1])}</div>`, { anim: 'slideL', x: 50, y, w: 480, at: a[2], rot: -1.2, style: h });
  S.card(`<div class="t-h3 red" style="text-align:center">${b[0]}</div><div class="t-body" style="font-size:${o.fs || 38}px;line-height:1.18">${TSfmt(b[1])}</div>`, { anim: 'slideR', x: 550, y, w: 480, at: b[2], rot: 1.2, style: h });
}

// Conclusion page: keyword pills + navy summary card + mascot + "Seterusnya" card.
export function kesimpulan(S, D, pills, summary, next, o = {}) {
  head(S, 'Kesimpulan');
  pills.forEach(([k, at], i) => S.add(`<span class="pill" style="font-size:${k.length > 14 ? 26 : 30}px;white-space:nowrap;background:${i % 2 ? '#FFFDF7' : '#F5C928'}">${k}</span>`, { anim: 'pop', x: 50 + (i % 3) * 335, y: 400 + Math.floor(i / 3) * 92, w: 335, at }));
  const yS = 420 + Math.ceil(pills.length / 3) * 92;
  S.card(`<div class="t-h3" style="text-align:center;color:#F5C928;font-size:44px">${summary[0]}</div>`, { color: 'navy', anim: 'stamp', x: 80, y: yS, w: 920, at: summary[1] });
  if (next) {
    S.mascot({ x: 70, y: yS + 190, w: 280, at: next[1], d: -0.2 });
    S.card(`<div class="t-label red">Seterusnya</div><div class="t-h3" style="font-size:44px">${next[0]}</div>`, { x: 380, y: yS + 240, w: 620, at: next[1], d: 0.3 });
  }
}

// Silent official brand end card (exactly like Chapter 1).
export const END = { id: 'akhir', chrome: false, transition: 'zoom', lines: [], minDur: 4.6, board: { name: 'Penutup jenama rasmi', visual: 'Gambar profil rasmi Titik Sejarah (imej asal, tidak diubah) di tengah skrin, latar sinar kuning.', doodle: '—', text: 'TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · "Follow untuk lebih banyak ilmu sejarah."', anim: 'Imej DP fade + zoom-in lembut; nama jenama pop; slogan ditulis; butang follow pop.', music: 'Sting jenama penutup; muzik fade-out.' }, draw(S) { S.endCard(); } };

// ---- war-time doodles (rough.js, brand palette) ----
const sv = (w, h, s) => `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
export function plane(D, color = NAVY) {
  const R = D.R;
  let s = R.path('M20 70 Q60 52 250 56 Q290 60 296 70 Q290 80 250 84 Q60 88 20 70 Z', { fill: color });
  s += R.path('M120 64 L170 8 L196 8 L170 64 Z', { fill: color }) + R.path('M120 76 L170 132 L196 132 L170 76 Z', { fill: color });
  s += R.path('M24 70 L6 34 L26 34 L52 62 Z', { fill: color }) + R.circle(150, 70, 18, { fill: RED, strokeWidth: 2 });
  return sv(300, 140, s);
}
export function bomb(D) {
  const R = D.R;
  let s = R.ellipse(70, 110, 90, 150, { fill: NAVY }) + R.poly([[40, 30], [100, 30], [90, 52], [50, 52]], { fill: NAVY });
  s += R.line(70, 176, 70, 196, { stroke: RED, strokeWidth: 5 });
  return sv(140, 200, s);
}
export function tank(D, color = LNAVY) {
  const R = D.R;
  let s = R.rect(20, 100, 280, 60, { fill: NAVY }) + R.path('M40 100 L70 60 L250 60 L280 100 Z', { fill: color });
  s += R.rect(120, 30, 110, 40, { fill: color }) + R.line(230, 46, 320, 40, { strokeWidth: 10 });
  for (let x = 50; x <= 270; x += 44) s += R.circle(x, 130, 34, { fill: STONE, strokeWidth: 2.5 });
  return sv(330, 170, s);
}
export function soldier(D, color = KHAKI, o = {}) {
  const p = D.person({ hat: 'none', shirt: color, pants: o.pants || NAVY, prop: o.prop || 'spear', pose: o.pose || 'hold' });
  const helmet = D.R.path('M50 74 Q50 20 100 18 Q150 20 150 74 Q100 60 50 74 Z', { fill: o.helmet || color }) + D.R.line(40, 74, 160, 74, { strokeWidth: 6 });
  return p.replace(/<\/svg>$/, helmet + '</svg>');
}
export function banknote(D, txt = '10', o = {}) {
  const R = D.R;
  let s = R.rect(10, 10, 300, 150, { fill: o.fill || '#DCE3EE', strokeWidth: 4 }) + R.rect(26, 26, 268, 118, { fill: 'none', strokeWidth: 2 });
  s += D.txt(160, 104, o.label || 'DOLLARS', { font: 'Marker', weight: 400, size: 30, color: NAVY });
  s += D.txt(56, 64, txt, { font: 'Marker', weight: 400, size: 30, color: RED }) + D.txt(264, 136, txt, { font: 'Marker', weight: 400, size: 30, color: RED });
  if (o.tree) s += R.path('M200 60 Q220 30 250 40 M220 58 L224 132', { stroke: '#3A8A4A', strokeWidth: 5 });
  return sv(320, 170, s);
}
export function train(D) {
  const R = D.R;
  let s = R.rect(30, 50, 140, 90, { fill: RED }) + R.rect(170, 80, 120, 60, { fill: NAVY }) + R.rect(200, 40, 30, 40, { fill: NAVY });
  for (const x of [70, 140, 210, 270]) s += R.circle(x, 150, 40, { fill: STONE, strokeWidth: 3 });
  s += R.line(0, 172, 320, 172, { strokeWidth: 5 });
  for (let x = 10; x < 320; x += 30) s += R.line(x, 166, x + 12, 180, { strokeWidth: 3 });
  return sv(320, 190, s);
}
export function flagJP(D) {   // Japanese flag (white field, red disc) – icon only
  const R = D.R;
  return sv(240, 170, R.rect(14, 14, 212, 142, { fill: '#FFFFFF', strokeWidth: 4 }) + R.circle(120, 85, 80, { fill: RED, stroke: RED }) + R.line(14, 14, 14, 168, { strokeWidth: 6 }));
}
export function riceBowl(D) {
  const R = D.R;
  let s = R.path('M20 80 Q140 70 260 80 Q250 170 140 176 Q30 170 20 80 Z', { fill: LNAVY });
  s += R.path('M40 80 Q80 30 140 34 Q200 30 240 80', { fill: '#FFFFFF', strokeWidth: 3 });
  return sv(280, 190, s);
}
export function atom(D) {
  const R = D.R;
  let s = R.circle(150, 150, 40, { fill: RED });
  for (const a of [0, 60, 120]) s += `<g transform="rotate(${a} 150 150)">` + R.ellipse(150, 150, 270, 90, { fill: 'none', stroke: NAVY, strokeWidth: 5 }) + '</g>';
  return sv(300, 300, s);
}
export function radio(D) {
  const R = D.R;
  let s = R.rect(20, 60, 240, 140, { fill: '#C27B3A' }) + R.circle(90, 130, 90, { fill: STONE }) + R.rect(160, 90, 80, 30, { fill: GOLD, strokeWidth: 2 });
  s += R.line(200, 60, 250, 6, { strokeWidth: 4 }) + R.circle(220, 160, 26, { fill: NAVY, strokeWidth: 2 });
  return sv(280, 210, s);
}
