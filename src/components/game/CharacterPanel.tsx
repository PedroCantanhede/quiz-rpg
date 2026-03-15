import styles from './CharacterPanel.module.css';

interface CharacterPanelProps {
  imageSrc?: string;
  name?: string;
}

export function CharacterPanel({ imageSrc, name = 'Mestre do Quiz' }: CharacterPanelProps) {
  return (
    <div className={styles.panel}>
      {imageSrc ? (
        <img
          className={styles.characterImage}
          src={imageSrc}
          alt={name}
        />
      ) : (
        <div className={styles.placeholder}>
          Personagem
        </div>
      )}
      <span className={styles.characterName}>{name}</span>
    </div>
  );
}
