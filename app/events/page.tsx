import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Opening launch of public opinion analytics lab",
      date: "May 16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Reading University, UK",
      image: "/opening.jpg?height=300&width=500&text=Conference",
      description:
        "Our launch event with various speakers and panels discussing the future of public opinion analytics.",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Internal Opening Launch",
      date: "March 2025",
      image: "/past.jpg?height=200&width=300&text=Past1",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-16 text-center text-gray-900">
            Events
          </h1>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Upcoming Event
            </h2>
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md mx-auto max-w-3xl"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {event.title}
                  </h3>
                  <div className="flex flex-col items-center space-y-2 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-center">
                    {event.description}
                  </p>
                  <Link
                    href={`/events/${event.id}`}
                    className="text-emerald-600 hover:text-emerald-800 font-medium block text-center"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Past Event
            </h2>
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md mx-auto max-w-3xl"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-center">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 mb-4 text-center">{event.date}</p>
                  <div className="flex flex-col items-center space-y-2">
                    <Link
                      href="/coverage-report"
                      className="text-emerald-600 hover:text-emerald-800 text-sm"
                    >
                      View Coverage Report
                    </Link>
                    <a
                      href="https://bsky.app/profile/did:plc:ucinub5cmhgyhnuvpvvraeik/post/3lpk3ap3t7c2l"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-800 text-sm"
                    >
                      Bluesky Promo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

