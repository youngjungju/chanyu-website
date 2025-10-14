'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiFigma,
  SiBlender,
  SiRhinoceros,
} from 'react-icons/si';
import { HiLightBulb, HiClipboardCheck, HiBriefcase, HiBookOpen, HiColorSwatch, HiPencil, HiOfficeBuilding } from 'react-icons/hi';
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

/**
 * About Me 섹션
 * 프로필 정보, 소개글, 기술 스택 표시
 */
export default function About() {
  const { t, language } = useLanguage();

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
          {/* 프로필 이미지 */}
          <motion.div variants={itemVariants} className="relative">
            <Card className="overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src="/assets/images/profile.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
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
                    '사용자 중심의 경험을 디자인하는 것을 좋아하는 UX/UI 디자이너입니다.',
                    'I am a UX/UI Designer who loves creating user-centered experiences.'
                  )}
                </p>
                <p>
                  {t(
                    '한동대학교에서 공학을 전공하며, 사용자의 니즈를 이해하고 직관적이고 아름다운 인터페이스를 만드는 데 열정을 가지고 있습니다.',
                    'Studying engineering at Handong Global University, I am passionate about understanding user needs and creating intuitive and beautiful interfaces.'
                  )}
                </p>
                <p>
                  {t(
                    '끊임없이 배우고 성장하며, 팀과 협업하여 더 나은 사용자 경험을 만들어가는 과정을 소중히 여깁니다.',
                    'I value continuous learning and growth, and cherish the process of collaborating with teams to create better user experiences.'
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
