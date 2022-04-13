import React, { useRef } from 'react'
import './ChatList.css'
import ChatListItems from './ChatListItems'
import { useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'

const ChatList = (props) => {

    //popup useState.
    const [show, setShow] = useState(false);
    const handleShow = () => { setShow(true); }
    const handleClose = () => { setShow(false); }

    const createNewChat = (event) => {
        event.preventDefault();
        let newContact = document.getElementById('newContact').value;
        const found = props.updateData.find(({ username }) => username === newContact);
        if (found === undefined) {
            alert("Username does not exist!");
            return;
        }
        if (props.chats.find(({ username }) => found.username === username) !== undefined) {
            alert("Already exist !");
            handleClose();
            return;
        }
        props.chats.push({
            username: found.username,
            nickname: found.nickname,
            pic: found.pic,
            messegeHistory: []
        })
        handleClose();
    }

    return (
        <div className='chat-list'>
            <div className='chatlist-header'>
                <img src={props.user.pic} alt="#" />
                {props.user.nickname}
                <button className='popup' variant="" onClick={handleShow}>
                    <img src="https://cdn-icons.flaticon.com/png/512/2076/premium/2076218.png?token=exp=1649585401~hmac=9644db6aef7f660f9b0e69e9f3353a80" alt="#" />
                </button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new contact</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={createNewChat}>
                        <Modal.Body>
                            <FloatingLabel label="Contact's Identifier">
                                <Form.Control id='newContact' placeholder="Contact's Identifier" />
                            </FloatingLabel>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={createNewChat}>
                                Add
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
                <ChatListItems chats={props.chats} />
            </div>
        </div>
    )
}

export default ChatList