"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import GlassCard from "./glass-card"

const projects = [
  {
    title: "Personalized AI Nutrition System",
    description:
      "Full-stack AI application delivering personalized nutrition plans based on user health data. Built ML models with TensorFlow/PyTorch for real-time dietary recommendations.",
    tags: ["Python", "Flask", "TensorFlow", "JavaScript"],
  },
  {
    title: "Hotel Guest Management",
    description:
      "Full-stack hotel guest management system to manage guest records and bookings. Integrated PocketBase for real-time data handling and CRUD operations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "PocketBase"],
  },
  {
    title: "MCP Resume Server & Playground",
    description:
      "Resume parsing and Q&A system with WebSocket JSON-RPC and REST API fallback. Developed a Next.js playground and SMTP email integration.",
    tags: ["Next.js", "Node.js", "Express.js", "WebSocket"],
  },
  {
    title: "Kommon Poll",
    description:
      "AI-powered sentiment analysis tool. Contributed new features, bug fixes, and maintained frontend/backend components. Improved keyword tracking accuracy and UI responsiveness.",
    tags: ["JavaScript", "PHP", "AI"],
  },
  {
    title: "Synapse AI Labs Website",
    description:
      "Redesigned and maintained company website, enhancing UI/UX, adding new sections, ensuring responsiveness, and integrating plugins.",
    tags: ["WordPress", "PHP", "CSS"],
  },
  {
    title: "Breast Cancer Prediction System",
    description:
      "Classification and regression models predicting mortality and survival duration using real clinical data with Logistic Regression, KNN, and Naive Bayes.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Spam Email Classification",
    description:
      "Spam detection model using text preprocessing, TF-IDF vectorization, and Multinomial Naive Bayes classifier trained on real-world email data.",
    tags: ["Python", "Scikit-learn", "NLP"],
  },
]

export default function FeaturedProjects() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2
            className={`font-sans text-sm uppercase tracking-[0.3em] transition-colors duration-500 ${
              isDark ? "text-white/40" : "text-black/40"
            }`}
          >
            Featured Work
          </h2>
          <h3
            className={`mt-4 font-mono text-4xl font-bold md:text-5xl transition-colors duration-500 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Projects
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="group h-full p-6">
                <div
                  className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    isDark ? "bg-gradient-to-br from-white/5 to-white/0" : "bg-gradient-to-br from-black/5 to-black/0"
                  }`}
                />
                <div className="relative z-10 flex h-full flex-col">
                  <h4
                    className={`mb-3 font-mono text-lg font-semibold transition-colors duration-500 ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    {project.title}
                  </h4>
                  <p
                    className={`mb-6 flex-grow font-sans text-sm leading-relaxed transition-colors duration-500 ${
                      isDark ? "text-white/60" : "text-black/60"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors duration-500 ${
                          isDark
                            ? "border-white/10 bg-white/5 text-white/70"
                            : "border-black/10 bg-black/5 text-black/70"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
