// React
import { useContext } from "react";

// Componentes, Contextos, Pages e Hooks
import { ChallengesContext } from "../contexts/ChallengesContext";

// Folhas de estilo
import styles from "../styles/components/CompleteChallenges.module.css";

export function CompleteChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
