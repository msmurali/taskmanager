import React from "react";
import ShoppingIcon from "components/icon.components/shopping.icon.component";
import CheckIcon from "components/icon.components/check.icon.component";

const Task = () => {
  return (
    <div className="task mx-auto mt-10 bg-white relative font-primary max-w-xs p-4 m-4 shadow-lg rounded-lg">
      <div className="badge absolute -top-4 left-4 w-10 h-10 rounded-full border-2 border-white bg-purple-200 flex justify-center items-center">
        <ShoppingIcon color="rgb(126,34,206)" />
      </div>
      <h1 className="task-title font-regular text-base mt-5">
        Shop new furniture
      </h1>
      <div className="task-img w-100 h-40 rounded-lg my-4"></div>
      <div className="flex justify-between items-center mb-4">
        <div className="tag text-sm px-3 py-1 rounded font-medium bg-purple-300 text-purple-700">
          Shopping
        </div>
        <div className="date text-sm px-3 py-1 rounded bg-gray-300 ">
          21 Jun - 30 Jun
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="progress w-full">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm">Progress</span>
            <span className="text-sm">50%</span>
          </div>
          <div className="progress-bar relative">
            <div className="w-1/2 h-2 bg-green-500 absolute rounded"></div>
            <div className="w-100 h-2 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="tasks-count ml-10 flex items-center">
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
