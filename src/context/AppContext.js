import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // dark/light mode
  const [userName, setUserName] = useState(""); // user input name

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        userName,
        setUserName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};