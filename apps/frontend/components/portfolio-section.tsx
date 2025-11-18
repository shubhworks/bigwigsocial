'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('ALL WORKS')

  // Map category names to portfolio sector IDs
  const getCategoryLink = (category: string): string => {
    const sectorMap: { [key: string]: string } = {
      'EDUCATION': 'education',
      'FMCG': 'fmcg',
      'FINANCE': 'finance',
      'REAL ESTATE': 'realEstate',
      'HOSPITALITY': 'hospitality',
      'Events/Entertainment': 'events',
    }
    return `/portfolio/${sectorMap[category] || 'education'}`
  }

  const filters = ['ALL WORKS', 'EDUCATION', 'FMCG', 'REAL ESTATE', 'FINANCE', 'HOSPITALITY']

  const works = [
    {
      id: 1,
      category: 'EDUCATION',
      image: '🎓',
    },
    {
      id: 2,
      category: 'FMCG',
      image: '🛍️',
    },
    {
      id: 3,
      category: 'FINANCE',
      image: '💰',
    },
    {
      id: 4,
      category: 'REAL ESTATE',
      image: '🏢',
    },
    {
      id: 5,
      category: 'HOSPITALITY',
      image: '🏨',
    },
    {
      id: 6,
      category: 'Events/Entertainment',
      image: '💻',
    },
  ]

  const filteredWorks = activeFilter === 'ALL WORKS'
    ? works
    : works.filter(work => work.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Success Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]">Industries</span>
          </h2>
        </div>
        {/* Portfolio Grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8">
          {filteredWorks.map((work, idx) => (
            <Link key={work.id} href={getCategoryLink(work.category)}>
              <div
                className="group relative bg-white/70 backdrop-blur-sm rounded-xl 
                   overflow-hidden border border-white/40 
                   hover:border-[var(--color-accent)]/50 transition-all duration-300 
                   hover:shadow-2xl cursor-pointer animate-fade-in-scale"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Image Area */}
                <div className="relative h-28 md:h-56 
                        bg-gradient-to-br from-[var(--color-primary)] 
                        to-[var(--color-accent)]/20 overflow-hidden 
                        flex items-center justify-center">
                  <span className="text-4xl md:text-8xl group-hover:scale-110 transition-transform duration-300">
                    {work.image}
                  </span>
                </div>

                {/* Content */}
                <div className="p-3 md:p-6">
                  <p className="text-xs md:text-xl text-center font-bold 
                        text-[var(--color-accent)] uppercase mb-1 md:mb-2">
                    {work.category}
                  </p>

                  <button className="w-full py-1.5 md:py-2 
                             bg-[var(--color-accent)]/10 hover:bg-[var(--color-accent)]/20 
                             text-[var(--color-accent)] rounded-lg font-semibold 
                             text-[10px] md:text-sm transition-all">
                    View Case Study →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
