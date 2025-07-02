export default function TeachingTrainingResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center">Teaching & Training Resources</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Recommended Reading</h2>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Foundations of European Politics: A Comparative Approach (Second Edition)
                </h3>
                
                <div className="mb-4">
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Authors:</span> Catherine E. De Vries, Sara B. Hobolt, Sven-Oliver Proksch, and Jonathan B. Slapin
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Publication Date:</span> 07 July 2025
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-medium">ISBN:</span> 9780198888925
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Of Particular Interest:</h4>
                  <p className="text-blue-700">
                    Part II: Citizens and Voters
                  </p>
                  <ul className="list-disc list-inside text-blue-700 mt-2 ml-4">
                    <li>Chapter 5: Ideology and Issues</li>
                    <li>Chapter 6: Voting Decisions</li>
                  </ul>
                </div>
                
                <a 
                  href="https://global.oup.com/ushe/product/foundations-of-european-politics-9780198888925?cc=gb&lang=en&"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  View on Oxford University Press
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
