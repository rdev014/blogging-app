'use client'
import React, { useState } from 'react'
import ThemeSwitch from '../ThemeSwitch';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-black shadow-lg
     border-b border-gray-800 dark:border-gray-400">
      {/* Brand Logo/Name */}
      <Link href='/' className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        NetHunt
      </Link>

      {/* Navigation Links - Desktop */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link
          href='/story'
          className="text-lg font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
        >
          Our Story
        </Link>
        <Link
          href="/membership"
          className="text-lg font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
        >
          Membership
        </Link>
        <Link
          href="#"
          className="text-lg font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
        >
          Write
        </Link>
        <Link
          href="#"
          className="text-lg font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
        >
          Sign In
        </Link>
        <button
          className="px-6 py-2 bg-orange-600 text-white font-medium rounded-full shadow-md hover:bg-orange-700 transition-colors"
        >
          Get Started
        </button>
        <ThemeSwitch />
      </nav>

      {/* Hamburger Menu - Mobile */}
      <div className="md:hidden flex items-center space-x-4">
        <ThemeSwitch />
        <button
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black bg-opacity-75 dark:bg-opacity-75  shadow-lg z-10 transition-all transform border-t border-gray-400">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {/* Only Sign In and Get Started buttons appear on mobile */}
            <Link
              href="#"
              className="text-lg font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
            >
              Sign In
            </Link>
            <button
              className="px-6 py-2 bg-orange-600 text-white font-medium rounded-full shadow-md hover:bg-orange-700 transition-colors"
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
