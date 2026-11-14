// Titik Sejarah – deterministic doodle animation runtime.
// The page is driven frame by frame: TS.seek(t) puts every element in its exact state for time t.
import { D, C, setSeed } from './doodles.js';

const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const easeOut = (p) => 1 - Math.pow(1 - p, 3);
const easeInOut = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
const backOut = (p) => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2); };

const DEFAULT_DUR = { fade: 0.45, pop: 0.5, slideL: 0.55, slideR: 0.55, slideU: 0.55, slideD: 0.55, draw: 1.3, wipe: 0.9, wipeD: 0.8, stamp: 0.35, zoom: 0.6, none: 0.01 };
const DEFAULT_SFX = { draw: 'pencil', pop: 'pop', stamp: 'stamp', wipe: 'scribble', slideL: 'swish', slideR: 'swish', slideU: 'swish', slideD: 'swish' };
const TR = 0.55; // default scene transition length (s)
const TRD = { punch: 0.22, cut: 0, dissolve: 0.7, dip: 0.8 };

export function fmt(s) {
  return String(s)
    .replace(/\*\*(.+?)\*\*/g, '<span class="hl">$1</span>')
    .replace(/~~(.+?)~~/g, '<span class="red">$1</span>')
    .replace(/\n/g, '<br>');
}

const state = { scenes: [], subs: [], caps: [], duration: 0, events: [], header: null, stage: null, chrome: null, land: null };

