'use client';

import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar } from 'react-icons/hi';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { useLanguage } from '@/contexts/LanguageContext';

const experiences = [
  {
    company: 'LeTourneau University',
    logo: '/assets/images/letu.png',
    position: { ko: '프로젝트 매니저', en: 'Project Manager' },
    period: { ko: '2025.01 - 현재', en: 'Jan 2025 - Present' },
    description: {
      ko: '전기 및 컴퓨터 공학부에서 스폰서 프로젝트 관리',
      en: 'Managing sponsored projects at Dept. of Electrical & Computer Engineering'
    },
    achievements: [
      { ko: 'U.S. Navy 계약업체 후원 STARS 프로젝트의 일정 및 결과물 조정, 마일스톤을 예정보다 앞당겨 완료', en: 'Coordinated STARS project for U.S. Navy contractor, completing milestones ahead of schedule' },
      { ko: 'Muz 후원 VMP 팀 지원, 프로젝트 작업 조율 및 진행 보고서 관리', en: 'Supported VMP team sponsored by Muz, managing progress reports and technical documentation' },
    ],
    skills: ['Project Management', 'Technical Documentation', 'Cross-team Coordination'],
  },
  {
    company: 'Apple Developer Academy',
    logo: '/assets/images/apple.png',
    position: { ko: '디자인 리드', en: 'Design Lead' },
    period: '2024.03 - 2024.12',
    description: {
      ko: 'Time 4 You 생산성 앱 UX 리서치 및 인터페이스 디자인',
      en: 'UX research and interface design for Time 4 You productivity app'
    },
    achievements: [
      { ko: '학생/구직자 대상 UX 리서치를 통해 사용자 페르소나 개발 및 브랜드 메시지 구축', en: 'Conducted UX research to develop user personas and shape brand messaging' },
      { ko: 'Figma를 사용하여 4시간 생산성 모델에 맞춘 앱 인터페이스 및 마케팅 비주얼 디자인', en: 'Designed app interface and marketing visuals using Figma for 4-hour productivity model' },
    ],
    skills: ['Figma', 'UX Research', 'User Personas', 'Brand Design'],
  },
  {
    company: 'Team "beendoing" (Pohang City)',
    logo: '/assets/images/beendoing.jpg',
    position: { ko: '브랜드 디자인 리드', en: 'Brand Design Lead' },
    period: '2024.06 - 2024.09',
    description: {
      ko: '포항시 후원 지속가능성 이벤트 브랜드 디자인',
      en: 'Brand design for sustainability event sponsored by Pohang City'
    },
    achievements: [
      { ko: '100명 이상 참석한 지속가능성 이벤트를 위한 ESG 브랜드 마케팅 콜래터럴 디자인 및 제작', en: 'Designed ESG-branded marketing collateral for sustainability event with 100+ attendees' },
      { ko: 'Illustrator & Photoshop을 사용하여 환경 메시지와 일치하는 비주얼 제작', en: 'Created visuals aligned with environmental messaging using Illustrator & Photoshop' },
    ],
    skills: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Design', 'ESG Marketing'],
  },
  {
    company: 'Handong Global University',
    logo: '/assets/images/hgu.png',
    position: { ko: '미디어 콘텐츠 팀 리드', en: 'Media Content Team Lead' },
    period: '2022.03 - 2023.12',
    description: {
      ko: '학생 홍보대사로서 공식 소셜 미디어 관리 및 대학 입학 행사 HR 리드',
      en: 'Student Ambassador managing official social media and HR lead for admissions'
    },
    achievements: [
      { ko: '공식 소셜 미디어 관리로 팔로워 1,000명 이상, 총 릴스 조회수 50,000회 이상 달성', en: 'Grew social media to 1,000+ followers and 50,000+ total Reels views' },
      { ko: 'Adobe Premiere Pro를 사용한 매력적인 비디오 콘텐츠 제작', en: 'Created engaging video content using Adobe Premiere Pro' },
      { ko: '3,000명 이상 참석한 대학 입학 인터뷰 행사의 HR 리드로 인력 배치 및 역할 조정', en: 'Coordinated staffing for university admissions interviews with 3,000+ participants' },
    ],
    skills: ['Adobe Premiere Pro', 'Social Media', 'Content Creation', 'HR Management'],
  },
];

/**
 * Experience 타임라인 섹션
 * 경력 사항을 타임라인 형태로 표시
 */
export default function Experience() {
  const { t, language } = useLanguage();

  return (
    <Section id="experience">
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
              Experience
            </h2>
            <p className="text-base md:text-lg text-foreground/70">
              {t('나의 커리어 여정', 'My Career Journey')}
            </p>
          </motion.div>
        </div>

        {/* 타임라인 */}
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <div className="relative">
            {/* 타임라인 라인 */}
            <div className="absolute left-8 md:left-0 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#EA2E00', opacity: 0.3 }} />

            {/* 경력 카드 */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-12 md:pl-16"
              >
                {/* 타임라인 점 */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="absolute left-8 md:left-0 w-4 h-4 rounded-full transform -translate-x-1/2 ring-4 ring-background"
                  style={{ backgroundColor: '#EA2E00', top: '24px' }}
                />

                {/* 회사 로고 */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  className="absolute left-8 md:left-0 w-12 h-12 transform -translate-x-1/2 text-3xl flex items-center justify-center rounded-full z-10 overflow-hidden"
                  style={exp.logo.startsWith('/') ? { backgroundColor: '#FFFFFF' } : {}}
                >
                  {exp.logo.startsWith('/') ? (
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="object-contain p-1"
                    />
                  ) : (
                    <div className="glass w-full h-full flex items-center justify-center">
                      {exp.logo}
                    </div>
                  )}
                </motion.div>

                {/* 경력 카드 */}
                <div className="ml-12 md:ml-8" data-scroll-card style={{ transition: 'transform 0.3s ease-out' }}>
                  <Card hover3d>
                    <div className="space-y-4">
                      {/* 회사명 & 직책 */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
                          {typeof exp.position === 'string' ? exp.position : language === 'ko' ? exp.position.ko : exp.position.en}
                        </h3>
                        <div className="flex items-center gap-2 font-semibold text-sm sm:text-base" style={{ color: '#EA2E00' }}>
                          <HiBriefcase className="flex-shrink-0" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      {/* 기간 */}
                      <div className="flex items-center gap-2 text-foreground/60 text-sm">
                        <HiCalendar className="flex-shrink-0" />
                        <span>{typeof exp.period === 'string' ? exp.period : language === 'ko' ? exp.period.ko : exp.period.en}</span>
                      </div>

                      {/* 설명 */}
                      <p className="text-foreground/80 text-base leading-relaxed">
                        {language === 'ko' ? exp.description.ko : exp.description.en}
                      </p>

                      {/* 주요 성과 */}
                      <div>
                        <h4 className="font-semibold mb-3 text-base">
                          {t('주요 성과:', 'Key Achievements:')}
                        </h4>
                        <ul className="space-y-2 text-sm text-foreground/80">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 leading-relaxed">
                              <span className="mt-1 flex-shrink-0" style={{ color: '#EA2E00' }}>•</span>
                              <span>{language === 'ko' ? achievement.ko : achievement.en}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 사용 기술 */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 text-xs rounded-full font-medium min-h-[32px] flex items-center"
                            style={{ backgroundColor: 'rgba(234, 46, 0, 0.1)', color: '#EA2E00' }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
