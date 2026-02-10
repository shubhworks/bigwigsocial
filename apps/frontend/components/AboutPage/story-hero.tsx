'use client'

import { useEffect, useRef } from 'react'

export default function OurStoryHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Heading in Hexagon */}
          <div className="relative">
            {/* Rotating Hexagon Container */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer Rotating Ring */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-rose-500 rounded-full" />
                </div>
                <div className="absolute top-1/4 right-0 transform translate-x-1/2">
                  <div className="w-5 h-5 bg-red-400 rounded-full" />
                </div>
                <div className="absolute bottom-1/4 right-0 transform translate-x-1/2">
                  <div className="w-4 h-4 bg-red-400 rounded-full" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-6 h-6 bg-rose-500 rounded-full" />
                </div>
                <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2">
                  <div className="w-5 h-5 bg-red-400 rounded-full" />
                </div>
                <div className="absolute top-1/4 left-0 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-red-400 rounded-full" />
                </div>
              </div>

              {/* Hexagon Box with Main Heading */}
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="relative bg-white/95 backdrop-blur-sm border-2 border-rose-200 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                      The Results-Driven DNA:
                    </h1>
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-rose-500">
                      Why Bigwig Social is Jabalpur&apos;s Trusted Partner
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Floating Boxes */}
          <div className="space-y-6">
            {/* First Floating Box - Tagline */}
            <div className="relative animate-float">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-rose-500 rounded-full animate-pulse" />
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
                  Transforming Brands into Digital Legacies Through
                  Strategic Marketing Excellence
                </p>
              </div>
            </div>

            {/* Second Floating Box - Main Content */}
            <div className="relative animate-float-slow">
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-rose-500 rounded-full animate-ping-slow" />
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-lg text-gray-700">
                      Bigwig Social was founded to bridge the gap between ambitious businesses and digital excellence. Based in Jabalpur, MP, we deliver full-service digital strategies that generate tangible growth.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-lg text-gray-700">
                      We combine data-driven precision with high-impact creative storytelling to ensure your brand doesn't just exist online—it dominates the global stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rotating Stats Circle */}
            <div className="flex justify-center mt-8">
              <div className="relative w-64 h-64">
                {/* Outer Rotating Ring */}
                <div className="absolute inset-0 border-2 border-rose-200/50 rounded-full animate-spin-reverse-slow">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-rose-300 rounded-full p-3 shadow-md">
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600">200+</div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white border border-purple-300 rounded-full p-3 shadow-md">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">2+</div>
                      <div className="text-xs text-gray-600">Years</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white border border-rose-300 rounded-full p-3 shadow-md">
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600">98%</div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="absolute inset-12 bg-gradient-to-br from-rose-50 to-red-50 rounded-full flex items-center justify-center border border-gray-200 shadow-lg">
                  <div className="text-center p-4">
                    <div className="text-lg font-bold text-gray-900">BIGWIG</div>
                    <div className="text-sm text-gray-600">SOCIAL</div>
                    <div className="text-xs text-gray-500 mt-2">JABALPUR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Floating Elements */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {/* Floating Tag Elements */}
          {[
            "Data-Driven",
            "Creative Storytelling",
            "Digital Excellence",
            "Strategic Marketing",
            "Global Dominance",
            "Tangible Growth"
          ].map((tag, index) => (
            <div
              key={tag}
              className="relative animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-md transform hover:scale-110 transition-transform duration-300">
                <span className="text-gray-800 font-medium">{tag}</span>
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate, 0deg)); }
          50% { transform: translateY(-10px) rotate(var(--tw-rotate, 0deg)); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate, 0deg)); }
          50% { transform: translateY(-15px) rotate(var(--tw-rotate, 0deg)); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 25s linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  )
}