function makeSceneAPI(sc, tl) {
  const recs = sc.recs;
  const cue = (o) => {
    let at = o.at ?? 0;
    let base;
    if (at === 'start') base = tl.start + 0.35;
    else if (at === 'end') base = tl.end - 0.05;
    else {
      const k = Math.min(Math.floor(at), tl.lineStarts.length - 1);
      const frac = at - Math.floor(at); // 2.5 = halfway through line 2
      base = tl.lineStarts[k] + frac * (tl.lineEnds[k] - tl.lineStarts[k]);
    }
    return base + (o.d || 0);
  };
  const cueOf = (v) => (v == null ? null : typeof v === 'object' ? cue(v) : cue({ at: v }));
  const S = {
    tl,
    cue: cueOf,
    bg(name) { sc.div.className = 'scene bg-' + name; },
    add(html, o = {}) {
      const el = document.createElement('div');
      el.className = 'el' + (o.cls ? ' ' + o.cls : '');
      el.innerHTML = html;
      const w = o.w ?? null;
      if (w != null) el.style.width = w + 'px';
      if (o.h != null) el.style.height = o.h + 'px';
      let x = o.x ?? 0;
      if (o.cx != null && w != null) x = o.cx - w / 2;
      el.style.left = x + 'px';
      el.style.top = (o.y ?? 0) + 'px';
      if (o.z) el.style.zIndex = o.z;
      if (o.align) el.style.textAlign = o.align;
      if (o.style) el.setAttribute('style', el.getAttribute('style') + ';' + o.style);
      sc.div.appendChild(el);
      const anim = o.anim || 'fade';
      const r = {
        el, anim, t0: cue(o), dur: o.dur ?? DEFAULT_DUR[anim] ?? 0.5,
        rot: o.rot || 0, tOut: cueOf(o.out), pulses: (o.pulse || []).map(cueOf),
        sfx: o.sfx === undefined ? DEFAULT_SFX[anim] : o.sfx, origin: o.origin,
        label: o.label || null, paths: null, fills: null,
        kb: o.kb || null, inner: o.kb ? el.querySelector('img') : null, tl: o.tl || null, kbFade: o.kbFade,
      };
      if (o.tl) { r.tl.mk = el.querySelector('.mk'); r.tl.mkl = el.querySelector('.mkl'); }
      if (o.origin) el.style.transformOrigin = o.origin;
      if (anim === 'draw') {
        r.paths = []; r.fills = [];
        el.querySelectorAll('path,line,polyline,circle,ellipse,rect,polygon').forEach((p) => {
          const stroke = p.getAttribute('stroke');
          const fill = p.getAttribute('fill');
          if (stroke && stroke !== 'none' && p.getAttribute('data-nodraw') == null) {
            let len = 0;
            try { len = p.getTotalLength(); } catch (e) { len = 0; }
            if (len > 0) { r.paths.push({ p, len }); p.style.strokeDasharray = len + ' ' + len; }
          }
          if (fill && fill !== 'none' && (!stroke || stroke === 'none')) r.fills.push(p);
        });
        el.querySelectorAll('text,image,.fadein').forEach((p) => r.fills.push(p));
      }
      recs.push(r);
      return el;
    },
    text(str, o = {}) {
      return S.add(`<div class="t-${o.size || 'body'}">${fmt(str)}</div>`, { anim: 'wipe', ...o });
    },
    svg(markup, o = {}) { return S.add(markup, { anim: 'draw', ...o }); },
    card(html, o = {}) {
      const cls = ['card', o.color || '', o.tear ? 'tear' : '', o.notape ? 'notape' : ''].join(' ');
      const wrap = o.tear ? 'filter:drop-shadow(6px 7px 0 rgba(23,44,99,.85));' : '';
      return S.add(`<div class="${cls}" style="${o.pad ? 'padding:' + o.pad : ''}">${html}</div>`, { anim: 'pop', ...o, style: wrap + (o.style || '') });
    },
    img(src, o = {}) {
      return S.add(`<div class="sticker"><img src="${src}"></div>`, { anim: 'pop', ...o });
    },
    mascot(o = {}) {
      const w = o.w || 300;
      const el = S.add(`<div class="sticker" style="border-radius:0"><img src="../assets/brand/titik-sejarah-dp-square.jpg"></div>`, { anim: 'pop', sfx: 'pop', ...o, w });
      if (o.say) {
        const bw = o.bw || 520;
        const bx = o.bx ?? ((o.x ?? 0) + w + 20);
        const by = o.by ?? ((o.y ?? 0) + 30);
        S.add(`<div class="bubble">${fmt(o.say)}</div>`, { anim: 'pop', x: bx, y: by, w: bw, at: o.at, d: (o.d || 0) + 0.35, out: o.out, sfx: false });
      }
      return el;
    },
    map(opts, o = {}) {
      const m = D.map({ ...opts, land: state.land });
      const x0 = o.x ?? 60, y0 = o.y ?? 300, w = o.w ?? 960;
      S.svg(m.svg, { anim: 'draw', dur: 1.6, sfx: 'pencil', ...o, x: x0, y: y0, w });
      const k = w / m.w;
      const at = (lon, lat) => { const [px, py] = m.proj([lon, lat]); return [x0 + px * k, y0 + py * k]; };
      return at;
    },
    pin(at, lon, lat, label, o = {}) {
      const [px, py] = at(lon, lat);
      const color = o.color || C.red;
      const s = o.size || 1;
      const lab = label ? `<div class="t-label" style="position:absolute;left:${o.left ? 'auto' : 46 * s + 'px'};right:${o.left ? 46 * s + 'px' : 'auto'};top:${-6 * s}px;white-space:nowrap;font-size:${o.fs || 44}px;text-shadow:0 0 6px #fff,0 0 6px #fff,0 0 10px #fff,0 0 10px #fff">${fmt(label)}</div>` : '';
      return S.add(`<div style="position:relative;width:${48 * s}px;height:${64 * s}px">${D.pinSVG(color, s)}${lab}</div>`, { anim: 'pop', x: px - 24 * s, y: py - 62 * s, w: 48 * s, ...o, origin: '50% 100%' });
    },
    arrow(x1, y1, x2, y2, o = {}) {
      const minx = Math.min(x1, x2) - 40, miny = Math.min(y1, y2) - 40;
      const w = Math.abs(x2 - x1) + 80, h = Math.abs(y2 - y1) + 80;
      const svg = D.arrow(x1 - minx, y1 - miny, x2 - minx, y2 - miny, { w, h, ...o });
      return S.svg(svg, { x: minx, y: miny, w, dur: 0.6, sfx: o.sfx === undefined ? false : o.sfx, ...o });
    },
    endCard(o = {}) { buildEndCard(S, o); },
    // ---- documentary helpers ----
    photo(src, o = {}) {
      const w = o.w ?? 1080, h = o.h ?? 1920;
      const cr = o.credit && o.frame ? `<div class="cr">${o.credit}</div>` : '';
      if (o.credit && !o.frame) sc.src = o.credit;   // full-bleed photos credit in the (visible) source line
      const dur = o.dur ?? Math.max(1, sc.end - cue(o) + 0.6);
      return S.add(`<div class="photo ${o.frame ? 'frame' : ''}" style="width:${w}px;height:${h}px"><img src="${src}" onerror="this.onerror=null;this.src='placeholder.svg'" style="${o.pos ? 'object-position:' + o.pos : ''}">${cr}</div>`,
        { anim: 'kb', sfx: false, kb: o.kb || { from: [1.08, 0, 0], to: [1.18, -2, -1] }, ...o, w, dur });
    },
    title(html, o = {}) { return S.add(`<div class="dtitle" style="font-size:${o.fs || 96}px;text-align:${o.align || 'center'}">${html}</div>`, { anim: 'dfade', dur: 0.7, sfx: false, ...o }); },
    label(txt, o = {}) { return S.add(`<div class="dlabel" style="text-align:${o.align || 'center'};${o.fs ? 'font-size:' + o.fs + 'px' : ''}">${txt}</div>`, { anim: 'dfade', dur: 0.6, sfx: false, ...o }); },
    quote(txt, o = {}) { return S.add(`<div class="dquote" style="font-size:${o.fs || 64}px;text-align:${o.align || 'center'}">${txt}</div>`, { anim: 'dfade', dur: 0.8, sfx: false, ...o }); },
    lower(label, title, o = {}) { return S.add(`<div class="lower"><div class="dlabel" style="text-align:left;font-size:26px">${label}</div><div class="dtitle" style="font-size:${o.fs || 58}px">${title}</div></div>`, { anim: 'slideL', dur: 0.6, sfx: false, ...o }); },
    timeline(o = {}) {
      const pct = (y) => 4 + 92 * (y - o.from) / (o.to - o.from);
      const ticks = (o.ticks || []).map((y) => `<div class="tick" style="left:${pct(y)}%"></div><div class="yr" style="left:${pct(y)}%">${y}</div>`).join('');
      const a = pct(o.prevYear ?? o.year), b = pct(o.year);
      return S.add(`<div class="tlbar"><div class="line"></div>${ticks}<div class="mk" style="left:${a}%"></div><div class="mkl" style="left:${a}%">${o.mark || o.year}</div></div>`,
        { anim: 'tl', sfx: false, tl: { a, b }, x: 40, y: o.y ?? 1180, w: 1000, ...o });
    },
    illus(o = {}) { return S.add('<span class="twtag">ILUSTRASI</span>', { anim: 'fade', sfx: false, ...o }); },
    tag(name, sub, o = {}) { return S.add(`<div class="ntag"><div class="n">${name}</div>${sub ? `<div class="s">${sub}</div>` : ''}</div>`, { anim: 'pop', sfx: false, ...o }); },
    stamp(txt, o = {}) { return S.add(`<span class="rstamp" style="${o.fs ? 'font-size:' + o.fs + 'px' : ''}">${txt}</span>`, { anim: 'stamp', sfx: 'stamp', rot: -5, ...o }); },
  };
  return S;
}

