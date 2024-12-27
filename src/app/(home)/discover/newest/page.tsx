"use client";

const newestItems = [
  {
    id: 1,
    title: "Exploring AI Innovations",
    description: "Dive into the latest trends in Artificial Intelligence.",
    category: "Technology",
    date: "Dec 23, 2024",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 2,
    title: "Top 10 Programming Tips",
    description: "Improve your coding skills with these essential tips.",
    category: "Programming",
    date: "Dec 22, 2024",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 3,
    title: "Future of Web Development",
    description: "Explore what's next in web technologies.",
    category: "Web Development",
    date: "Dec 21, 2024",
    image: "https://via.placeholder.com/400x300",
  },
];

const NewestPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Newest Updates</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Latest Highlights</h2>

        {/* Newest Items */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newestItems.map((item) => (
            <div
              key={item.id}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.category} • {item.date}
                </p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default NewestPage;
