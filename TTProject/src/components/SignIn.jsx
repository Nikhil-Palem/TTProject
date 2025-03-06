import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SignIn() {
    const [message, setmessage] = useState("")
    const [formdata, setformdata] = useState(
        {
            username: "",
            password: ""
        }
    )
    const submit = (e) => {

        setformdata(() => (
            {
                ...formdata, [e.target.name]: e.target.value
            }
        ));
    }

    const formsubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formdata)
            }
        )
        const res = await response.text();
        setmessage(res);
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={formsubmit}>
                <input onChange={submit} type="text" name="username" placeholder="enter username" />
                <input onChange={submit} type="password" name="password" placeholder="enter password" />
                <button type="submit">login</button>
            </form>
            <p>not a member?</p><Link to="/register">Register</Link>
            <h1>{message}</h1>
        </div>
    )
}

export default SignIn