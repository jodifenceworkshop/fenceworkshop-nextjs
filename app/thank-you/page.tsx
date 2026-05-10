import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | Fence Workshop',
  description: 'We received your request and will be in touch within one business day.',
  robots: 'noindex, nofollow',
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-20" />

      <section className="bg-gray-900 py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Checkmark */}
          <div className="w-20 h-20 rounded-full bg-brand-orange flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Thanks for reaching out!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            We received your request and will get back to you within one business day.
            Check your inbox — we sent you a confirmation email.
          </p>

          <div className="bg-white/10 rounded-lg p-6 mb-10 text-left">
            <p className="text-gray-300 text-sm font-semibold uppercase tracking-wide mb-3">Need a faster response?</p>
            <a href="tel:+14043144419" className="text-2xl font-bold text-brand-orange hover:underline">
              (404) 314-4419
            </a>
            <p className="text-gray-400 text-sm mt-1">Monday – Friday, 8:00 AM – 5:00 PM</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/shop/"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
