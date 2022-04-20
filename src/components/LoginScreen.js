import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";


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
        else {
            alert("Invalid username or password !")
        }
    }

    return (
        <div className="outer">
            <div className="inner">
                <h3>Log in</h3>
                <Form onSubmit={submitHendler}>
                    <InputGroup className="mb-4" >
                        <InputGroup.Text >@</InputGroup.Text>
                        <FormControl
                            id="email"
                            placeholder="Username"
                            type="email" />
                    </InputGroup>
                    <InputGroup className="mb-4" >
                        <FormControl
                            id="password"
                            placeholder="Password"
                            type="password" />
                    </InputGroup>
                    <Button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</Button>
                </Form>
            </div>
        </div >
    );
}

export default Login
