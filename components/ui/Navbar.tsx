'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import Container from './Container';
import { useLanguage } from '@/contexts/LanguageContext';

const navItems = [
  { name_ko: '홈', name_en: 'Home', href: '#home' },
  { name_ko: '소개', name_en: 'About', href: '#about' },
  { name_ko: '경력', name_en: 'Experience', href: '#experience' },
  { name_ko: '프로젝트', name_en: 'Projects', href: '#projects' },
  { name_ko: '이력서', name_en: 'Resume', href: '#resume' },
];

/**
 * 고정 네비게이션 바 컴포넌트
 * 스크롤 진행률 표시, 모바일 메뉴, 테마 토글 포함
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 스크롤 시 네비게이션 스타일 변경
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 스크롤 진행률 바 */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
        style={{ scaleX, backgroundColor: '#EA2E00' }}
      />

      {/* 네비게이션 바 */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* 로고 */}
            <Link href="#home">
              <motion.div
                className="text-xl md:text-2xl font-bold min-h-[44px] flex items-center"
                style={{ color: '#EA2E00' }}
                whileHover={{ scale: 1.05 }}
              >
                Ray Lee
              </motion.div>
            </Link>

            {/* 데스크톱 메뉴 */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.span
                    className="text-foreground transition-colors duration-300 cursor-pointer text-base"
                    onMouseEnter={(e) => e.currentTarget.style.color = '#EA2E00'}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {language === 'ko' ? item.name_ko : item.name_en}
                  </motion.span>
                </Link>
              ))}
              <LanguageToggle />
              <ThemeToggle />
            </div>

            {/* 모바일 메뉴 버튼 */}
            <div className="flex items-center gap-2 md:hidden">
              <LanguageToggle />
              <ThemeToggle />
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </motion.button>
            </div>
          </div>
        </Container>
      </nav>

      {/* 모바일 메뉴 */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : '100%',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 right-0 bottom-0 w-[280px] glass z-30 md:hidden pt-24 safe-area-inset"
      >
        <div className="flex flex-col gap-2 px-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              <motion.div
                className="text-lg transition-colors duration-300 cursor-pointer min-h-[44px] flex items-center px-4 py-3 rounded-xl"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#EA2E00';
                  e.currentTarget.style.backgroundColor = 'rgba(234, 46, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '';
                  e.currentTarget.style.backgroundColor = '';
                }}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                {language === 'ko' ? item.name_ko : item.name_en}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* 모바일 메뉴 배경 오버레이 */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
        />
      )}
    </>
  );
}
