import React from 'react';
import './LoginForm.css';
import { data } from './data';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();

    const [inUsername, setInUsername] = useState('');
    const [inPassword, setInPassword] = useState('');

    const handleUsername = (event) => {
        setInUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setInPassword(event.target.value);
    }

    const HandleSubmit = (event) => {
        event.preventDefault();
        const found = data.find(({ username, password }) => username === inUsername && password === inPassword);
        if (found.username) {
            navigate("/ChatTry");
        }
    };

    return (
        <form className='form-signin text-center vsc-initialized' onSubmit={HandleSubmit}>
            <img className="mb-4" src="logo512.png" alt="" width="72" height="57"></img>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
                <input type="email" className="form-control" onChange={handleUsername} value={inUsername}></input>
                <label htmlFor="floatingInput">Email Address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" onChange={handlePassword} value={inPassword}></input>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div>
                not registed ?
                <span><Link to='/registerForm'> click here</Link> </span>
                to regiser
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
            </button>
        </form >
    )
}

export default LoginForm