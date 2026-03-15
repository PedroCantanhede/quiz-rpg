import styles from './QuestionCard.module.css';

interface QuestionCardProps {
  question: string;
  questionNumber: number;
  totalQuestions: number;
}

export function QuestionCard({ question, questionNumber, totalQuestions }: QuestionCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.questionNumber}>
        Pergunta {questionNumber} de {totalQuestions}
      </span>
      <p className={styles.questionText}>{question}</p>
    </div>
  );
}
