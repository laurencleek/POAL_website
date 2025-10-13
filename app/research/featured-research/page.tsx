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
                <h3 className="text-xl font-bold mb-2">How Experiments Help Campaigns Persuade Voters</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  Do experiments help campaigns to change voters minds? Ben Tappin and various co-authors use an unique archive of over 600 real campaign experiments. They reveal that campaigns can indeed persuade voters. The effects are small but meaningful. This groundbreaking study provides the first large-scale evidence of how political persuasion works in practice.
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
                  Can bringing electricity to rural communities boost a government's electoral chances? What are the conditions under which this happens? Victor Araújo and co-authors analyse Brazil's massive rural electrification program and show that voters do reward incumbents for tangible improvements to their daily lives. This research demonstrates how infrastructure investments can reshape electoral landscapes in developing democracies.
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
                <h3 className="text-xl font-bold mb-2">Elite Cues and Noncomplaince</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  What happens when political elites openly defy rules and norms? Zach Dickson and Sara Hobolt use difference-in-differences analysis on Tweets to show that when leaders signal non-compliance with democratic institutions, ordinary citizens become more likely to break rules themselves. This research reveals a dangerous pathway through which democratic erosion can accelerate in polarized environments.
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
                <h3 className="text-xl font-bold mb-2">Drivers of Political Participation</h3>
                <p className="text-gray-500 mb-4">2023</p>
                <p className="text-gray-700 mb-4">
                  Why do some citizens actively participate in politics while others remain disengaged? Matthias Kroenke and co-authors conduct a comprehensive study including survey experiment of Zambian voters revealing that partisanship shapes the most important role while ethnicity and social incentives all play lesser roles in driving political participation. These findings challenge conventional wisdom about political engagement and develpoment throughtout the region.
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
                  As AI language models become more sophisticated, concerns grow about their potential to manipulate political opinions. Ben Tappin and co-authors in cutting-edge experiments reveal that larger AI models can be more persuasive, the returns diminish quickly towards zero. This research provides crucial evidence for understanding AI's role in future political campaigns.
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
                <h3 className="text-xl font-bold mb-2">Balancing politics and parenthood</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  Should politicians take parental leave? Jessica Smith reveals the complex public attitudes toward MPs who prioritize family responsibilities. Voters are found to not penalize politicians who seem to put parenting before politics. This effect is stronger for women than men. 
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

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/corruption.jpg?height=200&width=400"
                  alt="Transnational Corruption Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Do voters differentially punish transnational corruption?</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  Under which circumstances do voters electorally punish corrupt politicians? Vanessa Cheng-Matsuno and co-author examine the case of transnational corruption through a survey experiment in the UK. They find evidence suggesting that voters differentially punish transnational corruption but only when it involves countries perceived negatively by the public. This innovative study challenges the status quo neglecting the transnational dimension in electoral accountability.
                </p>
                <Link href="https://ejpr.onlinelibrary.wiley.com/doi/10.1111/1475-6765.12643" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/echo-chambers.jpg?height=200&width=400"
                  alt="Partisan Echo Chambers Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Polarizing Effect of Partisan Echo Chambers</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  What shapes polarization? Sara Hobolt, Katharina Lawall and co-authors examine how the political homogeneity of people's social environment shapes polarization using an innovative large scale lab-in-the-field experiment in the UK. They find that partisan echo chambers increase both policy and affective polarization compared to mixed discussion groups. Their study has important implications for how to understand the drivers of polarization.
                </p>
                <Link href="https://www.cambridge.org/core/journals/american-political-science-review/article/polarizing-effect-of-partisan-echo-chambers/5044B63A13A458A97CA747E9DCA07228" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/education.jpg?height=200&width=400"
                  alt="Education as Identity Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Education as Identity? A Meta-Analysis of Education-Based Preferences</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  Do voters across the democratic world systematically prefer better-educated legislators? Stuart Turnbull-Dugarte and co-authors conducted a meta-analysis of candidate-choice experiments from democracies across the world to identify the presence and size of the education premium in politics. This comprehensive analysis contributes to explaining the over-representation of highly educated politicians in representative institutions.
                </p>
                <Link href="https://doi.org/10.1086/730745" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/voting_stu.png?height=200&width=400"
                  alt="Heroes & Villains Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Heroes & Villains: Motivated Projection of Political Identities</h3>
                <p className="text-gray-500 mb-4">2025</p>
                <p className="text-gray-700 mb-4">
                  Do we citizens assume that virtuous heroes vote for the same party as we do and that cruel villains vote for the parties we dislike? Stuart Turnbull-Dugarte and co-authors fielded an experiment in the US and Britain to show people *assume* the partisanship of others in response to information about the moral compass of others. This research highlights the ease with which misperceptions and stereotypes about our political opponents can spread easily and fuel political polarization.
                </p>
                <Link href="https://doi.org/10.1017/psrm.2025.10" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/dating.jpg?height=200&width=400"
                  alt="Far Right Normalization Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Far Right Normalization & Centrifugal Affect: Evidence from the Dating Market</h3>
                <p className="text-gray-500 mb-4">2025</p>
                <p className="text-gray-700 mb-4">
                  Are radical right supporters penalised in apolitical social settings? Stuart Turnbull-Dugarte and co-authors conducted a dating market experiment to show that, rather than being stigmatised, radical right party supporters are socially accommodated. In fact, centre-right supporters would rather date a radical right supporter than a centre-left supporter. This cutting edge experimental research contributes to explaining how radical right parties have become normalised in liberal democracies.
                </p>
                <Link href="https://doi.org/10.1086/736698" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/working_class.jpg?height=200&width=400"
                  alt="Social Class and Political Success Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Success Denied: Social Class and Perceptions of Political Success</h3>
                <p className="text-gray-500 mb-4">2025</p>
                <p className="text-gray-700 mb-4">
                  Why are working class people under-represented in legislatures? We propose one potential mechanism: working-class individuals are perceived as less likely to achieve political success, and are subsequently 'pragmatically' discriminated against. We provide an experiment in the UK to test it.
                </p>
                <Link href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/lsq.70024" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
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
