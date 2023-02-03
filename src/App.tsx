import { BsBookmark, BsShare } from "react-icons/bs";

import { CircleProgressBarTW } from "./CircleProgressBarTW/CircleProgressBarTW";

export function App() {
  const progress = "96";
  return (
    <main className="p-10 bg-gradient-to-br from-background-us via-silver-us to-background-us">
      <section className="flex text-silver-us bg-background-us rounded-xl">
        <aside className="p-2">
          <div className="">
            <img
              className="w-full h-full rounded-2xl"
              src="/the-last-of-us.jpg"
              alt=""
            />
          </div>

          <div className="m-8 p-2 flex justify-between items-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <h3 className="text-sm">Apresentação</h3>
              <CircleProgressBarTW progress="97" />
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <h3>Crítica</h3>
              <CircleProgressBarTW progress="95" />
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <h3>Audiência</h3>
              <CircleProgressBarTW progress="96" />
            </div>
          </div>
        </aside>

        <div className="m-2">
          <h1 className="text-4xl font-semibold">The Last Of Us</h1>

          <div className="flex justify-between gap-2 pt-4 pb-2 text-sm">
            <span>Serie: 2023</span>
            <span>1 Temporada</span>
            <span>12 Episodios</span>
          </div>

          <div className="flex gap-6 text-white-us pt-2 pb-4">
            <button className="rounded-xl  bg-green-us/80 px-4 py-1">
              Assine agora
            </button>

            <div className="flex gap-2">
              <span className="w-8 h-8 p-2 rounded-full border-2 flex items-center justify-center">
                <BsBookmark />
              </span>

              <span className="w-8 h-8 p-2 rounded-full border-2 flex items-center justify-center">
                <BsShare />
              </span>
            </div>
          </div>

          <p className="my-4">
            Joel e Ellie, uma dupla que se conecta através da dificuldade do
            mundo em que vivem, são forçados a pppassar por circuitâncias
            brutais e enfrentar monstros impiedosos em uma jornada pelos Estados
            Unidos após um surto apocaliptico.
          </p>

          <section className="">
            <div className="text-sm my-4 grid grid-cols-4 border  border-t-0 border-r-0 border-l-0 border-b-green-us">
              <strong>Gênero</strong>
              <span>Ação</span>
              <span>Ficção</span>
              <span>Drama</span>
            </div>

            <div className="text-sm my-4 grid grid-cols-4 border border-t-0 border-r-0 border-l-0 border-b-green-us">
              <strong>País de Origem</strong>
              <span>Eua</span>
            </div>

            <div className="text-sm my-4 grid grid-cols-4 border border-t-0 border-r-0 border-l-0 border-b-green-us">
              <strong>Tempo de duração</strong>
              <span>1hr</span>
              <span>40min</span>
            </div>
          </section>
        </div>
      </section>

    </main>
  );
}
