import React, { useState } from 'react'
import './Conversation.css'
import { Button, OverlayTrigger, Popover, Modal, Stack, Form } from 'react-bootstrap'

let inMessage = null;
let inPicture = null;

const Conversation = (props) => {
    let Messeges = props.user.chats[0];
    let chatWith = props.user.chats[0].nickname;

    const [messegesHistory, setMessegesHistory] = useState(Messeges.messegeHistory)
    const [selectedImage, setSelectedImage] = useState(null);


    const [showAttach, setShowAttach] = useState(false);
    const [showAttachRecord, setShowAttachRecord] = useState(false);
    const [showAttachImg, setShowAttachImg] = useState(false);
    const [showAttachVideo, setShowAttachVideo] = useState(false);

    const SendMessage = (event) => {
        event.preventDefault();
        inMessage = document.getElementById("newMessage").value;
        document.getElementById("newMessage").value = '';
        let newMessage = [...messegesHistory];
        newMessage.push({
            type: 'text',
            from: '',
            messege: inMessage,
            time: '19:00'
        })
        setMessegesHistory(newMessage);
    }


    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Attach:</Popover.Header>
            <Popover.Body>
                <Button variant='' >
                    <img
                        src="recordIcon.png"
                        alt="#"
                        height='30'
                        onClick={() => { setShowAttachRecord(true); setShowAttach(false); }} />
                </Button>
                <Button
                    variant=''>
                    <img
                        src="imageIcon.png"
                        alt="#"
                        height='30'
                        onClick={() => { setShowAttachImg(true); setShowAttach(false); }} />
                </Button>
                <Button
                    variant=''>
                    <img
                        src="videoIcon.png"
                        alt=""
                        height='30'
                        onClick={() => { setShowAttachVideo(true); setShowAttach(false); }} />
                </Button>
            </Popover.Body>
        </Popover>
    );
    return (

        <div className='conversation'>

            {messegesHistory.map(({ type, from, messege, time }) => {
                let sender = (from !== '') ? chatWith : "Me";
                if (sender !== 'Me') {
                    return (
                        <div className="conv_display">
                            <div>
                                {sender + ": " + messege}
                            </div>
                        </div>
                    );
                }
                else {
                    return (
                        <div className="conv_display">
                            <div>
                                {sender + ": " + messege}
                            </div>
                        </div>
                    );
                }
            })
            }


            {/* Modal (Popup screen) for attaching record. */}
            < Modal
                show={showAttachRecord}
                onHide={() => setShowAttachRecord(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Attach record:</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Stack direction="horizontal" className='col-md-5 mx-auto' gap={3}>
                        <Button variant="secondary">Start</Button>
                        <div className="vr" />
                        <Button variant="secondary">Send</Button>
                    </Stack>
                </Modal.Body>
            </Modal>

            {/* Modal (Popup screen) for attaching img. */}
            <Modal
                show={showAttachImg}
                onHide={() => setShowAttachImg(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Attach image:</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form.Group className="mb-3">
                        <Form.Control type="file" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal (Popup screen) for attaching video. */}
            <>
                <Modal
                    show={showAttachVideo}
                    onHide={() => setShowAttachVideo(false)}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Attach video:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Form.Group className="mb-3">
                            <Form.Control type="file" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary">
                            Send
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className='conv_footer'>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control className="me-auto" id="newMessage" placeholder="Enter your messege..." />
                        <OverlayTrigger show={showAttach} placement='top-start' overlay={popover}>
                            <Button variant='' onClick={() => setShowAttach(true)}>
                                <img className='attachIcon' src="attachIcon.png" alt="#" height='30' />
                            </Button>
                        </OverlayTrigger>
                        <div className="vr" />
                        <Button variant="secondary" onClick={SendMessage}>Submit</Button>
                    </Stack>
                </div>
            </>
        </div >

    )
}

export default Conversation