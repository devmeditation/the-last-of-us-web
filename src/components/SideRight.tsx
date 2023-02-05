import { BiChevronRightCircle } from "react-icons/bi";

import { SERIES_CAST } from "../services/apiFake";

export function SideRight() {
  const seriesCast = SERIES_CAST
  return (
    <>
      <aside className="p-4 mt-[8rem] rounded-2xl flex flex-col ">
        <h1 className="text-4xl text-white-us font-semibold">Elenco</h1>

        <div className="mt-8 flex flex-col justify-between">
          {seriesCast.map((cast) => {
            return (
              <div key={cast.id} className="flex items-center gap-4 my-2">
                <div className="w-14 h-14">
                  <img
                    className="rounded-[100%]  w-full h-full object-cover"
                    src={cast.imageURL}
                    alt={cast.actor}
                  />
                </div>

                <div className="flex flex-col justify-start items-start">
                  <strong className="text-white-us">{cast.actor}</strong>

                  <p>{cast.character}</p>
                </div>
              </div>
            );
          })}

          <a
            href="#"
            className="mt-4 text-green-us flex items-center justify-start gap-2 text-xl font-semibold"
          >
            Ver mais <BiChevronRightCircle />
          </a>
        </div>
      </aside>
    </>
  );
}
