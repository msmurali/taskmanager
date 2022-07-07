import React from "react";
import { Tag } from "constants/enums";

const TaskInput = () => {
  return (
    <div className="form-group mt-8">
      <label htmlFor="title" className="block text-sm mb-1">
        Task
      </label>
      <input
        type="text"
        name="task"
        id="task"
        className="w-full px-4 py-2 border-2 border-gray-200 focus:border-purple-700 outline-none rounded-md"
        minLength="3"
        required
      />
    </div>
  );
};

const Form = () => {
  const [tag, setTag] = React.useState(Tag.GENERAL);
  const [title, setTitle] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  const changeTag = (newTag) => setTag(newTag);

  return (
    <div className="task-form w-full h-full font-primary p-8">
      <h1 className="form-title text-lg font-medium">Create task</h1>
      <form className="">
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
          />
        </div>
        <div className="form-group mt-8">
          <label className="block text-sm mb-1">Tag</label>
          <div className="flex justify-center md:justify-start items-center flex-wrap">
            <div
              className={`mr-4 inline-block cursor-pointer tag general-tag font-medium ${
                tag === Tag.GENERAL
                  ? "text-green-700 bg-green-200"
                  : "text-gray-700 bg-gray-200"
              }  px-2 py-1 rounded`}
              onClick={() => changeTag(Tag.GENERAL)}
            >
              General
            </div>
            <div
              className={`mx-4 my-4 inline-block cursor-pointer tag entertainment-tag font-medium  ${
                tag === Tag.ENTERTAINMENT
                  ? "text-sky-700 bg-sky-200"
                  : "text-gray-700 bg-gray-200"
              }  px-2 py-1 rounded`}
              onClick={() => changeTag(Tag.ENTERTAINMENT)}
            >
              Entertainment
            </div>
            <div
              className={`mx-4 my-4 inline-block cursor-pointer tag learning-tag font-medium  ${
                tag === Tag.LEARNING
                  ? "text-yellow-700 bg-yellow-200"
                  : "text-gray-700 bg-gray-200"
              }  px-2 py-1 rounded`}
              onClick={() => changeTag(Tag.LEARNING)}
            >
              Learning
            </div>
            <div
              className={`mx-4  my-4 inline-block cursor-pointer tag shopping-tag font-medium  ${
                tag === Tag.SHOPPING
                  ? "text-purple-700 bg-purple-200"
                  : "text-gray-700 bg-gray-200"
              }  px-2 py-1 rounded`}
              onClick={() => changeTag(Tag.SHOPPING)}
            >
              Shopping
            </div>
            <div
              className={`mx-4 my-4 inline-block cursor-pointer tag travel-tag font-medium  ${
                tag === Tag.TRAVEL
                  ? "text-pink-700 bg-pink-200"
                  : "text-gray-700 bg-gray-200"
              }  px-2 py-1 rounded`}
              onClick={() => changeTag(Tag.TRAVEL)}
            >
              Travel
            </div>
            <div
              className={`mx-4 my-4 inline-block cursor-pointer tag urgent-tag font-medium  ${
                tag === Tag.URGENT
                  ? "text-red-700 bg-red-200"
                  : "text-gray-700 bg-gray-200"
              }  px-2 py-1 rounded`}
              onClick={() => changeTag(Tag.URGENT)}
            >
              Urgent
            </div>
            <div
              className={`ml-4 my-4 inline-block cursor-pointer tag work-tag font-medium ${
                tag === Tag.WORK
                  ? "text-blue-700 bg-blue-200"
                  : "text-gray-700 bg-gray-200"
              }  px-2 py-1 rounded`}
              onClick={() => changeTag(Tag.WORK)}
            >
              Work
            </div>
          </div>
        </div>
        <TaskInput />
      </form>
    </div>
  );
};

export default Form;
