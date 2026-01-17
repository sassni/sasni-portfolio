"use client"

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { Home, FileText, Github, Linkedin, Sun, Moon, Mail } from "lucide-react"

import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"

const navItems = [
  {
    icon: Home,
    label: "Home",
    onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    target: undefined,
    rel: undefined
  },
  {
    icon: FileText,
    label: "Resume",
    href: "/sasni-resume.pdf",
    target: "_blank",
    rel: "noopener noreferrer"
  },
]

const socialItems = [
  { icon: Github, label: "GitHub", href: "http://www.github.com/sassni" },
  { icon: Linkedin, label: "LinkedIn", href: "http://www.linkedin.com/in/sasni" },
  { icon: Mail, label: "Email", href: "mailto:shazni121@gmail.com" },
]

function DockIcon({
  mouseX,
  children,
  href,
  download,
  target,
  rel,
  onClick,
  className,
  title,
}: {
  mouseX: MotionValue
  children: React.ReactNode
  href?: string
  download?: boolean
  target?: string
  rel?: string
  onClick?: () => void
  className?: string
  title?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [supportsHover, setSupportsHover] = useState(false)

  useEffect(() => {
    // Check if device supports hover (desktop) vs touch
    const checkHover = () => setSupportsHover(window.matchMedia("(hover: hover)").matches)
    checkHover()
    window.addEventListener("resize", checkHover)
    return () => window.removeEventListener("resize", checkHover)
  }, [])

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  // Magnification effect: 40px base -> 60px expanded
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 60, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  const Element = href ? motion.a : motion.button

  return (
    <motion.div
      ref={ref}
      // On touch devices, disable the magnification width physics
      style={{ width: supportsHover ? width : "auto" }}
      className="aspect-square w-10 md:w-auto flex items-center justify-center relative touch-none"
    >
      <Element
        href={href}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        // Add tap scale animation ONLY for touch/non-hover devices
        whileTap={!supportsHover ? { scale: 0.9 } : undefined}
        className={`h-full w-full flex items-center justify-center rounded-full ${className}`}
        title={title}
        style={{ width: "100%", height: "100%" }}
      >
        {children}
      </Element>
    </motion.div>
  )
}

export default function NavigationDock() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(Infinity)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2 max-w-[95vw]"
    >
      <div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={`
          flex items-center gap-5 rounded-full px-6 py-3 md:gap-8 md:px-8 md:py-4 lg:gap-4 lg:px-6 lg:py-3 overflow-x-auto no-scrollbar
          ${isDark
            ? "border border-white/10 bg-black/5 shadow-lg shadow-black/20"
            : "border border-black/10 bg-white/30 shadow-lg shadow-black/5"
          }
          backdrop-blur-xl
        `}
      >
        {/* Navigation Items */}
        {navItems.map((item) => (
          <DockIcon
            key={item.label}
            mouseX={mouseX}
            href={item.href}
            target={item.target}
            rel={item.rel}
            onClick={item.onClick}
            title={item.label}
            className={isDark ? "text-white" : "text-black"}
          >
            <item.icon className="h-6 w-6 md:h-7 md:w-7 lg:h-5 lg:w-5" />
          </DockIcon>
        ))}

        {/* Divider */}
        <div className={`h-6 w-px self-center flex-shrink-0 md:h-8 lg:h-6 ${isDark ? "bg-white/20" : "bg-black/20"}`} />

        {/* Social Items */}
        {socialItems.map((item) => {
          const IconComponent = item.icon
          return (
            <DockIcon
              key={item.label}
              mouseX={mouseX}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label}
              className={isDark ? "text-white" : "text-black"}
            >
              <IconComponent className="h-6 w-6 md:h-7 md:w-7 lg:h-5 lg:w-5" />
            </DockIcon>
          )
        })}

        {/* Divider */}
        <div className={`h-6 w-px self-center flex-shrink-0 md:h-8 lg:h-6 ${isDark ? "bg-white/20" : "bg-black/20"}`} />

        {/* Theme Toggle */}
        {mounted && (
          <DockIcon
            mouseX={mouseX}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={isDark ? "text-white" : "text-black"}
          >
            <motion.div initial={false} animate={{ rotate: isDark ? 0 : 180 }} transition={{ duration: 0.3 }}>
              {isDark ? <Sun className="h-6 w-6 md:h-7 md:w-7 lg:h-5 lg:w-5" /> : <Moon className="h-6 w-6 md:h-7 md:w-7 lg:h-5 lg:w-5" />}
            </motion.div>
          </DockIcon>
        )}
      </div>
    </motion.nav>
  )
}
