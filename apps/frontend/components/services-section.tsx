'use client'

import { PenWrite } from "@/icons/PenWrite"
import FlipCard from "./cards/FlipCard"
import { Graph } from "@/icons/Graph"
import { Coin } from "@/icons/Coin"
import { LaptopCode } from "@/icons/LaptopCode"
import { Earth } from "@/icons/Earth"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Row with First Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 lg:mb-16">
          {/* Header Text */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Full-Service Digital Marketing Solutions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]">
                to Drive Your Business Growth
              </span>
            </h2>
            <p className="text-base md:text-lg text-black">
              <span className="font-bold">The Complete Digital Ecosystem:</span> From brand building to
              performance scaling, our integrated approach delivers SEO-Enhanced Content.
            </p>
          </div>

          {/* First Two Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <FlipCard
              logo={<Earth className="size-12 md:size-16" />}
              title="Social Media Marketing"
              description="High-Impact SMM: Data-backed strategies to manage profiles, boost engagement, and drive ROI-focused traffic across all major social channels."
            />
            <FlipCard
              logo={<PenWrite className="size-12 md:size-16" />}
              title="Content Creation"
              description="SEO-Driven Content: High-quality content, including video production, designed to captivate audiences, boost search rankings, and solidify brand authority."
            />
          </div>
        </div>

        {/* Second Row - Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <FlipCard
            logo={<Graph className="size-12 md:size-16" />}
            title="Performance Marketing"
            description="ROI-Focused Campaigns: Specialized, data-driven campaigns focused on CRO (Conversion Rate Optimization) to guarantee qualified lead generation and measurable business outcomes."
          />
          <FlipCard
            logo={<LaptopCode className="size-12 md:size-16" />}
            title="Website Development"
            description="Custom Web Development: We engineer fast, secure, and SEO-optimized websites, custom-built to be your 24/7 conversion-focused business platform."
          />
          <FlipCard
            logo={<Coin className="size-12 md:size-16" />}
            title="Branding & PPC"
            description="Branding & Expert PPC: Establish undeniable brand identity and instantly dominate search results with targeted PPC campaigns for immediate, high-quality traffic."
          />
        </div>

      </div>
    </section>
  )
}