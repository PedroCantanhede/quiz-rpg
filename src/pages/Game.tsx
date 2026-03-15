import { GameHeader } from '../components/layout/GameHeader';
import { GameLayout } from '../components/layout/GameLayout';
import { QuizBoard } from '../components/game/QuizBoard';
import { CharacterPanel } from '../components/game/CharacterPanel';
import { useGame } from '../context/GameContext';
import styles from './Game.module.css';

export function Game() {
  const { gameState } = useGame();
  const { questions, currentQuestionIndex, usedHelps } = gameState;

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className={styles.container}>
        <GameHeader />
        <p style={{ textAlign: 'center', padding: '2rem', fontFamily: 'var(--font-body)' }}>
          Nenhuma pergunta carregada. Volte ao início e comece o jogo.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <GameHeader />
      <GameLayout
        leftPanel={
          <QuizBoard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            usedHelps={usedHelps}
          />
        }
        rightPanel={
          <CharacterPanel />
        }
      />
    </div>
  );
}
