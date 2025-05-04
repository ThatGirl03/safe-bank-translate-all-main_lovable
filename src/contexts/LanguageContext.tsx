
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the available languages
export type LanguageCode = 
  | 'en' 
  | 'zu' 
  | 'st' 
  | 'xh' 
  | 'af' 
  | 'ts' 
  | 'nr' 
  | 'nso' 
  | 've' 
  | 'tn' 
  | 'ss';

// Language names object
export const languageNames: Record<LanguageCode, string> = {
  en: 'English',
  zu: 'isiZulu',
  st: 'Sesotho',
  xh: 'isiXhosa',
  af: 'Afrikaans',
  ts: 'Xitsonga',
  nr: 'isiNdebele',
  nso: 'Sepedi',
  ve: 'Tshivenda',
  tn: 'Setswana',
  ss: 'siSwati'
};

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Get saved language from localStorage or default to English
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageCode;
    return savedLanguage || 'en';
  });

  // When language changes, save to localStorage
  const setLanguage = (newLanguage: LanguageCode) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Simple translation function that will be replaced with actual translations
  const t = (key: string): string => {
    // This is a placeholder. In a real app, you would load translations for the selected language
    return key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
