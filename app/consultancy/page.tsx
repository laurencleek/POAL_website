import Link from "next/link";

export default function ConsultancyPage() {
  const thematicAreas = [
    "Institutional and electoral processes – including electoral systems, party systems, and political institutions",
    "Political trust, democratic satisfaction and democratic values",
    "Political polarization, populism and the radical right",
    "Information processing and persuasion – including mis/dis-information, micro-targeting and campaign effects",
    "Identity politics and inequalities – with particular focus on gender and sexual identities, ethnicity and race, as well as national identities, social class and religion",
    "Policy attitudes – with particular focus on economic, immigration, public health, environmental/climate, civil liberties, and EU policy",
  ];

  const methodologicalStrengths = [
    "Polling and survey methodology",
    "Predictive modelling (including Multilevel Regression and Post-stratification - MRP)",
    "Field and survey experiments",
    "Large Language Models (LLMs) and computational text analysis",
  ];

  const geographicalFocus = [
    "British politics",
    "European Union (EU)",
    "Western and Eastern European countries",
    "The United States of America (USA)",
    "Australia",
    "New Zealand",
    "Latin America",
    "Africa",
  ];

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
                <ul className="list-disc list-inside space-y-3 text-gray-700 pl-6">
                  {thematicAreas.map((area, index) => (
                    <li key={`theme-${index}`} className="text-base">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-800 border-l-4 border-emerald-700 pl-4">
                  Methodological Expertise
                </h3>
                <ul className="list-disc list-inside space-y-3 text-gray-700 pl-6">
                  {methodologicalStrengths.map((method, index) => (
                    <li key={`method-${index}`} className="text-base">
                      {method}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-800 border-l-4 border-emerald-700 pl-4">
                  Geographical Focus
                </h3>
                <ul className="list-disc list-inside space-y-3 text-gray-700 pl-6">
                  {geographicalFocus.map((region, index) => (
                    <li key={`geo-${index}`} className="text-base">
                      {region}
                    </li>
                  ))}
                </ul>
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

