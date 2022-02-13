import { createContext } from "react";

// create and export the context
export const ThemeContext = createContext();

// create the context component
export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ color: "blue" }}>
      {children}
    </ThemeContext.Provider>
  );
};
