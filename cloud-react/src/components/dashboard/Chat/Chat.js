import React, { useState, useEffect } from 'react';
import ChatBox from './ChatBox/ChatBox';

function Chat(props) {

    const [showChatBox, setShowChatBox] = useState(false);
    const [receiverChatBoxData, setReceiverChatBoxData] = useState([]);

    function openChatBox(receiver){

        setReceiverChatBoxData(receiver)
        setShowChatBox(!showChatBox)
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-4">
                    
                    { props.chats.map(receiver => {
                        return (
                            // <div>
                            // <button key = {receiver.receiverId} onClick = {openChatBox(receiver)}>  // This line is an issue
                            // https://stackoverflow.com/questions/59304283/error-too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-in?rq=1
                                <button key = {receiver.receiverId} onClick = {() => openChatBox(receiver)}>{receiver.firstName} {receiver.lastName}</button>
                            
                        )
                    })}
                </div>
                <div className="col-sm-8">
                    {showChatBox && <ChatBox receiverChatBoxData = {receiverChatBoxData} />}
                </div>
            </div>
        </div>
    )
}

export default Chat;