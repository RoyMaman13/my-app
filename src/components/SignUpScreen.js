import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";


const SignUp = (props) => {
    const nevigate = useNavigate();
    let inUsername = null;
    let inPassword = null;
    let inVerifyPassword = null;
    let inNickname = null;
    let inPicture = null;

    const pictureHandler = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            inPicture = URL.createObjectURL(img);
        }
    }

    const isUsernameValide = (inUsername) => {
        const exist = props.updateData.find(({ username }) => username === inUsername);
        if (exist !== undefined) { return false; }
        else { return true; }
    }

    const isPasswordValide = (inPassword) => {
        if (inPassword === "" || inPassword === null) { return false; }
        else { return true; }
    }
    const isPasswordEquals = (inPassword, verifyPassword) => {
        return (inPassword === verifyPassword) ? true : false;
    }

    const isNicknameValid = (inNickname) => {
        if (inNickname === "" || inNickname === null) { return false; }
        else { return true; }
    }

    const isPictureValid = () => {
        return (inPicture === null) ? false : true;
    }


    const submitHendler = (event) => {
        event.preventDefault();
        //Username validation.
        inUsername = document.getElementById("email").value;
        if (!isUsernameValide(inUsername)) {
            alert("Invalide Username !");
            return;
        }
        //Password validation.
        inPassword = document.getElementById("password").value;
        if (!isPasswordValide(inPassword)) {
            alert("Invalid Password !");
            return;
        }
        //verify password==verifyPassword.
        inVerifyPassword = document.getElementById("verifyPassword").value;
        if (!isPasswordEquals(inPassword, inVerifyPassword)) {
            alert("Passwords not equals !");
            return;
        }
        //Nickname validation.
        inNickname = document.getElementById("nickname").value;
        if (!isNicknameValid(inNickname)) {
            alert("Invalide Nickname !");
            return;
        }
        //Picture validation.
        if (!isPictureValid()) {
            alert("Invalid Picture !")
            return;
        }

        props.updateData.push({
            username: inUsername,
            password: inPassword,
            nickname: inNickname,
            pic: inPicture,
            chats: []
        })
        props.setConnectedUsername(props.updateData.find(({ username }) => username === inUsername).username);
        nevigate("/chat-screen")
    }

    return (
        <div className="outer">
            <div className="inner">
                <Form onSubmit={submitHendler}>
                    <h3>Sign Up</h3>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>@</InputGroup.Text>
                        <FormControl
                            id="email"
                            type="email"
                            placeholder="Username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            id="password"
                            type="password"
                            placeholder="Enter password" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl
                            id="verifyPassword"
                            type="password"
                            placeholder="Verify password" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl
                            id="nickname"
                            type="text"
                            placeholder="Nickname" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text>Picture:</InputGroup.Text>
                        <FormControl
                            id="picture"
                            type="file"
                            accept="image/*"
                            onChange={pictureHandler} />

                    </InputGroup>

                    <Button type="submit" className="btn btn-dark btn-lg btn-block">Register</Button>
                </Form>
            </div>
        </div>
    );
}

export default SignUp;