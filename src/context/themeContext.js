import { createContext, useReducer } from "react";

// create and export the context
export const ThemeContext = createContext();

// Reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

// create the context component
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "teal",
    mode: "light",
  });

  // Action
  const changeColor = (color) => {
    dispatch({
      type: "CHANGE_COLOR",
      payload: color,
    });
  };

  const changeMode = (mode) => {
    dispatch({
      type: "CHANGE_MODE",
      payload: mode,
    });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
