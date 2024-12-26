"use client";

export default function MarketplacePage() {
  const products = [
    {
      id: 1,
      name: "AI-powered Chatbot",
      description: "Enhance customer engagement with our AI chatbot solutions.",
      price: "$499",
      image: "/ai-chatbot.jpg",
    },
    {
      id: 2,
      name: "Web3 Development Kit",
      description: "Build decentralized applications with ease.",
      price: "$799",
      image: "/web3-kit.jpg",
    },
    {
      id: 3,
      name: "Cloud Hosting Service",
      description: "Scalable and secure cloud hosting for your business.",
      price: "$299/year",
      image: "/cloud-hosting.jpg",
    },
    {
      id: 4,
      name: "Cybersecurity Package",
      description: "Comprehensive security solutions to protect your data.",
      price: "$999",
      image: "/cybersecurity-package.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Marketplace
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {product.description}
                </p>
                <div className="text-lg font-semibold text-orange-600 mb-4">
                  {product.price}
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:outline-none transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}