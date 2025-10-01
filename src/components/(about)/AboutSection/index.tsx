"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import TechStack from "../TechStack";
import Experience from "../Experience";
import MarqueeElement from "@/components/Marque/MarqueElement";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import FlipText from "@/components/TextEfek/FlipText";

export default function AboutSection() {
  const marque = [
    {
      image: "/images/project/sekartaji.webp",
      title: "sekartaji",
    },
    {
      image: "/images/project/sepatu.webp",
      title: "sepatu",
    },
    {
      image: "/images/project/porta.webp",
      title: "porta",
    },
    {
      image: "/images/project/kanya.webp",
      title: "kanya",
    },
    {
      image: "/images/project/agus.webp",
      title: "agus",
    },
  ];
  const aboutRef = useRef(null);
  const { scrollYProgress: scrollDesc } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollDesc, [0, 1], [0, -300]);
  const smoothY = useSpring(y, { stiffness: 150, mass: 0.2 });

  return (
    <>
      <section className="w-full lg:text-[10px] text-[8px]  lg:mb-[25em]">
        <div className="w-[90%] lg:mt-[4em] mt-[6em] m-auto font-manrope space-y-[8em]">
          <div className="w-full lg:mb-[12em] ">
            <motion.div
              initial={{ translateY: 550 }}
              animate={{ translateY: 0 }}
              transition={{
                delay: 1,
                duration: 1.5,
                ease: [0.457, 0.343, 0.108, 1.035],
              }}
              className="flex w-full justify-between lg:items-end items-start text-blackSemu font-manrope flex-col lg:flex-row border-b-[.2em] py-[1.2em]"
            >
              <div className="lg:w-[70%] w-full">
                <h2 className="md:text-[11em] text-[7em] leading-[.9em] tracking-tighter font-bold flex flex-col uppercase">
                  <FlipText>About</FlipText>
                  <FlipText>journey.</FlipText>
                </h2>
              </div>
              <div className="lg:w-[28%] w-full lg:mt-0 text-start pt-[.6vw] uppercase">
                <motion.p
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0)" }}
                  transition={{
                    duration: 1,
                    ease: [0.457, 0.343, 0.108, 1.035],
                  }}
                  className="lg:text-[1.6em] text-[1.4em] mt-[1.5em]"
                >
                  Saya seorang Web Developer fresh graduate yang berfokus pada
                  pengembangan website modern, responsif, dan mudah digunakan.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              initial={{ translateY: 550 }}
              animate={{ translateY: 0 }}
              transition={{
                delay: 1,
                duration: 1.5,
                ease: [0.457, 0.343, 0.108, 1.035],
              }}
              className="py-[1em] flex justify-between font-semibold text-[1.5em] font-manrope uppercase"
            >
              <span>Stories</span>
              <span>Jurney</span>
            </motion.div>
          </div>
          <div ref={aboutRef} className="font-manrope mb-[12em]">
            <motion.div
              initial={{ translateY: 750 }}
              animate={{ translateY: 0 }}
              transition={{
                delay: 1,
                duration: 1.5,
                ease: [0.457, 0.343, 0.108, 1.035],
              }}
              className="flex lg:justify-center justify-start lg:gap-[10em] gap-[5em] lg:items-center items-end flex-col md:flex-row"
            >
              <ParallaxImage src="/images/parallax/person-about.webp" />
              <motion.div
                style={{ y: smoothY }}
                className="lg:w-[35em] w-full relative font-manrope translate-y-[35%] lg:-translate-y-[20%]"
              >
                <span className="bi--arrow-right hidden lg:block w-[3.5em] h-[3.5em] absolute -left-[7em] bg-[#787878]"></span>
                <div className="text-[3em] tracking-tight font-manrope font-medium text-blackSemu leading-[1.3em] uppercase">
                  <h2>Kevin Ragil </h2>
                  <h2>Krisna Dyansyah</h2>
                </div>
                <div className="overflow-hidden transition-all duration-300 mt-[1em]">
                  {/* Header - bisa diklik dan hover effect */}
                  <div
                    // onMouseEnter={() => toggleAccordion(index)}
                    className="w-full pt-[2em] pb-[1.5em] text-left focus:outline-none transition-colors duration-1000 flex justify-between items-center group border-b border-b-[#787878]"
                  >
                    <span className="font-dm text-[2em] font-light text-[#787878]">
                      About Me
                    </span>
                  </div>

                  {/* Content dengan smooth expand/collapse */}
                  <div
                    className={`overflow-hidden transition-discrete pt-[1.5em] duration-1000 ease-in-out 
                           opacity-100
                      `}
                  >
                    <div className="  border-t border-gray-100">
                      <p className="text-gray-700 text-[1.6em]  leading-relaxed">
                        Saya memulai dari dasar front end hingga framework
                        modern seperti React dan Next.js, serta mendalami back
                        end dengan PHP dan Laravel. Lebih dari satu tahun saya
                        belajar secara otodidak, hingga akhirnya mendapat
                        kesempatan internship di KOMDIGI Kabupaten Kediri sambil
                        menempuh studi di Universitas Nusantara PGRI Kediri.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <TechStack />
      <Experience />
      <div className="lg:text-[10px] text-[8px]">
        <div className="w-full relative lg:h-screen h-[90%] overflow-hidden lg:mt-[10em]">
          <div className="absolute lg:left-[30em] top-0 left-[2em] lg:top-[6em] lg:w-[55em] lg:h-[55em] w-[40em] h-[40em] rounded-full bg-radial from-[#D91E94]/40 via-[#EF5FC6]/20 to-70% to-transparent blur-lg"></div>
          <div className="absolute right-[30em] -z-[1] bottom-[6em] lg:w-[55em] lg:h-[55em] w-[40vw] h-[40vw] rounded-full bg-radial from-[#1EB0D9]/50 via-[#5FBDEF]/20 to-70% to-transparent blur-lg"></div>
          <MarqueeElement
            element={marque}
            from={0}
            to={"-100%"}
            className="bg-[#E5E6EB] relative my-[10em] lg:mt-[20em]"
          />
        </div>
      </div>
    </>
  );
}

function ParallaxImage({ src }: { src: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const smoothY = useSpring(y, { stiffness: 150, mass: 0.2 });

  return (
    <div
      ref={ref}
      className={`w-[80%] md:w-[45vw] md:h-[65vw] h-[120vw] overflow-hidden order-2`}
    >
      <motion.div
        style={{ y: smoothY }}
        className="relative w-[100%] h-[100em] scale-[1.5]"
      >
        <Image
          src={src}
          alt="contoh"
          width={0}
          height={0}
          unoptimized
          className="w-auto h-auto"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}
