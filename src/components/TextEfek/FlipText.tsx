"use client";
import { easeInOut, motion } from "framer-motion";

const FlipText = ({
  children,
  duration = 0.5,
  stagger = 0.025,
  className = "",
}: {
  children: string;
  duration?: number;
  stagger?: number;
  className?: string;
}) => {
  // Parent variants
  const container = {
    initial: {},
    inView: {
      transition: {
        staggerChildren: stagger, // biar huruf muncul satu-satu
      },
    },
  };

  // Child variants
  const top = {
    initial: { y: 0 },
    inView: { y: "-100%" },
  };

  const bottom = {
    initial: { y: "100%" },
    inView: { y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="initial"
      whileInView="inView"
      viewport={{ once: false, amount: 0.3 }}
      className={`relative block overflow-hidden whitespace-nowrap font-black uppercase ${className}`}
      style={{ lineHeight: 0.8 }}
    >
      {/* Layer teks awal */}
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={`top-${i}`}
            variants={top}
            transition={{
              duration: duration,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>

      {/* Layer teks baru */}
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={`bottom-${i}`}
            variants={bottom}
            transition={{
              duration: duration,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default FlipText;
