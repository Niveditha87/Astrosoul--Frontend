import React from 'react'
import Message from './Message'

const Messages = () => {
    return (
        <div className='messages bg-orange-100 p-10 h-[30rem] overflow-y-scroll scrollbar-thin
    scrollbar-thumb-orange-300 '>
            <Message />
            <Message />

            <Message />
            <Message />
            <Message />
            <Message />

        </div>
    )
}

export default Messages