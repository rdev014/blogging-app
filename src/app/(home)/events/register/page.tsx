"use client";

import { useState } from "react";

const events = [
  {
    id: 1,
    title: "AI and the Future of Work",
    date: "Jan 5, 2025",
    location: "Online",
    description: "Join us for an in-depth discussion on how AI is transforming the workforce.",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    date: "Jan 10, 2025",
    location: "San Francisco, CA",
    description: "A 5-day hands-on bootcamp to master modern web development tools and techniques.",
  },
  {
    id: 3,
    title: "Blockchain for Beginners",
    date: "Jan 15, 2025",
    location: "Online",
    description: "Learn the fundamentals of blockchain technology in this free webinar.",
  },
  // Add more events as necessary
];

export default function RegisterPage () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<any>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    const errors: any = {};
    if (!name) errors.name = "Name is required.";
    if (!email || !/\S+@\S+\.\S+/.test(email)) errors.email = "Valid email is required.";
    if (!selectedEvent) errors.selectedEvent = "Please select an event.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you can send the registration data to your backend (e.g., an API call)
      // For now, we simulate success:
      setMessage("Thank you for registering! You will receive a confirmation email shortly.");
    } catch (error) {
      setMessage("There was an error with your registration. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Event Registration</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Register for an Event</h2>

        {/* Event Selection */}
        <div className="mb-6">
          <label htmlFor="event" className="block text-sm font-semibold mb-2">Select Event</label>
          <select
            id="event"
            value={selectedEvent || ""}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="">Select an event</option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.title} - {event.date}
              </option>
            ))}
          </select>
          {formErrors.selectedEvent && <p className="text-red-500 text-sm">{formErrors.selectedEvent}</p>}
        </div>

        {/* Name Input */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
          {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
          {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
        </div>

        {/* Submit Button */}
        <div className="mb-6">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </div>

        {/* Confirmation or Error Message */}
        {message && (
          <div className="text-center p-4 bg-green-600 text-white rounded-lg">
            <p>{message}</p>
          </div>
        )}
      </main>
    </div>
  );
};


