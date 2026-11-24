import { fontScaleMap } from '../constants/theme';
import { useApp } from '../store/AppProvider';

/** Multiplier for reader text based on the student's text-size preference. */
export function useFontScale(): number {
  const { state } = useApp();
  return fontScaleMap[state.prefs.fontScale];
}
