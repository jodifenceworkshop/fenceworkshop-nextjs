import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Image
                src="https://fenceworkshop.com/wp-content/uploads/2023/03/logo-1.jpg"
                alt="FenceWorkshop Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/installation/georgia" className="text-gray-700 hover:text-brand-orange">Installation</Link>
              <Link href="/shop" className="text-gray-700 hover:text-brand-orange">Shop</Link>
              <Link href="/about" className="text-gray-700 hover:text-brand-orange">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-brand-orange">Contact</Link>
            </div>
            <div className="text-brand-orange font-semibold text-lg">
              (404) 314-4419
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://fenceworkshop.com/wp-content/uploads/2011/09/Hero-Yellow-Flowers.jpg"
            alt="Professional fence installation"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Fence Installation in Georgia — Plus Fencing Products Shipped Nationwide
            </h1>
            <p className="text-xl text-white mb-8">
              FenceWorkshop provides professional fence installation throughout Metro Atlanta and across Georgia,
              along with high-quality aluminum and vinyl fencing available for online purchase and nationwide delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/installation/georgia"
                className="inline-block bg-brand-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
              >
                Get Fence Installation →
              </Link>
              <Link
                href="/shop"
                className="inline-block bg-brand-green hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
              >
                Shop Fencing & Gates →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Authority Bar */}
      <section className="bg-gray-50 py-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-green-600 mr-2">✔</span>
              <span className="text-gray-700">Licensed & insured fence installers in Georgia</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-green-600 mr-2">✔</span>
              <span className="text-gray-700">20+ Years of hands-on installation experience</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-green-600 mr-2">✔</span>
              <span className="text-gray-700">Commercial & Custom Residential Fencing</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-green-600 mr-2">✔</span>
              <span className="text-gray-700">Durable, code-compliant fence systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
                Whether you're replacing an old fence or installing a new system, we manage the process from
                layout and materials to final installation.
              </p>
              <div className="space-y-3">
                <Link href="/installation/georgia" className="block text-brand-orange hover:underline">
                  → Fence Installation in Georgia
                </Link>
                <Link href="/installation/process" className="block text-brand-orange hover:underline">
                  → Our Installation Process
                </Link>
                <Link href="/installation/service-areas" className="block text-brand-orange hover:underline">
                  → View Service Areas
                </Link>
              </div>
              <div className="mt-8">
                <Link
                  href="/installation/georgia"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Buy Fencing & Gates Online — Shipped Nationwide
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              In addition to installation services, FenceWorkshop sells premium fencing and gates online to homeowners,
              contractors, and property managers across the U.S. Our fencing systems are designed using real-world
              installation experience, ensuring reliable performance and easier installs.
            </p>
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-brand-green text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aluminum Fencing</h3>
              <p className="text-gray-600 mb-4">Durable, low-maintenance aluminum fence systems</p>
              <Link href="/shop/aluminum-fencing" className="text-brand-green hover:underline font-semibold">
                Shop Aluminum →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-brand-green text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vinyl Fencing</h3>
              <p className="text-gray-600 mb-4">Classic vinyl fencing that never needs painting</p>
              <Link href="/shop/vinyl-fencing" className="text-brand-green hover:underline font-semibold">
                Shop Vinyl →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-brand-green text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Driveway Gates</h3>
              <p className="text-gray-600 mb-4">Automated and manual driveway gate systems</p>
              <Link href="/shop/driveway-gates" className="text-brand-green hover:underline font-semibold">
                Shop Gates →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-brand-green text-4xl mb-4">🚶</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Walk Gates</h3>
              <p className="text-gray-600 mb-4">Pedestrian gates for residential properties</p>
              <Link href="/shop/walk-gates" className="text-brand-green hover:underline font-semibold">
                Shop Walk Gates →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/shop"
              className="inline-block bg-brand-green hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Why FenceWorkshop Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built by Installers. <span className="text-brand-orange">Designed to Last.</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Unlike big-box retailers, FenceWorkshop is built on real installation experience. The same knowledge
                that goes into installing fences across Georgia informs the products we sell nationwide.
              </p>
              <p className="text-lg font-semibold text-gray-900 mb-4">That means:</p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  Better material specifications
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  Practical system designs
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  Support from people who actually install fences
                </li>
              </ul>
              <p className="text-lg text-gray-700 mt-6">
                Whether you're hiring us to install or purchasing materials directly, you're working with fencing
                specialists — not just a storefront.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="aspect-video bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Image placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Fences Real Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Real Fences. Real Results.
          </h2>

          {/* Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6 italic">
                "As a contractor and exterior services provider, having a strong partner network is critical to
                delivering great outcomes for our clients. Working with the Fence Workshop team has been a standout
                for everyone at Terra CPS. They handle the full scope of fencing and gates (design, build, and repair)
                across any material or requirement we throw at them, and we still haven't found a problem they can't
                solve (though we plan to keep trying). Their communication is professional, their pricing is fair,
                and most importantly, their work is high quality and built to last. Best in the business!"
              </p>
              <div>
                <p className="font-bold text-gray-900">Todd</p>
                <p className="text-gray-600">President, TerraCPS</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6 italic">
                "I love working with Fence Workshop. When I put them on a job, I know it will be completed exactly
                as scheduled and for the quoted amount. They have never come back mid-project asking for additional
                funds, which speaks volumes about their integrity and planning. The quality of their work is outstanding.
                They consistently go above and beyond to ensure every project is completed professionally and is
                aesthetically pleasing. Adam and Blair are both fantastic to work with and truly make my job easier."
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fence Guides & Planning Resources
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Choosing the right fence matters. We provide clear, practical guidance to help you plan your
              project and choose the right materials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/guides/aluminum-vs-steel"
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-brand-orange hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">→ Aluminum vs Steel Fencing</h3>
              <p className="text-gray-600">Compare materials to choose the right fence for your needs</p>
            </Link>
            <Link
              href="/guides/diy-installation"
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
                <li><Link href="/installation/georgia" className="hover:underline">Fence Installation in Georgia</Link></li>
                <li><Link href="/installation/atlanta" className="hover:underline">Atlanta Fence Installation</Link></li>
                <li><Link href="/installation/marietta" className="hover:underline">Marietta Fence Installation</Link></li>
                <li><Link href="/installation/alpharetta" className="hover:underline">Alpharetta Fence Installation</Link></li>
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/aluminum-fencing" className="hover:underline">Aluminum Fencing</Link></li>
                <li><Link href="/shop/vinyl-fencing" className="hover:underline">Vinyl Fencing</Link></li>
                <li><Link href="/shop/driveway-gates" className="hover:underline">Driveway Gates</Link></li>
                <li><Link href="/shop/walk-gates" className="hover:underline">Walk Gates</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/guides" className="hover:underline">Fence Guides</Link></li>
                <li><Link href="/maintenance" className="hover:underline">Maintenance Tips</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:underline">About FenceWorkshop</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                <li><Link href="/reviews" className="hover:underline">Reviews</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-orange-400 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold mb-2">FenceWorkshop</p>
                <p>[Your Physical Address Here]</p>
                <p>Atlanta, GA [ZIP]</p>
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
