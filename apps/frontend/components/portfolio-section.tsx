'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('ALL WORKS')

  const carouselRef = useRef<HTMLDivElement | null>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' })
    }
  }

  // Category -> Link mapping
  const getCategoryLink = (category: string): string => {
    const sectorMap: { [key: string]: string } = {
      'EDUCATION': 'education',
      'FMCG': 'fmcg',
      'FINANCE': 'finance',
      'REAL ESTATE': 'realEstate',
      'HOSPITALITY': 'hospitality',
      'Events/Entertainment': 'events',
      'Sports': 'sports',
    }
    return `/portfolio/${sectorMap[category] || 'education'}`
  }

    const getIconFilename = (category: string): string => {
      const map: { [key: string]: string } = {
        'EDUCATION': 'education.png',
        'FMCG': 'fmcg.png',
        'FINANCE': 'finance.png',
        'REAL ESTATE': 'realestate.png',
        'HOSPITALITY': 'hospitality.png',
        'Events/Entertainment': 'entertainment.png',
        'Sports': 'sports.png',
      }
      return map[category] || 'education.png'
    }

  const works = [
    { id: 1, category: 'EDUCATION' },
    { id: 2, category: 'FMCG' },
    { id: 3, category: 'FINANCE' },
    { id: 4, category: 'REAL ESTATE' },
    { id: 5, category: 'HOSPITALITY' },
    { id: 6, category: 'Events/Entertainment' },
    { id: 7, category: 'Sports' },
  ]

  const filteredWorks =
    activeFilter === 'ALL WORKS' ? works : works.filter(w => w.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Success Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]">Industries</span>
          </h2>
        </div>

        {/* ============== UNIVERSAL CAROUSEL (Mobile + Desktop) ============== */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
                     bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hidden md:flex"
          >
            ◀
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
                     bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hidden md:flex"
          >
            ▶
          </button>

          {/* MOBILE BUTTONS SMALLER */}
          <button
            onClick={scrollLeft}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 
                     bg-white/80 p-2 rounded-full shadow-md md:hidden"
          >
            ◀
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-1 top/2- translate-y-1/2 z-20 
                     bg-white/80 p-2 rounded-full shadow-md md:hidden"
          >
            ▶
          </button>

          {/* CAROUSEL CONTAINER */}
          <div
            ref={carouselRef}
            className="
              flex overflow-x-scroll scrollbar-hide gap-6 py-4 scroll-smooth
            "
          >
            {filteredWorks.map((work, idx) => (
              <Link
                key={work.id}
                href={getCategoryLink(work.category)}
                className="
                  min-w-[75%] 
                  sm:min-w-[50%]
                  md:min-w-[33%] 
                  lg:min-w-[30%]
                  xl:min-w-[25%]
                "
              >
                <div
                  className="group relative bg-white/70 backdrop-blur-sm rounded-xl 
                             overflow-hidden border border-white/40 
                             hover:border-[var(--color-accent)]/50 transition-all duration-300 
                             hover:shadow-2xl cursor-pointer"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {/* IMAGE */}
                  <div className="
                      relative h-40 md:h-56 
                      bg-gradient-to-br from-[var(--color-primary)] 
                      to-[var(--color-accent)]/20 flex items-center justify-center
                    "
                  >
                    <img
                      src={`/portfolioIcons/${getIconFilename(work.category)}`}
                      alt={`${work.category} icon`}
                      className="h-20 md:h-28 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 md:p-6">
                    <p className="text-base md:text-xl text-center font-bold 
                                  text-[var(--color-accent)] uppercase mb-2">
                      {work.category}
                    </p>

                    <button className="w-full py-2 
                      bg-[var(--color-accent)]/10 hover:bg-[var(--color-accent)]/20 
                      text-[var(--color-accent)] rounded-lg font-semibold 
                      text-sm md:text-base transition-all">
                      View Case Study →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
