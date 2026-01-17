"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { MapPin, Phone } from "lucide-react"
import GlassCard from "./glass-card"

export default function AboutSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2
            className={`font-sans text-sm uppercase tracking-[0.3em] transition-colors duration-500 ${isDark ? "text-white/40" : "text-black/40"
              }`}
          >
            About Me
          </h2>
          <h3
            className={`mt-4 font-mono text-4xl font-bold md:text-5xl transition-colors duration-500 ${isDark ? "text-white" : "text-black"
              }`}
          >
            Who I Am
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-6 text-center">
            <p
              className={`font-sans text-lg leading-relaxed transition-colors duration-500 ${isDark ? "text-white/70" : "text-black/70"
                }`}
            >
              I'm a passionate Full Stack Software Engineer experienced in building scalable web apps and AI-driven systems. I blend creative design, robust backend logic, and AI innovations to solve real-world problems through clean code, optimization, and user-focused design.
            </p>

          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
