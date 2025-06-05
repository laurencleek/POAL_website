import Image from "next/image"
import Link from "next/link"

export default function PeoplePage() {
  const leadership = [
    {
      id: 1,
      name: "Prof Will Jennings",
      title: "Co-director",
      image: "/placeholder.svg?height=300&width=300&text=WJ",
      bio: "Overseeing the impact and public engagement theme",
    },
    {
      id: 2,
      name: "Prof Sara Hobolt",
      title: "Co-director",
      image: "/bio_hobolt.jpg?height=300&width=300&text=SH",
      bio: "Overseeing the research excellence theme",
    },
    {
      id: 3,
      name: "Dr Miriam Sorace",
      title: "Co-director",
      image: "/placeholder.svg?height=300&width=300&text=MS",
      bio: "Overseeing the innovation and training theme",
    },
  ]

  const researchers = [
    {
      id: 4,
      name: "Prof Gabi Durrant",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=GD",
      focus: "bio to be added here",
    },
    {
      id: 5,
      name: "Prof Ken Benoit",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=KB",
      focus: "bio to be added here",
    },
    {
      id: 6,
      name: "Prof Jason Reifler",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=JR",
      focus: "bio to be added here",
    },
    {
      id: 7,
      name: "Prof Patrick Sturgis",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=PS",
      focus: "bio to be added here",
    },
    {
      id: 8,
      name: "Prof Tereza Capelos",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=TC",
      focus: "bio to be added here",
    },
    {
      id: 9,
      name: "Prof Robert Johns",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=RJ",
      focus: "bio to be added here",
    },
    {
      id: 10,
      name: "Dr Katharina Lawall",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=KL",
      focus: "bio to be added here",
    },
    {
      id: 11,
      name: "Dr Victor Araujo Silva",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=VA",
      focus: "bio to be added here",
    },
    {
      id: 12,
      name: "Dr Matthias Kroenke",
      title: "Research Fellow",
      image: "/bio_matthias.jpg?height=200&width=200&text=MK",
      focus: "bio to be added here",
    },
    {
      id: 13,
      name: "Dr Thomas Robinson",
      title: "Research Fellow",
      image: "/bio_tom.jpg?height=200&width=200&text=TR",
      focus: "bio to be added here",
    },
    {
      id: 14,
      name: "Dr Ben Tappin",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=BT",
      focus: "bio to be added here",
    },
    {
      id: 15,
      name: "Dr Florian Foos",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=FF",
      focus: "bio to be added here",
    },
    {
      id: 16,
      name: "Dr Zach Dickson",
      title: "Research Fellow",
      image: "/bio_zac.jpg?height=200&width=200&text=ZD",
      focus: "bio to be added here",
    },
    {
      id: 17,
      name: "Dr Stuart Turnbull-Dugarte",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=ST",
      focus: "bio to be added here",
    },
    {
      id: 18,
      name: "Dr Daniel Devine",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=DD",
      focus: "bio to be added here",
    },
    {
      id: 19,
      name: "Dr Jessica Smith",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=JS",
      focus: "bio to be added here",
    },
    {
      id: 20,
      name: "Dr Vanessa Cheng-Matsuno",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=VC",
      focus: "bio to be added here",
    },
    {
      id: 21,
      name: "Dr Olga Maslovskaya",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=OM",
      focus: "bio to be added here",
    },
    {
      id: 22,
      name: "Dr Marta Antonetti",
      title: "Research Fellow",
      image: "/bio_anton.jpeg?height=200&width=200&text=MA",
      focus: "bio to be added here",
    },
    {
      id: 23,
      name: "Lauren Leek",
      title: "Research Fellow",
      image: "/bio_Leek.png?height=200&width=200&text=LL",
      focus: "bio to be added here",
    },
    {
      id: 24,
      name: "Conrad Martinez-Lambert",
      title: "Research Fellow",
      image: "/placeholder.svg?height=200&width=200&text=LL",
      focus: "bio to be added here",
    },
  ]

  const openPositions = [
    {
      id: "eoi1",
      name: "[EoIs open]",
      title: "Academic events lead",
      image: "/placeholder.svg?height=200&width=200&text=EOI",
      focus: "Seminar series, writing retreats, conferences",
    },
    {
      id: "eoi2", 
      name: "[EoIs open]",
      title: "Grant unit lead",
      image: "/placeholder.svg?height=200&width=200&text=EOI",
      focus: "bio to be added here",
    },
    {
      id: "eoi3",
      name: "[EoIs open]",
      title: "Survey methodology unit lead",
      image: "/placeholder.svg?height=200&width=200&text=EOI",
      focus: "bio to be added here",
    },
    {
      id: "eoi4",
      name: "[EoIs open]",
      title: "Executive and academic programmes lead",
      image: "/placeholder.svg?height=200&width=200&text=EOI",
      focus: "bio to be added here",
    },
    {
      id: "eoi5",
      name: "[EoIs open]",
      title: "Media unit lead",
      image: "/placeholder.svg?height=200&width=200&text=EOI",
      focus: "bio to be added here",
    },
    {
      id: "eoi6",
      name: "[EoIs open]",
      title: "Contracts/consultancy unit lead",
      image: "/placeholder.svg?height=200&width=200&text=EOI",
      focus: "bio to be added here",
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

