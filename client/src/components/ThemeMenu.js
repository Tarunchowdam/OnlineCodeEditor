import React from 'react';
import { useEditor } from "../context/AppContext";

const themes = [
  "dracula",
  "cobalt",
  "vibrant_ink",
  "monokai",
  "tomorrow_night",
  "tomorrow_night_blue",
  "nord_dark",
  "tomorrow_night_eighties",
];

const ThemeMenu = () => {
  const { theme, setTheme } = useEditor();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="bg-white text-black p-2 rounded shadow"
    >
      {themes.map((theme) => (
        <option key={theme} value={theme}>
          {theme.replace("_", " ")}
        </option>
      ))}
    </select>
  );
};

export default ThemeMenu;

