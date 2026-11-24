import type { Paper } from './paper';
import k1t403 from './k1-t4-03';
import k1penuh01 from './k1-penuh-01';

/** Kertas 1 papers in display order. Add new papers here. */
export const papers: Paper[] = [k1penuh01, k1t403];

export function getPaper(id: string): Paper | undefined {
  return papers.find((p) => p.id === id);
}

export function paperTitle(p: Paper): string {
  return `${p.scope === 'T4' ? 'Tingkatan 4' : 'Format penuh'}, set ${p.set}`;
}
