"use client";

export default function BillingPage() {
  const billingDetails = [
    {
      id: 1,
      item: "Pro Account Subscription",
      date: "2024-01-15",
      amount: "$29.99",
      status: "Paid",
    },
    {
      id: 2,
      item: "Ad Campaign Charges",
      date: "2024-01-10",
      amount: "$15.00",
      status: "Pending",
    },
    {
      id: 3,
      item: "Marketplace Purchase",
      date: "2024-01-08",
      amount: "$45.99",
      status: "Paid",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Billing Details
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-800">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-200">Item</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-200">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-200">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-200">Status</th>
              </tr>
            </thead>
            <tbody>
              {billingDetails.map((detail) => (
                <tr
                  key={detail.id}
                  className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                    {detail.item}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {detail.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                    {detail.amount}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 inline-block rounded-full text-white ${
                        detail.status === "Paid"
                          ? "bg-green-500"
                          : "bg-orange-500"
                      }`}
                    >
                      {detail.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex justify-end">
          <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none transition">
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
}
