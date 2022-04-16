import React, { useState } from 'react'
import './Conversation.css'
import "./chatContent.css";
import { Button, OverlayTrigger, Popover, Modal, Stack, Form } from 'react-bootstrap'
import useRecorder from './useRecorder'

let inMessage = null;
let inPicture = null;
let inVideo = null;
let inRecord = null;


const Conversation = (props) => {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    let Messeges = props.user.chats[props.chats.id];
    let chatWith = props.user.chats[props.chats.id].nickname;

    const [messegesHistory, setMessegesHistory] = useState(Messeges.messegeHistory)
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);


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
    const uploadImage = (event) => {
        event.preventDefault();
        inPicture = URL.createObjectURL(selectedImage);
        let newMessage = [...messegesHistory];
        newMessage.push({
            type: 'photo',
            from: '',
            messege: inPicture,
            time: '2:00'
        })
        setMessegesHistory(newMessage);
        setShowAttachImg(false);
    }
    const uploadVideo = (event) => {
        event.preventDefault();
        inVideo = URL.createObjectURL(selectedVideo);
        let newMessage = [...messegesHistory];
        newMessage.push({
            type: 'video',
            from: '',
            messege: inVideo,
            time: '2:00'
        })
        setMessegesHistory(newMessage);
        setShowAttachVideo(false);
    }
    const uploadRecord = (event) => {
        event.preventDefault();
        inRecord = audioURL;
        let newMessage = [...messegesHistory];
        newMessage.push({
            type: 'audio',
            from: '',
            messege: inRecord,
            time: '2:00'
        })
        setMessegesHistory(newMessage);
        setShowAttachRecord(false);
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
            <div className="conv_display">
                {messegesHistory.map(({ type, from, messege, time }) => {
                    let sender = (from !== '') ? chatWith : "Me";
                    if (sender !== 'Me') {
                        if (type == 'photo') {
                            return (
                                /*other picture*/
                                <div className="chat__item__content">
                                    <div className="chat__item-friend">
                                        <div>
                                            {sender + ':'}
                                            <img src={messege} className="img" />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else if (type == 'video') {
                            return (
                                /*other video*/
                                <div className="chat__item__content">
                                    <div className="chat__item-friend">
                                        <div>
                                            {sender + ':'}
                                            <video width="360" height="250" controls>
                                                <source src={messege} type="video/mp4"></source>
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else if (type == 'audio') {
                            return (
                                /*my audio*/
                                <div className="chat__item__content">
                                    <div className="chat__item-friend">
                                        <div>
                                            {sender + ':'}
                                            <audio src={messege} controls> </audio>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else {
                            return (
                                /*other text*/
                                <div className="chat__item__content">
                                    <div className="chat__item-friend">
                                        <div>
                                            {sender + ": " + messege}
                                        </div>
                                    </div>
                                </div>

                            );
                        }
                    }
                    else {
                        if (type == 'photo') {
                            return (
                                /*my picture*/
                                <div className="chat__item__me">
                                    <div className="chat__item">
                                        <div>
                                            {sender + ':'}
                                            <img src={messege} className="img" />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else if (type == 'video') {
                            return (
                                /*my video*/
                                <div className="chat__item__me">
                                    <div className="chat__item">
                                        <div>
                                            {sender + ':'}
                                            <video width="360" height="250" controls>
                                                <source src={messege} type="video/mp4"></source>
                                            </video>

                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else if (type == 'audio') {
                            return (
                                /*my audio*/
                                <div className="chat__item__me">
                                    <div className="chat__item">
                                        <div>
                                            {sender + ':'}
                                            <audio src={messege} controls> </audio>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else {
                            return (
                                /*other texrt*/
                                <div>
                                    <div className="chat__item__me">
                                        <div className="chat__item">
                                            {sender + ": " + messege}
                                        </div>
                                    </div>
                                </div>

                            );
                        }
                    }
                })
                }
            </div>

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
                        <Button variant="secondary" onClick={startRecording} disabled={isRecording}>Start</Button>
                        <Button variant="secondary" onClick={stopRecording} disabled={!isRecording}>stop</Button>
                        <div className="vr" />
                        <Button variant="secondary" onClick={uploadRecord}>Send</Button>
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
                        <Form.Control type="file" accept="image/*" onChange={(event) => {
                            console.log(event.target.files[0]);
                            setSelectedImage(event.target.files[0]);
                        }} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={uploadImage}>
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
                            <Form.Control type="file" accept="video/*" onChange={(event) => {
                                console.log(event.target.files[0]);
                                setSelectedVideo(event.target.files[0]);
                            }} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={uploadVideo}>
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