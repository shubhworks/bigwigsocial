'use client'

import FlipCard from "./cards/FlipCard"

export default function ServicesSection() {
  const services = [
    {
      icon: '📱',
      title: 'Social Media Marketing',
      description: 'Strategic campaigns that engage your audience and build brand loyalty across all platforms.',
    },
    {
      icon: '📊',
      title: 'Content Strategy',
      description: 'Data-driven content that resonates with your target market and drives conversions.',
    },
    {
      icon: '🎨',
      title: 'Creative Design',
      description: 'Stunning visuals and designs that make your brand stand out in a crowded market.',
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Boost your online visibility and rank higher on search engines with our proven strategies.',
    },
    {
      icon: '📧',
      title: 'Email Marketing',
      description: 'Personalized campaigns that nurture leads and drive repeat business.',
    },
    {
      icon: '🎯',
      title: 'Performance Analytics',
      description: 'Real-time insights and detailed reports to measure the success of every campaign.',
    },
  ]

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
          <FlipCard title="Social Media Marketing" description="Strategic campaigns that engage your audience and build brand loyalty across all platforms."/>
          <FlipCard title="Content Creation" description="Strategic campaigns that engage your audience and build brand loyalty across all platforms."/>
          <FlipCard title="Performance Marketing" description="Strategic campaigns that engage your audience and build brand loyalty across all platforms."/>
        </div>
        <div className="flex justify-center mt-10 pr-40 space-x-45">
          <FlipCard title="Website Development" description="Strategic campaigns that engage your audience and build brand loyalty across all platforms."/>
          <FlipCard title="Branding & PPC" description="Strategic campaigns that engage your audience and build brand loyalty across all platforms."/>
        </div>
      </div>
    </section>
  )
}
