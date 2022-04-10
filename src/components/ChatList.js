import React from 'react'
import './ChatList.css'
import ChatListItemsTemp from './ChatListItemsTemp'
import ChatListItems from './ChatListItems'

const ChatList = (props) => {
    return (
        <div className='chat-list'>
            <div className='chatlist-header'>
                <img src={props.user.pic} alt="#" />
                {props.user.nickname}
                <button><img src="https://cdn-icons.flaticon.com/png/512/2076/premium/2076218.png?token=exp=1649585401~hmac=9644db6aef7f660f9b0e69e9f3353a80" alt="#" /></button>

                <ChatListItems chats={props.user.chats} />
            </div>
        </div>
    )
}

export default ChatList