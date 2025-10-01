"use client";
import Image from "next/image";
import { ScrollParallax } from "react-just-parallax";
import { motion } from "framer-motion";
import FlipText from "@/components/TextEfek/FlipText";

export default function Experience() {
  const data = [
    {
      id: 1,
      title: "IT Support Intern",
      work: "2019 - Rumah Sakit Umum Daerah Nganjuk",
      description: [
        "Berpengalaman mengembangkan aplikasi web berbasis CodeIgniter dan Laravel dengan fitur pencatatan aktivitas, manajemen data, CRUD, autentikasi, serta perancangan database dan antarmuka ramah pengguna, melalui kolaborasi tim untuk menghasilkan sistem yang efisien dan terstruktur.",
      ],
    },
    {
      id: 2,
      title: "Fullstack Developer Intern",
      work: "2024 - KOMDIGI Kab. Kediri",
      description: [
        "Berpengalaman mengembangkan aplikasi web berbasis CodeIgniter dan Laravel dengan fitur pencatatan aktivitas, manajemen data, CRUD, autentikasi, serta perancangan database dan antarmuka ramah pengguna, melalui kolaborasi tim untuk menghasilkan sistem yang efisien dan terstruktur.",
      ],
    },
    {
      id: 3,
      title: "Front End Developer - Web Papan Informasi Taman Sekartaji",
      work: "2024 - Universitas Nusantara PGRI Kediri",
      description: [
        "Berpengalaman mengembangkan antarmuka web dengan Laravel dan Tailwind CSS, menerapkan animasi interaktif menggunakan GSAP dan Barba.js, serta berkolaborasi dalam perancangan UI/UX untuk menghadirkan website papan informasi yang responsif, modern, dan ramah pengguna",
      ],
    },
  ];

  return (
    <section className="w-full lg:py-[10em] py-[8em] lg:text-[10px] text-[8px] bg-white relative shadow-up shadow-black/10 -mt-[100vh] z-[10]">
      <div className="w-[90%] m-auto">
        <div className="w-full lg:mb-[10em] mb-[2em]">
          <div className="flex w-full justify-between lg:items-end items-start text-blackSemu font-manrope flex-col lg:flex-row border-b-[.2em] py-[1.2em]">
            <div className="lg:w-[70%] w-full">
              <h2 className="md:text-[11em] text-[6.5em] leading-[.9em] tracking-tighter font-bold flex flex-col uppercase">
                <FlipText>About</FlipText>
                <FlipText>Experience.</FlipText>
              </h2>
            </div>
            <div className="lg:w-[28%] w-full lg:mt-0 text-start py-[.6vw] uppercase">
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0)" }}
                transition={{
                  duration: 1,
                  ease: [0.457, 0.343, 0.108, 1.035],
                }}
                className="lg:text-[1.6em] text-[1.4em] mt-[1.5em]"
              >
                Perjalanan pengalaman yang membentuk kemampuan, dedikasi, dan
                perspektif baru dalam setiap langkah.
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0)" }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.457, 0.343, 0.108, 1.035],
            }}
            className="py-[1em] flex justify-between font-semibold text-[1.5em] font-manrope uppercase"
          >
            <span>Work</span>
            <span>Growth</span>
          </motion.div>
        </div>
        <div className="w-full flex justify-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0, delayChildren: 0.3 }}
            className="lg:w-[75%] w-full "
          >
            <motion.hr
              variants={{ visible: { scaleX: 1 }, hidden: { scaleX: 0 } }}
              transition={{
                duration: 2,
                ease: [0.457, 0.343, 0.108, 1.035],
              }}
              className="w-full lg:origin-right"
            />
            {data.map((item) => (
              <motion.div key={item.id} className="origin-bottom">
                <motion.div
                  variants={{
                    visible: { opacity: 1, filter: "blur(0)", translateY: "0" },
                    hidden: {
                      opacity: 0,
                      filter: "blur(10px)",
                      translateY: "20%",
                    },
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.3,
                    ease: [0.457, 0.343, 0.108, 1.035],
                  }}
                  key={item.id}
                  className="w-full py-[4em] px-[2em] flex justify-between items-start gap-[5em]"
                >
                  <span className="font-semibold text-[2em] font-manrope">
                    {item.id.toString().length == 1
                      ? `0${item.id}`
                      : `${item.id}`}
                  </span>
                  <div className="w-[90%] flex lg:flex-row flex-col justify-between gap-[1em]">
                    <div className=" lg:w-[40%] w-full font-manrope text-[2em]">
                      <h3 className="font-semibold uppercase">{item.title}</h3>
                      <p className="text-[#787878] text-[.8em] mt-[.1em]">
                        {item.work}
                      </p>
                    </div>
                    <div className="lg:w-[50%] w-full font-manrope text-[1.6em]">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
                <motion.hr
                  variants={{ visible: { scaleX: 1 }, hidden: { scaleX: 0 } }}
                  transition={{
                    duration: 2,
                    ease: [0.457, 0.343, 0.108, 1.035],
                  }}
                  className="w-full lg:origin-right"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
