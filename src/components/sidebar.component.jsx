import React from "react";
import TasksIcon from "components/icon.components/tasks.icon.component";
import LogoutIcon from "components/icon.components/logout.icon.component";
import SettingsIcon from "components/icon.components/settings.icon.component";
import Calendar from "react-calendar";

const SideBar = () => {
  return (
    <aside className="h-auto font-primary px-6 py-4 flex md:flex-col justify-end md:justify-evenly items-center border-r border-gray-200 border-b">
      <button className="mx-2 md:mx-0 p-3 md:px-4 md:py-3 md:w-full md:h-auto flex bg-purple-700  justify-start items-center rounded shadow-md active:shadow-none">
        <TasksIcon color="white" />
        <span className="hidden md:inline md:ml-4 text-white">Tasks</span>
      </button>
      <Calendar />
      <button className="mx-3 md:mx-0 p-3 md:px-4 md:py-3 md:w-full md:h-auto flex bg-gray-300  justify-start items-center rounded shadow-md active:shadow-none">
        <SettingsIcon />
        <span className="hidden md:inline md:ml-4 ">Settings</span>
      </button>
      <button className="mx-2 md:mx-0 p-3 md:px-4 md:py-3 md:w-full md:h-auto flex bg-red-600 justify-start items-center rounded shadow-md active:shadow-none">
        <LogoutIcon color="white" />
        <span className="hidden md:inline md:ml-4 text-white">Logout</span>
      </button>
    </aside>
  );
};

export default SideBar;
