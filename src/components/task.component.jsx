import React from "react";
import ShoppingIcon from "components/icon.components/shopping.icon.component";
import CheckIcon from "components/icon.components/check.icon.component";

const Task = () => {
  return (
    <div className="task font-primary">
      <div className="badge w-10 h-10 rounded-full border-2 border-white bg-purple-200 flex justify-center items-center">
        <ShoppingIcon color="rgb(126,34,206)" />
      </div>
      <h1 className="task-title font-medium text-lg">Shop new furniture</h1>
      <div className="task-img w-100 h-40"></div>
      <div className="flex justify-between items-center">
        <div className="tag text-sm px-3 py-1 rounded font-medium bg-purple-300 text-purple-700">
          Shopping
        </div>
        <div className="date text-sm px-3 py-1 rounded bg-gray-300 ">
          21 Jun - 30 Jun
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="progress">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm">Progress</span>
            <span className="text-sm">50%</span>
          </div>
          <div className="progress-bar relative">
            <div className="w-1/2 h-2 bg-green-500 absolute rounded"></div>
            <div className="w-100 h-2 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="tasks-count flex items-center">
          <span className="inline mr-2">
            <CheckIcon />
          </span>
          <span className="inline">4/8</span>
        </div>
      </div>
    </div>
  );
};

export default Task;
