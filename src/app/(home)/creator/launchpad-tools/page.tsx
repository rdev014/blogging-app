'use client';
import React, { useState } from 'react';

export default function LaunchpadTool() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('Idle');

  const handleLaunch = (toolName:any) => {
    setLoading(true);
    setStatus(`Launching ${toolName}...`);
    setTimeout(() => {
      setLoading(false);
      setStatus(`${toolName} Launched Successfully!`);
    }, 2000); // Simulate launch delay
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">NetHunt Launchpad</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Launch and manage your tools and projects easily from here.</p>
      </header>

      {/* Launchpad Tools */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 py-8">
        {/* Tool 1 */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Tool 1: Code Formatter</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">A tool to format your code and improve readability.</p>
          <button
            onClick={() => handleLaunch('Code Formatter')}
            className="bg-orange-500 text-white py-3 px-6 rounded-lg shadow hover:bg-orange-400 transition duration-300"
          >
            Launch Tool
          </button>
        </div>
        {/* Tool 2 */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Tool 2: Tech Analyzer</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Analyze the latest tech trends with this tool.</p>
          <button
            onClick={() => handleLaunch('Tech Analyzer')}
            className="bg-orange-500 text-white py-3 px-6 rounded-lg shadow hover:bg-orange-400 transition duration-300"
          >
            Launch Tool
          </button>
        </div>
        {/* Tool 3 */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Tool 3: AI Assistant</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Get answers to your tech questions using AI.</p>
          <button
            onClick={() => handleLaunch('AI Assistant')}
            className="bg-orange-500 text-white py-3 px-6 rounded-lg shadow hover:bg-orange-400 transition duration-300"
          >
            Launch Tool
          </button>
        </div>
      </section>

      {/* Status and Progress */}
      <section className="text-center py-8">
        <h2 className="text-3xl font-semibold mb-4">Current Status</h2>
        <p className="text-lg mb-4">{status}</p>
        {loading ? (
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
                  Loading...
                </span>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="relative flex-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
                      Progress
                    </span>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="relative flex-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
                          50%
                        </span>
                      </div>
                    </div>
                    <div className="h-2 mb-4 bg-orange-200 rounded-full">
                      <div className="w-1/2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </section>

    </div>
  );
};

