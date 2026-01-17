"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import GlassCard from "./glass-card"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "http://www.linkedin.com/in/sasni",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "http://www.github.com/sassni",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:shazni121@gmail.com",
    icon: Mail,
  },
]

export default function ConnectFooter() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <footer id="connect" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 text-center">
            <h2
              className={`font-sans text-sm uppercase tracking-[0.3em] transition-colors duration-500 ${isDark ? "text-white/40" : "text-black/40"
                }`}
            >
              Get In Touch
            </h2>
            <h3
              className={`mt-4 font-mono text-4xl font-bold md:text-5xl transition-colors duration-500 ${isDark ? "text-white" : "text-black"
                }`}
            >
              {"Let's Connect"}
            </h3>
            <p
              className={`mx-auto mt-4 max-w-md font-sans transition-colors duration-500 ${isDark ? "text-white/60" : "text-black/60"
                }`}
            >
              {
                "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
              }
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    className={`group relative flex items-center gap-3 overflow-hidden rounded-full border px-6 py-3 font-sans text-sm backdrop-blur-sm transition-all duration-300 ${isDark
                      ? "border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                      : "border-black/20 bg-black/5 text-black/80 hover:border-black/40 hover:bg-black/10 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                      }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <IconComponent
                      className={`h-5 w-5 transition-colors ${isDark ? "text-white/60 group-hover:text-white" : "text-black/60 group-hover:text-black"
                        }`}
                    />
                    <span>{link.name}</span>
                  </motion.a>
                )
              })}
            </div>

            <div
              className={`mt-16 border-t pt-8 transition-colors duration-500 ${isDark ? "border-white/10" : "border-black/10"
                }`}
            >
              <p
                className={`font-mono text-xs transition-colors duration-500 ${isDark ? "text-white/40" : "text-black/40"
                  }`}
              >
                BUILD THINGS THAT MAKE LIFE BETTER, NOT JUST EASIER.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </footer>
  )
}
