'use client';

import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiPhone, HiLocationMarker, HiAcademicCap } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

const resumeData = {
  contact: {
    email: 'chanyu.lee@gmail.com',
    phone: '+1 (430) 215-7209',
    location: { ko: '롱뷰, 텍사스', en: 'Longview, TX' },
    linkedin: 'https://www.linkedin.com/in/chanyu-lee/',
  },
  education: [
    {
      school: { ko: 'LeTourneau University', en: 'LeTourneau University' },
      logo: '/assets/images/letu.png',
      location: { ko: 'Longview, TX', en: 'Longview, TX' },
      degree: { ko: 'Business & Human Centered Design', en: 'Business & Human Centered Design' },
      period: 'Jan 2025 - Dec 2025',
      description: { ko: '비즈니스 및 인간 중심 디자인', en: 'Business & Human Centered Design' },
    },
    {
      school: { ko: 'Apple Developer Academy @ POSTECH', en: 'Apple Developer Academy @ POSTECH' },
      logo: '/assets/images/apple.png',
      location: { ko: 'Pohang, S. Korea', en: 'Pohang, S. Korea' },
      degree: { ko: 'UX / UI Design Learner', en: 'UX / UI Design Learner' },
      period: 'Mar 2024 - Dec 2024',
      description: { ko: 'UX / UI 디자인 학습', en: 'UX / UI Design Learner' },
    },
    {
      school: { ko: '한동대학교', en: 'Handong Global University' },
      logo: '/assets/images/hgu.png',
      location: { ko: 'Pohang, S. Korea', en: 'Pohang, S. Korea' },
      degree: { ko: 'Global Entrepreneurship & Visual Design', en: 'Global Entrepreneurship & Visual Design' },
      period: 'Mar 2022 - Current',
      description: { ko: '글로벌 기업가정신 및 시각 디자인', en: 'Global Entrepreneurship & Visual Design' },
    },
  ],
  certifications: [
    { ko: 'Google UX Design Certificate', en: 'Google UX Design Certificate' },
    { ko: 'Figma 전문가 인증', en: 'Figma Professional Certification' },
    { ko: 'Adobe XD 인증', en: 'Adobe XD Certification' },
  ],
  languages: [
    { name: { ko: '한국어', en: 'Korean' }, level: { ko: '원어민', en: 'Native' }, percentage: 100 },
    { name: { ko: '영어', en: 'English' }, level: { ko: '유창', en: 'Fluent' }, percentage: 90 },
  ],
};

/**
 * Resume 섹션
 * 이력서 다운로드 및 주요 정보 요약 표시
 */
export default function Resume() {
  const { t, language } = useLanguage();

  const handleDownload = () => {
    // PDF 다운로드
    const link = document.createElement('a');
    link.href = '/assets/documents/Resume_ChanyuLee.pdf';
    link.download = 'Resume_ChanyuLee.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section id="resume" className="bg-gradient-to-b from-transparent to-transparent" style={{ backgroundColor: 'rgba(240, 231, 214, 0.1)' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        {/* 섹션 제목 */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4" style={{ color: '#EA2E00' }}>
              Resume
            </h2>
            <p className="text-base md:text-lg text-foreground/70 mb-6 md:mb-8">
              {t('이력서 및 연락처', 'Resume & Contact')}
            </p>
            <Button size="lg" onClick={handleDownload} className="w-full sm:w-auto min-h-[50px] text-base">
              <HiDownload className="inline mr-2" />
              {t('이력서 다운로드', 'Download Resume')}
            </Button>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 px-4 md:px-0">
          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
              <HiMail className="flex-shrink-0" style={{ color: '#EA2E00' }} />
              <span>{t('연락처', 'Contact')}</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <Card>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(234, 46, 0, 0.1)', color: '#EA2E00' }}>
                    <HiMail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-foreground/60">{t('이메일', 'Email')}</p>
                    <a
                      href={`mailto:${resumeData.contact.email}`}
                      className="font-medium transition-colors text-sm block truncate"
                      style={{ color: 'inherit' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#EA2E00'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                    >
                      {resumeData.contact.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(234, 46, 0, 0.1)', color: '#EA2E00' }}>
                    <HiPhone className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-foreground/60">{t('전화번호', 'Phone')}</p>
                    <a
                      href={`tel:${resumeData.contact.phone}`}
                      className="font-medium transition-colors text-sm block truncate"
                      style={{ color: 'inherit' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#EA2E00'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                    >
                      {resumeData.contact.phone}
                    </a>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(234, 46, 0, 0.1)', color: '#EA2E00' }}>
                    <HiLocationMarker className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-foreground/60">{t('위치', 'Location')}</p>
                    <p className="font-medium text-sm truncate">
                      {language === 'ko' ? resumeData.contact.location.ko : resumeData.contact.location.en}
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(234, 46, 0, 0.1)', color: '#EA2E00' }}>
                    <FaLinkedin className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-foreground/60">LinkedIn</p>
                    <a
                      href={resumeData.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium transition-colors text-sm block truncate"
                      style={{ color: 'inherit' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#EA2E00'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                    >
                      {t('프로필 보기', 'View Profile')}
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* 학력 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
              <HiAcademicCap className="flex-shrink-0" style={{ color: '#EA2E00' }} />
              <span>{t('학력', 'Education')}</span>
            </h3>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <Card key={index}>
                  <div className="flex gap-4">
                    {/* 학교 로고 */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white">
                        <Image
                          src={edu.logo}
                          alt={language === 'ko' ? edu.school.ko : edu.school.en}
                          width={64}
                          height={64}
                          className="object-contain p-2"
                        />
                      </div>
                    </div>
                    {/* 학교 정보 */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 flex-1 min-w-0">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 mb-2">
                          <h4 className="text-lg sm:text-xl font-bold leading-tight">
                            {language === 'ko' ? edu.school.ko : edu.school.en}
                          </h4>
                          <span className="text-sm text-foreground/60">
                            {language === 'ko' ? edu.location.ko : edu.location.en}
                          </span>
                        </div>
                        <p className="font-medium mb-1 text-sm sm:text-base" style={{ color: '#EA2E00' }}>
                          {language === 'ko' ? edu.degree.ko : edu.degree.en}
                        </p>
                      </div>
                      <div className="md:flex-shrink-0">
                        <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium min-h-[36px]">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
