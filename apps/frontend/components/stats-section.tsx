'use client'

import { GLobe } from '@/icons/Globe'
import { Rocket } from '@/icons/Rocket'
import { Target } from '@/icons/Target'
import { Users } from '@/icons/Users'
import { ReactElement, useEffect, useRef, useState } from 'react'

interface Stat {
  label: string
  value: number
  suffix: string
  icon: ReactElement
}

interface AnimatedCounterProps {
  target: number
  suffix: string
  isVisible: boolean
}

function AnimatedCounter({ target, suffix, isVisible }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let current = 0
    const increment = target / 60
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <div>
      <div className="text-5xl md:text-6xl font-bold text-[var(--color-accent)]">
        {count}
        <span className="text-3xl md:text-4xl">{suffix}</span>
      </div>
    </div>
  )
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats: Stat[] = [
    { label: 'Happy Clients', value: 50, suffix: '+', icon: <Target className='size-9 text-blue-600' /> },
    { label: 'Projects Completed', value: 200, suffix: '+', icon: <Rocket className='size-9 text-blue-600' /> },
    { label: 'States Reached', value: 15, suffix: '+', icon: <GLobe className='size-9 text-blue-600' /> },
    { label: 'Team Members', value: 25, suffix: '', icon: <Users className='size-9 text-blue-600' /> },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Client Success: Our Measurable Impact
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Building success stories across industries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-4 md:p-8 text-center 
                 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 
                 border border-white/40 group cursor-pointer"
            >
              <div className="mb-3 md:mb-4 flex justify-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full 
                        bg-linear-to-br from-[var(--color-accent)]/20 to-transparent 
                        flex items-center justify-center
                        group-hover:bg-gradient-to-br group-hover:from-[var(--color-accent)]/40 
                        group-hover:to-transparent transition-all">
                  <span className="text-xl md:text-2xl">{stat.icon}</span>
                </div>
              </div>

              {/* Counter */}
              <div className="text-lg md:text-2xl font-bold">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>

              {/* Label */}
              <p className="text-[var(--color-text-secondary)] font-medium mt-2 md:mt-4 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
