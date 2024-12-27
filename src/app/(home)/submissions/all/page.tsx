"use client";

import { useEffect, useState } from "react";

// Sample data (replace this with actual API call in the future)
const sampleSubmissions = [
  {
    id: 1,
    title: "AI and the Future of Work",
    description: "A deep dive into how AI is transforming the workforce.",
    file: "file1.pdf",
    date: "2024-12-26",
  },
  {
    id: 2,
    title: "The Rise of Web3",
    description: "An article explaining Web3 technology and its impact.",
    file: "file2.jpg",
    date: "2024-12-25",
  },
  {
    id: 3,
    title: "Blockchain for Beginners",
    description: "A guide to understanding blockchain technology.",
    file: "file3.docx",
    date: "2024-12-24",
  },
];

export default function AllSubmissionsPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating fetching data from an API (replace with actual API call)
    setTimeout(() => {
      try {
        setSubmissions(sampleSubmissions); // Replace with API response data
        setLoading(false);
      } catch (err) {
        setError("There was an error fetching submissions.");
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">All Submissions</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-xl font-semibold mb-6 text-center">List of All Submissions</h2>

        {/* Submissions List */}
        <div className="space-y-4">
          {submissions.map((submission) => (
            <div
              key={submission.id}
              className="flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-orange-600">{submission.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{submission.description}</p>
              <div className="mt-4">
                <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                  File: {submission.file}
                </span>
                <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                  Submitted on: {submission.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (Optional) */}
        <div className="flex justify-center mt-8">
          <button
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
            onClick={() => alert("Pagination is not yet implemented")}
          >
            Load More Submissions
          </button>
        </div>
      </main>
    </div>
  );
}
