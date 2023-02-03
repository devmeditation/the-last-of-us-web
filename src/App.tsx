
import { HomeBody } from "./components/HomeBody";
import { SideLeft } from "./components/SideLeft";

import { SideRinght } from "./components/SideRight";

export function App() {
  const progress = "96";
  return (
    <main className="p-10 bg-gradient-to-br from-background-us via-silver-us to-background-us">
      <section className="lg:m-36 lg:p-28 flex flex-col lg:grid lg:grid-cols-3 lg:items-end text-silver-us bg-background-us rounded-[3rem]">
        <SideLeft />

        <HomeBody />

        <SideRinght />
      </section>
    </main>
  );
}
