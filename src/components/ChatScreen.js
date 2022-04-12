import React, { Component } from 'react'
import './ChatScreen.css'
import ChatListTemplate from './ChatListTemplate'
import ChatList from './ChatList'
import MessageScreen from './MessageScreen'
import { useState } from 'react'


const ChatScreen = (props) => {
    const [chats, setChats] = useState(props.user.chats);

    return (
        <div className='container outer inner-chat '>
            <div className='wrapper'>
                <div>
                    <ChatList user={props.user} chats={chats} setChats={() => setChats} />
                </div>
                <div>
                    <MessageScreen user={props.user} setData={props.setData} />
                </div>
            </div >
        </div >
    )
}


export default ChatScreen;
