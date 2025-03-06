import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import "./SignUp.css"; // Import CSS file

function SignUp() {
    const [message, setMessage] = useState("");
    const [formdata, setFormdata] = useState({
        username: "",
        email: "",
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
        const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formdata)
        });

        if (response.status === 201) {
            const message = await response.json();
            setMessage(message);
            localStorage.setItem('username', message.username);
            setUsername(message.username);
            console.log("success", message);
            navigate('/dashboard');
        } else {
            console.error('An unexpected error occurred.');
        }
    };

    return (
        <div className="signup-container">
            <h1>Registration Page</h1>
            <form className="signup-form" onSubmit={formsubmit}>
                <input onChange={submit} type="text" name="username" placeholder="Enter username" required />
                <input onChange={submit} type="email" name="email" placeholder="Enter email" required />
                <input onChange={submit} type="password" name="password" placeholder="Enter password" required />
                <button type="submit">Register</button>
            </form>
            <div className="signup-links">
                <p>Already Registered?</p> 
                <Link to="/login">Login</Link>
            </div>
            <h1 className="signup-message">{message}</h1>
        </div>
    );
}

export default SignUp;