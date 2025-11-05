"use client";

import MagnetButton from "@/components/Button/ButtonMagnet";
import MarqueeElement from "@/components/Marque/MarqueElement";
import { AnimatePresence, motion } from "framer-motion";
import FlipText from "@/components/TextEfek/FlipText";
import { useState } from "react";
import Link from "next/link";

export default function ProjectSection() {
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

  const project = [
    {
      title: "Taman Sekartaji",
      content:
        "Website papan informasi sekartaji yang berguna sebagai informasi untuk pengunjung taman sekartaji",
      year: "2024", // ini tahun (buat sorting)
      month: "1,5 bulan",
      lib: ["Laravel 10", "Tailwind CSS"],
      link: "https://taman-sekartaji.vercel.app/",
      status: true,
      image: "/images/project/sekartaji.webp",
    },
    {
      title: "E-Antivirus",
      content:
        "Website sistem monitoring aktivitas pegawai yang tengah bertugas di ruang server Komdigi Kab. Kediri",
      year: "2022",
      month: "1,5 bulan",
      lib: ["CodeIgniter4", "Tailwind CSS"],
      link: "https://e-antivirus.kedirikab.go.id/",
      status: true,
      image: "/images/project/eantivirus.webp",
    },
    {
      title: "Deadlift Tracker",
      content:
        "Aplikasi Berbasis Web Untuk Perhitungan Repetisi Dan Koreksi Gerakan Deadlift Menggunakan Estimasi Pose",
      year: "2025",
      month: "3,5 bulan",
      lib: ["React Js", "Tailwind CSS", "framer motion"],
      link: "https://deadlift-tracker.vercel.app/",
      status: false,
      image: "/images/project/deadlift.png",
    },
    {
      title: "Smart Inventory",
      content:
        "aplikasi web yang dirancang untuk membantu perusahaan dalam mengelola inventori barang secara efisien",
      year: "2025",
      month: "1 bulan",
      lib: ["Next Js", "Laravel", "Tailwind CSS", "framer motion"],
      link: "https://vin-inventory.vercel.app/",
      status: false,
      image: "/images/project/inventory.png",
    },
  ];

  const detail = ["year", "timeline", "stack", "preview"];

  // 👉 State buat sorting
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // 👉 Sort project berdasarkan tahun (description[0].val)
  const sortedProjects = [...project].sort((a, b) => {
    const yearA = parseInt(a.year as string);
    const yearB = parseInt(b.year as string);

    if (sortOrder === "asc") {
      return yearA - yearB; // terlama → terbaru
    } else {
      return yearB - yearA; // terbaru → terlama
    }
  });

  return (
    <section className="w-full text-[8px] lg:text-[10px] ">
      <div className="w-[90%] mt-[4em] lg:mb-0 mb-[8em] m-auto font-manrope">
        {/* Title */}
        <div className="w-full mb-[5em]">
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
                  <FlipText>recent</FlipText>
                  <FlipText>Project.</FlipText>
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
                  Kumpulan project terbaru yang saya kerjakan, menunjukkan
                  kemampuan dalam desain UI/UX dan pengembangan web yang
                  fungsional.
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
        </div>

        {/* Sorting buttons */}
        <motion.div
          initial={{ translateY: 650 }}
          animate={{ translateY: 0 }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: [0.457, 0.343, 0.108, 1.035],
          }}
          className="flex justify-start lg:gap-[4em] gap-[2em]"
        >
          <MagnetButton
            strength={0.4}
            className={`lg:w-[18em] lg:h-[5.5em] w-[14em] h-[5.5em] flex justify-center items-center rounded-full border-[.2em] border-blackSemu tracking-tight slide-trigger duration-300 hover:bg-blackSemu hover:text-white ${
              sortOrder === "desc" ? "bg-blackSemu text-white" : ""
            }`}
          >
            <button
              onClick={() => setSortOrder("desc")}
              className="w-full flex justify-center items-center lg:text-[1.8em] text-[1.6em] font-manrope uppercase"
            >
              <div className="slide-text-wrapper">
                <span className="slide-text">Terbaru</span>
                <span className="slide-text-hover">Terbaru</span>
              </div>
            </button>
          </MagnetButton>
          <MagnetButton
            strength={0.4}
            className={`lg:w-[18em] lg:h-[5.5em] w-[14em] h-[5.5em] flex justify-center items-center rounded-full border-[.2em] border-blackSemu tracking-tight slide-trigger duration-300 hover:bg-blackSemu hover:text-white ${
              sortOrder === "asc" ? "bg-blackSemu text-white" : ""
            }`}
          >
            <button
              onClick={() => setSortOrder("asc")}
              className="w-full text flex justify-center items-center lg:text-[1.8em] text-[1.6em] font-manrope uppercase"
            >
              <div className="slide-text-wrapper">
                <span className="slide-text">Terlama</span>
                <span className="slide-text-hover">Terlama</span>
              </div>
            </button>
          </MagnetButton>
        </motion.div>

        {/* Project list */}
        <motion.div
          initial={{ translateY: 750 }}
          animate={{ translateY: 0 }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: [0.457, 0.343, 0.108, 1.035],
          }}
          className="w-full lg:mt-[10em] mt-[5em]"
        >
          <AnimatePresence mode="wait">
            {sortedProjects.map((item, index) => (
              <motion.div
                key={item.title + sortOrder} // key harus unik biar AnimatePresence detect perubahan
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between w-full items-end flex-col md:flex-row md:mt-0 mt-[8em]"
              >
                <div
                  className={`w-full md:w-[45%] mb-[5em] ${
                    index % 2 === 1 && "md:order-2 order-none"
                  }`}
                >
                  <div
                    className={`flex items-center ${
                      index % 2 === 1
                        ? "lg:border-r-[.4em] lg:justify-end justify-start border-l-[.4em] lg:border-l-0"
                        : "border-l-[.4em] justify-start "
                    } border-blackSemus mb-[2em]`}
                  >
                    <h3 className="lg:text-[3em] text-[3em] font-manrope leading-[1em] px-[.4em] tracking-tight font-medium uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <hr className="w-full mt-[2em] mb-[1em] lg:hidden block" />
                  <p
                    className={`lg:text-[1.6em] text-[1.4em] font-manrope uppercase font-medium text-[#808080] ${
                      index % 2 === 1 ? "lg:text-right text-left" : "text-left"
                    }`}
                  >
                    {item.content}
                  </p>
                  <div className="w-full mt-[3em]">
                    <div className="w-full border-b-[.1em] border-blackSemu py-[2em] flex justify-around items-start gap-[2em]">
                      <div className="w-[60%] font-manrope text-[1.6em] uppercase">
                        <p>Year</p>
                      </div>
                      <div className="w-[60%] font-manrope text-end text-[1.6em]">
                        <p>{item.year}</p>
                      </div>
                    </div>
                    <div className="w-full border-b-[.1em] border-blackSemu py-[2em] flex justify-around items-start gap-[2em]">
                      <div className="w-[60%] font-manrope text-[1.6em] uppercase">
                        <p>Timeline</p>
                      </div>
                      <div className="w-[60%] font-manrope text-end text-[1.6em]">
                        <p>{item.month}</p>
                      </div>
                    </div>
                    <div className="w-full border-b-[.1em] border-blackSemu py-[2em] flex justify-around items-start gap-[2em]">
                      <div className="w-[60%] font-manrope text-[1.6em] uppercase">
                        <p>Stack</p>
                      </div>
                      <div className="w-[60%] font-manrope text-end text-[1.6em]">
                        <p>{item.lib.join(", ")}</p>
                      </div>
                    </div>
                    <div className="w-full border-b-[.1em] border-blackSemu py-[2em] flex justify-around items-start gap-[2em]">
                      <div className="w-[60%] font-manrope text-[1.6em] uppercase">
                        <p>Live Project</p>
                      </div>
                      <div className="w-[60%] font-manrope text-end text-[1.6em]">
                        <Link href={item.link} target="_blank" passHref>
                          {item.status ? (
                            <button disabled>Link is disabled</button>
                          ) : (
                            <button>Preview →</button>
                          )}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-[8em] py-[5em] lg:w-[50%] w-full h-[50em] bg-[#E5E6EB] flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full shadow-lg shadow-blackSemu"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

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
  );
}
