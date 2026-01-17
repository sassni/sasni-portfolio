"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Download, Mail } from "lucide-react"
import AnimatedScrollIndicator from "./animated-scroll-indicator"

export default function HeroSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className={`font-sans text-5xl font-extrabold tracking-widest md:tracking-[0.6em] md:mr-[-0.6em] md:text-7xl lg:text-9xl text-center transition-colors duration-500 ${isDark
            ? "bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent"
            : "bg-gradient-to-r from-black via-neutral-700 to-neutral-500 bg-clip-text text-transparent"
            }`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ willChange: "transform" }}
        >
          SASNI
        </motion.h1>



        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <div className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium backdrop-blur-md ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
            <Mail className="h-3 w-3" />
            <span>shazni121@gmail.com</span>
          </div>
          <div className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium backdrop-blur-md ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+94 71 334 4861</span>
          </div>
          <div className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium backdrop-blur-md ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3"
            >
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span>1+ Year Experience</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="/sasni-resume.pdf"
            download
            className={`
              group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 font-sans text-sm font-medium backdrop-blur-xl transition-all duration-300
              ${isDark
                ? "border border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                : "border border-black/20 bg-black/10 text-black hover:border-black/40 hover:bg-black/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="relative z-10 h-4 w-4" />
            <span className="relative z-10">Resume</span>
          </motion.a>

          <motion.a
            href="mailto:shazni121@gmail.com"
            className={`
              group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 font-sans text-sm font-medium backdrop-blur-xl transition-all duration-300
              ${isDark
                ? "border border-white/30 bg-white/5 text-white/80 hover:border-white/50 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                : "border border-black/30 bg-black/5 text-black/80 hover:border-black/50 hover:bg-black/10 hover:text-black hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="relative z-10 h-4 w-4" />
            <span className="relative z-10">Get In Touch</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <AnimatedScrollIndicator />
    </section>
  )
}
