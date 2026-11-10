// Writes docs/Skrip_Narasi.md – the full Bahasa Melayu narration of every episode, scene by scene.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let md = '# Skrip Narasi Penuh – Titik Sejarah · Bab 1 Warisan Negara Bangsa\n\n';
md += '> Teks yang dibaca oleh suara latar (kata kunci **tebal** = diserlahkan pada skrin). Sesuai untuk rakaman suara manusia atau enjin TTS lain.\n\n';
for (const id of ['01', '02', '03', '04', '05', '06']) {
  const ep = (await import(pathToFileURL(path.join(ROOT, 'episodes', `ep${id}.js`)).href)).default;
  md += `## Episod ${id} – ${ep.title}\n\n`;
  ep.scenes.forEach((s, i) => {
    const lines = (s.lines || []).map((l) => (typeof l === 'string' ? l : l.text));
    if (!lines.length) { md += `**Adegan ${i + 1} – ${s.board?.name || s.id}:** *(tiada narasi – penutup jenama, ${s.minDur || 4.6} s)*\n\n`; return; }
    md += `**Adegan ${i + 1} – ${s.board?.name || s.id}**\n\n` + lines.map((l) => `- ${l}`).join('\n') + '\n\n';
  });
}
fs.writeFileSync(path.join(ROOT, 'docs', 'Skrip_Narasi.md'), md);
console.log('words:', md.split(/\s+/).length);
