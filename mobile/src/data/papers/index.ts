import type { Paper } from './paper';
import k1t401 from './k1-t4-01';
import k1t403 from './k1-t4-03';
import k1penuh01 from './k1-penuh-01';
import k1penuh02 from './k1-penuh-02';
import { parsePaper } from './parse';
import { k1Texts } from './sets';

/** Kertas 1 papers in display order. Add new papers here. */
const order = (p: Paper) => (p.scope === 'T4T5' ? 0 : 100) + p.set;
export const papers: Paper[] = [k1penuh01, k1penuh02, k1t401, k1t403, ...k1Texts.map(parsePaper)].sort((a, b) => order(a) - order(b));

export function getPaper(id: string): Paper | undefined {
  return papers.find((p) => p.id === id);
}

export function paperTitle(p: Paper): string {
  return `${p.scope === 'T4' ? 'Tingkatan 4' : 'Format penuh'}, set ${p.set}`;
}
