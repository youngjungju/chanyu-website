import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * 반응형 컨테이너 컴포넌트
 * 페이지 콘텐츠를 중앙 정렬하고 최대 너비를 제한함
 */
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
