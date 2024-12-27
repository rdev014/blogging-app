"use client";

import { useState } from "react";

export default function ComposePage() {
  const [recipient, setRecipient] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSending(true);
    setError(null);

    // Simulating a message send (replace with an actual API call)
    setTimeout(() => {
      try {
        if (!recipient || !subject || !body) {
          throw new Error("Please fill in all fields.");
        }

        // Simulate sending message
        console.log("Message sent to:", recipient);
        console.log("Subject:", subject);
        console.log("Body:", body);

        // Reset form fields
        setRecipient("");
        setSubject("");
        setBody("");
        setIsSending(false);

        alert("Message sent successfully!");
      } catch (err: any) {
        setError(err.message);
        setIsSending(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Compose Message</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-10 px-6">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-center text-orange-600 mb-6">Create a New Message</h2>

          {/* Error Message */}
          {error && (
            <div className="text-center py-3 bg-red-600 text-white rounded-md mb-6">
              <p>{error}</p>
            </div>
          )}

          {/* Recipient Input */}
          <div className="mb-4">
            <label htmlFor="recipient" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Recipient
            </label>
            <input
              id="recipient"
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Enter recipient's name or email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              required
            />
          </div>

          {/* Subject Input */}
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter subject"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              required
            />
          </div>

          {/* Message Body */}
          <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Message Body
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your message"
              className="w-full h-48 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSending}
              className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-500 focus:outline-none disabled:opacity-50"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
