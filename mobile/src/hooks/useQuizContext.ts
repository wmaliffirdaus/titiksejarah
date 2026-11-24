import { useMemo } from 'react';
import { useApp } from '../store/AppProvider';
import { savedQuestionIds, wrongIds } from '../store/selectors';
import type { QuizContext } from '../utils/quiz';
import { dayKey } from '../utils/date';

export function useQuizContext(): QuizContext {
  const { state } = useApp();
  return useMemo(
    () => ({
      form: state.profile.form,
      perQuiz: state.prefs.perQuiz,
      shuffleOptions: state.prefs.shuffleOptions,
      wrongIds: wrongIds(state),
      savedIds: savedQuestionIds(state),
      today: dayKey(),
    }),
    // Built once per screen mount on purpose: a running quiz must not reshuffle when state changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
}
