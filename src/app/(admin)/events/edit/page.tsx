"use client";

export default function EditPage() {
  const handleSave = () => {
    // Logic for saving the edits
    alert("Changes have been saved successfully!");
  };

  const handleCancel = () => {
    // Logic for canceling the edits
    alert("Changes have been discarded.");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Edit Details</h1>

        <form>
          {/* Title Input */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:ring-4 focus:ring-orange-500"
              placeholder="Enter title"
            />
          </div>

          {/* Description Input */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:ring-4 focus:ring-orange-500"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Image URL Input */}
          <div className="mb-6">
            <label htmlFor="image" className="block text-sm font-medium mb-2">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:ring-4 focus:ring-orange-500"
              placeholder="Enter image URL"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-500 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
