'use client'

import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/30 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative bg-white backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/40 shadow-2xl">
              <Image
                src={`/workingtogether.jpg`}
                alt="about image"
                width={800}
                height={800}
                className="w-full h-64 md:h-96 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text-primary)]">
                Performance-Driven Marketing,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]">Built on Trust.</span>
              </h2>
              <div className="h-1 flex md:w-20 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-full"></div>
            </div>

            <div className="space-y-6 md:text-left text-center">
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                We are a dynamic, passionate team based in Jabalpur, dedicated to amplifying brands globally, Our Mission:
              </p>

              <div className="bg-white/70 backdrop-blur-sm border-l-4 border-[var(--color-accent)] p-6 rounded-lg">
                <p className="text-xl font-bold text-[var(--color-accent)] mb-2">
                  "BRIDGING OUR EFFORTS WITH YOUR SUCCESS"
                </p>
                <p className="text-[var(--color-text-secondary)]">
                  We are not just executors; we are results catalysts. We invoice only for
                  <span className="font-bold text-[var(--color-text-primary)]"> proven results, transparency, and undeniable value. </span>
                </p>
              </div>

              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Every strategy is backed by data, crafted with precision, and measured strictly by impact. We turn ambition into success.
              </p>
            </div>

            <Link href={'/about'}>
              <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">

                  <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
                  <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
                  <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
                  <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
                  <p className="z-10">Read more</p>
                </button>

              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
