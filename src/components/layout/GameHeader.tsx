import styles from './GameHeader.module.css';

interface GameHeaderProps {
  score?: number;
}

export function GameHeader({ score }: GameHeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>The Quiz of Fate</h1>
      <p className={styles.subtitle}>Don't Deal With The Devil</p>
      {score !== undefined && (
        <div className={styles.scoreDisplay}>
          <span className={styles.scoreLabel}>Pontos</span>
          <span className={styles.scoreValue}>{score}</span>
        </div>
      )}
    </header>
  );
}
