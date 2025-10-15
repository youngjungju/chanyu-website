'use client';

import { motion } from 'framer-motion';
import { HiArrowRight, HiMail } from 'react-icons/hi';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * 홈 페이지 히어로 섹션
 * 애니메이션된 인사말과 CTA 버튼 포함
 */
export default function Hero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-0">
      {/* 배경 그라데이션 애니메이션 */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{ backgroundColor: '#EA2E00' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          style={{ backgroundColor: '#F0E7D6' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* 인사말 */}
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-base md:text-sm font-medium">
              {t('🎨 UX/UI 디자이너 & 📢 마케터', '🎨 UX/UI Designer & 📢 Marketer')}
            </span>
          </motion.div>

          {/* 메인 제목 */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: '#EA2E00' }}
          >
            {t('👋 안녕하세요! 저는 이찬유입니다', '👋 Hello! I\'m Ray')}
          </motion.h1>

          {/* 부제목 */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed px-4 md:px-0"
          >
            {t(
              <>
                <span className="font-semibold" style={{ color: '#EA2E00' }}>
                  디자인이 말하고
                </span>
                ,
              </>,
              <>
                <span className="font-semibold" style={{ color: '#EA2E00' }}>
                  Design that speaks
                </span>
                ,
              </>
            )}
            <br />
            {t(
              <>
                <span className="font-semibold" style={{ color: '#EA2E00' }}>
                  브랜드가 연결
                </span>
                됩니다.
              </>,
              <>
                <span className="font-semibold" style={{ color: '#EA2E00' }}>
                  brands that connect
                </span>
                .
              </>
            )}
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4 md:px-0 w-full sm:w-auto"
          >
            <Button
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto min-h-[50px] text-base"
            >
              {t('프로젝트 보기', 'View Projects')}
              <HiArrowRight className="inline ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto min-h-[50px] text-base"
            >
              <HiMail className="inline mr-2" />
              {t('연락하기', 'Contact Me')}
            </Button>
          </motion.div>

          {/* 스크롤 인디케이터 */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <div className="w-6 h-10 border-2 border-foreground/30 rounded-full p-1">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-3 rounded-full mx-auto"
                  style={{ backgroundColor: '#EA2E00' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
