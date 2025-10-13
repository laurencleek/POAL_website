import Link from "next/link";

export default function ConsultancyPage() {
  // Create a mapping of people to their formal names and profile links
  const peopleLinks = {
    "Will": { name: "Prof. Will Jennings", href: "/people" },
    "Dan": { name: "Dr. Daniel Devine", href: "/people" },
    "Miriam": { name: "Dr. Miriam Sorace", href: "/people" },
    "Florian": { name: "Dr. Florian Foos", href: "/people" },
    "Tereza": { name: "Prof. Tereza Capelos", href: "/people" },
    "Marta": { name: "Dr. Marta Antonetti", href: "/people" },
    "Sara": { name: "Prof. Sara Hobolt", href: "/people" },
    "Zach": { name: "Dr. Zach Dickson", href: "/people" },
    "Katharina": { name: "Dr. Katharina Lawall", href: "/people" },
    "Victor": { name: "Dr. Victor Araújo", href: "/people" },
    "Ben": { name: "Dr. Ben Tappin", href: "/people" },
    "Jason": { name: "Prof. Jason Reifler", href: "/people" },
    "Stuart": { name: "Dr. Stuart Turnbull-Dugarte", href: "/people" },
    "Rob": { name: "Prof. Rob Johns", href: "/people" },
    "Jessica": { name: "Dr. Jessica Smith", href: "/people" },
    "Patrick": { name: "Prof. Patrick Sturgis", href: "/people" },
    "Gabriele": { name: "Prof. Gabriele Durrant", href: "/people" },
    "Olga": { name: "Dr. Olga Maslovskaya", href: "/people" },
    "Thomas": { name: "Dr. Thomas Robinson", href: "/people" },
    "Kenneth": { name: "Prof. Kenneth Benoit", href: "/people" },
    "Lauren": { name: "Lauren Leek", href: "/people" },
    "Conrad": { name: "Conrad Martinez-Lambert", href: "/people" },
    "Vanessa": { name: "Dr. Vanessa Cheng-Matsuno", href: "/people" },
    "Matthias": { name: "Dr. Matthias Kroenke", href: "/people" }
  };

  const thematicAreasWithExperts = [
    {
      area: "Political trust, institutional/process preferences, democratic satisfaction and democratic values",
      experts: ["Will", "Dan", "Miriam", "Florian", "Tereza", "Marta"]
    },
    {
      area: "Political polarization, populism and the radical right",
      experts: ["Sara", "Miriam", "Zach", "Katharina", "Victor", "Stuart"]
    },
    {
      area: "Information processing and persuasion – including mis/dis-information, micro-targeting and campaign effects",
      experts: ["Ben", "Jason", "Miriam", "Florian", "Marta"]
    },
    {
      area: "Identity politics and inequalities – with particular focus on gender and sexual identities, ethnicity and race, as well as national identities, social class and religion",
      experts: ["Stuart", "Katharina", "Rob", "Jessica", "Victor"]
    },
    {
      area: "Policy attitudes – with particular focus on economic, immigration, public health, environmental/climate, civil liberties, and EU policy",
      experts: ["Will", "Dan", "Miriam", "Florian", "Tereza", "Marta", "Sara", "Zach", "Katharina", "Victor", "Ben", "Jason", "Stuart", "Rob", "Patrick", "Gabriele", "Olga", "Thomas", "Kenneth", "Lauren", "Jessica", "Conrad", "Vanessa", "Matthias"]
    }
  ];

  const methodologicalStrengthsWithExperts = [
    {
      method: "Polling and survey methodology",
      experts: ["Patrick", "Will", "Gabriele", "Olga"]
    },
    {
      method: "Predictive modelling (including Multilevel Regression and Post-stratification - MRP)",
      experts: ["Thomas", "Zach", "Kenneth"]
    },
    {
      method: "Field and survey experiments", 
      experts: ["Florian", "Miriam", "Katharina", "Marta"]
    },
    {
      method: "Large Language Models (LLMs) and computational text analysis",
      experts: ["Thomas", "Zach", "Kenneth", "Lauren"]
    }
  ];

  const geographicalFocusWithExperts = [
    {
      region: "British politics",
      experts: ["Will", "Jessica", "Rob", "Miriam", "Florian", "Sara"]
    },
    {
      region: "European Union (EU)",
      experts: ["Miriam", "Sara", "Lauren"]
    },
    {
      region: "Western and Eastern European countries",
      experts: ["Miriam", "Sara", "Stuart", "Katharina", "Florian"]
    },
    {
      region: "The United States of America (USA)",
      experts: ["Zach", "Ben"]
    },
    {
      region: "Australia & New Zealand",
      experts: ["Conrad"]
    },
    {
      region: "Latin America",
      experts: ["Victor", "Vanessa"]
    },
    {
      region: "Africa",
      experts: ["Matthias"]
    }
  ];

  // Helper component to render expert links
  const ExpertLinks = ({ experts }: { experts: string[] }) => {
    return (
      <div className="mt-1 flex flex-wrap items-center gap-x-1">
        <span className="text-sm text-gray-600">Experts:</span>
        {experts.map((expert, index) => {
          const personInfo = peopleLinks[expert as keyof typeof peopleLinks];
          
          // Handle case where expert is not found in peopleLinks
          if (!personInfo) {
            console.warn(`Expert "${expert}" not found in peopleLinks`);
            return (
              <span key={expert} className="inline-flex items-center">
                <span className="text-gray-600 text-sm font-medium">{expert}</span>
                {index < experts.length - 1 && 
                 <span className="text-gray-500 ml-0.5">,</span>}
              </span>
            );
          }

          return (
            <span key={expert} className="inline-flex items-center">
              <Link
                href={personInfo.href}
                className="text-emerald-600 hover:text-emerald-800 text-sm font-medium hover:underline"
              >
                {personInfo.name}
              </Link>
              {index < experts.length - 1 && 
               <span className="text-gray-500 ml-0.5">,</span>}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Consultancy Services
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
            We are open to consultancy work and can offer bespoke consultancy services on public opinion polling and campaign strategy, drawing upon our world-leading experts in the study of political attitudes formation, electoral behaviour, persuasion and polling/survey methodology. To discuss your needs, please reach out to us directly at{" "}
            <a
              href="mailto:publicopinionanalyticslab@gmail.com"
              className="text-emerald-600 font-medium hover:underline"
            >
              publicopinionanalyticslab@gmail.com
            </a>.
          </p>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-emerald-700 border-b-2 border-emerald-700 pb-2">
              Our Expertise
            </h2>

            <div className="grid md:grid-cols-1 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 border-l-4 border-emerald-700 pl-4">
                  Thematic Areas
                </h3>
                <div className="space-y-6">
                  {thematicAreasWithExperts.map((item, index) => (
                    <div key={`theme-${index}`} className="border-l-2 border-emerald-200 pl-4">
                      <div className="text-base text-gray-700 mb-2 font-medium">{item.area}</div>
                      <ExpertLinks experts={item.experts} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-800 border-l-4 border-emerald-700 pl-4">
                  Methodological Expertise
                </h3>
                <div className="space-y-6">
                  {methodologicalStrengthsWithExperts.map((item, index) => (
                    <div key={`method-${index}`} className="border-l-2 border-emerald-200 pl-4">
                      <div className="text-base text-gray-700 mb-2 font-medium">{item.method}</div>
                      <ExpertLinks experts={item.experts} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-800 border-l-4 border-emerald-700 pl-4">
                  Geographical Focus
                </h3>
                <div className="space-y-6">
                  {geographicalFocusWithExperts.map((item, index) => (
                    <div key={`geo-${index}`} className="border-l-2 border-emerald-200 pl-4">
                      <div className="text-base text-gray-700 mb-2 font-medium">{item.region}</div>
                      <ExpertLinks experts={item.experts} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-base text-gray-700 mt-8">
              For more information on our expertise, visit our{" "}
              <Link
                href="/people"
                className="text-emerald-600 font-medium hover:underline"
              >
                People
              </Link>{" "}
              page.
            </p>
          </div>

          <div className="text-center py-10 mt-16 bg-gray-100 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-emerald-700">
              Contact Us
            </h2>
            <p className="text-base text-gray-700 mb-8 max-w-2xl mx-auto">
              Want advice, have questions or need more information? Reach out to us directly at{" "}
              <a
                href="mailto:publicopinionanalyticslab@gmail.com"
                className="text-emerald-600 font-medium hover:underline"
              >
                publicopinionanalyticslab@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

