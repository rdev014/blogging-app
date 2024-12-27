"use client";

import { useState } from "react";
import { withAuth } from "@/components/WithAuth";

function CreateToolsPage({session}:any) {
  const [formData, setFormData] = useState({
    toolName: "",
    toolDescription: "",
    toolCategory: "tech", // Default category
    toolLink: "",
    toolImage: "/images/default-tool-image.jpg",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, toolImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate saving the tool data (replace with actual API call)
    setTimeout(() => {
      setIsSaving(false);
      alert("Tool created successfully!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Create New Tool</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Enter Tool Details</h2>

        {error && <div className="text-red-600 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tool Image */}
          <div className="flex justify-center items-center">
            <div className="relative">
            {session ? session.user?.image ? <img src={session.user.image} alt={session.user.name} className="w-32 h-32 rounded-lg object-cover border-4 border-orange-600" /> :'' : ''}
            
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute bottom-0 right-0 w-8 h-8 bg-orange-600 text-white rounded-full cursor-pointer opacity-0 hover:opacity-80"
              />
            </div>
          </div>

          {/* Tool Name */}
          <div>
            <label htmlFor="toolName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Tool Name
            </label>
            <input
              type="text"
              id="toolName"
              name="toolName"
              value={formData.toolName}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              placeholder="Enter tool name"
              required
            />
          </div>

          {/* Tool Description */}
          <div>
            <label htmlFor="toolDescription" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Tool Description
            </label>
            <textarea
              id="toolDescription"
              name="toolDescription"
              value={formData.toolDescription}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              placeholder="Describe the tool"
              required
            />
          </div>

          {/* Tool Category */}
          <div>
            <label htmlFor="toolCategory" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Tool Category
            </label>
            <select
              id="toolCategory"
              name="toolCategory"
              value={formData.toolCategory}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              <option value="tech">Tech</option>
              <option value="art">Art</option>
              <option value="business">Business</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Tool Link */}
          <div>
            <label htmlFor="toolLink" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Tool Link
            </label>
            <input
              type="url"
              id="toolLink"
              name="toolLink"
              value={formData.toolLink}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              placeholder="Enter tool link (optional)"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-md w-full sm:w-auto hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
              disabled={isSaving}
            >
              {isSaving ? "Creating..." : "Create Tool"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default withAuth(CreateToolsPage);