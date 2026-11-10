// Shared scene helpers for Titik Sejarah episodes (run in the browser renderer).
export const NAVY = '#172C63', GOLD = '#F5C928', RED = '#C93436';
export const fmt = (s) => String(s).replace(/\*\*(.+?)\*\*/g, '<span class="hl">$1</span>').replace(/~~(.+?)~~/g, '<span class="red">$1</span>');
export const SEA_BOUNDS = [[96.5, -9], [116, 17.5]];

// Small locator map with one highlighted pin (top-right corner).
export function locator(S, lon, lat, label, o = {}) {
  const at = S.map({ bounds: o.bounds || SEA_BOUNDS, w: 300 }, { x: o.x ?? 690, y: o.y ?? 285, w: o.w ?? 300, at: o.at ?? 0, d: 0.1, dur: 1.1, sfx: false });
  S.pin(at, lon, lat, label, { at: o.at ?? 0, d: 0.9, size: 0.85, fs: 34, left: o.left, color: o.color || RED });
  return at;
}

// Kingdom profile header: name, era pill, place.
export function kingdomHeader(S, name, era, place, o = {}) {
  S.text(name, { size: 'h2', x: 70, y: 300, w: 600, at: 0, d: -0.2, dur: 0.8 });
  S.add(`<span class="pill" style="font-size:32px">${era}</span>`, { anim: 'pop', x: 70, y: 395, w: 600, at: 0, d: 0.3 });
  S.text(`<svg viewBox="0 0 48 64" style="width:30px;height:40px;display:inline-block;vertical-align:-6px;margin-right:8px"><path d="M24 62 C 10 40 4 32 4 22 A20 20 0 1 1 44 22 C44 32 38 40 24 62Z" fill="#C93436" stroke="#172C63" stroke-width="4"/><circle cx="24" cy="22" r="8" fill="#fff"/></svg>${place}`, { size: 'label', x: 70, y: 470, w: 600, at: 0, d: 0.5, style: 'font-size:40px' });
}

// Fact card in a 2-column grid (slot 0..3), revealed at narration cue `at`.
export function fact(S, slot, html, at, o = {}) {
  const pos = [[60, 860], [545, 860], [60, 1105], [545, 1105]][slot];
  return S.card(`<div class="t-body" style="font-size:38px;line-height:1.18">${fmt(html)}</div>`, {
    anim: slot % 2 ? 'slideR' : 'slideL', x: pos[0], y: pos[1], w: o.w || 470, at, d: o.d || 0, rot: o.rot ?? (slot % 2 ? 1.2 : -1.2), pad: '16px 22px', color: o.color || '', sfx: 'swish',
  });
}
