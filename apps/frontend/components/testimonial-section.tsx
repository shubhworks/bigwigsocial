'use client'

import { useState, useEffect, useRef } from 'react'

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const verticalVideoRef = useRef<HTMLVideoElement>(null)

  // Helper function to convert Google Drive link to embeddable format
  const convertDriveLink = (url: string): string => {
    if (!url) return ''
    // Extract file ID from various Google Drive URL formats
    const patterns = [
      /\/file\/d\/([a-zA-Z0-9_-]+)/,
      /id=([a-zA-Z0-9_-]+)/,
      /\/d\/([a-zA-Z0-9_-]+)/,
    ]

    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match && match[1]) {
        // Return embeddable preview URL
        return `https://drive.google.com/file/d/${match[1]}/preview`
      }
    }

    // If no match, return original URL (might be direct link)
    return url
  }

  // Helper function to get direct video URL from Google Drive (for video element)
  const getDirectVideoUrl = (url: string): string => {
    if (!url) return ''
    const patterns = [
      /\/file\/d\/([a-zA-Z0-9_-]+)/,
      /id=([a-zA-Z0-9_-]+)/,
      /\/d\/([a-zA-Z0-9_-]+)/,
    ]

    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match && match[1]) {
        // Return direct download/preview URL
        return `https://drive.google.com/uc?export=download&id=${match[1]}`
      }
    }

    return url
  }

  // UPDATED REAL TESTIMONIALS
  const testimonials = [
    {
      id: 1,
      name: 'Mr. Ashutosh Mishra',
      company: 'Rangbhoomi Stadium',
      quote:
        'See why Mr. Ashutosh Mishra recommends Bigwig Social for serious business promotion!',
      video_horizontal: 'https://drive.google.com/file/d/1gQrOboYsEYCOn8MLtXrlGWeiHmZejIYb/view',
      video_vertical: 'https://drive.google.com/file/d/1Vim4scqIVI2nvZUnj0joqlJJZpRSqiG0/view',
      full_description: 'From the very beginning of our journey at Conta Venture, Big Wig Social has been a vital part of our team. In this testimonial, Mr. Ashutosh Mishra highlights the significant role Big Wig Social played in boosting our social media presence over the past glorious year. Hear how our partnership helped enhance their visibility and achieve their goals.',
    },
    {
      id: 2,
      name: 'Mr. Ritik Tiwari',
      company: 'Gun for Glory Shooting Academy, Jabalpur',
      quote:
        'Professional, Creative, and Results-Driven Social Media Agency',
      video_horizontal: 'https://drive.google.com/file/d/1VGLdHOChwq0tVCY2fhjVJE5vDX6QIIiP/view',
      video_vertical: 'https://drive.google.com/file/d/1_iZh4wuFz0ZU3GbzDx8TNPRAPj0owG4C/view',
      full_description: 'Working with Big Wig Social for the past six months has been a game-changer. Mr. Ritik Tiwari praises our team for being professional, creative, and hardworking. He strongly recommends Big Wig Social for any business aiming to promote their brand, gain attraction, and create traction on social media platforms',
    },
    // {
    //   id: 3,
    //   name: 'Ashutosh Mishra',
    //   company: 'Rangbhoomi',
    //   title: 'Owner',
    //   quote:
    //     'Energetic team with proven response and fresh ideas — they truly helped us grow. Their solid media presence is on the next level. Thanks for being a part of this journey.',
    //   video: '🎬',
    // },
    // {
    //   id: 4,
    //   name: 'Choco Chill by Palak',
    //   company: 'Choco Chill',
    //   title: 'Owner',
    //   quote:
    //     'I found the best digital marketing agency in town — Bigwig Social. The entire team is so helpful, especially Rachita ma’am.',
    //   video: '🎬',
    // },
    // {
    //   id: 5,
    //   name: 'Nilay Tiwari',
    //   company: 'Client',
    //   title: '',
    //   quote: 'Rachita Roxx! Thanks for making everything so easy.',
    //   video: '🎬',
    // },
  ]

  // UPDATED — NOW USING OBJECTS WITH content + name
  const handwrittenReviews = [
    {
      content: 'Fantastic and energetic team. Great experience working together!',
      name: 'Team Gun For Glory',
    },
    {
      content: 'Very cooperative and impressive work experience. Thank you!',
      name: 'Ishi — The New Shop',
    },
    {
      content: 'Fresh ideas, solid presence. Helped us grow amazingly!',
      name: 'Ashutosh Mishra — Rangbhoomi',
    },
    {
      content: 'Best digital marketing agency in town. Special thanks to Rachita ma’am!',
      name: 'Choco Chill by Palak',
    },
    {
      content: 'Rachita Roxx! Thanks for making everything easy.',
      name: 'Nilay Tiwari',
    },
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
      const cardWidth = isMobile
        ? container.offsetWidth
        : (container.offsetWidth - 48) / 3 + 24
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
      const cardWidth = isMobile
        ? container.offsetWidth
        : (container.offsetWidth - 48) / 3 + 24
      const newIndex = Math.round(container.scrollLeft / cardWidth)
      setCurrentIndex(Math.min(Math.max(0, newIndex), testimonials.length - 1))
    }
  }

  const goToSlide = (index: number) => setCurrentIndex(index)
  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const openModal = (testimonial: typeof testimonials[0]) => {
    setSelectedTestimonial(testimonial)
    setIsModalOpen(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedTestimonial(null)
    // Restore body scroll
    document.body.style.overflow = 'unset'
    // Pause video when closing modal
    if (verticalVideoRef.current) {
      verticalVideoRef.current.pause()
    }
  }

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isModalOpen])

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Testimonials Carousel */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-12 text-center">
            Client{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]">
              Success Stories
            </span>
          </h2>

          <div className="relative">
            {/* Carousel */}
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
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="shrink-0 w-full md:w-[calc(33.333%-0.75rem)] snap-start"
                >
                  <div
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/40 hover:shadow-2xl transition-all duration-300 h-full cursor-pointer"
                    onClick={() => openModal(testimonial)}
                  >
                    {/* Horizontal Video Preview */}
                    <div className="h-48 rounded-xl overflow-hidden mb-6 relative bg-black/10">
                      {testimonial.video_horizontal ? (
                        <video
                          src={getDirectVideoUrl(testimonial.video_horizontal)}
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          onError={(e) => {
                            // Fallback to iframe if direct video fails
                            const target = e.target as HTMLVideoElement
                            const container = target.parentElement
                            if (container) {
                              container.innerHTML = `<iframe src="${convertDriveLink(testimonial.video_horizontal)}" class="w-full h-full" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]/10 flex items-center justify-center">
                          <div className="text-6xl animate-pulse">🎬</div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
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
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all z-10 flex md:hidden items-center justify-center"
            >
              <span className="text-2xl text-[var(--color-accent)]">←</span>
            </button>

            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all z-10 flex md:hidden items-center justify-center"
            >
              <span className="text-2xl text-[var(--color-accent)]">→</span>
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all ${idx === currentIndex
                    ? 'bg-[var(--color-accent)] w-8'
                    : 'bg-[var(--color-accent)]/30 w-2'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Handwritten Reviews */}
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
                    "{review.content}"
                  </p>

                  <div className="mt-4 text-lg font-semibold text-[var(--color-text-primary)] flex items-center gap-1">
                    ✍️ <span>{review.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Modal */}
      {isModalOpen && selectedTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-[var(--color-text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Side - Quote and Full Description */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto">
              <div className="space-y-6">
                {/* Quote */}
                <div className="border-l-4 border-[var(--color-accent)] pl-4">
                  <p className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] leading-relaxed italic">
                    "{selectedTestimonial.quote}"
                  </p>
                </div>

                {/* Full Description */}
                {selectedTestimonial.full_description && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                      Full Testimonial
                    </h3>
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
                      {selectedTestimonial.full_description}
                    </p>
                  </div>
                )}

                {/* Client Info */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-lg text-[var(--color-text-primary)]">
                    {selectedTestimonial.name}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {selectedTestimonial.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Vertical Video */}
            <div className="w-full md:w-1/2 bg-black/5 flex items-center justify-center p-4 md:p-8">
              {selectedTestimonial.video_vertical ? (
                <div className="w-full max-w-md aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-2xl">
                  <video
                    ref={verticalVideoRef}
                    src={getDirectVideoUrl(selectedTestimonial.video_vertical)}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    onError={(e) => {
                      // Fallback to iframe if direct video fails
                      const target = e.target as HTMLVideoElement
                      const container = target.parentElement
                      if (container) {
                        container.innerHTML = `<iframe src="${convertDriveLink(selectedTestimonial.video_vertical)}" class="w-full h-full" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
                      }
                    }}
                  />
                </div>
              ) : (
                <div className="w-full max-w-md aspect-[9/16] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]/10 rounded-xl flex items-center justify-center">
                  <div className="text-6xl animate-pulse">🎬</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
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
          animation: scroll 15s linear infinite;
        }
        @font-face {
          font-family: 'handwriting';
          src: url('data:font/woff2;base64,d09GMgABAAAAAAToAA0AAAAA2AAAAAwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAFQHYACCBhgKrnyGR7FUWQMsCwABaIGEBCQKo3WDd4APJQsqGxrXvqjgFh2SaYgEVICWNCBgdGVsLnRlIQAA/v/78+O9ezIvEv7/v//9v/zv9e99d8f0+87GHZnxBiZRSppEJZGVVBJVSERmMhEBwBCNURAQjAjCGCgAyGBBYMjlAcCYy8EBS+wQSASyQAKwNTUDDlwYgXpyYxBjUJR1jiLj4EDW3C7gKVJT3S4gBwcOZc3tApmGRtl1e5GrIQ5kze0aXM3xVd0F/6v63wEFJXO7gBwcXiTk5fVHXQnkKfKrIEdL0H9V10twv5vXBbiV0RfgVka3Q0hMvhJ9efhOVA0P42j/aWGFjZi4aCvLi0QKI6xvV8cNvgkE8gWwWNmZZONrpXCZbj7BdYBvfNfMFpzA3uX0eI0x6/X8xkPvS5//hxIkxh8SYxQc1CAFUi2B+ASmGDYLbDjT3wbsYCxQNqZUUBfVVQU1VXHbvHMAA') format('woff2');
        }
        .font-handwriting {
          font-family: 'handwriting', cursive;
        }
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
