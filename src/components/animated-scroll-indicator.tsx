"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function AnimatedScrollIndicator() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted && resolvedTheme === "dark"

    return (
        <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
        >
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                className={`flex flex-col items-center gap-2 ${isDark ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : ""}`}
            >
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-colors duration-500 ${isDark ? "text-white" : "text-black"}`}
                >
                    {/* Stylized Superman/Flying Hero Silhouette */}
                    <path
                        d="M12 2C12 2 16 10 16 12C16 14.5 14.5 16 12 16C9.5 16 8 14.5 8 12C8 10 12 2 12 2ZM12 24L10 16H14L12 24Z"
                        fill="currentColor"
                        opacity="0.8"
                    />
                    <path
                        d="M4 8C4 8 8 10 9 12M20 8C20 8 16 10 15 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    {/* Better flying pose path: Head down, cape flowing up */}
                    <path
                        d="M12 22C11 22 5 14 5 10C5 6 8 3 12 3C16 3 19 6 19 10C19 14 13 22 12 22Z"
                        fill="currentColor"
                        className="hidden" // Placeholder logic, replacing with actual path beneath
                    />
                    <motion.path
                        d="M12 20L8.5 14C8.5 14 7 11 9 9C11 7 13 7 15 9C17 11 15.5 14 15.5 14L12 20Z"
                        fill="currentColor"
                    />
                    {/* Cape */}
                    <motion.path
                        d="M9 9L6 4C6 4 9 2 12 2C15 2 18 4 18 4L15 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                    />
                </svg>
            </motion.div>
        </motion.div>
    )
}
