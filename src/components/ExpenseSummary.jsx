function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const highest =
    expenses.length > 0
      ? Math.max(...expenses.map((e) => e.amount))
      : 0;

  return (
    <div className="row mb-4">
      <div className="col-md-4">
        <div className="card text-center p-3">
          <h6>Total Spent</h6>
          <h4>₹ {total}</h4>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-center p-3">
          <h6>Highest Expense</h6>
          <h4>₹ {highest}</h4>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-center p-3">
          <h6>Transactions</h6>
          <h4>{expenses.length}</h4>
        </div>
      </div>
    </div>
  );
}

export default ExpenseSummary;
