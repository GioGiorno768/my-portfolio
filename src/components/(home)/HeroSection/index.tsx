// app/components/HeroSection/index.tsx
"use client";

import { useRef } from "react";
import { motion as m, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import SplitText from "@/components/TextEfek/SplitText";

// Interface untuk props component
interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  // Refs untuk DOM elements
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const background = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const smoothY = useSpring(titleY, {
    stiffness: 150,
    mass: 0.2,
  });

  const smoothBackground = useSpring(background, {
    stiffness: 150,
    mass: 0.2,
  });

  return (
    <>
      {/* Hero Section */}
      <m.section
        ref={titleRef}
        className={`relative w-full h-[110vh] overflow-hidden md:text-[10px] text-[3.5px] ${className}`}
      >
        {/* Background Image dengan parallax effect */}
        <div className="w-[90vw] relative m-auto h-full flex flex-col items-center lg:justify-between justify-end">
          {/* <Nav /> */}
          <div className="md:z-[1] z-[5] md:static mt-[4em] absolute bottom-[60em] w-fit font-figtree text-blackSemu overflow-hidden">
            <m.div
              initial={{ y: 250 }}
              animate={{ y: 0 }}
              transition={{
                delay: 1,
                duration: 1.5,
                ease: [0.457, 0.343, 0.108, 1.035],
              }}
              className="lg:text-[55em] text-[40em] text-blackSemu md:leading-none leading-none font-normal tracking-tight font-league"
            >
              <h1>KEVIN</h1>
            </m.div>
            <m.div
              initial={{ y: 250 }}
              animate={{ y: 0 }}
              transition={{
                delay: 1.5,
                duration: 1.5,
                ease: [0.457, 0.343, 0.108, 1.035],
              }}
              className="flex w-full md:-mt-[1.8em] justify-between items-center lg:text-[4em] text-[6em]  uppercase font-league "
            >
              <h2 className="ms-[1.3vw]">FullStack</h2>
              <h2 className="me-[.4vw]">Developer</h2>
            </m.div>
          </div>
          <m.div
            initial={{ y: 250 }}
            animate={{ y: 0 }}
            transition={{
              delay: 1,
              duration: 1.5,
              ease: [0.457, 0.343, 0.108, 1.035],
            }}
            className="w-full hidden  lg:flex justify-between mb-[10em] z-[10] lg:text-[10px] text-[7px] "
          >
            <div className="flex gap-[1vw] ">
              <Link
                href="https://www.linkedin.com/in/kevinragil/"
                target="_blank"
              >
                <span className="mdi--linkedin w-[2.5em] h-[2.5em]"></span>
              </Link>
              <Link href={"https://github.com/GioGiorno768"} target="_blank">
                <span className="mdi--github w-[2.5em] h-[2.5em]"></span>
              </Link>
              <Link
                href={"https://www.instagram.com/vinvexel/"}
                target="_blank"
              >
                <span className="mdi--instagram w-[2.5em] h-[2.5em]"></span>
              </Link>
            </div>
            <span className="text-[2em] text-blackSemu font-figtree">
              ©2025 Kevin
            </span>
          </m.div>
        </div>
        <m.div
          style={{ y: smoothBackground }}
          initial={{ y: 250 }}
          animate={{ y: 0 }}
          transition={{
            delay: 2,
            duration: 1.5,
            ease: [0.457, 0.343, 0.108, 1.035],
          }}
          className="absolute lg:left-[18em] lg:-top-[2em] lg:w-[80em] lg:h-[80em] w-[100em] h-[100em] -left-[20em] bottom-[70em] rounded-full bg-radial from-[#D91E94]/50 via-[#EF5FC6]/20 to-70% to-transparent blur-lg"
        ></m.div>
        <m.div
          style={{ y: smoothBackground }}
          initial={{ y: 250 }}
          animate={{ y: 0 }}
          transition={{
            delay: 2,
            duration: 1.5,
            ease: [0.457, 0.343, 0.108, 1.035],
          }}
          className="absolute lg:right-[18em] -z-[1] lg:-bottom-[20em] lg:w-[80em] lg:h-[80em] w-[100em] h-[100em] bottom-[100em] -right-[30em] rounded-full bg-radial from-[#C91ED9]/50 via-[#D75FEF]/20 to-70% to-transparent blur-lg"
        ></m.div>
        <m.div
          style={{ y: smoothBackground }}
          initial={{ y: 250 }}
          animate={{ y: 0 }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: [0.457, 0.343, 0.108, 1.035],
          }}
          className="absolute lg:right-[35em] lg:-z-[1] z-[3] lg:-bottom-[40em] lg:w-[80em] lg:h-[80em] w-[100em] h-[100em] bottom-[70em] -right-[40em] rounded-full bg-radial from-[#1EB0D9]/50 via-[#5FBDEF]/20 to-70% to-transparent blur-lg"
        ></m.div>
        <m.div
          style={{ y: smoothY }}
          initial={{ y: 250 }}
          animate={{ y: 0 }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: [0.457, 0.343, 0.108, 1.035],
          }}
          className="absolute z-[2] right-0  md:right-[2.5vw] w-[100%] m-auto h-[200%] md:-top-[12vw] -top-[60vw]"
        >
          <img
            src="/images/parallax/person-hero.png"
            alt="hero"
            className="contrast-[1.1] w-full h-full saturate-0 object-cover "
          />
        </m.div>
        <div className="w-full absolute z-[8] bottom-0 h-[20em] bg-gradient-to-t from-white to-transparent"></div>
      </m.section>
    </>
  );
};

export default HeroSection;
