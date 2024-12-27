"use client";

import { useState } from "react";

export default function AffiliatePage () {
  const [affiliateLink, setAffiliateLink] = useState(
    "https://nethunt.com/referral?code=123456"
  );
  const [referrals, setReferrals] = useState([
    { id: 1, name: "John Doe", date: "2024-01-10", earnings: "$15" },
    { id: 2, name: "Jane Smith", date: "2024-01-12", earnings: "$20" },
  ]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(affiliateLink);
    alert("Affiliate link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Affiliate Program</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Earn with NetHunt
        </h2>

        {/* Program Overview */}
        <section className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Why Join?</h3>
          <ul className="list-disc list-inside">
            <li>Earn 20% commission for every referral.</li>
            <li>Track your referrals and earnings in real time.</li>
            <li>Promote an innovative platform for tech enthusiasts.</li>
          </ul>
        </section>

        {/* Affiliate Link Section */}
        <section className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Your Affiliate Link</h3>
          <div className="flex items-center">
            <input
              type="text"
              value={affiliateLink}
              readOnly
              className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-l-lg focus:outline-none"
            />
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-orange-600 text-white rounded-r-lg hover:bg-orange-700 transition"
            >
              Copy
            </button>
          </div>
        </section>

        {/* Referral Statistics */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Your Referrals</h3>
          {referrals.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-700 text-left">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Earnings</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {referrals.map((referral) => (
                    <tr
                      key={referral.id}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-2">{referral.name}</td>
                      <td className="px-4 py-2">{referral.date}</td>
                      <td className="px-4 py-2">{referral.earnings}</td>
                      <td className="px-4 py-2">
                        <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center">No referrals yet.</p>
          )}
        </section>
      </main>
    </div>
  );
};


