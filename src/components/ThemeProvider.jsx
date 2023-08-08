import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = (props) => {
  const { children } = props;
  const [isDarkMode, SetIsDarkMode] = useState(false);

  const toggleTheme = () => {
    SetIsDarkMode((prevmode) => !prevmode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
