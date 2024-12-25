"use client";

export default function Service() {
  const services = [
    {
      id: 1,
      title: "Custom Web Development",
      description:
        "Tailored web solutions to meet your unique business needs, utilizing the latest technologies and best practices.",
      icon: "\uD83C\uDF10",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Create intuitive and engaging mobile applications for iOS and Android platforms.",
      icon: "📱",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Deliver exceptional user experiences with modern and user-friendly designs.",
      icon: "🎨",
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      description:
        "Launch your online store with robust and scalable e-commerce platforms.",
      icon: "\uD83D\uDED2",
    },
    {
      id: 5,
      title: "SEO & Digital Marketing",
      description:
        "Boost your online presence and drive organic traffic with effective marketing strategies.",
      icon: "📈",
    },
    {
      id: 6,
      title: "Cloud Solutions",
      description:
        "Leverage the power of cloud computing to optimize your operations and scalability.",
      icon: "☁️",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Our Services
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 p-6 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
