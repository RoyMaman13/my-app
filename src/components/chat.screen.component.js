import React, { Component } from 'react'
import './chat.screen.css'


const ChatScreen = (props) => {
    return (
        <div className='container outer inner-chat '>
            <div className='sidebar'>
                <table>
                    <tr><td><div onClick={() => alert('1')}><img src="./defualtIcon.jpg" /></div></td></tr>
                    <tr><td><button> first chat</button></td></tr>
                </table>
                {/* How to insert img: */}
                {/* <img src={URL.createObjectURL(props.user.pic)} /> */}

                {/* <button className='sticky-top'>chat !!!!</button> */}
            </div>
        </div>
    )
}


export default ChatScreen;
