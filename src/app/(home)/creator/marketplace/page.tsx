"use client";

export default function Marketplace (){
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Navigation Bar */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">NetHunt Marketplace</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 placeholder-gray-500 focus:outline-none"
          />
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
            Search
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-10 text-center">
        <h2 className="text-4xl font-bold mb-2">Discover Amazing Products</h2>
        <p className="text-lg">
          Explore, buy, and sell tech tools, resources, and services tailored for professionals.
        </p>
        <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Start Shopping
        </button>
      </section>

      <div className="flex flex-wrap">
        {/* Filters Section */}
        <aside className="w-full lg:w-1/4 bg-white dark:bg-gray-800 px-4 py-6 shadow-md lg:sticky top-0">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Category</h4>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Templates
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Plugins
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Services
                  </label>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">Price Range</h4>
              <input
                type="range"
                className="w-full mt-2"
                min="0"
                max="100"
                step="10"
              />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span>$100</span>
              </div>
            </div>

            <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 p-6">
          <h3 className="text-2xl font-bold mb-6">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }, (_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4">
                  {/* Placeholder for Product Image */}
                </div>
                <h4 className="text-lg font-semibold mb-2">Product {i + 1}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-600 font-bold">$49.99</span>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

