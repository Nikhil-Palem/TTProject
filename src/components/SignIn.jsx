import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import "./SignIn.css"; // Import CSS file

function SignIn() {
    const [message, setMessage] = useState("");
    const [formdata, setFormdata] = useState({
        username: "",
        password: ""
    });

    const { setUsername } = useContext(UserContext);
    const navigate = useNavigate();

    const submit = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };

    const formsubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formdata)
        });

        if (response.status === 200) {
            const message = await response.json();
            setMessage(message);
            localStorage.setItem('username', message.username);
            setUsername(message.username);
            console.log("success", message);
            navigate('/dashboard');
        } else if (response.status === 401) {
            const message = await response.json();
            setMessage(message);
            console.log("failed", message);
            alert('Login failed. Please check your username and password.');
        } else {
            setMessage("An unexpected error occurred");
        }
    };

    return (
        <div className="signin-container">
            <h1>Login Page</h1>
            <form className="signin-form" onSubmit={formsubmit}>
                <input onChange={submit} type="text" name="username" placeholder="Enter username" required />
                <input onChange={submit} type="password" name="password" placeholder="Enter password" required />
                <button type="submit">Login</button>
            </form>
            <div className="signin-links">
                <p>Not a member?</p> 
                <Link to="/register">Register</Link>
            </div>
            <h1 className="signin-message">{message}</h1>
        </div>
    );
}

export default SignIn;