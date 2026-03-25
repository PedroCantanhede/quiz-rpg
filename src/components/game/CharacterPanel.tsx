import styles from './CharacterPanel.module.css';

interface CharacterPanelProps {
  imageSrc: string;
  name?: string;
}

export function CharacterPanel({ imageSrc, name = 'Mestre do Quiz' }: CharacterPanelProps) {
  return (
    <div className={styles.panel}>
      <img
        className={styles.characterImage}
        src={imageSrc}
        alt={name}
      />
      <span className={styles.characterName}>{name}</span>
    </div>
  );
}
