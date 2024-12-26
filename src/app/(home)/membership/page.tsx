import React from 'react';

export default function Membership() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 text-center">
          Become a <span className="text-orange-500">Member</span>
        </h1>
        <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mb-12">
          Join the Nethunt community and unlock exclusive benefits, connect with fellow creators, and make your mark in the world of storytelling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Basic Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg dark:shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Basic</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Perfect for those just starting out.</p>
            <p className="text-4xl font-bold mb-4 text-orange-500">Free</p>
            <ul className="text-gray-600 dark:text-gray-400 mb-6">
              <li className="mb-2">✔ Access free blogs</li>
              <li className="mb-2">✔ Join discussions</li>
              <li className="mb-2">✔ Community support</li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-semibold transition-colors duration-300 shadow-md hover:shadow-lg active:shadow-xl">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg dark:shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Premium</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">For passionate creators looking for more.</p>
            <p className="text-4xl font-bold mb-4 text-orange-500">$9.99/mo</p>
            <ul className="text-gray-600 dark:text-gray-400 mb-6">
              <li className="mb-2">✔ All Basic features</li>
              <li className="mb-2">✔ Ad-free experience</li>
              <li className="mb-2">✔ Access premium content</li>
              <li className="mb-2">✔ Analytics dashboard</li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-semibold transition-colors duration-300 shadow-md hover:shadow-lg active:shadow-xl">
              Upgrade Now
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg dark:shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Pro</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">For professionals ready to lead the way.</p>
            <p className="text-4xl font-bold mb-4 text-orange-500">$29.99/mo</p>
            <ul className="text-gray-600 dark:text-gray-400 mb-6">
              <li className="mb-2">✔ All Premium features</li>
              <li className="mb-2">✔ Personalized coaching</li>
              <li className="mb-2">✔ Featured writer status</li>
              <li className="mb-2">✔ Early access to new features</li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-semibold transition-colors duration-300 shadow-md hover:shadow-lg active:shadow-xl">
              Go Pro
            </button>
          </div>
        </div>

        {/* Plan Comparison */}
        <div className="mt-16 bg-gray-100 dark:bg-gray-900 py-12 px-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-8 text-center">Compare Our Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Basic</h3>
              <p className="text-gray-600 dark:text-gray-400">Perfect for newcomers</p>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 mt-4">
                <li>✔ Free Blogs</li>
                <li>✔ Join Discussions</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <p className="text-gray-600 dark:text-gray-400">For passionate creators</p>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 mt-4">
                <li>✔ All Basic Features</li>
                <li>✔ Premium Content</li>
                <li>✔ Analytics Dashboard</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Pro</h3>
              <p className="text-gray-600 dark:text-gray-400">For professionals</p>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 mt-4">
                <li>✔ All Premium Features</li>
                <li>✔ Coaching</li>
                <li>✔ Featured Writer Status</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-orange-500 dark:bg-orange-600 text-white py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Join?</h2>
          <p className="text-lg mb-8">
            Unlock the full potential of your creativity and connect with like-minded professionals. Become a part of the Nethunt community today!
          </p>
          <button className="bg-white text-orange-500 hover:bg-gray-200 dark:hover:bg-gray-700 py-3 px-6 rounded-md font-semibold transition-colors duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Have questions about membership? <a href="/help" className="text-orange-500 hover:underline">Visit our Help Center</a> or <a href="/contact" className="text-orange-500 hover:underline">Contact Us</a>.
          </p>
        </div>
      </div>
    </div>
  );
}