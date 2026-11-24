/** Local-date helpers (YYYY-MM-DD keys) and streak maths. */

export function dayKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function addDays(d: Date, n: number): Date {
  const out = new Date(d);
  out.setDate(out.getDate() + n);
  return out;
}

/**
 * Consecutive active days ending today. If today has no activity yet, the streak
 * still counts up to yesterday (it is only "broken" after a full missed day).
 */
export function computeStreak(activeDays: readonly string[], today: Date = new Date()): number {
  const set = new Set(activeDays);
  let cursor = set.has(dayKey(today)) ? today : addDays(today, -1);
  let streak = 0;
  while (set.has(dayKey(cursor))) {
    streak++;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

export function longestStreak(activeDays: readonly string[]): number {
  const sorted = [...new Set(activeDays)].sort();
  let best = 0;
  let run = 0;
  let prev: string | null = null;
  for (const k of sorted) {
    if (prev && dayKey(addDays(new Date(`${prev}T12:00:00`), 1)) === k) run++;
    else run = 1;
    best = Math.max(best, run);
    prev = k;
  }
  return best;
}

/** Last n days (oldest first) as keys + short Malay weekday labels. */
export function lastNDays(n: number, today: Date = new Date()): { key: string; label: string }[] {
  const names = ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'];
  const out: { key: string; label: string }[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = addDays(today, -i);
    out.push({ key: dayKey(d), label: names[d.getDay()] });
  }
  return out;
}

export function greeting(d: Date = new Date()): string {
  const h = d.getHours();
  if (h < 12) return 'Selamat pagi';
  if (h < 15) return 'Selamat tengah hari';
  if (h < 19) return 'Selamat petang';
  return 'Selamat malam';
}

export function formatDate(ts: number): string {
  const months = ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'];
  const d = new Date(ts);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export function relativeTime(ts: number, now: number = Date.now()): string {
  const mins = Math.round((now - ts) / 60000);
  if (mins < 1) return 'baru sahaja';
  if (mins < 60) return `${mins} minit lalu`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs} jam lalu`;
  const days = Math.round(hrs / 24);
  if (days < 7) return `${days} hari lalu`;
  return formatDate(ts);
}
