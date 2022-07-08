import React from "react";
import { Tag as tags } from "constants/enums";
import {
  GeneralImg,
  ShoppingImg,
  EntertainmentImg,
  WorkImg,
  TravelImg,
  UrgentImg,
  LearningImg,
} from "asset/img/index";
import { CheckIcon, CloseIcon } from "components/icon.components/index";
import Badge from "components/badge.component";

const getImg = (tag) => {
  if (tag === tags.GENERAL) {
    return GeneralImg;
  } else if (tag === tags.ENTERTAINMENT) {
    return EntertainmentImg;
  } else if (tag === tags.LEARNING) {
    return LearningImg;
  } else if (tag === tags.SHOPPING) {
    return ShoppingImg;
  } else if (tag === tags.URGENT) {
    return UrgentImg;
  } else if (tag === tags.TRAVEL) {
    return TravelImg;
  } else if (tag === tags.WORK) {
    return WorkImg;
  } else {
    return GeneralImg;
  }
};

const Tag = ({ tag }) => {
  const getColor = () => {
    if (tag === tags.GENERAL) {
      return "bg-green-200 text-green-700";
    } else if (tag === tags.ENTERTAINMENT) {
      return "bg-sky-200 text-sky-700";
    } else if (tag === tags.LEARNING) {
      return "bg-yellow-200 text-yellow-700";
    } else if (tag === tags.SHOPPING) {
      return "bg-purple-200 text-purple-700";
    } else if (tag === tags.URGENT) {
      return "bg-red-200 text-red-700";
    } else if (tag === tags.TRAVEL) {
      return "bg-pink-200 text-pink-700";
    } else if (tag === tags.WORK) {
      return "bg-blue-200 text-blue-700";
    } else {
      return "bg-green-200 text-green-700";
    }
  };

  return (
    <div className={`tag text-sm px-3 py-1 rounded font-medium ${getColor()}`}>
      {tag}
    </div>
  );
};

const Task = ({ task }) => {
  return (
    <div className="task mx-auto mt-10 bg-white relative font-primary max-w-xs p-4 m-4 shadow-lg rounded-lg border border-gray-200">
      <Badge tag={task.tag} />
      <div className="flex justify-between items-center mt-5">
        <h1 className="task-title font-regular text-base">
          {task && task.title}
        </h1>
        <button className="bg-transparent p-2">
          <CloseIcon color="red" />
        </button>
      </div>
      <div
        className="task-img w-100 h-40 rounded-lg my-4 bg-cover"
        style={{
          backgroundImage: `url(${getImg(task.tag)})`,
        }}
      ></div>
      <div className="flex justify-between items-center mb-4">
        <Tag tag={task.tag} />
        <div className="date text-sm px-3 py-1 rounded bg-gray-300 ">
          21 Jun - 30 Jun
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="progress w-full">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm">Progress</span>
            <span className="text-sm">
              {`${Math.round((task.completedTasks / task.totalTasks) * 100)}%`}
            </span>
          </div>
          <div className="progress-bar relative">
            <div
              className="h-2 bg-green-500 absolute rounded"
              style={{
                width: `${Math.round(
                  (task.completedTasks / task.totalTasks) * 100
                )}%`,
              }}
            ></div>
            <div className="w-100 h-2 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="tasks-count ml-10 flex items-center">
          <span className="inline mr-2">
            <CheckIcon />
          </span>
          <span className="inline">{`${task.completedTasks}/${task.totalTasks}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Task;
