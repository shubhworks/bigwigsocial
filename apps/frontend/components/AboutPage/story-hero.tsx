'use client'

import { useEffect, useRef } from 'react'

export default function OurStoryHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationId: number
    let time = 0

    const draw = () => {
      const width = canvas.width
      const height = canvas.height

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, '#c5e7fb')
      gradient.addColorStop(1, '#e0f2fe')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

          // Animated floating circles (blue/cyan instead of orange)
          for (let i = 0; i < 5; i++) {
            const x = width * (0.2 + i * 0.15)
            const y = height * 0.3 + Math.sin(time * 0.02 + i) * 40
            const radius = 30 + Math.sin(time * 0.01 + i) * 10

            ctx.fillStyle = `rgba(59, 130, 246, ${0.1 + Math.sin(time * 0.02 + i) * 0.1})`
            ctx.beginPath()
            ctx.arc(x, y, radius, 0, Math.PI * 2)
            ctx.fill()
          }      time++
      animationId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-8 animate-slide-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[var(--color-text-primary)]">
            Our Story:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-blue-400">
              The Journey of Bigwig Social
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-black font-medium leading-relaxed max-w-3xl mx-auto">
            Dedicated to transforming brands with passion, results, and integrity
          </p>

          <div className="max-w-3xl mx-auto mt-12">
            <p className="text-lg text-black leading-relaxed mb-6">
              Bigwig Social was founded with a singular vision: to bridge the gap between businesses and digital success. Based in Jabalpur, we embarked on a mission to prove that location doesn't limit ambition. We set out to be more than a digital marketing agency—we wanted to be a trusted partner in your growth journey.
            </p>

            <p className="text-lg text-black leading-relaxed">
              Every brand has a story to tell. Every business has untapped potential. We exist to help you unlock it, amplify it, and celebrate it on the global stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
