import styles from './GameHeader.module.css';

export function GameHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>The Quiz of Fate</h1>
      <p className={styles.subtitle}>Don't Deal With The Devil</p>
    </header>
  );
}
