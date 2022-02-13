import React from "react";

import { useTheme } from "../hooks/useTheme";

import "./ThemeSelector.css";
import modeIcon from "../assets/mode-icon.svg";

const themeColors = ["teal", "#58249c", "#249c6b", "orange", "#b70233"];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  // console.log(mode);

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt="Mode icon"
          onClick={toggleMode}
          style={{
            filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
          }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
