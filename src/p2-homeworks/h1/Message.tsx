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

            <img src={messageData.avatar} className={classes.avatar}/>

            <div className={classes.angle}/>
            <div className={classes.content}>
                <div className={classes.name}>{messageData.name}</div>
                <div className={classes.text}>{messageData.message}</div>
                <div className={classes.time}>
                    <div>{messageData.time}</div>
                </div>
            </div>
            </div>
            )
            }

            export default Message