function buildEndCard(S, o) {
  if (o.doc) return buildDocEnd(S, o);
  if (o.compact) return buildCompactEnd(S, o);
  S.bg('lined');
  // sunburst
  S.add(D.burst(), { anim: 'fade', at: 'start', d: -0.3, x: -460, y: -60, w: 2000, dur: 0.8, sfx: false, cls: 'burst' });
  // exact official profile picture, unaltered, centred
  S.add(`<div style="background:#fff;border:6px solid #172C63;box-shadow:12px 14px 0 #172C63;width:640px"><img src="../assets/brand/titik-sejarah-dp-square.jpg" style="display:block;width:640px;height:auto"></div>`,
    { anim: 'zoom', at: 'start', d: -0.2, dur: 0.9, x: 214, y: 280, w: 652, sfx: false });
  S.add(`<div class="t-title" style="font-size:112px;text-align:center;letter-spacing:2px">TITIK <span class="red">SEJARAH</span></div>`,
    { anim: 'pop', at: 'start', d: 0.35, x: 40, y: 1000, w: 1000, sfx: 'pop' });
  S.add(`<div style="font-family:Caveat;font-weight:700;font-size:62px;text-align:center;color:#172C63">“Kenali sejarah, fahami masa kini.”</div>`,
    { anim: 'wipe', at: 'start', d: 0.75, x: 40, y: 1135, w: 1000, sfx: false });
  S.add(`<div style="text-align:center"><span style="display:inline-block;background:#C93436;color:#FFFDF7;border:4px solid #172C63;border-radius:999px;padding:12px 30px;font-family:Marker;font-size:33px;white-space:nowrap;box-shadow:6px 7px 0 #172C63">＋ Follow untuk lebih banyak ilmu sejarah.</span></div>`,
    { anim: 'pop', at: 'start', d: 1.15, x: 40, y: 1245, w: 1000, sfx: false });
}

