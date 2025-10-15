'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 스크롤 기반 카드 scale 애니메이션
    lenis.on('scroll', () => {
      const cards = document.querySelectorAll('[data-scroll-card]');

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const cardCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;

        // 카드 중심과 화면 중심 사이의 거리
        const distance = Math.abs(cardCenter - screenCenter);
        const maxDistance = windowHeight / 2;

        // 거리에 따라 scale 계산 (가까울수록 크게)
        const scale = Math.max(0.85, 1 - (distance / maxDistance) * 0.15);

        (card as HTMLElement).style.transform = `scale(${scale})`;
      });
    });

    // Navbar 링크 클릭 시 부드러운 스크롤
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const targetElement = document.querySelector(href) as HTMLElement;
          if (targetElement) {
            lenis.scrollTo(targetElement, {
              offset: -80, // navbar 높이만큼 offset
              duration: 1.5,
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
