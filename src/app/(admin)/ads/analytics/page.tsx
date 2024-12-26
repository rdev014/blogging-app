"use client";

export default function AnalyticsPage() {
  const data = [
    { label: "Active Users", value: 1200 },
    { label: "New Signups", value: 340 },
    { label: "Page Views", value: 5200 },
    { label: "Engagement Rate", value: "75%" },
  ];

  const chartData = [
    { day: "Mon", value: 50 },
    { day: "Tue", value: 80 },
    { day: "Wed", value: 65 },
    { day: "Thu", value: 90 },
    { day: "Fri", value: 120 },
    { day: "Sat", value: 70 },
    { day: "Sun", value: 110 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Analytics Dashboard
        </h1>

        {/* Statistics Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {data.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <p className="text-2xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Weekly Activity</h2>
          <canvas id="activityChart" className="w-full h-64"></canvas>
        </div>
      </div>
    </div>
  );
}

// Chart rendering with Canvas API
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("activityChart");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    const chartData = [50, 80, 65, 90, 120, 70, 110];
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    // Chart configuration
    ctx.fillStyle = "#FFA500"; // Orange color
    const barWidth = 30;
    const gap = 20;
    const canvasHeight = canvas.height;
    const maxBarHeight = Math.max(...chartData);

    chartData.forEach((value, index) => {
      const x = index * (barWidth + gap) + 50;
      const barHeight = (value / maxBarHeight) * (canvasHeight - 40);
      const y = canvasHeight - barHeight - 20;
      ctx.fillRect(x, y, barWidth, barHeight);
    });

    // Draw labels
    ctx.fillStyle = "#333";
    ctx.font = "14px Arial";
    labels.forEach((label, index) => {
      const x = index * (barWidth + gap) + 50;
      ctx.fillText(label, x, canvasHeight - 5);
    });
  }
});
