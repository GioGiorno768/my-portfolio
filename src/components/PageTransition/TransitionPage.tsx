// components/PageTransition.tsx
'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const TransitionPage = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`page-content ${isVisible ? 'page-enter-active' : 'page-enter'}`}>
      {children}
    </div>
  );
};