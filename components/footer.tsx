import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SFjWzaQn3iSVUATkt2r1JUBtLRVilR.png"
                alt="POWWRR Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 max-w-xs">
              Powering Progress – Sustainable Energy Solutions from Portable to Grid
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/home-business" className="text-gray-400 hover:text-white">
                  Home & Business Installations
                </Link>
              </li>
              <li>
                <Link href="/solutions/industrial-agricultural" className="text-gray-400 hover:text-white">
                  Industrial & Agricultural
                </Link>
              </li>
              <li>
                <Link href="/solutions/portable-power" className="text-gray-400 hover:text-white">
                  Portable Power & Gadgets
                </Link>
              </li>
              <li>
                <Link href="/solutions/infrastructure-grid" className="text-gray-400 hover:text-white">
                  Infrastructure & Grid
                </Link>
              </li>
              <li>
                <Link href="/solutions/ev-charging" className="text-gray-400 hover:text-white">
                  EV Charging Systems
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/innovation" className="text-gray-400 hover:text-white">
                  Innovation & Technology
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-gray-400 hover:text-white">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white">
                  Projects / Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <a href="mailto:info@powwrr.com" className="text-gray-400 hover:text-white">
                  info@powwrr.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">
                  POWWRR Headquarters, <br />
                  Accra, Ghana
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} POWWRR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
