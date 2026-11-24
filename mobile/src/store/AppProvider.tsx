import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import type React from 'react';
import { AppState as RNAppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { AppState } from '../types/state';
import { type Action, createInitialState, migrate, reducer } from './reducer';

export const STORAGE_KEY = 'titiksejarah:state:v1';

interface Ctx {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  hydrated: boolean;
}

const AppContext = createContext<Ctx | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, () => createInitialState());
  const [hydrated, setHydrated] = useState(false);
  const latest = useRef(state);
  latest.current = state;
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load once.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (!cancelled && raw) dispatch({ type: 'hydrate', state: migrate(JSON.parse(raw)) });
      } catch (e) {
        console.warn('[TitikSejarah] Gagal memuatkan data simpanan; bermula dengan data baharu.', e);
      } finally {
        if (!cancelled) setHydrated(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const flush = useCallback(async () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(latest.current));
    } catch (e) {
      console.warn('[TitikSejarah] Gagal menyimpan data.', e);
    }
  }, []);

  // Debounced save after every change (only once hydrated, so defaults never overwrite saved data).
  useEffect(() => {
    if (!hydrated) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(flush, 400);
  }, [state, hydrated, flush]);

  // Save immediately when the app goes to the background.
  useEffect(() => {
    const sub = RNAppState.addEventListener('change', (s) => {
      if (s !== 'active' && hydrated) void flush();
    });
    return () => sub.remove();
  }, [hydrated, flush]);

  const value = useMemo(() => ({ state, dispatch, hydrated }), [state, hydrated]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): Ctx {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>');
  return ctx;
}
