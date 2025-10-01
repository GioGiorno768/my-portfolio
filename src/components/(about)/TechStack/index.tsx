"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Link from "next/link";
import { ScrollParallax } from "react-just-parallax";
import Image from "next/image";
import MagnetButton from "@/components/Button/ButtonMagnet";
import FlipText from "@/components/TextEfek/FlipText";

export default function TechStack() {
  const stack = [
    {
      name: "HTML",
      logo: "iconoir--html5",
    },
    {
      name: "CSS",
      logo: "iconoir--css3",
    },
    {
      name: "Javascript",
      logo: "teenyicons--javascript-outline",
    },
    {
      name: "Tailwind",
      logo: "teenyicons--tailwind-outline",
    },
    {
      name: "Typescript",
      logo: "teenyicons--typescript-outline",
    },
    {
      name: "Git",
      logo: "iconoir--git",
    },
    {
      name: "Github",
      logo: "iconoir--github",
    },
    {
      name: "Next Js",
      logo: "tabler--brand-nextjs",
    },
    {
      name: "React Js",
      logo: "teenyicons--react-outline",
    },
    {
      name: "PHP",
      logo: "la--php",
    },
    {
      name: "Laravel",
      logo: "mdi--laravel",
    },
    {
      name: "MySql",
      logo: "lineicons--mysql",
    },
    {
      name: "Firebase",
      logo: "streamline-logos--firebase-logo",
    },
    {
      name: "Motion",
      logo: "tabler--brand-framer-motion",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end start"],
    // "start center" = pas bagian atas elemen nyentuh tengah viewport
    // "end center" = pas bagian bawah elemen nyentuh tengah viewport
  });
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);
  const smoothScale = useSpring(scale, { stiffness: 150, mass: 0.2 });
  return (
    <section
      ref={ref}
      className=" relative h-[300vh] text-[8px] lg:text-[10px]  -z-[2]"
    >
      <div className="absolute z-[1] top-0 left-0 w-full h-full bg-[#D9D9D9]/20"></div>
      <div className="sticky bg-white top-0 left-0 h-screen flex items-center justify-center overflow-hidden ">
        <div className="absolute lg:left-[30em] lg:top-[6em] -left-[15em] lg:w-[55em] lg:h-[55em] w-[45em] h-[45em] rounded-full bg-radial from-[#D91E94]/40 via-[#EF5FC6]/20 to-70% to-transparent blur-lg"></div>
        <div className="absolute lg:right-[30em] -z-[1] lg:bottom-[6em] -right-[15em] bottom-[8em] lg:w-[55em] lg:h-[55em] w-[45em] h-[45em] rounded-full bg-radial from-[#1EB0D9]/50 via-[#5FBDEF]/20 to-70% to-transparent blur-lg"></div>
      </div>
      <motion.div
        style={{ scale: smoothScale, opacity }}
        className="py-[5em] -mt-[100vh] z-[2] w-[90%] m-auto sticky top-0 overflow-hidden"
      >
        <div className="flex w-full justify-between items-end md:items-center text-blackSemu font-manrope mb-[4vw] flex-col md:flex-row">
          <div className="w-full md:w-fit lg:order-2 lg:mb-0 mb-[2em]">
            <h2 className="lg:text-[11em] text-[6.5em] leading-[.9em] tracking-tighter font-bold uppercase ">
              <FlipText>About</FlipText>
            </h2>
            <h2 className="lg:text-[11em] text-[6.5em] leading-[.9em] tracking-tighter font-bold uppercase ">
              <FlipText>Techstack.</FlipText>
            </h2>
          </div>
          {/* <hr className="w-full mt-[2em] mb-[1em] lg:hidden block" /> */}
          <div className="lg:w-[30%] w-[100%] lg:text-start text-start flex flex-col justify-start items-start">
            <div className="w-full hidden lg:block pb-[1em]">
              <FlipText
                duration={0.8}
                stagger={0}
                className="text-[2em] font-semibold uppercase"
              >
                creative
              </FlipText>
            </div>
            <motion.hr
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                duration: 1.8,
                ease: [0.457, 0.343, 0.108, 1.035],
              }}
              viewport={{ amount: 0.4 }}
              className="w-full block bg-blackSemu h-[0.15em] origin-left"
            />
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 1, ease: [0.457, 0.343, 0.108, 1.035] }}
              className="text-[1.6em] mt-[.5em] uppercase"
            >
              Beberapa TechStack yang saya kuasai dalam membangun website
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col lg:w-[80%] w-[90%] m-auto items-start lg:mt-[8em] mt-[5 em]">
          <div className="flex lg:gap-[7em] gap-[2em] flex-wrap">
            {stack.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-[1em] justify-center items-center rounded-full"
              >
                <MagnetButton
                  strength={0.4}
                  className="lg:w-[9em] lg:h-[9em] w-[7em] h-[7em] bg-gray-700/10 rounded-full"
                >
                  <MagnetButton
                    strength={0.3}
                    className="w-full h-full flex justify-center items-center rounded-full"
                  >
                    <span
                      className={`${item.logo} lg:w-[5em] lg:h-[5em] w-[3em]  h-[3em] bg-blackSemu`}
                    ></span>
                  </MagnetButton>
                </MagnetButton>
                <span className="text-[1.6em] text-blackSemu">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
