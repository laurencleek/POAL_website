import Image from "next/image"
import Link from "next/link"

export default function ResearchAreaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Research</h1>
          
          <div className="mb-16 text-center max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              POAL hosts world-leading programmes of research on: (1) political trust, democratic satisfaction and democratic values; (2) political polarization, populism and the radical right; (3) information processing and persuasion – with topics such as mis/dis-information, micro-targeting and campaign effects; (4) identity politics and inequalities – with particular focus on gender and sexual identities, ethnicity and race, as well as social class and religion; and (5) policy attitudes – with particular focus on economic, immigration, public health, environmental/climate, civil liberties, and EU policy. Methodologically, we can count among us world-leading experts in polling and survey methodology, in predictive modelling (including MRP), in field and survey experiments, and in Large Language Models and computational text analysis. In terms of coverage, we obviously have top-notch expertise in British politics, but we also cover the EU, Western and Eastern European countries, the USA, Australia, New Zealand, Latin America and Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Featured Research", 
                image: "/research_ex.jpg?height=300&width=400",
                href: "/research/featured-research"
              },
              { 
                title: "Research Seminar Series", 
                image: "/teaching_t.jpg?height=300&width=400",
                href: "/research/seminar-series"
              },
            ].map((item, index) => (
              <Link key={index} href={item.href} className="group relative block">
                <div className="relative h-80 w-full overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
