"use client";

const events = [
  {
    id: 1,
    title: "AI and the Future of Work",
    description: "Join us for an in-depth discussion on how AI is transforming the workforce.",
    date: "Jan 5, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Online",
    image: "https://via.placeholder.com/400x300",
    category: "AI",
    link: "/ai-future-of-work",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description: "A 5-day hands-on bootcamp to master modern web development tools and techniques.",
    date: "Jan 10, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "San Francisco, CA",
    image: "https://via.placeholder.com/400x300",
    category: "Web Development",
    link: "/web-development-bootcamp",
  },
  {
    id: 3,
    title: "Blockchain for Beginners",
    description: "Learn the fundamentals of blockchain technology in this free webinar.",
    date: "Jan 15, 2025",
    time: "6:00 PM - 7:00 PM",
    location: "Online",
    image: "https://via.placeholder.com/400x300",
    category: "Blockchain",
    link: "/blockchain-for-beginners",
  },
  // Add more events as necessary
];

const categories = ["AI", "Web Development", "Blockchain", "Design", "Business"];

export default function AllEventsPage (){
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">All Events</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-10 px-6">
        {/* Filters and Sorting */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <label htmlFor="category" className="mr-2 text-sm font-semibold">Filter by Category</label>
            <select id="category" className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="sort" className="mr-2 text-sm font-semibold">Sort by Date</label>
            <select id="sort" className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              <option value="asc">Upcoming</option>
              <option value="desc">Past</option>
            </select>
          </div>
        </div>

        {/* Event List */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
            >
              {/* Event Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Event Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{event.date} | {event.time}</p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{event.description}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Location: {event.location}</p>
                <a
                  href={event.link}
                  className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 mx-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            Previous
          </button>
          <button className="px-4 py-2 mx-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            Next
          </button>
        </div>
      </main>
    </div>
  );
};


