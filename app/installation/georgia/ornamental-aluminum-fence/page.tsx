import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between aluminum and wrought iron ornamental fencing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aluminum is lighter, rust-free, and lower maintenance — ideal for Georgia's humid climate. Wrought iron is heavier and stronger but requires periodic painting and rust treatment. We install both and can help you choose the right material based on your project requirements and budget."
      }
    },
    {
      "@type": "Question",
      "name": "Can ornamental fencing be used for security?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. With increased height, spear-top pickets, and tighter spacing, ornamental fencing provides effective commercial property security. It's not suitable for maximum-security applications, but works well for corporate campuses, municipal properties, and commercial facilities that need both aesthetics and access control."
      }
    },
    {
      "@type": "Question",
      "name": "What colors are available for ornamental fencing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard powder-coat colors include black, bronze, white, and dark green. Custom colors are available for commercial projects with minimum order quantities. Powder-coat finishes are highly durable and UV-resistant, maintaining their appearance for decades."
      }
    },
    {
      "@type": "Question",
      "name": "Do you install ornamental fence around pools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We install pool-code compliant ornamental fencing with self-closing, self-latching gates per Georgia pool barrier requirements. Pool fence must meet specific height and picket spacing standards — we ensure every installation is fully compliant."
      }
    },
    {
      "@type": "Question",
      "name": "How long does ornamental fence installation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical commercial ornamental fence project takes 3–7 days depending on scope, terrain, and custom fabrication requirements. Projects with extensive custom work or large perimeters may require additional time. We provide a detailed timeline with every quote."
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Commercial Ornamental & Aluminum Fence Installation in Georgia | Fence Workshop',
  description: 'Commercial ornamental and aluminum fence installation in Metro Atlanta and Georgia. Architectural-grade iron and aluminum fencing. Licensed & insured. Free quotes.',
}

const faqs = [
  {
    question: 'What is the difference between aluminum and wrought iron ornamental fencing?',
    answer: 'Aluminum is lighter, rust-free, and lower maintenance — ideal for Georgia\'s humid climate. Wrought iron is heavier and stronger but requires periodic painting and rust treatment. We install both and can help you choose the right material based on your project requirements and budget.',
  },
  {
    question: 'Can ornamental fencing be used for security?',
    answer: 'Yes. With increased height, spear-top pickets, and tighter spacing, ornamental fencing provides effective commercial property security. It\'s not suitable for maximum-security applications, but works well for corporate campuses, municipal properties, and commercial facilities that need both aesthetics and access control.',
  },
  {
    question: 'What colors are available for ornamental fencing?',
    answer: 'Standard powder-coat colors include black, bronze, white, and dark green. Custom colors are available for commercial projects with minimum order quantities. Powder-coat finishes are highly durable and UV-resistant, maintaining their appearance for decades.',
  },
  {
    question: 'Do you install ornamental fence around pools?',
    answer: 'Yes. We install pool-code compliant ornamental fencing with self-closing, self-latching gates per Georgia pool barrier requirements. Pool fence must meet specific height and picket spacing standards — we ensure every installation is fully compliant.',
  },
  {
    question: 'How long does ornamental fence installation take?',
    answer: 'A typical commercial ornamental fence project takes 3–7 days depending on scope, terrain, and custom fabrication requirements. Projects with extensive custom work or large perimeters may require additional time. We provide a detailed timeline with every quote.',
  },
]

