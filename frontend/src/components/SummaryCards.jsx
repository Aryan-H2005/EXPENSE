function SummaryCards({ expenses }) {
  const income = expenses
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = expenses
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-green-500 text-white p-6 rounded shadow">
        <h2 className="text-xl">Income</h2>
        <p className="text-2xl font-bold">₹ {income}</p>
      </div>

      <div className="bg-red-500 text-white p-6 rounded shadow">
        <h2 className="text-xl">Expense</h2>
        <p className="text-2xl font-bold">₹ {expense}</p>
      </div>

      <div className="bg-blue-500 text-white p-6 rounded shadow">
        <h2 className="text-xl">Balance</h2>
        <p className="text-2xl font-bold">₹ {balance}</p>
      </div>
    </div>
  );
}

export default SummaryCards;
