import { useState } from "react";
import API from "../services/api";

function ExpenseForm({ fetchExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/expenses", expense);

    fetchExpenses();

    setExpense({
      title: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Add Transaction</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={expense.title}
        onChange={handleChange}
        className="w-full border p-2 mb-4"
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={expense.amount}
        onChange={handleChange}
        className="w-full border p-2 mb-4"
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={expense.category}
        onChange={handleChange}
        className="w-full border p-2 mb-4"
      />

      <select
        name="type"
        value={expense.type}
        onChange={handleChange}
        className="w-full border p-2 mb-4"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}

export default ExpenseForm;
