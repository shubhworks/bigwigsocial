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
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/#services' },
    { label: 'Contact', href: '/#contact' },
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
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src={`/bigwigsocialLogo.png`}
                alt="Bigwig Social Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation - UNTOUCHED */}
            <div className="hidden md:flex mr-6 ml-auto gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-black hover:bg-blue-200 p-3 rounded-3xl  hover:text-blue-600 font-extrabold text-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA - UNTOUCHED */}
            <div className="md:block hidden mt-4">
              <NavPortfolioBtn text='Portfolio' />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl mt-2">
              <div className="px-6 py-4 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl font-semibold transition-colors text-center"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex justify-center">
                    <NavPortfolioBtn text='Portfolio' />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}