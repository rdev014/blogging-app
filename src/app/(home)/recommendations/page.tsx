"use client";

import { useEffect, useState } from "react";

export default function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching data from an API (replace with actual API call)
    setTimeout(() => {
      try {
        // Sample recommendations data (replace with actual data from your backend)
        setRecommendations([
          {
            id: 1,
            title: "Learn the Basics of Web Development",
            description: "A comprehensive guide for beginners in web development.",
            imageUrl: "/images/webdev.jpg",
            link: "/courses/web-development",
          },
          {
            id: 2,
            title: "Mastering JavaScript: From Beginner to Expert",
            description: "Deep dive into JavaScript concepts and advanced topics.",
            imageUrl: "/images/js.jpg",
            link: "/courses/javascript",
          },
          {
            id: 3,
            title: "Data Science with Python",
            description: "A step-by-step guide to learning data science using Python.",
            imageUrl: "/images/data-science.jpg",
            link: "/courses/data-science",
          },
        ]);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching recommendations.");
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  if (isLoading) {
    return <div className="text-center py-10">Loading Recommendations...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Recommendations</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-10 px-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Explore Our Recommendations</h2>

        {/* Recommendation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec: any) => (
            <div
              key={rec.id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={rec.imageUrl}
                alt={rec.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-orange-600">{rec.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{rec.description}</p>
                <a
                  href={rec.link}
                  className="mt-4 inline-block text-orange-600 font-semibold hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
