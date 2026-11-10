// Titik Sejarah doodle library – hand-drawn SVG illustrations (rough.js) in the official palette.
export const C = {
  navy: '#172C63', gold: '#F5C928', red: '#C93436', cream: '#F3EBDD',
  paper: '#FFFDF7', lgold: '#FAE6A2', lred: '#EBA9A3', lnavy: '#3F5DA8', pnavy: '#DCE3EE',
  skin: '#EFC39A', stone: '#E2D7C0', white: '#FFFFFF',
};
const { navy: NAVY, gold: GOLD, red: RED, paper: PAPER, lgold: LGOLD, skin: SKIN } = C;

let seed = 1;
let uid = 1;
export function setSeed(s) { seed = s; }
let G = null;
const gen = () => (G ||= window.rough.generator());
const O = (o = {}) => ({ seed: seed++, roughness: 1.1, bowing: 0.8, stroke: NAVY, strokeWidth: 3.2, fillStyle: 'solid', ...o });
const P = (d) => gen().toPaths(d).map((p) => `<path d="${p.d}" stroke="${p.stroke}" stroke-width="${p.strokeWidth}" fill="${p.fill || 'none'}" stroke-linecap="round" stroke-linejoin="round"/>`).join('');

export const R = {
  rect: (x, y, w, h, o) => P(gen().rectangle(x, y, w, h, O(o))),
  circle: (cx, cy, d, o) => P(gen().circle(cx, cy, d, O(o))),
  ellipse: (cx, cy, w, h, o) => P(gen().ellipse(cx, cy, w, h, O(o))),
  line: (x1, y1, x2, y2, o) => P(gen().line(x1, y1, x2, y2, O(o))),
  poly: (pts, o) => P(gen().polygon(pts, O(o))),
  path: (d, o) => P(gen().path(d, O(o))),
  curve: (pts, o) => P(gen().curve(pts, O(o))),
};
const svg = (w, h, body, extra = '') => `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" ${extra}>${body}</svg>`;
const svgVB = (vb, body) => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
export const txt = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-family="${o.font || 'Caveat'}" font-weight="${o.weight || 700}" font-size="${o.size || 34}" fill="${o.color || NAVY}" text-anchor="${o.anchor || 'middle'}" ${o.rot ? `transform="rotate(${o.rot} ${x} ${y})"` : ''} style="paint-order:stroke" stroke="${o.halo || 'none'}" stroke-width="${o.halo ? 8 : 0}">${s}</text>`;
const squiggles = (x, y, w, rows, gap, o = {}) => {
  let s = '';
  for (let i = 0; i < rows; i++) {
    const yy = y + i * gap; const ww = i === rows - 1 ? w * 0.6 : w;
    let d = `M${x} ${yy}`;
    for (let k = 0; k < ww; k += 18) d += ` q 4.5 -7 9 0 t 9 0`;
    s += `<path d="${d}" stroke="${o.color || NAVY}" stroke-width="${o.sw || 3}" fill="none" stroke-linecap="round" opacity="${o.op || 0.75}"/>`;
  }
  return s;
};

// ---------- characters ----------
const HANDS = {
  down: [[44, 228], [156, 228]], up: [[44, 228], [174, 56]], point: [[44, 228], [204, 124]],
  hold: [[80, 198], [122, 198]], cheer: [[26, 56], [174, 56]], present: [[44, 228], [196, 168]],
};
function arm(sx, sy, hx, hy, color) {
  const mx = (sx + hx) / 2 + (hx > sx ? 8 : -8), my = (sy + hy) / 2;
  return R.path(`M${sx} ${sy} Q${mx} ${my} ${hx} ${hy}`, { stroke: NAVY, strokeWidth: 22, roughness: 0.6 }) +
    R.path(`M${sx} ${sy} Q${mx} ${my} ${hx} ${hy}`, { stroke: color, strokeWidth: 15, roughness: 0.4 });
}
function hat(kind, color) {
  switch (kind) {
    case 'crown': return R.path('M58 58 L64 16 L82 38 L100 6 L118 38 L136 16 L142 58 Z', { fill: GOLD }) + R.circle(100, 42, 12, { fill: RED, strokeWidth: 2 }) + R.circle(74, 48, 9, { fill: RED, strokeWidth: 2 }) + R.circle(126, 48, 9, { fill: RED, strokeWidth: 2 });
    case 'tengkolok': return R.path('M56 64 Q56 26 100 20 Q142 22 148 50 L166 30 L156 68 Q100 80 56 64 Z', { fill: color || GOLD }) + R.line(64, 50, 146, 44, { strokeWidth: 2.5 }) + R.line(68, 38, 140, 32, { strokeWidth: 2.5 });
    case 'tanjak': return R.path('M58 64 Q58 36 100 32 L128 10 L146 62 Q100 76 58 64 Z', { fill: color || RED }) + R.line(70, 52, 140, 48, { strokeWidth: 2.5, stroke: GOLD });
    case 'songkok': return R.path('M62 60 L64 26 Q100 18 136 26 L138 60 Q100 68 62 60 Z', { fill: color || NAVY });
    case 'caping': return R.poly([[22, 64], [100, 14], [178, 64]], { fill: color || LGOLD }) + R.line(60, 40, 140, 40, { strokeWidth: 2 });
    case 'serban': return R.ellipse(100, 48, 104, 54, { fill: color || C.white }) + R.path('M56 50 Q100 30 144 48', { strokeWidth: 2.5 });
    case 'chinese': return R.path('M60 52 Q100 12 140 52 Z', { fill: color || RED }) + R.circle(100, 22, 14, { fill: GOLD, strokeWidth: 2 });
    case 'hair': return R.path('M58 76 Q56 30 100 28 Q144 30 142 76 Q128 50 100 52 Q74 50 58 76 Z', { fill: NAVY });
    default: return '';
  }
}
function prop(kind, hx, hy) {
  switch (kind) {
    case 'scroll': return R.rect(hx - 10, hy - 50, 34, 70, { fill: PAPER, strokeWidth: 2.5 }) + R.line(hx - 6, hy - 34, hx + 18, hy - 34, { strokeWidth: 2 }) + R.line(hx - 6, hy - 22, hx + 18, hy - 22, { strokeWidth: 2 });
    case 'keris': return R.path(`M${hx} ${hy} q 8 -16 0 -30 q -8 -14 0 -30 q 8 -14 0 -30`, { strokeWidth: 6, stroke: '#8A93A6' }) + R.rect(hx - 14, hy - 4, 28, 10, { fill: GOLD, strokeWidth: 2 });
    case 'spear': return R.line(hx, hy + 70, hx, hy - 120, { strokeWidth: 5 }) + R.poly([[hx - 12, hy - 116], [hx, hy - 150], [hx + 12, hy - 116]], { fill: '#B8BFCC', strokeWidth: 2.5 });
    case 'coins': return R.ellipse(hx, hy + 4, 46, 18, { fill: GOLD, strokeWidth: 2.5 }) + R.ellipse(hx, hy - 8, 46, 18, { fill: GOLD, strokeWidth: 2.5 }) + R.ellipse(hx, hy - 20, 46, 18, { fill: GOLD, strokeWidth: 2.5 });
    case 'book': return R.rect(hx - 26, hy - 34, 52, 64, { fill: RED, strokeWidth: 2.5 }) + R.line(hx - 18, hy - 34, hx - 18, hy + 30, { stroke: GOLD, strokeWidth: 3 });
    case 'hoe': return R.line(hx, hy + 80, hx, hy - 70, { strokeWidth: 5 }) + R.poly([[hx, hy - 70], [hx + 40, hy - 64], [hx + 34, hy - 46], [hx, hy - 56]], { fill: '#B8BFCC', strokeWidth: 2.5 });
    case 'fish': return R.ellipse(hx + 26, hy, 56, 24, { fill: '#B8BFCC', strokeWidth: 2.5 }) + R.poly([[hx + 54, hy], [hx + 70, hy - 12], [hx + 70, hy + 12]], { fill: '#B8BFCC', strokeWidth: 2.5 });
    case 'basket': return R.path(`M${hx - 30} ${hy - 6} L${hx + 30} ${hy - 6} L${hx + 22} ${hy + 34} L${hx - 22} ${hy + 34} Z`, { fill: LGOLD, fillStyle: 'cross-hatch', hachureGap: 7, strokeWidth: 2.5 });
    case 'flag': return R.line(hx, hy + 60, hx, hy - 110, { strokeWidth: 4 }) + R.poly([[hx, hy - 110], [hx + 64, hy - 94], [hx, hy - 76]], { fill: RED, strokeWidth: 2.5 });
    case 'key': return R.circle(hx, hy - 16, 26, { fill: GOLD, strokeWidth: 2.5 }) + R.line(hx, hy - 4, hx, hy + 40, { strokeWidth: 5, stroke: GOLD }) + R.line(hx, hy + 30, hx + 12, hy + 30, { strokeWidth: 4, stroke: GOLD });
    case 'payung': return R.line(hx, hy + 30, hx, hy - 150, { strokeWidth: 4 }) + R.path(`M${hx - 70} ${hy - 130} Q${hx} ${hy - 210} ${hx + 70} ${hy - 130} Z`, { fill: GOLD, strokeWidth: 3 });
    default: return '';
  }
}
export function person(o = {}) {
  const shirt = o.shirt || C.lnavy, pants = o.pants || NAVY, skin = o.skin || SKIN;
  const [lh, rh] = HANDS[o.pose || 'down'];
  let s = '';
  if (o.cape) s += R.path('M58 140 L30 290 L170 290 L142 140 Z', { fill: o.cape });
  s += R.rect(66, 250, 28, 58, { fill: pants }) + R.rect(106, 250, 28, 58, { fill: pants });
  s += R.ellipse(78, 312, 42, 16, { fill: NAVY }) + R.ellipse(122, 312, 42, 16, { fill: NAVY });
  if (o.dress) s += R.path('M60 138 Q100 124 140 138 L160 300 Q100 312 40 300 Z', { fill: shirt });
  else s += R.path('M60 138 Q100 124 140 138 L150 252 Q100 264 50 252 Z', { fill: shirt });
  if (o.samping) s += R.path('M53 205 L147 205 L152 254 Q100 266 48 254 Z', { fill: o.samping, fillStyle: o.sampingStyle || 'solid', hachureGap: 7 });
  if (o.sash) s += R.path('M66 142 L136 236', { stroke: o.sash, strokeWidth: 10, roughness: 0.6 });
  if (o.tudung) s += R.path('M48 104 Q46 30 100 28 Q154 30 152 104 Q150 150 100 152 Q50 150 48 104 Z', { fill: o.tudung });
  s += arm(64, 146, lh[0], lh[1], shirt) + arm(136, 146, rh[0], rh[1], shirt);
  s += R.circle(lh[0], lh[1], 22, { fill: skin, strokeWidth: 2.5 }) + R.circle(rh[0], rh[1], 22, { fill: skin, strokeWidth: 2.5 });
  s += R.circle(100, 86, o.tudung ? 70 : 84, { fill: skin });
  if (!o.tudung) s += hat(o.hat || 'hair', o.hatColor);
  s += `<circle cx="86" cy="86" r="5" fill="${NAVY}"/><circle cx="114" cy="86" r="5" fill="${NAVY}"/>`;
  s += `<ellipse cx="76" cy="100" rx="8" ry="5" fill="${C.lred}" opacity=".8"/><ellipse cx="124" cy="100" rx="8" ry="5" fill="${C.lred}" opacity=".8"/>`;
  s += o.mood === 'talk' ? `<ellipse cx="100" cy="106" rx="8" ry="6" fill="${RED}" stroke="${NAVY}" stroke-width="2.5"/>`
    : o.mood === 'sad' ? `<path d="M88 110 Q100 100 112 110" stroke="${NAVY}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`
      : `<path d="M86 102 Q100 114 114 102" stroke="${NAVY}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
  if (o.beard) s += R.path('M84 118 Q100 136 116 118', { stroke: NAVY, strokeWidth: 5 });
  if (o.prop) s += prop(o.prop, rh[0], rh[1]);
  if (o.prop2) s += prop(o.prop2, lh[0], lh[1]);
  return svgVB('-30 -10 260 340', s);
}
// preset characters
export const P_ = {
  sultan: (o = {}) => person({ hat: 'crown', shirt: GOLD, pants: GOLD, samping: RED, beard: true, cape: o.cape ?? RED, ...o }),
  bendahara: (o = {}) => person({ hat: 'tengkolok', hatColor: C.white, shirt: NAVY, samping: GOLD, beard: true, prop: 'scroll', ...o }),
  bendahari: (o = {}) => person({ hat: 'tengkolok', hatColor: GOLD, shirt: RED, samping: NAVY, prop: 'coins', ...o }),
  temenggung: (o = {}) => person({ hat: 'tanjak', hatColor: NAVY, shirt: C.lnavy, samping: RED, prop: 'spear', ...o }),
  laksamana: (o = {}) => person({ hat: 'tanjak', hatColor: RED, shirt: NAVY, samping: GOLD, prop: 'keris', sash: GOLD, ...o }),
  petani: (o = {}) => person({ hat: 'caping', shirt: '#6E8BC8', pants: NAVY, prop: 'hoe', ...o }),
  nelayan: (o = {}) => person({ hat: 'hair', shirt: RED, pants: NAVY, prop: 'fish', ...o }),
  pedagang: (o = {}) => person({ hat: 'serban', shirt: C.paper, pants: NAVY, prop: 'basket', beard: true, ...o }),
  wanita: (o = {}) => person({ tudung: RED, shirt: GOLD, dress: true, ...o }),
  rakyat: (o = {}) => person({ hat: 'songkok', shirt: C.lnavy, samping: GOLD, ...o }),
  pegawai: (o = {}) => person({ hat: 'chinese', shirt: RED, pants: NAVY, prop: 'scroll', ...o }),
};

// ---------- buildings & objects ----------
export function palace() {
  let s = R.line(10, 302, 410, 302, { strokeWidth: 3 });
  for (let x = 100; x <= 320; x += 44) s += R.line(x, 244, x, 300, { strokeWidth: 6 });
  s += R.rect(76, 228, 268, 20, { fill: RED });
  s += R.rect(96, 160, 228, 70, { fill: LGOLD });
  for (let x = 116; x < 310; x += 48) s += R.rect(x, 176, 26, 36, { fill: NAVY, strokeWidth: 2 });
  s += R.poly([[56, 166], [364, 166], [322, 112], [98, 112]], { fill: NAVY });
  s += R.poly([[106, 114], [314, 114], [282, 70], [138, 70]], { fill: RED });
  s += R.poly([[148, 72], [272, 72], [236, 30], [184, 30]], { fill: NAVY });
  s += R.line(184, 30, 172, 14, { strokeWidth: 4, stroke: GOLD }) + R.line(236, 30, 248, 14, { strokeWidth: 4, stroke: GOLD });
  s += R.line(56, 166, 40, 150, { strokeWidth: 4, stroke: GOLD }) + R.line(364, 166, 380, 150, { strokeWidth: 4, stroke: GOLD });
  s += R.line(196, 248, 176, 300, { strokeWidth: 4 }) + R.line(226, 248, 246, 300, { strokeWidth: 4 });
  for (let y = 260; y < 300; y += 12) s += R.line(196 - (y - 248) * 0.38, y, 226 + (y - 248) * 0.38, y, { strokeWidth: 2.5 });
  return svg(420, 312, s);
}
export function candi(color = LGOLD) {
  let s = R.line(0, 286, 260, 286, { strokeWidth: 3 });
  s += R.rect(16, 248, 228, 36, { fill: color });
  s += R.rect(40, 196, 180, 54, { fill: color });
  s += R.rect(66, 146, 128, 52, { fill: color });
  s += R.rect(92, 102, 76, 46, { fill: color });
  s += R.path('M100 104 Q130 20 160 104 Z', { fill: color });
  s += R.line(130, 44, 130, 12, { strokeWidth: 4 });
  s += R.path('M112 284 L112 236 Q130 214 148 236 L148 284', { fill: NAVY });
  for (const y of [222, 172]) for (let x = 56; x < 210; x += 34) s += R.line(x, y - 8, x + 16, y - 8, { strokeWidth: 2 });
  return svg(260, 292, s);
}
function tower(cx, base, w, h, fill) {
  return R.path(`M${cx - w / 2} ${base} L${cx - w * 0.4} ${base - h * 0.42} Q${cx - w * 0.36} ${base - h * 0.86} ${cx} ${base - h} Q${cx + w * 0.36} ${base - h * 0.86} ${cx + w * 0.4} ${base - h * 0.42} L${cx + w / 2} ${base} Z`, { fill }) +
    R.line(cx - w * 0.42, base - h * 0.3, cx + w * 0.42, base - h * 0.3, { strokeWidth: 2 }) + R.line(cx - w * 0.38, base - h * 0.55, cx + w * 0.38, base - h * 0.55, { strokeWidth: 2 });
}
export function angkor() {
  let s = R.line(0, 252, 420, 252, { strokeWidth: 3 });
  s += R.rect(16, 206, 388, 44, { fill: LGOLD });
  s += R.rect(46, 166, 328, 42, { fill: LGOLD });
  s += tower(80, 168, 44, 90, LGOLD) + tower(340, 168, 44, 90, LGOLD) + tower(140, 168, 54, 120, LGOLD) + tower(280, 168, 54, 120, LGOLD) + tower(210, 168, 74, 160, GOLD);
  for (let x = 66; x < 360; x += 40) s += R.rect(x, 216, 20, 26, { fill: NAVY, strokeWidth: 2 });
  return svg(420, 258, s);
}
export function stupa() {
  let s = R.rect(20, 200, 200, 30, { fill: LGOLD });
  s += R.path('M40 202 Q40 90 120 84 Q200 90 200 202 Z', { fill: C.paper });
  s += R.rect(100, 56, 40, 30, { fill: LGOLD });
  s += R.path('M108 56 L120 8 L132 56 Z', { fill: GOLD });
  s += R.line(60, 160, 180, 160, { strokeWidth: 2.5 });
  return svg(240, 236, s);
}
export function ship(o = {}) {
  const hull = o.hull || RED;
  let s = '';
  s += R.path('M24 168 L316 168 Q296 214 254 222 L86 222 Q44 214 24 168 Z', { fill: hull });
  s += R.line(30, 182, 308, 182, { stroke: GOLD, strokeWidth: 4 });
  s += R.line(170, 24, 170, 170, { strokeWidth: 5 });
  if (o.junk) {
    s += R.rect(178, 36, 100, 124, { fill: RED });
    for (let y = 56; y < 160; y += 22) s += R.line(178, y, 278, y, { strokeWidth: 2.5 });
    s += R.rect(70, 56, 92, 104, { fill: GOLD });
    for (let y = 76; y < 160; y += 22) s += R.line(70, y, 162, y, { strokeWidth: 2.5 });
  } else {
    s += R.poly([[178, 40], [178, 160], [300, 160]], { fill: C.paper });
    s += R.poly([[162, 52], [162, 160], [62, 160]], { fill: o.sail || GOLD });
    s += R.poly([[170, 24], [210, 32], [170, 42]], { fill: RED, strokeWidth: 2 });
  }
  if (o.waves !== false) s += R.path('M0 236 q 20 -14 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0', { strokeWidth: 3.5 });
  return svg(340, 250, s);
}
export function inscription(o = {}) {
  let s = R.path('M28 272 L28 74 Q28 18 110 16 Q192 18 192 74 L192 272 Z', { fill: C.stone });
  s += squiggles(52, 80, 116, 8, 23, { sw: 3.2 });
  if (o.year) s += txt(110, 312, o.year, { size: 40, font: 'Marker', weight: 400, color: RED });
  return svg(220, o.year ? 326 : 280, s);
}
export function scroll(title = '', o = {}) {
  let s = R.rect(36, 44, 248, 312, { fill: C.paper });
  s += R.rect(18, 24, 284, 30, { fill: o.color || GOLD }) + R.rect(18, 346, 284, 30, { fill: o.color || GOLD });
  if (title) s += txt(160, 112, title, { size: o.ts || 40, font: 'Marker', weight: 400, color: o.tc || RED });
  s += squiggles(64, title ? 160 : 100, 190, title ? 8 : 10, 23, { sw: 3 });
  return svg(320, 400, s);
}
export function book(title = '', color = RED, o = {}) {
  let s = R.rect(36, 30, 200, 270, { fill: C.paper }) + R.rect(24, 20, 200, 270, { fill: color });
  s += R.line(48, 20, 48, 290, { stroke: GOLD, strokeWidth: 5 });
  s += R.rect(66, 80, 140, 110, { fill: C.paper, strokeWidth: 2.5 });
  if (title) s += `<text x="136" y="${o.y || 128}" font-family="Marker" font-size="${o.size || 26}" fill="${NAVY}" text-anchor="middle">${title.split('|').map((t, i) => `<tspan x="136" dy="${i ? 30 : 0}">${t}</tspan>`).join('')}</text>`;
  return svg(250, 310, s);
}
export function crown() {
  let s = R.path('M20 120 L30 30 L66 74 L100 14 L134 74 L170 30 L180 120 Z', { fill: GOLD });
  s += R.rect(20, 110, 160, 26, { fill: GOLD });
  s += R.circle(100, 82, 20, { fill: RED, strokeWidth: 2.5 }) + R.circle(56, 96, 14, { fill: RED, strokeWidth: 2.5 }) + R.circle(144, 96, 14, { fill: RED, strokeWidth: 2.5 });
  return svg(200, 144, s);
}
export function keris() {
  let s = R.path('M58 70 Q40 40 56 16 Q78 4 82 26 Q70 34 74 70 Z', { fill: GOLD });
  s += R.path('M20 70 L104 70 Q112 84 96 92 L28 92 Q12 84 20 70 Z', { fill: RED });
  s += R.path('M54 92 Q72 120 56 148 Q40 176 58 204 Q74 232 58 260 Q48 290 62 330 Q76 290 72 260 Q88 232 72 204 Q56 176 72 148 Q88 120 70 92 Z', { fill: '#C9CED8' });
  return svg(124, 340, s);
}
export function payung(color = GOLD) {
  let s = R.line(110, 90, 110, 256, { strokeWidth: 6 });
  s += R.path('M8 112 Q110 -14 212 112 Z', { fill: color });
  let d = 'M8 112'; for (let x = 8; x < 212; x += 34) d += ` q 17 22 34 0`;
  s += R.path(d, { fill: color, strokeWidth: 3 });
  s += R.line(110, 4, 110, 30, { strokeWidth: 5 }) + R.circle(110, 6, 14, { fill: RED, strokeWidth: 2 });
  for (const x of [50, 110, 170]) s += R.line(110, 30, x, 108, { strokeWidth: 2 });
  return svg(220, 262, s);
}
export function nobat() {
  let s = R.rect(36, 70, 148, 104, { fill: RED });
  s += R.ellipse(110, 70, 148, 44, { fill: C.paper });
  s += R.ellipse(110, 174, 148, 40, { fill: RED });
  s += R.line(40, 100, 180, 100, { stroke: GOLD, strokeWidth: 6 }) + R.line(40, 146, 180, 146, { stroke: GOLD, strokeWidth: 6 });
  for (let x = 52; x < 180; x += 26) s += R.line(x, 102, x + 13, 144, { strokeWidth: 2 });
  s += R.line(150, 10, 116, 60, { strokeWidth: 6 }) + R.circle(150, 10, 16, { fill: GOLD, strokeWidth: 2 });
  return svg(220, 200, s);
}
export function nafiri() {
  let s = R.path('M10 46 L190 38 Q230 10 290 4 L290 96 Q230 90 190 62 L10 54 Z', { fill: GOLD });
  s += R.rect(60, 40, 12, 20, { fill: RED, strokeWidth: 2 }) + R.rect(130, 37, 12, 24, { fill: RED, strokeWidth: 2 });
  return svg(300, 100, s);
}
export function seal() {
  let s = R.circle(100, 100, 180, { fill: RED });
  s += R.circle(100, 100, 132, { fill: 'none', stroke: C.paper, strokeWidth: 4 });
  const pts = []; for (let i = 0; i < 16; i++) { const a = (i * Math.PI) / 8, r = i % 2 ? 26 : 52; pts.push([100 + r * Math.cos(a), 100 + r * Math.sin(a)]); }
  s += R.poly(pts, { fill: GOLD, stroke: C.paper, strokeWidth: 3 });
  return svg(200, 200, s);
}
export function scales() {
  let s = R.line(130, 30, 130, 210, { strokeWidth: 7 });
  s += R.rect(80, 206, 100, 18, { fill: GOLD });
  s += R.line(30, 60, 230, 60, { strokeWidth: 6 });
  s += R.circle(130, 30, 22, { fill: GOLD, strokeWidth: 3 });
  s += R.line(30, 60, 10, 140, { strokeWidth: 2 }) + R.line(30, 60, 50, 140, { strokeWidth: 2 }) + R.line(230, 60, 210, 140, { strokeWidth: 2 }) + R.line(230, 60, 250, 140, { strokeWidth: 2 });
  s += R.path('M0 140 Q30 176 60 140 Z', { fill: RED }) + R.path('M200 140 Q230 176 260 140 Z', { fill: RED });
  return svg(262, 230, s);
}
export function padi() {
  let s = R.rect(0, 160, 300, 40, { fill: C.pnavy, strokeWidth: 2.5 });
  for (let x = 30; x < 290; x += 52) {
    s += R.path(`M${x} 170 Q${x - 6} 100 ${x - 26} 60`, { stroke: '#5E7D3A', strokeWidth: 4 });
    s += R.path(`M${x} 170 Q${x + 4} 110 ${x + 22} 74`, { stroke: '#5E7D3A', strokeWidth: 4 });
    s += R.path(`M${x} 170 Q${x} 90 ${x + 4} 40`, { stroke: '#5E7D3A', strokeWidth: 4 });
    for (let k = 0; k < 4; k++) s += R.ellipse(x + 6 + k * 3, 48 + k * 12, 10, 16, { fill: GOLD, strokeWidth: 1.5 });
  }
  return svg(300, 202, s);
}
export function coins() {
  let s = '';
  for (let i = 0; i < 4; i++) s += R.ellipse(70, 150 - i * 22, 110, 40, { fill: GOLD });
  s += R.ellipse(170, 150, 110, 40, { fill: GOLD }) + R.ellipse(170, 128, 110, 40, { fill: GOLD });
  s += txt(70, 92, '$', { size: 30, font: 'Marker', weight: 400 });
  return svg(240, 180, s);
}
export function anchor() {
  let s = R.circle(100, 30, 34, { fill: 'none', strokeWidth: 6 });
  s += R.line(100, 46, 100, 190, { strokeWidth: 8 }) + R.line(64, 76, 136, 76, { strokeWidth: 8 });
  s += R.path('M30 140 Q40 196 100 196 Q160 196 170 140', { strokeWidth: 8 });
  s += R.poly([[22, 150], [30, 128], [44, 150]], { fill: NAVY }) + R.poly([[156, 150], [170, 128], [178, 150]], { fill: NAVY });
  return svg(200, 210, s);
}
export function shield(color = RED) {
  let s = R.path('M100 10 L180 40 Q182 140 100 192 Q18 140 20 40 Z', { fill: color });
  s += R.path('M100 34 L156 56 Q156 128 100 166 Q44 128 44 56 Z', { fill: GOLD, strokeWidth: 2.5 });
  s += R.path('M74 98 L94 120 L130 76', { strokeWidth: 8 });
  return svg(200, 200, s);
}
export function jail() {
  let s = R.rect(20, 20, 180, 170, { fill: C.stone });
  for (let x = 48; x < 190; x += 30) s += R.line(x, 22, x, 188, { strokeWidth: 7 });
  s += R.line(20, 70, 200, 70, { strokeWidth: 5 });
  return svg(220, 210, s);
}
export function market() {
  let s = R.rect(30, 90, 260, 110, { fill: C.paper });
  s += R.poly([[14, 92], [306, 92], [282, 30], [38, 30]], { fill: RED });
  for (let x = 38; x < 282; x += 40) s += R.line(x + 6, 32, x - 4, 90, { stroke: C.paper, strokeWidth: 8 });
  s += R.rect(50, 140, 220, 60, { fill: LGOLD });
  for (const [x, c] of [[80, GOLD], [128, RED], [176, '#5E7D3A'], [224, GOLD]]) s += R.circle(x, 132, 34, { fill: c, strokeWidth: 2 });
  return svg(320, 210, s);
}
export function globe() {
  let s = R.circle(110, 110, 200, { fill: C.pnavy });
  s += R.ellipse(110, 110, 90, 200, { fill: 'none', strokeWidth: 2.5 }) + R.line(10, 110, 210, 110, { strokeWidth: 2.5 });
  s += R.path('M40 60 Q70 40 96 66 Q104 96 76 104 Q54 120 40 94 Z', { fill: LGOLD, strokeWidth: 2.5 });
  s += R.path('M120 120 Q160 110 170 140 Q150 176 126 160 Z', { fill: LGOLD, strokeWidth: 2.5 });
  return svg(220, 220, s);
}
export function treaty(year = '1648') {
  let s = R.rect(20, 14, 220, 280, { fill: C.paper });
  s += txt(130, 70, 'PERJANJIAN', { size: 30, font: 'Marker', weight: 400 });
  s += squiggles(46, 104, 166, 6, 24, { sw: 3 });
  s += R.circle(186, 250, 74, { fill: RED });
  s += R.path('M168 280 L160 320 L180 306 L190 324 L196 284', { fill: RED, strokeWidth: 2 });
  s += txt(186, 260, year, { size: 26, font: 'Marker', weight: 400, color: C.paper });
  return svg(260, 330, s);
}
export function star(color = GOLD) {
  const pts = []; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 26 : 60; pts.push([64 + r * Math.cos(a), 66 + r * Math.sin(a)]); }
  return svg(128, 130, R.poly(pts, { fill: color }));
}
export function check(color = '#3A8A4A') { return svg(120, 110, R.path('M14 58 L46 92 L106 14', { stroke: color, strokeWidth: 14, roughness: 1.4 })); }
export function cross(color = RED) { return svg(110, 110, R.line(18, 18, 92, 92, { stroke: color, strokeWidth: 14 }) + R.line(92, 18, 18, 92, { stroke: color, strokeWidth: 14 })); }
export function question(color = RED) { return svg(100, 160, R.path('M24 46 Q26 10 54 10 Q86 12 84 44 Q82 66 56 78 L54 106', { stroke: color, strokeWidth: 14 }) + R.circle(54, 138, 22, { fill: color, stroke: color })); }
export function bulb() {
  let s = R.path('M60 140 Q60 112 40 92 Q14 64 32 34 Q52 6 80 6 Q108 6 126 34 Q144 64 118 92 Q98 112 98 140 Z', { fill: GOLD });
  s += R.rect(58, 140, 42, 30, { fill: C.stone }) + R.line(58, 152, 100, 152, { strokeWidth: 2 });
  for (const [x1, y1, x2, y2] of [[-6, 60, -30, 54], [10, 14, -10, -4], [150, 14, 170, -4], [164, 60, 188, 54]]) s += R.line(x1, y1, x2, y2, { stroke: RED, strokeWidth: 5 });
  return svgVB('-40 -14 240 190', s);
}
export function heart(color = RED) { return svg(140, 130, R.path('M70 120 Q10 80 10 44 Q10 10 40 10 Q62 10 70 34 Q78 10 100 10 Q130 10 130 44 Q130 80 70 120 Z', { fill: color })); }
export function swords() {
  let s = R.line(20, 180, 170, 20, { strokeWidth: 9, stroke: '#9AA3B5' }) + R.line(180, 180, 30, 20, { strokeWidth: 9, stroke: '#9AA3B5' });
  s += R.line(40, 140, 72, 170, { strokeWidth: 9 }) + R.line(160, 140, 128, 170, { strokeWidth: 9 });
  return svg(200, 200, s);
}
export function magnifier() { return svg(200, 200, R.circle(80, 80, 120, { fill: C.pnavy, strokeWidth: 8 }) + R.line(124, 124, 186, 186, { strokeWidth: 18 })); }
export function cycle(colorA = RED, colorB = GOLD) {
  let s = R.path('M60 120 Q60 30 160 30 Q240 30 256 96', { stroke: colorA, strokeWidth: 10 });
  s += R.poly([[236, 88], [260, 120], [276, 84]], { fill: colorA, stroke: colorA });
  s += R.path('M260 160 Q260 250 160 250 Q80 250 64 184', { stroke: colorB, strokeWidth: 10 });
  s += R.poly([[84, 192], [60, 160], [44, 196]], { fill: colorB, stroke: colorB });
  return svg(320, 280, s);
}
export function burst() {
  let s = '';
  for (let i = 0; i < 28; i++) {
    const a1 = (i * 2 * Math.PI) / 28, a2 = a1 + Math.PI / 28;
    if (i % 2) continue;
    s += `<polygon points="1000,1000 ${1000 + 1500 * Math.cos(a1)},${1000 + 1500 * Math.sin(a1)} ${1000 + 1500 * Math.cos(a2)},${1000 + 1500 * Math.sin(a2)}" fill="${GOLD}" opacity=".32"/>`;
  }
  return svg(2000, 2000, s);
}
export function underline(w = 400, color = RED) { return svg(w, 30, R.path(`M6 18 Q${w / 3} 6 ${w / 2} 16 T${w - 6} 12`, { stroke: color, strokeWidth: 7 })); }
export function ring(w = 400, h = 140, color = RED) { return svg(w, h, R.ellipse(w / 2, h / 2, w - 16, h - 16, { fill: 'none', stroke: color, strokeWidth: 6, roughness: 1.8 })); }
export function arrow(x1, y1, x2, y2, o = {}) {
  const color = o.color || NAVY;
  const bend = o.bend ?? 0.18;
  const mx = (x1 + x2) / 2 - (y2 - y1) * bend, my = (y1 + y2) / 2 + (x2 - x1) * bend;
  const ang = Math.atan2(y2 - my, x2 - mx), L = 26;
  const h1 = [x2 - L * Math.cos(ang - 0.5), y2 - L * Math.sin(ang - 0.5)], h2 = [x2 - L * Math.cos(ang + 0.5), y2 - L * Math.sin(ang + 0.5)];
  let s = R.path(`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`, { stroke: color, strokeWidth: o.sw || 6, roughness: 0.9 });
  s += R.path(`M${h1[0]} ${h1[1]} L${x2} ${y2} L${h2[0]} ${h2[1]}`, { stroke: color, strokeWidth: o.sw || 6, roughness: 0.6 });
  return svg(o.w, o.h, s);
}
export function pinSVG(color, s = 1) {
  return `<svg viewBox="0 0 48 64" width="${48 * s}" height="${64 * s}" style="position:absolute;left:0;top:0;overflow:visible"><path d="M24 62 C 10 40 4 32 4 22 A20 20 0 1 1 44 22 C44 32 38 40 24 62Z" fill="${color}" stroke="${NAVY}" stroke-width="3.5"/><circle cx="24" cy="22" r="8" fill="#fff" stroke="${NAVY}" stroke-width="3"/></svg>`;
}
export function map(o) {
  const d3 = window.d3;
  const w = o.w || 960;
  const [[lon0, lat0], [lon1, lat1]] = o.bounds;
  const proj = d3.geoMercator().fitWidth(w, { type: 'MultiPoint', coordinates: [[lon0, lat0], [lon1, lat1]] });
  const a = proj([lon0, lat1]), b = proj([lon1, lat0]);
  const h = Math.round(Math.abs(b[1] - a[1]));
  proj.clipExtent([[0, 0], [w, h]]);
  const pathGen = d3.geoPath(proj);
  const d = pathGen(o.land);
  const id = 'm' + uid++;
  let s = `<defs><clipPath id="${id}c"><rect x="0" y="0" width="${w}" height="${h}" rx="28"/></clipPath>
    <filter id="${id}f" x="-2%" y="-2%" width="104%" height="104%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7"/><feDisplacementMap in="SourceGraphic" scale="5"/></filter></defs>`;
  s += `<rect x="0" y="0" width="${w}" height="${h}" rx="28" fill="${C.pnavy}"/>`;
  s += `<g clip-path="url(#${id}c)">`;
  for (let gx = 1; gx < 6; gx++) s += `<line x1="${(gx * w) / 6}" y1="0" x2="${(gx * w) / 6}" y2="${h}" stroke="${NAVY}" stroke-opacity=".08" stroke-width="2" stroke-dasharray="8 10" data-nodraw="1"/>`;
  s += `<path d="${d}" fill="${o.landFill || LGOLD}"/>`;
  s += `<g filter="url(#${id}f)"><path d="${d}" fill="none" stroke="${NAVY}" stroke-width="3.2" stroke-linejoin="round"/></g>`;
  for (const l of o.labels || []) { const [x, y] = proj([l.lon, l.lat]); s += txt(x, y, l.text, { size: l.size || 34, color: l.color || C.lnavy, rot: l.rot, font: 'Caveat' }); }
  s += `</g><rect x="2" y="2" width="${w - 4}" height="${h - 4}" rx="28" fill="none" stroke="${NAVY}" stroke-width="5"/>`;
  return { svg: svg(w, h, s), proj, w, h };
}

export function mountain() {
  let s = R.poly([[10, 230], [150, 30], [300, 230]], { fill: '#8FA77A' });
  s += R.poly([[118, 76], [150, 30], [184, 78], [164, 70], [150, 86], [134, 70]], { fill: C.paper, strokeWidth: 2.5 });
  s += R.poly([[200, 230], [270, 110], [340, 230]], { fill: '#7C9468' });
  return svg(350, 240, s);
}
export function river() {
  let s = R.path('M0 40 Q80 10 150 50 T300 60 T420 40', { stroke: C.lnavy, strokeWidth: 18, roughness: 0.6 });
  s += R.path('M0 40 Q80 10 150 50 T300 60 T420 40', { stroke: C.pnavy, strokeWidth: 8, roughness: 0.6 });
  return svg(420, 90, s);
}
export function vs() { return svg(160, 120, R.circle(80, 60, 110, { fill: RED }) + txt(80, 76, 'VS', { size: 48, font: 'Marker', weight: 400, color: C.paper })); }

export const D = {
  mountain, river, vs,
  person, ...P_, palace, candi, angkor, stupa, ship, inscription, scroll, book, crown, keris, payung, nobat, nafiri, seal,
  scales, padi, coins, anchor, shield, jail, market, globe, treaty, star, check, cross, question, bulb, heart, swords,
  magnifier, cycle, burst, underline, ring, arrow, pinSVG, map, txt, R,
};
