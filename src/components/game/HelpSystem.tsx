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
          iconType="eliminate"
          label="Eliminar 2"
          used={usedHelps.removeTwo}
          onClick={() => onUseHelp?.('removeTwo')}
        />
        <HelpCard
          iconType="hint"
          label="Dica"
          used={usedHelps.hint}
          onClick={() => onUseHelp?.('hint')}
        />
        <HelpCard
          iconType="suggestion"
          label="Sugestão"
          used={usedHelps.suggestion}
          onClick={() => onUseHelp?.('suggestion')}
        />
      </div>
    </div>
  );
}
