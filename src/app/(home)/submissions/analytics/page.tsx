"use client";

import { useEffect, useState } from "react";

export default function AnalyticsPage() {
  const [submissionData, setSubmissionData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating fetching data from an API (replace with actual API call)
    setTimeout(() => {
      try {
        // Sample data (replace this with actual data from your backend)
        setSubmissionData({
          totalSubmissions: 120,
          submissionsByCategory: {
            tech: 50,
            art: 30,
            business: 20,
            others: 20,
          },
          submissionsByDate: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            data: [10, 20, 30, 25, 15, 40],
          },
        });
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching submission data.");
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  if (isLoading) {
    return <div className="text-center py-10">Loading Analytics...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  // Bar chart CSS styles
  const barChartStyles = (value: number) => ({
    height: `${value}%`,
    backgroundColor: "#ff6f00",
    borderRadius: "8px",
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Submission Analytics</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Overview</h2>

        {/* Overview Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-orange-600">Total Submissions</h3>
            <p className="text-2xl font-bold">{submissionData.totalSubmissions}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-orange-600">Submissions by Category</h3>
            <ul className="text-left mt-2">
              {Object.entries(submissionData.submissionsByCategory).map(([category, count]) => (
                <li key={category} className="text-gray-700 dark:text-gray-300">
                  {category}: {count}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bar Chart for Submissions by Category */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-orange-600">Submissions by Category</h3>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-4">
            <div className="flex items-end gap-4">
              {Object.entries(submissionData.submissionsByCategory).map(([category, count]) => (
                <div key={category} className="w-20 flex flex-col items-center">
                  <div style={barChartStyles((count / submissionData.totalSubmissions) * 100)} className="w-full">
                    <span className="text-xs text-center">{count}</span>
                  </div>
                  <span className="text-sm mt-2">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Line Chart for Submissions Over Time (Simple Bar Chart Visualization) */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-orange-600">Submissions Over Time</h3>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-4">
            <div className="flex gap-4">
              {submissionData.submissionsByDate.data.map((value: number, index: number) => (
                <div
                  key={index}
                  className="w-12"
                  style={{
                    height: `${value}%`,
                    backgroundColor: "#ff6f00",
                    borderRadius: "8px",
                    marginBottom: "2px",
                  }}
                >
                  <span className="text-xs text-center block">{submissionData.submissionsByDate.labels[index]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* File Upload Statistics (Optional) */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-orange-600">File Types Breakdown</h3>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-4">
            {/* Example content (Add your actual file upload statistics here) */}
            <ul>
              <li className="text-gray-700 dark:text-gray-300">PDFs: 40%</li>
              <li className="text-gray-700 dark:text-gray-300">Images: 30%</li>
              <li className="text-gray-700 dark:text-gray-300">Documents: 20%</li>
              <li className="text-gray-700 dark:text-gray-300">Others: 10%</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
