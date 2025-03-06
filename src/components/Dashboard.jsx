import React from "react";
import BudgetSummary from "./BudgetSummary";
import SalaryUpdate from "./Salary";
function Dashboard({ expenses }) {
  return (
    <div>
      <SalaryUpdate/>
      <BudgetSummary expenses={expenses} />
    </div>
  );
}

export default Dashboard;
