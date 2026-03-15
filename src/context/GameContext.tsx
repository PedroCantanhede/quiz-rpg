import { createContext, useContext, useState, type ReactNode } from 'react';
import type { GameState } from '../types/GameState';
import type { Question } from '../types/Question';
import { selectRandomQuestions } from '../helpers/selectRandomQuestions';
import questionsData from '../data/questions.json';

interface GameContextType {
  gameState: GameState;
  startGame: () => void;
  resetGame: () => void;
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

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const startGame = () => {
    const selected = selectRandomQuestions(questionsData as Question[], 15);
    setGameState({
      ...initialState,
      questions: selected,
    });
  };

  const resetGame = () => {
    setGameState(initialState);
  };

  return (
    <GameContext.Provider value={{ gameState, startGame, resetGame }}>
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
