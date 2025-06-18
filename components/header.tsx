"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Research", href: "/research" },
    { name: "Resources", href: "/resources" },
    { name: "Events", href: "/events" },
    { name: "People", href: "/people" },
    { name: "Consultancy", href: "/consultancy" },
  ]

  return (
    <header className="w-full border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png" // Assuming logo.png is in the public folder
            alt="Public Opinion Analytics Lab Logo"
            width={200} // Adjust width as needed
            height={50} // Adjust height as needed
            priority // Add priority if it's an LCP element
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-6 py-2 text-sm font-medium uppercase tracking-wider text-gray-800 hover:text-emerald-600 border-r last:border-r-0 border-emerald-200"
            >
              {item.name}
            </Link>
          ))}
          <button className="ml-4 p-2 text-gray-700 hover:text-emerald-600">
            <Search className="h-5 w-5" />
          </button>
        </nav>

        <div className="md:hidden">
          <button
            className="p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

