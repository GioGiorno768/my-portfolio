// components/TransitionWrapper.tsx (untuk Layout)
'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const TransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (pathname !== currentPath) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentPath(pathname);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }
  }, [pathname, currentPath]);

  return (
    <>
      {/* Transition Overlay */}
      <div className={`transition-overlay ${isTransitioning ? 'active' : ''}`} />
      
      {/* Page Content */}
      <main className={`main-content ${isTransitioning ? 'transitioning' : ''}`}>
        {children}
      </main>
    </>
  );
};
