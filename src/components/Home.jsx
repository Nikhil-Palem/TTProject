import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS file

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Personal Expenses Tracker</h1>
      <div className="home-links">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Home;
