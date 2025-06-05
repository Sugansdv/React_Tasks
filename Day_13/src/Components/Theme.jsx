import React from "react";
import useTheme from "../Hooks/useTheme";

export default function UseThemeDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container mt-5 text-center">
      <h3 className='mb-2 text-secondary'> Task 15. useTheme Hook</h3>
      <h4>Current Theme: {theme}</h4>
      <button
        className={`btn ${theme === "light" ? "btn-dark" : "btn-light"} mt-3`}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}
