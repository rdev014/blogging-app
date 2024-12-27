"use client";

const featured = {
  id: 1,
  title: "The Future of AI",
  description:
    "Explore how Artificial Intelligence is shaping the world of tomorrow.",
  image: "https://via.placeholder.com/800x400",
};

const trendingItems = [
  {
    id: 1,
    title: "Top Web Development Tools in 2024",
    category: "Technology",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 2,
    title: "5 Ways to Improve Your Coding Skills",
    category: "Programming",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 3,
    title: "Discovering the Metaverse",
    category: "Innovation",
    image: "https://via.placeholder.com/400x300",
  },
];

const recommendedItems = [
  {
    id: 1,
    title: "Mastering JavaScript",
    description: "Learn JavaScript with these expert tips.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 2,
    title: "Exploring Cloud Computing",
    description: "Understand the power of cloud technology.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 3,
    title: "Building Responsive Apps",
    description: "Create applications that work seamlessly on all devices.",
    image: "https://via.placeholder.com/400x300",
  },
];

export default function Discover () {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Discover</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-10 px-6">
        {/* Featured Section */}
        <section className="mb-12">
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <h2 className="text-2xl font-bold text-white">{featured.title}</h2>
              <p className="text-white mt-2">{featured.description}</p>
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Trending</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {trendingItems.map((item) => (
              <div
                key={item.id}
                className="flex-none w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Section */}
        <section>
          <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};


