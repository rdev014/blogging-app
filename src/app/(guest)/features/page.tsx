"use client";

import { useState } from "react";

const features = [
  {
    title: "Customizable Themes",
    description: "Personalize your experience with light and dark modes, along with a variety of theme colors to suit your style.",
    icon: "🎨",
  },
  {
    title: "Advanced Analytics",
    description: "Track your content's performance with detailed analytics and insights.",
    icon: "📊",
  },
  {
    title: "Collaborative Tools",
    description: "Work together with your team on projects with real-time collaboration features.",
    icon: "🤝",
  },
  {
    title: "Mobile-Friendly",
    description: "Access the platform seamlessly from any device, anywhere.",
    icon: "📱",
  },
];

export default function FeaturePage() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 flex flex-col items-center px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Features</h1>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => setActiveFeature(index)}
            className={`cursor-pointer border rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 transition-shadow shadow-lg hover:shadow-xl bg-white dark:bg-gray-800 ${
              activeFeature === index
                ? "border-orange-500"
                : "border-transparent"
            }`}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">
          {features[activeFeature].title}
        </h2>
        <p className="text-lg">{features[activeFeature].description}</p>
      </div>
    </div>
  );
}
