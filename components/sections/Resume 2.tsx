'use client';

import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiPhone, HiLocationMarker, HiAcademicCap, HiStar } from 'react-icons/hi';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const resumeData = {
  contact: {
    email: 'your.email@example.com',
    phone: '+82 10-1234-5678',
    location: '서울, 대한민국',
  },
  education: [
    {
      school: '한국대학교',
      degree: '컴퓨터공학 학사',
      period: '2015 - 2019',
      description: '소프트웨어 개발 및 알고리즘 전공',
    },
  ],
  certifications: [
    '정보처리기사',
    'AWS Certified Developer',
    'Google UX Design Certificate',
  ],
  languages: [
    { name: '한국어', level: '원어민' },
    { name: '영어', level: '비즈니스' },
  ],
};

/**
 * Resume 섹션
 * 이력서 다운로드 및 주요 정보 요약 표시
 */
export default function Resume() {
  const handleDownload = () => {
    // PDF 다운로드 로직
    alert('이력서 다운로드 기능은 실제 PDF 파일을 준비한 후 구현해주세요.');
  };

  return (
    <Section id="resume" className="bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        {/* 섹션 제목 */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Resume
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              이력서 및 연락처
            </p>
            <Button size="lg" onClick={handleDownload}>
              <HiDownload className="inline mr-2" />
              이력서 다운로드
            </Button>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <HiMail className="text-indigo-500" />
              연락처
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-indigo-500/10 text-indigo-500">
                    <HiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">이메일</p>
                    <p className="font-medium">{resumeData.contact.email}</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-purple-500/10 text-purple-500">
                    <HiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">전화번호</p>
                    <p className="font-medium">{resumeData.contact.phone}</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-pink-500/10 text-pink-500">
                    <HiLocationMarker className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">위치</p>
                    <p className="font-medium">{resumeData.contact.location}</p>
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
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <HiAcademicCap className="text-indigo-500" />
              학력
            </h3>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <Card key={index}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold mb-1">{edu.school}</h4>
                      <p className="text-indigo-500 font-medium mb-2">
                        {edu.degree}
                      </p>
                      <p className="text-foreground/70 text-sm">
                        {edu.description}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 자격증 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <HiStar className="text-indigo-500" />
                자격증
              </h3>
              <Card>
                <ul className="space-y-3">
                  {resumeData.certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* 언어 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">언어</h3>
              <Card>
                <div className="space-y-4">
                  {resumeData.languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-sm text-foreground/60">
                          {lang.level}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                          initial={{ width: 0 }}
                          whileInView={{ width: lang.level === '원어민' ? '100%' : '80%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
