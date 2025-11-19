'use client'

import Image from "next/image"

export default function MeetFounder() {
  return (
    <section className="py-20 md:py-32 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual */}
          <div className="flex justify-center md:order-1">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/30 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative hover:scale-105 cursor-pointer transition-all duration-300 backdrop-blur-sm rounded-3xl p-2 border bg-transparent border-white/40 overflow-hidden shadow-2xl">
                <Image
                  src={"/founder.jpg"}
                  width={600}
                  height={600}
                  alt="Founder Image"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 md:order-2 animate-slide-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text-primary)]">
                Meet the Visionary:
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-blue-400">
                  The Founder
                </span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-accent)] to-blue-400 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-black leading-relaxed">
                With over a decade of experience, our founder built Bigwig Social to be different. She envisioned an agency that doesn't just settle for "good enough," but challenges every boundary to deliver extraordinary results.
              </p>

              <p className="text-lg text-black leading-relaxed">
                Her expertise spans strategy, creative direction, and performance marketing, proving that the best results come from combining data-driven thinking with unbridled creativity.
              </p>

              {/* Founder Quote */}
              <div className="bg-gradient-to-br from-[var(--color-accent)]/10 to-blue-400/5 border-l-4 border-[var(--color-accent)] p-8 rounded-lg my-8">
                <p className="text-xl md:text-2xl font-bold text-[var(--color-accent)] mb-3">
                  "The future of digital marketing isn't about louder messages, it's about smarter strategies and authentic connections."
                </p>
                <p className="text-[var(--color-text-secondary)] font-semibold">Rachita Jain</p>
                <p className="text-[var(--color-text-secondary)] font-semibold">~ Founder, Bigwig Social</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
