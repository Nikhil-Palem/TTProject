import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <Link to="/dashboard" style={{ marginRight: "15px", color: "#fff" }}>Dashboard</Link>
      <Link to="/add-expense" style={{ color: "#fff" }}>Add Expense</Link>
    </nav>
  );
}

export default Navbar;
