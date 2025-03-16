import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">City Wellness</h1>
      <div className="space-x-4">
        <Link to="/src/pages/Dashboard.jsx" className="hover:underline">Dashboard</Link>
        <Link to="/src/pages/ReportIssue.jsx" className="hover:underline">Report Issue</Link>
        <Link to="/src/pages/Notifications.jsx" className="hover:underline">Notifications</Link>
        <Link to="/src/pages/Feedback.jsx" className="hover:underline">Feedback</Link>
        <Link to="/src/pages/Login.jsx" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
