import React from 'react'

export const MessageScreen = (props) => {
    return (

        <div>
            {props.chats.map(({ nickname, pic, messegeHistory }) => {
                let lastMessegeIndex = messegeHistory.length - 1;
                return (
                    <div className="chatlist__items">
                        <img src={pic} alt="#" />
                        {nickname}
                        <p>{messegeHistory[lastMessegeIndex].time}</p>
                        <p>{messegeHistory[lastMessegeIndex].messege}</p>
                    </div>
                );
            })}
        </div>
    )
}
export default MessageScreen