import React from "react";
import { Tag, TagColorDark, TagColorLight } from "constants/enums";
import { CloseIcon, LoadingIcon } from "components/icon.components/index";
import { Timestamp } from "@firebase/firestore";
import { useAuth } from "contexts/auth-context";
import { addTask as addDoc, updateTask as updateDoc } from "services/tasks";
import { useNavigate, useParams } from "react-router-dom";
import { TasksContext } from "contexts/tasks-context";

const TaskInput = ({ id, val, removeTask, setVal }) => {
  return (
    <div className="form-group mt-8">
      <div className="flex justify-between items-center">
        <label htmlFor={`task-${id}`} className="block text-sm mb-1">
          Task
        </label>
        <button
          type="button"
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

const TaskForm = ({ action }) => {
  const { id } = useParams();

  const { tasks: tasksCollection } = React.useContext(TasksContext);

  const getTask = React.useCallback(() => {
    const data = tasksCollection.filter((task) => task.id === id)[0];
    return data;
  }, [tasksCollection, id]);

  const task = getTask();

  const [title, setTitle] = React.useState(() =>
    action === "edit" ? task?.title : ""
  );
  const [tag, setTag] = React.useState(() =>
    action === "edit" ? task?.tag : Tag.GENERAL
  );
  const [tasks, setTasks] = React.useState(() =>
    action === "edit" ? task?.tasks : []
  );

  const [from, setFrom] = React.useState(() =>
    action === "edit"
      ? new Date(task?.from.seconds * 1000).toISOString().substring(0, 10)
      : ""
  );

  const [to, setTo] = React.useState(() =>
    action === "edit"
      ? new Date(task?.from.seconds * 1000).toISOString().substring(0, 10)
      : ""
  );

  const createdAt = task?.createdAt;

  const [loading, setLoading] = React.useState(false);

  const { user } = useAuth();

  const navigateTo = useNavigate();

  const changeTag = (newTag) => setTag(newTag);

  const changeTitle = (e) => setTitle(e.target.value);

  const addTask = () => {
    const newTasks = [...tasks];
    newTasks.push({ text: "", completed: false });
    setTasks(newTasks);
  };

  const removeTask = (id) => {
    const newTasks = [...tasks];
    newTasks.splice(id, 1);
    setTasks(newTasks);
  };

  const updateTask = (id, text) => {
    const newTasks = [...tasks];
    newTasks[id] = { ...newTasks[id], text };
    setTasks(newTasks);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const completedTasks = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length;
    const data = {
      title,
      tag,
      id,
      from: Timestamp.fromDate(new Date(from)),
      to: Timestamp.fromDate(new Date(to)),
      createdAt: action === "edit" ? createdAt : Timestamp.now(),
      tasks,
      totalTasks: tasks.length,
      completedTasks,
      completed: totalTasks === completedTasks,
    };

    if (action === "edit") {
      await updateDoc(user.uid, data, id);
    } else {
      await addDoc(user.uid, data);
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
    setTitle("");
    setTag("");
    setFrom("");
    setTo("");
    setTasks([]);
  };

  return (
    <div className="task-form w-full h-full overflow-y-auto font-primary p-8">
      <React.Fragment>
        <h1 className="form-title text-lg font-medium">
          {action === "edit" ? "Edit Task" : "Create task"}
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
              value={title}
              onChange={changeTitle}
            />
          </div>
          <div className="form-group mt-8">
            <label className="block text-sm mb-1">Tag</label>
            <div className="flex justify-start items-center flex-wrap">
              {Object.keys(Tag).map((key) => (
                <div
                  key={key}
                  className={`my-4 mr-4 inline-block cursor-pointer tag general-tag font-medium ${
                    tag === Tag[key]
                      ? `shadow-none text-${TagColorDark[key]} bg-${TagColorLight[key]}`
                      : "shadow-md text-gray-700 bg-gray-200"
                  }  px-2 py-1 rounded`}
                  onClick={() => changeTag(Tag[key])}
                >
                  {`${Tag[key][0].toUpperCase()}${Tag[key]
                    .substring(1)
                    .toLowerCase()}`}
                </div>
              ))}
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
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="w-full md:w-2/5 mt-8 md:mt-0">
              <label htmlFor="title" className="block text-sm mb-1">
                To
              </label>
              <input
                type="date"
                name="to"
                id="to"
                className="w-full px-4 py-2 border-2 border-gray-200 focus:border-purple-700 outline-none rounded-md"
                required
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
          </div>

          {tasks.map((task, index) => (
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
                {action === "edit" ? "Save" : "Create"}
              </span>
            </button>
          </div>
        </form>
      </React.Fragment>
    </div>
  );
};

export default TaskForm;
