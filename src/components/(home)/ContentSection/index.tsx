"use client";

import MagnetButton from "@/components/Button/ButtonMagnet";
import MarqueeElement from "@/components/Marque/MarqueElement";
import FlipText from "@/components/TextEfek/FlipText";
import {
  motion,
  scale,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ContentSection() {
  const marque = [
    { image: "/images/project/sekartaji.webp", title: "sekartaji" },
    { image: "/images/project/sepatu.webp", title: "sepatu" },
    { image: "/images/project/porta.webp", title: "porta" },
    { image: "/images/project/kanya.webp", title: "kanya" },
    { image: "/images/project/agus.webp", title: "agus" },
  ];

  const creative = [
    {
      title: "Design",
      content:
        "Berpengalaman dalam desain web dengan fokus pada tampilan yang konsisten, estetis, dan fungsional.",
      image: "/images/parallax/home-creative1.jpg",
    },
    {
      title: "Development",
      content:
        "Membangun website modern dengan desain selaras, animasi halus, dan interaksi menarik.",
      image: "/images/parallax/experience_2.webp",
    },
    {
      title: "Full Package",
      content:
        "Merancang dan mengembangkan solusi web yang efektif, disesuaikan dengan kebutuhan setiap proyek.",
      image: "/images/parallax/experience_1.webp",
    },
  ];

  // === Title parallax ===
  const titleRef2 = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress: buttonScroll } = useScroll({
    target: titleRef2,
    offset: ["start end", "end start"],
  });
  const titleY2 = useTransform(buttonScroll, [0, 1], [0, 100]);
  const smoothY2 = useSpring(titleY2, {
    stiffness: 150,
    mass: 0.2,
  });

  return (
    <main className="py-[7vw] w-full text-[8px] md:text-[10px] relative z-[99] bg-white ">
      <div>
        {/* Section Title */}
        <motion.section ref={titleRef2} className="relative m-auto w-[90%]">
          {/* <hr className="hidden lg:block" /> */}
          <div className="font-manrope flex justify-between items-center px-[5vw] lg:py-[10em] py-[8em] ">
            <div className="w-full m-auto lg:m-0 md:w-[45%] text-[1.8em] text-center uppercase ">
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0)" }}
                transition={{
                  duration: 1,
                  ease: [0.457, 0.343, 0.108, 1.035],
                }}
              >
                Berawal dari minat saya di dunia desain visual, saya berkembang
                ke arah pengembangan web agar bisa menggabungkan kreativitas
                dengan teknologi.
              </motion.p>
            </div>
            <motion.div style={{ x: smoothY2 }} className=" ">
              <MagnetButton
                strength={0.4}
                className="absolute w-[6.5em] h-[6.5em] z-[99] right-[3em] lg:block hidden text-[4.5em] bg-blackSemu text-white font-rethink rounded-full"
              >
                <MagnetButton strength={0.3} className="w-full h-full">
                  <Link
                    href={"/about"}
                    className="w-full h-full flex justify-center items-center "
                  >
                    <div>About</div>
                  </Link>
                </MagnetButton>
              </MagnetButton>
            </motion.div>
          </div>
          <hr className="hidden lg:block" />
        </motion.section>

        {/* Mobile Button */}
        <section className="relative m-auto w-[90%] my-[3em] flex items-center lg:hidden overflow-hidden">
          <hr className="absolute top-1/2 bg-blackSemu w-full" />
          <MagnetButton
            strength={0.4}
            className="w-[8em] h-[8em] relative z-[10] text-[2.5em] ms-[2em] bg-blackSemu text-white font-rethink rounded-full"
          >
            <MagnetButton strength={0.3} className="w-full h-full">
              <Link
                href={"/about"}
                className="w-full h-full flex justify-center items-center "
              >
                <div>About</div>
              </Link>
            </MagnetButton>
          </MagnetButton>
        </section>

        {/* Creative Section */}
        <section className="w-full md:mt-[40em] mt-[15em] text-blackSemu font-manrope overflow-hidden">
          <div className="flex m-auto w-[90%] justify-between items-start md:items-center text-blackSemu font-manrope flex-col md:flex-row lg:mb-[15em] mb-[7em]">
            <div className="w-full md:w-[37%] lg:mb-0 mb-[2em]">
              <h2 className="md:text-[11em] text-[7em] leading-[.9em] tracking-tighter font-bold flex flex-col uppercase">
                <FlipText>more</FlipText>
                <FlipText>creative.</FlipText>
              </h2>
            </div>
            <div className="lg:w-[40%] w-[100%] lg:text-end text-start flex flex-col justify-start lg:justify-end items-start">
              <div className="w-full hidden lg:block  pb-[1em]">
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
                className="w-full block bg-blackSemu h-[0.2em] lg:origin-right origin-left"
              />
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0)" }}
                transition={{
                  duration: 1,
                  ease: [0.457, 0.343, 0.108, 1.035],
                }}
                className="text-[1.6em] mt-[.5em] uppercase"
              >
                Menghadirkan solusi digital yang kreatif, fungsional, dan
                berorientasi pada pengalaman pengguna.
              </motion.p>
            </div>
          </div>

          {/* Map Creative Items */}
          {creative.map((item, index) => (
            <div
              key={index}
              className="flex justify-between m-auto w-[90%] items-end flex-col md:flex-row md:mt-0 mt-[6em]"
            >
              {/* Teks */}
              <div
                className={`w-full md:w-[45%] lg:mb-[3em] mb-[2.5em] ${
                  index % 2 === 1 && "md:order-2"
                }`}
              >
                <div
                  className={`flex items-center ${
                    index % 2 === 1
                      ? "lg:border-r-[.4em] lg:justify-end border-l-[.4em] lg:border-l-0"
                      : "border-l-[.4em] justify-start"
                  } border-blackSemus mb-[2em]`}
                >
                  <h3 className="lg:text-[3em] text-[3em] font-manrope leading-[1em] px-[.4em] tracking-tight font-medium uppercase">
                    {item.title}
                  </h3>
                </div>
                <hr className="w-full mt-[2em] mb-[1em] block" />
                <p
                  className={`lg:text-[1.6em] text-[1.4em] font-manrope font-medium text-[#808080] ${
                    index % 2 === 1 ? "lg:text-right text-left" : "text-left"
                  }`}
                >
                  {item.content}
                </p>
              </div>

              {/* Gambar dengan Parallax */}
              <ParallaxImage src={item.image} order={index % 2 === 1} />
            </div>
          ))}

          {/* Marquee */}
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
        </section>
      </div>
    </main>
  );
}

/* ===== Parallax Image Component ===== */
function ParallaxImage({ src, order }: { src: string; order?: boolean }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const smoothY = useSpring(y, { stiffness: 150, mass: 0.2 });

  return (
    <div
      ref={ref}
      className={`w-full md:w-[45vw] md:h-[43vw] h-[120vw] overflow-hidden ${
        order && "md:order-1"
      }`}
    >
      <motion.div
        style={{ y: smoothY }}
        className="relative w-full h-full origin-center -translate-y-[30%] scale-[2]"
      >
        <Image src={src} fill alt="design" className="object-cover" />
      </motion.div>
    </div>
  );
}
