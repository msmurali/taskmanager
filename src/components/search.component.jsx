import React from "react";
import { useTheme, ThemeMode } from "contexts/theme-context";

const Search = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full h-full overflow-y-auto font-primary ${
        theme === ThemeMode.LIGHT ? "text-black" : "text-white"
      }`}
    >
      <h1 className="font-medium text-xl my-8 w-full md:w-1/2 mx-auto">
        Search Tasks
      </h1>
    </div>
  );
};

export default Search;
