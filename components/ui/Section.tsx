import { ReactNode, CSSProperties } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * 섹션 래퍼 컴포넌트
 * 각 페이지 섹션에 일관된 패딩과 스타일을 적용함
 */
export default function Section({ children, id, className = '', style }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`} style={style}>
      <Container>{children}</Container>
    </section>
  );
}
