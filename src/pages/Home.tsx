import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { characterAssets } from '../config/characterAssets';
import styles from './Home.module.css';

export function Home() {
  const navigate = useNavigate();
  const { startGame } = useGame();

  const handlePlay = () => {
    startGame();
    navigate('/game');
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <h1 className={styles.title}>The Quiz of Fate</h1>
        <p className={styles.subtitle}>Don't Deal With The Devil</p>
      </div>

      <div className={styles.divider} />

      <img
        className={styles.character}
        src={characterAssets.start}
        alt="Mestre do Quiz"
      />

      <p className={styles.description}>
        Responda 15 perguntas e tente sobreviver até o final.
        Use suas cartas de ajuda com sabedoria... ou perca tudo.
      </p>

      <button className={styles.playButton} onClick={handlePlay} type="button">
        Jogar
      </button>

      <span className={styles.ornament}>✦ ✦ ✦</span>
    </div>
  );
}

