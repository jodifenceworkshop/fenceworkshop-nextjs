import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-orange text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">

          {/* Installation */}
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

          {/* Shop */}
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li>
              <li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li>
              <li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li>
              <li><Link href="/shop/accessories/" className="hover:underline">Fence Accessories</Link></li>
              <li><Link href="/shop/fence-kits/" className="hover:underline">Fence Kits</Link></li>
              <li><Link href="/shop/vinyl-fencing/" className="hover:underline">Vinyl Fencing</Link></li>
              <li><Link href="/shop/chain-link-fencing/" className="hover:underline">Chain Link Fencing</Link></li>
            </ul>
          </div>

          {/* Repair Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Repair Services</h3>
            <ul className="space-y-2">
              <li><Link href="/installation/georgia/fence-repair/" className="hover:underline">All Repair Services</Link></li>
              <li><Link href="/installation/georgia/dumpster-gate-repair/" className="hover:underline">Dumpster Gate Repair</Link></li>
              <li><Link href="/installation/georgia/chain-link-fence-repair/" className="hover:underline">Chain Link Repair</Link></li>
              <li><Link href="/installation/georgia/roll-gate-slide-gate-repair/" className="hover:underline">Roll &amp; Slide Gate Repair</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/shop/resources/how-to-install-aluminum-fence/" className="hover:underline">How to Install Aluminum Fence</Link></li>
              <li><Link href="/shop/resources/pool-code-aluminum-fence/" className="hover:underline">Pool Code Fence Guide</Link></li>
              <li><Link href="/shop/resources/pet-fence/" className="hover:underline">Pet &amp; Puppy Fence Guide</Link></li>
              <li><Link href="/shop/resources/residential-vs-commercial-aluminum-fence/" className="hover:underline">Residential vs Commercial Grade</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us/" className="hover:underline">About Fence Workshop</Link></li>
              <li><Link href="/contact/" className="hover:underline">Contact</Link></li>
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
  )
}
