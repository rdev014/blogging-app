import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-4 px-4 py-6 bg-white dark:bg-black border-t border-gray-800 dark:border-gray-400">
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Links for All Screen Sizes */}
        <Link
          href="/help"
          className="text-base font-medium text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
        >
          Help
        </Link>
        <Link
          href="/about"
          className="text-base font-medium text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
        >
          About
        </Link>
        <Link
          href="/terms"
          className="text-base font-medium text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
        >
          Terms
        </Link>
        <Link
          href="/privacy"
          className="text-base font-medium text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
        >
          Privacy
        </Link>

        {/* Links Hidden on Mobile */}
    
        <Link
          href="blogs"
          className="hidden md:inline-block text-base font-medium text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
        >
          Blog
        </Link>
      </div>

      {/* Copyright Information */}
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
        &copy; 2024 Nethunt. All rights reserved.
      </p>
    </footer>
  );
}
