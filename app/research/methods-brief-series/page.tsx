export default function MethodsBriefSeriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center">Methods Brief Series</h1>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Explore our comprehensive methods brief series covering advanced research methodologies and analytical techniques.
              </p>
            </div>

            {/* AI Brief */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 max-w-md mx-auto mb-8">
              <a 
                href="/briefai.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                {/* AI Agent Image */}
                <div className="mb-6 relative overflow-hidden rounded-lg h-48 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/ai_agent.png" 
                    alt="AI Agents in Surveys Methods Brief"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    AI Agents in Surveys Methods Brief
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    This brief explains how AI agents are infiltrating surveys and strategies how to deal with this.
                  </p>
                  <div className="inline-flex items-center text-blue-600 font-medium text-sm">
                    <span>Download PDF</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            {/* Conjoint Analysis Brief */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 max-w-md mx-auto">
              <a 
                href="/conjoint_brief.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                {/* Conjoint Analysis Image */}
                <div className="mb-6 relative overflow-hidden rounded-lg h-48 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/conjoint.png" 
                    alt="Conjoint Analysis Methods Brief"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Conjoint Analysis Methods Brief
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    A comprehensive guide to conjoint analysis methodology, applications, and best practices.
                  </p>
                  <div className="inline-flex items-center text-blue-600 font-medium text-sm">
                    <span>Download PDF</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                More methods briefs coming soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
