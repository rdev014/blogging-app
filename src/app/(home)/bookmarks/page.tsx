'use client';
import React, { useState } from 'react';

export default function BookmarksPage (){
  const [bookmarks, setBookmarks] = useState([
    // Sample bookmarks data
    { id: 1, title: 'React Documentation', url: 'https://reactjs.org/' },
    { id: 2, title: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    // Add more bookmarks as needed
  ]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">My Bookmarks</h1>
        <ul className="space-y-4">
          {bookmarks.map((bookmark) => (
            <li key={bookmark.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <a href={bookmark.url} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline">
                {bookmark.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


