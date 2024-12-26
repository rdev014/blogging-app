"use client";

import { useState } from "react";

export default function Demo() {
  const [featureIndex, setFeatureIndex] = useState(0);

  const features = [
    {
      title: "Easy to Use",
      description:
        "Our platform is designed with simplicity in mind, making it accessible to everyone.",
      image: "/easy-to-use.jpg",
    },
    {
      title: "Customizable",
      description:
        "Personalize your experience with a variety of customization options.",
      image: "/customizable.jpg",
    },
    {
      title: "Secure",
      description:
        "We prioritize your security, ensuring your data is protected at all times.",
      image: "/secure.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4">
      <h1 className="text-3xl font-bold my-8">Explore Our Demo</h1>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
        {/* Feature Image */}
        <div className="w-full md:w-1/2">
          <img
            src={features[featureIndex].image}
            alt={features[featureIndex].title}
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Feature Details */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">
            {features[featureIndex].title}
          </h2>
          <p className="text-lg mb-6">{features[featureIndex].description}</p>

          {/* Navigation Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            {features.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition ${
                featureIndex === index
                    ? "bg-orange-600"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
                onClick={() => setFeatureIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
