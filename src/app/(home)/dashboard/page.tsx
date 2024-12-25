"use client";

import { useEffect, useRef, useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const canvasRef = useRef(null);

  const drawChart = (ctx, labels, data) => {
    const canvasWidth = 500;
    const canvasHeight = 300;
    const chartHeight = 250;
    const barWidth = canvasWidth / labels.length - 20;
    const maxValue = Math.max(...data);

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw Axes
    ctx.beginPath();
    ctx.moveTo(50, 10);
    ctx.lineTo(50, chartHeight + 20);
    ctx.lineTo(canvasWidth, chartHeight + 20);
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw Bars
    data.forEach((value, index) => {
      const barHeight = (value / maxValue) * chartHeight;
      const x = 60 + index * (barWidth + 20);
      const y = chartHeight + 20 - barHeight;

      ctx.fillStyle = "#FFA500";
      ctx.fillRect(x, y, barWidth, barHeight);

      // Add Bar Values
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.fillText(value, x + barWidth / 2, y - 10);
    });

    // Draw Labels
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    labels.forEach((label, index) => {
      const x = 60 + index * (barWidth + 20) + barWidth / 2;
      ctx.fillText(label, x, chartHeight + 40);
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const data = [300, 400, 200, 450, 500, 350];

    drawChart(ctx, labels, data);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
            <canvas
              ref={canvasRef}
              width="600"
              height="400"
              className="rounded shadow bg-white dark:bg-gray-800"
            ></canvas>
          </div>
        );
      case "Profile":
        return <div className="p-6">Profile Settings Coming Soon!</div>;
      case "Reports":
        return <div className="p-6">Reports Feature Coming Soon!</div>;
      case "Settings":
        return <div className="p-6">Settings Feature Coming Soon!</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <nav className="w-64 bg-gray-100 dark:bg-gray-800 p-6">
        <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-6">
          Dashboard
        </h2>
        <ul className="space-y-4">
          {["Dashboard", "Profile", "Reports", "Settings"].map((tab) => (
            <li key={tab}>
              <button
                className={`w-full text-left p-3 rounded-lg ${
                  activeTab === tab
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                } hover:bg-orange-400 dark:hover:bg-orange-600 transition`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200">
        {renderContent()}
      </div>
    </div>
  );
}
