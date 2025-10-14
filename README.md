# 🎨 Modern Portfolio Website

Next.js 14와 TypeScript로 구축한 모던하고 인터랙티브한 개인 포트폴리오 웹사이트입니다.

## ✨ 주요 기능

### 🎯 디자인 & UX
- ✅ **모던한 UI**: 글래스모피즘과 그라데이션 효과
- ✅ **다크/라이트 모드**: 시스템 설정 자동 감지 및 수동 전환
- ✅ **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 지원
- ✅ **부드러운 애니메이션**: Framer Motion을 활용한 인터랙티브 애니메이션

### 📱 섹션 구성
1. **Home**: 애니메이션된 히어로 섹션과 CTA
2. **About Me**: 프로필 소개 및 기술 스택
3. **Experience**: 타임라인 형태의 경력 사항
4. **Projects**: 카테고리 필터링이 가능한 프로젝트 갤러리
5. **Resume**: 이력서 정보 및 다운로드

### 🎭 인터랙션
- 스크롤 진행률 표시
- 네비게이션 메뉴 호버 효과
- 프로젝트 카드 3D 변형 효과
- 페이지 요소 순차 등장 애니메이션
- 배경 그라데이션 애니메이션

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Font**: Geist Sans & Geist Mono

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 프로덕션 빌드
```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 루트 레이아웃 (메타데이터, 테마 프로바이더)
│   ├── page.tsx             # 메인 페이지
│   └── globals.css          # 글로벌 스타일
├── components/
│   ├── ui/                  # 재사용 가능한 UI 컴포넌트
│   │   ├── Button.tsx       # 버튼 컴포넌트
│   │   ├── Card.tsx         # 카드 컴포넌트
│   │   ├── Container.tsx    # 컨테이너
│   │   ├── Section.tsx      # 섹션 래퍼
│   │   ├── Navbar.tsx       # 네비게이션 바
│   │   ├── ThemeToggle.tsx  # 테마 토글 버튼
│   │   └── Footer.tsx       # 푸터
│   └── sections/            # 페이지 섹션
│       ├── Hero.tsx         # 히어로 섹션
│       ├── About.tsx        # About Me 섹션
│       ├── Experience.tsx   # 경력 섹션
│       ├── Projects.tsx     # 프로젝트 섹션
│       └── Resume.tsx       # 이력서 섹션
├── contexts/
│   └── ThemeContext.tsx     # 테마 컨텍스트
└── public/
    └── images/              # 이미지 파일
```

## 🎨 커스터마이징 가이드

### 1. 개인 정보 수정

#### About 섹션 (components/sections/About.tsx)
- 프로필 이미지 교체
- 소개글 수정
- 기술 스택 업데이트

#### Experience 섹션 (components/sections/Experience.tsx)
```typescript
const experiences = [
  {
    company: '회사명',
    logo: '🚀', // 이모지 또는 이미지
    position: '직책',
    period: '2022.03 - 현재',
    description: '업무 설명',
    achievements: ['성과 1', '성과 2'],
    skills: ['기술1', '기술2'],
  },
  // ...
];
```

#### Projects 섹션 (components/sections/Projects.tsx)
```typescript
const projects = [
  {
    title: '프로젝트명',
    category: 'Web App',
    description: '프로젝트 설명',
    image: '🛒', // 이모지 또는 이미지 경로
    tags: ['React', 'TypeScript'],
    demoLink: '#',
    githubLink: '#',
  },
  // ...
];
```

#### Resume 섹션 (components/sections/Resume.tsx)
- 연락처 정보
- 학력 사항
- 자격증
- 언어 능력

### 2. 테마 색상 변경 (app/globals.css)
```css
:root {
  --primary: #6366f1;     /* 메인 색상 */
  --secondary: #ec4899;   /* 보조 색상 */
  --accent: #8b5cf6;      /* 강조 색상 */
}
```

### 3. 메타데이터 수정 (app/layout.tsx)
```typescript
export const metadata: Metadata = {
  title: "당신의 이름 | 포트폴리오",
  description: "당신의 소개",
  // ...
};
```

### 4. 소셜 링크 변경 (components/ui/Footer.tsx)
```typescript
const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  // ...
];
```

## 🖼️ 이미지 추가 방법

### 프로필 이미지
1. `public/images/` 폴더에 이미지 저장
2. components/sections/About.tsx에서 주석 해제:
```tsx
<Image
  src="/images/profile.jpg"
  alt="Profile"
  fill
  className="object-cover"
/>
```

### 프로젝트 이미지
1. `public/images/projects/` 폴더에 이미지 저장
2. components/sections/Projects.tsx에서:
```typescript
const projects = [
  {
    // ...
    image: '/images/projects/project1.jpg',
  },
];
```

## 🚀 배포

### Vercel (추천)
1. GitHub에 프로젝트 푸시
2. [Vercel](https://vercel.com)에 로그인
3. 프로젝트 임포트
4. 자동 배포 완료!

### Netlify
```bash
npm run build
```
`out` 폴더를 Netlify에 드래그 앤 드롭

## 📝 TODO

배포 전 체크리스트:
- [ ] 개인 정보 (이름, 이메일, 전화번호) 업데이트
- [ ] 프로필 이미지 추가
- [ ] 프로젝트 정보 및 이미지 업데이트
- [ ] 경력 사항 수정
- [ ] 소셜 미디어 링크 연결
- [ ] 이력서 PDF 파일 추가
- [ ] 메타데이터 및 SEO 최적화 확인
- [ ] 모바일 반응형 테스트

## 🤝 기여

이슈나 풀 리퀘스트는 언제나 환영합니다!

## 📄 라이선스

MIT License

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
