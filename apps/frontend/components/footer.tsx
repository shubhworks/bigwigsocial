'use client'

import Image from "next/image"
import SocialFooter from "./SocialFooter"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-neutral-dark)] text-white py-12 md:py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-4">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={`/bigwigsocialWhite.png`}
                alt="Bigwig Social Logo"
                width={300}
                height={300}
              />
            </div>
            <p className="text-gray-300 text-sm">
              Transforming brands into digital legacies through strategic marketing excellence.
            </p>
            <div>
              <SocialFooter/>
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="font-extrabold mb-4 text-white">Quick Links</div>
            <ul className="space-y-2 text-lg text-gray-300">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-extrabold mb-4 text-white">The Path to Digital Excellence</div>
            <ul className="space-y-2 text-lg text-gray-300">
              <li><a href="" className="hover:text-accent transition-colors">Social Media Marketing</a></li>
              <li><a href="" className="hover:text-accent transition-colors">Performance Marketing</a></li>
              <li><a href="" className="hover:text-accent transition-colors">Content Creation</a></li>
              <li><a href="" className="hover:text-accent transition-colors">Web Development</a></li>
              <li><a href="" className="hover:text-accent transition-colors">Branding & PPC</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="font-extrabold mb-4 text-white">Contact the Bigwig Social Team</div>
            <ul className="space-y-2 text-lg text-gray-300">
              <li>3rd Floor, Infront of TATA Croma, Vijay Nagar, Jabalpur, Madhya Pradesh 482002</li>
              <div className="flex mt-2">
                <li>+91 9174451227 ,</li>
                <li>+91 9131249316</li>
              </div>
              <li>bigwigsocial@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex justify-center md:flex-row items-center text-sm text-gray-400">
          <div className="">&copy; {currentYear} Bigwig Social. All rights reserved.</div>
          {/* <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
