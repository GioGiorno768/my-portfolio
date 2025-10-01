import React from "react";
import { motion, Variants } from "framer-motion";

// TypeScript interfaces
interface SplitTextProps {
  children: string;
  className?: string;
  animation?:
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "fade"
    | "scale"
    | "rotate"
    | "blur"
    | "upTag"
    | "downTag"
    | "rightTag"
    | "leftTag";
  stagger?: number;
  duration?: number;
  delay?: number;
  viewport?: {
    once?: boolean;
    amount?: number;
    margin?: string;
  };
  trigger?: "viewport" | "mount";
}

// Split Text Component with various animation options
const SplitText: React.FC<SplitTextProps> = ({
  children,
  className = "",
  animation = "slideUp",
  stagger = 0.05,
  duration = 0.5,
  delay = 0,
  viewport = { once: true, amount: 0.3 },
  trigger = "viewport",
}) => {
  // Different animation variants
  const animationVariants: Record<string, { hidden: any; visible: any }> = {
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    upTag: {
      hidden: { y: 500 },
      visible: { y: 0 },
    },
    downTag: {
      hidden: { y: -50 },
      visible: { y: 0 },
    },
    rightTag: {
      hidden: { x: 50 },
      visible: { x: 0 },
    },
    leftTag: {
      hidden: { x: -50 },
      visible: { x: 0 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 },
    },
    rotate: {
      hidden: { opacity: 0, rotateY: 90 },
      visible: { opacity: 1, rotateY: 0 },
    },
    blur: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: animationVariants[animation].hidden,
    visible: {
      ...animationVariants[animation].visible,
      transition: {
        duration: duration,
        ease: "easeOut" as const,
      },
    },
  };

  const words = children.split(" ");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={trigger === "mount" ? "visible" : "hidden"}
      whileInView={trigger === "viewport" ? "visible" : undefined}
      viewport={trigger === "viewport" ? viewport : undefined}
      className={className}
    >
      {words.map((word, wordIndex) => (
        <span 
          key={wordIndex} 
          className="inline-block overflow-hidden leading-none"
        >
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterVariants}
              className="inline-block leading-none"
            >
              {letter}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.div>
  );
};

export default SplitText;