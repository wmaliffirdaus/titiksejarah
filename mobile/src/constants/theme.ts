/**
 * Titik Sejarah design tokens.
 *
 * BRAND RULE: the palette is limited to the four official Titik Sejarah colours
 * (navy, golden yellow, heritage red, vintage cream) plus white/black.
 * Tints below are the same brand colours at reduced opacity — no new hues.
 */
import { Platform } from 'react-native';

export const brand = {
  navy: '#172C63',
  gold: '#F5C928',
  red: '#C93436',
  cream: '#F3EBDD',
  white: '#FFFFFF',
  black: '#000000',
} as const;

/** Opacity helper for brand colours: alpha(brand.navy, 0.1) → rgba(...) */
export function alpha(hex: string, a: number): string {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export const colors = {
  background: brand.cream,
  surface: brand.white,
  surfaceMuted: alpha(brand.navy, 0.04),
  primary: brand.navy,
  accent: brand.gold,
  danger: brand.red,
  text: brand.navy,
  textMuted: alpha(brand.navy, 0.68),
  textSubtle: alpha(brand.navy, 0.5),
  textOnPrimary: brand.white,
  border: alpha(brand.navy, 0.12),
  borderStrong: alpha(brand.navy, 0.22),
  /** Ruled line, like a printed exercise book. */
  rule: alpha(brand.navy, 0.1),
  /** Highlighter stroke behind key words. */
  highlight: alpha(brand.gold, 0.5),
  track: alpha(brand.navy, 0.09),
  goldSoft: alpha(brand.gold, 0.22),
  redSoft: alpha(brand.red, 0.1),
  navySoft: alpha(brand.navy, 0.07),
  overlay: alpha(brand.black, 0.4),
  /** Slightly deeper cream for inset areas (search, pill tracks). */
  inset: alpha(brand.navy, 0.055),
  /** Hairline that defines white cards on cream. */
  cardEdge: alpha(brand.navy, 0.07),
} as const;

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  xxxl: 40,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 18,
  xl: 24,
  pill: 999,
} as const;

/** System fonts only (no extra font packages): serif for headings gives a heritage, book-like feel. */
export const fonts = {
  serif: Platform.select({ android: 'serif', ios: 'Georgia', default: 'Georgia, serif' }) as string,
  sans: Platform.select({ android: 'sans-serif', ios: 'System', default: 'system-ui, sans-serif' }) as string,
  sansMedium: Platform.select({ android: 'sans-serif-medium', ios: 'System', default: 'system-ui, sans-serif' }) as string,
};

export const type = {
  display: { fontFamily: fonts.serif, fontSize: 26, lineHeight: 32, fontWeight: '700' as const, color: colors.text },
  title: { fontFamily: fonts.serif, fontSize: 21, lineHeight: 27, fontWeight: '700' as const, color: colors.text },
  heading: { fontFamily: fonts.serif, fontSize: 18, lineHeight: 24, fontWeight: '700' as const, color: colors.text },
  subheading: { fontFamily: fonts.sansMedium, fontSize: 15, lineHeight: 20, fontWeight: '600' as const, color: colors.text },
  body: { fontFamily: fonts.sans, fontSize: 15, lineHeight: 23, color: colors.text },
  small: { fontFamily: fonts.sans, fontSize: 13, lineHeight: 18, color: colors.textMuted },
  /** Small label in sentence case (no tracking, no capitals). */
  caption: { fontFamily: fonts.sansMedium, fontSize: 12, lineHeight: 16, fontWeight: '600' as const, color: colors.textSubtle },
  /** Large serif figure for scores and counts. */
  figure: { fontFamily: fonts.serif, fontSize: 30, lineHeight: 34, fontWeight: '700' as const, color: colors.text },
} as const;

export const shadow = {
  /** Cards lift slightly off the cream page with a navy-tinted shadow. */
  card: Platform.select({
    android: { elevation: 2, shadowColor: brand.navy },
    default: {
      shadowColor: brand.navy,
      shadowOpacity: 0.07,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 4 },
    },
  }),
  soft: Platform.select({
    android: { elevation: 1 },
    default: {
      shadowColor: brand.navy,
      shadowOpacity: 0.06,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 2 },
    },
  }),
  raised: Platform.select({
    android: { elevation: 5 },
    default: {
      shadowColor: brand.navy,
      shadowOpacity: 0.16,
      shadowRadius: 16,
      shadowOffset: { width: 0, height: 6 },
    },
  }),
};

/** Reader text size preference → multiplier. */
export const fontScaleMap = { kecil: 0.9, sederhana: 1, besar: 1.15 } as const;
