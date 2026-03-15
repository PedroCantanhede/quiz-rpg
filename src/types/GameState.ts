import type { Question } from './Question';

export type GameState = {
  questions: Question[];
  currentQuestionIndex: number;
  usedHelps: {
    removeTwo: boolean;
    hint: boolean;
    suggestion: boolean;
  };
  score: number;
};
