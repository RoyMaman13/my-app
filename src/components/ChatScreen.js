import React, { Component } from 'react'
import './ChatScreen.css'
import ChatList from './ChatList'
import MessageScreen from './MessageScreen'
import { useState } from 'react'
import Conversation from './Conversation'


const ChatScreen = (props) => {

    const [activeChatUsername, setActiveChatUsername] = useState(null);
    return (
        <div className='container outer inner-chat '>
            <div className='wrapper'>
                <div>
                    <ChatList user={props.user} chats={props.user.chats} updateData={props.updateData} setActiveChatUsername={setActiveChatUsername} />
                </div>

                {/* {(activeChatUsername === null) ? "" : <MessageScreen chats={props.user.chats.find(({ username }) => activeChatUsername === username)} user={props.user} />} */}
                {(activeChatUsername === null) ? "" : <Conversation />}

            </div >
        </div >
    )
}


export default ChatScreen;
