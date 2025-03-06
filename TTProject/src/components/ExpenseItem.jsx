import React from "react";

function ExpenseItem({ expense }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <p><strong>{expense.title}</strong></p>
      <p>Amount: ₹{expense.amount}</p>
      <p>Date: {expense.date}</p>
    </div>
  );
}

export default ExpenseItem;
