import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Opening launch of public opinion analytics lab",
      date: "May 16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Reading University, UK",
      image: "/placeholder.svg?height=300&width=500&text=Conference",
      description:
        "Our launch event with various speakers and panels discussing the future of public opinion analytics.",
    },
    {
      id: 2,
      title: "Placeholder Event 1",
      date: "July 2025",
      time: "TBD",
      location: "TBD",
      image: "/placeholder.svg?height=300&width=500&text=Event1",
      description: "Event details coming soon.",
    },
    {
      id: 3,
      title: "Placeholder Event 2",
      date: "August 2025",
      time: "TBD",
      location: "TBD",
      image: "/placeholder.svg?height=300&width=500&text=Event2",
      description: "Event details coming soon.",
    },
  ]

  const pastEvents = [
    {
      id: 4,
      title: "Placeholder Past Event 1",
      date: "March 2025",
      image: "/placeholder.svg?height=200&width=300&text=Past1",
    },
    {
      id: 5,
      title: "Placeholder Past Event 2",
      date: "February 2025",
      image: "/placeholder.svg?height=200&width=300&text=Past2",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center">Events</h1>

          <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="flex flex-col space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Link href={`/events/${event.id}`} className="text-emerald-600 hover:text-emerald-800 font-medium">
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-8">Past Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="flex border-b border-gray-200 pb-6">
                <div className="w-1/3 mr-4">
                  <div className="relative h-full w-full">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 25vw"
                    />
                  </div>
                </div>
                <div className="w-2/3">
                  <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-500 mb-2">{event.date}</p>
                  <Link href="#" className="text-emerald-600 hover:text-emerald-800 text-sm">
                    View recording
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

