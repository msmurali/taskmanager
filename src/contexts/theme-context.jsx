import React from "react";

export const Theme = Object.freeze({
  LIGHT: "light",
  DARK: "dark",
});

const ThemeContext = React.createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(Theme.LIGHT);

  const toggleTheme = () => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
    }
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider };
