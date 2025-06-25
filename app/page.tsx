import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Research Areas Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold uppercase tracking-widest mb-8">
            Areas of Activity
          </h2>

          <div className="mb-12 max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Public Opinion Analytics Lab (POAL) is an academic collaboration between the University of Reading (UoR), the London School of Economics (LSE), and the University of Southampton (SOTON), designed to advance the research, teaching, and practice of public opinion and political behaviour measurement and analysis. The lab is a collaborative, cross-institutional hub that attracts leading scholars and practitioners in public opinion research working to cultivate democratic resilience and accountability by supporting large-scale national election studies and comparative public opinion datasets, by rigorously testing and disseminating innovative methods of public opinion measurement, and by fostering a more informed, engaged electorate. Its focus will be truly global: we have experts on US, European, Latin American and African politics, as well as on UK politics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                  <h3 className="text-xl font-serif text-black">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
