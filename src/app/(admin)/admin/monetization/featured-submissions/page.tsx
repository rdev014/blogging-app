"use client";

export default function FeaturedSubmissions() {
  const submissions = [
    {
      id: 1,
      title: "Revolutionizing Renewable Energy with AI",
      author: "Jane Doe",
      date: "December 20, 2024",
      image: "/renewable-energy.jpg",
      summary: "Exploring how artificial intelligence is driving innovations in renewable energy solutions.",
    },
    {
      id: 2,
      title: "The Future of Blockchain in Healthcare",
      author: "John Smith",
      date: "December 15, 2024",
      image: "/blockchain-healthcare.jpg",
      summary: "A look into how blockchain technology is reshaping data security in healthcare.",
    },
    {
      id: 3,
      title: "Advancements in Space Exploration Technology",
      author: "Anna Taylor",
      date: "December 10, 2024",
      image: "/space-exploration.jpg",
      summary: "Discover the latest breakthroughs making space exploration more accessible and efficient.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Featured Submissions
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {submissions.map((submission) => (
            <div
              key={submission.id}
              className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
            >
              <img
                src={submission.image}
                alt={submission.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{submission.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  By {submission.author} on {submission.date}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {submission.summary}
                </p>
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
