import React, { useState } from "react";
import { FaChartBar, FaProjectDiagram, FaChartPie } from "react-icons/fa";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement
);

const Dashboard = () => {
  const [activeChart, setActiveChart] = useState("line");

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const projectProgress = [
    { name: "Project A", progress: 75 },
    { name: "Project B", progress: 45 },
    { name: "Project C", progress: 90 },
  ];

  const statistics = [
    { label: "Total Revenue", value: "$150,000", icon: <FaChartBar /> },
    { label: "Active Projects", value: "12", icon: <FaProjectDiagram /> },
    { label: "Completion Rate", value: "85%", icon: <FaChartPie /> },
  ];

  const renderChart = () => {
    switch (activeChart) {
      case "bar":
        return <Bar data={chartData} />;
      case "pie":
        return <Pie data={chartData} />;
      default:
        return <Line data={chartData} />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                {stat.label}
              </h3>
              <span className="text-blue-500 text-2xl">{stat.icon}</span>
            </div>
            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Sales Overview
        </h2>
        <div className="mb-4 flex space-x-4">
          <button
            onClick={() => setActiveChart("line")}
            className={`px-4 py-2 rounded ${
              activeChart === "line"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Line Chart
          </button>
          <button
            onClick={() => setActiveChart("bar")}
            className={`px-4 py-2 rounded ${
              activeChart === "bar"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Bar Chart
          </button>
          <button
            onClick={() => setActiveChart("pie")}
            className={`px-4 py-2 rounded ${
              activeChart === "pie"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Pie Chart
          </button>
        </div>
        <div className="h-96">{renderChart()}</div>
      </div>

      <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Project Progress
        </h2>
        {projectProgress.map((project, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-700">
                {project.name}
              </h3>
              <span className="text-sm font-medium text-gray-600">
                {project.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
