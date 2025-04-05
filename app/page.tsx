import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center relative p-8 md:p-12 lg:p-16 min-h-[500px] flex items-end">
            <div className="text-white z-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Changing Opportunity: Class and Racial Gaps in Economic Mobility
              </h1>
              <Link
                href="/contact"
                className="inline-block mt-4 px-6 py-3 bg-white text-black font-medium uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors"
              >
                Get in Touch
              </Link>
              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <Link href="/research" className="text-white flex items-center gap-2 hover:underline">
                  Review Key Findings <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/resources" className="text-white flex items-center gap-2 hover:underline">
                  Opportunity Atlas: New Trend Data <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          <div className="flex flex-col h-full">
            <div className="bg-[url('/placeholder.svg?height=300&width=600')] bg-cover bg-center relative p-6 h-1/2 flex items-end">
              <div className="text-white z-10">
                <h2 className="text-xl md:text-2xl font-bold">
                  Diversifying America's Leaders: The Role of College Admissions
                </h2>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            <div className="bg-[url('/placeholder.svg?height=300&width=600')] bg-cover bg-center relative p-6 h-1/2 flex items-end">
              <div className="text-white z-10">
                <h2 className="text-xl md:text-2xl font-bold">
                  Social Capital and Economic Mobility: Measurement and Determinants
                </h2>
                <Link href="/research" className="mt-2 text-white flex items-center gap-2 hover:underline">
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-emerald-100 px-8 py-2 text-center">
              <h2 className="text-lg font-medium uppercase tracking-wider">What We Do</h2>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif">
              POAL strives to make a significant impact on the political and policy landscape by connecting academia with key stakeholders. We aim to support policy-making through evidence-based public opinion analysis, working closely with political advisers, think tanks, and media organizations to bridge the gap between academia and practice
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="w-full h-[300px] bg-emerald-100 relative overflow-hidden">
              <div className="absolute -top-8 right-8 text-sm text-gray-700">
                Percent of children earning more than their parents, by year of birth
              </div>

              {/* This is a simplified representation of the graph */}
              <svg viewBox="0 0 1000 300" className="w-full h-full">
                <path
                  d="M0,50 C100,70 200,120 300,150 C400,180 500,200 600,220 C700,240 800,250 900,260 L900,300 L0,300 Z"
                  fill="rgba(52, 211, 153, 0.5)"
                />
                <path
                  d="M0,50 C100,70 200,120 300,150 C400,180 500,200 600,220 C700,240 800,250 900,260"
                  fill="none"
                  stroke="rgba(16, 185, 129, 1)"
                  strokeWidth="2"
                />

                {/* Data points */}
                <circle cx="150" cy="70" r="6" fill="white" stroke="rgba(16, 185, 129, 1)" strokeWidth="2" />
                <text x="150" y="50" textAnchor="middle" fontSize="12" fill="gray">
                  90%
                </text>
                <text x="150" y="90" textAnchor="middle" fontSize="10" fill="gray">
                  1945
                </text>

                <circle cx="350" cy="150" r="6" fill="white" stroke="rgba(16, 185, 129, 1)" strokeWidth="2" />
                <text x="350" y="130" textAnchor="middle" fontSize="12" fill="gray">
                  70%
                </text>
                <text x="350" y="170" textAnchor="middle" fontSize="10" fill="gray">
                  1955
                </text>

                <circle cx="600" cy="220" r="6" fill="white" stroke="rgba(16, 185, 129, 1)" strokeWidth="2" />
                <text x="600" y="200" textAnchor="middle" fontSize="12" fill="gray">
                  59%
                </text>
                <text x="600" y="240" textAnchor="middle" fontSize="10" fill="gray">
                  1965
                </text>

                <circle cx="800" cy="250" r="6" fill="white" stroke="rgba(16, 185, 129, 1)" strokeWidth="2" />
                <text x="800" y="230" textAnchor="middle" fontSize="12" fill="gray">
                  50%
                </text>
                <text x="800" y="270" textAnchor="middle" fontSize="10" fill="gray">
                  1985
                </text>
              </svg>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold">The Fading American Dream</h3>
              <p className="mt-4 text-gray-700">
              There are several unmet needs that this multi-University lab will address. First and foremost, while UK academia hosts world-leading public opinion researchers and survey methodologists, they are often isolated across different institutions, resulting in inefficiently duplicated research activities and limited collaboration. Secondly, the rise of AI represents a critical pressure point for survey research: building synergies to turbocharge methodological innovation is an immediate priority. Thirdly, the connection between public opinion scholars, political campaigns, the media, and the public is often weak, placing excessive strain on a few renowned academics who often must decline the numerous requests. Parties’ HQ and NGOs/advocacies, furthermore, often need flexible and short-term academic advice but do not know how to procure it quickly and efficiently. Fourthly, navigating polling and elections is often rife with misinformation for voters and political representatives, and, in addition, there is an unmet need for AI and computational skills in our current political behaviour teaching offer. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 px-4 md:px-6 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-light uppercase tracking-widest mb-16">
            Key Missions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Research Excellence", image: "/placeholder.svg?height=300&width=400" },
              { title: "Innovation", image: "/placeholder.svg?height=300&width=400" },
              { title: "Impact and Public Engagement", image: "/placeholder.svg?height=300&width=400" },
              { title: "Teaching and Training", image: "/placeholder.svg?height=300&width=400" },
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

          <div className="mt-16 max-w-4xl mx-auto text-center text-gray-300">
            <p>
            The Public Opinion Analytics Lab (POAL) is a pioneering academic collaboration between the University of Reading (UoR), the London School of Economics (LSE), and the University of Southampton (SOTON), designed to advance the research, teaching, and practice of public opinion and political behaviour measurement and analysis. The lab is a collaborative, cross-institutional hub that attracts leading scholars and practitioners in public opinion research working to cultivate democratic resilience and accountability by supporting large-scale national election studies and comparative public opinion datasets, by rigorously testing and disseminating innovative methods of public opinion measurement, and by fostering a more informed, engaged electorate. Its focus will be truly global: we have experts on US, European, Latin American and African politics, as well as on UK politics.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

