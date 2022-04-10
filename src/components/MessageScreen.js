import React from 'react'

export const MessageScreen = (props) => {
    let messeges = props.user.chats[0];
    let chatWith = props.user.chats[0].nickname;
    console.log(messeges)
    console.log(chatWith)
    return (
        <div>
            {messeges.messegeHistory.map(({ from, messege, time }) => {
                let sender = (from !== '') ? chatWith : "Me";
                return (
                    <div>
                        {sender + ": "}
                        {messege}
                    </div>
                );
            })}
        </div>
    )
}
export default MessageScreen