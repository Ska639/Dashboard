import { SearchIcon } from "@heroicons/react/solid";
import { TextInput } from "@tremor/react";

export const NavBar = () => {
  return (
    <div
      id="top"
      className="relative w-full sm:flex justify-between items-center p-2"
    >
      <h1 className="font-bold text-gray-300">Аналитическая панель</h1>
      <div className="py-2">
        <TextInput icon={SearchIcon} placeholder="Поиск..." />
      </div>
    </div>
  );
};

export default NavBar;
