import type { AppState } from '../types/state';
import { migrate } from '../store/reducer';

/**
 * Progress backup as plain text, so students can keep it anywhere (WhatsApp to self, Notes, Drive)
 * and restore it after reinstalling the APK or changing phones. No account or server is involved.
 */
const PREFIX = 'TITIKSEJARAH-SALINAN-1:';

export function exportBackup(state: AppState): string {
  return PREFIX + JSON.stringify(state);
}

export type RestoreResult = { ok: true; state: AppState } | { ok: false; reason: string };

export function parseBackup(text: string): RestoreResult {
  const t = text.trim();
  const at = t.indexOf(PREFIX);
  if (at < 0) return { ok: false, reason: 'Teks ini bukan salinan data Titik Sejarah. Tampal keseluruhan teks salinan.' };
  try {
    const raw = JSON.parse(t.slice(at + PREFIX.length));
    if (!raw || typeof raw !== 'object' || !('profile' in raw)) return { ok: false, reason: 'Salinan ini tidak lengkap.' };
    const state = migrate(raw);
    return { ok: true, state: { ...state, profile: { ...state.profile, onboarded: true } } };
  } catch {
    return { ok: false, reason: 'Salinan ini rosak atau terpotong. Pastikan semua teks disalin.' };
  }
}

export function backupSummary(s: AppState): string {
  return `${Object.keys(s.readSubtopics).length} subtopik dibaca, ${s.attempts.length} kuiz, ${s.paperAttempts.length} kertas, ${s.bookmarks.length} simpanan`;
}
