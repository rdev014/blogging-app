"use client";

export default function TrendingPage() {
  const trendingTopics = [
    {
      id: 1,
      title: "AI and Machine Learning: Transforming Industries",
      description: "Explore the latest advancements and real-world applications of AI and machine learning.",
      image: "/ai-trends.jpg",
    },
    {
      id: 2,
      title: "Web3: The Decentralized Web Revolution",
      description: "Delve into the innovations and implications of blockchain and Web3 technologies.",
      image: "/web3-trends.jpg",
    },
    {
      id: 3,
      title: "Sustainable Tech: Innovations for the Future",
      description: "Discover how technology is addressing global sustainability challenges.",
      image: "/sustainability-trends.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Trending Topics
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trendingTopics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
            >
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{topic.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {topic.description}
                </p>
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
