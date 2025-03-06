import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css"; // Import CSS file

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list-container">
      <h3>Expense List</h3>
      {expenses.length === 0 ? (
        <p className="no-expenses">No expenses yet.</p>
      ) : (
        expenses.map((expense, index) => (
          <ExpenseItem key={index} expense={expense} />
        ))
      )}
    </div>
  );
}

export default ExpenseList;
