'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (ko: string | ReactNode, en: string | ReactNode) => string | ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * 언어 컨텍스트 프로바이더
 * 한국어/영어 전환을 전역적으로 관리
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  const t = (ko: string | ReactNode, en: string | ReactNode) => {
    return language === 'ko' ? ko : en;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * 언어 컨텍스트를 사용하기 위한 커스텀 훅
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
