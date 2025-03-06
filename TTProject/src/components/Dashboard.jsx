import React from "react";
import BudgetSummary from "./BudgetSummary";
import ExpenseList from "./ExpenseList";

function Dashboard({ expenses }) {
  return (
    <div>
      <h2>Budget Tracker</h2>
      <BudgetSummary expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default Dashboard;
