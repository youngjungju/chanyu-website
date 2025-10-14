'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * 언어 전환 토글 버튼 (한국어/영어)
 */
export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative px-3 py-1.5 rounded-lg flex items-center gap-1 border-2 min-h-[44px]"
      style={{
        borderColor: '#EA2E00',
        backgroundColor: 'transparent'
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <span
        className="text-sm font-bold px-2 py-1 rounded transition-all duration-300"
        style={{
          backgroundColor: language === 'ko' ? '#EA2E00' : 'transparent',
          color: language === 'ko' ? '#F0E7D6' : '#EA2E00'
        }}
      >
        한
      </span>
      <span className="text-foreground/30">/</span>
      <span
        className="text-sm font-bold px-2 py-1 rounded transition-all duration-300"
        style={{
          backgroundColor: language === 'en' ? '#EA2E00' : 'transparent',
          color: language === 'en' ? '#F0E7D6' : '#EA2E00'
        }}
      >
        A
      </span>
    </motion.button>
  );
}
