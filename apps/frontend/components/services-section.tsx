'use client'

import FlipCard from "./cards/FlipCard"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]">Services</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FlipCard title="Social Media Marketing" description="We craft winning Social Media Strategies to manage your profiles, engage your audience, and boost your presence. Focused SMM for measurable results."/>
          <FlipCard title="Content Creation" description="High-quality, engaging content and video production that captivates your audience. We create the visual and written assets that define your brand."/>
          <FlipCard title="Performance Marketing" description="Data-driven campaigns focused solely on ROI and Conversion Optimization. We generate quality leads and guarantee measurable business outcomes."/>
        </div>
        <div className="flex justify-center mt-10 pr-40 space-x-45">
          <FlipCard title="Website Development" description="Custom, SEO-optimized website development. We build fast, secure, and responsive web designs that serve as your 24/7 business platform."/>
          <FlipCard title="Branding & PPC" description="Establish a powerful Brand Identity and dominate search with expert PPC Management (Google Ads). Define your brand, then amplify it through targeted ads."/>
        </div>
      </div>
    </section>
  )
}
