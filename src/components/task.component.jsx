import React from "react";
import { Tag } from "constants/enums";
import {
  GeneralImg,
  ShoppingImg,
  EntertainmentImg,
  WorkImg,
  TravelImg,
  UrgentImg,
  LearningImg,
} from "asset/img/index";
import {
  CheckIcon,
  CloseIcon,
  EntertainmentIcon,
  GeneralIcon,
  LearningIcon,
  ShoppingIcon,
  TravelIcon,
  UrgentIcon,
  WorkIcon,
} from "components/icon.components/index";

const getBadge = (tag) => {
  switch (tag) {
    case tag === Tag.GENERAL:
      return <GeneralIcon color="rgb(21, 128, 61)" />;
    case tag === Tag.ENTERTAINMENT:
      return <EntertainmentIcon color="rgb(3, 105, 161)" />;
    case tag === Tag.LEARNING:
      return <LearningIcon color="rgb(161, 98, 7)" />;
    case tag === Tag.SHOPPING:
      return <ShoppingIcon color="rgb(126, 34, 206)" />;
    case tag === Tag.URGENT:
      return <UrgentIcon color="rgb(185, 28, 28)" />;
    case tag === Tag.TRAVEL:
      return <TravelIcon color="rgb(190, 24, 93)" />;
    case tag === Tag.WORK:
      return <WorkIcon color="rgb(29, 78, 216)" />;
    default:
      return <GeneralIcon color="rgb(21, 128, 61)" />;
  }
};

const getImg = (tag) => {
  switch (tag) {
    case tag === Tag.GENERAL:
      return GeneralImg;
    case tag === Tag.ENTERTAINMENT:
      return EntertainmentImg;
    case tag === Tag.LEARNING:
      return LearningImg;
    case tag === Tag.SHOPPING:
      return ShoppingImg;
    case tag === Tag.URGENT:
      return UrgentImg;
    case tag === Tag.TRAVEL:
      return TravelImg;
    case tag === Tag.WORK:
      return WorkImg;
    default:
      return GeneralImg;
  }
};

const Badge = ({ tag }) => {
  const getColor = () => {
    switch (tag) {
      case tag === Tag.GENERAL:
        return "bg-green-200 text-green-700";
      case tag === Tag.ENTERTAINMENT:
        return "bg-sky-200 text-sky-700";
      case tag === Tag.LEARNING:
        return "bg-yellow-200 text-yellow-700";
      case tag === Tag.SHOPPING:
        return "bg-purple-200 text-purple-700";
      case tag === Tag.URGENT:
        return "bg-red-200 text-red-700";
      case tag === Tag.TRAVEL:
        return "bg-pink-200 text-pink-700";
      case tag === Tag.WORK:
        return "bg-blue-200 text-blue-700";
      default:
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
      <div className="badge absolute -top-4 left-4 w-10 h-10 rounded-full border-2 border-white bg-purple-200 flex justify-center items-center">
        {getBadge(task.tag)}
      </div>
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
        <Badge tag={task.tag} />
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
