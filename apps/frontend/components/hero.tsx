'use client'

import { useEffect, useRef } from 'react'
import { FloatingCards } from './RightSide3D'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationId: number
    let time = 0



    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <section id="home" className="relative w-full min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-screen justify-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[var(--color-text-primary)]">
                Jabalpur’s Top-Rated
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]">
                  Digital Marketing
                </span>
                for Global
                Results. 
                <div className='text-2xl md:text-4xl pt-2'> (Combines local keyword with global ambition.) </div>
              </h1>
              <p className="text-xl md:text-2xl pt-5 text-[var(--color-text-secondary)] font-medium leading-relaxed max-w-2xl">
                We are a full-service, results-driven team 
                <span className='text-black font-bold'> transforming digital vision into measurable success. </span>
              </p>
            </div>

            <button onClick={() => {
              window.location.href = "/#testimonials"
            }} className="group cursor-pointer px-8 py-4 bg-[var(--color-accent)] text-white rounded-full font-bold text-lg hover:bg-[var(--color-accent-dark)] transition-all hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
              Start Your Success Story
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <div className="flex items-center gap-6 pt-4 text-sm text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                50+ Happy Clients
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                200+ Projects
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="hidden md:flex items-center justify-center w-full overflow-visible">
            <div className="w-full">
              <FloatingCards />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--color-text-secondary)] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[var(--color-text-secondary)] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
