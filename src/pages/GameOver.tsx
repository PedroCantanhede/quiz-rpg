import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import styles from './GameOver.module.css';

export function GameOver() {
  const navigate = useNavigate();
  const { gameState, resetGame } = useGame();

  const handleRetry = () => {
    resetGame();
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <span className={styles.skull}>💀</span>

      <h1 className={styles.title}>Game Over</h1>

      <p className={styles.message}>
        O destino não foi gentil com você desta vez...
        Mas todo jogador merece uma segunda chance.
      </p>

      <p className={styles.score}>
        Pontuação: {gameState.score}
      </p>

      <button className={styles.retryButton} onClick={handleRetry} type="button">
        Tentar Novamente
      </button>
    </div>
  );
}
