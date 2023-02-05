import { CircleProgressBarTW } from "../../CircleProgressBarTW/CircleProgressBarTW";
import { SERIES_STATUS_PUBLIC } from "../../services/apiFake";
import styles from "./sideLeft.module.css"

export function SideLeft() {
  const statusPublicPublic = SERIES_STATUS_PUBLIC;

  return (
    <>
      <aside className={styles.sideLeft}>
        <div>
          <img
            className={styles.sideLeftImage}
            src={statusPublicPublic.imageURL}
            alt={statusPublicPublic.imageDescription}
          />
        </div>

        <div className={styles.sideLeftStatusContainer}>
          {statusPublicPublic.statusSerie.map((status) => {
            return (
              <div
                key={status.title}
                className={styles.sideLeftStatus}
              >
                <h3>{status.title}</h3>
                <CircleProgressBarTW progress={status.percent} />
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}
