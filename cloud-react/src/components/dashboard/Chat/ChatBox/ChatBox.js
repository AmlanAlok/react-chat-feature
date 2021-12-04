import React, { useState, useEffect } from 'react'

function ChatBox(props) {

    const [newChatMessage,setNewChatMessage] = useState('')
    const [chatMessageList, setChatMessageList] = useState(props.receiverChatBoxData.chatMessages)

    function readNewChatMessage(e) {
        setNewChatMessage(e.target.value)
        console.log(newChatMessage)

    }

    function addNewChatToList(){
        
        let numOfChats = chatMessageList.length
        console.log('numOfchats =', numOfChats)
        let lastChat = chatMessageList[numOfChats-1];
        console.log(lastChat)
        let previousId = lastChat.id
        console.log('previousId =', previousId)
        let newChatObj = {
            id: previousId+1,
            senderId: 1,
            receiverId: props.receiverChatBoxData.receiverId,
            message: newChatMessage
        }
        console.log(newChatObj)
        let newChatMsgArray = chatMessageList.concat(newChatObj);
        setChatMessageList(newChatMsgArray)
        setNewChatMessage('')
    }

    return (
        <div>
            <div className = "chatBox-position">
                <div>
                    {props.receiverChatBoxData.firstName} {props.receiverChatBoxData.lastName}
                </div>
                <div>
                    {chatMessageList.map(chat => {
                        return (
                            <div key = {chat.id}>{chat.message}</div>
                        )
                    }

                    )}
                </div>
                
                <div>
                    <input onChange={readNewChatMessage} value={newChatMessage} type="text"></input>
                    <button className="btn btn-primary" onClick = {addNewChatToList}>Send</button>
                </div>
                
            </div>
        </div>
    )
}

export default ChatBox;