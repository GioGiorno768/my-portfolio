"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MagnetButton from "../Button/ButtonMagnet";
import TransitionNav from "../PageTransition/TransitionNav";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { status } = useSession();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Project", href: "/project" },
    { label: "Contact", href: "/contact" },
  ];

  // Animation variants
  const overlayVariants = {
    closed: {
      y: "-100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
    open: {
      y: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  const menuVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.4, ease: "easeInOut" as const },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  const hamburgerLine1 = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  };

  const hamburgerLine2 = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const hamburgerLine3 = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -3 },
  };

  return (
    <>
      {/* Header with Hamburger Button */}
      <header className="fixed z-[999] top-0 left-0 right-0 mix-blend-difference py-[3em] w-[98%] m-auto">
        <div className="max-w-screen mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex justify-end w-full items-center">
              <MagnetButton
                className="w-[6em] h-[6em] rounded-full border bg-white"
                strength={0.5}
              >
                <MagnetButton strength={0.3} className="w-full h-full">
                  <motion.button
                    onClick={toggleMenu}
                    className="relative w-full h-full flex flex-col justify-center items-center group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle menu"
                  >
                    <motion.span
                      variants={hamburgerLine1}
                      animate={isMenuOpen ? "open" : "closed"}
                      className="w-6 h-0.5 bg-black block transform transition-transform origin-center"
                    />
                    <motion.span
                      variants={hamburgerLine2}
                      animate={isMenuOpen ? "open" : "closed"}
                      className="w-6 h-0.5 bg-black block mt-1.5 transform transition-opacity"
                    />
                    <motion.span
                      variants={hamburgerLine3}
                      animate={isMenuOpen ? "open" : "closed"}
                      className="w-6 h-0.5 bg-black block mt-1.5 transform transition-transform origin-center"
                    />
                  </motion.button>
                </MagnetButton>
              </MagnetButton>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[100] bg-blackTheme"
          >
            <div className="w-[90%] m-auto h-full flex flex-col">
              <div className="flex-1 flex items-center justify-between">
                <div className="lg:flex w-full lg:space-y-0 space-y-[1em] justify-around items-center">
                  {/* Image Section - Desktop Only */}
                  <motion.div
                    variants={overlayVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="w-[80%] md:w-[45vw] md:h-[30vw] h-[120vw] overflow-hidden hidden lg:block"
                  >
                    <div className="relative w-[100%] h-[100em] -translate-y-[40%] scale-[1.5]">
                      <Image
                        src="/images/parallax/experience_1.webp"
                        alt="Experience preview"
                        width={0}
                        height={0}
                        unoptimized
                        className="w-auto h-auto"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>

                  {/* Navigation Menu */}
                  <motion.nav
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="text-start mb-[5em] lg:mb-0"
                  >
                    <ul className="leading-none">
                      {menuItems.map((item, index) => (
                        <motion.li key={index} variants={itemVariants}>
                          <motion.div
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-white font-normal lg:text-[6em] text-[4em] font-manrope tracking-tighter hover:text-gray-300 transition-colors duration-300"
                            whileTap={{ scale: 0.95 }}
                          >
                            <TransitionNav
                              href={item.href}
                              className="slide-trigger transition-colors duration-300 font-normal tracking-tight font-manrope"
                            >
                              <div className="slide-text-wrapper">
                                <span className="slide-text uppercase">
                                  {item.label}
                                </span>
                                <span className="slide-text-hover uppercase">
                                  {item.label}
                                </span>
                              </div>
                            </TransitionNav>
                          </motion.div>
                        </motion.li>
                      ))}

                      {/* Logout Button - Authenticated Users Only */}
                      {status === "authenticated" && (
                        <motion.li variants={itemVariants}>
                          <motion.div
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-white font-normal lg:text-[6em] text-[4em] font-manrope tracking-tighter hover:text-gray-300 transition-colors duration-300"
                            whileTap={{ scale: 0.95 }}
                          >
                            <button
                              onClick={() => signOut()}
                              className="slide-trigger transition-colors duration-300 font-normal tracking-tight font-manrope"
                            >
                              <div className="slide-text-wrapper">
                                <span className="slide-text uppercase">
                                  Log Out
                                </span>
                                <span className="slide-text-hover uppercase">
                                  Log Out
                                </span>
                              </div>
                            </button>
                          </motion.div>
                        </motion.li>
                      )}
                    </ul>
                  </motion.nav>

                  {/* Contact & Social Links */}
                  <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="flex flex-col items-start justify-around gap-[5em]"
                  >
                    {/* Contact Section */}
                    <div className="text-white/80 text-[1.6em]">
                      <div className="mb-[.3em] text-[.95em] text-white/50">
                        <span>Contact</span>
                      </div>
                      <motion.div
                        variants={itemVariants}
                        className="hover:text-white transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        <Link
                          href="https://wa.me/6289635650954?text=Halo%20brok%2C%20gue%20mau%20nanya%20nih!"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +62 89 635 650 954
                        </Link>
                      </motion.div>
                      <motion.div
                        variants={itemVariants}
                        className="hover:text-white transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        <Link
                          href="mailto:kevinragil768@gmail.com?subject=Halo%20Brok&body=Gue%20mau%20nanya%20tentang..."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          kevinragil768@gmail.com
                        </Link>
                      </motion.div>
                    </div>

                    {/* Social Links Section */}
                    <div className="text-white/80 text-[1.6em]">
                      <div className="mb-[.3em] text-[.95em] text-white/50">
                        <span>Social</span>
                      </div>
                      <motion.div
                        variants={itemVariants}
                        className="hover:text-white transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        <Link
                          href="https://www.linkedin.com/in/kevinragil/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                        </Link>
                      </motion.div>
                      <motion.div
                        variants={itemVariants}
                        className="hover:text-white transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        <Link
                          href="https://github.com/GioGiorno768"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github
                        </Link>
                      </motion.div>
                      <motion.div
                        variants={itemVariants}
                        className="hover:text-white transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        <Link
                          href="https://www.instagram.com/vinvexel/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;