// Short-form ending: the question/teaser is spoken while the official brand card is on screen.
function buildDocEnd(S, o) {
  S.add(`<div style="width:1080px;height:1920px;background:radial-gradient(ellipse at 50% 40%,#1b2a55 0%,#0d0e12 70%)"></div>`, { anim: 'none', at: 'start', d: -0.35, x: 0, y: 0, w: 1080 });
  S.add(`<div style="border-top:2px solid rgba(245,201,40,.7);border-bottom:2px solid rgba(245,201,40,.7);padding:26px 10px"><div class="dlabel" style="font-size:26px">${o.label || 'SOALAN'}</div><div class="dtitle" style="font-size:60px;margin-top:10px;text-align:center">${o.question || ''}</div></div>`,
    { anim: 'dfade', at: 0, d: -0.2, dur: 0.7, x: 70, y: 300, w: 940, sfx: false });
  S.add(`<div style="background:#fff;border:4px solid #F5C928;box-shadow:0 20px 60px rgba(0,0,0,.6);width:380px"><img src="../assets/brand/titik-sejarah-dp-square.jpg" style="display:block;width:380px;height:auto"></div>`,
    { anim: 'zoom', at: 0, d: 0.4, dur: 0.9, x: 346, y: 720, w: 388, sfx: false });
  S.add(`<div class="dtitle" style="font-size:88px;text-align:center;letter-spacing:4px">TITIK <span class="g">SEJARAH</span></div>`, { anim: 'dfade', at: 0, d: 0.8, x: 40, y: 1130, w: 1000 });
  S.add(`<div class="dquote" style="font-size:52px;text-align:center">“Kenali sejarah, fahami masa kini.”</div><div class="dlabel" style="font-size:24px;text-align:center;margin-top:14px;color:#F3EBDD">Follow untuk lebih banyak ilmu sejarah.</div>`, { anim: 'dfade', at: 0, d: 1.1, x: 40, y: 1240, w: 1000 });
}

