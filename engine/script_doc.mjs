// Writes docs/Skrip_Narasi.md – the full Bahasa Melayu narration of every episode, scene by scene.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// usage: node engine/script_doc.mjs [--bab 2]
const bi = process.argv.indexOf('--bab');
const BAB = bi > 0 ? process.argv[bi + 1] : '1';
const EPDIR = BAB === '1' ? path.join(ROOT, 'episodes') : path.join(ROOT, 'episodes', `bab${BAB}`);
const DOCS = BAB === '1' ? path.join(ROOT, 'docs') : path.join(ROOT, 'docs', `bab${BAB}`);
const IDS = BAB === '1' ? ['01', '02', '03', '04', '05', '06'] : fs.readdirSync(EPDIR).filter((f) => /^ep\d\d\.js$/.test(f)).map((f) => f.slice(2, 4)).sort();
const CHAPTER = { '1': 'Bab 1 Warisan Negara Bangsa', '2': 'Bab 2 Kebangkitan Nasionalisme' }[BAB] || `Bab ${BAB}`;
let md = `# Skrip Narasi Penuh – Titik Sejarah · ${CHAPTER}\n\n`;
md += '> Teks yang dibaca oleh suara latar (kata kunci **tebal** = diserlahkan pada skrin). Sesuai untuk rakaman suara manusia atau enjin TTS lain.\n\n';
for (const id of IDS) {
  const ep = (await import(pathToFileURL(path.join(EPDIR, `ep${id}.js`)).href)).default;
  md += `## Episod ${id} – ${ep.title}\n\n`;
  ep.scenes.forEach((s, i) => {
    const lines = (s.lines || []).map((l) => (typeof l === 'string' ? l : l.text));
    if (!lines.length) { md += `**Adegan ${i + 1} – ${s.board?.name || s.id}:** *(tiada narasi – penutup jenama, ${s.minDur || 4.6} s)*\n\n`; return; }
    md += `**Adegan ${i + 1} – ${s.board?.name || s.id}**\n\n` + lines.map((l) => `- ${l}`).join('\n') + '\n\n';
  });
}
fs.mkdirSync(DOCS, { recursive: true });
fs.writeFileSync(path.join(DOCS, 'Skrip_Narasi.md'), md);
console.log('words:', md.split(/\s+/).length);
