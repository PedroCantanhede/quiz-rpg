import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { GameState } from '../types/GameState';
import type { Question } from '../types/Question';
import { allQuestions } from '../data/questions';
import { shuffleArray } from '../helpers/shuffleArray';

interface GameContextType {
  gameState: GameState;
  startGame: () => void;
  resetGame: () => void;
  answerQuestion: (selectedIndex: number) => 'correct' | 'wrong';
  nextQuestion: () => void;
  useHelp: (helpType: 'removeTwo' | 'hint' | 'suggestion') => {
    removedIndices?: number[];
    hintText?: string;
    suggestedIndex?: number;
  };
}

const initialState: GameState = {
  questions: [],
  currentQuestionIndex: 0,
  usedHelps: {
    removeTwo: false,
    hint: false,
    suggestion: false,
  },
  score: 0,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

/**
 * Selects 15 questions with balanced difficulty distribution:
 * 5 easy, 4 medium, 4 hard, 2 veryHard
 */
function selectBalancedQuestions(): Question[] {
  const easy = shuffleArray(allQuestions.filter(q => q.difficulty === 'easy')).slice(0, 5);
  const medium = shuffleArray(allQuestions.filter(q => q.difficulty === 'medium')).slice(0, 4);
  const hard = shuffleArray(allQuestions.filter(q => q.difficulty === 'hard')).slice(0, 4);
  const veryHard = shuffleArray(allQuestions.filter(q => q.difficulty === 'veryHard')).slice(0, 2);

  // Order: easy first, then medium, hard, veryHard (progressive difficulty)
  return [...easy, ...medium, ...hard, ...veryHard];
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const startGame = useCallback(() => {
    const selected = selectBalancedQuestions();
    setGameState({
      ...initialState,
      questions: selected,
    });
  }, []);

  const resetGame = useCallback(() => {
    setGameState(initialState);
  }, []);

  const answerQuestion = useCallback((selectedIndex: number): 'correct' | 'wrong' => {
    const currentQ = gameState.questions[gameState.currentQuestionIndex];
    if (!currentQ) return 'wrong';

    const isCorrect = selectedIndex === currentQ.correctIndex;

    if (isCorrect) {
      setGameState(prev => ({
        ...prev,
        score: prev.score + 1,
      }));
    }

    return isCorrect ? 'correct' : 'wrong';
  }, [gameState.questions, gameState.currentQuestionIndex]);

  const nextQuestion = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
    }));
  }, []);

  const useHelp = useCallback((helpType: 'removeTwo' | 'hint' | 'suggestion') => {
    const currentQ = gameState.questions[gameState.currentQuestionIndex];
    if (!currentQ) return {};

    // Mark help as used
    setGameState(prev => ({
      ...prev,
      usedHelps: {
        ...prev.usedHelps,
        [helpType]: true,
      },
    }));

    switch (helpType) {
      case 'removeTwo': {
        // Remove 2 wrong answers
        const wrongIndices = currentQ.options
          .map((_, i) => i)
          .filter(i => i !== currentQ.correctIndex);
        const shuffled = shuffleArray(wrongIndices);
        const removed = shuffled.slice(0, 2);
        return { removedIndices: removed };
      }
      case 'hint': {
        return { hintText: currentQ.hint };
      }
      case 'suggestion': {
        // 80% chance of giving correct, 20% chance of giving wrong
        const isCorrectSuggestion = Math.random() < 0.8;
        if (isCorrectSuggestion) {
          return { suggestedIndex: currentQ.correctIndex };
        } else {
          const wrongIndices = currentQ.options
            .map((_, i) => i)
            .filter(i => i !== currentQ.correctIndex);
          const randomWrong = wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
          return { suggestedIndex: randomWrong };
        }
      }
      default:
        return {};
    }
  }, [gameState.questions, gameState.currentQuestionIndex]);

  return (
    <GameContext.Provider value={{
      gameState,
      startGame,
      resetGame,
      answerQuestion,
      nextQuestion,
      useHelp,
    }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame(): GameContextType {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