function buildCompactEnd(S, o) {
  S.bg('lined');
  S.add(D.burst(), { anim: 'none', at: 'start', d: -0.35, x: -460, y: -260, w: 2000, sfx: false, cls: 'burst' });
  S.add(`<div class="card gold notape" style="padding:22px 28px"><div class="tw red" style="font-size:28px">${o.label || 'SOALAN'}</div><div class="t-h3" style="font-size:52px;line-height:1.12">${o.question || ''}</div></div>`,
    { anim: 'pop', at: 0, d: -0.2, x: 60, y: 300, w: 960, rot: -1.5, sfx: 'ding' });
  S.add(`<div style="background:#fff;border:6px solid #172C63;box-shadow:10px 12px 0 #172C63;width:400px"><img src="../assets/brand/titik-sejarah-dp-square.jpg" style="display:block;width:400px;height:auto"></div>`,
    { anim: 'zoom', at: 0, d: 0.3, dur: 0.7, x: 334, y: o.dpY ?? 640, w: 412, sfx: false });
  S.add(`<div class="t-title" style="font-size:96px;text-align:center;letter-spacing:2px">TITIK <span class="red">SEJARAH</span></div>`,
    { anim: 'pop', at: 0, d: 0.6, x: 40, y: (o.dpY ?? 640) + 430, w: 1000, sfx: false });
  S.add(`<div style="text-align:center;font-family:Caveat;font-weight:700;font-size:50px;color:#172C63">“Kenali sejarah, fahami masa kini.” · <span style="color:#C93436">Follow untuk lebih banyak ilmu sejarah.</span></div>`,
    { anim: 'wipe', at: 0, d: 0.9, x: 40, y: (o.dpY ?? 640) + 545, w: 1000, sfx: false });
}

async function loadLand() {
  const topo = await (await fetch('../node_modules/world-atlas/land-50m.json')).json();
  state.land = window.topojson.feature(topo, topo.objects.land);
}

function buildChrome() {
  const c = document.createElement('div');
  c.id = 'chrome';
  c.innerHTML = `<div id="hdr"><div class="chip"></div><div class="sub"></div></div>
  <div id="brand"><div class="dot"></div><div>TITIK<br><span style="color:#C93436">SEJARAH</span></div></div>
  <div id="prog"><i></i></div>
  <div id="subs"></div><div id="src"></div>`;
  state.stage.appendChild(c);
  state.chrome = c;
  c.querySelector('#hdr .chip').textContent = state.header.chip;
  c.querySelector('#hdr .sub').textContent = state.header.sub;
  c.querySelector('#brand div:last-child').style.lineHeight = '0.95';
}

