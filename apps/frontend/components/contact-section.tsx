'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requirements: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        requirements: '',
      })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-text-primary)] mb-16">
          Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]">Amazing Together</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent rounded-3xl blur-2xl"></div>

            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/40">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/50 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/50 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all"
                      placeholder="Contact Number"
                    />
                  </div>

                  <div>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/50 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all resize-none"
                      placeholder="Requirements, Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-bold hover:bg-[var(--color-accent-dark)] transition-all hover:shadow-lg active:scale-95"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-scale">
                  <div className="w-16 h-16 bg-[var(--color-accent)]/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-4xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                    Thank you!
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    We've received your message and will get back to you shortly.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white/70 backdrop-blur-sm mt-4 rounded-2xl p-6 border border-white/40 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h4 className="font-bold text-[var(--color-text-primary)] mb-1">Address</h4>
                  <p className="text-black">
                    3rd Floor, HP PETROL PUMP, Infront of TATA Croma, MR-4 Rd, above indian bank,  
                    Vijay Nagar, Jabalpur, Madhya Pradesh 482002
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border mt-4 border-white/40 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h4 className="font-bold text-[var(--color-text-primary)]">Contact Us</h4>
                  <p className="text-black">
                    +91 91312 49316 , +91 9174451227
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Take Your Business to the Next Level
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Join 50+ successful businesses that have transformed their digital presence with Bigwig Social. Let's create something extraordinary together.
              </p>

              <div className="flex items-center gap-2 text-white font-semibold group cursor-pointer hover:gap-3 transition-all">
                <span>Start Your Journey</span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* MAP SECTION */}
            <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-xl border border-white/30 bg-white/70 backdrop-blur-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.814334266954!2d79.92231037439406!3d23.167207513683935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1e9ee3dd7e5%3A0x9c12c1f8fd9e2b33!2sHP%20Petrol%20Pump%2C%20MR-4%20Rd%2C%20Vijay%20Nagar%2C%20Jabalpur%2C%20Madhya%20Pradesh%20482002!5e0!3m2!1sen!2sin!4v1703245234567"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
