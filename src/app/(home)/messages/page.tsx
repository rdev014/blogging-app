"use client";

import { useState, useEffect } from "react";

export default function MessagePage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating fetching messages from an API (replace with actual API call)
    setTimeout(() => {
      try {
        // Example message data (replace with actual data from your backend)
        setMessages([
          {
            id: 1,
            sender: "Admin",
            message: "Welcome to the platform! Let us know if you need any help.",
            date: "2024-12-20",
          },
          {
            id: 2,
            sender: "User123",
            message: "Can you please update the documentation?",
            date: "2024-12-19",
          },
          {
            id: 3,
            sender: "Admin",
            message: "Scheduled maintenance will take place tomorrow from 1 AM.",
            date: "2024-12-18",
          },
        ]);
        setIsLoading(false);
      } catch (err) {
        setError("Error fetching messages.");
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          message: newMessage,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setNewMessage("");
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading Messages...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Messages</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Conversation</h2>

        {/* Message List */}
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 rounded-lg ${
                message.sender === "You"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              }`}
            >
              <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500">
                <span>{message.sender}</span>
                <span>{new Date(message.date).toLocaleDateString()}</span>
              </div>
              <p className="mt-2">{message.message}</p>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="mt-10 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
          <textarea
            className="w-full p-4 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none"
            rows={4}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message here..."
          />
          <button
            onClick={handleSendMessage}
            className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 focus:outline-none"
          >
            Send Message
          </button>
        </div>
      </main>
    </div>
  );
}
