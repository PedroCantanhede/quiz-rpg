import type { ReactNode } from 'react';
import styles from './GameLayout.module.css';

interface GameLayoutProps {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
}

export function GameLayout({ leftPanel, rightPanel }: GameLayoutProps) {
  return (
    <main className={styles.layout}>
      <div className={styles.leftPanel}>{leftPanel}</div>
      <aside className={styles.rightPanel}>{rightPanel}</aside>
    </main>
  );
}
