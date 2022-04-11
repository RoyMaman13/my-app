import { render } from '@testing-library/react';
import React, { useState } from 'react'
import "./chatContent.css";



let inMessage = null;


export const MessageScreen = (props) => {

    let Messeges = props.user.chats[0];
    let chatWith = props.user.chats[0].nickname;

    const [messegesHistory, setMessegesHistory] = useState(Messeges.messegeHistory)

    const SendMessage = (event) => {
        event.preventDefault();
        inMessage = document.getElementById("newMessage").value;
        document.getElementById("newMessage").value = '';
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
                    if (sender !== 'Me') {
                        return (
                            <div className="chat__item__content">
                                <div className="chat__item-friend">
                                    <div className="chat__meta">
                                        <div>
                                            {sender + ": " + messege}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    else {
                        return (
                            <div className="chat__item__me">
                                <div className="chat__item">
                                    <div>
                                        {sender + ": " + messege}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}

                <div className="content__footer">
                    <input type="text" id="newMessage" className="sendNewMessage" placeholder="Write a message" />
                </div>

            </div>
        </form>
    );

}
export default MessageScreen