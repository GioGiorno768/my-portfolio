"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState("fadeIn")

  useEffect(() => {
    // trigger keluar dulu pas ganti route
    setTransitionStage("fadeOut")
    const timeout = setTimeout(() => {
      setDisplayChildren(children)
      setTransitionStage("fadeIn")
    }, 1000) // delay ganti halaman (sinkron sama durasi overlay)

    return () => clearTimeout(timeout)
  }, [pathname, children])

  return (
    <div className="relative overflow-hidden">
      {/* Halaman */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {displayChildren}
        </motion.div>
      </AnimatePresence>

      {/* Overlay transition */}
      <AnimatePresence>
        {transitionStage === "fadeOut" && (
          <motion.div
            key="overlay"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-[9999]"
          >
            {/* Tulisan di tengah → ada delay opacity */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white text-3xl font-bold"
            >
              Loading...
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
