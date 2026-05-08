import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import {
  FaHome,
  FaChartPie,
  FaWallet,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaWallet />,
    },

    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartPie />,
    },
  ];

  return (
    <>
      {/* Mobile Topbar */}
      <div className="lg:hidden bg-white shadow-md px-6 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">Expense Tracker</h1>

        <button onClick={() => setOpen(!open)}>
          {open ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-2xl p-6 z-40 transform transition-transform duration-300
        
        ${open ? "translate-x-0" : "-translate-x-full"}

        lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="mb-12 mt-10 lg:mt-0">
          <h1 className="text-3xl font-extrabold text-blue-600">
            Expense Tracker
          </h1>

          <p className="text-gray-500 mt-2">Smart finance management</p>
        </div>

        {/* Menu */}
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-4 p-4 rounded-2xl text-lg font-semibold transition duration-300
              
              ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-blue-100"
              }`}
            >
              <span className="text-2xl">{item.icon}</span>

              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
