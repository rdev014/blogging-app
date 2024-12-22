// pages/about.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 text-center">
        About <span className="text-orange-500">Us</span>
      </h1>
      <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mb-12">
        At Nethunt, we believe in the power of storytelling. Our platform is built to inspire creators, connect communities, and give everyone a voice. Whether you’re a seasoned writer or just starting your journey, Nethunt provides the tools and support to share your unique story with the world.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <svg className="w-20 h-20 text-orange-500 mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6" />
          </svg>
          <h3 className="text-2xl font-semibold mb-4">Empowering Voices</h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Our mission is to empower writers and creators to share their perspectives and create lasting connections through meaningful content.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <svg className="w-20 h-20 text-orange-500 mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm-8 11c0-2.209 2.686-4 6-4s6 1.791 6 4" />
          </svg>
          <h3 className="text-2xl font-semibold mb-4">Building Community</h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            We foster a vibrant and inclusive community where stories spark conversations, connections, and understanding.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <svg className="w-20 h-20 text-orange-500 mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v5m6-5v5M4 10h16M4 6h16" />
          </svg>
          <h3 className="text-2xl font-semibold mb-4">Inspiring Creativity</h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            With Nethunt, creativity knows no bounds. We’re here to help you transform your ideas into impactful stories that resonate.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <svg className="w-20 h-20 text-orange-500 mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm-8 11c0-2.209 2.686-4 6-4s6 1.791 6 4" />
          </svg>
          <h3 className="text-2xl font-semibold mb-4">Celebrating Stories</h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Every story matters. At Nethunt, we celebrate the diversity of voices and the power of authentic narratives.
          </p>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-colors duration-300">
          Join Our Journey
        </button>
      </div>
    </div>
  </div>
  );
};

export default AboutUs;
