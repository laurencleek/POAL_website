import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Areas of Activity</h1>
          
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Public Opinion Analytics Lab (POAL) is a pioneering academic collaboration between the University of Reading (UoR), the London School of Economics (LSE), and the University of Southampton (SOTON), designed to advance the research, teaching, and practice of public opinion and political behaviour measurement and analysis. The lab is a collaborative, cross-institutional hub that attracts leading scholars and practitioners in public opinion research working to cultivate democratic resilience and accountability by supporting large-scale national election studies and comparative public opinion datasets, by rigorously testing and disseminating innovative methods of public opinion measurement, and by fostering a more informed, engaged electorate. Its focus will be truly global: we have experts on US, European, Latin American and African politics, as well as on UK politics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Research", 
                image: "/research_ex.jpg?height=300&width=400",
                href: "/research/research-area"
              },
              { 
                title: "Innovation and Training", 
                image: "/innovation.jpg?height=300&width=400",
                href: "/research/innovation-training"
              },
              { 
                title: "Impact & Public Engagement", 
                image: "/public.jpg?height=300&width=400",
                href: "/research/impact-engagement"
              },
            ].map((item, index) => (
              <Link key={index} href={item.href} className="group relative block">
                <div className="relative h-80 w-full overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-4 rounded-b-lg">
                  <h3 className="text-xl font-bold text-black text-center">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

