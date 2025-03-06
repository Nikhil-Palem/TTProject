import React from "react";
import "./ExpenseList.css"; // Import CSS file

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list-container">
      <h3>Expense List</h3>
      {expenses.length === 0 ? (
        <p className="no-expenses">No expenses yet.</p>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{expense.title}</td>
                <td>{expense.Quantity}</td>
                <td>{expense.amount*expense.Quantity}</td>
                <td>{new Date(expense.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExpenseList;