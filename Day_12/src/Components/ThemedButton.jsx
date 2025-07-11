import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import '../App.css';

// 4. Access Context with useContext: Use the useContext hook to access context values in a child component.
const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="container">
      <h2>Current theme: {theme}</h2>
      <button
  onClick={toggleTheme}
  className={theme === 'light' ? 'btn-light' : 'btn-dark'}
>
  Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
</button>

    </div>
  );
};

export default ThemedButton;
