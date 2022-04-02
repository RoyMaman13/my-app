import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import SignUp from "./components/signup.component";
import Login from "./components/login.component";
import ChatScreen from "./components/chat.screen.component";
import { useState } from 'react';
import { data } from './data';

function App() {
  const [user, setUser] = useState('');
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <span className="navbar-brand">ChatSap</span>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path='/' element={<Login user={user} handleLogin={setUser} />} />
          <Route exact path="/sign-in" element={<Login user={user} handleLogin={setUser} />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/chat-screen" element={<ChatScreen />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
