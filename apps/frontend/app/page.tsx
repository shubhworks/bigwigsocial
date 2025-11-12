"use client"

import { AnimatedGlowBackground } from "@/components/background/animated-glow-background"
import { ContactSection } from "@/components/pages/landing/contact-section"
import { HeroSection } from "@/components/pages/landing/hero-section"
import { HorizontalImageSection } from "@/components/pages/landing/horizontal-image-section"
import { ServicesSection } from "@/components/pages/landing/service-section"
import { WhyUsSection } from "@/components/pages/landing/why-us-section"
import { Footer } from "@/components/ui/footer"
import { Navbar } from "@/components/ui/Navbar"

export default function Page() {
    return (
        <AnimatedGlowBackground>
            <Navbar />
            <main className="pt-16 md:pt-20">
                <HeroSection />
                <ServicesSection />
                <WhyUsSection />
                <HorizontalImageSection />
                <ContactSection />
            </main>
            <Footer />
        </AnimatedGlowBackground>
    )
}
