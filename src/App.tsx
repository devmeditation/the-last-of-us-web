import { Header } from "./components/Header";
import { SideLeft } from "./components/SideLeft";
import { HomeBody } from "./components/HomeBody";
import { SideRight } from "./components/SideRight";

import styles from './styles/app.module.scss';

export function App() {
  return (
    <main className={styles.main}>
      <div className={styles.appContainer}>
        <Header />

        <section className={styles.appContainerBody}>
          <SideLeft />

          <HomeBody />

          <SideRight />
        </section>
      </div>
    </main>
  );
}
