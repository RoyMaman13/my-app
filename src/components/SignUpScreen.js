import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
    const nevigate = useNavigate();
    let inUsername = null;
    let inPassword = null;
    let inVerifyPassword = null;
    let inNickname = null;
    let inPicture = null;

    const pictureHandler = (event) => {
        inPicture = event.target.files[0];
    }

    const isUsernameValide = (inUsername) => {
        const exist = props.updateData.find(({ username }) => username === inUsername);
        if (exist !== undefined) { return false; }
        else { return true; }
    }

    const isNicknameValid = (inNickname) => {
        if (inNickname === "" || inNickname === null) { return false; }
        else { return true; }
    }
    const isPasswordValide = (inPassword) => { }
    const isPasswordEquals = (inPassword, verifyPassword) => { }

    const submitHendler = (event) => {
        event.preventDefault();
        //verify uniqe username.
        inUsername = document.getElementById("email").value;
        if (!isUsernameValide(inUsername)) {
            alert("Invalide Username !");
            return;
        }
        //verify not empty.
        inNickname = document.getElementById("nickname").value;
        if (!isNicknameValid(inNickname)) {
            alert("Invalide Nickname !");
            return;
        }
        //verify password==verifyPassword.
        inPassword = document.getElementById("password").value;
        inVerifyPassword = document.getElementById("verifyPassword").value;
        //if empty, set defualt.
        // inPicture = document.getElementById("picture");

        props.updateData.push({
            username: inUsername,
            password: inPassword,
            nickname: inNickname,
            pic: "",
            chats: []
        })
        props.setConnectedUsername(props.updateData.find(({ username }) => username === inUsername).username);
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
                        <input id="picture" type="file" className="form-control" placeholder="Picture" onChange={pictureHandler} />
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