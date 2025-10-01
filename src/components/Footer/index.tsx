"use client";
import { options } from "@/data/options";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MagnetButton from "../Button/ButtonMagnet";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function Footer() {
  const [time, setTime] = useState("");
  const footerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: footerScroll } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(footerScroll, [0, 1], [800, -600]);
  const x = useTransform(footerScroll, [0, 1], [0, 600]);
  const smoothY = useSpring(y, { stiffness: 150, mass: 0.2 });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Jakarta", // GMT+7
      };
      const formatted = new Intl.DateTimeFormat("en-US", options).format(now);
      setTime(`${formatted} GMT+7`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000); // update tiap detik

    return () => clearInterval(interval);
  }, []);
  return (
    <footer
      ref={footerRef}
      className=" w-full text-[7px] lg:text-[10px] -z-[99] -mt-[100vh] h-[200vh] bg-blackTheme text-white font-poppins font-light"
    >
      <div className="sticky top-0">
        <motion.div
          style={{ y }}
          className="h-screen w-[90%] m-auto overflow-hidden translate-y-[20%] flex flex-col justify-around items-center lg:static py-[5em]"
        >
          <div className="lg:flex  w-full justify-between items-end md:items-center text-white font-manrope mb-[1.5vw] flex-col md:flex-row lg:border-b-[.2em] pb-[3em] lg:border-white">
            <div className="w-[90%] lg:w-[35%] space-y-[.2em]">
              <h2 className="lg:text-[11em] text-[7em] leading-[.9em] tracking-tight font-bold flex flex-col uppercase">
                <div>
                  <span>let's </span>
                  <span className="lg:hidden inline-block">work</span>
                </div>
                <span className="hidden lg:block">Work</span>
                <span>together</span>
              </h2>
              <div className="w-full lg:text-[1.6em] text-[2em] font-manrope uppercase lg:hidden block">
                <p>
                  Mari jalin kerjasama dalam membangun project sesuai impian
                </p>
              </div>
            </div>
            <div className="mt-[2em] me-[40em] lg:mt-0  text-start lg:flex flex-col justify-start lg:justify-end items-start  hidden">
              <div className=" w-full border-b-[.2em]   border-white pb-[.8em]">
                <span className="text-[2.4em] font-semibold uppercase">
                  Network
                </span>
              </div>
              <div className="text-[2em] pe-[3em] mt-[.8em] text-whiteSemu flex flex-col">
                <Link
                  type="whatsapp"
                  href={
                    "https://wa.me/6289635650954?text=Halo%20brok%2C%20gue%20mau%20nanya%20nih!"
                  }
                  target="_blank"
                  className="hover:text-white hover:-translate-y-[.2em] transition-all duration-200 ease-in-out"
                >
                  +62 89 635 650 954
                </Link>
                <Link
                  type="email"
                  href={
                    "mailto:namalu@email.com?subject=Halo%20Brok&body=Gue%20mau%20nanya%20tentang..."
                  }
                  target="_blank"
                  className="hover:text-white hover:-translate-y-[.2em] transition-all duration-200 ease-in-out"
                >
                  kevinragil768@gmail.com
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full relative flex justify-end lg:justify-between items-start font-manrope ">
            <hr className="absolute top-1/2 left-0 w-full lg:hidden" />
            <div className="w-[25%] text-[1.6em] font-manrope uppercase lg:block hidden">
              <p>Mari jalin kerjasama dalam membangun project sesuai impian</p>
            </div>
            <motion.div 
              style={{ x }}
              
            >
              <MagnetButton
                strength={0.4}
                className="w-[20em] h-[20em] relative bg-white rounded-full lg:-translate-x-[40em] -translate-x-[55em] me-[5em] lg:-translate-y-[13em] -translate-y-0"
              >
                <MagnetButton strength={0.3} className="w-full h-full">
                  <Link
                    href={"/contact"}
                    className="w-full h-full flex justify-center items-center text-blackSemu text-[2em] font-semibold"
                  >
                    <div>Get in touch</div>
                  </Link>
                </MagnetButton>
              </MagnetButton>
            </motion.div>
          </div>
          <div className="w-full space-y-[7em] lg:space-y-0">
            <div className="mt-[2em] w-[80%] me-[40em] lg:mt-0  text-start lg:hidden flex-col justify-start lg:justify-end items-start flex">
              <div className=" w-full border-b-[.2em] border-white pb-[.8em]">
                <span className="text-[2.4em] font-semibold uppercase">
                  Network
                </span>
              </div>
              <div className="text-[2em] pe-[3em] mt-[.8em] text-whiteSemu flex flex-col">
                <Link
                  type="whatsapp"
                  href={
                    "https://wa.me/6289635650954?text=Halo%20brok%2C%20gue%20mau%20nanya%20nih!"
                  }
                  target="_blank"
                >
                  +62 89 635 650 954
                </Link>
                <Link
                  type="email"
                  href={
                    "mailto:namalu@email.com?subject=Halo%20Brok&body=Gue%20mau%20nanya%20tentang..."
                  }
                  target="_blank"
                >
                  kevinragil768@gmail.com
                </Link>
              </div>
            </div>
            <div className="lg:hidden block">
              <span className="block text-[1.6em] text-start lgtext-end text-[#979797]">
                Social
              </span>
              <div className="flex justify-start items-center gap-[1.5em] text-[2em] ">
                <Link
                  href="https://www.linkedin.com/in/kevinragil/"
                  target="_blank"
                  className="hover:text-white hover:-translate-y-[.2em] transition-all duration-200 ease-in-out"
                >
                  LinkedIn
                </Link>
                <Link
                  href={"https://github.com/GioGiorno768"}
                  target="_blank"
                  className="hover:text-white hover:-translate-y-[.2em] transition-all duration-200 ease-in-out"
                >
                  Github
                </Link>
                <Link
                  href={"https://www.instagram.com/vinvexel/"}
                  target="_blank"
                  className="hover:text-white hover:-translate-y-[.2em] transition-all duration-200 ease-in-out"
                >
                  Instagram
                </Link>
              </div>
            </div>
            <div className="w-full flex justify-between items-end">
              <div>
                <span className="block text-[1.6em] text-[#979797]">
                  Local Time
                </span>
                <span className="text-[1.8em]">{time}</span>
              </div>
              <div className="text-[1.8em] ">
                <span>
                  © 2025 Kevin
                  <span className="hidden lg:inline-block">
                    . All Rights Reserved.
                  </span>
                </span>
              </div>
              <div className="lg:block hidden">
                <span className="block text-[1.6em] text-end text-[#979797]">
                  Social
                </span>
                <div className="flex justify-start items-center gap-[1.5em] text-[1.6em] ">
                  <Link
                    href="https://www.linkedin.com/in/kevinragil/"
                    target="_blank"
                    className="hover:text-white hover:-translate-y-[.2em] transition-all duration-200 ease-in-out"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href={"https://github.com/GioGiorno768"}
                    target="_blank"
                    className="hover:text-white hover:-translate-y-[.2em] transition-all duration-200 ease-in-out"
                  >
                    Github
                  </Link>
                  <Link
                    href={"https://www.instagram.com/vinvexel/"}
                    target="_blank"
                    className="hover:text-white hover:-translate-y-[.2em] transition-all duration-200 ease-in-out"
                  >
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
