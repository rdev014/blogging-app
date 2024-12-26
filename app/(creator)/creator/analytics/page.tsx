import React from 'react'

export default function Analytics() {
    return (
        <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
          {/* Header */}
          <header className="text-center py-12">
            <h1 className="text-4xl font-bold mb-4">NetHunt Analytics Dashboard</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Overview of key statistics and platform insights.</p>
          </header>
    
          {/* Analytics Overview */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4 py-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Total Posts</h3>
              <p className="text-4xl font-bold text-orange-500">1,250</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Total Users</h3>
              <p className="text-4xl font-bold text-orange-500">3,500</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Total Comments</h3>
              <p className="text-4xl font-bold text-orange-500">7,200</p>
            </div>
          </section>
    
          {/* Recent Activity */}
          <section className="px-4 py-8">
            <h2 className="text-3xl font-semibold text-center mb-8">Recent Activity</h2>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Latest Posts</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span>Tech Trends in 2024</span>
                  <span className="text-gray-600 dark:text-gray-400">10 minutes ago</span>
                </li>
                <li className="flex justify-between">
                  <span>JavaScript Frameworks: A Comparative Study</span>
                  <span className="text-gray-600 dark:text-gray-400">30 minutes ago</span>
                </li>
                <li className="flex justify-between">
                  <span>Introduction to AI and ML</span>
                  <span className="text-gray-600 dark:text-gray-400">1 hour ago</span>
                </li>
              </ul>
            </div>
          </section>
    
          
        </div>
      );
    };

