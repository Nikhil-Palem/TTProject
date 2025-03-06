import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
    const [message, setmessage] = useState("")
    const [formdata, setformdata] = useState(
        {
            username: "",
            email: "",
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
        const response = await fetch("http://localhost:8080/register",
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
            <h1>Registration page</h1>
            <form onSubmit={formsubmit}>
                <input onChange={submit} type="text" name="username" placeholder="enter username" />
                <input onChange={submit} type="email" name="email" placeholder="enter email" />
                <input onChange={submit} type="password" name="password" placeholder="enter password" />
                <button type="submit">register</button>
            </form>
            <p>Already Registered?</p><Link to="/login">Login</Link>
            <h1>{message}</h1>
        </div>
    )
}

export default SignUp