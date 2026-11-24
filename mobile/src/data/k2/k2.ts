import type { SpmItem, SpmPart } from '../../types/content';

/**
 * Kertas 2 sets transcribed from the Titik Sejarah Bank Soalan (question paper + Skema Jawapan Cadangan).
 * Stimulus text uses the same line format as Kertas 1 questions (see papers/paper.ts).
 */
export interface K2Part extends SpmPart {}

export interface K2Question {
  /** Question number in the paper (1–9). */
  n: number;
  /** A = struktur (all compulsory), B = esei (answer any three). */
  section: 'A' | 'B';
  chapterId: string;
  title: string;
  stimulus?: string;
  parts: K2Part[];
}

export interface K2Set {
  id: string;
  scope: 'T4' | 'T4T5';
  set: number;
  questions: K2Question[];
}

export const defineK2 = (s: K2Set): K2Set => s;

/** KBAT essay rubric from the Skema Jawapan Cadangan (maximum 8 marks). */
export const KBAT_RUBRIC: { level: string; marks: string; text: string }[] = [
  {
    level: 'Aras 4',
    marks: '7 hingga 8',
    text: 'Sekurang-kurangnya empat isi tepat dan relevan. Setiap isi dihuraikan dengan contoh atau bukti sejarah, dikaitkan dengan konteks semasa dan diakhiri dengan rumusan yang jelas.',
  },
  {
    level: 'Aras 3',
    marks: '5 hingga 6',
    text: 'Tiga hingga empat isi tepat dengan huraian sederhana. Contoh atau kaitan dengan konteks semasa terhad. Rumusan kurang jelas.',
  },
  { level: 'Aras 2', marks: '3 hingga 4', text: 'Dua hingga tiga isi tepat dengan huraian terhad atau tanpa contoh.' },
  { level: 'Aras 1', marks: '1 hingga 2', text: 'Satu atau dua isi umum tanpa huraian, atau jawapan menyalin soalan atau stimulus.' },
];

export function setLabel(s: Pick<K2Set, 'scope' | 'set'>): string {
  return `${s.scope === 'T4' ? 'Tingkatan 4' : 'Format penuh'}, set ${s.set}`;
}

/** Converts a set into SPM items: section A → struktur, section B → esei, every KBAT part → its own KBAT item. */
export function k2Items(s: K2Set): SpmItem[] {
  const out: SpmItem[] = [];
  const label = `Bank Soalan Titik Sejarah · Kertas 2 ${setLabel(s)}`;
  for (const q of s.questions) {
    const form = q.chapterId.startsWith('t5') ? 5 : 4;
    const base = {
      form: form as 4 | 5,
      chapterId: q.chapterId,
      stimulus: q.stimulus,
      paper: `${setLabel(s)}, soalan ${q.n}`,
      source: { status: 'bank' as const, label },
    };
    out.push({
      ...base,
      id: `${s.id}-s${q.n}`,
      category: q.section === 'A' ? 'k2-struktur' : 'k2-esei',
      title: q.title,
      parts: q.parts,
    });
    q.parts.forEach((p, i) => {
      if (!p.kbat) return;
      out.push({
        ...base,
        id: `${s.id}-s${q.n}-kbat${i}`,
        category: 'kbat',
        title: q.title,
        parts: [p],
      });
    });
  }
  return out;
}