export default function OrnamentalAluminumFencePage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/installation/georgia/commercial-fence-installation/" className="hover:text-white transition-colors">
                Georgia Installation
              </Link>
              <span>/</span>
              <span className="text-gray-200">Ornamental &amp; Aluminum Fence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Commercial Ornamental &amp; Aluminum Fence Installation in Georgia
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">
              Architectural-Grade Fencing for Commercial Properties
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Fence Workshop installs ornamental iron and aluminum fencing for commercial properties, municipalities,
              HOAs, and high-end projects through general contractors. Combines aesthetics with security.
              Licensed &amp; insured with 15+ years experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center">
                Get a Free Quote
              </a>
              <a href="tel:+14043144419" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center">
                Call (404) 314-4419
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-orange py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span className="text-white font-medium">Licensed &amp; insured fence installers in Georgia</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-white font-medium">15+ Years in Business</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <span className="text-white font-medium">Commercial &amp; Industrial Specialists</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              <span className="text-white font-medium">Best Customer Service from Start to Finish</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ornamental Fencing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Why Ornamental</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Commercial Ornamental Fencing?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ornamental fencing delivers the perfect balance of aesthetics and functionality for commercial
              properties that need to make an impression while defining boundaries and controlling access.
            </p>
          </div>

          <div className="mb-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="aspect-[16/7] relative bg-gray-200">
              <Image src="/images/service-ornamental-gate.jpg" alt="Ornamental aluminum fence installed by Fence Workshop at a commercial property in Georgia" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Professional Appearance',
                description: 'Architectural-grade designs that enhance property value and curb appeal while providing effective perimeter definition for commercial properties.',
                icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>),
              },
              {
                title: 'Durable & Rust-Free',
                description: 'Aluminum construction eliminates rust and corrosion, ideal for Georgia\'s humid climate with virtually zero maintenance required over the life of the fence.',
                icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
              },
              {
                title: 'Versatile Styles',
                description: 'Available in flat-top, spear-top, and custom designs in a wide range of heights and colors to match any architectural style or property aesthetic.',
                icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>),
              },
              {
                title: 'ADA & Code Compliant',
                description: 'Pool-code compliant options and ADA-accessible gate configurations available. Every installation meets Georgia and local building codes.',
                icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>),
              },
              {
                title: 'Low Maintenance',
                description: 'Unlike wrought iron, aluminum ornamental fencing never needs painting or rust treatment. Powder-coat finishes last for decades with no upkeep.',
                icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.5a.42.42 0 01-.06-.57l3.19-3.5a.42.42 0 01.58-.06l5.1 3.5a.42.42 0 01.06.57l-3.19 3.5a.42.42 0 01-.58.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
              },
              {
                title: 'Security Options',
                description: 'Add puppy panels, enhanced picket spacing, or increased height for properties needing both aesthetics and access control at the perimeter.',
                icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>),
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Applications</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ornamental Fence Applications</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ornamental fencing is the preferred choice for properties where appearance matters as much as function.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Corporate Campuses & Office Parks', description: 'Professional perimeter fencing that matches architectural design standards and enhances brand presence for corporate environments.' },
              { title: 'Municipal & Government Properties', description: 'Parks, civic buildings, memorials, and public spaces requiring durable, attractive boundary fencing that serves the community.' },
              { title: 'HOA & Multi-Family Communities', description: 'Entrance features, pool enclosures, and property boundaries for planned developments, apartment communities, and condominiums.' },
              { title: 'Schools & Universities', description: 'Campus perimeter, athletic facilities, and courtyard enclosures meeting educational facility security and aesthetic standards.' },
              { title: 'Retail & Hospitality Properties', description: 'Hotels, restaurants, shopping centers, and mixed-use developments requiring upscale perimeter definition and outdoor dining enclosures.' },
              { title: 'High-End Residential via GC', description: 'Custom ornamental installations for luxury homes, handled through general contractors and custom home builders throughout Georgia.' },
            ].map((app) => (
              <div key={app.title} className="flex gap-4">
                <span className="text-brand-orange font-bold text-2xl mt-1 flex-shrink-0">&bull;</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Materials</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ornamental Fence Materials &amp; Options</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aluminum Fence Options</h3>
              <ul className="space-y-3">
                {['Industrial-grade aluminum (commercial specification)', 'Residential-grade aluminum for GC projects', 'Flat-top picket profiles', 'Spear-top and trident-top options', 'Custom ornamental designs and finishes', 'Powder-coat colors: black, bronze, white, and custom'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Iron &amp; Steel Options</h3>
              <ul className="space-y-3">
                {['Wrought iron ornamental panels', 'Galvanized steel ornamental systems', 'Welded steel picket fencing', 'Custom scrollwork and decorative elements', 'Hot-dip galvanized + powder-coat finish', 'Matching walk gates and driveway gates'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Our Process</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Ornamental Fence Installation Works</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">From design to final walkthrough, we manage every step of your ornamental fence project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { step: '01', title: 'Request a Quote', description: 'Tell us about your project — property type, style preferences, approximate footage, and timeline. We\'ll follow up within one business day.' },
              { step: '02', title: 'Site Visit & Design', description: 'We visit your property, take measurements, and discuss style options. We\'ll help select the right material, color, and design for your project.' },
              { step: '03', title: 'Fabrication & Materials', description: 'Panels and gates are sourced or custom-fabricated to your specifications. Custom ornamental work may require additional lead time for fabrication.' },
              { step: '04', title: 'Installation & Walkthrough', description: 'Our experienced crews install on schedule. Every project ends with a walkthrough to confirm it meets code and your expectations.' },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-6xl font-bold text-brand-orange/20 mb-2 leading-none">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Related Services</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Commercial Fence Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Explore our other fencing solutions to find the right fit for your project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Commercial Chain Link Fence Installation', description: 'Heavy-duty commercial chain link for perimeter security, job sites, and property boundaries. Galvanized and vinyl-coated options.', href: '/installation/georgia/commercial-chain-link-fence/' },
              { title: 'Security Gate Systems & Access Control', description: 'Automated gate systems with keypads, card readers, and telephone entry for controlled vehicle and pedestrian access.', href: '/installation/georgia/security-gate-systems/' },
              { title: 'Commercial Security Fence Installation', description: 'High-security fencing with anti-climb designs, barbed wire, and razor ribbon for maximum perimeter protection.', href: '/installation/georgia/commercial-security-fence/' },
            ].map((service) => (
              <Link key={service.title} href={service.href} className="block bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow group">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.description}</p>
                <span className="text-brand-orange font-semibold text-sm">Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas + Quote Form */}
      <section id="quote" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ornamental Fence Installation Across Georgia</h2>
              <p className="text-lg text-gray-700 mb-6">We install commercial ornamental fencing throughout Metro Atlanta and across the state of Georgia for commercial properties, municipalities, and general contractors.</p>
              <p className="text-lg text-gray-700 mb-8">Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs, Kennesaw, and surrounding communities.</p>
              <div className="space-y-3">
                <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Ornamental Fence Installation in Atlanta, GA</Link>
                <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Ornamental Fence Installation in Marietta, GA</Link>
                <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Ornamental Fence Installation in Alpharetta, GA</Link>
                <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium mt-6">&larr; All Commercial Fence Services in Georgia</Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
              <p className="text-gray-600 mb-6">Tell us about your ornamental fence project and we&rsquo;ll respond within one business day.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none" placeholder="Style preference, approximate footage, location, timeline, etc."></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">Request Free Quote</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ornamental Fence Installation — Frequently Asked Questions</h2>
          </div>
          <ul className="space-y-8">
            {faqs.map((faq) => (
              <li key={faq.question} className="flex gap-4">
                <span className="text-brand-orange font-bold text-xl mt-0.5">&bull;</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
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
                <li><Link href="/installation/georgia/marietta-fence-installation/" className="hover:underline">Marietta Fence Installation</Link></li>
                <li><Link href="/installation/georgia/alpharetta-fence-installation/" className="hover:underline">Alpharetta Fence Installation</Link></li>
                <li><Link href="/installation/service-areas/" className="hover:underline">View Service Areas</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li>
                <li><Link href="/shop/vinyl-fencing/" className="hover:underline">Vinyl Fencing</Link></li>
                <li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li>
                <li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Repair Services</h3>
              <ul className="space-y-2">
                <li><Link href="/installation/georgia/fence-repair/" className="hover:underline">All Repair Services</Link></li>
                <li><Link href="/installation/georgia/dumpster-gate-repair/" className="hover:underline">Dumpster Gate Repair</Link></li>
                <li><Link href="/installation/georgia/chain-link-fence-repair/" className="hover:underline">Chain Link Repair</Link></li>
                <li><Link href="/installation/georgia/roll-gate-slide-gate-repair/" className="hover:underline">Roll &amp; Slide Gate Repair</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about-us/" className="hover:underline">About Fence Workshop</Link></li>
                <li><Link href="/contact/" className="hover:underline">Contact</Link></li>
                <li><Link href="/reviews/" className="hover:underline">Reviews</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-400 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold mb-2">Fence Workshop</p>
                <p>1522 Huber St NW</p>
                <p>Atlanta, GA 30318</p>
                <p className="mt-2">(404) 314-4419</p>
              </div>
              <div className="md:text-right">
                <p>&copy; 2026 Fence Workshop. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
