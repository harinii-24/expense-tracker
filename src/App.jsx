import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseChart from "./components/ExpenseChart";
import ExpenseSummary from "./components/ExpenseSummary";
import BudgetAlert from "./components/BudgetAlert";

function App() {
  // Load expenses from localStorage
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [editingExpense, setEditingExpense] = useState(null);
  const [search, setSearch] = useState("");

  // Save expenses to localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Add expense
  const addExpenseHandler = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  // Update expense
  const updateExpenseHandler = (updatedExpense) => {
    setExpenses((prev) =>
      prev.map((e) =>
        e.id === updatedExpense.id ? updatedExpense : e
      )
    );
    setEditingExpense(null);
  };

  // Delete expense
  const deleteExpenseHandler = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  // Search filter
  const filteredExpenses = expenses.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Expense Tracker</h1>

      {/* Add / Edit Expense */}
      <ExpenseForm
        onAddExpense={addExpenseHandler}
        onUpdateExpense={updateExpenseHandler}
        editingExpense={editingExpense}
      />

      {/* Summary Cards */}
      <ExpenseSummary expenses={expenses} />

      {/* Budget Alert */}
      <BudgetAlert expenses={expenses} />

      {/* Donut Pie Chart */}
      <ExpenseChart expenses={expenses} />

      {/* Search */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search expense..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Expense Table */}
      <ExpenseTable
        expenses={filteredExpenses}
        onEditExpense={setEditingExpense}
        onDeleteExpense={deleteExpenseHandler}
      />
    </div>
  );
}

export default App;
