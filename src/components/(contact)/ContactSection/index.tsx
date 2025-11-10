"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "emailjs-com";
import Link from "next/link";

import MagnetButton from "@/components/Button/ButtonMagnet";
import MarqueeElement from "@/components/Marque/MarqueElement";
import FlipText from "@/components/TextEfek/FlipText";
import SplitText from "@/components/TextEfek/SplitText";
import { options } from "@/data/options";

export default function ContactSection() {
  const [time, setTime] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  // 🔹 Function kirim email via EmailJS
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_haf28xg", // Service ID dari EmailJS
        "template_gc94w8r", // Template ID
        form.current,
        "pcNnCQTdOu2GxPPi8" // Public Key
      );

      alert("Pesan berhasil dikirim!");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Gagal mengirim pesan. Silakan coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Jam real-time
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const dateOptions: options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Jakarta",
      };
      const formatted = new Intl.DateTimeFormat("en-US", dateOptions).format(
        now
      );
      setTime(`${formatted} GMT+7`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Data marquee
  const marque = [
    { image: "/images/project/sekartaji.webp", title: "sekartaji" },
    { image: "/images/project/sepatu.webp", title: "sepatu" },
    { image: "/images/project/porta.webp", title: "porta" },
    { image: "/images/project/kanya.webp", title: "kanya" },
    { image: "/images/project/agus.webp", title: "agus" },
  ];

  const buttomRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollButton } = useScroll({
    target: buttomRef,
    offset: ["0.2 1", "0.9 0"],
  });
  const x = useTransform(scrollButton, [0, 1], [0, 150]);

  return (
    <section className="w-full text-[8px] lg:text-[10px] font-manrope">
      <div className="w-[90%] m-auto py-[4em] text-white overflow-hidden">
        <div className="w-full mb-[13em]">
          <motion.div
            initial={{ translateY: 550 }}
            animate={{ translateY: 0 }}
            transition={{
              delay: 1,
              duration: 1.5,
              ease: [0.457, 0.343, 0.108, 1.035],
            }}
            className="flex w-full justify-between lg:items-end items-start font-manrope flex-col lg:flex-row border-b-[.2em] py-[1.2em]"
          >
            <div className="lg:w-[70%] w-full">
              <h2 className="md:text-[11em] text-[7em] leading-[.9em] tracking-tighter font-bold flex flex-col uppercase">
                <FlipText>recent</FlipText> <FlipText>Project.</FlipText>
              </h2>
            </div>
            <div className="lg:w-[28%] w-full lg:mt-0 text-start pt-[.6vw] uppercase">
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0)" }}
                transition={{ duration: 1, ease: [0.457, 0.343, 0.108, 1.035] }}
                className="lg:text-[1.6em] text-[1.4em] mt-[1.5em]"
              >
                Kumpulan project terbaru yang saya kerjakan, menunjukkan
                kemampuan dalam desain UI/UX dan pengembangan web yang
                fungsional.
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 650 }}
            animate={{ translateY: 0 }}
            transition={{
              delay: 1,
              duration: 1.5,
              ease: [0.457, 0.343, 0.108, 1.035],
            }}
            className="py-[1em] flex justify-between font-semibold text-[1.5em] font-manrope uppercase"
          >
            <span>Stories</span> <span>Jurney</span>
          </motion.div>
        </div>
        <motion.div
          initial={{ translateY: 750 }}
          animate={{ translateY: 0 }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: [0.457, 0.343, 0.108, 1.035],
          }}
          className="w-[80%] md:text-[10em] text-[6em]"
        >
          <SplitText
            animation="blur"
            stagger={0.025}
            duration={1}
            className="leading-[.9em] font-bold tracking-tight uppercase "
          >
            Ayo Bangun Project Yang Luar Biasa.
          </SplitText>
        </motion.div>
        <motion.div
          initial={{ translateY: 550 }}
          animate={{ translateY: 0 }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: [0.457, 0.343, 0.108, 1.035],
          }}
          className="w-full flex justify-between lg:gap-[2em] gap-[10em] items-start mt-[8em] lg:flex-row flex-col"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="pt-[2vw] lg:w-[45%] w-full font-manrope lg:order-none order-2"
          >
            <div className="text-[2em] space-y-[3em]">
              <div className="input-container">
                <input type="text" id="name" name="name" required />
                <label htmlFor="name" className="label">
                  Username
                </label>
                <div className="underline"></div>
              </div>
              <div className="input-container">
                <input type="email" id="email" name="email" required />
                <label htmlFor="email" className="label">
                  Email
                </label>
                <div className="underline"></div>
              </div>
              <div className="input-container-area">
                <textarea name="message" id="message" required></textarea>
                <label htmlFor="message" className="label">
                  Message
                </label>
                <div className="underline"></div>
              </div>
            </div>
            <div ref={buttomRef} className="relative my-[10em]">
              <hr className="absolute top-1/2 w-full" />
              <motion.div style={{ x }}>
                <MagnetButton
                  strength={0.4}
                  className="w-[20em] h-[20em] relative ms-[5em] bg-white rounded-full"
                >
                  <MagnetButton strength={0.3} className="w-full h-full">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full h-full text-blackTheme text-[2.3em]"
                    >
                      {loading ? "Mengirim..." : "Submit"}
                    </button>
                  </MagnetButton>
                </MagnetButton>
              </motion.div>
            </div>
          </form>
          <div className="lg:w-[50%] w-full lg:space-y-[8em] space-y-[4em]">
            <div className="flex justify-start items-center gap-[8em] ">
              <div className="w-1/2 mt-[2em] lg:mt-0 text-start flex flex-col justify-start lg:justify-end items-start">
                <div className=" w-full lg:border-b-[.2em] text-[#979797] lg:text-white lg:border-white lg:pb-[.8em]">
                  <span className="lg:text-[2em] text-[1.4em] font-semibold uppercase">
                    Contact me
                  </span>
                </div>
                <p className="text-[1.6em] lg:mt-[.8em] mt-[.5em] uppercase text-whiteSemu">
                  Mari jalin kerjasama dalam membangun project sesuai impian
                </p>
              </div>
              <div className="lg:w-[18em] lg:h-[18em] w-[15em] h-[15em] overflow-hidden rounded-full">
                <img src="/images/parallax/person-about.webp" alt="" />
              </div>
            </div>
            <div className="lg:block flex justify-start items-center gap-[8em]">
              <div className="lg:flex lg:w-fit w-1/2 lg:space-y-0 space-y-[5em] justify-start items-start lg:gap-[8em] gap-[5em] lg:mb-[12em]">
                <div className=" lg:w-[38%] text-start flex flex-col justify-start lg:justify-end items-start">
                  <div className=" w-full lg:border-b-[.2em] text-[#979797] lg:text-white lg:border-white lg:pb-[.8em]">
                    <span className="lg:text-[2em] text-[1.4em] font-semibold uppercase">
                      Network
                    </span>
                  </div>
                  <div className="text-[1.6em] lg:pe-[3em] lg:mt-[.8em] mt-[.5em] text-whiteSemu flex flex-col">
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
                <div className="lg:w-1/2 text-start flex flex-col justify-end items-start">
                  <div className=" w-full lg:border-b-[.2em] text-[#979797] lg:text-white lg:border-white lg:pb-[.8em]">
                    <span className="lg:text-[2em] text-[1.4em] font-semibold uppercase">
                      Address
                    </span>
                  </div>
                  <p className="text-[1.6em] lg:mt-[.8em] mt-[.5em] uppercase text-whiteSemu">
                    <Link
                      type="maps"
                      href={"https://maps.app.goo.gl/KY8MVLXErcwVJKJv9"}
                      target="_blank"
                      className="line-clamp-2 hover:text-white hover:-translate-y-[.2em] transition-all duration-200 ease-in-out"
                    >
                      Ds.Selorejo Kec.Bagor Kab.Nganjuk, Jawa Timur 64461
                    </Link>
                  </p>
                </div>
              </div>
              <div className=" text-whiteSemu lg:space-y-[.4em] space-y-[.8em]">
                <span className="lg:text-[1.4em] block text-[#979797] text-[1.4em] font-semibold uppercase">
                  Social
                </span>
                <div className="flex flex-col text-[1.6em] lg:flex-row lg:justify-start justify-start lg:items-center lg:gap-[2em] gap-[.2em]">
                  <Link
                    href="https://www.linkedin.com/in/kevin-ragil-krisna-dyansyah/"
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
      <div className="w-full overflow-hidden pt-[8em] pb-[15em]">
        <MarqueeElement
          element={marque}
          from={0}
          to={"-100%"}
          className="bg-[#7A7A7A]"
        />
      </div>
      <div className="w-[90%] m-auto flex justify-between items-center py-[3em] text-[1.6em] text-white">
        <span>{time}</span>
        <span>
          ©2025 Kevin.
          <span className="hidden lg:inline">All Rights Reserved.</span>
        </span>
      </div>
    </section>
  );
}
