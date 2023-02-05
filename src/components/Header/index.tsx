import { BsFolderPlus, BsSearch } from "react-icons/bs";

import styles from "./header.module.scss"

export function Header() {
  return (
    <header className={styles.menuContainer}>
      <div className={styles.menuGroup}>
        <div className={styles.menuText}>
          <span>Series</span>
          <span>Filmes</span>
          <span>Minha Lista</span>
        </div>

        <div className={styles.menuIconsContainer}>
          <BsFolderPlus className={styles.menuIcon} />
          <BsSearch className={styles.menuIcon} />
          <img className={styles.menuImage} src="/series-cast/pedroPascal.jpg" alt="" />
        </div>
      </div>
    </header>
  );
}
