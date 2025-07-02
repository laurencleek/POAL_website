import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FeaturedResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Research</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/campaigns.jpg?height=200&width=400"
                  alt="Campaigns Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">How Campaigns Actually Persuade Voters</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  Do political campaigns really change minds? Using a unique archive of over 600 real campaign experiments, we reveal that campaigns can indeed persuade voters, but the effects are smaller and more targeted than commonly believed. This groundbreaking study provides the first large-scale evidence of how political persuasion works in practice.
                </p>
                <Link href="https://www.cambridge.org/core/journals/american-political-science-review/article/how-experiments-help-campaigns-persuade-voters-evidence-from-a-large-archive-of-campaigns-own-experiments/FF5BE6ED1553475F8321F7C4209357F7" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/elect.jpg?height=200&width=400"
                  alt="Infrastructure Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">When Infrastructure Wins Elections</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  Can bringing electricity to rural communities boost a government's electoral chances? Our analysis of Brazil's massive rural electrification program shows that voters do reward incumbents for tangible improvements to their daily lives. This research demonstrates how infrastructure investments can reshape electoral landscapes in developing democracies.
                </p>
                <Link href="https://www.journals.uchicago.edu/doi/10.1086/726958" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/elite.png?height=200&width=400"
                  alt="Elite Cues Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">When Leaders Lead Citizens Astray</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  What happens when political elites openly defy rules and norms? Using innovative survey experiments, we show that when leaders signal non-compliance with democratic institutions, ordinary citizens become more likely to break rules themselves. This research reveals a dangerous pathway through which democratic erosion can accelerate.
                </p>
                <Link href="https://www.cambridge.org/core/journals/american-political-science-review/article/elite-cues-and-noncompliance/8A5F20C549D02AADB490223B2E3F2B7E" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/zambia.jpg?height=200&width=400"
                  alt="Political Participation Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">What Motivates Political Participation in Africa</h3>
                <p className="text-gray-500 mb-4">2023</p>
                <p className="text-gray-700 mb-4">
                  Why do some citizens actively participate in politics while others remain disengaged? Our comprehensive study of Zambian voters reveals that party loyalty, ethnic identity, and material incentives all play crucial but distinct roles in driving political participation. These findings challenge conventional wisdom about African electoral behavior.
                </p>
                <Link href="https://journals.sagepub.com/doi/full/10.1177/00104140231194064" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/ai.png?height=200&width=400"
                  alt="AI Persuasion Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Limits of AI Political Persuasion</h3>
                <p className="text-gray-500 mb-4">2025</p>
                <p className="text-gray-700 mb-4">
                  As AI language models become more sophisticated, concerns grow about their potential to manipulate political opinions. Our cutting-edge experiments reveal that while larger AI models can be more persuasive, the returns diminish quickly. This research provides crucial evidence for understanding AI's role in future political campaigns.
                </p>
                <Link href="https://pubmed.ncbi.nlm.nih.gov/40053360/" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/parent.jpg?height=200&width=400"
                  alt="Gender Politics Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Politics and Parenthood Don't Mix (Or Do They?)</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  Should politicians take parental leave? Our research reveals complex public attitudes toward MPs who prioritize family responsibilities. While many support work-life balance in principle, voters still penalize politicians who seem to put parenting before politics, revealing persistent tensions between traditional political expectations and modern family values.
                </p>
                <Link href="https://doi.org/10.1111/1475-6765.12728" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/eu.jpg?height=200&width=400"
                  alt="Europeanisation Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Europeanisation of policy preferences: cross-national similarity and convergence 2014–2024</h3>
                <p className="text-gray-500 mb-4">2025</p>
                <p className="text-gray-700 mb-4">
                  How has European integration shaped policy preferences across member states? This comprehensive study by Miriam Sorace examines cross-national similarity and convergence in policy preferences from 2014 to 2024, revealing important patterns in how European integration influences domestic political attitudes and policy priorities across different countries.
                </p>
                <Link href="https://www.tandfonline.com/doi/full/10.1080/13501763.2025.2512901" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
