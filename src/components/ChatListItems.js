import React from 'react'
import "./ChatListTemplate.css";

const ChatListItems = (props) => {

    return (
        <div className='chatlist_items'>
            {props.chats.map(({ nickname, pic, messegeHistory }) => {
                let lastMessegeIndex = messegeHistory.length - 1;
                return (
                    <button onClick={() => alert(nickname)}>
                        <div className="chatlist_item">
                            <img src={pic} alt="#" />
                            <span className='chat_info'>
                                <span className='chat_meta' >
                                    <span className='nick'>{nickname}</span>
                                    <span className='time'> {messegeHistory[lastMessegeIndex].time}</span>
                                </span>
                                <span className='chat_msg'>
                                    {messegeHistory[lastMessegeIndex].messege}
                                </span>
                            </span>
                        </div>
                    </button>
                );
            })}
        </div>
    )
}

export default ChatListItems