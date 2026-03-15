import type { Question } from '../../types/Question';
import { QuestionCard } from './QuestionCard';
import { AnswerOption, LABELS } from './AnswerOption';
import { HelpSystem } from './HelpSystem';
import styles from './QuizBoard.module.css';

interface QuizBoardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  usedHelps: {
    removeTwo: boolean;
    hint: boolean;
    suggestion: boolean;
  };
  onAnswer?: (index: number) => void;
  onUseHelp?: (helpType: 'removeTwo' | 'hint' | 'suggestion') => void;
}

export function QuizBoard({
  question,
  questionNumber,
  totalQuestions,
  usedHelps,
  onAnswer,
  onUseHelp,
}: QuizBoardProps) {
  return (
    <div className={styles.board}>
      <QuestionCard
        question={question.question}
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
      />

      <div className={styles.answers}>
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            label={LABELS[index]}
            text={option}
            onClick={() => onAnswer?.(index)}
          />
        ))}
      </div>

      <HelpSystem usedHelps={usedHelps} onUseHelp={onUseHelp} />
    </div>
  );
}
