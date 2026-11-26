// Shared doodles/helpers for the Bab 4 series (Chapter 1 doodle-notebook look, brand palette).
export const NAVY = '#172C63', GOLD = '#F5C928', RED = '#C93436', PAPER = '#FFFDF7';
export const MALAYA = [[99.2, 0.9], [104.8, 7.0]];          // Peninsula map bounds
export const ALL = [[99.2, 0.6], [119.6, 7.6]];              // Peninsula + Borneo
export const BORNEO = [[109.4, 0.7], [119.6, 7.4]];          // Sarawak + Sabah
export const NOW = { anim: 'none', at: 'start', d: -0.35 };  // visible from frame 1

export const riceSack = (D) => `<svg viewBox="0 0 240 260">${D.R.path('M50 70 Q40 40 70 30 L170 30 Q200 40 190 70 Q226 150 200 236 Q120 256 40 236 Q14 150 50 70 Z', { fill: PAPER })}${D.R.path('M58 66 Q120 84 182 66', { strokeWidth: 5 })}${D.R.rect(70, 120, 100, 64, { fill: GOLD, strokeWidth: 2.5 })}<text x="120" y="164" font-family="Marker" font-size="34" fill="${NAVY}" text-anchor="middle">BERAS</text></svg>`;
export const bowl = (D) => `<svg viewBox="0 0 260 150">${D.R.path('M10 40 Q130 40 250 40 Q240 140 130 140 Q20 140 10 40 Z', { fill: PAPER })}${D.R.ellipse(130, 40, 240, 30, { fill: '#DCE3EE' })}</svg>`;
export const bottle = (D) => `<svg viewBox="0 0 120 200">${D.R.rect(30, 10, 60, 30, { fill: RED })}${D.R.rect(10, 40, 100, 150, { fill: PAPER })}${D.R.rect(30, 90, 60, 50, { fill: GOLD, strokeWidth: 2 })}</svg>`;
export const crate = (D, label) => `<svg viewBox="0 0 260 200">${D.R.rect(20, 50, 220, 140, { fill: GOLD })}${D.R.rect(10, 30, 240, 40, { fill: RED })}<text x="130" y="140" font-family="Marker" font-size="${label.length > 8 ? 30 : 38}" fill="${NAVY}" text-anchor="middle">${label}</text></svg>`;
export const tree = (D) => `<svg viewBox="0 0 200 240">${D.R.rect(88, 120, 24, 110, { fill: '#B98A5A' })}${D.R.circle(100, 90, 150, { fill: '#5E7D3A' })}${D.R.path('M100 150 L112 170', { stroke: PAPER, strokeWidth: 4 })}</svg>`;
export const pickaxe = (D) => `<svg viewBox="0 0 220 220">${D.R.line(40, 200, 170, 60, { strokeWidth: 10, stroke: '#B98A5A' })}${D.R.path('M110 40 Q170 20 210 70 Q170 50 130 70 Z', { fill: '#B8BFCC' })}</svg>`;
export const medcross = (D) => `<svg viewBox="0 0 160 160">${D.R.rect(10, 10, 140, 140, { fill: PAPER })}${D.R.rect(62, 30, 36, 100, { fill: RED, strokeWidth: 2 })}${D.R.rect(30, 62, 100, 36, { fill: RED, strokeWidth: 2 })}</svg>`;
export const gear = (D) => `<svg viewBox="0 0 160 160">${D.R.circle(80, 80, 110, { fill: '#B8BFCC' })}${D.R.circle(80, 80, 40, { fill: PAPER })}${[0, 1, 2, 3, 4, 5].map((i) => { const a = (i * Math.PI) / 3; return D.R.rect(80 + 62 * Math.cos(a) - 12, 80 + 62 * Math.sin(a) - 12, 24, 24, { fill: '#B8BFCC', strokeWidth: 2 }); }).join('')}</svg>`;
export const lightning = () => `<svg viewBox="0 0 120 220"><path d="M70 0 L20 110 L60 110 L30 220 L100 90 L60 90 L90 0 Z" fill="${RED}" stroke="${NAVY}" stroke-width="5"/></svg>`;
export const banner = (D, text, color = PAPER) => `<svg viewBox="0 0 300 200">${D.R.line(20, 30, 20, 200, { strokeWidth: 6, stroke: '#B98A5A' })}${D.R.line(280, 30, 280, 200, { strokeWidth: 6, stroke: '#B98A5A' })}${D.R.rect(10, 20, 280, 110, { fill: color })}<text x="150" y="90" font-family="Marker" font-size="${Math.min(40, Math.floor(420 / Math.max(1, text.length)))}" fill="${NAVY}" text-anchor="middle">${text}</text></svg>`;
// British official (generic doodle, labelled ILUSTRASI where used)
export const officer = (D, o = {}) => D.person({ hat: 'hair', shirt: '#F3EBDD', pants: NAVY, sash: RED, ...o });
export const iconRow = (fmt, ic, text, o = {}) => `<div class="card notape" style="display:flex;align-items:center;gap:16px;padding:${o.pad || '8px 16px'}"><div style="width:${o.iw || 70}px;flex:none">${ic}</div><div class="t-body" style="font-size:${o.fs || 38}px">${fmt(text)}</div></div>`;
// numbered card (Chapter 1 "Kenapa penting" style)
export const numCard = (n, html, color = RED, fs = 46) => `<div style="display:flex;align-items:center;gap:22px"><div class="t-big" style="font-size:90px;color:${color}">${n}</div><div class="t-body" style="font-size:${fs}px">${html}</div></div>`;
// standard final brand card scene
export const END = { id: 'akhir', chrome: false, transition: 'zoom', lines: [], minDur: 4.6, board: { name: 'Penutup jenama rasmi', visual: 'Gambar profil rasmi Titik Sejarah (imej asal, tidak diubah) di tengah skrin, latar sinar kuning.', doodle: '—', text: 'TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · "Follow untuk lebih banyak ilmu sejarah."', anim: 'Fade + zoom-in lembut pada DP; teks jenama pop.', music: 'Sting jenama penutup; muzik fade-out.' }, draw(S) { S.endCard(); } };
// Mini quiz (Ulang Kaji format): question card, 3 options, 3-2-1 countdown during the narration pause, tick + answer stamp.
// Scene lines must be: [{ text: question, pause: 3.4 }, 'Jawapannya: …'] so the countdown fits the pause.
export function quiz(S, D, label, q, a, opts) {
  S.add(`<span class="pill" style="font-size:36px">${label}</span>`, { anim: 'pop', x: 60, y: 300, w: 480, at: 0, d: -0.3 });
  S.card(`<div class="t-h3" style="font-size:50px">${q}</div>`, { tear: true, anim: 'slideU', x: 60, y: 390, w: 960, at: 0, d: 0.1 });
  opts.forEach((o, i) => S.card(`<div class="t-body" style="font-size:42px"><b>${'ABC'[i]}.</b> ${o}</div>`, { anim: 'slideR', x: 100, y: 700 + i * 130, w: 880, at: 0, d: 1.2 + i * 0.3, pad: '10px 22px', notape: true, sfx: 'swish' }));
  ['3', '2', '1'].forEach((c, i) => S.add(`<div style="width:130px;height:130px;border-radius:50%;background:#F5C928;border:6px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:76px;color:#172C63">${c}</div>`, { anim: 'pop', x: 860, y: 260, w: 130, at: 0.999, d: 0.15 + i, out: { at: 0.999, d: 1.1 + i }, sfx: 'pop' }));
  const ai = opts.indexOf(a);
  S.add(D.check(), { anim: 'pop', x: 900, y: 710 + ai * 130, w: 80, at: 1, sfx: 'ding' });
  S.stamp(`JAWAPAN: ${a}`, { x: 40, y: 1120, w: 1000, at: 1, d: 0.1, fs: 44, style: 'text-align:center;white-space:nowrap' });
}
// Scene factory for one mini-quiz question.
export const quizScene = (id, n, q, a, opts, answerLine, o = {}) => ({
  id, bg: 'grid', transition: n === 1 ? 'wipe' : 'paper',
  lines: [{ text: (n === 1 ? 'Kuiz mini! ' : '') + `Soalan ${n === 1 ? 'satu' : 'dua'}: ${q}`, pause: 3.4 }, answerLine],
  board: { name: `Kuiz mini ${n}/2`, visual: 'Kad soalan kertas koyak; tiga pilihan A/B/C; jam undur 3-2-1; tanda semak pada jawapan betul; cop JAWAPAN.', doodle: 'Undur masa, tanda semak, cop.', text: `KUIZ MINI ${n}/2 · ${q} · ${opts.map((x, i) => 'ABC'[i] + '. ' + x).join(' · ')} · JAWAPAN: ${a}`, anim: 'Soalan naik; pilihan meluncur; undur 3-2-1; jawapan dicop.' },
  draw(S, { D }) { quiz(S, D, `KUIZ MINI ${n}/2`, q, a, opts); },
  ...o,
});
