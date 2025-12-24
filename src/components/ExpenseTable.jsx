function ExpenseTable({ expenses, onEditExpense, onDeleteExpense }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((e) => (
          <tr key={e.id}>
            <td>{e.title}</td>
            <td>₹ {e.amount}</td>
            <td>{e.category}</td>
            <td>{e.date}</td>
            <td>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => onEditExpense(e)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDeleteExpense(e.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
