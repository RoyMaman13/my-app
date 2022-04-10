import { render } from '@testing-library/react';
import React, { useState } from 'react'


let inMessage = null;


export const MessageScreen = (props) => {

    let Messeges = props.user.chats[0];
    let chatWith = props.user.chats[0].nickname;

    const [messegesHistory, setMessegesHistory] = useState(Messeges.messegeHistory)

    const SendMessage = (event) => {
        event.preventDefault();
        inMessage = document.getElementById("newMessage").value;
        let newMessage = [...messegesHistory];
        newMessage.push({
            from: '',
            messege: inMessage,
            time: '19:800'
        })
        setMessegesHistory(newMessage);
    }

    return (
        <form onSubmit={SendMessage}>
            <div>
                {messegesHistory.map(({ from, messege, time }) => {
                    let sender = (from !== '') ? chatWith : "Me";
                    return (
                        <div>
                            {sender + ": " + messege}
                        </div>
                    );
                })}
                <input type="text" id="newMessage" className="form-control" placeholder="Write a message" />


            </div>
        </form>
    );

}
export default MessageScreen