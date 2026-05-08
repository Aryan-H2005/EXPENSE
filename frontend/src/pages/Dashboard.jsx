import { useEffect, useState } from "react";

import { FaWallet, FaArrowDown, FaArrowUp } from "react-icons/fa";

import Navbar from "../components/Navbar";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

import API from "../services/api";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await API.get("/expenses");

      setExpenses(res.data);

      localStorage.setItem("expenses", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // Income
  const income = expenses
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  // Expense
  const expense = expenses
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  // Balance
  const balance = income - expense;

  return (
    <>
      <Navbar />

      <div className="lg:ml-72 pt-24 lg:pt-6 min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6">
        {/* Heading */}
        <div className="max-w-7xl mx-auto mb-10">
          <h1 className="text-5xl font-extrabold text-gray-800">Dashboard</h1>

          <p className="text-gray-600 mt-2 text-lg">
            Manage your income and expenses smartly.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Balance */}
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white hover:scale-105 transition duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-lg">Total Balance</p>

                <h2 className="text-4xl font-bold mt-2 text-blue-600">
                  ₹ {balance}
                </h2>
              </div>

              <div className="bg-blue-100 p-5 rounded-2xl">
                <FaWallet className="text-3xl text-blue-600" />
              </div>
            </div>
          </div>

          {/* Income */}
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white hover:scale-105 transition duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-lg">Total Income</p>

                <h2 className="text-4xl font-bold mt-2 text-green-600">
                  ₹ {income}
                </h2>
              </div>

              <div className="bg-green-100 p-5 rounded-2xl">
                <FaArrowDown className="text-3xl text-green-600" />
              </div>
            </div>
          </div>

          {/* Expense */}
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white hover:scale-105 transition duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-lg">Total Expense</p>

                <h2 className="text-4xl font-bold mt-2 text-red-600">
                  ₹ {expense}
                </h2>
              </div>

              <div className="bg-red-100 p-5 rounded-2xl">
                <FaArrowUp className="text-3xl text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side Form */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white">
              <ExpenseForm fetchExpenses={fetchExpenses} />
            </div>
          </div>

          {/* Right Side Transactions */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  Recent Transactions
                </h2>

                <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                  {expenses.length} Records
                </div>
              </div>

              <ExpenseList expenses={expenses} fetchExpenses={fetchExpenses} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
