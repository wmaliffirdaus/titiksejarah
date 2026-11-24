/**
 * Content model for Titik Sejarah.
 *
 * Every piece of learning content carries a `source` so the app can always tell
 * students where it came from:
 *  - 'nota'   → taken from the Titik Sejarah SPM revision notes, which summarise the
 *               KSSM Sejarah textbook (KPM/DBP). Students are still told to check the textbook.
 *  - 'bank'   → Bank Soalan Titik Sejarah: original practice papers with the Skema Jawapan Cadangan.
 *               Not past-year or predicted SPM questions.
 *  - 'contoh' → sample content written to demonstrate a format. Labelled as such in the UI.
 */

export type Form = 4 | 5;

export type SourceStatus = 'nota' | 'bank' | 'contoh';

export interface SourceRef {
  status: SourceStatus;
  /** Human-readable reference, e.g. "Nota Titik Sejarah T4 Bab 1 (rujukan: Buku Teks Sejarah Tingkatan 4 KSSM)". */
  label: string;
}

export interface SubtopicMeta {
  id: string; // e.g. "t4-b1-1"
  code: string; // e.g. "1.1"
  title: string;
}

export interface Chapter {
  id: string; // e.g. "t4-b1"
  form: Form;
  number: number;
  title: string;
  /** Short chapter intro; only present when notes exist. */
  intro?: string;
  /** Subtopic list; empty when not yet added. */
  subtopics: SubtopicMeta[];
  /** Where the chapter title / subtopic list came from. */
  outlineSource: string;
}

export type CalloutVariant = 'definisi' | 'info' | 'ingat' | 'iktibar' | 'tip';

export type NoteBlock =
  | { type: 'heading'; text: string }
  | { type: 'para'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; columns: string[]; rows: string[][] }
  | { type: 'callout'; variant: CalloutVariant; title?: string; text: string }
  | { type: 'timeline'; items: { when: string; what: string }[] };

export interface SubtopicNote {
  subtopicId: string;
  source: SourceRef;
  /** One-line summary shown in lists and search results. */
  summary: string;
  blocks: NoteBlock[];
  /** Key terms for search. */
  keywords?: string[];
}

export interface Question {
  id: string;
  form: Form;
  chapterId: string;
  subtopicId?: string;
  prompt: string;
  options: [string, string, string, string];
  /** Index (0–3) of the correct option. */
  answer: 0 | 1 | 2 | 3;
  explanation: string;
  source: SourceStatus;
  kbat?: boolean;
}

export type SpmCategory = 'k1' | 'k2-struktur' | 'k2-esei' | 'kbat';

export interface SpmPart {
  label: string; // "(a)"
  question: string;
  marks: number;
  /** Suggested answer points (skema cadangan). */
  points: string[];
  /** KBAT (higher-order) part. */
  kbat?: boolean;
  /** Marked with the KBAT rubric (Aras 1 to 4) instead of one mark per point. */
  rubric?: boolean;
  /** Subtopic and textbook pages, e.g. "2.2 · hlm. 25". */
  ref?: string;
}

export interface SpmItem {
  id: string;
  category: Exclude<SpmCategory, 'k1'>;
  form: Form;
  chapterId: string;
  title: string;
  /** Optional stimulus / source text. */
  stimulus?: string;
  parts: SpmPart[];
  /** Where the item sits in its paper, e.g. "Tingkatan 4, set 1, soalan 2". */
  paper?: string;
  source: SourceRef;
}

export interface FeaturedFact {
  id: string;
  title: string;
  text: string;
  chapterId: string;
  subtopicId?: string;
  source: SourceStatus;
}
