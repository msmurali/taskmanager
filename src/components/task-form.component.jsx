import React from "react";
import { Tag } from "constants/enums";
import CloseIcon from "components/icon.components/close.icon.component";
import { Timestamp } from "@firebase/firestore";
import { useAuth } from "contexts/auth-context";
import { addTask as addDoc } from "services/tasks";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "components/icon.components/loading.icon.component";

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
  const [tag, setTag] = React.useState(Tag.GENERAL);
  const [title, setTitle] = React.useState("");
  const [tasks, setTasks] = React.useState([
    /*{
      text: ...,
      completed: ....
    }*/
  ]);
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { user } = useAuth();
  const navigateTo = useNavigate();

  const changeTag = (newTag) => setTag(newTag);

  const titleHandler = (e) => setTitle(e.target.value);

  const addTask = () => {
    const newTasks = [...tasks];
    newTasks.push({ text: "", completed: false });
    setTasks(newTasks);
  };

  const removeTask = (id) => {
    const newTasks = [...tasks];
    newTasks.splice(id);
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

    const task = {
      title,
      tag,
      from: Timestamp.fromDate(new Date(from)),
      to: Timestamp.fromDate(new Date(to)),
      createdAt: Timestamp.now(),
      completed: false,
      totalTasks: tasks.length,
      completedTasks: 0,
      tasks,
    };

    await addDoc(user.uid, task);
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
    setTag("general");
    setTasks([]);
    setFrom("");
    setTo("");
  };

  return (
    <div className="task-form w-full h-full overflow-y-auto font-primary p-8">
      <h1 className="form-title text-lg font-medium">Create task</h1>
      <form className="" onSubmit={submitHandler}>
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
            onChange={titleHandler}
          />
        </div>
        <div className="form-group mt-8">
          <label className="block text-sm mb-1">Tag</label>
          <div className="flex justify-center md:justify-start items-center flex-wrap">
            <div
              className={`mr-4 inline-block cursor-pointer tag general-tag font-medium ${
                tag === Tag.GENERAL
                  ? "text-green-700 bg-green-200 shadow-none"
                  : "text-gray-700 bg-gray-200 shadow-md"
              }  px-2 py-1 rounded`}
              onClick={() => changeTag(Tag.GENERAL)}
            >
              General
            </div>
            <div
              className={`mx-4 my-4 inline-block cursor-pointer tag entertainment-tag font-medium  ${
                tag === Tag.ENTERTAINMENT
                  ? "text-sky-700 bg-sky-200 shadow-none"
                  : "text-gray-700 bg-gray-200 shadow-md"
              }  px-2 py-1 rounded`}
              onClick={() => changeTag(Tag.ENTERTAINMENT)}
            >
              Entertainment
            </div>
            <div
              className={`mx-4 my-4 inline-block cursor-pointer tag learning-tag font-medium  ${
                tag === Tag.LEARNING
                  ? "text-yellow-700 bg-yellow-200 shadow-none"
                  : "text-gray-700 bg-gray-200 shadow-md"
              }  px-2 py-1 rounded`}
              onClick={() => changeTag(Tag.LEARNING)}
            >
              Learning
            </div>
            <div
              className={`mx-4  my-4 inline-block cursor-pointer tag shopping-tag font-medium  ${
                tag === Tag.SHOPPING
                  ? "text-purple-700 bg-purple-200 shadow-none"
                  : "text-gray-700 bg-gray-200 shadow-md"
              }  px-2 py-1 rounded`}
              onClick={() => changeTag(Tag.SHOPPING)}
            >
              Shopping
            </div>
            <div
              className={`mx-4 my-4 inline-block cursor-pointer tag travel-tag font-medium  ${
                tag === Tag.TRAVEL
                  ? "text-pink-700 bg-pink-200 shadow-none"
                  : "text-gray-700 bg-gray-200 shadow-md"
              }  px-2 py-1 rounded`}
              onClick={() => changeTag(Tag.TRAVEL)}
            >
              Travel
            </div>
            <div
              className={`mx-4 my-4 inline-block cursor-pointer tag urgent-tag font-medium  ${
                tag === Tag.URGENT
                  ? "text-red-700 bg-red-200 shadow-none"
                  : "text-gray-700 bg-gray-200 shadow-md"
              }  px-2 py-1 rounded`}
              onClick={() => changeTag(Tag.URGENT)}
            >
              Urgent
            </div>
            <div
              className={`ml-4 my-4 inline-block cursor-pointer tag work-tag font-medium ${
                tag === Tag.WORK
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
              value={from}
              onChange={(e) => setFrom(e.target.value)}
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
            <span className={!loading ? "inline-block" : "hidden"}>Create</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
