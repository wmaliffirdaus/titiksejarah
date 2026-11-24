import { useCallback } from 'react';
import { useApp } from '../store/AppProvider';
import { isBookmarked } from '../store/selectors';
import type { BookmarkType } from '../types/state';

export function useBookmark(type: BookmarkType, refId: string) {
  const { state, dispatch } = useApp();
  const saved = isBookmarked(state, type, refId);
  const toggle = useCallback(() => dispatch({ type: 'toggleBookmark', bookmarkType: type, refId }), [dispatch, type, refId]);
  return { saved, toggle };
}
