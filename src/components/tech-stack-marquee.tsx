"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const technologies = [
  { name: "Python", color: "#3776AB" },
  { name: "Java", color: "#007396" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "React.js", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" }, // Next.js is black, handle specially for dark mode if needed
  { name: "Node.js", color: "#339933" },
  { name: "Express.js", color: "#000000" }, // Express is black
  { name: "Flask", color: "#000000" }, // Flask is black
  { name: "PHP", color: "#777BB4" },
  { name: "MySQL", color: "#4479A1" },
  { name: "PostgreSQL", color: "#4169E1" }, // Elephant blue
  { name: "MongoDB", color: "#47A248" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "Scikit-learn", color: "#F7931E" },
  { name: "Pandas", color: "#150458" },
  { name: "NumPy", color: "#013243" },
  { name: "Docker", color: "#2496ED" },
  { name: "Git", color: "#F05032" },
  { name: "Google Cloud", color: "#4285F4" },
  { name: "Figma", color: "#F24E1E" },
]

function TechIcon({ name, color, isDark }: { name: string; color: string; isDark: boolean }) {
  // Determine text color. If brand color is dark and we are in dark mode, maybe lighten it or keep it?
  // Request said: "use their official brand default colors"
  // Next.js/Express/Flask are black. In dark mode, black text is invisible.
  // We should inverse them in dark mode or keep as white if brand is black.

  let contentColor = color;
  if ((name === "Next.js" || name === "Express.js" || name === "Flask" || name === "Pandas" || name === "NumPy") && isDark) {
    contentColor = "#FFFFFF"; // Fallback to white for dark brands in dark mode for visibility, or use a lighter shade
  }

  return (
    <div
      className={`mx-3 flex items-center gap-2 rounded-full border px-5 py-2.5 backdrop-blur-sm transition-colors duration-500 ${isDark ? "border-white/20 bg-white/5" : "border-black/20 bg-black/5"
        }`}
    >
      <span className="font-mono text-sm font-bold" style={{ color: contentColor }}>{name}</span>
    </div>
  )
}

export default function TechStackMarquee() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  const firstRow = technologies.slice(0, 11)
  const secondRow = technologies.slice(11)

  return (
    <section className="relative overflow-hidden py-16">
      <div
        className={`pointer-events-none absolute inset-0 z-10 transition-colors duration-500 ${isDark
          ? "bg-gradient-to-r from-black via-transparent to-black"
          : "bg-gradient-to-r from-white via-transparent to-white"
          }`}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-8 text-center"
      >
        <h2
          className={`font-sans text-sm uppercase tracking-[0.3em] transition-colors duration-500 ${isDark ? "text-white/40" : "text-black/40"
            }`}
        >
          Tech Stack
        </h2>
      </motion.div>

      <div className="mb-4 flex">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ willChange: "transform" }}
        >
          {[...firstRow, ...firstRow, ...firstRow, ...firstRow].map((tech, index) => (
            <TechIcon key={`first-${index}`} name={tech.name} color={tech.color} isDark={isDark} />
          ))}
        </motion.div>
      </div>

      <div className="flex">
        <motion.div
          className="flex"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ willChange: "transform" }}
        >
          {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map((tech, index) => (
            <TechIcon key={`second-${index}`} name={tech.name} color={tech.color} isDark={isDark} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
