// hooks/usePageTransition.tsx
"use client";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

export const usePageTransition = () => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = useCallback(
    (path: string) => {
      if (isTransitioning) return;

      setIsTransitioning(true);

      // Start exit animation
      document.body.classList.add("page-transitioning");

      setTimeout(() => {
        router.push(path);

        // Reset after navigation
        setTimeout(() => {
          setIsTransitioning(false);
          document.body.classList.remove("page-transitioning");
        }, 100);
      }, 300);
    },
    [router, isTransitioning]
  );

  return { navigateTo, isTransitioning };
};
