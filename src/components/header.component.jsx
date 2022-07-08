import React from "react";
import AddIcon from "components/icon.components/add.icon.component";
import SearchIcon from "components/icon.components/search.icon.component";

const Header = () => {
  return (
    <header className="px-6 py-4 md:px-12 md:py-6 grid font-primary grid-cols-layout items-center border-b border-gray-200">
      <h1 className="font-semibold text-base md:text-lg">TaskManager</h1>
      <nav className="flex justify-end md:justify-between items-center">
        <p className="hidden md:inline">
          You have
          <span className="font-medium"> 4 tasks</span> to complete
        </p>
        <ul className="flex items-center">
          <li className="mx-3">
            <button className="flex justify-center items-center text-base font-medium text-white bg-purple-700 px-3 md:px-4 py-2 rounded shadow-lg active:shadow-none">
              <span className="inline mr-0 md:mr-4">
                <AddIcon color="white" />
              </span>
              <span className="hidden md:inline">Create task</span>
            </button>
          </li>
          <li className="mx-3">
            <button className="bg-gray-300 w-10 h-10 rounded flex justify-center items-center shadow-md active:shadow-none">
              <SearchIcon />
            </button>
          </li>
          {/* <li className="mx-3">
            <button className="bg-gray-300 w-10 h-10 rounded flex justify-center items-center shadow-md active:shadow-none"></button>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
