import React from "react";
import ScrollToBottum from 'react-scroll-to-bottom';
import Message from "./Message/Message";
import './Messages.css';

const Messages =({messages, name}) => {
    return (
        <ScrollToBottum className="messages">
            {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
        </ScrollToBottum>
    )
};

export default Messages;