import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * 재사용 가능한 버튼 컴포넌트
 * 다양한 스타일 변형과 크기를 지원하며 호버 애니메이션이 포함됨
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'text-white shadow-lg hover:shadow-xl',
    secondary: 'text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const getVariantStyle = () => {
    if (variant === 'primary') {
      return { backgroundColor: '#EA2E00' };
    } else if (variant === 'secondary') {
      return { backgroundColor: '#EA2E00' };
    } else if (variant === 'outline') {
      return {
        borderColor: '#EA2E00',
        color: '#EA2E00',
        backgroundColor: 'transparent'
      };
    }
    return {};
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      style={getVariantStyle()}
      {...props}
    >
      {children}
    </motion.button>
  );
}
