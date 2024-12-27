"use client";

import { useState } from "react";

export default function RolePage() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", role: "Editor" },
    { id: 3, name: "Charlie Brown", email: "charliebrown@example.com", role: "Viewer" },
  ]);

  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [newRole, setNewRole] = useState<string>("");

  const handleRoleChange = (userId: number, role: string) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, role } : user
    );
    setUsers(updatedUsers);
  };

  const handleSaveRole = () => {
    if (selectedUser && newRole) {
      handleRoleChange(selectedUser, newRole);
      setSelectedUser(null);
      setNewRole("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">User Role Management</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-10 px-6">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-center">Manage User Roles</h2>

          {/* Users Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">Name</th>
                  <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">Email</th>
                  <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">Role</th>
                  <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{user.name}</td>
                    <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{user.email}</td>
                    <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{user.role}</td>
                    <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                      <button
                        onClick={() => {
                          setSelectedUser(user.id);
                          setNewRole(user.role);
                        }}
                        className="text-orange-600 hover:text-orange-500"
                      >
                        Change Role
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Role Edit Form */}
          {selectedUser && (
            <div className="mt-6 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-600">Change Role for {users.find((user) => user.id === selectedUser)?.name}</h3>
              <div className="mt-4">
                <label htmlFor="role" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Select New Role
                </label>
                <select
                  id="role"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>

              {/* Save Changes Button */}
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleSaveRole}
                  className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-500 focus:outline-none"
                >
                  Save Role
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
