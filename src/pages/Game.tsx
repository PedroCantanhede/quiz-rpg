import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameHeader } from '../components/layout/GameHeader';
import { GameLayout } from '../components/layout/GameLayout';
import { QuizBoard } from '../components/game/QuizBoard';
import { CharacterPanel } from '../components/game/CharacterPanel';
import { useGame } from '../context/GameContext';
import { useCharacterRotation } from '../hooks/useCharacterRotation';
import styles from './Game.module.css';

export function Game() {
  const navigate = useNavigate();
  const { gameState, answerQuestion, nextQuestion, useHelp } = useGame();
  const { questions, currentQuestionIndex, usedHelps, score } = gameState;

  // Rotate character image each time the question changes (design-system.md §7)
  const characterSrc = useCharacterRotation(currentQuestionIndex);

  // Local UI state
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerResult, setAnswerResult] = useState<'correct' | 'wrong' | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [removedOptions, setRemovedOptions] = useState<number[]>([]);
  const [hintText, setHintText] = useState<string | null>(null);
  const [suggestedIndex, setSuggestedIndex] = useState<number | null>(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = useCallback((index: number) => {
    if (isLocked) return;

    setIsLocked(true);
    setSelectedAnswer(index);

    const result = answerQuestion(index);
    setAnswerResult(result);

    if (result === 'correct') {
      // Wait 1.2s then go to next question
      setTimeout(() => {
        if (currentQuestionIndex + 1 >= questions.length) {
          // Player completed all questions — go to victory/game over
          navigate('/gameover');
        } else {
          nextQuestion();
          // Reset local state for next question
          setSelectedAnswer(null);
          setAnswerResult(null);
          setIsLocked(false);
          setRemovedOptions([]);
          setHintText(null);
          setSuggestedIndex(null);
        }
      }, 1200);
    } else {
      // Wrong answer — show death screen after 1.5s
      setTimeout(() => {
        navigate('/gameover');
      }, 1500);
    }
  }, [isLocked, answerQuestion, currentQuestionIndex, questions.length, nextQuestion, navigate]);

  const handleUseHelp = useCallback((helpType: 'removeTwo' | 'hint' | 'suggestion') => {
    if (isLocked) return;

    const result = useHelp(helpType);

    if (helpType === 'removeTwo' && result.removedIndices) {
      setRemovedOptions(result.removedIndices);
    }
    if (helpType === 'hint' && result.hintText) {
      setHintText(result.hintText);
    }
    if (helpType === 'suggestion' && result.suggestedIndex !== undefined) {
      setSuggestedIndex(result.suggestedIndex);
    }
  }, [isLocked, useHelp]);

  if (!currentQuestion) {
    return (
      <div className={styles.container}>
        <GameHeader />
        <p style={{ textAlign: 'center', padding: '2rem', fontFamily: 'var(--font-body)' }}>
          Nenhuma pergunta carregada. Volte ao início e comece o jogo.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <GameHeader score={score} />
      <GameLayout
        leftPanel={
          <QuizBoard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            usedHelps={usedHelps}
            onAnswer={handleAnswer}
            onUseHelp={handleUseHelp}
            selectedAnswer={selectedAnswer}
            answerResult={answerResult}
            removedOptions={removedOptions}
            hintText={hintText}
            suggestedIndex={suggestedIndex}
          />
        }
        rightPanel={
          <CharacterPanel imageSrc={characterSrc} />
        }
      />
    </div>
  );
}
