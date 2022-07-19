import React from "react";
import { useTheme, ThemeMode } from "contexts/theme-context";
import { TasksContext } from "contexts/tasks-context";
import { CloseIcon } from "./icon.components";
import { Task } from "components";

const Search = () => {
  const { theme } = useTheme();
  const { tasks } = React.useContext(TasksContext);
  const [query, setQuery] = React.useState("");

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div
      className={`w-full h-full p-8 overflow-y-auto font-primary ${
        theme === ThemeMode.LIGHT ? "text-black" : "text-white"
      }`}
    >
      <h1 className="font-medium text-base md:text-lg my-8 w-full mx-auto">
        Search Tasks
      </h1>
      <div className="form-group w-full mb-8 flex justify-center">
        <input
          type="text"
          value={query}
          onChange={changeHandler}
          className="text-black bg-gray-100 w-full px-2 pl-6 py-2 border-2 border-gray-200 focus:border-purple-700 outline-none rounded-l-full"
        />
        <button
          onClick={() => setQuery("")}
          className="clear-btn rounded-r-full py-2 px-4 font-medium bg-purple-700"
        >
          <CloseIcon color="white" />
        </button>
      </div>
      <div className="flex justify-start items-center flex-wrap">
        {query &&
          tasks
            .filter((task) =>
              task.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((task, index) => <Task task={task} key={index} />)}
      </div>
    </div>
  );
};

export default Search;
