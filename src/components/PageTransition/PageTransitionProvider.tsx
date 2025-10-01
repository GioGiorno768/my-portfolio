// components/PageTransitionProvider.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Curtain from "./Curtain";

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const initialMount = useRef(true);

  useEffect(() => {
    // Only trigger transition on subsequent route changes, not initial load
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }

    setIsTransitioning(true); // Mulai transisi penutupan

    // Setelah durasi penutupan curtain, kita akan mereset state
    // dan biarkan AnimatePresence mengelola pembukaan curtain
    const timer = setTimeout(() => {
      setIsTransitioning(false); // Selesai transisi penutupan
    }, 2000); // Sesuaikan dengan durasi transisi Curtain (0.8s)

    return () => clearTimeout(timer);
  }, [pathname]);

  console.log(isTransitioning);

  return (
    <>
      {/* Initial overlay for the very first page load */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-black z-[99]"
        initial={{ y: 0 }}
        animate={{
          y: "-100%",
          transition: { delay: 0.5, duration: 0.8 },
        }}
        exit={{ y: "-100%" }} // Ensure it fully fades out if somehow unmounted
      />

      {/* Main content wrapped with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname} // Keying by pathname is crucial for AnimatePresence
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.5 } }} // Tunggu curtain selesai menutup
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Curtain for subsequent page transitions */}
      {isTransitioning && (
        <AnimatePresence>
          <Curtain />
        </AnimatePresence>
      )}
    </>
  );
}
