import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Menu, MenuItem } from "@mui/material";
import "./Navbar.css";
import { UserContext } from "../App.jsx";
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
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

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Budget Tracker</Link>
      </div>
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add-expense">Add Expense</Link>
        <Link to='/expenselist'>Expense List</Link>
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
