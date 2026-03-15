import { HelpCard } from './HelpCard';
import styles from './HelpSystem.module.css';

interface HelpSystemProps {
  usedHelps: {
    removeTwo: boolean;
    hint: boolean;
    suggestion: boolean;
  };
  onUseHelp?: (helpType: 'removeTwo' | 'hint' | 'suggestion') => void;
}

export function HelpSystem({ usedHelps, onUseHelp }: HelpSystemProps) {
  return (
    <div>
      <p className={styles.title}>Cartas de Ajuda</p>
      <div className={styles.container}>
        <HelpCard
          icon="✂️"
          label="Eliminar 2"
          used={usedHelps.removeTwo}
          onClick={() => onUseHelp?.('removeTwo')}
        />
        <HelpCard
          icon="💡"
          label="Dica"
          used={usedHelps.hint}
          onClick={() => onUseHelp?.('hint')}
        />
        <HelpCard
          icon="🎯"
          label="Sugestão"
          used={usedHelps.suggestion}
          onClick={() => onUseHelp?.('suggestion')}
        />
      </div>
    </div>
  );
}
