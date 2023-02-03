import { BsFolderPlus, BsSearch } from "react-icons/bs";

export function Header() {
  return (
    <header>
      <div className="mx-36 px-12 text-white-us font-bold flex justify-between items-center w-4/5 bg-background-us/50 rounded-[3rem]">
        <div className="w-3/5 flex justify-between">
          <span>Series</span>
          <span>Filmes</span>
          <span>Minha Lista</span>
        </div>

        <div className="w-2/5 flex justify-end items-center gap-6">
          <BsFolderPlus />
          <BsSearch />
          <img className="w-12 h-12 rounded-full p-2 object-fill" src="/series-cast/pedroPascal.jpg" alt="" />
        </div>
      </div>
    </header>
  );
}
