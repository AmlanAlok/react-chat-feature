import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { useHistory, useParams } from 'react-router-dom';
import Chat from './Chat/Chat';

function Dashboard() {

    // const [userId, setUserId] = useState(props.userId)
    const {userId} = useParams();
    const [showChatList, setShowChatList] = useState(false)
    const [chats, setChats] = useState([])

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