"use client";

import { useState, useEffect } from "react";

export default function GroupsPage() {
  const [groups, setGroups] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<any | null>(null);

  useEffect(() => {
    // Simulating fetching groups from an API (replace with actual API call)
    setTimeout(() => {
      try {
        // Example group data (replace with actual data from your backend)
        setGroups([
          {
            id: 1,
            name: "Tech Enthusiasts",
            description: "A group for discussing the latest in tech.",
            memberCount: 120,
            recentMessage: "Check out the new JavaScript framework update!",
            lastUpdated: "2024-12-20",
          },
          {
            id: 2,
            name: "Art Lovers",
            description: "A group dedicated to exploring and sharing art.",
            memberCount: 80,
            recentMessage: "New art exhibition opening this weekend.",
            lastUpdated: "2024-12-19",
          },
          {
            id: 3,
            name: "Business Innovators",
            description: "A group for sharing ideas and innovations in business.",
            memberCount: 200,
            recentMessage: "Let's discuss the latest trends in e-commerce.",
            lastUpdated: "2024-12-18",
          },
        ]);
        setIsLoading(false);
      } catch (err) {
        setError("Error fetching groups.");
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  const handleSelectGroup = (id: number) => {
    const group = groups.find((grp) => grp.id === id);
    setSelectedGroup(group);
  };

  const handleBackToGroups = () => {
    setSelectedGroup(null);
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading Groups...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Message Groups</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-10 px-6">
        {!selectedGroup ? (
          <>
            <h2 className="text-xl font-semibold mb-6 text-center">Available Groups</h2>

            {/* Group List */}
            <div className="space-y-4">
              {groups.map((group) => (
                <div
                  key={group.id}
                  className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSelectGroup(group.id)}
                >
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg">{group.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {group.description}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Members: {group.memberCount}
                    <br />
                    Last updated: {new Date(group.lastUpdated).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <button
              onClick={handleBackToGroups}
              className="text-orange-600 hover:text-orange-500 focus:outline-none"
            >
              &larr; Back to Groups
            </button>

            {/* Selected Group Details */}
            <div className="mt-6 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-orange-600">{selectedGroup.name}</h3>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{selectedGroup.memberCount} members</span> |{" "}
                <span>{new Date(selectedGroup.lastUpdated).toLocaleDateString()}</span>
              </div>
              <p className="mt-4">{selectedGroup.description}</p>

              {/* Recent Message */}
              <div className="mt-6">
                <h4 className="font-semibold text-orange-600">Recent Message</h4>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {selectedGroup.recentMessage}
                </p>
              </div>

              {/* Join Group Button */}
              <button
                className="mt-6 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 focus:outline-none"
                onClick={() => alert(`Joined group: ${selectedGroup.name}`)}
              >
                Join Group
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
