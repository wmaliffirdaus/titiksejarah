/**
 * Kertas 1 practice papers transcribed from the Titik Sejarah Bank Soalan (Drive, PDF question paper + Skema Jawapan).
 *
 * Question text format (`s`), one item per line:
 *   plain line          → paragraph
 *   "> text"            → boxed source/information (consecutive lines join into one box)
 *   "| a | b"           → table row (first row is the header)
 *   "I text" … "IV text", "P text" … "S text" → labelled statement
 * Options with "a | b" (pairing questions) render as two columns.
 */
export interface PaperQuestion {
  /** Question text (see format above). */
  s: string;
  o: [string, string, string, string];
  /** Correct option index (0 = A). */
  a: 0 | 1 | 2 | 3;
  /** Explanation from the Skema Jawapan. */
  e: string;
  /** Chapter id, e.g. 't4-b3'. */
  c: string;
  /** Subtopic code, e.g. '3.4'. */
  t: string;
  /** Difficulty: 1 mudah, 2 sederhana, 3 sukar. */
  lv: 1 | 2 | 3;
  /** Textbook page(s). */
  p?: string;
}

export interface Paper {
  id: string;
  /** 'T4' covers Tingkatan 4 only; 'T4T5' is the full SPM format. */
  scope: 'T4' | 'T4T5';
  set: number;
  minutes: number;
  q: PaperQuestion[];
}

export const definePaper = (p: Paper): Paper => p;

export const PAPER_SOURCE =
  'Bank Soalan Titik Sejarah. Soalan asli untuk latihan berdasarkan Buku Teks Sejarah KSSM, bukan soalan sebenar atau ramalan SPM.';
