"use client";

export default function MonetizationPage() {
  const monetizationFeatures = [
    {
      id: 1,
      title: "Ad Revenue",
      description:
        "Earn through targeted advertisements displayed on your content.",
      icon: "/ad-revenue-icon.svg",
    },
    {
      id: 2,
      title: "Subscription Plans",
      description:
        "Offer premium content to your audience through subscription tiers.",
      icon: "/subscription-icon.svg",
    },
    {
      id: 3,
      title: "Sponsored Content",
      description:
        "Collaborate with brands for sponsored articles, videos, or posts.",
      icon: "/sponsored-icon.svg",
    },
    {
      id: 4,
      title: "Affiliate Marketing",
      description:
        "Promote products or services and earn commission on sales.",
      icon: "/affiliate-icon.svg",
    },
    {
      id: 5,
      title: "Merchandising",
      description:
        "Sell branded merchandise directly to your followers.",
      icon: "/merchandising-icon.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Monetization Opportunities
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
          Explore diverse ways to monetize your content and grow your revenue.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {monetizationFeatures.map((feature) => (
            <div
              key={feature.id}
              className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 mr-4"
                />
                <h2 className="text-xl font-bold">{feature.title}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
