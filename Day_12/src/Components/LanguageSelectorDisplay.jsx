
import React, { useContext } from 'react';
import { LanguageSelectorContext } from './LanguageSelectorContext';

export default function LanguageSelectorDisplay() {
  const { language, toggleLanguage, texts } = useContext(LanguageSelectorContext);

  return (
    <div>
      <p>{texts.greeting}! {texts.description}</p>
      <button onClick={toggleLanguage}>
        Switch to {language === 'en' ? 'French' : 'English'}
      </button>
    </div>
  );
}
