"use client";

import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.classList.contains("cursor-hover") ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 w-[2.5em] h-[2.5em] bg-white rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-out mix-blend-difference hidden lg:block`}
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${
            mousePosition.y - 16
          }px) scale(${isHovering ? 1.8 : 1})`,
        }}
      />

      {/* Cursor trail/ring */}
      {/* <div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-40 transition-all duration-300 ease-out mix-blend-difference opacity-60"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${
            mousePosition.y - 16
          }px) scale(${isHovering ? 1.8 : 1})`,
        }}
      /> */}
    </>
  );
};

export default CustomCursor;