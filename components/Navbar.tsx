'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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
                alt="FenceWorkshop Logo"
                width={200}
                height={32}
                className="h-10 w-auto"
              />
            </Link>
          </div>
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
            <span className="text-brand-orange font-semibold text-lg">(404) 314-4419</span>
            <Link
              href="/contact/"
              className="bg-brand-orange hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
