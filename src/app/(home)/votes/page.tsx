"use client";

import { useState } from "react";

// Sample vote options
const voteOptions = [
  { id: 1, title: "AI and the Future of Work" },
  { id: 2, title: "Web Development Bootcamp" },
  { id: 3, title: "Blockchain for Beginners" },
];

export default function VotePage() {
  const [selectedVote, setSelectedVote] = useState<number | null>(null);
  const [voteCount, setVoteCount] = useState<Record<number, number>>(
    voteOptions.reduce((acc, option) => {
      acc[option.id] = 0;
      return acc;
    }, {} as Record<number, number>)
  );
  const [hasVoted, setHasVoted] = useState(false);

  const handleVoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedVote(Number(e.target.value));
  };

  const handleVoteSubmit = () => {
    if (selectedVote === null) return;

    // Update the vote count
    setVoteCount((prevVoteCount) => ({
      ...prevVoteCount,
      [selectedVote]: prevVoteCount[selectedVote] + 1,
    }));

    setHasVoted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Vote for an Event</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto py-10 px-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Vote for Your Favorite Event</h2>

        {/* Voting Options */}
        <form>
          {voteOptions.map((option) => (
            <div key={option.id} className="flex items-center mb-4">
              <input
                type="radio"
                id={`vote-${option.id}`}
                name="vote"
                value={option.id}
                checked={selectedVote === option.id}
                onChange={handleVoteChange}
                className="mr-2 h-5 w-5 text-orange-600 dark:text-orange-400"
              />
              <label htmlFor={`vote-${option.id}`} className="text-sm text-gray-800 dark:text-gray-200">
                {option.title}
              </label>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {voteCount[option.id]} votes
              </span>
            </div>
          ))}

          {/* Submit Vote */}
          <div className="mt-6">
            <button
              type="button"
              onClick={handleVoteSubmit}
              disabled={hasVoted}
              className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
            >
              {hasVoted ? "Vote Submitted" : "Submit Vote"}
            </button>
          </div>
        </form>

        {/* Response Message */}
        {hasVoted && (
          <div className="mt-6 text-center p-4 bg-green-600 text-white rounded-lg">
            <p>Thank you for voting! Your vote has been counted.</p>
          </div>
        )}
      </main>
    </div>
  );
}
