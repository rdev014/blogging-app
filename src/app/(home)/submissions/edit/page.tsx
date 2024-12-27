"use client";

import { useState, useEffect } from "react";

type Submission = {
  id: string;
  title: string;
  description: string;
  file: string; // URL or file name for simplicity
};

export default function EditSubmissionPage({ submissionId }: { submissionId: string }) {
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<any>({});

  useEffect(() => {
    // Simulating fetching data from an API (replace with actual API call)
    setTimeout(() => {
      // Example data (replace this with actual data fetching logic)
      const fetchedSubmission = {
        id: submissionId,
        title: "Old Submission Title",
        description: "This is a description of the submission.",
        file: "/path/to/old/file.pdf", // Placeholder for file URL
      };
      setSubmission(fetchedSubmission);
      setTitle(fetchedSubmission.title);
      setDescription(fetchedSubmission.description);
    }, 1000);
  }, [submissionId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    const errors: any = {};
    if (!title) errors.title = "Title is required.";
    if (!description) errors.description = "Description is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulating form submission (replace with actual API call to update submission)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay
      setMessage("Your submission has been successfully updated.");
    } catch (error) {
      setMessage("There was an error updating your submission. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!submission) {
    return <div className="text-center py-10">Loading submission...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Edit Submission</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto py-10 px-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Edit Your Submission</h2>

        {/* Edit Submission Form */}
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-semibold mb-2">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a title for your submission"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
            {formErrors.title && <p className="text-red-500 text-sm">{formErrors.title}</p>}
          </div>

          {/* Description */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-semibold mb-2">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide a description for your submission"
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
            {formErrors.description && <p className="text-red-500 text-sm">{formErrors.description}</p>}
          </div>

          {/* File Upload (Optional Replacement) */}
          <div className="mb-6">
            <label htmlFor="file" className="block text-sm font-semibold mb-2">Upload New File (Optional)</label>
            <input
              id="file"
              type="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
            {file && <p className="text-sm text-gray-600 dark:text-gray-300">New file: {file.name}</p>}
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
            >
              {isSubmitting ? "Updating..." : "Save Changes"}
            </button>
          </div>
        </form>

        {/* Confirmation or Error Message */}
        {message && (
          <div className={`p-4 rounded-lg ${message.startsWith("Your submission") ? "bg-green-600" : "bg-red-600"} text-white`}>
            <p>{message}</p>
          </div>
        )}
      </main>
    </div>
  );
}
