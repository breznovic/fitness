import React from 'react'
import Message from "./Message";

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const messageData = {
    avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3956291/pub_60365b7ea332dd7373c6d82b_60365bb0700da52db25acabf/scale_1200',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '20:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            <Message avatar={messageData.avatar} name={messageData.name} message={messageData.message} time={messageData.time} />

            <hr/>
           {/* для личного творчества, могу проверить
            <AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
