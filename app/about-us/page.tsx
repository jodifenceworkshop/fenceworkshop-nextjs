import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Fence Workshop | Commercial Fence Contractor in Atlanta, GA',
  description: 'Family-owned commercial fencing contractor based in Atlanta, GA. 15+ years of experience installing fences and gates for commercial and industrial properties across Georgia.',
}

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <LocalBusinessSchema />
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              About Fence Workshop
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">
              Family-Owned Fencing Experts Serving the Southeast Since 2011
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              From our home base in Atlanta, we&rsquo;ve grown into one of Georgia&rsquo;s most trusted commercial
              fencing contractors — and a nationwide resource for premium fencing materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/installation/georgia/commercial-fence-installation/#quote"
                className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+14043144419"
                className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center"
              >
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
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white font-medium">Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white font-medium">15+ Years in Business</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span className="text-white font-medium">Family-Owned &amp; Operated</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-white font-medium">Georgia Tech &amp; GSU Educated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Our Story</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built on Expertise, Driven by Service
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Fence Workshop was founded in 2011 by graduates of Georgia Tech and Georgia State University
                with backgrounds in architecture, real estate development, building construction, and urban planning.
                What started as a local Atlanta fencing operation has grown into a regional leader in{' '}
                <Link href="/installation/georgia/commercial-fence-installation/" className="text-brand-orange hover:underline font-medium">
                  commercial fence installation
                </Link>{' '}
                and a nationwide resource for premium fencing materials.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our architecture and construction backgrounds aren&rsquo;t just credentials — they inform every
                project we take on. We understand site grading, structural loads, code compliance, and how a fence
                system integrates with the broader built environment. That&rsquo;s what separates us from
                companies that simply set posts and stretch fabric.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Over 15 years later, we&rsquo;ve installed thousands of commercial and industrial fence systems
                across Georgia and the Southeast — and shipped premium fencing materials to DIY homeowners and
                contractors in all 50 states.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative bg-gray-200">
                <Image
                  src="/images/hero-georgia-installation.jpg"
                  alt="Commercial fence and gate installation by Fence Workshop in Atlanta, GA"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Service Models */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">What We Do</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Two Ways We Serve You
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Fence Workshop operates two complementary business lines — professional installation services
              and nationwide material sales — both backed by the same expertise and commitment to quality.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <svg className="w-10 h-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.5a.42.42 0 01-.06-.57l3.19-3.5a.42.42 0 01.58-.06l5.1 3.5a.42.42 0 01.06.57l-3.19 3.5a.42.42 0 01-.58.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Fence Installation</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our primary focus is commercial and industrial fence installation throughout Metro Atlanta and
                Georgia. We work with property managers, general contractors, municipalities, and business owners
                to deliver code-compliant installations — from chain link perimeter fencing to automated security
                gate systems.
              </p>
              <div className="space-y-2">
                <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  &rarr; Commercial Fence Installation in Georgia
                </Link>
                <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  &rarr; Fence Installation in Atlanta, GA
                </Link>
                <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  &rarr; Fence Installation in Marietta, GA
                </Link>
                <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  &rarr; Fence Installation in Alpharetta, GA
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <svg className="w-10 h-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-2.25h-3m3 0v-2.25m0 2.25h3m-7.5 0V9.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v2.25m-4.5 0h4.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Fencing Materials, Shipped Nationwide</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Beyond installation, we supply premium aluminum, vinyl, and chain link fencing materials to
                DIY homeowners and smaller contractors across the country. Every order includes hands-on support
                to help you spec the right materials, plan your layout, and get everything you need in one shipment.
                All materials are USA-manufactured.
              </p>
              <div className="space-y-2">
                <Link href="/shop/aluminum-fencing/" className="block text-brand-orange hover:underline font-medium">
                  &rarr; Shop Aluminum Fencing
                </Link>
                <Link href="/shop/vinyl-fencing/" className="block text-brand-orange hover:underline font-medium">
                  &rarr; Shop Vinyl Fencing
                </Link>
                <Link href="/shop/driveway-gates/" className="block text-brand-orange hover:underline font-medium">
                  &rarr; Shop Driveway Gates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Reasons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Why Fence Workshop</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              10 Reasons to Hire Fence Workshop
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We&rsquo;ve been doing this for over 15 years. Here&rsquo;s what we&rsquo;ve learned matters
              most to our clients — and why they keep coming back.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                number: '01',
                title: 'Manufacturer Warranties',
                description: 'We offer best-in-class manufacturer warranties on all fencing products. Your investment is protected from day one.',
              },
              {
                number: '02',
                title: 'Quality Construction',
                description: 'Our architecture backgrounds mean we account for grading, slope, and structural integrity. The result is a fence that looks right and lasts.',
              },
              {
                number: '03',
                title: 'Built to Last',
                description: 'We use commercial-grade materials and proven techniques on every project. Our fences are engineered for decades of service, not just a few years.',
              },
              {
                number: '04',
                title: 'Competitive Pricing',
                description: <span>Direct relationships with manufacturers like <Link href="/ameristar/" className="text-brand-orange hover:underline">Ameristar</Link> and Bufftech allow us to offer fair, transparent pricing without sacrificing quality.</span>,
              },
              {
                number: '05',
                title: 'Qualified & Experienced Team',
                description: 'Degreed professionals with backgrounds in landscape design, engineering, and construction. Licensed, bondable, and insured in Georgia.',
              },
              {
                number: '06',
                title: 'Any Fence Type or Style',
                description: 'From standard chain link to automated security gate systems — we handle every fence type, material, and configuration for commercial properties.',
              },
              {
                number: '07',
                title: 'Honest Business Practices',
                description: 'Our business is built on repeat customers and referrals. We quote fairly, communicate clearly, and never surprise you with change orders mid-project.',
              },
              {
                number: '08',
                title: 'Exceptional Customer Service',
                description: 'We make the process easy from first call to final walkthrough. One point of contact, clear timelines, and responsive communication throughout.',
              },
              {
                number: '09',
                title: 'Fully Customizable Solutions',
                description: 'Every property is different. We customize materials, heights, configurations, and access systems to fit your exact requirements and budget.',
              },
              {
                number: '10',
                title: 'Community Oriented',
                description: 'We sponsor local organizations, support Habitat for Humanity, and invest in the communities where we live and work across Metro Atlanta.',
              },
            ].map((reason) => (
              <div key={reason.number} className="flex gap-5">
                <div className="text-4xl font-bold text-brand-orange/20 leading-none flex-shrink-0 w-12">{reason.number}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg className="w-12 h-12 text-brand-orange mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
          </svg>
          <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
            We help people solve their fencing and security problems with excellent customer service
            and quality — whether you&rsquo;re speaking with us on the phone or seeing our work on the ground.
          </p>
          <div>
            <p className="text-brand-orange font-bold text-lg">The Fence Workshop Team</p>
            <p className="text-gray-400">Atlanta, Georgia</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Reviews</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;As a contractor and exterior services provider, having a strong partner network is critical to
                delivering great outcomes for our clients. Working with the Fence Workshop team has been a standout
                for everyone at Terra CPS. They handle the full scope of fencing and gates (design, build, and repair)
                across any material or requirement we throw at them, and we still haven&rsquo;t found a problem they can&rsquo;t
                solve (though we plan to keep trying). Their communication is professional, their pricing is fair,
                and most importantly, their work is high quality and built to last. Best in the business!&quot;
              </p>
              <div>
                <p className="font-bold text-gray-900">Todd Hanner</p>
                <p className="text-gray-600">President, TerraCPS</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;I love working with Fence Workshop. When I put them on a job, I know it will be completed exactly
                as scheduled and for the quoted amount. They have never come back mid-project asking for additional
                funds, which speaks volumes about their integrity and planning. The quality of their work is outstanding.
                They consistently go above and beyond to ensure every project is completed professionally and is
                aesthetically pleasing. Adam and Blair are both fantastic to work with and truly make my job easier.&quot;
              </p>
              <div>
                <p className="font-bold text-gray-900">Eddie Jensen</p>
                <p className="text-gray-600">Account Executive, Miner, LTD. - Southeast Region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether you need a commercial fence installed in Georgia or premium fencing materials shipped
            anywhere in the country — we&rsquo;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/installation/georgia/commercial-fence-installation/#quote"
              className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:+14043144419"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
            >
              Call (404) 314-4419
            </a>
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
                <li><Link href="/installation/georgia/marietta-fence-installation/" className="hover:underline">Marietta Fence Installation</Link></li>
                <li><Link href="/installation/georgia/alpharetta-fence-installation/" className="hover:underline">Alpharetta Fence Installation</Link></li>
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
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/guides/" className="hover:underline">Fence Guides</Link></li>
                <li><Link href="/maintenance/" className="hover:underline">Maintenance Tips</Link></li>
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
