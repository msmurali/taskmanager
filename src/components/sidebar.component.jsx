import React from "react";
import TasksIcon from "components/icon.components/tasks.icon.component";
import LogoutIcon from "components/icon.components/logout.icon.component";
import SettingsIcon from "components/icon.components/settings.icon.component";
import Calendar from "react-calendar";
import { TasksContext } from "contexts/tasks-context";
import { Link } from "react-router-dom";
import { ThemeMode } from "contexts/theme-context";
import { useTheme } from "contexts/theme-context";

const SideBar = () => {
  const { incompleteTasksCount } = React.useContext(TasksContext);
  const { theme } = useTheme();

  return (
    <aside
      className={`h-full overflow-y-auto font-primary px-6 py-4 flex md:flex-col justify-end md:justify-evenly items-center border-r ${
        theme === ThemeMode.LIGHT ? "border-gray-200" : "border-gray-700"
      }`}
    >
      <p className="inline md:hidden mr-auto">
        You have
        <span className="font-medium">{` ${incompleteTasksCount} ${
          incompleteTasksCount <= 1 ? "task" : "tasks"
        }`}</span>{" "}
        to complete
      </p>

      <Link to="dashboard" className="w-auto md:w-full">
        <button className="mx-2 md:mt-4 md:mx-0 p-3 md:px-4 md:py-3 md:w-full md:h-auto flex bg-purple-700  justify-start items-center rounded shadow-md active:shadow-none">
          <span className="inline">
            <TasksIcon color="white" />
          </span>
          <span className="hidden md:inline md:ml-4 text-white">Tasks</span>
        </button>
      </Link>

      <div className="my-4 hidden md:block">
        <Calendar
          className={`${
            theme === ThemeMode.LIGHT
              ? ""
              : "react-calender-dark react-calendar__month-view__weekdays-dark"
          }`}
        />
      </div>
      <Link to="settings" className="w-auto md:w-full">
        <button className="mx-3 md:mb-4 md:mx-0 p-3 md:px-4 md:py-3 md:w-full md:h-auto flex bg-gray-300  justify-start items-center rounded shadow-md active:shadow-none">
          <SettingsIcon />
          <span className="hidden md:inline md:ml-4 ">Settings</span>
        </button>
      </Link>
      <button className="mx-2 md:mx-0 p-3 md:px-4 md:py-3 md:w-full md:h-auto flex bg-red-600 justify-start items-center rounded shadow-md active:shadow-none">
        <LogoutIcon color="white" />
        <span className="hidden md:inline md:ml-4 text-white">Logout</span>
      </button>
    </aside>
  );
};

export default SideBar;
