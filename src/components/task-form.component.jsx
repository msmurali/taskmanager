import React from "react";
import { Tag } from "constants/enums";
import CloseIcon from "components/icon.components/close.icon.component";
import { Timestamp } from "@firebase/firestore";
import { useAuth } from "contexts/auth-context";
import { addTask as addDoc, updateTask as updateDoc } from "services/tasks";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import LoadingIcon from "components/icon.components/loading.icon.component";
import { TasksContext } from "contexts/tasks-context";

const TaskInput = ({ id, val, removeTask, setVal }) => {
  return (
    <div className="form-group mt-8">
      <div className="flex justify-between items-center">
        <label htmlFor={`task-${id}`} className="block text-sm mb-1">
          Task
        </label>
        <button
          className="delete-btn p-2 bg-transparent"
          onClick={() => removeTask(id)}
        >
          <CloseIcon color="red" />
        </button>
      </div>
      <div>
        <input
          type="text"
          name={`task-${id}`}
          id={`task-${id}`}
          className="w-full px-4 py-2 border-2 border-gray-200 focus:border-purple-700 outline-none rounded-md"
          minLength="3"
          required
          value={val}
          onChange={(e) => setVal(id, e.target.value)}
        />
      </div>
    </div>
  );
};

const TaskForm = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { tasks: tasksCol } = React.useContext(TasksContext);

  const [task, setTask] = React.useState(() => {
    if (pathname.includes("edit")) {
      const data = tasksCol.filter((task) => task.id === id)[0];
      return data;
    } else {
      return {
        title: "",
        tag: "general",
        tasks: [],
        from: "",
        to: "",
        completed: false,
        completedTasks: 0,
        totalTasks: 0,
      };
    }
  });

  const [loading, setLoading] = React.useState(false);
  const { user } = useAuth();
  const navigateTo = useNavigate();

  const changeTag = (newTag) => setTask({ ...task, tag: newTag });

  const titleHandler = (e) => setTask({ ...task, title: e.target.value });

  const addTask = () => {
    const newTasks = [...task.tasks];
    newTasks.push({ text: "", completed: false });
    setTask({ ...task, tasks: newTasks });
  };

  const removeTask = (id) => {
    const newTasks = [...task.tasks];
    newTasks.splice(id);
    setTask({ ...task, tasks: newTasks });
  };

  const updateTask = (id, text) => {
    const newTasks = [...task.tasks];
    newTasks[id] = { ...newTasks[id], text };
    setTask({ ...task, tasks: newTasks });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (pathname.includes("edit")) {
      await updateDoc(user.uid, task, task.id);
    } else {
      await addDoc(user.uid, { ...task, createdAt: Timestamp.now() });
    }

    setLoading(false);
    resetFields();
    navigateTo("/dashboard");
  };

  const discardHandler = () => {
    const res = window.confirm("Are you sure?");
    if (res) {
      resetFields();
      navigateTo("/dashboard");
    } else {
      return;
    }
  };

  const resetFields = () => {
    setTask({
      ...task,
      title: "",
      tag: "general",
      tasks: [],
      from: "",
      to: "",
    });
  };

  return (
    <div className="task-form w-full h-full overflow-y-auto font-primary p-8">
      <React.Fragment>
        <h1 className="form-title text-lg font-medium">
          {pathname.includes("edit") ? "Edit Task" : "Create task"}
        </h1>
        <form onSubmit={submitHandler}>
          <div className="form-group mt-8">
            <label htmlFor="title" className="block text-sm mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full px-4 py-2 border-2 border-gray-200 focus:border-purple-700 outline-none rounded-md"
              minLength="3"
              required
              value={task.title}
              onChange={titleHandler}
            />
          </div>
          <div className="form-group mt-8">
            <label className="block text-sm mb-1">Tag</label>
            <div className="flex justify-center md:justify-start items-center flex-wrap">
              <div
                className={`mr-4 inline-block cursor-pointer tag general-tag font-medium ${
                  task.tag === Tag.GENERAL
                    ? "text-green-700 bg-green-200 shadow-none"
                    : "text-gray-700 bg-gray-200 shadow-md"
                }  px-2 py-1 rounded`}
                onClick={() => changeTag(Tag.GENERAL)}
              >
                General
              </div>
              <div
                className={`mx-4 my-4 inline-block cursor-pointer tag entertainment-tag font-medium  ${
                  task.tag === Tag.ENTERTAINMENT
                    ? "text-sky-700 bg-sky-200 shadow-none"
                    : "text-gray-700 bg-gray-200 shadow-md"
                }  px-2 py-1 rounded`}
                onClick={() => changeTag(Tag.ENTERTAINMENT)}
              >
                Entertainment
              </div>
              <div
                className={`mx-4 my-4 inline-block cursor-pointer tag learning-tag font-medium  ${
                  task.tag === Tag.LEARNING
                    ? "text-yellow-700 bg-yellow-200 shadow-none"
                    : "text-gray-700 bg-gray-200 shadow-md"
                }  px-2 py-1 rounded`}
                onClick={() => changeTag(Tag.LEARNING)}
              >
                Learning
              </div>
              <div
                className={`mx-4  my-4 inline-block cursor-pointer tag shopping-tag font-medium  ${
                  task.tag === Tag.SHOPPING
                    ? "text-purple-700 bg-purple-200 shadow-none"
                    : "text-gray-700 bg-gray-200 shadow-md"
                }  px-2 py-1 rounded`}
                onClick={() => changeTag(Tag.SHOPPING)}
              >
                Shopping
              </div>
              <div
                className={`mx-4 my-4 inline-block cursor-pointer tag travel-tag font-medium  ${
                  task.tag === Tag.TRAVEL
                    ? "text-pink-700 bg-pink-200 shadow-none"
                    : "text-gray-700 bg-gray-200 shadow-md"
                }  px-2 py-1 rounded`}
                onClick={() => changeTag(Tag.TRAVEL)}
              >
                Travel
              </div>
              <div
                className={`mx-4 my-4 inline-block cursor-pointer tag urgent-tag font-medium  ${
                  task.tag === Tag.URGENT
                    ? "text-red-700 bg-red-200 shadow-none"
                    : "text-gray-700 bg-gray-200 shadow-md"
                }  px-2 py-1 rounded`}
                onClick={() => changeTag(Tag.URGENT)}
              >
                Urgent
              </div>
              <div
                className={`ml-4 my-4 inline-block cursor-pointer tag work-tag font-medium ${
                  task.tag === Tag.WORK
                    ? "text-blue-700 bg-blue-200 shadow-none"
                    : "text-gray-700 bg-gray-200 shadow-md"
                }  px-2 py-1 rounded`}
                onClick={() => changeTag(Tag.WORK)}
              >
                Work
              </div>
            </div>
          </div>

          <div className="form-group flex mt-8 w-full justify-between items-center flex-wrap">
            <div className="w-full md:w-2/5">
              <label htmlFor="title" className="block text-sm mb-1">
                From
              </label>
              <input
                type="date"
                name="from"
                id="from"
                className="w-full px-4 py-2 border-2 border-gray-200 focus:border-purple-700 outline-none rounded-md"
                required
                value={task.from}
                onChange={(e) => setTask({ ...task, from: e.target.value })}
              />
            </div>
            <div className="w-full md:w-2/5">
              <label htmlFor="title" className="block text-sm mb-1">
                To
              </label>
              <input
                type="date"
                name="to"
                id="to"
                className="w-full px-4 py-2 border-2 border-gray-200 focus:border-purple-700 outline-none rounded-md"
                required
                value={task.to}
                onChange={(e) => setTask({ ...task, to: e.target.value })}
              />
            </div>
          </div>

          {task.tasks.map((task, index) => (
            <TaskInput
              id={index}
              key={index}
              val={task.text}
              removeTask={removeTask}
              setVal={updateTask}
            />
          ))}

          <button
            type="button"
            onClick={addTask}
            className="block add-task mx-auto my-10 rounded px-4 py-2 bg-purple-700 text-white font-medium shadow-lg active:shadow-none"
          >
            Add Task
          </button>
          <div className="btn-container flex justify-between items-center">
            <button
              onClick={discardHandler}
              type="button"
              className="block add-task my-10 rounded px-4 py-2 bg-red-600 text-white font-medium shadow-lg active:shadow-none"
            >
              Discard
            </button>
            <button
              disabled={loading}
              type="submit"
              className="block add-task my-10 rounded px-4 py-2 bg-purple-700 text-white font-medium shadow-lg active:shadow-none"
            >
              <span className={loading ? "inline-block" : "hidden"}>
                <LoadingIcon color="white" />
              </span>
              <span className={!loading ? "inline-block" : "hidden"}>
                {pathname.includes("edit") ? "Save" : "Create"}
              </span>
            </button>
          </div>
        </form>
      </React.Fragment>
    </div>
  );
};

export default TaskForm;
