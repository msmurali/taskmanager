import React from "react";
import { TagColorDark, TagColorLight, TagImg } from "constants/enums";
import { CheckIcon, CloseIcon } from "components/icon.components/index";
import Badge from "components/badge.component";
import { removeTask } from "services/tasks";
import { useAuth } from "contexts/auth-context";
import { Link } from "react-router-dom";

const Tag = ({ tag }) => {
  return (
    <div
      className={`tag text-sm px-3 py-1 rounded font-medium text-${
        TagColorDark[tag.toUpperCase()]
      } bg-${TagColorLight[tag.toUpperCase()]}`}
    >
      {tag}
    </div>
  );
};

const DateTag = ({ from, to }) => {
  const fromDate = new Date(from.seconds * 1000);
  const toDate = new Date(to.seconds * 1000);

  return (
    <div className="date text-sm px-3 py-1 rounded bg-gray-300 ">
      {`${fromDate.toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
      })} - ${toDate.toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
      })} `}
    </div>
  );
};

const Task = ({ task, id }) => {
  const { user } = useAuth();

  const remove = async () => {
    await removeTask(user.uid, task.id);
  };

  return (
    <div className="task mx-auto mt-10 bg-white relative font-primary max-w-xs p-4 m-4 shadow-lg rounded-lg border border-gray-200 cursor-pointer">
      <Badge tag={task.tag} />
      <div className="flex justify-between items-center mt-5">
        <Link to={`/task/${id}`}>
          <h1 className="task-title font-regular text-base">
            {task && task.title}
          </h1>
        </Link>
        <button className="bg-transparent p-2" onClick={remove}>
          <CloseIcon color="red" />
        </button>
      </div>
      <Link to={`/task/${id}`}>
        <div
          className="task-img w-100 h-40 rounded-lg my-4 bg-cover"
          style={{
            backgroundImage: `url(${TagImg[task.tag.toUpperCase()]})`,
          }}
        ></div>
      </Link>
      <div className="flex justify-between items-center mb-4 pt-3">
        <Tag tag={task.tag} />
        <DateTag from={task.from} to={task.to} />
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
