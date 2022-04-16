import React from 'react'

const ChatListItems = (props) => {

    return (
        <div className='chatlist_items'>
            {props.chats.map(({ username, nickname, pic, messegeHistory }) => {
                let lastMessegeIndex = messegeHistory.length - 1;
                return (
                    <button onClick={() => props.setActiveChatUsername(username)} key={username}>
                        <div className="chatlist_item">
                            <img src={pic} alt="#" />
                            <span className='chat_info'>
                                <span className='chat_meta' >
                                    <span className='nick'>{nickname}</span>
                                    <span className='time'>
                                        {(messegeHistory.length > 0) ? messegeHistory[lastMessegeIndex].time : ""}
                                    </span>
                                </span>
                                <span className='chat_msg'>
                                    {(messegeHistory.length > 0) ? messegeHistory[lastMessegeIndex].messege : ""}
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