import React, { useEffect } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = '';

    if (theme === 'dark') {
      document.body.classList.add('bg-dark', 'text-light');
    } else {
      document.body.classList.add('bg-light', 'text-dark');
    }
  }, [theme]);

  return (
    <div className="container text-center mt-5">
      <h3 className='mb-3 text-secondary'> Task 3. useLocalStorage Hook</h3>
      <h3>Current Theme: {theme}</h3>
      <button
        className={`btn mt-3 ${theme === 'dark' ? 'btn-light' : 'btn-dark'}`}
        onClick={toggleTheme}
      >
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
