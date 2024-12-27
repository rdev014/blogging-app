"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function AllUsersPage() {
  const router = useRouter();

  // Sample data for users (replace this with an API call to fetch actual users)
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching users from an API (replace this with an actual API call)
    setTimeout(() => {
      try {
        setUsers([
          { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
          { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
          { id: 3, name: "Alice Brown", email: "alice@example.com", role: "Viewer" },
        ]);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching users.");
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  const handleEdit = (userId: number) => {
    router.push(`/users/edit/${userId}`);
  };

  const handleDelete = (userId: number) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading Users...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">All Users</h1>
        <button
          onClick={() => router.push("/admin/users/create")}
          className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-500"
        >
          Create User
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-10 px-6">
        {/* Error Message */}
        {error && (
          <div className="mb-4 text-red-600 text-center">
            <p>{error}</p>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">Name</th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">Email</th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">Role</th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-gray-300 dark:border-gray-700">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2 flex space-x-4">
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="text-blue-600 hover:text-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination (Optional, can be customized) */}
        <div className="mt-6 flex justify-center">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            onClick={() => alert("Go to Previous Page")}
          >
            Previous
          </button>
          <span className="mx-4 text-gray-700 dark:text-gray-300">Page 1 of 10</span>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            onClick={() => alert("Go to Next Page")}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
