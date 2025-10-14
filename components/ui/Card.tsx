import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover3d?: boolean;
}

/**
 * 글래스모피즘 효과가 적용된 카드 컴포넌트
 * hover3d 옵션으로 3D 변형 효과를 추가할 수 있음
 */
export default function Card({ children, className = '', hover3d = false }: CardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (hover3d) {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          rotateX: 5,
          transition: { duration: 0.3 },
        }}
        className={`glass rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 ${className}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={`glass rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
