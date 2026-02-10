export default function WhatIsBigwig() {
  const values = [
    {
      title: 'Performance-First ROI',
      description: 'We define success by your conversion rate and bottom line. We use data to ensure every rupee spent converts into measurable revenue.'
    },
    {
      title: 'Innovation & Creative Impact',
      description: "Pushing beyond trends to craft original, engaging, and captivating content that cuts through the noise and defines your brand's voice."
    },
    {
      title: 'Complete Transparency',
      description: "We uphold the highest ethical standards. No hidden fees, no opaque data. We provide clear, real-time reporting so you always know your campaign's true ROI."
    },
    {
      title: 'Strategic Partnership',
      description: "You’re not a client; you’re a partner. We embed our dynamic team into your vision for sustained, long-term digital transformation."
    }
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)]">
            Our 4 Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-red-400">Digital Success</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-accent)] to-red-400 rounded-full mx-auto mb-8"></div>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="group bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-scale"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent)] to-red-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{value.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
