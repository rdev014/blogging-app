"use client";

export default function PricingPage() {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "$10/month",
      features: [
        "Access to basic content",
        "Community support",
        "Standard analytics",
      ],
    },
    {
      id: 2,
      name: "Pro Plan",
      price: "$25/month",
      features: [
        "Access to all content",
        "Priority support",
        "Advanced analytics",
        "Customizable dashboard",
      ],
    },
    {
      id: 3,
      name: "Enterprise Plan",
      price: "Contact Us",
      features: [
        "Dedicated account manager",
        "Tailored solutions",
        "24/7 support",
        "Unlimited team members",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Our Pricing Plans
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4 text-center">{plan.name}</h2>
                <p className="text-2xl font-extrabold text-center text-orange-600 mb-6">
                  {plan.price}
                </p>
                <ul className="mb-6 text-gray-600 dark:text-gray-400">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <span className="mr-2 text-orange-600">&#x2713;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none transition">
                    {plan.id === 3 ? "Contact Us" : "Choose Plan"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
