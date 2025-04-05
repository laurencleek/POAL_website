import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6 bg-black text-white">
        <div className="container mx-auto">
          <h1 className="text-center text-3xl md:text-4xl font-light uppercase tracking-widest mb-16">Research</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "National Trends", image: "/placeholder.svg?height=300&width=400" },
              { title: "Neighborhoods", image: "/placeholder.svg?height=300&width=400" },
              { title: "Education", image: "/placeholder.svg?height=300&width=400" },
              { title: "Racial Disparities", image: "/placeholder.svg?height=300&width=400" },
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                  <h3 className="text-xl font-serif text-black">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Research</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex border-b border-gray-200 pb-8">
                <div className="w-1/3 mr-4">
                  <div className="relative h-full w-full">
                    <Image
                      src={`/placeholder.svg?height=200&width=200&text=Research${item}`}
                      alt={`Research ${item}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 25vw"
                    />
                  </div>
                </div>
                <div className="w-2/3">
                  <h3 className="text-xl font-bold mb-2">New Economic Thinking: A Data-Driven Approach</h3>
                  <p className="text-gray-500 mb-4">APRIL 2, 2025</p>
                  <p className="text-gray-700">
                    A comprehensive analysis of economic mobility factors across different demographics and regions.
                  </p>
                  <Link href="#" className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-800">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

