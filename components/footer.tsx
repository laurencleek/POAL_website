import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  // Partner logos - in a real implementation, you would replace these with actual logos
  const partners = [
    { name: "London School of Economics and Political Science", logo: "/lse_logo.png?height=60&width=120&text=Harvard" },
    { name: "University of Reading", logo: "/reading_logo.png?height=60&width=120&text=MIT" },
    { name: "University Southampton", logo: "/south_logo.png?height=60&width=120&text=Stanford" }
,
  ]

  return (
    <footer className="bg-black text-white">
      {/* Partners Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <h3 className="text-center text-sm font-medium uppercase tracking-wider text-gray-400 mb-8">Our Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-md p-4 w-full max-w-[200px] h-20 flex items-center justify-center"
              >
                <Image
                  src={partner.logo || "/logo_b.jpg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">Contact</h3>
            <div className="mt-4 space-y-2 text-sm">
              <p>Contact us at: </p>
              <p className="text-emerald-400">publicopinionanalyticslab@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">Mailing Address</h3>
            <div className="mt-4 space-y-2 text-sm">
              <p>Public Opinion Analytics Lab</p>
              <p>University of Reading</p>
              <p>Reading RG6 6AH</p>
              <p>United Kingdom</p>
              <p>Tel: +44 118 987 5123</p>
            </div>
          </div>

          <div>
            <div className="flex items-center -mt-4"> {/* Added -mt-4 for upward adjustment */}
              <Image
                src="/logo_b.jpg" // Ensure this points to public/logo.png
                alt="Public Opinion Analytics Lab Logo"
                width={270} // Adjusted width for footer
                height={120}  // Adjusted height for footer
                className="object-contain mr-2" // Keep or adjust className as needed
              />
            </div>
            <p className="mt-4 text-sm">
              Public Opinion Analytics lab is an academic collaboration with as goal to foster synergies and facilitating academic dialogue.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t border-gray-800 pt-8 md:flex-row md:space-y-0">
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Youtube className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white">
              Press
            </Link>
            <Link href="#" className="hover:text-white">
              Updates
            </Link>
            <Link href="#" className="hover:text-white">
              Join Our Mailing List
            </Link>
            <Link href="#" className="hover:text-white">
              Reprint Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

