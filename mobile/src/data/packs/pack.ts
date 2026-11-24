/**
 * Chapter pack: one file holds everything for a chapter, written compactly so content is
 * quick to add and easy to proofread.
 *
 *   subtopics  notes per subtopic, written in a small Markdown dialect (see src/data/md.ts)
 *   questions  objective questions: [subtopicCode, prompt, [A, B, C, D], answerIndex, explanation, kbat?]
 *   terms      key terms   [istilah, maksud]          → flashcards + glossary
 *   people     figures     [tokoh, peranan]            → flashcards
 *   dates      key dates   [tarikh, peristiwa]         → flashcards + chapter timeline
 *   focus      "Fokus Ulang Kaji SPM" checklist items
 *   rumusan    chapter summary bullet points
 *
 * All packs here are transcribed from the Titik Sejarah revision notes (which summarise the KSSM
 * textbook). Do not add facts that are not in the notes.
 */
export interface PackSubtopic {
  code: string; // "2.1"
  title: string;
  summary: string;
  keywords?: string; // comma-separated, for search
  md: string;
}

export type PackQuestion =
  | [code: string, prompt: string, options: [string, string, string, string], answer: 0 | 1 | 2 | 3, explanation: string]
  | [code: string, prompt: string, options: [string, string, string, string], answer: 0 | 1 | 2 | 3, explanation: string, kbat: 1];

export interface ChapterPack {
  id: string; // "t4-b2"
  source: string;
  intro?: string;
  subtopics?: PackSubtopic[];
  questions?: PackQuestion[];
  terms?: [string, string][];
  people?: [string, string][];
  dates?: [string, string][];
  focus?: string[];
  rumusan?: string[];
}

export const definePack = (p: ChapterPack): ChapterPack => p;
