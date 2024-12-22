
export default function Help() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 text-center">
        Need <span className="text-orange-500">Help?</span>
      </h1>
      <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mb-12">
        We're here to assist you! Find answers to common questions, explore our resources, or reach out to our support team for personalized assistance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <svg className="w-16 h-16 text-orange-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
          <h3 className="text-xl font-semibold mb-4">FAQs</h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Explore answers to the most frequently asked questions to get started quickly.
          </p>
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md shadow transition-colors duration-300">
            Browse FAQs
          </button>
        </div>

        {/* Contact Support */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <svg className="w-16 h-16 text-orange-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.5 8.5L12 2l9.5 6.5m-19 0l9.5 6.5 9.5-6.5M2.5 15.5L12 22l9.5-6.5" />
          </svg>
          <h3 className="text-xl font-semibold mb-4">Contact Support</h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Need personalized help? Our support team is here to assist you.
          </p>
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md shadow transition-colors duration-300">
            Contact Us
          </button>
        </div>

        {/* Tutorials */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <svg className="w-16 h-16 text-orange-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11m-7-7l7 7-7 7" />
          </svg>
          <h3 className="text-xl font-semibold mb-4">Step-by-Step Tutorials</h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Learn how to use Nethunt through detailed guides and video tutorials.
          </p>
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md shadow transition-colors duration-300">
            View Tutorials
          </button>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-colors duration-300">
          Visit Help Center
        </button>
      </div>
    </div>
  </div>
  )
}
