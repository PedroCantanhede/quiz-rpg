import styles from './AnswerOption.module.css';

interface AnswerOptionProps {
  label: string;
  text: string;
  disabled?: boolean;
  state?: 'default' | 'correct' | 'wrong' | 'disabled' | 'suggested';
  onClick?: () => void;
}

const LABELS = ['A', 'B', 'C', 'D'];

export function AnswerOption({
  label,
  text,
  disabled = false,
  state = 'default',
  onClick,
}: AnswerOptionProps) {
  const classNames = [
    styles.option,
    state === 'correct' ? styles.correct : '',
    state === 'wrong' ? styles.wrong : '',
    state === 'suggested' ? styles.suggested : '',
    state === 'disabled' || disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled || state === 'disabled'}
      onClick={onClick}
      type="button"
    >
      <span className={styles.optionLabel}>{label}</span>
      <span className={styles.optionText}>{text}</span>
    </button>
  );
}

export { LABELS };
