import type { FeaturedFact } from '../types/content';
import { dayKey } from '../utils/date';
import { hashString } from '../utils/random';

/** "Tahukah Anda?" facts for the home screen. All taken from the Titik Sejarah notes. */
export const featuredFacts: FeaturedFact[] = [
  {
    id: 'f-telaga-batu',
    title: 'Air sumpah Srivijaya',
    text: 'Rakyat Srivijaya meminum air yang dialirkan melalui Inskripsi Telaga Batu sebagai tanda setia kepada pemerintah.',
    chapterId: 't4-b1',
    subtopicId: 't4-b1-1',
    source: 'nota',
  },
  {
    id: 'f-tun-perak',
    title: 'Bendahara empat sultan',
    text: 'Bendahara Tun Perak berkhidmat di bawah empat orang sultan Melaka — bendahara yang paling lama berkhidmat.',
    chapterId: 't4-b1',
    subtopicId: 't4-b1-3',
    source: 'nota',
  },
  {
    id: 'f-kata-raja',
    title: 'Perkataan khas raja',
    text: 'Hukum Kanun Melaka menetapkan perkataan titah, murka, kurnia dan anugerah hanya boleh digunakan oleh raja.',
    chapterId: 't4-b1',
    subtopicId: 't4-b1-3',
    source: 'nota',
  },
  {
    id: 'f-siantan',
    title: 'Hadiah perkahwinan',
    text: 'Majapahit menghadiahkan Siantan kepada Sultan Mansur Shah kerana baginda mengahwini Puteri Majapahit.',
    chapterId: 't4-b1',
    subtopicId: 't4-b1-2',
    source: 'nota',
  },
  {
    id: 'f-pbb-82',
    title: 'Anggota PBB ke-82',
    text: 'Persekutuan Tanah Melayu diterima sebagai anggota PBB ke-82 pada 17 September 1957, tidak lama selepas merdeka.',
    chapterId: 't5-b1',
    subtopicId: 't5-b1-1',
    source: 'nota',
  },
  {
    id: 'f-olimpik-1972',
    title: 'Perpaduan di padang',
    text: 'Pasukan bola sepak kebangsaan berbilang kaum layak ke Sukan Olimpik 1972 — contoh kesejahteraan sosial negara berdaulat.',
    chapterId: 't5-b1',
    subtopicId: 't5-b1-3',
    source: 'nota',
  },
];

export function factOfTheDay(date: Date = new Date()): FeaturedFact {
  return featuredFacts[hashString(dayKey(date)) % featuredFacts.length];
}
