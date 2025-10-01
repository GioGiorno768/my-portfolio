// Advanced: Custom Transition Hook with different animations
// hooks/useCustomTransition.tsx
"use client";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

type TransitionType = "slide" | "fade" | "scale" | "clip" | "curtain";

export const useCustomTransition = (type: TransitionType = "slide") => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateWithTransition = useCallback(
    (path: string) => {
      setIsTransitioning(true);

      // Add specific transition class
      document.body.classList.add(`${type}-transition`);

      const transitionDuration = type === "clip" ? 600 : 300;

      setTimeout(() => {
        router.push(path);

        setTimeout(() => {
          setIsTransitioning(false);
          document.body.classList.remove(`${type}-transition`);
        }, 100);
      }, transitionDuration);
    },
    [router, type]
  );

  return { navigateWithTransition, isTransitioning };
};
