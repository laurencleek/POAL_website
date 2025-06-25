import Image from "next/image"
import Link from "next/link"

export default function InnovationTrainingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Innovation and Training</h1>
          
          <div className="mb-16 text-center max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              POAL is a lab for methodological innovations in public opinion polling. Current breakthroughs in AI pose both important risks in attitude formation (disinformation, deep fakes) and for the quality of polls and the rigour of survey methodology, but also significant opportunities for methodological advancement. POAL has a dedicated methodology unit, tasked with turbo-charging methodological innovation in polling and survey analysis, and with sharing best practices and provide methodological feedback and training to researchers (both in academia and industry).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Methods Brief Series", 
                image: "/innovation.jpg?height=300&width=400",
                href: "/research/methods-brief-series"
              },
              { 
                title: "Teaching & Training Resources", 
                image: "/teaching_t.jpg?height=300&width=400",
                href: "/research/teaching-training-resources"
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