function applyRec(r, t) {
  const el = r.el;
  if (t < r.t0) {
    if (el.style.visibility !== 'hidden') el.style.visibility = 'hidden';
    return 'h';
  }
  el.style.visibility = 'visible';
  const p = clamp((t - r.t0) / r.dur);
  const e = easeOut(p);
  let op = 1, tx = 0, ty = 0, sc = 1, rot = r.rot, clip = null;
  switch (r.anim) {
    case 'fade': op = e; break;
    case 'pop': sc = 0.35 + 0.65 * backOut(p); op = clamp(p * 3); break;
    case 'slideL': tx = -140 * (1 - e); op = clamp(p * 2); break;
    case 'slideR': tx = 140 * (1 - e); op = clamp(p * 2); break;
    case 'slideU': ty = 120 * (1 - e); op = clamp(p * 2); break;
    case 'slideD': ty = -120 * (1 - e); op = clamp(p * 2); break;
    case 'stamp': sc = 1.9 - 0.9 * e; op = clamp(p * 4); rot += -12 * (1 - e); break;
    case 'zoom': sc = 0.82 + 0.18 * e; op = clamp(p * 1.6); break;
    case 'dfade': op = easeInOut(p); ty = 18 * (1 - e); break;
    case 'kb': {           // Ken Burns on an archival photo: slow pan/zoom across the element's lifetime
      op = r.kbFade === 0 ? 1 : clamp((t - r.t0) / (r.kbFade || 0.5));
      const k = r.kb, q = p;
      const z = k.from[0] + (k.to[0] - k.from[0]) * q, x = k.from[1] + (k.to[1] - k.from[1]) * q, y = k.from[2] + (k.to[2] - k.from[2]) * q;
      if (r.inner) r.inner.style.transform = `scale(${z.toFixed(4)}) translate(${x.toFixed(2)}%,${y.toFixed(2)}%)`;
      break;
    }
    case 'tl': {           // timeline marker glides from the previous year to this scene's year
      op = clamp((t - r.t0) / 0.4);
      const q = easeInOut(clamp((t - r.t0) / 1.1));
      const pos = r.tl.a + (r.tl.b - r.tl.a) * q;
      r.tl.mk.style.left = pos.toFixed(2) + '%'; r.tl.mkl.style.left = pos.toFixed(2) + '%';
      break;
    }
    case 'wipe': clip = `inset(-20px ${((1 - easeInOut(p)) * 100).toFixed(2)}% -20px -20px)`; break;
    case 'wipeD': clip = `inset(-20px -20px ${((1 - easeInOut(p)) * 100).toFixed(2)}% -20px)`; break;
    case 'draw': {
      const pd = easeInOut(clamp(p / 0.78));
      for (const { p: path, len } of r.paths) path.style.strokeDashoffset = (len * (1 - pd)).toFixed(1);
      const pf = clamp((p - 0.45) / 0.55);
      for (const f of r.fills) f.style.opacity = pf.toFixed(3);
      break;
    }
    default: break;
  }
  let pulsing = false;
  for (const pt of r.pulses) {
    if (t >= pt && t <= pt + 0.7) { const q = (t - pt) / 0.7; sc *= 1 + 0.12 * Math.sin(Math.PI * q); pulsing = true; }
  }
  let exiting = false;
  if (r.tOut != null && t >= r.tOut) {
    const q = clamp((t - r.tOut) / 0.35);
    op *= 1 - q; sc *= 1 - 0.08 * q; exiting = q < 1;
    if (q >= 1) { el.style.visibility = 'hidden'; return 'x'; }
  }
  el.style.opacity = op.toFixed(3);
  el.style.transform = `translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px) rotate(${rot.toFixed(2)}deg) scale(${sc.toFixed(4)})`;
  el.style.clipPath = clip || '';
  if (r.anim === 'kb' && p < 1) return 'k' + p.toFixed(4);
  if (p >= 1 && !pulsing && !exiting) return 'D';
  return p.toFixed(3) + (pulsing ? 'p' + sc.toFixed(3) : '') + (exiting ? 'e' + op.toFixed(3) : '');
}

