import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { useHistory, useParams } from 'react-router-dom';
import Chat from './Chat/Chat';

function Dashboard() {

    // const [userId, setUserId] = useState(props.userId)
    const {userId} = useParams();
    const [showChatList, setShowChatList] = useState(false)
    // const [leftMenu, setLeftMenu] = useState(['Home', 'Chat'])
    const [chats, setChats] = useState([])
    
    // const chats1 = [    
    //     {
    //       "receiverId": 2,
    //       "firstName": "Arya",
    //       "lastName": "Stark",
    //       "chatMessages": [
    //         {
    //           id: 1,
    //           senderId: 1,
    //           receiverId: 2,
    //           message: "Hi Arya",
    //           messageTimestamp: "2021-11-19T17:39:19.000+00:00"
    //         },
    //         {
    //           id: 2,
    //           senderId: 2,
    //           receiverId: 1,
    //           message: "Hi Jon",
    //           messageTimestamp: "2021-11-19T17:39:19.000+00:00"
    //         }
    //         ]
        
    //     },
    //     {
    //       "receiverId": 3,
    //       "firstName": "Sansa",
    //       "lastName": "Stark",
    //       "chatMessages": [
    //           {
    //             "id": 3,
    //             "senderId": 1,
    //             "receiverId": 3,
    //             "message": "Hi Sansa",
    //             "messageTimestamp": "2021-11-19T17:39:19.000+00:00"
    //           },
    //           {
    //             "id": 4,
    //             "senderId": 3,
    //             "receiverId": 1,
    //             "message": "Hi Jon",
    //             "messageTimestamp": "2021-11-19T17:39:19.000+00:00"
    //           }
    //         ]
    //     }
    //     ]
    // const chats2 = [    
    //     {
    //       "receiverId": 1,
    //       "firstName": "Jon",
    //       "lastName": "Snow",
    //       "chatMessages": [
    //         {
    //           id: 1,
    //           senderId: 1,
    //           receiverId: 2,
    //           message: "Hi Arya",
    //           messageTimestamp: "2021-11-19T17:39:19.000+00:00"
    //         },
    //         {
    //           id: 2,
    //           senderId: 2,
    //           receiverId: 1,
    //           message: "Hi Jon",
    //           messageTimestamp: "2021-11-19T17:39:19.000+00:00"
    //         }
    //         ]
    //     },
    //     {
    //         "receiverId": 4,
    //         "firstName": "Bran",
    //         "lastName": "Stark",
    //         "chatMessages": [
    //           {
    //             id: 1,
    //             senderId: 4,
    //             receiverId: 2,
    //             message: "Hi Arya",
    //             messageTimestamp: "2021-11-19T17:39:19.000+00:00"
    //           },
    //           {
    //             id: 2,
    //             senderId: 2,
    //             receiverId: 4,
    //             message: "Hi Bran",
    //             messageTimestamp: "2021-11-19T17:39:19.000+00:00"
    //           }
    //           ]
    //       }
    //     ]

    useEffect(() => {
        console.log('Loading Dashboard')

        const chatUrl = 'http://34.127.76.90:8080/chats/userId/'+userId

        axios.get(chatUrl).then(res => {
            console.log(res)
            if (res.status === 200) {
                console.log(res.data)
                setChats(res.data.data.chats)
            }
            else {
                console.log('API call failed')
            }
        })

        // if (userId == 1){
        //     console.log('userId = 1')
        //     setChats(chats1)
        // }
        // else {
        //     console.log('userId = 2')
        //     setChats(chats2)
        // }
    }, []);

    

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
                    {showChatList && <Chat chats = {chats} userId={userId} />}
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