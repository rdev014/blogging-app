"use client";

import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);

    // Simulate a search operation (replace with actual API call)
    setTimeout(() => {
      const mockResults = [
        "Result 1 for " + query,
        "Result 2 for " + query,
        "Result 3 for " + query,
      ];

      setResults(mockResults);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Search
        </h1>
        <div className="flex items-center gap-4 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search here..."
            className="flex-grow px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none transition"
          >
            Search
          </button>
        </div>

        {isLoading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : (
          <ul className="space-y-4">
            {results.map((result, index) => (
              <li
                key={index}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              >
                {result}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
