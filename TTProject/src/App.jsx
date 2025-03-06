import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AddExpense from "./components/AddExpense";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };
  const show=location.pathname.startsWith('/home')||location.pathname.startsWith('/register')||location.pathname.startsWith('/login')?true:false;
  return (
    <Router>
      {!show && <Navbar />}
      <Routes>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard expenses={expenses} />} />
        <Route path="/add-expense" element={<AddExpense addExpense={addExpense} />} />
      </Routes>
    </Router>
  );
}

export default App;
