import React from 'react'
import './LoginForm.css'
import { Link } from "react-router-dom"


const registerForm = () => {
    return (
        <body className="text-center vsc-initialized">
            <form className='form-signin text-center vsc-initialized'>
                <img className="mb-4" src="logo512.png" alt="" width="72" height="57"></img>
                <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                    <label htmlFor="floatingInput">Email Address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input type="nickname" className="form-control" id="floatingNickname" placeholder="nickname"></input>
                    <label htmlFor="floatingPassword">Nickname</label>
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
        </body >
    )
}

export default registerForm