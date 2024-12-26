"use client";

export default function ProAccountsPage() {
  const features = [
    {
      id: 1,
      title: "Priority Support",
      description:
        "Get access to 24/7 priority customer support to solve your issues promptly.",
      icon: "/priority-support.svg",
    },
    {
      id: 2,
      title: "Exclusive Content",
      description:
        "Unlock exclusive articles, tutorials, and resources only available to Pro users.",
      icon: "/exclusive-content.svg",
    },
    {
      id: 3,
      title: "Advanced Analytics",
      description:
        "Dive deep into insights and data with our advanced analytics tools.",
      icon: "/advanced-analytics.svg",
    },
    {
      id: 4,
      title: "Ad-Free Experience",
      description: "Enjoy an uninterrupted, ad-free browsing experience.",
      icon: "/ad-free.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Upgrade to Pro
        </h1>

        <p className="text-center text-lg md:text-xl mb-8">
          Unlock premium features and elevate your experience with our Pro Account.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-xl font-bold mb-2 text-center">
                {feature.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-orange-600 text-white text-lg font-medium rounded-full shadow-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none transition">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}
