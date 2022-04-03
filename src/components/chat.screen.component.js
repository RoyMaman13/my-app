import React, { Component } from 'react'
import './chat.screen.css'


const ChatScreen = (props) => {
    return (
        <div className='container outer inner-chat '>
            <div className='sidebar'>
                <img src={URL.createObjectURL(props.user.pic)} />
                <button className='sticky-top'>chat !!!!</button>
            </div>
        </div>
    )
}


export default ChatScreen;
