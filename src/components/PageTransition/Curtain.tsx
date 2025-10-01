// components/Curtain.tsx
"use client";

import { motion } from "framer-motion";

export default function Curtain() {
  return (
    <>
      {/* Curtain 1 */}
      <motion.div
        className="fixed top-0 left-0 w-1/2 h-screen z-[9999] bg-black origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      {/* Curtain 2 (Mirror for a split effect) */}
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-screen z-[9999] bg-black origin-right"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
}
