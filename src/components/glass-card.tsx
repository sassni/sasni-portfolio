"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export default function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl backdrop-blur-xl transition-colors duration-500",
        isDark ? "border border-white/10 bg-white/5" : "border border-black/10 bg-black/5",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-500",
        isDark
          ? "before:bg-gradient-to-br before:from-white/10 before:to-transparent"
          : "before:bg-gradient-to-br before:from-black/5 before:to-transparent",
        hoverEffect && "hover:before:opacity-100",
        className,
      )}
      whileHover={
        hoverEffect
          ? {
              y: -4,
              boxShadow: isDark
                ? "0 0 40px rgba(255, 255, 255, 0.08), 0 0 80px rgba(255, 255, 255, 0.04)"
                : "0 0 40px rgba(0, 0, 0, 0.08), 0 0 80px rgba(0, 0, 0, 0.04)",
              borderColor: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
