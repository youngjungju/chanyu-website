'use client';

import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * 다크/라이트 모드 토글 버튼
 * 애니메이션과 함께 테마를 전환함
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full glass hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <HiMoon className="w-6 h-6 text-yellow-400" />
        ) : (
          <HiSun className="w-6 h-6 text-orange-500" />
        )}
      </motion.div>
    </motion.button>
  );
}
