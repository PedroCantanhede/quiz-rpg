import type { Question } from '../types/Question';
import { shuffleArray } from './shuffleArray';

/**
 * Selects a specified number of random questions from the pool.
 * Defaults to 15 questions.
 */
export function selectRandomQuestions(
  questions: Question[],
  count: number = 15
): Question[] {
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
