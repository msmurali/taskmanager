import React from "react";
import { Link, useParams } from "react-router-dom";
import { TasksContext } from "contexts/tasks-context";
import {
  CheckIcon,
  CloseIcon,
  EditIcon,
} from "components/icon.components/index";
import { updateTask } from "services/tasks";
import { useAuth } from "contexts/auth-context";

const TaskPage = () => {
  const { id } = useParams();

  const { tasks } = React.useContext(TasksContext);

  const getTask = React.useCallback(() => {
    const data = tasks.filter((task) => task.id === id)[0];
    return data;
  }, [tasks, id]);

  const [task, setTask] = React.useState(getTask);

  const { user } = useAuth();

  const markasCompleted = async () => {
    const id = task.id;

    task.completed = true;
    task.completedTasks = task.tasks.length;
    task.tasks = task.tasks.map((task) => ({ ...task, completed: true }));

    await updateTask(user.uid, task, id);
  };

  const updateTasksArray = async (index, completed) => {
    const id = task.id;

    if (completed && !task.tasks[index].completed) {
      task.tasks[index].completed = completed;
      task.completedTasks += 1;
    }

    if (!completed && task.tasks[index].completed) {
      task.tasks[index].completed = completed;
      task.completedTasks -= 1;
    }

    task.completed = task.completedTasks === task.totalTasks;

    await updateTask(user.uid, task, id);
  };

  React.useEffect(() => {
    setTask(getTask);
  }, [getTask]);

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
            <button
              onClick={markasCompleted}
              className="inline-flex px-4 py-2 bg-green-600 text-white rounded shadow-md active:shadow-none items-center justify-center"
            >
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
                  <button
                    onClick={() => updateTasksArray(index, true)}
                    className="w-1/2 bg-transparent inline-flex justify-center bg-green-300 rounded px-4 py-2 shadow-md active:shadow-none"
                  >
                    <CheckIcon />
                  </button>
                  <span className="w-4"></span>
                  <button
                    onClick={() => updateTasksArray(index, false)}
                    className="w-1/2 bg-transparent inline-flex justify-center bg-red-300 rounded px-4 py-2 shadow-md active:shadow-none"
                  >
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
