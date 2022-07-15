import React from "react";
import { Link, useParams } from "react-router-dom";
import { TasksContext } from "contexts/tasks-context";
import {
  CheckIcon,
  CloseIcon,
  EditIcon,
} from "components/icon.components/index";

const TaskPage = () => {
  const { id } = useParams();
  const { tasks } = React.useContext(TasksContext);
  const [task, setTask] = React.useState(tasks[id]);

  React.useEffect(() => {
    setTask(tasks[id]);
  }, [id, tasks]);

  return (
    task && (
      <div className="task-page w-full h-full p-8 overflow-y-auto font-primary">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-lg text-ellipsis">
            {task?.title}
            <span className="block text-xs font-normal">{task?.tag}</span>
          </h1>
          <div className="btn-container">
            <Link to={`/edit/${id}`}>
              <button className="mr-4 inline-flex px-4 py-2 bg-purple-700 text-white rounded shadow-md active:shadow-none items-center justify-center">
                <span className="inline md:hidden mr-0.5 md:mr-4">
                  <EditIcon color="white" />
                </span>
                <span className="hidden md:inline">Edit</span>
              </button>
            </Link>
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
            <p className="block">{`${Math.round(
              (task?.completedTasks / task?.totalTasks) * 100
            )}%`}</p>
          </div>
          <div className="progress-bar mt-2 relative">
            <div className="w-full bg-gray-200 h-2 rounded"></div>
            <div
              className="absolute top-0 left-0  bg-green-600 h-2 rounded"
              style={{
                width: `${Math.round(
                  (task?.completedTasks / task?.totalTasks) * 100
                )}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="tasks">
          {task?.tasks.map((task, index) => {
            return (
              <div
                key={index}
                className="flex flex-wrap items-center border border-gray-200 rounded p-4 mt-6"
              >
                <p
                  className={task?.completed ? "line-through" : "no-underline"}
                >
                  {task?.text}
                </p>
                <div className="w-full btn-container flex justify-between items-center mt-4">
                  <button className="w-1/2 bg-transparent inline-flex justify-center bg-green-300 rounded px-4 py-2 shadow-md active:shadow-none">
                    <CheckIcon />
                  </button>
                  <span className="w-4"></span>
                  <button className="w-1/2 bg-transparent inline-flex justify-center bg-red-300 rounded px-4 py-2 shadow-md active:shadow-none">
                    <CloseIcon />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default TaskPage;
