import React from "react";
import AddIcon from "components/icon.components/add.icon.component";
import SearchIcon from "components/icon.components/search.icon.component";
import { TasksContext } from "contexts/tasks-context";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "contexts/theme-context";
import { ThemeMode } from "contexts/theme-context";

const Header = () => {
  const { incompleteTasksCount } = React.useContext(TasksContext);
  const { theme } = useTheme();
  const { pathname } = useLocation();

  return (
    <header
      className={`px-6 py-4 md:px-12 md:py-6 grid font-primary grid-cols-layout items-center border-b  ${
        theme === ThemeMode.LIGHT
          ? "text-black border-gray-200"
          : "text-white border-gray-700"
      }`}
    >
      <h1 className="font-semibold text-base md:text-lg">TaskManager</h1>
      {!pathname.includes("login") && !pathname.includes("register") && (
        <nav
          className={`flex justify-end md:justify-between items-center ${
            pathname.includes("login") || pathname.includes("register")
              ? "hidden"
              : ""
          }`}
        >
          <p className="hidden md:inline">
            You have
            <span className="font-medium">{` ${incompleteTasksCount} ${
              incompleteTasksCount <= 1 ? "task" : "tasks"
            }`}</span>{" "}
            to complete
          </p>
          <ul className="flex items-center">
            <li className="mx-3">
              <Link to="create">
                <button className="flex justify-center items-center text-base font-medium text-white bg-purple-700 px-3 md:px-4 py-2 rounded shadow-lg active:shadow-none">
                  <span className="inline mr-0 md:mr-4">
                    <AddIcon color="white" />
                  </span>
                  <span className="hidden md:inline">Create task</span>
                </button>
              </Link>
            </li>
            <li className="mx-3">
              <Link to="search">
                <button className="bg-gray-300 w-10 h-10 rounded flex justify-center items-center shadow-md active:shadow-none">
                  <SearchIcon />
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
