"use client"

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function MouseSpotlight() {
    const { resolvedTheme } = useTheme()
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth spring animation for the spotlight movement
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
    const springX = useSpring(mouseX, springConfig)
    const springY = useSpring(mouseY, springConfig)

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Initialize mouse position to center of screen to avoid jump
        if (typeof window !== "undefined") {
            mouseX.set(window.innerWidth / 2)
            mouseY.set(window.innerHeight / 2)
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [mouseX, mouseY])

    const darkBg = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(255, 255, 255, 0.07), transparent 80%)`
    const lightBg = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(0, 0, 0, 0.10), transparent 80%)`

    if (!mounted) return null

    const isDark = resolvedTheme === "dark"

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-[2] transition-opacity duration-300"
            style={{
                background: isDark ? darkBg : lightBg
            }}
        />
    )
}
