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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Full-Service Digital Marketing Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]"> to Drive Your
              Business Growth</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            <span className="font-bold"> The Complete Digital Ecosystem: </span>  From brand building to
            performance scaling, our integrated approach delivers SEO-Enhanced Content.
          </p>
        </div>
        
        <div className="md:grid md:grid-cols-3 gap-8 hidden">
          <FlipCard logo={<Earth className="size-25"/>} title="Social Media Marketing" description="High-Impact Social Media Marketing (SMM): We craft
data-backed, winning social media strategies to manage
your profiles, massively increase audience engagement,
and drive high-quality traffic focused on measurable
ROI." />
          <FlipCard logo={<PenWrite className="size-25" />} title="Content Creation" description="SEO-Driven Content Marketing & Production: Highquality, original content and video production designed
to captivate your audience, rank higher in search
engines, and define your brand authority.
" />
          <FlipCard logo={<Graph className="size-25" />} title="Performance Marketing" description="ROI-Focused Performance Marketing: Specialized, datadriven campaigns focused solely on
maximizing Conversion Rate Optimization (CRO). We
guarantee qualified lead generation and superior
measurable business outcomes." />
        </div>
        <div className="md:flex justify-center mt-10 pr-30 space-x-45 hidden">
          <FlipCard logo={<LaptopCode className="size-25"/>} title="Website Development" description="Custom, SEO-Optimized Web Development: We
engineer fast, secure, and responsive websites that are
custom-built to be your 24/7 conversion-focused
business platform.
" />
          <FlipCard logo={<Coin className="size-25"/>} title="Branding & PPC" description="Strategic Branding & Expert PPC
Management: Establish an undeniable brand identity
and instantly dominate search results with Google Ads
& expert Pay-Per-Click (PPC) campaigns focused on
immediate, targeted traffic." />
        </div>
      </div>
    </section>
  )
}
