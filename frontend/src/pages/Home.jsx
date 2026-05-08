import { Link } from "react-router-dom";
import { FaWallet, FaChartPie, FaMoneyBillWave } from "react-icons/fa";

import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="lg:ml-72 pt-24 lg:pt-6 min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-6xl font-extrabold leading-tight text-gray-800">
              Manage Your
              <span className="text-blue-600"> Expenses </span>
              Smartly
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Track your income, expenses, savings, and analytics in one
              beautiful dashboard.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg transition duration-300"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="bg-white hover:bg-gray-100 border border-gray-300 px-8 py-3 rounded-xl shadow-lg transition duration-300"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-[350px] border border-white">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Monthly Overview</h2>

                <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  +12%
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-500">Income</p>

                  <h3 className="text-3xl font-bold text-green-600">₹45,000</h3>
                </div>

                <div>
                  <p className="text-gray-500">Expenses</p>

                  <h3 className="text-3xl font-bold text-red-500">₹18,000</h3>
                </div>

                <div>
                  <p className="text-gray-500">Savings</p>

                  <h3 className="text-3xl font-bold text-blue-600">₹27,000</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
            Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FaWallet className="text-3xl text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold mb-4">Track Expenses</h3>

              <p className="text-gray-600">
                Easily add and manage your daily transactions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FaChartPie className="text-3xl text-green-600" />
              </div>

              <h3 className="text-2xl font-bold mb-4">Analytics</h3>

              <p className="text-gray-600">
                View beautiful charts and spending insights.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FaMoneyBillWave className="text-3xl text-purple-600" />
              </div>

              <h3 className="text-2xl font-bold mb-4">Save Money</h3>

              <p className="text-gray-600">
                Monitor your balance and improve savings habits.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t py-6 mt-10">
          <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
            © 2026 Expense Tracker App | Built with React & MongoDB
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
