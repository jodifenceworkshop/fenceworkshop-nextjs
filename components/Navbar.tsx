'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 ${
        scrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/fenceworkshop-logo.png"
                alt="Fence Workshop Logo"
                width={200}
                height={32}
                className="h-10 w-auto contrast-125 brightness-75"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/installation/georgia/" className="text-gray-700 hover:text-brand-orange font-medium">
              Installation
            </Link>
            <Link href="/shop/" className="text-gray-700 hover:text-brand-orange font-medium">
              Shop Fencing
            </Link>
            <Link href="/resources/" className="text-gray-700 hover:text-brand-orange font-medium">
              Resources
            </Link>
            <Link href="/about/" className="text-gray-700 hover:text-brand-orange font-medium">
              About
            </Link>
            <a href="tel:4043144419" className="text-brand-orange font-semibold text-lg">(404) 314-4419</a>
            <Link
              href="/contact/"
              className="bg-brand-orange hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Get A Quote
            </Link>
          </div>

          {/* Mobile: Phone + Quote + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a href="tel:4043144419" className="text-brand-orange" aria-label="Call Fence Workshop">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <Link
              href="/contact/"
              className="bg-brand-orange text-white font-semibold px-4 py-2 rounded-lg text-sm"
            >
              Quote
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 border-t border-gray-200' : 'max-h-0'
        }`}
      >
        <div className="bg-white px-4 py-4 space-y-3">
          <Link href="/installation/georgia/" className="block text-gray-700 hover:text-brand-orange font-medium py-2" onClick={() => setMenuOpen(false)}>
            Installation
          </Link>
          <Link href="/shop/" className="block text-gray-700 hover:text-brand-orange font-medium py-2" onClick={() => setMenuOpen(false)}>
            Shop Fencing
          </Link>
          <Link href="/resources/" className="block text-gray-700 hover:text-brand-orange font-medium py-2" onClick={() => setMenuOpen(false)}>
            Resources
          </Link>
          <Link href="/about/" className="block text-gray-700 hover:text-brand-orange font-medium py-2" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <a href="tel:4043144419" className="block text-brand-orange font-semibold py-2">
            (404) 314-4419
          </a>
        </div>
      </div>
    </nav>
  )
}
