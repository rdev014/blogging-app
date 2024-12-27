"use client";

import { useState, useEffect } from "react";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating fetching notifications from an API (replace with actual API call)
    setTimeout(() => {
      try {
        // Example notification data (replace with your actual data source)
        setNotifications([
          {
            id: 1,
            title: "New Tool Added",
            description: "A new tool 'AI Generator' has been added to the platform.",
            date: "2024-12-20",
            type: "info",
          },
          {
            id: 2,
            title: "System Maintenance",
            description: "Scheduled maintenance will occur from 1 AM to 3 AM tomorrow.",
            date: "2024-12-19",
            type: "warning",
          },
          {
            id: 3,
            title: "New Submission Received",
            description: "You have received a new submission for the 'Tech' category.",
            date: "2024-12-18",
            type: "success",
          },
        ]);
        setIsLoading(false);
      } catch (err) {
        setError("Error fetching notifications.");
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  if (isLoading) {
    return <div className="text-center py-10">Loading Notifications...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Notifications</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Recent Notifications</h2>

        {/* Notification List */}
        <div className="space-y-6">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 ${
                notification.type === "info"
                  ? "border-l-4 border-blue-500"
                  : notification.type === "success"
                  ? "border-l-4 border-green-500"
                  : "border-l-4 border-yellow-500"
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {notification.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {notification.description}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
                {new Date(notification.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
