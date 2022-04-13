import React, { Component } from 'react'
import './ChatScreen.css'
import ChatList from './ChatList'
import MessageScreen from './MessageScreen'
import { useState } from 'react'


const ChatScreen = (props) => {
    return (
        <div className='container outer inner-chat '>
            <div className='wrapper'>
                <div>
                    <ChatList user={props.user} chats={props.user.chats} updateData={props.updateData} />
                </div>
                <div>
                    {/* <MessageScreen user={props.user} /> */}
                </div>
            </div>
        </div>
    )
}


export default ChatScreen;
