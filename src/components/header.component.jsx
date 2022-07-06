import React from "react";
import ADD_ICON from "asset/icon/add.svg";
import SEARCH_ICON from "asset/icon/search.svg";

const Header = () => {
  return (
    <header className="px-12 py-8 grid font-primary grid-cols-2">
      <h1>TaskManager</h1>
      <nav className="flex justify-between items-center">
        <p>You have 4 tasks to complete</p>
        <ul className="flex">
          <li className="mx-3">
            <button className="text-center text-base font-medium text-white bg-purple-700 px-4 py-2 rounded shadow-lg active:shadow-none">
              <img src={ADD_ICON} alt="add" className="inline-block mr-2" />
              Create task
            </button>
          </li>
          <li className="mx-3">
            <button className="bg-gray-200 w-10 h-10 rounded flex justify-center items-center shadow-lg active:shadow-none">
              <img src={SEARCH_ICON} alt="search" />
            </button>
          </li>
          <li className="mx-3">
            <button className="bg-gray-200 w-10 h-10 rounded flex justify-center items-center shadow-lg active:shadow-none"></button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
