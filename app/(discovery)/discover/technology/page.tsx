"use client";

export default function TechnologiesPage() {
  const technologies = [
    {
      id: 1,
      name: "React.js",
      description: "A JavaScript library for building user interfaces.",
      logo: "/react-logo.png",
    },
    {
      id: 2,
      name: "Next.js",
      description: "A React framework for production-grade web applications.",
      logo: "/nextjs-logo.png",
    },
    {
      id: 3,
      name: "Node.js",
      description: "A runtime for building fast, scalable server-side applications.",
      logo: "/nodejs-logo.png",
    },
    {
      id: 4,
      name: "Tailwind CSS",
      description: "A utility-first CSS framework for styling web interfaces.",
      logo: "/tailwind-logo.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Technologies We Use
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 flex flex-col items-center p-6"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-24 h-24 mb-4 object-contain"
              />
              <h2 className="text-xl font-bold mb-2">{tech.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
