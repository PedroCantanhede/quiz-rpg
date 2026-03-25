/**
 * Character Asset Configuration
 *
 * Maps character images to game states as defined in design-system.md (Section 7).
 *
 * All images are located in: src/assets/characters/
 *
 * Rules:
 *   - 1.png  → Start Screen only
 *   - 4.png  → Game Over / Death Screen only
 *   - 2.png, 3.png, 5.png, 6.png → In-game rotation during questions
 */

import char1 from '../assets/characters/1.png';
import char2 from '../assets/characters/2.png';
import char3 from '../assets/characters/3.png';
import char4 from '../assets/characters/4.png';
import char5 from '../assets/characters/5.png';
import char6 from '../assets/characters/6.png';

export const characterAssets = {
  /** Character displayed on the Start Screen (Home page) */
  start: char1,

  /** Character displayed on the Game Over / Death Screen */
  gameOver: char4,

  /** Characters that rotate randomly during active gameplay (questions) */
  questionStates: [char2, char3, char5, char6],
} as const;

/**
 * Returns a random character image from the question-state pool.
 * Optionally excludes the current image to avoid showing the same one twice in a row.
 */
export function getRandomQuestionCharacter(currentSrc?: string): string {
  const pool = characterAssets.questionStates;

  if (!currentSrc) {
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // Filter out the current image so we always get a different one
  const filtered = pool.filter((src) => src !== currentSrc);
  const candidates = filtered.length > 0 ? filtered : pool;

  return candidates[Math.floor(Math.random() * candidates.length)];
}
