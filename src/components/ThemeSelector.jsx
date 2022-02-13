import React from "react";

import { useTheme } from "../hooks/useTheme";

import "./ThemeSelector.css";

const themeColors = ["teal", "#58249c", "orange"];

const ThemeSelector = () => {
  const { changeColor } = useTheme();

  return (
    <div className="theme-selector">
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
