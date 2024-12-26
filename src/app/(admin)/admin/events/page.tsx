"use client";

export default function EventPage() {
  const events = [
    {
      id: 1,
      title: "Tech Trends Conference 2024",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      description: "Join leading experts in technology to discuss the future of AI, Web3, and sustainability.",
      image: "/event-tech-trends.jpg",
    },
    {
      id: 2,
      title: "Startup Growth Summit",
      date: "April 10, 2024",
      location: "New York, NY",
      description: "A premier event for startups to connect with investors, mentors, and fellow entrepreneurs.",
      image: "/event-startup-growth.jpg",
    },
    {
      id: 3,
      title: "Women in Tech Meetup",
      date: "May 20, 2024",
      location: "Austin, TX",
      description: "Empowering women in tech through networking, workshops, and inspiring keynote sessions.",
      image: "/event-women-tech.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Upcoming Events
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {event.description}
                </p>
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
