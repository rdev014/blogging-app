"use client";

export default function Campaign() {
  const campaigns = [
    {
      id: 1,
      title: "AI for Education",
      description:
        "Empowering students and educators with AI-driven tools to enhance learning experiences.",
      goal: "$100,000",
      raised: "$78,000",
      image: "/campaign-education.jpg",
    },
    {
      id: 2,
      title: "Sustainability Tech",
      description:
        "Innovating solutions to create a greener and more sustainable future for all.",
      goal: "$250,000",
      raised: "$190,000",
      image: "/campaign-sustainability.jpg",
    },
    {
      id: 3,
      title: "Health Tech Revolution",
      description:
        "Advancing healthcare with cutting-edge technologies for better patient outcomes.",
      goal: "$300,000",
      raised: "$220,000",
      image: "/campaign-health.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Current Campaigns
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{campaign.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {campaign.description}
                </p>
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Goal:</strong> {campaign.goal}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Raised:</strong> {campaign.raised}
                  </p>
                </div>
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none transition">
                  Support Campaign
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
