import React from 'react'

const HeaderBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <img src="logo512.png" alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
                    ChatSap
                </span>
            </div>
        </nav>
    )
}

export default HeaderBar