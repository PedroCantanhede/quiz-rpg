import { useState, useEffect } from 'react';
import { getRandomQuestionCharacter } from '../config/characterAssets';

/**
 * Custom hook that provides a rotating character image for the in-game quiz.
 *
 * Behavior (as defined in design-system.md Section 7):
 *   - Each time `questionIndex` changes, a new random character is selected
 *     from the question-state pool (images 2, 3, 5, 6).
 *   - The hook ensures consecutive questions always show a different character
 *     to create the illusion of animation and reactivity.
 *
 * @param questionIndex - The current question index. When this changes,
 *                        the character image updates.
 * @returns The resolved image path for the current character.
 */
export function useCharacterRotation(questionIndex: number): string {
  const [characterSrc, setCharacterSrc] = useState<string>(() =>
    getRandomQuestionCharacter()
  );

  useEffect(() => {
    setCharacterSrc((prev) => getRandomQuestionCharacter(prev));
  }, [questionIndex]);

  return characterSrc;
}
