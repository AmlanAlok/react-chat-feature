import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

function ChatBox(props) {

    const [newChatMessage,setNewChatMessage] = useState('')
    const [chatMessageList, setChatMessageList] = useState(props.receiverChatBoxData.chatMessages)

    let ip_address = '127.0.0.1';
    let socket_port = '9000';
    let socket = io(ip_address + ':' + socket_port);
    
    socket.on('sendChatToReceiverFromSender', (receivedChatMsg, receiverId, senderId) => {
        console.log('inside sendChatToReceiverFromSender')
        console.log(receivedChatMsg, receiverId, senderId)
        if (props.userId == receiverId && props.receiverChatBoxData.receiverId == senderId){
            console.log('inside if')
            let numOfChats = chatMessageList.length
            console.log('numOfchats =', numOfChats)
            let lastChat = chatMessageList[numOfChats-1];
            console.log(lastChat)
            let previousId = lastChat.id
            console.log('previousId =', previousId)
            let newDisplayChatObj = {
                id: previousId+1,
                senderId: senderId,
                receiverId: receiverId,
                message: receivedChatMsg
            }
            console.log(newDisplayChatObj)
            let newDisplayChatMsgArray = chatMessageList.concat(newDisplayChatObj);
            setChatMessageList(newDisplayChatMsgArray)

        }
        else{
            console.log('inside else')
        }
    })

    function sendChatMessageToReceiver(message, senderUserId, receiverUserId) {
        // let socket = io(ip_address + ':' + socket_port);
        socket.emit('sendMsgFromSenderToReceiver', message, senderUserId, receiverUserId);

        // socket.on('sendChatToReceiverFromSender', (receivedChatMsg, receiverId, senderId) => {
        //     console.log('inside sendChatToReceiverFromSender')
        //     if (props.userId == receiverId && props.receiverChatBoxData.receiverId == senderId){
        //         console.log('inside if')
        //         let numOfChats = chatMessageList.length
        //         console.log('numOfchats =', numOfChats)
        //         let lastChat = chatMessageList[numOfChats-1];
        //         console.log(lastChat)
        //         let previousId = lastChat.id
        //         console.log('previousId =', previousId)
        //         let newDisplayChatObj = {
        //             id: previousId+1,
        //             senderId: senderId,
        //             receiverId: receiverId,
        //             message: newChatMessage
        //         }
        //         console.log(newDisplayChatObj)
        //         let newDisplayChatMsgArray = chatMessageList.concat(newDisplayChatObj);
        //         setChatMessageList(newDisplayChatMsgArray)

        //     }
        //     else{
        //         console.log('inside else')
        //     }
        // })
    }

    // useEffect(() => {
    //     // if (newChatMessage !== ''){
    //     //     socket = io(ip_address + ':' + socket_port);
    //     // }
    //     socket = io(ip_address + ':' + socket_port);
    // }, []);

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
            senderId: props.userId,
            receiverId: props.receiverChatBoxData.receiverId,
            message: newChatMessage
        }
        console.log(newChatObj)
        let newChatMsgArray = chatMessageList.concat(newChatObj);
        setChatMessageList(newChatMsgArray)
        sendChatMessageToReceiver(newChatObj.message, newChatObj.senderId, newChatObj.receiverId)
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
                            props.userId == chat.senderId ? (<div className = "chat-sender-position" key = {chat.id}>{chat.message}</div>) : 
                            (<div className = "chat-receiver-position" key = {chat.id}>{chat.message}</div>)
                        )
                    }

                    )}
                </div>
                
                <div>
                    <input onChange={readNewChatMessage} value={newChatMessage} type="text"></input>
                    <button className="btn btn-primary" onClick = {addNewChatToList}>Send</button>
                </div>
                
            </div>
            
            <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
            <script src="https://cdn.socket.io/4.0.1/socket.io.min.js" integrity="sha384-LzhRnpGmQP+lOvWruF/lgkcqD+WDVt9fU3H4BWmwP5u5LTmkUGafMcpZKNObVMLU" crossorigin="anonymous"></script>

            {/* <script>
                let ip_address = '127.0.0.1';
                let socket_port = '9000';
                // const socket = io(ip_address + ':' + socket_port);
                const socket = io('http://localhost:9000')

                 function sendChatMessageToReceiver(message, senderUserId, receiverUserId) {

                    socket.emit('sendMsgFromSenderToReceiver', message, senderUserId, receiverUserId)
                }
            </script> */}
        </div>
    )
}

export default ChatBox;