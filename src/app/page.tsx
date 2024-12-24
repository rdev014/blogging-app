export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      {/* Main Section */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 space-y-8 md:space-y-0 md:space-x-8">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-2xl flex flex-col justify-center">
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug md:leading-tight">
            Explore Ideas, Share Stories
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            A platform to explore, write, and share your understanding with the world. 
            Connect, grow, and inspire.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center md:justify-start">
            <button className="px-8 py-4 bg-orange-700 text-white text-lg md:text-xl font-medium rounded-full shadow-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none transition-all">
              Start Reading
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/2 max-h-[60vh] md:max-h-[120vh]">
          <img
            src="/globe.jpg"
            alt="Inspiration"
            className="w-full h-full rounded-lg shadow-lg shadow-gray-950 dark:shadow-orange-400 object-cover"
          />
        </div>
      </main>
    </div>
  );
}
