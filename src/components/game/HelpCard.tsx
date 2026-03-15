import styles from './HelpCard.module.css';

interface HelpCardProps {
  icon: string;
  label: string;
  used?: boolean;
  onClick?: () => void;
}

export function HelpCard({ icon, label, used = false, onClick }: HelpCardProps) {
  return (
    <button
      className={`${styles.card} ${used ? styles.used : ''}`}
      onClick={onClick}
      disabled={used}
      type="button"
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
