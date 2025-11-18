'use client'

import Image from "next/image"
import SocialFooter from "./SocialFooter"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-neutral-dark)] text-white py-12 md:py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Logo & Tagline - Centered on mobile */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex justify-center md:justify-start mb-4">
              <Image
                src={`/bigwigsocialWhite.png`}
                alt="Bigwig Social Logo"
                width={200}
                height={60}
                className="w-48 md:w-60"
              />
            </div>
            <p className="text-gray-300 text-sm text-center md:text-left mb-4 max-w-xs">
              Transforming brands into digital legacies through strategic marketing excellence.
            </p>
            <div className="flex justify-center md:justify-start">
              <SocialFooter />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <div className="font-extrabold mb-4 text-white text-lg">Quick Links</div>
            <ul className="space-y-3 text-base text-gray-300">
              <li><a href="#home" className="hover:text-accent transition-colors block py-1">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors block py-1">About</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors block py-1">Services</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors block py-1">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors block py-1">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <div className="font-extrabold mb-4 text-white text-lg">Our Services</div>
            <ul className="space-y-3 text-base text-gray-300">
              <li><a href="" className="hover:text-accent transition-colors block py-1">Social Media Marketing</a></li>
              <li><a href="" className="hover:text-accent transition-colors block py-1">Performance Marketing</a></li>
              <li><a href="" className="hover:text-accent transition-colors block py-1">Content Creation</a></li>
              <li><a href="" className="hover:text-accent transition-colors block py-1">Web Development</a></li>
              <li><a href="" className="hover:text-accent transition-colors block py-1">Branding & PPC</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <div className="font-extrabold mb-4 text-white text-lg">Contact Us</div>
            <ul className="space-y-3 text-base text-gray-300">
              <li className="leading-relaxed">
                3rd Floor, Infront of TATA Croma,<br />
                Vijay Nagar, Jabalpur,<br />
                Madhya Pradesh 482002
              </li>
              <div className="flex flex-col md:flex-row gap-1 justify-center md:justify-start mt-2">
                <li>+91 9174451227</li>
                <li>+91 9131249316</li>
              </div>
              <li>bigwigsocial@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center">
          <div className="text-sm text-gray-400">
            &copy; {currentYear} Bigwig Social. All rights reserved.
          </div>
          {/* Uncomment if you want policies
          <div className="flex gap-6 mt-4 justify-center">
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors text-sm">Terms of Service</a>
          </div>
          */}
        </div>
      </div>
    </footer>
  )
}