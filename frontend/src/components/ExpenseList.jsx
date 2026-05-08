import API from "../services/api";

function ExpenseList({ expenses, fetchExpenses }) {
  const deleteExpense = async (id) => {
    await API.delete(`/expenses/${id}`);

    fetchExpenses();
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>

      {expenses.map((expense) => (
        <div key={expense._id} className="flex justify-between border-b py-2">
          <div>
            <p className="font-semibold">{expense.title}</p>
            <p className="text-sm text-gray-500">{expense.category}</p>
          </div>

          <div className="flex items-center gap-4">
            <p
              className={
                expense.type === "income" ? "text-green-600" : "text-red-600"
              }
            >
              ₹ {expense.amount}
            </p>

            <button
              onClick={() => deleteExpense(expense._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
