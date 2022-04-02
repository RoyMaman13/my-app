import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
    const nevigate = useNavigate();

    let inUsername = null;
    let inPassword = null;
    let inVerifyPassword = null;
    let inNickname = null;
    let inPicture = null;

    const submitHendler = (event) => {
        event.preventDefault();
        inUsername = document.getElementById("email").value;
        inPassword = document.getElementById("password").value;
        inVerifyPassword = document.getElementById("verifyPassword").value;
        inNickname = document.getElementById("nickname").value;
        inPicture = document.getElementById("picture").value;

        let data = props.updateData;
        data.push({
            username: inUsername,
            password: inPassword,
            nickname: inNickname,
            pic: inPicture
        })
        props.setData(data);
        props.setUser(props.updateData.find(({ username }) => username === inUsername));
        nevigate("/chat-screen")
    }

    return (
        <div className="outer">
            <div className="inner">
                <form onSubmit={submitHendler}>
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input id="email" type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Nickname</label>
                        <input id="nickname" type="text" className="form-control" placeholder="Nickname" />
                    </div>

                    <div className="form-group">
                        <label>Picture</label>
                        <input id="picture" type="file" className="form-control" placeholder="Picture" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input id="password" type="password" className="form-control" placeholder="Enter password" />
                        <input id="verifyPassword" type="password" className="form-control" placeholder="Verify password" />
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;