// src/Components/LanguageSelectorContext.jsx
import React, { createContext, useState } from 'react';

export const LanguageSelectorContext = createContext();

const translations = {
  en: {
    greeting: "Hello",
    description: "This is English language.",
  },
  fr: {
    greeting: "Bonjour",
    description: "C'est la langue française.",
  },
};

export default function LanguageSelectorProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'fr' : 'en'));
  };

  const value = {
    language,
    toggleLanguage,
    texts: translations[language],
  };

  return (
    <LanguageSelectorContext.Provider value={value}>
      {children}
    </LanguageSelectorContext.Provider>
  );
}
