import React from "react";
import "./BudgetSummary.css"; // Import CSS file

function BudgetSummary({ expenses }) {
  const totalExpenses = expenses.reduce((total, exp) => total + exp.amount, 0);

  return (
    <div className="budget-summary-container">
      <h3>Budget Summary</h3>
      <p>Total Expenses: ₹{totalExpenses}</p>
    </div>
  );
}

export default BudgetSummary;
