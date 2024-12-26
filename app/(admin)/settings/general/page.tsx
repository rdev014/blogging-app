"use client";

export default function GeneralPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center my-12">General Information</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Welcome to our platform! Here, we aim to provide exceptional resources, tools, and services to help you excel in your endeavors. Our mission is to create an environment where innovation meets collaboration.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Vision & Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Our vision is to inspire creativity and empower individuals to achieve their goals. We strive to make a positive impact by offering user-friendly solutions that enhance productivity and encourage growth.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            If you have any questions or need assistance, please do not hesitate to reach out to us. You can contact us through our support email or visit our contact page for more information.
          </p>
        </section>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:outline-none transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
