'use client';

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';

type RevealDirection = 'up' | 'left' | 'right';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: RevealDirection;
  className?: string;
  style?: CSSProperties;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  style,
}: ScrollRevealProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cssClass =
      direction === 'left'  ? 'reveal-left'  :
      direction === 'right' ? 'reveal-right' :
      'reveal';

    el.classList.add(cssClass);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => el.classList.add('visible'), delay);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
