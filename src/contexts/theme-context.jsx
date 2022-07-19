import React from "react";

const ThemeMode = Object.freeze({
  LIGHT: "light",
  DARK: "dark",
});

const ThemeContext = React.createContext(null);

const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(getTheme);

  const toggleTheme = () => {
    if (theme === ThemeMode.LIGHT) {
      setTheme(ThemeMode.DARK);
    } else {
      setTheme(ThemeMode.LIGHT);
    }
  };

  const storeTheme = (theme) => {
    window.localStorage.setItem("com.mk.task-manager.theme", theme);
  };

  const getTheme = () => {
    const theme = window.localStorage.getItem("com.mk.task-manager.theme");
    if (theme === "light") {
      return ThemeMode.LIGHT;
    } else {
      return ThemeMode.DARK;
    }
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme, ThemeMode };
