import React from "react";
import { useTheme, ThemeMode } from "contexts/theme-context";
import { TasksContext } from "contexts/tasks-context";
import { CloseIcon } from "./icon.components";
import { Task } from "components";

const Search = () => {
  const { theme } = useTheme();
  const { tasks, date, setDate } = React.useContext(TasksContext);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => setDate(null), [setDate]);

  const isInRange = (min, max, date) => {
    if (!date) return true;
    return (
      +min.setHours(0, 0, 0, 0) <= +date.setHours(0, 0, 0, 0) &&
      +date.setHours(0, 0, 0, 0) <= +max.setHours(0, 0, 0, 0)
    );
  };

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
      <div className="flex justify-start items-center flex-wrap gap-4">
        {query &&
          tasks &&
          tasks
            .filter((task) =>
              task.title.toLowerCase().includes(query.toLowerCase())
            )
            .filter((task) =>
              isInRange(
                new Date(task.from.seconds * 1000),
                new Date(task.to.seconds * 1000),
                date
              )
            )
            .map((task, index) => <Task task={task} key={index} />)}
      </div>
    </div>
  );
};

export default Search;
