"use client";

const trendingItems = [
  {
    id: 1,
    title: "Exploring the Metaverse",
    description: "Discover how the Metaverse is reshaping the digital world.",
    category: "Technology",
    image: "https://via.placeholder.com/400x300",
    link: "/metaverse",
  },
  {
    id: 2,
    title: "The Future of Blockchain",
    description: "How blockchain technology is changing industries.",
    category: "Blockchain",
    image: "https://via.placeholder.com/400x300",
    link: "/blockchain",
  },
  {
    id: 3,
    title: "AI-Powered Automation",
    description: "Learn how AI is transforming business operations.",
    category: "AI",
    image: "https://via.placeholder.com/400x300",
    link: "/ai-automation",
  },
  {
    id: 4,
    title: "Top Web Development Trends",
    description: "Explore the latest trends in web development.",
    category: "Web Development",
    image: "https://via.placeholder.com/400x300",
    link: "/web-development",
  },
];

export default function TrendingPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Trending</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">What's Trending</h2>

        {/* Trending Items */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingItems.map((item) => (
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
                  {item.category}
                </p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};


