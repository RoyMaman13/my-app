import React, { Component } from 'react'

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 1,
            password: 1,
        }
    }
    render() {
        return (
            <div className='container outer inner-chat '>
                <h1>
                    {/* {this.state.username} */}
                    <br />
                    {/* {this.state.password} */}
                </h1>
            </div>
        )
    }
}
