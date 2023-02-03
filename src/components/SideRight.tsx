import { BiChevronRightCircle } from "react-icons/bi";

import { SERIES_CAST } from "../services/apiFake";

export function SideRinght() {
  const seriesCast = SERIES_CAST
  return (
    <>
      <aside className="m-4 p-2 w-full bg-silver-us/25 rounded-2xl flex flex-col justify-center items-start lg:w-1/5">
        <h1 className="text-4xl text-white-us font-semibold">Elenco</h1>

        <div className="mt-16 flex flex-col justify-between">
          {seriesCast.map((cast) => {
            return (
              <div key={cast.id} className="flex items-center gap-6 my-4">
                <div className="mt-2  w-20 h-20">
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
