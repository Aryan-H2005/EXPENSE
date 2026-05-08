import { useEffect, useState } from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

import Navbar from "../components/Navbar";
import API from "../services/api";

function Analytics() {
  const [expenses, setExpenses] = useState([]);

  // Fetch data from MongoDB
  const fetchExpenses = async () => {
    try {
      const res = await API.get("/expenses");

      setExpenses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // Income Transactions
  const incomeData = expenses.filter((item) => item.type === "income");

  // Expense Transactions
  const expenseData = expenses.filter((item) => item.type === "expense");

  // Dynamic Colors
  const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#EC4899",
    "#14B8A6",
    "#F97316",
    "#6366F1",
    "#84CC16",
  ];

  // Category Wise Data
  const categoryData = [];

  expenseData.forEach((item) => {
    const existing = categoryData.find((cat) => cat.name === item.category);

    if (existing) {
      existing.value += Number(item.amount);
    } else {
      categoryData.push({
        name: item.category,
        value: Number(item.amount),
      });
    }
  });

  return (
    <>
      <Navbar />

      <div className="lg:ml-72 pt-24 lg:pt-6 min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6">
        {/* Heading */}
        <div className="max-w-7xl mx-auto mb-10">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Analytics Dashboard
          </h1>

          <p className="text-gray-600 mt-2 text-lg">
            Visualize your income and expenses.
          </p>
        </div>

        {/* Income Chart */}
        <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl mb-10">
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Income Analytics
          </h2>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={incomeData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="title" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar dataKey="amount" fill="#22c55e" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Expense Chart */}
        <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl mb-10">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Expense Analytics
          </h2>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={expenseData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="title" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar dataKey="amount" fill="#ef4444" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Pie Chart */}
        <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Category Wise Expenses
          </h2>

          <ResponsiveContainer width="100%" height={450}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={150}
                dataKey="value"
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          {/* Legends */}
          <div className="flex flex-wrap gap-6 justify-center mt-8">
            {categoryData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: COLORS[index % COLORS.length],
                  }}
                ></div>

                <p className="font-semibold text-gray-700">
                  {item.name} - ₹{item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
