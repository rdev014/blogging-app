"use client";

import { useState } from "react";
import { withAuth } from "@/components/WithAuth";

function UserPage({session}:any) {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "A passionate developer interested in building cool products.",
    avatar: "/default-avatar.jpg", // You can replace this with a dynamic URL
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Simulate saving the updated user data
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">User Profile</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-10 px-6">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              {/* Avatar */}
             {session ? session.user?.image ? <img src={session.user.image} alt="avatar" className="w-16 h-16 rounded-full" /> : '' : ''}
              <div>
                <h2 className="text-2xl font-semibold">{user.name}</h2>
                <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-500 focus:outline-none"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <label htmlFor="bio" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Bio
            </label>
            {isEditing ? (
              <textarea
                id="bio"
                name="bio"
                value={updatedUser.bio}
                onChange={handleChange}
                className="w-full h-32 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                placeholder="Write something about yourself..."
              ></textarea>
            ) : (
              <p className="text-gray-700 dark:text-gray-300">{user.bio}</p>
            )}
          </div>

          {/* Update Button */}
          {isEditing && (
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-500 focus:outline-none"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
export default withAuth(UserPage);