"use client";

export default function AdsPage() {
  const adsList = [
    {
      id: 1,
      title: "Promote Your Brand with Us",
      description: "Reach millions of users by advertising on our platform.",
      image: "/ads-brand.jpg",
      cta: "Learn More",
    },
    {
      id: 2,
      title: "Targeted Campaigns",
      description: "Leverage our advanced targeting tools to reach your audience effectively.",
      image: "/ads-target.jpg",
      cta: "Start Now",
    },
    {
      id: 3,
      title: "Analytics and Insights",
      description: "Get in-depth analytics to measure the performance of your ads.",
      image: "/ads-analytics.jpg",
      cta: "Explore Analytics",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Advertising Opportunities
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-8">
          Expand your reach and grow your business with our effective advertising solutions.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {adsList.map((ad) => (
            <div
              key={ad.id}
              className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
            >
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{ad.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {ad.description}
                </p>
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none transition">
                  {ad.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
