import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddExpense.css"; // Import CSS file

function AddExpense({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ title, amount: parseFloat(amount), date: new Date().toLocaleDateString() });
    navigate("/dashboard");
  };

  return (
    <div className="add-expense-container">
      <h2>Add Expense</h2>
      <form className="add-expense-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Expense Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          required 
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;
