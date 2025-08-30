'use client';
import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { translations, Lang } from '@/src/i18n/translations';

type Ctx = {
  language: Lang;
  setLanguage: (l: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<Ctx | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Lang>('it');

  const t = (key: string) => {
    const dict = translations[language] as Record<string, string>;
    return dict[key] ?? translations['en'][key] ?? key;
  };

  const value = useMemo(() => ({ language, setLanguage, t }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
