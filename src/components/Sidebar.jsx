import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("rfd_token");
    localStorage.removeItem("rfd_user");
    navigate("/login");
  };

  // Active / Inactive link styles
  const linkClass = ({ isActive }) =>
    isActive
      ? "block w-full text-white bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg font-medium transition"
      : "block w-full text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition";

  return (
    <aside className="w-64 h-screen bg-white shadow-lg p-6 flex flex-col">
      
      {/* Logo Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800">
          Resume Fraud
        </h2>
        <p className="text-sm text-gray-500">
          Detection System
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-3">
        <NavLink to="/" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/upload" className={linkClass}>
          Upload Resume
        </NavLink>

        <NavLink to="/result" className={linkClass}>
          Reports
        </NavLink>

        <button
          onClick={logout}
          className="block w-full text-left text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}