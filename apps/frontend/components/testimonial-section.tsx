'use client'

import { useState, useEffect, useRef } from 'react'

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'Gyan Ganga',
      title: 'Director',
      quote: 'Bigwig Social transformed our enrollment strategy. We saw a 150% increase in qualified leads within 3 months!',
      video: '🎬',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'The New Shop',
      title: 'Marketing Manager',
      quote: 'Their creative approach and data-driven insights helped us reach our target audience effectively.',
      video: '🎬',
    },
    {
      id: 3,
      name: 'Amit Patel',
      company: 'Gun for Glory',
      title: 'CEO',
      quote: 'Best investment in digital marketing we\'ve made. The ROI speaks for itself.',
      video: '🎬',
    },
    {
      id: 4,
      name: 'Sneha Verma',
      company: 'Tech Solutions',
      title: 'Founder',
      quote: 'Outstanding results! Our brand visibility increased dramatically within weeks.',
      video: '🎬',
    },
    {
      id: 5,
      name: 'Rahul Mehta',
      company: 'E-commerce Plus',
      title: 'CMO',
      quote: 'Professional team with innovative strategies. Highly recommend their services!',
      video: '🎬',
    },
  ]

  const handwrittenReviews = [
    'Amazing work! Highly recommended! ⭐⭐⭐⭐⭐',
    'They really understand our brand. Great team! 🙌',
    'Results exceeded expectations. Will work again! 💯',
    'Professional, creative, and results-driven. 🚀',
    'Transformed our online presence. Thank you! 🙏',
  ]

  // Auto-move carousel
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }
    }, 4000)
    return () => clearInterval(timer)
  }, [testimonials.length, isDragging])

  // Update scroll position when currentIndex changes
  useEffect(() => {
    if (carouselRef.current && !isDragging) {
      const container = carouselRef.current
      const isMobile = window.innerWidth < 768
      // gap-6 = 24px, for 3 cards there are 2 gaps = 48px total
      const cardWidth = isMobile 
        ? container.offsetWidth 
        : (container.offsetWidth - 48) / 3 + 24 // card width + gap
      container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth',
      })
    }
  }, [currentIndex, isDragging])

  // Touch/Mouse drag handlers
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setStartX(clientX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(carouselRef.current?.scrollLeft || 0)
  }

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const x = clientX - (carouselRef.current.offsetLeft || 0)
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleEnd = () => {
    setIsDragging(false)
    if (carouselRef.current) {
      const container = carouselRef.current
      const isMobile = window.innerWidth < 768
      // gap-6 = 24px, for 3 cards there are 2 gaps = 48px total
      const cardWidth = isMobile 
        ? container.offsetWidth 
        : (container.offsetWidth - 48) / 3 + 24 // card width + gap
      const newIndex = Math.round(container.scrollLeft / cardWidth)
      setCurrentIndex(Math.min(Math.max(0, newIndex), testimonials.length - 1))
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Testimonials Carousel */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-12 text-center">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]">Success Stories</span>
          </h2>

          <div className="relative">
            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-hidden scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-0.75rem)] snap-start"
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/40 hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Video/Media Area */}
                    <div className="h-48 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]/10 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-6xl animate-pulse">{testimonial.video}</div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-[var(--color-accent)] text-lg">⭐</span>
                        ))}
                      </div>
                      <p className="text-base md:text-lg font-semibold text-[var(--color-text-primary)] leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="border-t border-white/20 pt-4">
                        <p className="font-bold text-[var(--color-text-primary)]">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          {testimonial.title} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all z-10 hidden md:flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <span className="text-2xl text-[var(--color-accent)]">←</span>
            </button>
            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all z-10 hidden md:flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <span className="text-2xl text-[var(--color-accent)]">→</span>
            </button>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'bg-[var(--color-accent)] w-8'
                      : 'bg-[var(--color-accent)]/30 w-2'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Handwritten Reviews Ribbon */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8 text-center">
            Client Feedback
          </h3>

          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {[...handwrittenReviews, ...handwrittenReviews].map((review, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-64 h-48 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-[var(--color-accent)]/30 transform hover:rotate-3 transition-transform"
                  style={{ transform: `rotate(${(idx % 2) * 2 - 1}deg)` }}
                >
                  <p className="text-[var(--color-text-primary)] font-handwriting text-base leading-relaxed">
                    {review}
                  </p>
                  <div className="mt-4 text-2xl">✍️</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        @font-face {
          font-family: 'handwriting';
          src: url('data:font/woff2;base64,d09GMgABAAAAAAToAA0AAAAA2AAAAAwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAFQHYACCBhgKrnyGR7FUWQMsCwABaIGEBCQKo3WDd4APJQsqGxrXvqjgFh2SaYgEVICWNCBgdGVsLnRlIQAA/v/78+O9ezIvEv7/v//9v/zv9e99d8f0+87GHZnxBiZRSppEJZGVVBJVSERmMhEBwBCNURAQjAjCGCgAyGBBYMjlAcCYy8EBS+wQSASyQAKwNTUDDlwYgXpyYxBjUJR1jiLj4EDW3C7gKVJT3S4gBwcOZc3tApmGRtl1e5GrIQ5kze0aXM3xVd0F/6v63wEFJXO7gBwcXiTk5fVHXQnkKfKrIEdL0H9V10twv5vXBbiV0RfgVka3Q0hMvhJ9efhOVA0P42j/aWGFjZi4aCvLi0QKI6xvV8cNvgkE8gWwWNmZZONrpXCZbj7BdYBvfNfMFpzA3uX0eI0x6/X8xkPvS5//hxIkxh8SYxQc1CAFUi2B+ASmGDYLbDjT3wbsYCxQNqZUUBfVVQU1VXHbvHMAA') format('woff2');
        }

        .font-handwriting {
          font-family: 'handwriting', cursive;
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
