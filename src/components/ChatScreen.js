import React, { Component } from 'react'
import './ChatScreen.css'
import ChatListTemplate from './ChatListTemplate'
import ChatList from './ChatList'
<<<<<<< HEAD
import ChatContent from "./ChatContent";
=======
import MessageScreen from './MessageScreen'
>>>>>>> master


const ChatScreen = (props) => {
    return (
        <div className='container outer inner-chat '>
            <div className='wrapper'>
                <div>
<<<<<<< HEAD
                    <ChatListTemplate />
                </div>
                <div>
                    <ChatContent />
=======
                    <ChatList user={props.user} />
                </div>
                <div>
                    {/* <MessageScreen user={props.user} /> */}
>>>>>>> master
                </div>
            </div>
        </div>
    )
}


export default ChatScreen;