function applyTransition(cur, prev, p, kind) {
  const e = easeInOut(p);
  const reset = (d) => { d.style.transform = ''; d.style.opacity = ''; d.style.clipPath = ''; d.style.zIndex = ''; d.style.boxShadow = ''; };
  reset(cur.div); if (prev) reset(prev.div);
  if (!prev || p >= 1) return;
  switch (kind) {
    case 'flip':
      prev.div.style.zIndex = 2; cur.div.style.zIndex = 1;
      prev.div.style.transform = `translateX(${(-e * 1180).toFixed(1)}px) rotate(${(-e * 9).toFixed(2)}deg)`;
      prev.div.style.boxShadow = '20px 0 40px rgba(0,0,0,.25)';
      break;
    case 'slideUp':
      cur.div.style.zIndex = 2; prev.div.style.zIndex = 1;
      cur.div.style.transform = `translateY(${((1 - e) * 1920).toFixed(1)}px)`;
      prev.div.style.transform = `translateY(${(-e * 300).toFixed(1)}px)`;
      break;
    case 'zoom':
      cur.div.style.zIndex = 2; prev.div.style.zIndex = 1;
      cur.div.style.transform = `scale(${(1.18 - 0.18 * e).toFixed(4)})`;
      cur.div.style.opacity = e.toFixed(3);
      break;
    case 'dissolve':
      cur.div.style.zIndex = 2; prev.div.style.zIndex = 1;
      cur.div.style.opacity = e.toFixed(3);
      break;
    case 'dip':
      cur.div.style.zIndex = 2; prev.div.style.zIndex = 1;
      cur.div.style.opacity = clamp((e - 0.5) * 2).toFixed(3);
      prev.div.style.opacity = clamp(1 - e * 2).toFixed(3);
      break;
    case 'punch':
      cur.div.style.zIndex = 2; prev.div.style.zIndex = 1;
      cur.div.style.transform = `scale(${(1.22 - 0.22 * e).toFixed(4)})`;
      break;
    case 'wipe':
      cur.div.style.zIndex = 2; prev.div.style.zIndex = 1;
      cur.div.style.clipPath = `inset(0 ${((1 - e) * 100).toFixed(2)}% 0 0)`;
      break;
    case 'paper':
    default:
      cur.div.style.zIndex = 2; prev.div.style.zIndex = 1;
      cur.div.style.transform = `translateX(${((1 - e) * 1150).toFixed(1)}px) rotate(${((1 - e) * 7).toFixed(2)}deg)`;
      cur.div.style.boxShadow = '-18px 0 40px rgba(0,0,0,.22)';
      break;
  }
}

let wipeBand = null;

