import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
];

function ExpenseChart({ expenses }) {
  if (expenses.length === 0) return null;

  const data = Object.values(
    expenses.reduce((acc, curr) => {
      acc[curr.category] = acc[curr.category] || {
        name: curr.category,
        amount: 0,
      };
      acc[curr.category].amount += curr.amount;
      return acc;
    }, {})
  );

  const total = data.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="text-center">Expense by Category</h5>

        <div style={{ width: "100%", height: 300, position: "relative" }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="amount"
                nameKey="name"
                innerRadius={70}
                outerRadius={120}
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
            }}
          >
            ₹ {total}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseChart;
