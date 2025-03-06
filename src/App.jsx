import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AddExpense from "./components/AddExpense";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import "./App.css";

export const UserContext = createContext();

function App() {
  const uName = localStorage.getItem('username');
  const [expenses, setExpenses] = useState([]);
  const [username, setUsername] = useState(uName || "");

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Router>
        <AppContent addExpense={addExpense} expenses={expenses} />
      </Router>
    </UserContext.Provider>
  );
}

function AppContent({ addExpense, expenses }) {
  const location = useLocation();
  const show = location.pathname === '/' || location.pathname === '/register' || location.pathname === '/login';

  return (
    <div className="app-container">
      {!show && <Navbar />}
      <div className="routes-container">
        <Routes>
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard expenses={expenses} />} />
          <Route path="/add-expense" element={<AddExpense addExpense={addExpense} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;