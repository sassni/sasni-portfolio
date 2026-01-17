import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TechStackMarquee from "@/components/tech-stack-marquee"
import FeaturedProjects from "@/components/featured-projects"
import ExperienceTimeline from "@/components/experience-timeline"
import EducationSection from "@/components/education-section"
import ConnectFooter from "@/components/connect-footer"
import NoiseOverlay from "@/components/noise-overlay"
import AnimatedBackground from "@/components/animated-background"
import NavigationDock from "@/components/navigation-dock"
import MouseSpotlight from "@/components/mouse-spotlight"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-500">
      <AnimatedBackground />
      <NoiseOverlay />
      <MouseSpotlight />
      <NavigationDock />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechStackMarquee />
        <FeaturedProjects />
        <ExperienceTimeline />
        <EducationSection />
        <ConnectFooter />
      </div>
    </main>
  )
}
