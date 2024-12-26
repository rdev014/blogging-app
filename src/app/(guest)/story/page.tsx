export default function Story() {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 text-center">
          Our <span className="text-orange-500">Story</span>
        </h1>
        <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mb-12">
          The journey of Nethunt began with a vision—to create a space where stories come alive, voices resonate, and ideas spark change. Here’s how it all started and continues to thrive.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center ">
            <svg
              className="w-80 h-80 text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
  
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">Where It All Began</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Founded with a passion for storytelling, Nethunt started as a simple idea—to give everyone a platform to share their unique perspectives. From humble beginnings, we’ve grown into a thriving community of writers and creators.
            </p>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              At Nethunt, our mission is to empower creativity, foster connections, and celebrate diversity. We believe every story matters, and we’re here to help yours reach the world.
            </p>
          </div>
        </div>
  
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Core Value 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <svg className="w-16 h-16 text-orange-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11m-7-7l7 7-7 7" />
            </svg>
            <h3 className="text-xl font-semibold mb-4">Creativity</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              We inspire creativity by providing the tools and community needed to bring ideas to life.
            </p>
          </div>
  
          {/* Core Value 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <svg className="w-16 h-16 text-orange-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
            <h3 className="text-xl font-semibold mb-4">Community</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              A vibrant and inclusive space where writers and readers connect and collaborate.
            </p>
          </div>
  
          {/* Core Value 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <svg className="w-16 h-16 text-orange-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <h3 className="text-xl font-semibold mb-4">Impact</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Every story has the power to make an impact. We’re here to amplify yours.
            </p>
          </div>
        </div>
  
        <div className="mt-16 flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-colors duration-300">
            Join Our Community
          </button>
        </div>
      </div>
    </div>
    )
  }