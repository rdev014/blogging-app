"use client";

export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      title: "Breaking Barriers in AI: A Journey of Innovation",
      author: "Jane Doe",
      date: "December 1, 2024",
      image: "/ai-story.jpg",
      description: "Explore how groundbreaking AI technologies are reshaping our world and breaking barriers in various fields.",
    },
    {
      id: 2,
      title: "The Rise of Web3: Decentralization in Action",
      author: "John Smith",
      date: "November 28, 2024",
      image: "/web3-story.jpg",
      description: "An in-depth look at how Web3 is transforming the internet and empowering users through decentralization.",
    },
    {
      id: 3,
      title: "Tech for Good: Driving Sustainability",
      author: "Emily Johnson",
      date: "November 20, 2024",
      image: "/sustainability-story.jpg",
      description: "Discover how technology is tackling global sustainability challenges and driving positive change.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Stories
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.id}
              className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{story.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  By {story.author} • {story.date}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {story.description}
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
