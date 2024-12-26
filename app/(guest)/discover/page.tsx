"use client";

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header Section */}
      <header className="py-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Discover</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore a world of possibilities, trends, and innovations.
        </p>
      </header>

      {/* Discover Grid Section */}
      <section className="px-6 md:px-12 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Discover Card */}
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Image {index + 1}</span>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Feature Title {index + 1}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                </p>
                <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
