import type { SpmCategory, SpmItem } from '../types/content';
import { k2Sets } from './k2';
import { k2Items } from './k2/k2';

/**
 * SPM practice.
 * Kertas 1: full timed papers (src/data/papers) plus the chapter question bank.
 * Kertas 2: struktur, esei and KBAT items from the Bank Soalan Titik Sejarah (src/data/k2).
 */
export const spmCategories: {
  id: SpmCategory;
  title: string;
  short: string;
  description: string;
  icon: 'list' | 'create' | 'document-text' | 'bulb';
}[] = [
  { id: 'k1', title: 'Kertas 1', short: 'Objektif', description: 'Kertas penuh 40 soalan dengan masa, atau latihan pantas.', icon: 'list' },
  { id: 'k2-struktur', title: 'Kertas 2', short: 'Struktur', description: 'Bahagian A. Soalan berpandukan sumber, 10 markah setiap satu.', icon: 'create' },
  { id: 'k2-esei', title: 'Kertas 2', short: 'Esei', description: 'Bahagian B. Soalan huraian, 20 markah setiap satu.', icon: 'document-text' },
  { id: 'kbat', title: 'KBAT', short: 'Aras tinggi', description: 'Soalan pendapat yang dinilai dengan rubrik aras.', icon: 'bulb' },
];

export const spmItems: SpmItem[] = k2Sets.flatMap(k2Items);

export function getSpmItem(id: string): SpmItem | undefined {
  return spmItems.find((i) => i.id === id);
}

export function spmItemsFor(category: SpmCategory): SpmItem[] {
  return spmItems.filter((i) => i.category === category);
}
