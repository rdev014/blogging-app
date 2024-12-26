"use client";

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          SEO Settings
        </h1>
        <form className="space-y-8">
          {/* Meta Title */}
          <div>
            <label
              htmlFor="metaTitle"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Meta Title
            </label>
            <input
              type="text"
              id="metaTitle"
              name="metaTitle"
              placeholder="Enter meta title"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-orange-400 dark:focus:ring-orange-400 h-12"
            />
          </div>

          {/* Meta Description */}
          <div>
            <label
              htmlFor="metaDescription"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Meta Description
            </label>
            <textarea
              id="metaDescription"
              name="metaDescription"
              rows={4}
              placeholder="Enter meta description"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-orange-400 dark:focus:ring-orange-400 h-20"
            ></textarea>
          </div>

          {/* Keywords */}
          <div>
            <label
              htmlFor="keywords"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Keywords
            </label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              placeholder="Enter keywords separated by commas"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-orange-400 dark:focus:ring-orange-400 h-12"
            />
          </div>

          {/* Canonical URL */}
          <div>
            <label
              htmlFor="canonicalUrl"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Canonical URL
            </label>
            <input
              type="url"
              id="canonicalUrl"
              name="canonicalUrl"
              placeholder="Enter canonical URL"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-orange-400 dark:focus:ring-orange-400 h-12"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
