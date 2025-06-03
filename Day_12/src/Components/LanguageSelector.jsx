import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className="language-selector">
      <p>Selected Language: <strong>{language}</strong></p>
      <button onClick={() => changeLanguage('English')} className="lang-btn">English</button>
      <button onClick={() => changeLanguage('Spanish')} className="lang-btn">Spanish</button>
      <button onClick={() => changeLanguage('French')} className="lang-btn">French</button>
    </div>
  );
};

export default LanguageSelector;
