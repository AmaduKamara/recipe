import { createContext, useReducer } from "react";

// create and export the context
export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

// create the context component
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "teal",
  });

  const changeColor = (color) => {
    dispatch({
      type: "CHANGE_COLOR",
      payload: color,
    });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
