import React, { useState } from 'react'
import "./chatContent.css";




let inMessage = null;
let inPicture = null;


export const MessageScreen = (props) => {

    let Messeges = props.chats;
    let chatWith = props.chats.nickname;

    const [messegesHistory, setMessegesHistory] = useState(Messeges.messegeHistory)
    const [selectedImage, setSelectedImage] = useState(null);

    const SendMessage = (event) => {
        event.preventDefault();
        inMessage = document.getElementById("newMessage").value;
        document.getElementById("newMessage").value = '';
        // let newMessage = [...messegesHistory];
        Messeges.messegeHistory.push({
            type: 'text',
            from: '',
            messege: inMessage,
            time: '19:00'
        })
        // setMessegesHistory(newMessage);
    }
    const uploadImage = (event) => {
        event.preventDefault();
        inPicture = URL.createObjectURL(selectedImage);
        // let newMessage = [...messegesHistory];
        Messeges.messegeHistory.push({
            type: 'photo',
            from: '',
            messege: inPicture,
            time: '2:00'
        })
        // setMessegesHistory(newMessage);
    }

    return (
        <form onSubmit={SendMessage}>
            <div>
                <span className='conversation'>
                    {Messeges.messegeHistory.map(({ type, from, messege, time }) => {
                        let sender = (from !== '') ? chatWith : "Me";
                        if (sender !== 'Me') {
                            if (type == 'photo') {
                                return (
                                    /*other picture*/
                                    <div className="content__footer">
                                        <div className="chat__item__content">
                                            <div className="chat__item-friend">
                                                <div>
                                                    {sender + ':'}
                                                    <img src={messege} className="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            else {
                                return (
                                    /*other text*/
                                    <div className="content__footer">
                                        <div className="chat__item__content">
                                            <div className="chat__item-friend">
                                                <div>
                                                    {sender + ": " + messege}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        }
                        else {
                            /*my picture*/
                            if (type == 'photo') {
                                return (
                                    <div className="content__footer">
                                        <div className="chat__item__me">
                                            <div className="chat__item">
                                                <div>
                                                    {sender + ':'}
                                                    <img src={messege} className="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            else {
                                return (
                                    /*my text*/
                                    <div className="content__footer">
                                        <div className="chat__item__me">
                                            <div className="chat__item">
                                                <div>
                                                    {sender + ": " + messege}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        }
                    })}

                </span>
                <div className="content__footer">
                    <input type="text" id="newMessage" className="sendNewMessage" placeholder="Write a message" data-inline="true" />
                    <input type='file' accept="image/*" onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }} />
                    <button onClick={uploadImage}>
                        Upload!
                    </button>

                </div>

            </div >
        </form >
    );

}
export default MessageScreen