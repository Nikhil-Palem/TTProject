import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Menu, MenuItem } from "@mui/material";
import "./Navbar.css";
import { UserContext } from "../App.jsx";
import Logo from '../assets/TTLogo.png';
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [active, setactive] = useState("Dashboard");
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("User logged out");
    handleClose();
    localStorage.removeItem('username');
    navigate("/");
  };
  const { username } = useContext(UserContext);
  console.log(username);

  const handleActive = (value) => {
    if (value === active) {
      return;
    }
    setactive(value);
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="Budget Tracker" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/dashboard" onClick={() => handleActive('Dashboard')} className={`${active === 'Dashboard' ? 'active' : ''}`}>Dashboard</Link>
        <Link to="/add-expense" onClick={() => handleActive('addExpense')} className={`${active === 'addExpense' ? 'active' : ''}`}>Add Expense</Link>
        <Link to='/expenselist' onClick={() => handleActive('expenseList')} className={`${active === 'expenseList' ? 'active' : ''}`}>Expense List</Link>
      </div>
      <div className="navbar-avatar">
        <Avatar onClick={handleClick} style={{ cursor: "pointer" }}>{username.charAt(0).toUpperCase()}</Avatar>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleClose}>User Name : {username}</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </nav>
  );
}

export default Navbar;
