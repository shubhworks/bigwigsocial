'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import NavPortfolioBtn from './buttons/NavButton'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className='flex justify-center items-center'>
      <nav
        className={`fixed top-3 w-[80%] z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/30 backdrop-blur-md shadow-lg rounded-full'
            : 'bg-linear-to-b from-(--color-primary) to-transparent rounded-full'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2 group">
              <Image
                src={`/bigwigsocialLogo.png`}
                alt="Bigwig Social Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-15">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-(--color-text-secondary) hover:bg-blue-200 p-3 rounded-3xl  hover:text-blue-600 font-extrabold text-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="md:block hidden mt-4">
              <NavPortfolioBtn text='Portfolio' />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-(--color-primary) rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border">
              <div className="px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-(--color-text-secondary) hover:text-accent font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-(--color-accent-dark) transition-all">
                  Portfolio
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
