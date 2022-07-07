import React from "react";
import CheckIcon from "./icon.components/check.icon.component";
import CloseIcon from "./icon.components/close.icon.component";
import Task from "./task.component";

const Dashboard = () => {
  return (
    <div className="dashboard font-primary overflow-x-auto grid grid-cols-1 md:grid-cols-2">
      <div className="incomplete-tasks">
        <div className="w-100 bg-red-200 py-2 px-4 m-6 flex justify-start items-center rounded">
          <span className="inline mr-4">
            <CloseIcon />
          </span>
          <span className="inline font-medium">Incomplete tasks</span>
          <span className="inline md:hidden font-medium ml-auto">&gt;</span>
        </div>
        <div className="tasks py-4 px-2">
          <Task />
          <Task />
          <Task />
        </div>
      </div>

      <div className="completed-tasks">
        <div className="w-100 bg-green-200 py-2 px-4 m-6 flex justify-start items-center rounded">
          <span className="inline mr-4">
            <CheckIcon />
          </span>
          <span className="inline font-medium">Completed tasks</span>
          <span className="inline md:hidden font-medium ml-auto">&gt;</span>
        </div>
        <div className="tasks py-4 px-2">
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
