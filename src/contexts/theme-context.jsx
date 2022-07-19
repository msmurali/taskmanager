import React from "react";

const ThemeMode = Object.freeze({
  LIGHT: "light",
  DARK: "dark",
});

const ThemeContext = React.createContext(null);

const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(ThemeMode.LIGHT);

  const toggleTheme = () => {
    if (theme === ThemeMode.LIGHT) {
      setTheme(ThemeMode.DARK);
    } else {
      setTheme(ThemeMode.LIGHT);
    }
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme, ThemeMode };
