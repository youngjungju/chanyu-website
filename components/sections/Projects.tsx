'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { useLanguage } from '@/contexts/LanguageContext';

const categories = [
  { ko: '전체', en: 'All' },
  { ko: '디자인', en: 'Design' },
  { ko: '마케팅', en: 'Marketing' },
];

const projects = [
  {
    title: 'Time 4 You App',
    category: 'Design',
    description: {
      ko: '학생과 구직자를 위한 4시간 생산성 모델 기반 앱. UX 리서치를 통해 사용자 페르소나를 개발하고 Figma로 인터페이스를 디자인했습니다.',
      en: 'Productivity app based on 4-hour model for students and job seekers. Conducted UX research to develop user personas and designed interface using Figma.'
    },
    image: '⏰',
    tags: ['Figma', 'UX Research', 'User Personas', 'iOS'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'ESG Sustainability Event Branding',
    category: 'Design',
    description: {
      ko: '포항시 후원 지속가능성 이벤트를 위한 ESG 브랜드 디자인. 100명 이상이 참석한 행사를 위해 배너, 포스터, 키트 등 마케팅 콜래터럴을 제작했습니다.',
      en: 'ESG brand design for sustainability event sponsored by Pohang City. Created marketing collateral including banners, posters, and kits for event with 100+ attendees.'
    },
    image: '🌱',
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Design'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'U.S. Navy STARS Project',
    category: 'Design',
    description: {
      ko: 'U.S. Navy 계약업체 후원 STARS 프로젝트의 프로젝트 매니저로 일정 및 결과물을 조정하고 마일스톤을 예정보다 앞당겨 완료했습니다.',
      en: 'Project Manager for U.S. Navy contractor-sponsored STARS project. Coordinated timelines and deliverables, completing milestones ahead of schedule.'
    },
    image: '🚀',
    tags: ['Project Management', 'Technical Documentation', 'Navy Contractor'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'HGU Social Media Growth Campaign',
    category: 'Marketing',
    description: {
      ko: '한동대학교 학생 홍보대사로서 공식 소셜 미디어를 관리하여 팔로워 1,000명 이상, 총 릴스 조회수 50,000회 이상을 달성했습니다.',
      en: 'Managed official social media for Handong Global University as Student Ambassador, growing followers to 1,000+ and achieving 50,000+ total Reels views.'
    },
    image: '📱',
    tags: ['Adobe Premiere Pro', 'Social Media', 'Content Creation'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'International Student Orientation',
    category: 'Marketing',
    description: {
      ko: 'LeTourneau University의 국제학생 오리엔테이션 행사를 주도하고 After Effects로 커스텀 인트로가 포함된 Instagram 프로모션 비디오를 제작했습니다.',
      en: 'Led orientation events for international students at LeTourneau University and produced Instagram promo videos with custom After Effects intros.'
    },
    image: '🎥',
    tags: ['After Effects', 'Instagram', 'Video Production'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Vietnam Distribution Startup Strategy',
    category: 'Marketing',
    description: {
      ko: '베트남 하노이 Business Pizza Hackathon에서 베트남 유통 스타트업을 위한 시장 진출 전략을 개발하고 발표했습니다.',
      en: 'Developed and pitched go-to-market strategy for Vietnamese distribution startup at Business Pizza Hackathon in Hanoi, Vietnam.'
    },
    image: '🍕',
    tags: ['Business Strategy', 'Brand Positioning', 'Market Research'],
    demoLink: '#',
    githubLink: '#',
  },
];

/**
 * Projects 섹션
 * 카테고리 필터링과 호버 애니메이션이 있는 프로젝트 갤러리
 */
export default function Projects() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Section id="projects" className="bg-gradient-to-b from-transparent to-transparent">
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
              Projects
            </h2>
            <p className="text-base md:text-lg text-foreground/70">
              {t('나의 작업물', 'My Work')}
            </p>
          </motion.div>
        </div>

        {/* 카테고리 필터 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12 px-4"
        >
          {categories.map((category) => {
            const categoryValue = category.en;
            const categoryLabel = language === 'ko' ? category.ko : category.en;
            return (
              <motion.button
                key={categoryValue}
                onClick={() => setActiveCategory(categoryValue)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-sm sm:text-base min-h-[44px] ${
                  activeCategory === categoryValue
                    ? 'text-white shadow-lg'
                    : 'glass hover:shadow-lg'
                }`}
                style={activeCategory === categoryValue ? { backgroundColor: '#EA2E00' } : {}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {categoryLabel}
              </motion.button>
            );
          })}
        </motion.div>

        {/* 프로젝트 그리드 */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card hover3d className="h-full flex flex-col">
                  {/* 프로젝트 이미지 */}
                  <motion.div
                    className="relative aspect-video rounded-2xl overflow-hidden mb-4 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(240, 231, 214, 0.3)' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* 이미지 플레이스홀더 */}
                    <div className="text-6xl">{project.image}</div>
                    {/* 실제 이미지 사용 시:
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    */}

                    {/* 호버 오버레이 */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-black transition-colors"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#EA2E00';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'white';
                          e.currentTarget.style.color = 'black';
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <HiExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-black transition-colors"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#EA2E00';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'white';
                          e.currentTarget.style.color = 'black';
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <HiCode className="w-5 h-5" />
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  {/* 프로젝트 정보 */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight">{project.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-1">
                      {language === 'ko' ? project.description.ko : project.description.en}
                    </p>

                    {/* 태그 */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs rounded-full font-medium min-h-[32px] flex items-center"
                          style={{ backgroundColor: 'rgba(234, 46, 0, 0.1)', color: '#EA2E00' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </Section>
  );
}
