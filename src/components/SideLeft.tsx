import { CircleProgressBarTW } from "../CircleProgressBarTW/CircleProgressBarTW";
import { SERIES_STATUS_PUBLIC } from "../services/apiFake";

export function SideLeft() {
  const statusPublicPublic = SERIES_STATUS_PUBLIC;

  return (
    <>
      <aside className="p-2">
        <div className="_m-8 p-2">
          <img
            className="w-full h-full rounded-2xl"
            src={statusPublicPublic.imageURL}
            alt={statusPublicPublic.imageDescription}
          />
        </div>

        <div className="mx-4 px-8 flex justify-around items-center">
          {statusPublicPublic.statusSerie.map((status) => {
            return (
              <div
                key={status.title}
                className="flex flex-col justify-center items-center gap-2"
              >
                <h3 className="text-sm">{status.title}</h3>
                <CircleProgressBarTW progress={status.percent} />
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}
