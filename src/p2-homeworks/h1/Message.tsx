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
            <div className={classes.avatar}>
                <img src={messageData.avatar}/>
            </div>
            <div className={classes.messageC}>
                <div className={classes.messageB}>
                    <div className={classes.name}>{messageData.name}</div>
                    <div className={classes.messageU}>{messageData.message}</div>
                </div>
            </div>
            <div className={classes.time}>
                <div>{messageData.time}</div>
            </div>
        </div>
            )
            }

            export default Message
