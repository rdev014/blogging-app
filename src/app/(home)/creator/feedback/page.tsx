'use client';
import React, { useState } from 'react';

export default function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Feedback submitted:", { name, feedback });
    // You can send feedback to your backend here
    alert('Thank you for your feedback!');
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">We Value Your Feedback</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Help us improve NetHunt by sharing your thoughts.</p>
      </header>

      {/* Feedback Form */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-900 dark:text-gray-100">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="feedback" className="block text-lg font-medium text-gray-900 dark:text-gray-100">Your Feedback</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={5}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          <button type="submit" className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg shadow hover:bg-orange-400 transition duration-300">
            Submit Feedback
          </button>
        </form>
      </section>

      
    </div>
  );
};


