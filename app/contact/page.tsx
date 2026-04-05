import Link from 'next/link'
import Navbar from '@/components/Navbar'
import QuoteForm from '@/components/QuoteForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Fence Workshop | Get a Quote | Atlanta, GA',
  description: 'Contact Fence Workshop for a fence installation quote in Georgia or a custom aluminum fence product quote shipped nationwide. Call (404) 314-4419 or use our quote form.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-20" />

      {/* Hero */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Contact Fence Workshop
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Get a quote for fence installation in Georgia, or a custom product quote on
            commercial grade fencing shipped nationwide. We typically respond within one
            business day.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you&apos;re planning a fence installation in Metro Atlanta, ordering
                residential aluminum fence panels online, or sourcing commercial grade fencing
                for a project anywhere in the country — we&apos;re happy to help.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+14043144419" className="text-lg text-brand-orange hover:underline">
                    (404) 314-4419
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:info@fenceworkshop.com" className="text-lg text-brand-orange hover:underline">
                    info@fenceworkshop.com
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-700">
                    Fence Workshop<br />
                    1522 Huber St NW<br />
                    Atlanta, GA 30318
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                  <p className="text-gray-700">
                    Monday – Friday: 8:00 AM – 5:00 PM<br />
                    Saturday &amp; Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">What We Can Quote</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>&bull; Fence installation in Metro Atlanta &amp; Georgia</li>
                  <li>&bull; Residential aluminum fence panels (ships nationwide)</li>
                  <li>&bull; Commercial &amp; industrial grade aluminum fence (custom quote, ships nationwide)</li>
                  <li>&bull; Custom-sized walk gates and driveway gates</li>
                  <li>&bull; Access control and gate operator systems</li>
                </ul>
              </div>
            </div>

            {/* Quote Form */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg h-fit">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h2>
              <p className="text-gray-700 mb-6">
                Fill out the form and we&apos;ll get back to you within one business day.
              </p>
              <QuoteForm showProjectType subject="Quote Request — Contact Page" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-orange text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Installation</h3>
              <ul className="space-y-2">
                <li><Link href="/installation/georgia/commercial-fence-installation/" className="hover:underline">Fence Installation in Georgia</Link></li>
                <li><Link href="/installation/georgia/atlanta-fence-installation/" className="hover:underline">Atlanta Fence Installation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li>
                <li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li>
                <li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/resources/residential-vs-commercial-aluminum-fence/" className="hover:underline">Residential vs Commercial</Link></li>
                <li><Link href="/shop/resources/pool-code-aluminum-fence/" className="hover:underline">Pool Code Fence Guide</Link></li>
                <li><Link href="/shop/resources/pet-fence/" className="hover:underline">Pet &amp; Puppy Fence Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about-us/" className="hover:underline">About Fence Workshop</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-400 pt-8">
            <p className="md:text-right">&copy; 2026 Fence Workshop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
