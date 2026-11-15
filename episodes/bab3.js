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
