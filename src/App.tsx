
import { HomeBody } from "./components/HomeBody";
import { SideLeft } from "./components/SideLeft";

import { SideRinght } from "./components/SideRight";

export function App() {
  const progress = "96";
  return (
    <main className="p-10 bg-gradient-to-br from-background-us via-silver-us to-background-us">
      <div className="xxl:m-36 pt-28 rounded-[3rem] bg-[url(/bg_he_last_of_us.webp)] bg-cover bg-top bg-no-repeat">
      <section className=" md:p-16 xxl:p-28 rounded-[3rem] flex flex-col lg:grid lg:grid-cols-3 xl:grid-cols-mid-2x lg:items-end text-silver-us bg-gradient-to-b from-silver-us/0 via-background-us/95 to-background-us">
        <SideLeft />

        <HomeBody />

        <SideRinght />
      </section>
      </div>
    </main>
  );
}
