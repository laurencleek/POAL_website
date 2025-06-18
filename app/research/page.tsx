import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6 bg-black text-white">
        <div className="container mx-auto">
          <h1 className="text-center text-3xl md:text-4xl font-light uppercase tracking-widest mb-16">Our research missions centre around:</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Research Excellence", image: "/research_ex.jpg?height=300&width=400" },
              { title: "Innovation", image: "/innovation.jpg?height=300&width=400" },
              { title: "Impact & Public Engagement", image: "/public.jpg?height=300&width=400" },
              { title: "Teaching & Training", image: "/teaching_t.jpg?height=300&width=400" },
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
            <div className="flex border-b border-gray-200 pb-8">
              <div className="w-1/3 mr-4">
                <div className="relative h-full w-full">
                  <Image
                    src="/campaigns.jpg?height=200&width=200"
                    alt="Campaigns Research"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 25vw"
                  />
                </div>
              </div>
              <div className="w-2/3">
                <h3 className="text-xl font-bold mb-2">Campaigns and persuasion</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700">
                  How experiments help campaigns persuade voters: evidence from a large archive of campaigns' own experiments.
                </p>
                <Link href="https://www.cambridge.org/core/journals/american-political-science-review/article/how-experiments-help-campaigns-persuade-voters-evidence-from-a-large-archive-of-campaigns-own-experiments/FF5BE6ED1553475F8321F7C4209357F7" className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-800">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex border-b border-gray-200 pb-8">
              <div className="w-1/3 mr-4">
                <div className="relative h-full w-full">
                  <Image
                    src="/elect.jpg?height=200&width=200"
                    alt="Infrastructure Research"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 25vw"
                  />
                </div>
              </div>
              <div className="w-2/3">
                <h3 className="text-xl font-bold mb-2">Infrastructure and Electoral Effects</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700">
                  The Electoral Effects of Large-Scale Infrastructure Policies: Evidence from a Rural Electrification Scheme.
                </p>
                <Link href="https://www.journals.uchicago.edu/doi/10.1086/726958" className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-800">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex border-b border-gray-200 pb-8">
              <div className="w-1/3 mr-4">
                <div className="relative h-full w-full">
                  <Image
                    src="/elite.png?height=200&width=200"
                    alt="Electoral Trust Research"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 25vw"
                  />
                </div>
              </div>
              <div className="w-2/3">
                <h3 className="text-xl font-bold mb-2">Elite Cues</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700">
                  Elite Cues and Non-compliance.
                </p>
                <Link href="https://www.cambridge.org/core/journals/american-political-science-review/article/elite-cues-and-noncompliance/8A5F20C549D02AADB490223B2E3F2B7E" className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-800">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex border-b border-gray-200 pb-8">
              <div className="w-1/3 mr-4">
                <div className="relative h-full w-full">
                  <Image
                    src="/zambia.jpg?height=200&width=200"
                    alt="Political Participation Research"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 25vw"
                  />
                </div>
              </div>
              <div className="w-2/3">
                <h3 className="text-xl font-bold mb-2">Drivers of Political Participation</h3>
                <p className="text-gray-500 mb-4">2023</p>
                <p className="text-gray-700">
                  Drivers of Political Participation: The Role of Partisanship, Identity, and Incentives in Mobilizing Zambian Citizens.
                </p>
                <Link href="https://journals.sagepub.com/doi/full/10.1177/00104140231194064" className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-800">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Research Items */}
          <div className="mt-16">
            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Araújo, V., Arretche, M., & Beramendi, P. (2024). <span className="italic">The Electoral Effects of Large-Scale Infrastructure Policies: Evidence from a Rural Electrification Scheme in Brazil.</span> Journal of Politics. <a href="https://www.journals.uchicago.edu/doi/10.1086/726958" className="text-emerald-600 hover:text-emerald-800">https://www.journals.uchicago.edu/doi/10.1086/726958</a></p>
            </div>

            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Araújo, V., & Gatto, M. A. C. (2021). <span className="italic">Casting Ballots When Knowing Results.</span> British Journal of Political Science. <a href="https://www.cambridge.org/core/journals/british-journal-of-political-science/article/casting-ballots-when-knowing-results/2EAC5C8375FE34BA6E92B5FF4D896B25" className="text-emerald-600 hover:text-emerald-800">https://www.cambridge.org/core/journals/british-journal-of-political-science/article/casting-ballots-when-knowing-results/2EAC5C8375FE34BA6E92B5FF4D896B25</a></p>
            </div>

            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Salmela, M., Talalakina, A., & Cotena, O. (2024). <span className="italic">Ressentiment in the manosphere.</span> Philosophies. <a href="https://helda.helsinki.fi/server/api/core/bitstreams/de701f20-bf64-4666-afda-6d5375236ba5/content" className="text-emerald-600 hover:text-emerald-800">Open Access</a></p>
            </div>

            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Jöst, P., Krönke, M., et al. (2023). <span className="italic">Drivers of Political Participation: The Role of Partisanship, Identity, and Incentives in Mobilizing Zambian Citizens.</span> Political Research Quarterly. <a href="https://journals.sagepub.com/doi/full/10.1177/00104140231194064" className="text-emerald-600 hover:text-emerald-800">https://journals.sagepub.com/doi/full/10.1177/00104140231194064</a></p>
            </div>

            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Kerr, N., Krönke, M., & Wahman, M. (2024). <span className="italic">Where Are the Sore Losers? Competitive Authoritarianism, Incumbent Defeat, and Electoral Trust in Zambia's 2021.</span> Public Opinion Quarterly, 88(SI), 608–631. <a href="https://doi.org/10.1093/poq/nfae030" className="text-emerald-600 hover:text-emerald-800">https://doi.org/10.1093/poq/nfae030</a></p>
            </div>

            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Smith, J.C. (2024). <span className="italic">Balancing politics and parenthood: Public perceptions of MPs taking parental leave in the UK.</span> European Journal of Political Research. <a href="https://doi.org/10.1111/1475-6765.12728" className="text-emerald-600 hover:text-emerald-800">https://doi.org/10.1111/1475-6765.12728</a></p>
            </div>

            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Hargrave, L. & Smith, J.C. (2023). <span className="italic">Working Hard or Hardly Working? Gender and Voter Evaluations of Legislator Productivity.</span> Political Behaviour. <a href="https://doi.org/10.1007/s11109-022-09853-8" className="text-emerald-600 hover:text-emerald-800">https://doi.org/10.1007/s11109-022-09853-8</a></p>
            </div>

            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Hackenburg, K., Tappin, B., Röttger, P., Hale, S., Bright, J., & Margetts, H. (2025). <span className="italic">Scaling language model size yields diminishing returns for single-message political persuasion.</span> Proceedings of the National Academy of Sciences. <a href="https://pubmed.ncbi.nlm.nih.gov/40053360/" className="text-emerald-600 hover:text-emerald-800">PDF</a></p>
            </div>

            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Hewitt, L., Broockman, D., Coppock, A., Tappin, B., et al. (2024). <span className="italic">How experiments help campaigns persuade voters: evidence from a large archive of campaigns' own experiments.</span> American Political Science Review. <a href="https://www.cambridge.org/core/journals/american-political-science-review/article/how-experiments-help-campaigns-persuade-voters-evidence-from-a-large-archive-of-campaigns-own-experiments/FF5BE6ED1553475F8321F7C4209357F7" className="text-emerald-600 hover:text-emerald-800">PDF</a></p>
            </div>

            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Tappin, B., Wittenberg, C., Hewitt, L., Berinsky, A., & Rand, D. (2023). <span className="italic">Quantifying the potential persuasive returns to political microtargeting.</span> Proceedings of the National Academy of Sciences. <a href="https://pubmed.ncbi.nlm.nih.gov/37307486/" className="text-emerald-600 hover:text-emerald-800">PDF</a></p>
            </div>

            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Tappin, B., Berinsky, A., & Rand, D. (2023). <span className="italic">Partisans' receptivity to persuasive messaging is undiminished by countervailing party leader cues.</span> Nature Human Behaviour. <a href="https://pubmed.ncbi.nlm.nih.gov/36864137/" className="text-emerald-600 hover:text-emerald-800">PDF</a></p>
            </div>

            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Capelos, T., Salmela, M., Sullivan, G., Chrona, S. (2024). <span className="italic">The Antisocial Triad of Grievance Politics: an integrated model of reactionsim, ressentiment, and collective narcissism.</span> American Behavioral Scientist. <a href="#" className="text-emerald-600 hover:text-emerald-800">Open Access</a></p>
            </div>

            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Dickson, Z.P., Hobolt, S.B. (2024). <span className="italic">Elite Cues and Non-compliance.</span> American Political Science Review. <a href="https://doi.org/10.1017/S0003055424000741" className="text-emerald-600 hover:text-emerald-800">https://doi.org/10.1017/S0003055424000741</a></p>
            </div>

            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Dickson, Z.P. and Hobolt, S.B. (2024). <span className="italic">Going against the Grain: Climate Change as a Wedge Issue for the Radical Right.</span> Comparative Political Studies. <a href="https://doi.org/10.1177/00104140241271297" className="text-emerald-600 hover:text-emerald-800">https://doi.org/10.1177/00104140241271297</a></p>
            </div>

            <div className="research-item mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-700">Duch, R.M., Lowen, P., Robinson, T., Zakharov, A. (2024). <span className="italic">Governing in the face of a global crisis: When do voters punish and reward incumbent governments?</span> Proceedings of the National Academy of Sciences. <a href="https://www.pnas.org/doi/10.1073/pnas.2405021122" className="text-emerald-600 hover:text-emerald-800">https://www.pnas.org/doi/10.1073/pnas.2405021122</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

