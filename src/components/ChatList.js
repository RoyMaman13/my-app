import React from 'react'
import './ChatList.css'
import ChatListItems from './ChatListItems'
import { useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'

const ChatList = (props) => {

    //popup useState.
    const [show, setShow] = useState(false);
    const handleShow = () => { setShow(true); }
    const handleClose = () => { setShow(false); }

    const [chats, setChats] = useState(props.chats)

    const createNewChat = (event) => {
        event.preventDefault();
        let updatedChats = [...chats];
        updatedChats.push({
            nickname: 'Yonatan',
            pic: 'https://img.icons8.com/fluency/344/person-male.png',
            messegeHistory: [
                {
                    from: '',
                    messege: 'Hello',
                    time: '16:00, 10/4/2022'
                },
                {
                    from: 'other',
                    messege: 'How are you ?',
                    time: '16:10, 10/4/2022'
                },
                {
                    from: '',
                    messege: 'great',
                    time: '16:11, 10/4/2022'
                }
            ]
        })
        setChats(updatedChats);
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
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <FloatingLabel label="Contact's Identifier">
                                    <Form.Control placeholder="Contact's Identifier"></Form.Control>
                                </FloatingLabel>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
                <ChatListItems chats={chats} />
            </div>
        </div>
    )
}

export default ChatList