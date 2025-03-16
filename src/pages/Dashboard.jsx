import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-700">Welcome to the City Wellness Dashboard.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Total Issues Reported</h2>
          <p className="text-blue-600 text-2xl font-bold">120</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Resolved Issues</h2>
          <p className="text-green-600 text-2xl font-bold">95</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Pending Issues</h2>
          <p className="text-red-600 text-2xl font-bold">25</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
