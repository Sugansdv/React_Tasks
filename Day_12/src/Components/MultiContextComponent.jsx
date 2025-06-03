import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { LanguageContext } from './LanguageContext';

const MultiContextComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className={`multi-context-box ${theme}`}>
      <h2>Current Theme: {theme}</h2>
      <h2>Current Language: {language}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => changeLanguage('English')}>English</button>
      <button onClick={() => changeLanguage('Spanish')}>Spanish</button>
    </div>
  );
};

export default MultiContextComponent;
