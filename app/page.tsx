import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-fence-installation.jpg"
            alt="Professional fence installation crew working on iron fence with stone pillars"
            fill
            className="object-cover"
            priority
          />
          {/* Dark gray gradient from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Expert Fence Installation in Georgia
            </h1>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-orange mb-6 leading-tight">
              Plus Fencing Products Shipped Nationwide
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              FenceWorkshop provides professional fence installation throughout Metro Atlanta and across Georgia,
              along with high-quality aluminum fencing and vinyl fencing available for online purchase and nationwide delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/installation/georgia/"
                className="inline-block bg-brand-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
              >
                Get Fence Installation
              </Link>
              <Link
                href="/shop/"
                className="inline-block bg-brand-green/80 hover:bg-brand-green text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
              >
                Shop Fencing &amp; Gates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Authority Bar */}
      <section className="bg-brand-orange py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white font-medium">Licensed &amp; insured fence installers in Georgia</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white font-medium">15+ Years in Business</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-white font-medium">Commercial &amp; Custom Residential Fencing</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-white font-medium">Durable, code-compliant fence systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Installation Services</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Fence Installation Across Georgia
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                FenceWorkshop specializes in professional commercial fence installation throughout Metro Atlanta
                and surrounding Georgia communities. Our experienced crews fabricate and install chain link, steel,
                and aluminum security gates and fencing with a focus on long-term durability, clean workmanship,
                and compliance with local codes and HOA requirements.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Whether you&#39;re replacing an old fence or installing a new system, we manage the process from
                layout and materials to final installation.
              </p>
              <div className="space-y-3">
                <Link href="/installation/georgia/" className="block text-brand-orange hover:underline">
                  → Fence Installation in Georgia
                </Link>
                <Link href="/installation/process/" className="block text-brand-orange hover:underline">
                  → Our Installation Process
                </Link>
                <Link href="/installation/service-areas/" className="block text-brand-orange hover:underline">
                  → View Service Areas
                </Link>
              </div>
              <div className="mt-8">
                <Link
                  href="/installation/georgia/"
                  className="inline-block bg-brand-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get a Free Quote</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Fencing Online Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-green font-semibold uppercase tracking-wide mb-2">Shop Online</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Buy Fencing &amp; Gates Online — Shipped Nationwide
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              In addition to installation services, FenceWorkshop sells premium fencing and gates online to homeowners,
              contractors, and property managers across the U.S. Our fencing systems are designed using real-world
              installation experience, ensuring reliable performance and easier installs.
            </p>
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Link href="/shop/aluminum-fencing/" className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[3/4]">
              <Image
                src="/images/shop-aluminum-fencing.jpg"
                alt="Aluminum fencing"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">Aluminum Fencing</h3>
                <p className="text-gray-200 text-sm mb-2">Durable, low-maintenance aluminum fence systems</p>
                <span className="text-brand-green font-semibold text-sm group-hover:underline">Shop Aluminum →</span>
              </div>
            </Link>
            <Link href="/shop/vinyl-fencing/" className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[3/4]">
              <Image
                src="/images/shop-vinyl-fencing.jpg"
                alt="Vinyl fencing"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">Vinyl Fencing</h3>
                <p className="text-gray-200 text-sm mb-2">Classic vinyl fencing that never needs painting</p>
                <span className="text-brand-green font-semibold text-sm group-hover:underline">Shop Vinyl →</span>
              </div>
            </Link>
            <Link href="/shop/driveway-gates/" className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[3/4]">
              <Image
                src="/images/shop-driveway-gates.jpg"
                alt="Driveway gates"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">Driveway Gates</h3>
                <p className="text-gray-200 text-sm mb-2">Automated and manual driveway gate systems</p>
                <span className="text-brand-green font-semibold text-sm group-hover:underline">Shop Gates →</span>
              </div>
            </Link>
            <Link href="/shop/walk-gates/" className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[3/4]">
              <Image
                src="/images/shop-walk-gates.jpg"
                alt="Walk gates"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">Walk Gates</h3>
                <p className="text-gray-200 text-sm mb-2">Pedestrian gates for residential properties</p>
                <span className="text-brand-green font-semibold text-sm group-hover:underline">Shop Walk Gates →</span>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/shop/"
              className="inline-block bg-brand-green hover:bg-emerald-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Built By Installers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Built by Installers.
              </h2>
              <h2 className="text-4xl font-bold text-brand-orange mb-6">
                Designed to Last.
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Unlike big-box retailers, FenceWorkshop is built on real installation experience. The same knowledge
                that goes into installing fences across Georgia informs the products we sell nationwide.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Better material specifications</p>
                    <p className="text-gray-600">We know which materials perform in the field because we install them every day.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Practical system designs</p>
                    <p className="text-gray-600">Our fencing systems are engineered for real-world conditions and easier installation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Support from people who actually install fences</p>
                    <p className="text-gray-600">When you call, you talk to fencing professionals — not a call center.</p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                Whether you&#39;re hiring us to install or purchasing materials directly, you&#39;re working with fencing
                specialists — not just a storefront.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Fence project image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Fences Real Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Fences. Real Results.
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              See what our customers and partners have to say about working with FenceWorkshop.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
                across any material or requirement we throw at them, and we still haven&#39;t found a problem they can&#39;t
                solve (though we plan to keep trying). Their communication is professional, their pricing is fair,
                and most importantly, their work is high quality and built to last. Best in the business!&quot;
              </p>
              <div>
                <p className="font-bold text-gray-900">Todd</p>
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

          {/* Project Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Project Photo 1
              </div>
            </div>
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Project Photo 2
              </div>
            </div>
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Project Photo 3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Resources</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fence Guides &amp; Planning Resources
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Choosing the right fence matters. We provide clear, practical guidance to help you plan your
              project and choose the right materials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/guides/aluminum-vs-steel/"
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-brand-orange hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">→ Aluminum vs Steel Fencing</h3>
              <p className="text-gray-600">Compare materials to choose the right fence for your needs</p>
            </Link>
            <Link
              href="/guides/diy-installation/"
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-brand-orange hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">→ Installation Guides for DIY-ers</h3>
              <p className="text-gray-600">Step-by-step instructions for installing your own fence</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-orange text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Installation */}
            <div>
              <h3 className="font-bold text-lg mb-4">Installation</h3>
              <ul className="space-y-2">
                <li><Link href="/installation/georgia/" className="hover:underline">Fence Installation in Georgia</Link></li>
                <li><Link href="/installation/atlanta/" className="hover:underline">Atlanta Fence Installation</Link></li>
                <li><Link href="/installation/marietta/" className="hover:underline">Marietta Fence Installation</Link></li>
                <li><Link href="/installation/alpharetta/" className="hover:underline">Alpharetta Fence Installation</Link></li>
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li>
                <li><Link href="/shop/vinyl-fencing/" className="hover:underline">Vinyl Fencing</Link></li>
                <li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li>
                <li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/guides/" className="hover:underline">Fence Guides</Link></li>
                <li><Link href="/maintenance/" className="hover:underline">Maintenance Tips</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about/" className="hover:underline">About FenceWorkshop</Link></li>
                <li><Link href="/contact/" className="hover:underline">Contact</Link></li>
                <li><Link href="/reviews/" className="hover:underline">Reviews</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-orange-400 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold mb-2">FenceWorkshop</p>
                <p>1522 Huber St NW</p>
                <p>Atlanta, GA 30318</p>
                <p className="mt-2">(404) 314-4419</p>
              </div>
              <div className="md:text-right">
                <p>&copy; 2026 FenceWorkshop. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
