import React from 'react'
import {messageData} from './HW1'
import classes from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={classes.message}>
            <div>
                <img src={messageData.avatar}/>
            </div>
            <div>
                <p className={classes.name}>{messageData.name}</p>
                <span className={classes.messageC}>{messageData.message}</span>
            </div>
            <div className={classes.time}>{messageData.time}</div>
        </div>
    )
}

export default Message
