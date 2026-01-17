"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import GlassCard from "./glass-card"

const education = [
  {
    degree: "Bachelor of Science Honours in Computer Science",
    institution: "Informatics Institute of Technology (IIT)",
    affiliation: "Affiliated with University of Westminster",
    period: "Sep 2021 – Present",
    achievement: null,
  },
  {
    degree: "Foundation Certificate in Higher Education - IT",
    institution: "Informatics Institute of Technology (IIT)",
    affiliation: "Affiliated with University of Westminster",
    period: "Sep 2020 – Sep 2021",
    achievement: null,
  },
]

export default function EducationSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <section id="education" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2
            className={`font-sans text-sm uppercase tracking-[0.3em] transition-colors duration-500 ${isDark ? "text-white/40" : "text-black/40"
              }`}
          >
            Academic Background
          </h2>
          <h3
            className={`mt-4 font-mono text-4xl font-bold md:text-5xl transition-colors duration-500 ${isDark ? "text-white" : "text-black"
              }`}
          >
            Education
          </h3>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="group p-6">
                <div
                  className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${isDark ? "bg-gradient-to-br from-white/5 to-white/0" : "bg-gradient-to-br from-black/5 to-black/0"
                    }`}
                />
                <div className="relative z-10">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-xs transition-colors duration-500 ${isDark ? "bg-white/10 text-white/80" : "bg-black/10 text-black/80"
                        }`}
                    >
                      {edu.period}
                    </span>
                    {edu.achievement && (
                      <span
                        className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors duration-500 ${isDark
                            ? "border-white/30 bg-white/10 text-white/90"
                            : "border-black/30 bg-black/10 text-black/90"
                          }`}
                      >
                        {edu.achievement}
                      </span>
                    )}
                  </div>
                  <h4
                    className={`mb-2 font-mono text-xl font-semibold transition-colors duration-500 ${isDark ? "text-white" : "text-black"
                      }`}
                  >
                    {edu.degree}
                  </h4>
                  <p
                    className={`font-sans text-sm transition-colors duration-500 ${isDark ? "text-white/70" : "text-black/70"
                      }`}
                  >
                    {edu.institution}
                  </p>
                  <p
                    className={`mt-1 font-sans text-xs transition-colors duration-500 ${isDark ? "text-white/50" : "text-black/50"
                      }`}
                  >
                    {edu.affiliation}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
