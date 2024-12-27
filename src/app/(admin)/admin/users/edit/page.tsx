"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditUserPage() {
  const router = useRouter();

  // Sample user data for editing (In a real-world app, fetch this data from an API)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Admin",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate an API call to save changes (replace with actual API)
      setTimeout(() => {
        console.log("User data saved:", user);
        // Redirect to user profile or users list after saving (example)
        router.push("/users");
      }, 1000);
    } catch (error) {
      setError("Failed to update user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Edit User</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-10 px-6">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-center">Edit User Information</h2>

          {/* Error Message */}
          {error && (
            <div className="mb-4 text-red-600 text-center">
              <p>{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              />
            </div>

            {/* Role Field */}
            <div className="mb-4">
              <label htmlFor="role" className="block text-gray-700 dark:text-gray-300 mb-2">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={user.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 rounded-md text-white ${
                  loading ? "bg-gray-500 cursor-not-allowed" : "bg-orange-600 hover:bg-orange-500"
                }`}
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
