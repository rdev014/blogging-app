"use client";

const games = [
  {
    id: 1,
    title: "CyberQuest",
    category: "Adventure",
    description: "Embark on a thrilling cyberpunk adventure.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 2,
    title: "Galaxy Wars",
    category: "Sci-Fi",
    description: "Engage in epic space battles.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 3,
    title: "Mystic Realms",
    category: "Fantasy",
    description: "Explore a magical fantasy world.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 4,
    title: "Speed Racers",
    category: "Racing",
    description: "Race to the finish line in high-speed challenges.",
    image: "https://via.placeholder.com/400x300",
  },
];

export default function GamePage (){
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Games</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Discover Games</h2>

        {/* Game Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
            >
              {/* Image */}
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{game.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {game.category}
                </p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  {game.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

