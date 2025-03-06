import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  return (
    <div>
      <h3>Expense List</h3>
      {expenses.length === 0 ? <p>No expenses yet.</p> : (
        expenses.map((expense, index) => <ExpenseItem key={index} expense={expense} />)
      )}
    </div>
  );
}

export default ExpenseList;
