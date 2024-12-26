"use client";

import { useState } from "react";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data
    console.log({ title, description, image });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">Create New Item</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6"
        >
          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:ring-4 focus:ring-orange-500"
              placeholder="Enter title here"
              required
            />
          </div>

          {/* Description Input */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:ring-4 focus:ring-orange-500"
              placeholder="Enter description here"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer focus:ring-4 focus:ring-orange-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
