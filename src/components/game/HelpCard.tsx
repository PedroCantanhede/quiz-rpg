import styles from './HelpCard.module.css';

type IconType = 'eliminate' | 'hint' | 'suggestion';

interface HelpCardProps {
  iconType: IconType;
  label: string;
  used?: boolean;
  onClick?: () => void;
}

function HelpIcon({ type }: { type: IconType }) {
  switch (type) {
    case 'eliminate':
      return (
        <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 4L12 9L17 4M7 20L12 15L17 20M4 7L9 12L4 17M20 7L15 12L20 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'hint':
      return (
        <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.2208 7.20081 13.1599 9 14.1973V17H15V14.1973C16.7992 13.1599 18 11.2208 18 9C18 5.68629 15.3137 3 12 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 17H15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'suggestion':
      return (
        <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export function HelpCard({ iconType, label, used = false, onClick }: HelpCardProps) {
  return (
    <button
      className={`${styles.card} ${used ? styles.used : ''}`}
      onClick={onClick}
      disabled={used}
      type="button"
    >
      <span className={styles.icon}>
        <HelpIcon type={iconType} />
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
