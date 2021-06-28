// React
import { useContext } from "react";

// Componentes, Contextos, Pages e Hooks
import { ChallengesContext } from "../contexts/ChallengesContext";

// Folhas de estilo
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/oimarianinha.png" alt="Mariana Vaz" />
      <div>
        <strong>Mariana Vaz</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
