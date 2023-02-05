import { BiChevronRightCircle } from "react-icons/bi";

import { SERIES_CAST } from "../../services/apiFake";

import styles from "./sideRight.module.css"

export function SideRight() {
  const seriesCast = SERIES_CAST
  return (
    <>
      <aside className={styles.sideRight}>
        <h1 className={styles.sideRightTitle}>Elenco</h1>

        <div className={styles.sideRightContainer}>
          {seriesCast.map((cast) => {
            return (
              <div key={cast.id} className={styles.sideRightCasts}>
                <div>
                  <img
                    className={styles.sideRightCastsImage}
                    src={cast.imageURL}
                    alt={cast.actor}
                  />
                </div>

                <div className={styles.sideRightCastsText}>
                  <strong className={styles.sideRightCastsTitle}>{cast.actor}</strong>

                  <p>{cast.character}</p>
                </div>
              </div>
            );
          })}

          <a
            href="#"
            className={styles.sideRightCastsLink}
          >
            Ver mais <BiChevronRightCircle />
          </a>
        </div>
      </aside>
    </>
  );
}
