import { useEffect, useState } from "react";

function BudgetAlert({ expenses }) {
  const [budget, setBudget] = useState(() => {
    const saved = localStorage.getItem("budget");
    return saved ? Number(saved) : "";
  });

  const totalExpense = expenses.reduce(
    (sum, e) => sum + e.amount,
    0
  );

  useEffect(() => {
    if (budget !== "") {
      localStorage.setItem("budget", budget);
    }
  }, [budget]);

  return (
    <div className="card mb-4 p-3">
      <h5>Monthly Budget</h5>

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Enter budget amount"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      {budget && totalExpense > budget && (
        <div className="alert alert-danger mt-2">
          ⚠ Budget exceeded!  
          <br />
          Spent: ₹ {totalExpense} / Budget: ₹ {budget}
        </div>
      )}

      {budget && totalExpense <= budget && (
        <div className="alert alert-success mt-2">
          ✅ Within budget  
          <br />
          Spent: ₹ {totalExpense} / Budget: ₹ {budget}
        </div>
      )}
    </div>
  );
}

export default BudgetAlert;
