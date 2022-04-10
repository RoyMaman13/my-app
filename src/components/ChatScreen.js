import React, { Component } from 'react'
import './ChatScreen.css'
import ChatListTemplate from './ChatListTemplate'
import ChatList from './ChatList'
import MessageScreen from './MessageScreen'


const ChatScreen = (props) => {
    return (
        <div className='container outer inner-chat '>
            <div className='wrapper'>
                <div>
                    <ChatList user={props.user} />
                </div>
                <div>
                    <MessageScreen user={props.user} setData={props.setData} />
                </div>
            </div >
        </div >
    )
}


export default ChatScreen;
