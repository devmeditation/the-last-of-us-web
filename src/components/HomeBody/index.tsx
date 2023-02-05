import { BsBookmark, BsShare } from "react-icons/bs";

import styles from "./homeBody.module.css"

export function HomeBody() {
  return (
    <>
      <div className={styles.homeBody}>
        <h1 className={styles.homeBodyTitle}>The Last Of Us</h1>

        <div className={styles.homeBodySubtitle}>
          <span>Serie: 2023</span>
          <span>1 Temporada</span>
          <span>12 Episodios</span>
        </div>

        <div className={styles.homeBodyButtonsContainer}>
          <button className={styles.homeBodyButton}>
            Assista agora
          </button>

          <div className={styles.homeBodyIconsContainer}>
            <span className={styles.homeBodyIcon}>
              <BsBookmark />
            </span>

            <span className={styles.homeBodyIcon}>
              <BsShare />
            </span>
          </div>
        </div>

        <p className={styles.homeBodyDescription}>
          Joel e Ellie, uma dupla que se conecta através da dificuldade do mundo
          em que vivem, são forçados a pppassar por circuitâncias brutais e
          enfrentar monstros impiedosos em uma jornada pelos Estados Unidos após
          um surto apocaliptico.
        </p>

        <section>
          <div className={styles.homeBodyTableText}>
            <strong>Gênero</strong>
            <span>Ação</span>
            <span>Ficção</span>
            <span>Drama</span>
          </div>

          <div className={styles.homeBodyTableText}>
            <strong>País de Origem</strong>
            <span>Eua</span>
          </div>

          <div className={styles.homeBodyTableText}>
            <strong>Tempo de duração</strong>
            <span>1hr</span>
            <span>40min</span>
          </div>
        </section>
      </div>
    </>
  );
}
