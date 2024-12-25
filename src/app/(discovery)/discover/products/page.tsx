import React from 'react';

export default function Product() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Discover the Power of NetHunt</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Transform your tech knowledge-sharing experience with NetHunt.</p>
      </header>

      {/* Product Showcase */}
      <section className="flex items-center justify-center py-16 gap-12 px-4">
        <div className="max-w-sm">
          <img src="/images/product-image.jpg" alt="Product Screenshot" className="rounded-lg shadow-lg" />
        </div>
        <div className="max-w-lg">
          <h2 className="text-3xl font-semibold mb-4">Seamless Blogging Platform</h2>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
            Write, share, and discover tutorials on the latest tech trends. Engage with the community and learn together!
          </p>
          <button className="bg-orange-500 text-white py-3 px-6 rounded-lg shadow hover:bg-orange-400 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Easy Content Creation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Write with simplicity using our intuitive editor. Add images, code snippets, and embed videos effortlessly.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Tech Community</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Engage with a network of professionals and students. Share knowledge, tips, and the latest trends in technology.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Customize your reading experience and receive content recommendations based on your interests.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

