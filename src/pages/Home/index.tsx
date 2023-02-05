import { Header } from "../../components/Header";
import { SideLeft } from "../../components/SideLeft";
import { HomeBody } from "../../components/HomeBody";
import { SideRight } from "../../components/SideRight";

import styles from './home.module.css';

export function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.homeContainer}>
        <Header />

        <section className={styles.homeContainerBody}>
          <SideLeft />

          <HomeBody />

          <SideRight />
        </section>
      </div>
    </main>
  )
}