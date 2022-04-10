import React from 'react'
import './LoginForm.css'
import { Link } from "react-router-dom"
import { useState } from 'react';
import { data } from './data';
import { useNavigate } from "react-router-dom";


const RegisterForm = () => {

    const nevigate = useNavigate();
    const [inUsername, setInUsername] = useState('');
    const [inPassword, setInPassword] = useState('');
    const [inNickname, setInNickname] = useState('');

    const handleUsername = (event) => {
        setInUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setInPassword(event.target.value);
    }

    const handleNickname = (event) => {
        setInNickname(event.target.value);
    }
    const HandleSubmit = (event) => {
        event.preventDefault();
        const found = data.find(({ username }) => username === inUsername);
        if (inUsername === '') {
            alert("The username field is empty");
            return;
        }
        if (inPassword.length < 4) {
            alert("The password must contain at least 4 charcters");
            return;
        }
        if (inNickname === '') {
            alert("The nickname field is empty");
            return;
        }

        if (found.username) {
            alert("The username is already in use");
            return;
        }
        nevigate("/ChatTry")
    };

    return (
        <form className='form-signin text-center vsc-initialized' onSubmit={HandleSubmit}>
            <img className="mb-4" src="logo512.png" alt="" width="72" height="57"></img>
            <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

            <div className="form-floating">
                <input type="email" className="form-control" onChange={handleUsername} value={inUsername}></input>
                <label htmlFor="floatingInput">Email Address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" onChange={handlePassword} value={inPassword}></input>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
                <input type="nickname" className="form-control" onChange={handleNickname} value={inNickname}></input>
                <label htmlFor="floatingNickname">choose a nickname</label>
            </div>

            <div className="checkbox mb-3">
                <label>
                    already registered ?
                    <span> <Link to="/">click here</Link> </span>
                    to log in
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick>
                Register
            </button>
        </form >
    )
}
export default RegisterForm