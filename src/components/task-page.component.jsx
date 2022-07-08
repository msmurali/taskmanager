import React from "react";
import CheckIcon from "./icon.components/check.icon.component";
import CloseIcon from "./icon.components/close.icon.component";

const TaskPage = ({ task }) => {
  const [state, setState] = React.useState(task);
  return (
    <div className="task-page w-full h-full p-8 overflow-y-auto font-primary">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-lg text-ellipsis">
          Shop new furniture
          <span className="block text-xs font-normal">General</span>
        </h1>
        <div className="btn-container">
          <button className="mr-4 inline-flex px-4 py-2 bg-purple-700 text-white rounded shadow-md active:shadow-none items-center justify-center">
            <span className="inline md:hidden mr-0.5 md:mr-4">
              <CheckIcon color="white" />
            </span>
            <span className="hidden md:inline">Edit</span>
          </button>
          <button className="inline-flex px-4 py-2 bg-green-600 text-white rounded shadow-md active:shadow-none items-center justify-center">
            <span className="inline md:hidden mr-0.5 md:mr-4">
              <CheckIcon color="white" />
            </span>
            <span className="hidden md:inline">Mark as complete</span>
          </button>
        </div>
      </div>
      <div className="progress my-8">
        <div className=" w-full flex justify-between align-items">
          <p className="block">Progress</p>
          <p className="block">50%</p>
        </div>
        <div className="progress-bar mt-2 relative">
          <div className="w-full bg-gray-200 h-2 rounded"></div>
          <div className="w-1/2 absolute top-0 left-0  bg-green-600 h-2 rounded"></div>
        </div>
      </div>
      <div className="tasks">
        <div className="flex flex-wrap items-center border border-gray-200 rounded p-4 mt-6">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            excepturi, necessitatibus nobis autem impedit officia quasi, ipsa
            saepe deleniti libero laudantium odit hic, quam quod alias! Animi et
            recusandae quia!
          </p>
          <div className="w-full btn-container flex justify-between items-center mt-4">
            <button className="w-1/2 bg-transparent inline-flex justify-center bg-green-300 rounded px-4 py-2">
              <CheckIcon />
            </button>
            <span className="w-4"></span>
            <button className="w-1/2 bg-transparent inline-flex justify-center bg-red-300 rounded px-4 py-2">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
