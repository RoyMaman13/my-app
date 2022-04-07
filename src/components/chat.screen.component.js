import React, { Component } from 'react'
import './ChatScreen.css'
import ChatList from './ChatList'


const ChatScreen = (props) => {
    return (
        <div className='container outer inner-chat '>
            <div className='wrapper'>
                <div><h1>ChatList</h1></div>
                {/* <div><ChatList /></div> */}
                <div><h1>ChatDisplay</h1></div>
            </div>
            {/* <div className='sidebar'> */}
            {/* <table> */}
            {/* <tr><td><div onClick={() => alert('1')}><img src="./defualtIcon.jpg" /></div></td></tr> */}
            {/* <tr><td><button> first chat</button></td></tr> */}
            {/* </table> */}
            {/* How to insert img: */}
            {/* <img src={URL.createObjectURL(props.user.pic)} /> */}

            {/* <button className='sticky-top'>chat !!!!</button> */}
            {/* </div> */}
        </div>
    )
}


export default ChatScreen;
