import { BsBookmark, BsShare } from "react-icons/bs";

export function HomeBody() {
  return (
    <>
      <div className="mx-4 mt-36 w-4/5 flex flex-col">
        <h1 className="my-4 text-4xl font-semibold">The Last Of Us</h1>

        <div className="py-4 flex justify-between text-base font-medium">
          <span>Serie: 2023</span>
          <span>1 Temporada</span>
          <span>12 Episodios</span>
        </div>

        <div className="flex items-center gap-8 text-white-us py-4">
          <button className="rounded-2xl font-semibold text-lg bg-green-us/75 px-4 py-1.5">
            Assista agora
          </button>

          <div className="flex gap-3">
            <span className="w-10 h-10 p-2 rounded-full border-2 flex items-center justify-center">
              <BsBookmark />
            </span>

            <span className="w-10 h-10 p-2 rounded-full border-2 flex items-center justify-center">
              <BsShare />
            </span>
          </div>
        </div>

        <p className="my-4">
          Joel e Ellie, uma dupla que se conecta através da dificuldade do mundo
          em que vivem, são forçados a pppassar por circuitâncias brutais e
          enfrentar monstros impiedosos em uma jornada pelos Estados Unidos após
          um surto apocaliptico.
        </p>

        <section className="mt-4">
          <div className="text-sm my-4 grid grid-cols-us border  border-t-0 border-r-0 border-l-0 border-b-green-us">
            <strong>Gênero</strong>
            <span>Ação</span>
            <span>Ficção</span>
            <span>Drama</span>
          </div>

          <div className="text-sm my-4 grid grid-cols-us border border-t-0 border-r-0 border-l-0 border-b-green-us">
            <strong>País de Origem</strong>
            <span>Eua</span>
          </div>

          <div className="text-sm my-4 grid grid-cols-us border border-t-0 border-r-0 border-l-0 border-b-green-us">
            <strong>Tempo de duração</strong>
            <span>1hr</span>
            <span>40min</span>
          </div>
        </section>
      </div>
    </>
  );
}
