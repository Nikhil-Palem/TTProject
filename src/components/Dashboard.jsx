import React from "react";
import BudgetSummary from "./BudgetSummary";
import SalaryUpdate from "./Salary";
import { useContext } from "react";
import './Dashboard.css';
import { UserContext } from "../App";
function Dashboard({ expenses }) {
  const totalExpenses = expenses.reduce((total, exp) => total + (exp.amount*exp.Quantity), 0);
  const {salary} = useContext(UserContext);
  return (

    <div>
      <SalaryUpdate />
      <div className="bottom">
        <div className="total-income">
          <h3>Total Income</h3>
          <p>₹ {salary}</p>
        </div>
        <BudgetSummary expenses={expenses} />
        <div className="balance">
          <h3>Balance</h3>
          <p>₹ {salary-totalExpenses}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
