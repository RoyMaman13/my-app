import React, { Component } from 'react'
import './ChatScreen.css'
import ChatListTemplate from './ChatListTemplate'
import ChatList from './ChatList'
import ChatContent from "./ChatContent";


const ChatScreen = (props) => {
    return (
        <div className='container outer inner-chat '>
            <div className='wrapper'>
                <div>
                    <ChatListTemplate />
                </div>
                <div>
                    <ChatContent />
                </div>
            </div>
        </div>
    )
}


export default ChatScreen;
