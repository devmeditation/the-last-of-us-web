import { BsFolderPlus, BsSearch } from "react-icons/bs";

export function Header() {
  return (
    <header className="relative mb-12 flex justify-center items-center">
      <div className="mx-6 px-3 text-white-us/75 font-bold flex justify-between items-center bg-background-us/50 rounded-[3rem] xl:mx-36 xl:px-10 xl:w-3/5">
        <div className="xl:w-3/5 py-2 flex gap-3 text-sm  justify-between">
          <span className="hover:text-white-us">Series</span>
          <span className="hover:text-white-us">Filmes</span>
          <span className="hover:text-white-us">Minha Lista</span>
        </div>

        <div className="gap-2 xl:w-2/5 flex justify-center lg:justify-end items-center xl:gap-6">
          <BsFolderPlus className="hover:text-white-us w-0 lg:w-10" />
          <BsSearch className="hover:text-white-us w-0 lg:w-10" />
          <img className="w-8 h-8 rounded-full p-1 object-fill  hover:ring-2  ring-white-us lg:w-10 lg:h-10" src="/series-cast/pedroPascal.jpg" alt="" />
        </div>
      </div>
    </header>
  );
}
