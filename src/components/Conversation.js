import React, { useState } from 'react'
import './Conversation.css'
import { Button, OverlayTrigger, Popover, Modal, Stack, Form } from 'react-bootstrap'

const Conversation = () => {
    const [showAttach, setShowAttach] = useState(false);

    const [showAttachRecord, setShowAttachRecord] = useState(false);
    const [showAttachImg, setShowAttachImg] = useState(false);
    const [showAttachVideo, setShowAttachVideo] = useState(false);



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

            {/* Modal (Popup screen) for attaching record. */}
            <Modal
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


            <div className='conv_display'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam ullam nemo beatae natus impedit molestiae consequatur eaque enim alias ad. Doloremque nesciunt quidem in totam aperiam facilis quas voluptatem expedita labore obcaecati laudantium voluptatibus, quos, dolores veritatis quae facere libero ipsam numquam! Quibusdam odit assumenda ad laborum incidunt ratione et minus. Molestias sit necessitatibus, nobis assumenda quas natus alias. Ipsa necessitatibus at ducimus debitis, veniam velit adipisci excepturi tempora nisi inventore in atque ipsum quisquam nesciunt nemo temporibus ad odit totam neque dolore! Ad a laborum repudiandae et exercitationem ex, eius dolorum praesentium aut, dolorem dicta expedita libero reprehenderit amet perspiciatis quas debitis facere atque, ducimus laudantium magnam repellat voluptas! Earum ad temporibus nobis et eligendi exercitationem iure corporis tempore quia laborum dolorem aut vel unde, repellendus amet ullam expedita, molestias nihil hic maxime atque consectetur ab? Quis provident odio fuga neque ad mollitia sapiente perferendis rem consequatur libero animi, impedit, aperiam accusantium ducimus nostrum laborum praesentium! Reiciendis omnis expedita doloremque eligendi dolor facere eveniet voluptatibus eum, mollitia neque aspernatur quae distinctio suscipit voluptate, a hic autem laborum exercitationem quod perspiciatis cumque? Eos perspiciatis sint unde quasi modi asperiores. Fugiat tempora odit reiciendis voluptatem! Asperiores reprehenderit numquam dolores quisquam modi corrupti, mollitia accusantium laudantium eveniet nulla sint magni fugit voluptatem totam placeat vitae facilis alias dolore, aliquam dolorem corporis optio deserunt autem! Voluptas beatae repudiandae doloremque odit perferendis soluta tenetur enim distinctio consequatur, voluptatum deserunt minima voluptatibus delectus facere vitae qui culpa laborum praesentium illum sint ea? Eius illum voluptatibus perspiciatis amet autem officiis perferendis? Labore ullam, nisi adipisci nemo, culpa voluptatem amet eligendi aliquid ea nulla libero quo, iusto fugit. Harum praesentium, quibusdam placeat quas nesciunt nulla nihil repudiandae cumque, numquam quod sunt amet assumenda, eveniet molestiae? Ab aspernatur repudiandae mollitia, nesciunt iure numquam architecto facere officia eius possimus esse nihil deleniti accusantium tempore commodi iusto, reprehenderit aperiam, aliquid cum inventore maxime repellendus consequuntur quaerat placeat! Sit dolores excepturi culpa eveniet voluptatem dolor mollitia asperiores veniam accusantium. Quia suscipit ab corrupti voluptates rem commodi fuga iusto expedita aliquid aliquam distinctio quaerat vero eveniet, laborum at qui veritatis autem adipisci explicabo vitae doloribus inventore ad tempore. Ipsam, cum maxime non nobis eum saepe voluptates asperiores laborum repellat necessitatibus eos quaerat error praesentium ab sapiente blanditiis minus dolores, exercitationem ullam excepturi eligendi culpa! Consequatur quos laudantium obcaecati deserunt sit! Dolorem, dolores! Reprehenderit, illo repudiandae dolorem reiciendis corrupti quia consequatur rerum eveniet praesentium autem, adipisci, natus impedit quibusdam nobis perspiciatis cumque eum iste minima eius provident facilis delectus quod cupiditate at? Rem voluptatum eveniet accusamus blanditiis inventore necessitatibus fugiat nostrum, quibusdam adipisci cupiditate perspiciatis sed voluptatibus facilis, voluptas expedita magnam nesciunt quos qui dolore. Qui, deserunt cum. Facere eaque commodi ad officiis molestiae nobis dolorem perspiciatis fugit nihil tempora nam nostrum enim vel hic excepturi laboriosam, non illum pariatur tenetur esse corrupti ab porro. Accusamus, nisi? Pariatur soluta inventore obcaecati labore odit dolore, tempora voluptates nesciunt, architecto numquam aliquam velit asperiores incidunt aliquid reiciendis iusto aut expedita sint? Fugiat obcaecati repellendus minus doloribus molestiae sed dolores voluptatibus harum pariatur voluptate corrupti possimus repudiandae culpa excepturi, facere quod quo ex cumque mollitia magnam labore rem et nobis! Optio rerum dolores itaque sit dicta laborum sunt veritatis, illum neque temporibus accusamus officiis cumque a ipsa natus nostrum nam doloremque nesciunt vitae! Consequatur, fugiat atque. Magni necessitatibus quam porro impedit quod sunt at obcaecati. Aliquam doloribus error dolores iusto neque, praesentium laborum magni natus voluptates provident suscipit repudiandae minus, officiis reiciendis maiores hic itaque dolorem. Dolorum possimus mollitia quasi sed cum a ea, quo nulla temporibus in aliquam inventore odit quis est perferendis ipsum aut magnam minus. Eaque ea ipsa sunt deleniti distinctio saepe repellendus, optio tenetur esse adipisci ratione cupiditate dolore molestias explicabo odit qui corporis, quibusdam laboriosam, vitae in dignissimos maiores necessitatibus eligendi? Quia, architecto ducimus quisquam illum vitae quod enim modi nihil id corrupti error in adipisci veritatis deleniti qui iste nesciunt nulla debitis voluptatum beatae repellat sequi. Iusto similique officia error odit consectetur sed? Ab animi consequuntur quod vero saepe unde, et nostrum sint similique. Dolor maxime illum ipsa dolores aperiam ducimus magni eveniet quidem fugit voluptatem nemo at fuga culpa, consequatur laudantium recusandae neque temporibus laboriosam suscipit iure accusamus atque aspernatur? Necessitatibus laboriosam sunt eveniet iste vitae nam quisquam dolorem, accusantium ea inventore quas dolorum, voluptatibus similique fuga voluptates quasi iure eos rem pariatur, culpa consequatur recusandae asperiores officia aliquam? Fugit nesciunt esse ipsum repudiandae sunt necessitatibus est. Vel distinctio autem expedita natus officia quisquam excepturi molestiae ad voluptatibus veniam ullam eos, fugit totam illo adipisci nam consequatur facilis atque cumque non enim quod voluptatem voluptas nostrum! Excepturi, qui possimus! Consequatur possimus, mollitia odit, expedita veritatis quisquam doloremque fugit perspiciatis odio rem rerum pariatur est hic nam! Maiores commodi praesentium cumque ducimus porro adipisci voluptate quod, a assumenda aliquam ipsum ab, labore nihil, temporibus eius et voluptatem. Harum incidunt amet, mollitia, aspernatur adipisci perspiciatis quaerat, ea unde at illo nemo aliquam doloribus. Quia, vitae itaque eum temporibus culpa reiciendis repellendus ut, voluptatem, eaque autem iure neque placeat maiores sed possimus vel iusto nam dolorum eligendi totam? Asperiores quis officiis magnam, maiores hic reprehenderit nisi quae ipsa, cum ab, iste necessitatibus adipisci possimus inventore obcaecati odio est eum unde ducimus recusandae minus soluta veniam sit? Amet, iste quis. A voluptatibus impedit illo laudantium veritatis non accusantium, nostrum eaque vel numquam laborum quidem delectus dolorum quis quasi ex fugit odio id repellat maiores enim nisi velit. Eos quam voluptates rem. Eveniet tenetur repellendus odit tempore omnis adipisci perferendis, dolores quam praesentium voluptatibus nesciunt nulla repudiandae, facilis necessitatibus atque, placeat inventore? Impedit, omnis, perferendis minus illo ullam optio iusto a odio libero quasi aperiam blanditiis repellat accusamus laboriosam. A obcaecati necessitatibus laborum sequi vel odio illum error, amet quaerat ducimus quis beatae, ipsa eius et mollitia qui animi. Quae at aperiam deleniti delectus perspiciatis cupiditate officiis cum perferendis eveniet dolorem sint quasi, aut quisquam autem suscipit molestias voluptatem debitis voluptas velit sunt nostrum facere, animi similique. Saepe accusamus praesentium harum impedit a perspiciatis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci nesciunt laudantium placeat quidem corporis laborum quae eaque reprehenderit optio. Vitae eaque soluta, ipsum aut unde libero labore earum officia.
            </div>
            <div className='conv_footer'>
                <Stack direction="horizontal" gap={3}>
                    <Form.Control className="me-auto" placeholder="Enter your messege..." />
                    <OverlayTrigger show={showAttach} placement='top-start' overlay={popover}>
                        <Button variant='' onClick={() => setShowAttach(true)}>
                            <img className='attachIcon' src="attachIcon.png" alt="#" height='30' />
                        </Button>
                    </OverlayTrigger>
                    <div className="vr" />
                    <Button variant="secondary">Submit</Button>
                </Stack>
            </div>
        </div >
    )
}

export default Conversation