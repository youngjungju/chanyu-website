'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Container from './Container';
import { useLanguage } from '@/contexts/LanguageContext';

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/chanyu-lee/', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:chanyu.lee@gmail.com', label: 'Email' },
];

const navLinks = [
  { name_ko: '홈', name_en: 'Home', href: '#home' },
  { name_ko: '소개', name_en: 'About', href: '#about' },
  { name_ko: '경력', name_en: 'Experience', href: '#experience' },
  { name_ko: '프로젝트', name_en: 'Projects', href: '#projects' },
  { name_ko: '이력서', name_en: 'Resume', href: '#resume' },
];

/**
 * 푸터 컴포넌트
 * 소셜 미디어 링크, 네비게이션, 저작권 정보 포함
 */
export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="relative mt-20 py-12 glass">
      {/* 상단 그라데이션 라인 */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: '#EA2E00' }} />

      <Container>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 px-4 md:px-0">
          {/* 브랜드 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4" style={{ color: '#EA2E00' }}>
              Ray Lee
            </h3>
            <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
              {t(
                '말하는 디자인, 연결하는 브랜드.',
                'Design that speaks, brands that connect.'
              )}
            </p>
          </motion.div>

          {/* 퀵 링크 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4">
              {t('빠른 링크', 'Quick Links')}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.span
                      className="text-foreground/70 transition-colors cursor-pointer text-sm sm:text-base min-h-[32px] inline-block"
                      onMouseEnter={(e) => e.currentTarget.style.color = '#EA2E00'}
                      onMouseLeave={(e) => e.currentTarget.style.color = ''}
                      whileHover={{ x: 5 }}
                    >
                      {language === 'ko' ? link.name_ko : link.name_en}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 소셜 링크 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4">
              {t('연결', 'Connect')}
            </h4>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#EA2E00';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.color = '';
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* 구분선 */}
        <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent mb-8" />

        {/* 저작권 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-foreground/60 text-xs sm:text-sm px-4"
        >
          <p>
            © {new Date().getFullYear()} Ray Lee. {t('모든 권리 보유.', 'All rights reserved.')}
          </p>
          <p className="mt-2">
            {t('제작:', 'Built with')}{' '}
            <span style={{ color: '#EA2E00' }}>♥</span>{' '}
            {t('Next.js & Framer Motion 사용', 'using Next.js & Framer Motion')}
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
