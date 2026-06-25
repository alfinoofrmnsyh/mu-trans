import Link from 'next/link'
import { Truck } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16 border-b border-white/10">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground">
                <Truck className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg">MU Trans</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              PT. MU Trans Transportasi – Your trusted logistics partner across Indonesia and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Menu</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Domestic Freight
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  International Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Courier Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div>
                <p className="text-white/50 text-xs mb-1">Phone</p>
                <p>+62 (0)21 - XXX - XXXX</p>
              </div>
              <div>
                <p className="text-white/50 text-xs mb-1">Email</p>
                <p>info@ubgtrans.co.id</p>
              </div>
              <div>
                <p className="text-white/50 text-xs mb-1">Location</p>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {currentYear} PT. MU Trans Transportasi. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm text-white/60">
            <Link href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-white/30">•</span>
            <Link href="#" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <span className="text-white/30">•</span>
            <Link href="#" className="hover:text-white transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
