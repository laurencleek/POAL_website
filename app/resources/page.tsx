import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center">Resources</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Data+Tools"
                  alt="Data Tools"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Data Tools</h3>
                <p className="text-gray-700 mb-4">
                  Interactive tools to explore economic mobility data across the United States.
                </p>
                <Link href="#" className="text-emerald-600 hover:text-emerald-800 inline-flex items-center">
                  Explore tools <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Publications"
                  alt="Publications"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Publications</h3>
                <p className="text-gray-700 mb-4">
                  Academic papers, policy briefs, and reports on economic mobility and opportunity.
                </p>
                <Link href="#" className="text-emerald-600 hover:text-emerald-800 inline-flex items-center">
                  View publications <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Datasets"
                  alt="Datasets"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Datasets</h3>
                <p className="text-gray-700 mb-4">
                  Download research datasets for academic and policy research purposes.
                </p>
                <Link href="#" className="text-emerald-600 hover:text-emerald-800 inline-flex items-center">
                  Access datasets <Download className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Opportunity Atlas</h3>
              <p className="text-gray-700 mb-4">
                An interactive mapping tool that traces the roots of outcomes such as poverty and incarceration back to
                the neighborhoods in which children grew up.
              </p>
              <Link href="#" className="text-emerald-600 hover:text-emerald-800 inline-flex items-center">
                Explore the Atlas <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Economic Tracker</h3>
              <p className="text-gray-700 mb-4">
                Real-time economic data across income, employment, and spending to measure the economic impact of policy
                changes.
              </p>
              <Link href="#" className="text-emerald-600 hover:text-emerald-800 inline-flex items-center">
                View the Tracker <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

