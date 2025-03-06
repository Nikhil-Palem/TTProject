import { useState, useEffect } from "react";

export default function SalaryUpdate() {
  const [salary, setSalary] = useState(0);
  const [newSalary, setNewSalary] = useState("");

  useEffect(() => {
    const savedSalary = localStorage.getItem("salary");
    if (savedSalary) setSalary(parseFloat(savedSalary));
  }, []);

  const updateSalary = () => {
    if (!newSalary || newSalary < 0) {
      alert("Enter a valid salary.");
      return;
    }
    localStorage.setItem("salary", newSalary);
    setSalary(parseFloat(newSalary));
    setNewSalary("");
    alert("Salary updated!");
  };

  return (
    <div className="center">
      <div className="box">
        <h2>Update Salary</h2>
        <p>Current: ${salary}</p>
        <input
          type="number"
          value={newSalary}
          onChange={(e) => setNewSalary(e.target.value)}
          className="input"
          placeholder="Enter salary"
        />
        <button onClick={updateSalary} className="btn">Update</button>
      </div>
    </div>
  );
}