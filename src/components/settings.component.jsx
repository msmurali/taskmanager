import React from "react";
import { useTheme, ThemeMode } from "contexts/theme-context";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full h-full overflow-y-auto font-primary">
      <div className="form-group my-8 rounded flex flex-col justify-center items-center w-full p-8 md:w-1/2 mx-auto border border-gray-200">
        <div className="min-w-full flex justify-between items-center">
          <div className="">Dark mode</div>
          <div className="toggle-btn relative">
            <div
              onClick={toggleTheme}
              className={`circle h-6 w-6 bg-purple-700 active:bg-purple-800 rounded-full absolute top-[2px] ${
                theme === ThemeMode.LIGHT ? "left-[2px]" : "right-[2px]"
              } cursor-pointer`}
            ></div>
            <div className="btn-bg w-14 h-7 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
