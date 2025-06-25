import Image from "next/image"
import Link from "next/link"

export default function ImpactEngagementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Impact & Public Engagement</h1>
          
          <div className="mb-16 max-w-5xl mx-auto space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              POAL strives to make a significant impact on the political and policy landscape by connecting academia with key stakeholders. We aim to support policy-making through evidence-based public opinion analysis, working closely with political advisers, think tanks, and media organizations to bridge the gap between academia and practice. Our consultancy services will offer both strategic insights and methodological expertise, empowering political campaigns and policy organizations to better understand and respond to public sentiment. If you are interested in working with us, please visit the <Link href="/consultancy" className="text-emerald-600 hover:text-emerald-800 font-medium underline">consultancy tab</Link> of this website.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              POAL is also fundamentally about opening up knowledge about polling and surveys: both in training future generations of public opinion scholars and practitioners, but also in disseminating public opinion trends and analytical know-how to the public. Understanding public opinion is an essential service to democracy. Political polls and surveys are a public good, a crucial instrument of accountability. POAL will therefore also actively engage in public education and awareness, in curating post-election studies, in improving the public and media's literacy on polling, public opinion trends, and the implications of data-driven campaigns for democracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Public Events & Media", 
                image: "/public.jpg?height=300&width=400",
                href: "/research/public-events-media"
              },
              { 
                title: "Public Explainers", 
                image: "/teaching_t.jpg?height=300&width=400",
                href: "/research/public-explainers"
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
