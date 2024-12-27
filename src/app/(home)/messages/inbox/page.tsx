"use client";

import { useState, useEffect } from "react";

export default function InboxPage() {
  const [conversations, setConversations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<any | null>(null);

  useEffect(() => {
    // Simulating fetching conversations from an API (replace with actual API call)
    setTimeout(() => {
      try {
        // Example conversation data (replace with actual data from your backend)
        setConversations([
          {
            id: 1,
            sender: "Admin",
            subject: "Welcome to NetHunt",
            snippet: "Welcome to the platform! Let us know if you need any help.",
            date: "2024-12-20",
          },
          {
            id: 2,
            sender: "User123",
            subject: "Documentation Request",
            snippet: "Can you please update the documentation?",
            date: "2024-12-19",
          },
          {
            id: 3,
            sender: "Admin",
            subject: "Scheduled Maintenance",
            snippet: "Scheduled maintenance will take place tomorrow from 1 AM.",
            date: "2024-12-18",
          },
        ]);
        setIsLoading(false);
      } catch (err) {
        setError("Error fetching conversations.");
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  const handleSelectMessage = (id: number) => {
    const selected = conversations.find((conv) => conv.id === id);
    setSelectedMessage(selected);
  };

  const handleBackToInbox = () => {
    setSelectedMessage(null);
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading Inbox...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Inbox</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-10 px-6">
        {!selectedMessage ? (
          <>
            <h2 className="text-xl font-semibold mb-6 text-center">Conversations</h2>

            {/* Conversation List */}
            <div className="space-y-4">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSelectMessage(conversation.id)}
                >
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg">{conversation.subject}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {conversation.snippet}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(conversation.date).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <button
              onClick={handleBackToInbox}
              className="text-orange-600 hover:text-orange-500 focus:outline-none"
            >
              &larr; Back to Inbox
            </button>

            {/* Selected Message */}
            <div className="mt-6 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-orange-600">{selectedMessage.subject}</h3>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{selectedMessage.sender}</span> |{" "}
                <span>{new Date(selectedMessage.date).toLocaleDateString()}</span>
              </div>
              <p className="mt-4">{selectedMessage.snippet}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
