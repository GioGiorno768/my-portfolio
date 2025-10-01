"use client";

import { useEffect, useRef, MutableRefObject } from "react";
import Lenis from "@studio-freight/lenis";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // speed scroll (default 1.2)
      smoothWheel: true,
      // smoothTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
// Hook untuk smooth scroll ke element tertentu
export const useLenisScrollTo = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Cari instance Lenis yang sudah ada
    lenisRef.current = (window as any).lenis;
  }, []);

  const scrollTo = (
    target: string | number | HTMLElement,
    options?: {
      offset?: number;
      duration?: number;
      easing?: (t: number) => number;
      immediate?: boolean;
    }
  ) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  };

  return { scrollTo };
};

// Hook untuk listen scroll events
export const useLenisScrollEvent = (callback: (lenis: any) => void) => {
  useEffect(() => {
    const lenis = (window as any).lenis;

    if (lenis) {
      lenis.on("scroll", callback);

      return () => {
        lenis.off("scroll", callback);
      };
    }
  }, [callback]);
};

// Hook untuk stop/start scroll
export const useLenisControl = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = (window as any).lenis;
  }, []);

  const stop = () => lenisRef.current?.stop();
  const start = () => lenisRef.current?.start();

  return { stop, start };
};
