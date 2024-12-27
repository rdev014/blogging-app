"use client";

import { useState } from "react";

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  date: string;
};

export default function ManagePage  (){
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "Tech Blogging Template",
      price: "$29",
      category: "Templates",
      date: "2024-01-01",
    },
    {
      id: 2,
      title: "UI/UX Design Service",
      price: "$499",
      category: "Services",
      date: "2024-02-15",
    },
  ]);

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
        <h1 className="text-2xl font-bold text-orange-600">Manage Listings</h1>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Listings</h2>

        {/* Table */}
        {products.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700 text-left">
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Date Added</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="px-4 py-2">{product.title}</td>
                    <td className="px-4 py-2">{product.price}</td>
                    <td className="px-4 py-2">{product.category}</td>
                    <td className="px-4 py-2">{product.date}</td>
                    <td className="px-4 py-2">
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg">You have no listings yet.</p>
            <button className="mt-4 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
              Create New Listing
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

