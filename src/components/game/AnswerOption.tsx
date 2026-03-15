import styles from './AnswerOption.module.css';

interface AnswerOptionProps {
  label: string;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const LABELS = ['A', 'B', 'C', 'D'];

export function AnswerOption({ label, text, disabled = false, onClick }: AnswerOptionProps) {
  return (
    <button
      className={`${styles.option} ${disabled ? styles.disabled : ''}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <span className={styles.optionLabel}>{label}</span>
      <span className={styles.optionText}>{text}</span>
    </button>
  );
}

export { LABELS };
