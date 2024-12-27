"use client";

import { useState } from "react";
import { withAuth } from "@/components/WithAuth";

 function ProfileSettings({session}:any) {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "",
    avatar: "/images/default-avatar.jpg",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    // Simulate a profile update request (replace with your actual API call)
    setTimeout(() => {
      setIsUpdating(false);
      alert("Profile updated successfully!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Profile Settings</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Update Your Profile</h2>

        {error && <div className="text-red-600 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture */}
          <div className="flex justify-center items-center">
            <div className="relative">
            {session ? session.user?.image ? <img src={session.user.image} alt={session.user.name} className="w-32 h-32 rounded-full object-cover border-4 border-orange-600"/>:'':'' }
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute bottom-0 right-0 w-8 h-8 bg-orange-600 text-white rounded-full cursor-pointer opacity-0 hover:opacity-80"
              />
            </div>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              placeholder="Enter your email"
              disabled
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              placeholder="Enter a new password"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-md w-full sm:w-auto hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
              disabled={isUpdating}
            >
              {isUpdating ? "Updating..." : "Save Changes"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default withAuth(ProfileSettings);