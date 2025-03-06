import React from "react";
import "./ExpenseItem.css"; // Import CSS file

function ExpenseItem({ expense }) {
  return (
    <div className="expense-item">
      <p className="expense-title">{expense.title}</p>
      <p className="expense-details">Amount: ₹{expense.amount}</p>
      <p className="expense-details">Date: {expense.date}</p>
    </div>
  );
}

export default ExpenseItem;
