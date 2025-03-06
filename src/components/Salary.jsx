import { useState, useEffect, useContext } from "react";
import './Salary.css'
import { UserContext } from "../App";
export default function SalaryUpdate() {

  useEffect(() => {
    const savedSalary = localStorage.getItem("salary");
    if (savedSalary) setSalary(parseFloat(savedSalary));
  }, []);
  const { salary, setSalary, newSalary, setNewSalary } = useContext(UserContext);
  const updateSalary = () => {
    if (!newSalary || newSalary < 0) {
      alert("Enter a valid salary.");
      return;
    }
    localStorage.setItem("salary", newSalary);
    setSalary(parseFloat(newSalary));
    setNewSalary("");
  };

  return (
    <div className="center">
      <div className="box">
        <h2>Enter Salary</h2>
        <input
          type="number"
          value={newSalary}
          onChange={(e) => setNewSalary(e.target.value)}
          className="input"
          placeholder="Enter salary"
        />
        <button onClick={updateSalary} className="btn">Submit</button>
      </div>
    </div>
  );
}