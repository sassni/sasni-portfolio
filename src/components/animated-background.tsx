"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark
            ? "bg-gradient-to-b from-black via-neutral-950 to-black"
            : "bg-gradient-to-b from-white via-neutral-50 to-white"
        }`}
      />

      <motion.div
        className={`absolute -top-1/2 -left-1/2 h-full w-full rounded-full blur-[120px] transition-colors duration-500 ${
          isDark
            ? "bg-gradient-to-r from-white/8 via-neutral-400/6 to-transparent"
            : "bg-gradient-to-r from-black/5 via-neutral-400/4 to-transparent"
        }`}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full blur-[120px] transition-colors duration-500 ${
          isDark
            ? "bg-gradient-to-l from-white/8 via-neutral-500/6 to-transparent"
            : "bg-gradient-to-l from-black/5 via-neutral-400/4 to-transparent"
        }`}
        animate={{
          x: [0, -80, -40, 0],
          y: [0, -60, -120, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute top-1/4 right-1/4 h-[60vh] w-[60vh] rounded-full blur-[100px] transition-colors duration-500 ${
          isDark
            ? "bg-gradient-to-br from-white/5 via-neutral-600/5 to-transparent"
            : "bg-gradient-to-br from-black/3 via-neutral-300/4 to-transparent"
        }`}
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 80, -40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute bottom-1/4 left-1/3 h-[40vh] w-[40vh] rounded-full blur-[80px] transition-colors duration-500 ${
          isDark
            ? "bg-gradient-to-tr from-white/5 via-neutral-500/5 to-transparent"
            : "bg-gradient-to-tr from-black/3 via-neutral-400/3 to-transparent"
        }`}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
