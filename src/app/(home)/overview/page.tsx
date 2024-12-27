"use client";

import { useState, useEffect } from "react";

export default function OverviewPage() {
  const [overviewData, setOverviewData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating fetching data from an API (replace with actual API call)
    setTimeout(() => {
      try {
        // Example of data (replace with your actual data source)
        setOverviewData({
          totalUsers: 150,
          activeUsers: 120,
          totalTools: 25,
          toolsAddedToday: 5,
          topCategory: "Tech",
        });
        setIsLoading(false);
      } catch (err) {
        setError("Error fetching overview data.");
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  if (isLoading) {
    return <div className="text-center py-10">Loading Overview...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Overview</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Quick Overview</h2>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Users */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-orange-600">Total Users</h3>
            <p className="text-2xl font-bold">{overviewData.totalUsers}</p>
          </div>

          {/* Active Users */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-orange-600">Active Users</h3>
            <p className="text-2xl font-bold">{overviewData.activeUsers}</p>
          </div>

          {/* Total Tools */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-orange-600">Total Tools</h3>
            <p className="text-2xl font-bold">{overviewData.totalTools}</p>
          </div>
        </div>

        {/* Stats Today */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Tools Added Today */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-orange-600">Tools Added Today</h3>
            <p className="text-2xl font-bold">{overviewData.toolsAddedToday}</p>
          </div>

          {/* Top Category */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-orange-600">Top Category</h3>
            <p className="text-2xl font-bold">{overviewData.topCategory}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 text-center">
          <button className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50">
            View More Details
          </button>
        </div>
      </main>
    </div>
  );
}
