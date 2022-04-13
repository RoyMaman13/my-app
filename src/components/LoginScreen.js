import React, { Component } from "react";
import { useNavigate } from "react-router-dom";



const Login = (props) => {
    const nevigate = useNavigate();

    let inputUsername = null;
    let inputPassword = null;

    const submitHendler = (event) => {
        event.preventDefault();
        inputUsername = document.getElementById("email").value;
        inputPassword = document.getElementById("password").value;
        const found = props.updateData.find(({ username, password }) => username === inputUsername && password === inputPassword);
        if (found !== undefined) {
            props.setConnectedUsername(found.username);
            nevigate("/chat-screen")
        }
    }

    return (
        <div className="outer">
            <div className="inner">
                <form onSubmit={submitHendler}>
                    <h3>Log in</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" id="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                </form>
            </div>
        </div >
    );
}

export default Login
