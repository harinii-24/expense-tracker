import { useEffect, useState } from "react";

function ExpenseForm({ onAddExpense, onUpdateExpense, editingExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
      setDate(editingExpense.date);
    }
  }, [editingExpense]);

  const submitHandler = (e) => {
    e.preventDefault();

    const expense = {
      id: editingExpense ? editingExpense.id : Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
    };

    editingExpense ? onUpdateExpense(expense) : onAddExpense(expense);

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler} className="card p-3 mb-4">
      <input
        className="form-control mb-2"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <select
        className="form-select mb-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Rent</option>
        <option>Bills</option>
        <option>Others</option>
      </select>

      <input
        type="date"
        className="form-control mb-2"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <button className="btn btn-primary">
        {editingExpense ? "Update" : "Add"} Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
