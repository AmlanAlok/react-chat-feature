import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import Chat from './Chat/Chat';

function Dashboard() {

    const [userId, setUserId] = useState(1)
    const [showChatList, setShowChatList] = useState(false)
    // const [leftMenu, setLeftMenu] = useState(['Home', 'Chat'])
    const leftMenu = ['Home', 'Chat'];
    // const [chats, setChats] = useState([[
    const chats = [    
        {
          "receiverId": 2,
          "firstName": "Arya",
          "lastName": "Stark",
          "chatMessages": [
            {
              id: 1,
              senderId: 1,
              receiverId: 2,
              message: "Hi Arya",
              messageTimestamp: "2021-11-19T17:39:19.000+00:00"
            },
            {
              id: 2,
              senderId: 2,
              receiverId: 1,
              message: "Hi Jon",
              messageTimestamp: "2021-11-19T17:39:19.000+00:00"
            }
            ]
        
        },
        {
          "receiverId": 3,
          "firstName": "Sansa",
          "lastName": "Stark",
          "chatMessages": [
              {
                "id": 3,
                "senderId": 1,
                "receiverId": 3,
                "message": "Hi Sansa",
                "messageTimestamp": "2021-11-19T17:39:19.000+00:00"
              },
              {
                "id": 4,
                "senderId": 3,
                "receiverId": 1,
                "message": "Hi Jon",
                "messageTimestamp": "2021-11-19T17:39:19.000+00:00"
              }
            ]
        }
        ]
        
    // function toggleChatList() {
    //     console.log('inside toggleChatList')
    //     if (showChatList){
    //         setShowChatList(true)
    //     }
    //     else{
    //         setShowChatList(false)
    //     }
    // }

    return (
        <div>
            <div className="row">
                Dashboard - userId = {userId}
            </div>
            <div class="row">
                <div className ="col-sm-3 a left-position">
                    <div>
                        <button onClick={() => setShowChatList(!showChatList)} >Chat</button>
                        {/* <button onClick={() => setShowChatList(console.log(typeof(chats)))} >Chat</button> */}
                        {/* <button onClick={() => setShowChatList(console.log(chats))} >Chat</button> */}
                    </div>
                    {/* {chats} */}
                </div>

                {/* <div className ="col-sm-9 b right-position"> */}
                <div className = "col-sm-9 c">
                    {showChatList && <Chat chats = {chats}/>}
                </div>
            </div>
            

            {/* <div>
                Data list
            </div> */}
                
            {/* </div> */}
            
        </div>
    );
}

export default Dashboard;