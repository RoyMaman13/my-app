import React, { Component } from 'react'
import './ChatScreen.css'
import ChatListTemplate from './ChatListTemplate'
import ChatList from './ChatList'


const ChatScreen = (props) => {
    return (
        <div className='container outer inner-chat '>
            <div className='wrapper'>
                <div>
                    <h1>Chat List</h1>
                </div>
                <div>
                    <h1>Messege Screen</h1>
                </div>
            </div>
        </div>
    )
}


export default ChatScreen;
