import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { characterAssets } from '../config/characterAssets';
import styles from './GameOver.module.css';

export function GameOver() {
  const navigate = useNavigate();
  const { gameState, resetGame, startGame } = useGame();

  const handleRetry = () => {
    resetGame();
    startGame();
    navigate('/game');
  };

  const handleHome = () => {
    resetGame();
    navigate('/');
  };

  const totalQuestions = gameState.questions.length || 15;
  const isVictory = gameState.score >= totalQuestions;

  return (
    <div className={styles.container}>
      <img
        className={styles.characterImage}
        src={characterAssets.gameOver}
        alt="Game Over Character"
      />

      <span className={styles.skull}>💀</span>

      <h1 className={styles.title}>
        {isVictory ? 'Vitória!' : 'Game Over'}
      </h1>

      <p className={styles.message}>
        {isVictory
          ? 'Parabéns! Você sobreviveu ao Quiz of Fate!'
          : 'O destino não foi gentil com você desta vez... Mas todo jogador merece uma segunda chance.'}
      </p>

      <p className={styles.score}>
        Pontuação: {gameState.score} / {totalQuestions}
      </p>

      <div className={styles.actions}>
        <button className={styles.retryButton} onClick={handleRetry} type="button">
          Jogar Novamente
        </button>
        <button className={styles.homeButton} onClick={handleHome} type="button">
          Menu Inicial
        </button>
      </div>
    </div>
  );
}
