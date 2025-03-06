import React from "react";

function BudgetSummary({ expenses }) {
  const totalExpenses = expenses.reduce((total, exp) => total + exp.amount, 0);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Budget Summary</h3>
      <p>Total Expenses: ₹{totalExpenses}</p>
    </div>
  );
}

export default BudgetSummary;
