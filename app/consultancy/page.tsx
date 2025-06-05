import Link from "next/link";

export default function ConsultancyPage() {
  const thematicAreas = [
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
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Consultancy Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Leverage POAL's cutting-edge research and expertise to gain
            actionable insights and solutions. We offer bespoke consultancy
            services tailored to your organization's needs, drawing upon our
            deep understanding of political and social dynamics.
          </p>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-emerald-700">
              Our Expertise
            </h2>

            <div className="grid md:grid-cols-1 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-4">Thematic Areas</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {thematicAreas.map((area, index) => (
                    <li key={`theme-${index}`}>{area}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 mt-8">
                  Methodological Strengths
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {methodologicalStrengths.map((method, index) => (
                    <li key={`method-${index}`}>{method}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 mt-8">
                  Geographical Focus
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {geographicalFocus.map((region, index) => (
                    <li key={`geo-${index}`}>{region}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center py-10 bg-gray-50 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-emerald-700">
              Partner with Us
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Whether you are a public institution, non-profit organization,
              or private company, POAL can provide the research-backed
              insights you need to navigate complex challenges and achieve your
              goals.
            </p>
            <Link
              href="/contact" // Assuming you have a contact page
              className="inline-block px-8 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

