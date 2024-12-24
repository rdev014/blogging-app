"use client";
import { useState } from "react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 z-30 w-64 bg-gray-100 dark:bg-gray-900 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            NetHunt
          </h1>
          <button
            className="lg:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>
        <nav className="mt-6 space-y-2 px-4">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900 rounded-lg transition"
          >
            <span className="material-icons">dashboard</span>
            <span className="ml-3">Overview</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900 rounded-lg transition"
          >
            <span className="material-icons">article</span>
            <span className="ml-3">My Posts</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900 rounded-lg transition"
          >
            <span className="material-icons">analytics</span>
            <span className="ml-3">Analytics</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900 rounded-lg transition"
          >
            <span className="material-icons">settings</span>
            <span className="ml-3">Profile Settings</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 shadow-sm">
          <button
            className="lg:hidden text-orange-600 dark:text-orange-400"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Dashboard
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
            />
            <div className="w-10 h-10 bg-orange-500 dark:bg-orange-400 rounded-full flex items-center justify-center text-white">
              <span className="material-icons">person</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Analytics Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Total Views
              </h3>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                1,245
              </p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Likes
              </h3>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                785
              </p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Shares
              </h3>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                432
              </p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                New Followers
              </h3>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                120
              </p>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Recent Activity
            </h3>
            <ul className="divide-y divide-gray-300 dark:divide-gray-700">
              <li className="py-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong className="text-gray-700 dark:text-gray-300">
                    Post Created:
                  </strong>{" "}
                  “How to Use Next.js” - 2 hours ago
                </p>
              </li>
              <li className="py-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong className="text-gray-700 dark:text-gray-300">
                    Comment Received:
                  </strong>{" "}
                  “This is very helpful!” - 1 day ago
                </p>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
