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
  selectedAnswer: number | null;
  answerResult: 'correct' | 'wrong' | null;
  removedOptions: number[];
  hintText: string | null;
  suggestedIndex: number | null;
}

export function QuizBoard({
  question,
  questionNumber,
  totalQuestions,
  usedHelps,
  onAnswer,
  onUseHelp,
  selectedAnswer,
  answerResult,
  removedOptions,
  hintText,
  suggestedIndex,
}: QuizBoardProps) {
  return (
    <div className={styles.board}>
      <QuestionCard
        question={question.question}
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
      />

      <div className={styles.answers}>
        {question.options.map((option, index) => {
          const isRemoved = removedOptions.includes(index);
          const isSelected = selectedAnswer === index;
          const isSuggested = suggestedIndex === index;

          let state: 'default' | 'correct' | 'wrong' | 'disabled' | 'suggested' = 'default';
          if (isRemoved) state = 'disabled';
          if (isSuggested && answerResult === null) state = 'suggested';
          if (isSelected && answerResult === 'correct') state = 'correct';
          if (isSelected && answerResult === 'wrong') state = 'wrong';
          // Also highlight correct answer when player got it wrong
          if (answerResult === 'wrong' && index === question.correctIndex) state = 'correct';

          return (
            <AnswerOption
              key={index}
              label={LABELS[index]}
              text={option}
              disabled={isRemoved || answerResult !== null}
              state={state}
              onClick={() => onAnswer?.(index)}
            />
          );
        })}
      </div>

      {hintText && (
        <div className={styles.hintBanner}>
          <span className={styles.hintIcon}>💡</span>
          <span className={styles.hintTextContent}>{hintText}</span>
        </div>
      )}

      <HelpSystem usedHelps={usedHelps} onUseHelp={onUseHelp} />
    </div>
  );
}