export const TS = {
  fmt, D, C,
  async load(tl) {
    state.stage = document.getElementById('stage');
    state.duration = tl.duration;
    state.subs = tl.subs;
    state.caps = tl.caps || [];
    state.header = tl.header;
    await document.fonts.ready;
    await loadLand();
    const mod = await import(tl.episodeUrl + '?v=' + Date.now());
    const ep = mod.default;
    if (ep.theme === 'doc') { state.stage.classList.add('doc'); const g = document.createElement('div'); g.id = 'grain'; state.stage.appendChild(g); }
    state.theme = ep.theme || 'notebook';
    setSeed(1);
    tl.scenes.forEach((stl, i) => {
      const def = ep.scenes[i];
      const div = document.createElement('div');
      div.className = 'scene bg-' + (def.bg || 'lined');
      div.style.display = 'none';
      state.stage.appendChild(div);
      const sc = { div, recs: [], src: stl.src, start: stl.start, end: stl.end, tr: def.transition || ep.transition || (i === 0 ? 'none' : 'paper'), chrome: def.chrome !== false, id: def.id, cam: def.cam || ep.cam || null, trSfx: def.trSfx };
      state.scenes.push(sc);
      const S = makeSceneAPI(sc, stl);
      def.draw(S, TS);
    });
    buildChrome();
    wipeBand = document.createElement('div');
    wipeBand.style.cssText = 'position:absolute;top:-100px;width:150px;height:2120px;background:#F5C928;border-left:6px solid #172C63;border-right:6px solid #172C63;z-index:5;visibility:hidden;transform:skewX(-8deg)';
    state.stage.appendChild(wipeBand);
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    const imgs = [...document.images];
    await Promise.all(imgs.map((im) => (im.complete ? 0 : new Promise((r) => { im.onload = im.onerror = r; }))));
    return true;
  },
  events() {
    const ev = [];
    state.scenes.forEach((sc, i) => {
      if (i > 0 && sc.tr !== 'none' && sc.tr !== 'cut' && sc.trSfx !== null) ev.push({ t: sc.start, sfx: sc.trSfx !== undefined ? sc.trSfx : sc.tr === 'flip' ? 'page' : sc.tr === 'wipe' ? 'whoosh' : sc.tr === 'zoom' ? 'whoosh' : sc.tr === 'punch' ? 'swish' : sc.tr === 'dissolve' ? 'airy' : sc.tr === 'dip' ? 'boom' : 'paper' });
      for (const r of sc.recs) if (r.sfx) ev.push({ t: r.t0, sfx: r.sfx, scene: sc.id });
      for (const r of sc.recs) for (const pt of r.pulses) ev.push({ t: pt, sfx: 'ding', scene: sc.id });
    });
    return ev.sort((a, b) => a.t - b.t);
  },
  seek(t) {
    let i = 0;
    for (let k = 0; k < state.scenes.length; k++) if (state.scenes[k].start <= t + 1e-6) i = k;
    const cur = state.scenes[i];
    const prev = i > 0 ? state.scenes[i - 1] : null;
    const trLen = TRD[cur.tr] ?? TR;
    const pTr = prev && cur.tr !== 'none' && trLen > 0 ? clamp((t - cur.start) / trLen) : 1;
    const showPrev = prev && pTr < 1;
    const sig = [i, pTr.toFixed(3)];
    state.scenes.forEach((sc, k) => {
      const vis = k === i || (showPrev && k === i - 1);
      const v = vis ? 'block' : 'none';
      if (sc.div.style.display !== v) sc.div.style.display = v;
    });
    applyTransition(cur, showPrev ? prev : null, pTr, cur.tr);
    if (!showPrev && cur.cam) {   // slow punch-in so no frame is ever static
      const q = clamp((t - cur.start) / Math.max(0.1, cur.end - cur.start));
      const z = cur.cam[0] + (cur.cam[1] - cur.cam[0]) * q;
      cur.div.style.transform = `scale(${z.toFixed(4)})`;
      sig.push('c' + z.toFixed(4));
    }
    if (showPrev) for (const r of prev.recs) sig.push(applyRec(r, Math.min(t, prev.end - 0.001)));
    for (const r of cur.recs) sig.push(applyRec(r, t));
    // yellow band for the wipe transition
    if (showPrev && cur.tr === 'wipe') {
      wipeBand.style.visibility = 'visible';
      wipeBand.style.left = (easeInOut(pTr) * 1080 - 75).toFixed(1) + 'px';
    } else wipeBand.style.visibility = 'hidden';
    // chrome
    const hdrOn = cur.chrome;
    const hdr = state.chrome.querySelector('#hdr'), brand = state.chrome.querySelector('#brand'), prog = state.chrome.querySelector('#prog');
    for (const n of [hdr, brand, prog]) n.style.visibility = hdrOn ? 'visible' : 'hidden';
    const q = Math.floor(t * 2) / 2;
    prog.firstElementChild.style.width = ((q / state.duration) * 100).toFixed(2) + '%';
    sig.push(hdrOn ? 'H' + q : 'h');
    let si = -1;
    for (let k = 0; k < state.caps.length; k++) if (state.caps[k].start <= t && t < state.caps[k].end) { si = k; break; }
    const subsEl = state.chrome.querySelector('#subs');
    if (subsEl.dataset.si !== String(si)) {
      subsEl.dataset.si = String(si);
      subsEl.innerHTML = si >= 0 ? `<div class="cap">${state.caps[si].html}</div>` : '';
    }
    if (si >= 0) {
      const q = clamp((t - state.caps[si].start) / 0.12);
      const sc = 0.82 + 0.18 * backOut(q);
      subsEl.firstElementChild.style.transform = `scale(${sc.toFixed(3)})`;
      sig.push('s' + si + (q < 1 ? ':' + q.toFixed(2) : ''));
    } else sig.push('s-');
    const srcEl = state.chrome.querySelector('#src');
    const srcTxt = hdrOn ? (cur.src || '') : '';
    if (srcEl.textContent !== srcTxt) srcEl.textContent = srcTxt;
    srcEl.style.visibility = srcTxt ? 'visible' : 'hidden';
    return sig.join('|');
  },
};
