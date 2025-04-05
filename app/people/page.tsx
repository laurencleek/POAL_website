import Image from "next/image"
import Link from "next/link"

export default function PeoplePage() {
  const leadership = [
    {
      id: 1,
      name: "Dr. Jane Smith",
      title: "Executive Director",
      image: "/placeholder.svg?height=300&width=300&text=JS",
      bio: "Dr. Smith is a leading economist specializing in social mobility and inequality. She previously served as a professor at Stanford University and as a policy advisor to the U.S. Treasury.",
    },
    {
      id: 2,
      name: "Dr. Michael Johnson",
      title: "Research Director",
      image: "/placeholder.svg?height=300&width=300&text=MJ",
      bio: "Dr. Johnson's research focuses on the geography of economic opportunity and the role of education in promoting upward mobility. He has published extensively in leading academic journals.",
    },
    {
      id: 3,
      name: "Dr. Sarah Williams",
      title: "Policy Director",
      image: "/placeholder.svg?height=300&width=300&text=SW",
      bio: "Dr. Williams bridges research and policy, working with government agencies and non-profits to implement evidence-based solutions to improve economic opportunity.",
    },
  ]

  const researchers = [
    {
      id: 4,
      name: "Dr. Robert Chen",
      title: "Senior Researcher",
      image: "/placeholder.svg?height=200&width=200&text=RC",
      focus: "Data Science, Machine Learning",
    },
    {
      id: 5,
      name: "Dr. Emily Davis",
      title: "Senior Researcher",
      image: "/placeholder.svg?height=200&width=200&text=ED",
      focus: "Education Economics",
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=JW",
      focus: "Urban Economics",
    },
    {
      id: 7,
      name: "Dr. Lisa Thompson",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=LT",
      focus: "Labor Economics",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our People</h1>

          <h2 className="text-2xl font-bold mb-8">Leadership</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {leadership.map((person) => (
              <div
                key={person.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-emerald-600 mb-4">{person.title}</p>
                  <p className="text-gray-700 mb-4">{person.bio}</p>
                  <Link href={`/people/${person.id}`} className="text-emerald-600 hover:text-emerald-800 font-medium">
                    Full profile
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-8">Research Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchers.map((person) => (
              <div key={person.id} className="flex flex-col items-center text-center p-4">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="text-lg font-bold">{person.name}</h3>
                <p className="text-emerald-600 mb-2">{person.title}</p>
                <p className="text-gray-600 text-sm">{person.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Join Our Team</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            We're always looking for talented researchers, data scientists, and policy experts who are passionate about
            improving economic opportunity.
          </p>
          <Link
            href="/careers"
            className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </div>
  )
}

