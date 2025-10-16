'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiFigma,
  SiBlender,
  SiRhinoceros,
} from 'react-icons/si';
import { HiLightBulb, HiClipboardCheck, HiBriefcase, HiBookOpen, HiColorSwatch, HiPencil, HiOfficeBuilding, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { useLanguage } from '@/contexts/LanguageContext';

const softwares = [
  { icon: SiAdobepremierepro, name: 'Premiere Pro', color: '#9999FF' },
  { icon: SiRhinoceros, name: 'Rhino', color: '#801010' },
  { icon: SiAdobeillustrator, name: 'Illustrator', color: '#FF9A00' },
  { icon: SiAdobeaftereffects, name: 'After Effects', color: '#9999FF' },
  { icon: SiAdobephotoshop, name: 'Photoshop', color: '#31A8FF' },
  { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
  { icon: SiBlender, name: 'Blender', color: '#F5792A' },
  { icon: HiOfficeBuilding, name: 'Microsoft Office', color: '#D83B01' },
];

const otherSkills = [
  { icon: HiBookOpen, name: 'UX Research', color: '#EA2E00' },
  { icon: HiClipboardCheck, name: 'Campaign Planning', color: '#EA2E00' },
  { icon: HiBriefcase, name: 'Project Management', color: '#EA2E00' },
  { icon: HiPencil, name: 'Visual Storytelling', color: '#EA2E00' },
  { icon: HiLightBulb, name: 'Design Thinking', color: '#EA2E00' },
  { icon: HiColorSwatch, name: 'Typography', color: '#EA2E00' },
];

const profileImages = [
  '/assets/images/profile1.jpeg',
  '/assets/images/profile2.jpeg',
  '/assets/images/profile3.jpeg',
  '/assets/images/profile4.jpeg',
];

/**
 * About Me 섹션
 * 프로필 정보, 소개글, 기술 스택 표시
 */
export default function About() {
  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
    }, 3000); // 3초마다 자동 전환

    return () => clearInterval(interval);
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + profileImages.length) % profileImages.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
  };

  const interests = [
    { ko: '웹 개발', en: 'Web Development' },
    { ko: 'UI/UX 디자인', en: 'UI/UX Design' },
    { ko: '성능 최적화', en: 'Performance Optimization' },
    { ko: '오픈소스', en: 'Open Source' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <Section id="about" className="bg-gradient-to-b from-transparent to-transparent" style={{ backgroundColor: 'rgba(240, 231, 214, 0.1)' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* 섹션 제목 */}
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4" style={{ color: '#EA2E00' }}>
            About Me
          </h2>
          <p className="text-base md:text-lg text-foreground/70">
            {t('저를 소개합니다', 'Get to know me')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4 md:px-0">
          {/* 프로필 이미지 슬라이드 */}
          <motion.div variants={itemVariants} className="relative">
            <Card className="overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <Image
                  src={profileImages[currentImageIndex]}
                  alt={`Profile ${currentImageIndex + 1}`}
                  fill
                  className="object-cover transition-opacity duration-500"
                  key={currentImageIndex}
                />

                {/* 왼쪽 화살표 */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                  aria-label="Previous image"
                >
                  <HiChevronLeft className="w-6 h-6" />
                </button>

                {/* 오른쪽 화살표 */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                  aria-label="Next image"
                >
                  <HiChevronRight className="w-6 h-6" />
                </button>

                {/* 인디케이터 */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {profileImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-white w-6'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </Card>
          </motion.div>

          {/* 소개글 */}
          <motion.div variants={itemVariants}>
            <Card>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                {t('안녕하세요! 저는 이찬유(Ray)입니다 👋', 'Hello! I\'m Ray (Chanyu Lee) 👋')}
              </h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-base">
                <p>
                  {t(
                    '안녕하세요! 사람과 사람을 잇는, 소통하는 디자이너 이찬유입니다.',
                    'Hello! I\'m Chanyu Lee, a designer who connects people through communication.'
                  )}
                </p>
                <p>
                  {t(
                    '저는 한국에서 Global Entrepreneurship과 Visual Design, 그리고 미국에서 Marketing을 전공하며, 아이디어를 현실로 구현하고 새로운 가치를 만들어내는 과정을 배웠습니다.',
                    'I studied Global Entrepreneurship and Visual Design in Korea, and Marketing in the United States, learning how to turn ideas into reality and create new value.'
                  )}
                </p>
                <p>
                  {t(
                    '그러던 중 "좋은 디자인과 좋은 마케팅은 무엇일까?" 라는 질문에 대해 고민하던 순간, Human-Centered Design을 만나게 되었습니다. 이를 계기로 Apple Developer Academy에서 사람들의 삶을 관찰하고, 더 나은 경험을 제공하기 위한 서비스를 기획·디자인하는 법을 배우게 되었습니다.',
                    'While pondering "What makes good design and good marketing?", I discovered Human-Centered Design. This led me to the Apple Developer Academy, where I learned to observe people\'s lives and design services that provide better experiences.'
                  )}
                </p>
                <p>
                  {t(
                    '이 경험을 통해 저는 \'사람을 위한 디자인\'을 제 목표로 삼게 되었습니다. 현재는 Design Thinking 방법론을 활용해 사용자를 깊이 이해하고, Adobe와 Figma 등을 통해 시각적이고 감각적인 해결방식을 제안하기 위한 다양한 프로젝트를 진행하고 있습니다.',
                    'Through this experience, I made "design for people" my goal. Currently, I\'m working on various projects using Design Thinking methodology to deeply understand users and propose visual and sensory solutions through Adobe and Figma.'
                  )}
                </p>
              </div>

              {/* 관심사 */}
              <div className="mt-6 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest.ko}
                    className="px-4 py-2.5 rounded-full glass text-sm font-medium min-h-[44px] flex items-center"
                  >
                    {language === 'ko' ? interest.ko : interest.en}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Softwares */}
        <motion.div variants={itemVariants} className="mt-16 md:mt-20 px-4 md:px-0">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">
            Softwares
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
            {softwares.map((software, index) => {
              const Icon = software.icon;
              return (
                <motion.div
                  key={software.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-3 p-4 md:p-5 glass rounded-2xl cursor-pointer min-h-[100px] justify-center"
                >
                  <Icon
                    className="w-10 h-10 md:w-12 md:h-12"
                    style={{ color: software.color }}
                  />
                  <span className="text-xs md:text-sm font-medium text-center">
                    {software.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Other Skills */}
        <motion.div variants={itemVariants} className="mt-12 md:mt-16 px-4 md:px-0">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">
            Other
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {otherSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-3 p-4 md:p-5 glass rounded-2xl cursor-pointer min-h-[100px] justify-center"
                >
                  <Icon
                    className="w-10 h-10 md:w-12 md:h-12"
                    style={{ color: skill.color }}
                  />
                  <span className="text-xs md:text-sm font-medium text-center">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
