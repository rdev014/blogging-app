"use client";

const recordings = [
  {
    id: 1,
    title: "AI and the Future of Work - Full Session",
    description: "Watch the full session on how AI is transforming the workforce. Discussing key trends and technologies.",
    date: "Jan 5, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Online",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder for video
    category: "AI",
  },
  {
    id: 2,
    title: "Web Development Bootcamp - Highlights",
    description: "Watch the highlights from our Web Development Bootcamp. Learn the key takeaways from the event.",
    date: "Jan 10, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "San Francisco, CA",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder for video
    category: "Web Development",
  },
  {
    id: 3,
    title: "Blockchain for Beginners - Webinar Replay",
    description: "Replay the full webinar on blockchain for beginners. Learn the fundamentals and get started with blockchain.",
    date: "Jan 15, 2025",
    time: "6:00 PM - 7:00 PM",
    location: "Online",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder for video
    category: "Blockchain",
  },
  // Add more recordings as necessary
];

const categories = ["AI", "Web Development", "Blockchain", "Design", "Business"];

export default function RecordingsPage(){
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Event Recordings</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-10 px-6">
        {/* Filters */}
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
              <option value="asc">Newest First</option>
              <option value="desc">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Recordings List */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recordings.map((recording) => (
            <div
              key={recording.id}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
            >
              {/* Video Player */}
              <div className="relative w-full h-56 bg-gray-200 dark:bg-gray-700">
                <iframe
                  width="100%"
                  height="100%"
                  src={recording.videoUrl}
                  title={recording.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Recording Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{recording.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{recording.date} | {recording.time}</p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{recording.description}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Location: {recording.location}</p>
                <a
                  href="#"
                  className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                >
                  Watch Now
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


