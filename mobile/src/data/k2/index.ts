import type { K2Set } from './k2';
import { parseK2 } from './parse';
import { k2Texts } from './sets';
import k2penuh01 from './k2-penuh-01';
import k2t401 from './k2-t4-01';

const order = (s: K2Set) => (s.scope === 'T4T5' ? 0 : 100) + s.set;

/** All Kertas 2 sets: Format Penuh first, then Tingkatan 4, each by set number. */
export const k2Sets: K2Set[] = [k2penuh01, k2t401, ...k2Texts.map(parseK2)].sort((a, b) => order(a) - order(b));
