import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "POAL Launch event",
      date: "May 16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Reading University, UK",
      image: "/opening.jpg?height=300&width=500&text=Conference",
      description:
        "Our launch event with various speakers and panels discussing the future of public opinion analytics.",
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
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md mx-auto max-w-3xl mb-8"
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
                    {event.time && (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                  {event.description && (
                    <p className="text-gray-700 mb-4 text-center">
                      {event.description}
                    </p>
                  )}
                  <Link
                    href="/event1_report.pdf"
                    target="_blank"
                    className="text-emerald-600 hover:text-emerald-800 font-medium block text-center"
                  >
                    View Event Report (PDF)
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

